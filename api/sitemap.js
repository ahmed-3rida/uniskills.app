import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    // Fetch slugs of all articles
    const { data: articles, error } = await supabase
        .from('articles')
        .select('slug, created_at')
        .order('created_at', { ascending: false });

    if (error) {
        return res.status(500).send('Error generating sitemap');
    }

    const host = 'https://www.uniskills.pro';
    const lastModDate = '2026-03-02';

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    
    <!-- Homepage -->
    <url>
        <loc>${host}/</loc>
        <lastmod>${lastModDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
        <image:image>
            <image:loc>${host}/uniskills-logo.png</image:loc>
            <image:title>UniSkills - منصة التعلم الذكي</image:title>
        </image:image>
        <image:image>
            <image:loc>${host}/screens/1.webp</image:loc>
            <image:title>UniSkills Home Screen</image:title>
        </image:image>
    </url>
    
    <!-- FAQ Page -->
    <url>
        <loc>${host}/faq.html</loc>
        <lastmod>${lastModDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    
    <!-- Terms Page -->
    <url>
        <loc>${host}/terms.html</loc>
        <lastmod>${lastModDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
    
    <!-- Privacy Page -->
    <url>
        <loc>${host}/privacy.html</loc>
        <lastmod>${lastModDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
    
    <!-- 404 Page -->
    <url>
        <loc>${host}/404.html</loc>
        <lastmod>${lastModDate}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.3</priority>
    </url>

    <!-- Articles Listing -->
    <url>
        <loc>${host}/articles</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>

    ${articles.map(article => `
    <url>
        <loc>${host}/articles/${article.slug}</loc>
        <lastmod>${new Date(article.created_at).toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`).join('')}
</urlset>`;

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.status(200).send(sitemap);
}
