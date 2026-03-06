import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Articles/posts sitemap
export default async function handler(req, res) {
    const { data: articles, error } = await supabase
        .from('articles')
        .select('slug, created_at, cover_image, title_ar, title_en')
        .order('created_at', { ascending: false });

    if (error) {
        return res.status(500).send('Error generating sitemap');
    }

    const host = 'https://www.uniskills.pro';

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${articles.map(article => `
    <url>
        <loc>${host}/articles/${article.slug}</loc>
        <lastmod>${new Date(article.created_at).toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>${article.cover_image ? `
        <image:image>
            <image:loc>${article.cover_image}</image:loc>
            <image:title>${article.title_ar || article.title_en}</image:title>
        </image:image>` : ''}
    </url>`).join('')}
</urlset>`;

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.status(200).send(xml);
}
