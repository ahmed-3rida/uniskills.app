const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async function handler(req, res) {
    try {
        const slug = req.query.slug;

        if (!slug) {
            return res.status(400).send('Missing slug');
        }

        // Fetch article from the database based on the slug
        const { data: article, error } = await supabase
            .from('articles')
            .select('*')
            .eq('slug', slug)
            .single();

        if (error || !article) {
            return res.status(404).send('<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>المقال غير موجود</title></head><body style="background:#0A0E27; color: white; display:flex; justify-content:center; align-items:center; height:100vh; font-family:sans-serif;"><div><h1>المقال غير موجود</h1><a href="/articles" style="color:#00d9ff;">العودة للمقالات</a></div></body></html>');
        }

        // Increment views safely
        try {
            await supabase.rpc('increment_article_views', { article_uuid: article.id });
        } catch (e) {
            console.error("View increment failed", e);
        }

        // Fetch recommended
        const { data: recommended } = await supabase
            .from('articles')
            .select('*')
            .neq('id', article.id)
            .order('views_count', { ascending: false })
            .limit(3);

        let recommendedHtml = '';
        if (recommended && recommended.length > 0) {
            recommendedHtml = `
            <h2 style="margin-top: 60px; margin-bottom: 20px; color:#00d9ff;">مقالات مقترحة قد تعجبك</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
                ${recommended.map(rec => `
                    <a href="/articles/${rec.slug}" style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); text-decoration:none; color:white;">
                        <img src="${rec.cover_image || '/uniskills-logo.png'}" style="width:100%; height:150px; object-fit:cover; border-radius:8px;">
                        <h3 style="margin:15px 0 10px; font-size:1.1rem;">${rec.title_ar}</h3>
                        <p style="font-size:0.9rem; color:#ccc;">${(rec.short_description_ar || "").substring(0, 60)}...</p>
                    </a>
                `).join('')}
            </div>`;
        }

        // Simple Parser
        let contentHtml = article.content_ar || article.content || "";
        contentHtml = contentHtml.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#fff; font-size:1.2rem; border-bottom:2px solid #00d9ff;">$1</strong>');
        contentHtml = contentHtml.replace(/\n/g, '<br>');

        const keywordsHtml = article.keywords ? article.keywords.split(',').map(kw => `<span style="background:rgba(255,126,0,0.2); color:#ff7e00; padding:2px 8px; border-radius:4px; font-size:0.8rem; margin-left:5px;">#${kw.trim()}</span>`).join('') : '';

        const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title_ar}</title>
    <meta name="description" content="${article.short_description_ar || ''}">
    <link rel="icon" href="/uniskills-logo.ico">
    <link rel="stylesheet" href="/style.css">
    <style>
        body { background:#0A0E27; color:#fff; font-family:'Cairo', sans-serif; line-height:1.7; }
        .container { max-width:900px; margin:0 auto; padding:20px; }
        .glass { background:rgba(255,255,255,0.03); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:30px; }
        .cover { width:100%; border-radius:15px; margin-top:80px; margin-bottom:20px; }
        .navbar { position:fixed; top:0; left:0; right:0; background:rgba(10,14,39,0.9); z-index:1000; padding:15px 0; }
        .logo { display:flex; align-items:center; gap:10px; text-decoration:none; color:#00d9ff; font-weight:bold; }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container" style="display:flex; justify-content:space-between; align-items:center;">
            <a href="/" class="logo"><img src="/uniskills.png" width="35"><span>UniSkills</span></a>
            <div style="display:flex; gap:20px;">
                <a href="/" style="color:#fff; text-decoration:none;">الرئيسية</a>
                <a href="/articles" style="color:#00d9ff; text-decoration:none;">المقالات</a>
            </div>
        </div>
    </nav>
    <div class="container">
        <img src="${article.cover_image || '/uniskills-logo.png'}" class="cover">
        <div style="margin-bottom:20px; display:flex; align-items:center; gap:15px;">
            <span style="color:#00d9ff; font-weight:bold;">👁 ${article.views_count || 0} مشاهدة</span>
            ${keywordsHtml}
        </div>
        <h1 style="font-size:2.5rem; color:#00d9ff; margin-bottom:30px;">${article.title_ar}</h1>
        <div class="glass" style="font-size:1.1rem;">${contentHtml}</div>
        ${recommendedHtml}
        <div style="text-align:center; margin-top:50px;">
            <a href="/articles" style="display:inline-block; padding:12px 30px; background:#00d9ff; color:#0A0E27; border-radius:30px; text-decoration:none; font-weight:bold;">العودة للمقالات</a>
        </div>
    </div>
</body>
</html>`;

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.status(200).send(html);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
