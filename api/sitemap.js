// Sitemap Index - points to sub-sitemaps
export default function handler(req, res) {
    const host = 'https://www.uniskills.pro';
    const today = new Date().toISOString().split('T')[0];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>${host}/sitemap-pages.xml</loc>
        <lastmod>${today}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${host}/sitemap-posts.xml</loc>
        <lastmod>${today}</lastmod>
    </sitemap>
</sitemapindex>`;

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.status(200).send(xml);
}
