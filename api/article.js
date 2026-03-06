import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Simple markdown-like formatting for article content
function formatContent(text) {
    if (!text) return '';

    const linkStyle = 'color: #00D9FF; text-decoration: underline; pointer-events: auto; cursor: pointer; font-weight: 600;';

    function makeRedirectLink(url, label) {
        const encoded = Buffer.from(url).toString('base64');
        return '<a href="/redirect?url=' + encoded + '" target="_blank" rel="noopener noreferrer" style="' + linkStyle + '" >  🔗 ' + label + '</a>';
    }

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
        // Markdown links: [text](url) — must be before bare URL detection
        .replace(/\[(.+?)\]\((.+?)\)/g, function (_, label, rawUrl) {
            return makeRedirectLink(rawUrl, label);
        });

    // Detect bare URLs BEFORE converting newlines to <br>
    // so URLs at the start of a new line are caught (preceded by \n, not >)
    formatted = formatted.replace(/(?<![='""])(https?:\/\/[^\s<>"'\n]+)/g, function (url) {
        const clean = url.replace(/[.,;!?)\]]+$/, '');
        return makeRedirectLink(clean, clean.length > 50 ? clean.substring(0, 50) + '...' : clean);
    });

    // Now convert newlines to HTML
    formatted = formatted
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

        // Skeleton card HTML (3 cards matching the real card shape)
        const skeletonCard = `
        <div style="display:flex;flex-direction:column;background:rgba(15,20,50,0.6);border-radius:16px;border:1px solid rgba(255,255,255,0.06);overflow:hidden;">
            <div style="width:100%;height:180px;background:linear-gradient(110deg,rgba(255,255,255,0.04) 30%,rgba(255,255,255,0.09) 50%,rgba(255,255,255,0.04) 70%);background-size:200% 100%;animation:shimmer 1.5s infinite;"></div>
            <div style="padding:18px 20px 20px;">
                <div style="height:14px;border-radius:8px;margin-bottom:10px;width:85%;background:linear-gradient(110deg,rgba(255,255,255,0.04) 30%,rgba(255,255,255,0.09) 50%,rgba(255,255,255,0.04) 70%);background-size:200% 100%;animation:shimmer 1.5s infinite;"></div>
                <div style="height:12px;border-radius:8px;margin-bottom:8px;background:linear-gradient(110deg,rgba(255,255,255,0.04) 30%,rgba(255,255,255,0.09) 50%,rgba(255,255,255,0.04) 70%);background-size:200% 100%;animation:shimmer 1.5s infinite;"></div>
                <div style="height:12px;border-radius:8px;margin-bottom:14px;width:70%;background:linear-gradient(110deg,rgba(255,255,255,0.04) 30%,rgba(255,255,255,0.09) 50%,rgba(255,255,255,0.04) 70%);background-size:200% 100%;animation:shimmer 1.5s infinite;"></div>
                <div style="height:10px;border-radius:8px;width:50%;background:linear-gradient(110deg,rgba(255,255,255,0.04) 30%,rgba(255,255,255,0.09) 50%,rgba(255,255,255,0.04) 70%);background-size:200% 100%;animation:shimmer 1.5s infinite;"></div>
            </div>
        </div>`;

        recommendedHtml = `
        <h2 style="margin-top: 60px; margin-bottom: 20px;" class="gradient-text">مقالات مقترحة قد تعجبك</h2>

        <!-- Shimmer Skeletons (visible on load) -->
        <div id="rec-skeleton" class="article-grid">
            ${skeletonCard}${skeletonCard}${skeletonCard}
        </div>

        <!-- Real cards (hidden until JS reveals them) -->
        <div id="rec-real" class="article-grid" style="display:none; opacity:0; transition: opacity 0.5s ease;">
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

    const html = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7828861031794758"
             crossorigin="anonymous"><\/script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover">

        <title>${article.title_ar || article.title_en} | UniSkills</title>
        <meta name="description" content="${article.short_description_ar || article.description_ar || 'مقال من منصة UniSkills.'}">

        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="/uniskills-logo.ico">
        <link rel="shortcut icon" type="image/x-icon" href="/uniskills-logo.ico">

        <!-- OG / Social -->
        <meta property="og:type" content="article">
        <meta property="og:title" content="${article.title_ar}">
        <meta property="og:description" content="${article.short_description_ar || article.description_ar || ''}">
        <meta property="og:image" content="${article.cover_image || 'https://www.uniskills.pro/uniskills-logo.png'}">
        <meta property="og:url" content="https://www.uniskills.pro/articles/${article.slug}">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${article.title_ar}">
        <meta name="twitter:description" content="${article.short_description_ar || article.description_ar || ''}">
        <meta name="twitter:image" content="${article.cover_image || 'https://www.uniskills.pro/uniskills-logo.png'}">

        <meta name="theme-color" content="#00d9ff">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/style.css">

        <style>
            /* ─── Reading Progress Bar ─── */
            #read-progress {
                position: fixed;
                top: 0; left: 0;
                height: 3px;
                width: 0%;
                background: linear-gradient(90deg, var(--primary), var(--secondary));
                z-index: 9999;
                transition: width 0.1s linear;
                box-shadow: 0 0 8px rgba(0,217,255,0.5);
            }

            body { background-color: var(--bg-color); color: var(--text-main); font-family: 'Cairo', sans-serif; }

            /* ─── Navbar ─── */
            .art-nav {
                position: fixed; top: 0; left: 0; right: 0; z-index: 100;
                background: rgba(10, 14, 39, 0.92);
                backdrop-filter: blur(16px);
                border-bottom: 1px solid rgba(255,255,255,0.04);
                padding: 13px 0;
            }

            /* ─── Hero Cover ─── */
            .art-hero {
                position: relative;
                width: 100%;
                height: min(55vh, 520px);
                overflow: hidden;
                margin-top: 64px;
            }

            .art-hero-bg {
                width: 100%; height: 100%;
                background-size: cover;
                background-position: center;
                transform: scale(1.05);
                transition: transform 8s ease;
            }

            .art-hero-overlay {
                position: absolute; inset: 0;
                background: linear-gradient(to bottom,
                    rgba(10,14,39,0.2) 0%,
                    rgba(10,14,39,0.15) 40%,
                    rgba(10,14,39,0.85) 75%,
                    rgba(10,14,39,1) 100%);
            }

            .art-hero-content {
                position: absolute;
                bottom: 0; left: 0; right: 0;
                padding: 32px;
                max-width: 860px;
                margin: 0 auto;
            }

            .art-hero-watermark {
                position: absolute;
                top: 20px; left: 20px;
                width: 34px; height: 34px;
                opacity: 0.7;
                pointer-events: none;
                filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5));
            }

            /* ─── Article Layout ─── */
            .art-wrap {
                max-width: 860px;
                margin: 0 auto;
                padding: 0 24px 80px;
            }

            .art-meta-row {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 10px;
                margin-bottom: 20px;
            }

            .art-keyword {
                display: inline-block;
                background: rgba(0,217,255,0.08);
                color: rgba(0,217,255,0.85);
                padding: 3px 12px;
                border-radius: 50px;
                font-size: 0.75rem;
                font-weight: 700;
                border: 1px solid rgba(0,217,255,0.15);
            }

            .art-views {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                background: rgba(255,255,255,0.05);
                border: 1px solid rgba(255,255,255,0.07);
                color: rgba(255,255,255,0.5);
                padding: 4px 12px;
                border-radius: 50px;
                font-size: 0.78rem;
                font-weight: 600;
            }

            .art-title {
                font-size: clamp(1.8rem, 4vw, 2.8rem);
                font-weight: 800;
                line-height: 1.25;
                color: #fff;
                margin-bottom: 12px;
            }

            .art-subtitle {
                color: rgba(255,255,255,0.45);
                font-size: 1rem;
                line-height: 1.7;
                margin-bottom: 32px;
                max-width: 640px;
            }

            /* ─── Share Bar ─── */
            .share-bar {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 16px 20px;
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.06);
                border-radius: 14px;
                margin-bottom: 36px;
                flex-wrap: wrap;
            }

            .share-bar span {
                font-size: 0.82rem;
                color: rgba(255,255,255,0.35);
                font-weight: 600;
                margin-left: auto;
            }

            .share-btn {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 7px 14px;
                border-radius: 50px;
                font-family: 'Cairo', sans-serif;
                font-size: 0.78rem;
                font-weight: 700;
                border: none;
                cursor: pointer;
                transition: all 0.25s ease;
                text-decoration: none;
            }

            .share-btn.wa  { background: rgba(37,211,102,0.12); color: #25d366; border: 1px solid rgba(37,211,102,0.2); }
            .share-btn.wa:hover  { background: #25d366; color: #fff; }
            .share-btn.tw  { background: rgba(29,161,242,0.1); color: #1da1f2; border: 1px solid rgba(29,161,242,0.2); }
            .share-btn.tw:hover  { background: #1da1f2; color: #fff; }
            .share-btn.cp  { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.1); }
            .share-btn.cp:hover  { background: rgba(255,255,255,0.12); color: #fff; }

            /* ─── Content Body ─── */
            .art-body {
                background: rgba(12,17,45,0.6);
                border: 1px solid rgba(255,255,255,0.05);
                border-radius: 20px;
                padding: 36px 40px;
                line-height: 1.85;
                font-size: 1.05rem;
                color: rgba(255,255,255,0.85);
                backdrop-filter: blur(12px);
                margin-bottom: 48px;
            }

            .art-body p { margin: 14px 0; }
            .art-body h1, .art-body h2, .art-body h3 { color: var(--primary); margin: 30px 0 12px; }
            .art-body h2 { font-size: 1.4rem; }
            .art-body h3 { font-size: 1.2rem; }
            .art-body strong { color: var(--primary); font-size: 1.05em; }
            .art-body a { color: #00D9FF; text-decoration: underline; pointer-events: auto !important; cursor: pointer !important; font-weight: 600; }
            .art-body ul { list-style: disc; padding-right: 28px; margin: 12px 0; line-height: 1.8; }
            .art-body li { margin: 4px 0; color: rgba(255,255,255,0.75); }
            .art-body img { max-width: 100%; border-radius: 12px; margin: 20px 0; box-shadow: 0 8px 30px rgba(0,0,0,0.3); }
            .art-body blockquote { border-right: 3px solid var(--primary); padding: 12px 20px; margin: 20px 0; background: rgba(0,217,255,0.04); border-radius: 0 8px 8px 0; color: rgba(255,255,255,0.6); font-style: italic; }

            @media (max-width: 640px) {
                .art-body { padding: 24px 20px; font-size: 0.97rem; }
                .art-hero-content { padding: 20px; }
            }

            /* ─── Recommended Section ─── */
            .rec-section { margin-top: 56px; }

            .rec-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 24px;
            }

            .rec-header h2 { font-size: 1.3rem; font-weight: 800; margin: 0; }
            .rec-header .rec-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0.07), transparent); }

            .rec-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }

            @media (max-width: 768px) { .rec-grid { grid-template-columns: 1fr; } }
            @media (min-width: 769px) and (max-width: 960px) { .rec-grid { grid-template-columns: repeat(2, 1fr); } }

            .rec-card {
                display: flex; flex-direction: column;
                background: rgba(12,17,45,0.7);
                border-radius: 16px;
                border: 1px solid rgba(255,255,255,0.06);
                text-decoration: none; color: white;
                overflow: hidden;
                transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
            }

            .rec-card:hover {
                transform: translateY(-6px);
                border-color: rgba(0,217,255,0.2);
                box-shadow: 0 16px 40px rgba(0,0,0,0.25);
            }

            .rec-img-wrap { position: relative; width: 100%; height: 160px; overflow: hidden; }
            .rec-img-bg { width: 100%; height: 100%; background-size: cover; background-position: center; transition: transform 0.5s ease; }
            .rec-card:hover .rec-img-bg { transform: scale(1.06); }
            .rec-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(12,17,45,0.8), transparent); }
            .rec-wm { position: absolute; top: 10px; left: 10px; width: 26px; height: 26px; opacity: 0.65; pointer-events: none; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4)); }
            .rec-views-pill { position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.5); backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,0.07); color: rgba(255,255,255,0.7); font-size: 0.68rem; font-weight: 600; padding: 3px 8px; border-radius: 50px; }

            .rec-body { padding: 16px 18px 18px; flex: 1; display: flex; flex-direction: column; }
            .rec-title { font-size: 0.95rem; font-weight: 700; color: #fff; line-height: 1.5; margin-bottom: 8px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
            .rec-desc  { font-size: 0.78rem; color: rgba(255,255,255,0.38); line-height: 1.6; flex: 1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 12px; }
            .rec-read  { font-size: 0.78rem; font-weight: 700; color: var(--primary); display: flex; align-items: center; gap: 4px; }

            /* ─── Skeleton ─── */
            .sk { background: linear-gradient(110deg, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.03) 70%); background-size: 200% 100%; animation: shimmer 1.6s infinite; }
            @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
            .sk-rec-card { display:flex; flex-direction:column; background:rgba(12,17,45,0.7); border-radius:16px; border:1px solid rgba(255,255,255,0.05); overflow:hidden; }
            .sk-rec-img  { width:100%; height:160px; }
            .sk-rec-body { padding:16px 18px 18px; display:flex; flex-direction:column; gap:8px; }
            .sk-line { border-radius:6px; }
            .w100{width:100%;height:11px} .w75{width:75%;height:11px} .w50{width:50%;height:9px}

            /* ─── Back Button ─── */
            .back-btn {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 11px 24px;
                border-radius: 50px;
                border: 1px solid rgba(0,217,255,0.2);
                background: rgba(0,217,255,0.06);
                color: var(--primary);
                font-family: 'Cairo', sans-serif;
                font-size: 0.9rem;
                font-weight: 700;
                text-decoration: none;
                transition: all 0.25s ease;
                margin-top: 48px;
                margin-bottom: 16px;
            }

            .back-btn:hover {
                background: rgba(0,217,255,0.14);
                border-color: var(--primary);
                box-shadow: 0 4px 20px rgba(0,217,255,0.15);
            }
        </style>
    </head>
    <body>
        <!-- Reading Progress -->
        <div id="read-progress"></div>

        <div class="blobs"><div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div></div>

        <!-- Navbar -->
        <nav class="art-nav" id="navbar">
            <div class="container nav-container">
                <a href="/" class="logo" aria-label="UniSkills">
                    <img src="/uniskills.png" alt="UniSkills" width="36" height="36" decoding="async">
                    <span>UniSkills</span>
                </a>
                <div class="nav-links desktop-only">
                    <a href="/" style="color:var(--text-muted); text-decoration:none; font-weight:500; transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='var(--text-muted)'">الرئيسية</a>
                    <a href="/articles" style="color:var(--primary); font-weight:700; text-decoration:none;">المقالات</a>
                    <a href="/faq" style="color:var(--text-muted); text-decoration:none; font-weight:500; transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='var(--text-muted)'">الأسئلة الشائعة</a>
                </div>
                <div class="nav-actions">
                    <a href="https://play.google.com/store/apps/details?id=com.uniskills.app" class="btn btn-primary desktop-only" style="padding:9px 20px; border-radius:50px; text-decoration:none; font-size:0.9rem;">حمل التطبيق</a>
                </div>
            </div>
        </nav>

        <!-- Hero Cover -->
        <div class="art-hero">
            <img src="/uniskills.png" class="art-hero-watermark" alt="UniSkills">
            <div class="art-hero-bg" id="main-cover" data-src="${Buffer.from(article.cover_image || '/uniskills-logo.png').toString('base64')}"></div>
            <div class="art-hero-overlay"></div>
        </div>

        <!-- Article Wrap -->
        <div class="art-wrap">

            <!-- Meta Row -->
            <div class="art-meta-row">
                ${keywordsHtml}
                <span class="art-views">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                    ${((article.views_count || 0) + 1).toLocaleString()} مشاهدة
                </span>
            </div>

            <!-- Title -->
            <h1 class="art-title">${article.title_ar || article.title_en}</h1>
            ${article.short_description_ar ? `<p class="art-subtitle">${article.short_description_ar}</p>` : ''}

            <!-- Share Bar -->
            <div class="share-bar">
                <a class="share-btn wa" href="https://wa.me/?text=${encodeURIComponent((article.title_ar || '') + ' ' + 'https://www.uniskills.pro/articles/' + article.slug)}" target="_blank" rel="noopener">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    واتساب
                </a>
                <a class="share-btn tw" href="https://twitter.com/intent/tweet?text=${encodeURIComponent((article.title_ar || '') + ' ' + 'https://www.uniskills.pro/articles/' + article.slug)}" target="_blank" rel="noopener">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    تويتر
                </a>
                <button class="share-btn cp" onclick="copyLink(this)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    نسخ الرابط
                </button>
                <span>شارك المقال</span>
            </div>

            <!-- Article Body -->
            <div class="art-body">
                ${formattedContent}
            </div>

            <!-- Recommended -->
            ${recommendedHtml}

            <!-- Back Button -->
            <div>
                <a href="/articles" class="back-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                    العودة إلى جميع المقالات
                </a>
            </div>
        </div>

        <!-- Footer -->
        <footer style="background:rgba(10,14,39,0.9); padding:50px 0 24px; border-top:1px solid rgba(255,255,255,0.05); margin-top:20px;">
            <div class="container">
                <div style="display:flex; flex-wrap:wrap; justify-content:space-between; gap:40px; margin-bottom:40px;">
                    <div style="max-width:280px;">
                        <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
                            <img src="/uniskills.png" alt="UniSkills" width="34" height="34" loading="lazy">
                            <span style="font-size:1.1rem; font-weight:800; color:var(--primary);">UniSkills</span>
                        </div>
                        <p style="color:var(--text-muted); font-size:0.88rem; line-height:1.7;">نحو بيئة تعليمية ذكية وتكنولوجيا متطورة في متناول أيدي جميع الطلاب والطالبات.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <h3 style="margin-bottom:4px; font-size:0.95rem; font-weight:700; color:#fff;">الروابط الهامة</h3>
                        <a href="/" style="color:var(--text-muted); text-decoration:none; font-size:0.88rem;">الرئيسية</a>
                        <a href="/articles" style="color:var(--primary); text-decoration:none; font-size:0.88rem;">المقالات</a>
                        <a href="/faq" style="color:var(--text-muted); text-decoration:none; font-size:0.88rem;">الأسئلة والدعم</a>
                        <a href="/terms" style="color:var(--text-muted); text-decoration:none; font-size:0.88rem;">شروط الخدمة</a>
                        <a href="/privacy" style="color:var(--text-muted); text-decoration:none; font-size:0.88rem;">سياسة الخصوصية</a>
                    </div>
                </div>
                <div style="text-align:center; color:rgba(255,255,255,0.2); font-size:0.8rem; padding-top:20px; border-top:1px solid rgba(255,255,255,0.05);">
                    <p>&copy; 2026 UniSkills. جميع الحقوق والملكيات محفوظة للمنصة.</p>
                </div>
            </div>
        </footer>

        <script>
            // Reading progress bar
            window.addEventListener('scroll', function() {
                var doc = document.documentElement;
                var scrollTop = doc.scrollTop || document.body.scrollTop;
                var scrollHeight = doc.scrollHeight - doc.clientHeight;
                var progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
                document.getElementById('read-progress').style.width = progress + '%';
            });

            // Hydrate hero cover
            var mc = document.getElementById('main-cover');
            if (mc && mc.dataset.src) {
                try {
                    mc.style.backgroundImage = "url('" + atob(mc.dataset.src) + "')";
                    mc.removeAttribute('data-src');
                    setTimeout(function() { mc.style.transform = 'scale(1)'; }, 100);
                } catch(err) {}
            }

            // Hydrate recommended images
            document.querySelectorAll('.rec-img-bg').forEach(function(el) {
                if (el.dataset.src) {
                    try {
                        el.style.backgroundImage = "url('" + atob(el.dataset.src) + "')";
                        el.removeAttribute('data-src');
                    } catch(err) {}
                }
            });

            // Swap skeletons → real cards
            var skel = document.getElementById('rec-skeleton');
            var real = document.getElementById('rec-real');
            if (skel && real) {
                setTimeout(function() {
                    skel.style.transition = 'opacity 0.3s';
                    skel.style.opacity = '0';
                    setTimeout(function() {
                        skel.style.display = 'none';
                        real.style.display = 'grid';
                        requestAnimationFrame(function() { real.style.opacity = '1'; });
                    }, 300);
                }, 600);
            }

            // Copy link
            function copyLink(btn) {
                navigator.clipboard.writeText(window.location.href).then(function() {
                    var old = btn.innerHTML;
                    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> تم النسخ!';
                    btn.style.color = '#39FF14';
                    setTimeout(function() { btn.innerHTML = old; btn.style.color = ''; }, 2000);
                });
            }

            // Image protection
            document.addEventListener('contextmenu', function(e) {
                if (e.target.tagName === 'IMG') e.preventDefault();
            }, false);
            document.querySelectorAll('img').forEach(function(img) {
                img.addEventListener('dragstart', function(e) { e.preventDefault(); });
            });
        <\/script>
    </body>
    </html>
    `;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
}

