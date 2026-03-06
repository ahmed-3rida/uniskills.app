import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Simple markdown-like formatting for article content
function formatContent(text) {
    if (!text) return '';

    let formatted = text
        // Bold: **text** → <strong>
        .replace(/\*\*(.+?)\*\*/g, '<strong style="font-size: 1.15em; color: var(--primary);">$1</strong>')
        // Italic: *text* → <em>
        .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
        // Headers: ### text → <h3>, ## text → <h2>
        .replace(/^### (.+)$/gm, '<h3 style="color: var(--primary); margin: 20px 0 8px; font-size: 1.3rem;">$1</h3>')
        .replace(/^## (.+)$/gm, '<h2 style="color: var(--primary); margin: 25px 0 10px; font-size: 1.5rem;">$1</h2>')
        .replace(/^# (.+)$/gm, '<h1 style="color: var(--primary); margin: 30px 0 12px; font-size: 1.8rem;">$1</h1>')
        // Bullet lists: - text or • text
        .replace(/^[-•] (.+)$/gm, '<li style="margin: 2px 0; padding-right: 10px;">$1</li>')
        // Numbered lists: 1. text
        .replace(/^\d+\. (.+)$/gm, '<li style="margin: 2px 0; padding-right: 10px;">$1</li>')
        // Links: [text](url) → redirect page
        .replace(/\[(.+?)\]\((.+?)\)/g, function (_, text, rawUrl) {
            const encoded = Buffer.from(rawUrl).toString('base64');
            return '<a href="/redirect?url=' + encoded + '" target="_blank" rel="noopener noreferrer" style="color: var(--primary); text-decoration: underline; pointer-events: auto;">🔗 ' + text + '</a>';
        })
        // New lines → <br> (preserve paragraph spacing)
        .replace(/\n\n/g, '</p><p style="margin: 10px 0; line-height: 1.7;">')
        .replace(/\n/g, '<br>');

    // Wrap consecutive <li> items in <ul>
    formatted = formatted.replace(/(<li[^>]*>.*?<\/li>\s*)+/g, '<ul style="list-style: disc; padding-right: 25px; margin: 8px 0; line-height: 1.5;">$&</ul>');

    return '<p style="margin: 10px 0; line-height: 1.7;">' + formatted + '</p>';
}

export default async function handler(req, res) {
    const slug = req.query.slug;

    // Fetch article from the database based on the slug
    const { data: article, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error || !article) {
        return res.status(404).send('<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>المقال غير موجود</title><link rel="stylesheet" href="/style.css"></head><body style="background-color: var(--bg-color); color: white; display:flex; justify-content:center; align-items:center; height:100vh;"><div><h1 class="gradient-text">المقال غير موجود</h1><a href="/articles" class="btn btn-primary" style="margin-top:20px;">العودة للمقالات</a></div></body></html>');
    }

    // Increment views safely using RPC
    try {
        await supabase.rpc('increment_article_views', { article_uuid: article.id });
    } catch (e) {
        console.error("View increment failed", e);
    }

    // Fetch recommended articles
    const { data: recommended } = await supabase
        .from('articles')
        .select('*')
        .neq('id', article.id)
        .order('views_count', { ascending: false })
        .limit(3);

    // Build recommended HTML
    let recommendedHtml = '';
    if (recommended && recommended.length > 0) {
        const recCards = recommended.map(rec => {
            const encodedUrl = Buffer.from(rec.cover_image || '/uniskills-logo.png').toString('base64');
            return `
            <a href="/articles/${rec.slug}" style="display: flex; flex-direction: column; background: rgba(15, 20, 50, 0.6); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.06); text-decoration: none; color: white; transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); overflow: hidden; backdrop-filter: blur(10px);" onmouseenter="this.style.transform='translateY(-6px)';this.style.borderColor='rgba(0,217,255,0.3)';this.style.boxShadow='0 12px 40px rgba(0,217,255,0.12)';" onmouseleave="this.style.transform='';this.style.borderColor='rgba(255,255,255,0.06)';this.style.boxShadow='';">
                <div style="position: relative; width: 100%; height: 180px; overflow: hidden;">
                    <img src="/uniskills.png" style="position: absolute; top: 10px; left: 10px; width: 30px; height: 30px; z-index: 5; opacity: 0.7; pointer-events: none; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));" alt="UniSkills">
                    <div class="rec-img" data-src="${encodedUrl}" style="width: 100%; height: 100%; background-size: cover; background-position: center; transition: 0.5s;"></div>
                </div>
                <div style="padding: 18px 20px 20px; flex-grow: 1;">
                    <h3 style="color: #fff; font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; line-height: 1.5;">${rec.title_ar || rec.title_en}</h3>
                    <p style="color: rgba(255,255,255,0.5); font-size: 0.88rem; line-height: 1.6; margin-bottom: 14px;">
                        ${(rec.short_description_ar || "").substring(0, 80)}...
                    </p>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; font-weight: 500; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.05);">
                        <span style="color: rgba(0,217,255,0.7);">👁 ${rec.views_count || 0} مشاهدة</span>
                        <span style="color: rgba(255,255,255,0.4);">اقرأ المزيد ←</span>
                    </div>
                </div>
            </a>
            `;
        }).join('');

        recommendedHtml = `
        <h2 style="margin-top: 60px; margin-bottom: 20px;" class="gradient-text">مقالات مقترحة قد تعجبك</h2>
        <div class="article-grid">
            ${recCards}
        </div>
        `;
    }

    // Format the article content with markdown-like rendering
    const formattedContent = formatContent(article.content_ar || article.content);

    // Build keywords HTML
    let keywordsHtml = '';
    if (article.keywords && article.keywords.length > 0) {
        const kwList = Array.isArray(article.keywords) ? article.keywords : article.keywords.split(',');
        keywordsHtml = `
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
            ${kwList.map(kw => `<span style="background: rgba(0,217,255,0.1); color: var(--primary); padding: 4px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">${kw.trim()}</span>`).join('')}
        </div>`;
    }

    // Serverly generated meta tags and basic layout matches new UI style
    const html = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7828861031794758"
             crossorigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover">
        
        <title>${article.title_ar || article.title_en}</title>
        <meta name="description" content="${article.short_description_ar || article.description_ar || 'وصف المقال متاح على UniSkills.'}">
        
        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="/uniskills-logo.ico">
        <link rel="shortcut icon" type="image/x-icon" href="/uniskills-logo.ico">
        
        <!-- Open Graph / Facebook / WhatsApp -->
        <meta property="og:type" content="article">
        <meta property="og:title" content="${article.title_ar}">
        <meta property="og:description" content="${article.short_description_ar || article.description_ar}">
        <meta property="og:image" content="${article.cover_image || 'https://www.uniskills.pro/uniskills-logo.png'}">
        <meta property="og:url" content="https://www.uniskills.pro/articles/${article.slug}">
        
        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${article.title_ar}">
        <meta name="twitter:description" content="${article.short_description_ar || article.description_ar}">
        <meta name="twitter:image" content="${article.cover_image || 'https://www.uniskills.pro/uniskills-logo.png'}">
        
        <!-- Theme Color -->
        <meta name="theme-color" content="#00d9ff">
        <meta name="msapplication-TileColor" content="#00d9ff">

        <!-- Fonts Default Style -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        
        <link rel="stylesheet" href="/style.css">
        <style>
             body { background-color: var(--bg-color); color: var(--text-main); font-family: 'Cairo', sans-serif; }
             .article-container { max-width: 1100px; margin: 100px auto 40px; padding: 20px; }
             .article-cover { width: 100%; border-radius: 12px; margin-bottom: 20px; max-height: 450px; object-fit: cover; box-shadow: var(--glass-shadow); }
             .article-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 15px 0; }
             .article-content { line-height: 1.7; color: var(--text-main); font-size: 1.1rem; }
             .article-content p { margin: 10px 0; }
             .article-content a { color: var(--primary); text-decoration: underline; pointer-events: auto !important; cursor: pointer !important; position: relative; z-index: 10; }
             .article-content h1, .article-content h2, .article-content h3 { color: var(--primary); margin: 25px 0 10px; }
             .article-content strong { font-size: 1.15em; color: var(--primary); }
             .article-content ul { list-style: disc; padding-right: 25px; margin: 8px 0; line-height: 1.5; }
             .article-content li { margin: 2px 0; }

             .article-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
             @media (max-width: 768px) { .article-grid { grid-template-columns: 1fr; } }
             .article-card { display: block; background: var(--glass-bg); padding: 15px; border-radius: 12px; border: 1px solid var(--glass-border); text-decoration: none; color: white; transition: 0.3s; }
             .article-card:hover { transform: translateY(-5px); border-color: var(--primary); }
             
             .view-pill { display: inline-flex; align-items: center; gap: 5px; background: rgba(0, 217, 255, 0.1); color: var(--primary); padding: 5px 15px; border-radius: 20px; font-weight: 600; margin-bottom: 15px; }
        </style>
    </head>
    <body>
        <div class="blobs">
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="blob blob-3"></div>
        </div>

        <!-- Navigation (Same as other pages) -->
        <nav class="navbar scanned" id="navbar" style="background: rgba(10, 14, 39, 0.95); backdrop-filter: blur(10px);">
            <div class="container nav-container">
                <a href="/" class="logo" aria-label="UniSkills - الصفحة الرئيسية">
                    <img src="/uniskills.png" alt="شعار UniSkills - منصة التعلم الذكي" width="40" height="40" decoding="async">
                    <span>UniSkills</span>
                </a>
                <div class="nav-links desktop-only">
                    <a href="/">الرئيسية</a>
                    <a href="/articles" style="color:var(--primary);">المقالات</a>
                    <a href="/faq">الأسئلة الشائعة</a>
                </div>
                <div class="nav-actions">
                    <a href="https://play.google.com/store/apps/details?id=com.uniskills.app" class="btn btn-secondary desktop-only">حمل التطبيق</a>
                </div>
            </div>
        </nav>

        <div class="container article-container">
            <!-- Article Image with Watermark & Protection -->
            <div class="img-wrapper" style="position: relative; width: 100%; height: 450px; border-radius: 12px; overflow: hidden; margin-bottom: 20px; box-shadow: var(--glass-shadow);">
                <img src="/uniskills.png" style="position: absolute; top: 15px; left: 15px; width: 40px; height: 40px; z-index: 10; opacity: 0.8; pointer-events: none; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));" alt="Watermark">
                <div id="main-cover" data-src="${Buffer.from(article.cover_image || '/uniskills-logo.png').toString('base64')}" style="width: 100%; height: 100%; background-size: cover; background-position: center; transition: 0.5s;"></div>
            </div>
            
            <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-bottom: 15px;">
                <div class="view-pill">👁 <span>${(article.views_count || 0) + 1} مشاهدة</span></div>
            </div>
            
            ${keywordsHtml}
            
            <h1 style="color: var(--primary); margin-bottom: 20px; font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;">${article.title_ar}</h1>
            
            <div class="article-content glass" style="padding: 30px;">
                ${formattedContent}
            </div>
            
            ${recommendedHtml}
            
            <div style="text-align: center; margin-top: 50px;">
               <a href="/articles" class="btn btn-primary" style="padding: 12px 30px; border-radius: 30px;">← العودة إلى جميع المقالات</a>
            </div>
        </div>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-top">
                    <div class="footer-brand">
                        <div class="logo">
                            <img src="/uniskills.png" alt="UniSkills" width="40" height="40" loading="lazy">
                            <span>UniSkills</span>
                        </div>
                        <p>نحو بيئة تعليمية ذكية وتكنولوجيا متطورة في متناول أيدي جميع الطلاب والطالبات.</p>
                    </div>
                    <div class="footer-links">
                        <h3>الروابط الهامة</h3>
                        <a href="/">الرئيسية</a>
                        <a href="/articles">المقالات</a>
                        <a href="/faq">الأسئلة والدعم</a>
                        <a href="/terms">شروط الخدمة</a>
                        <a href="/privacy">سياسة الخصوصية</a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 UniSkills. جميع الحقوق والملكيات محفوظة للمنصة.</p>
                </div>
            </div>
        </footer>
        <script>
            // Image Protection
            document.addEventListener('contextmenu', function(e) {
                if (e.target.tagName === 'IMG') e.preventDefault();
            }, false);

            const mc = document.getElementById('main-cover');
            if (mc && mc.dataset.src) {
                try {
                    const src = atob(mc.dataset.src);
                    mc.style.backgroundImage = "url('" + src + "')";
                    mc.removeAttribute('data-src');
                } catch(err) {}
            }

            // Hydrate recommended images
            document.querySelectorAll('.rec-img').forEach(function(img) {
                if (img.dataset.src) {
                    try {
                        img.style.backgroundImage = "url('" + atob(img.dataset.src) + "')";
                        img.removeAttribute('data-src');
                    } catch(err) {}
                }
            });

            document.querySelectorAll('img').forEach(function(img) {
                img.addEventListener('dragstart', function(e) { e.preventDefault(); });
            });
        </script>
    </body>
    </html>
    `;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
}
