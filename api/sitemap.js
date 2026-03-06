const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async function handler(req, res) {
    try {
        const { data: articles, error } = await supabase
            .from('articles')
            .select('slug, created_at')
            .order('created_at', { ascending: false });

        if (error) throw error;

        const host = 'https://www.uniskills.pro';
        const lastModDate = '2026-03-02';

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <url><loc>${host}/</loc><lastmod>${lastModDate}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
    <url><loc>${host}/faq.html</loc><lastmod>${lastModDate}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
    <url><loc>${host}/articles</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>
    ${articles.map(article => `<url><loc>${host}/articles/${article.slug}</loc><lastmod>${new Date(article.created_at).toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join('')}
</urlset>`;

        res.setHeader('Content-Type', 'text/xml; charset=utf-8');
        res.status(200).send(sitemap);
    } catch (e) {
        res.status(500).send('Error');
    }
};
