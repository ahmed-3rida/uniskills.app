const { createClient } = require('@supabase/supabase-js');

module.exports = async function handler(req, res) {
    try {
        const supabaseUrl = process.env.VITE_SUPABASE_URL;
        const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseKey) {
            return res.status(500).send('Database credentials missing in Environment Variables.');
        }

        const supabase = createClient(supabaseUrl, supabaseKey);

        // Handle slug from query
        const slug = req.query.slug;
        if (!slug) {
            return res.status(400).send('Slug parameter is missing.');
        }

        // Fetch article
        const { data: article, error } = await supabase
            .from('articles')
            .select('*')
            .eq('slug', slug)
            .single();

        if (error || !article) {
            return res.status(404).send('Article not found.');
        }

        // Increment views (async, don't block)
        supabase.rpc('increment_article_views', { article_uuid: article.id }).catch(() => { });

        // Fetch recommended
        const { data: recommended } = await supabase
            .from('articles')
            .select('*')
            .neq('id', article.id)
            .order('views_count', { ascending: false })
            .limit(3);

        // Simple Markdown/Markup parser
        let contentHtml = article.content_ar || article.content || "";
        contentHtml = contentHtml.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #fff; font-weight: 800; font-size: 1.25rem; border-bottom: 2px solid #00d9ff; padding-bottom:2px; margin: 0 2px;">$1</strong>');
        contentHtml = contentHtml.replace(/\n/g, '<br>');

        const keywords = article.keywords ? article.keywords.split(',').map(k => `<span style="background:rgba(255,126,0,0.1); color:#ff7e00; padding:2px 10px; border-radius:5px; font-size:0.8rem; margin-left:8px; font-weight:600;">#${k.trim()}</span>`).join('') : '';

        const recHtml = (recommended || []).map(r => `
            <a href="/articles/${r.slug}" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); padding:15px; border-radius:15px; text-decoration:none; color:white; transition: 0.3s;">
                <img src="${r.cover_image || '/uniskills-logo.png'}" style="width:100%; height:160px; object-fit:cover; border-radius:10px; margin-bottom:12px;">
                <h3 style="color:#00d9ff; font-size:1.1rem; margin-bottom:8px;">${r.title_ar}</h3>
                <p style="font-size:0.85rem; color:#aaa;">${(r.short_description_ar || "").substring(0, 80)}...</p>
            </a>
        `).join('');

        const finalHtml = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title_ar}</title>
    <meta name="description" content="${article.short_description_ar || ''}">
    <link rel="icon" href="/uniskills-logo.ico">
    <link rel="stylesheet" href="/style.css">
    <style>
        body { background:#0A0E27; color:#fff; font-family:'Cairo', sans-serif; margin:0; }
        .nav { background:rgba(10,14,39,0.95); position:fixed; top:0; width:100%; z-index:100; padding:15px 0; border-bottom:1px solid rgba(255,255,255,0.05); }
        .container { max-width:850px; margin:0 auto; padding:0 20px; }
        .hero-img { width:100%; border-radius:15px; margin-top:100px; box-shadow:0 20px 40px rgba(0,0,0,0.3); }
        .article-body { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); padding:40px; border-radius:20px; font-size:1.15rem; line-height:1.9; margin-top:30px; letter-spacing: 0.02em; }
        .meta { display:flex; align-items:center; gap:15px; margin:25px 0; }
        .rec-grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap:20px; margin-top:40px; }
    </style>
</head>
<body>
    <nav class="nav">
        <div class="container" style="display:flex; justify-content:space-between; align-items:center;">
            <a href="/" style="display:flex; align-items:center; gap:10px; text-decoration:none; color:#00d9ff; font-weight:bold; font-size:1.2rem;">
                <img src="/uniskills.png" width="35"> UniSkills
            </a>
            <div style="display:flex; gap:20px;">
                <a href="/" style="color:#fff; text-decoration:none;">الرئيسية</a>
                <a href="/articles" style="color:#00d9ff; text-decoration:none; font-weight:bold;">المقالات</a>
            </div>
        </div>
    </nav>
    <div class="container">
        <img src="${article.cover_image || '/uniskills-logo.png'}" class="hero-img">
        <div class="meta">
            <span style="background:rgba(0,217,255,0.1); color:#00d9ff; padding:5px 15px; border-radius:20px; font-weight:bold;">👁 ${article.views_count || 0} مشاهدة</span>
            ${keywords}
        </div>
        <h1 style="font-size: clamp(2rem, 5vw, 3rem); color:#00d9ff; margin-bottom:20px; font-weight:900;">${article.title_ar}</h1>
        <div class="article-body">${contentHtml}</div>
        
        <h2 style="color:#00d9ff; margin-top:60px;">مقالات قد تعجبك</h2>
        <div class="rec-grid">${recHtml}</div>
        
        <div style="text-align:center; padding:60px 0;">
            <a href="/articles" style="background:#00d9ff; color:#0A0E27; padding:12px 40px; border-radius:30px; text-decoration:none; font-weight:bold; box-shadow:0 10px 20px rgba(0,217,255,0.2);">← العودة لجميع المقالات</a>
        </div>
    </div>
</body>
</html>`;

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.status(200).send(finalHtml);
    } catch (err) {
        res.status(500).send(`Critical Error: ${err.message}`);
    }
};
