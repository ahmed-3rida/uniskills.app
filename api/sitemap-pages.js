// Static pages sitemap
export default function handler(req, res) {
    const host = 'https://www.uniskills.pro';
    const lastModDate = '2026-03-02';

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
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

    <!-- Articles Listing -->
    <url>
        <loc>${host}/articles</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
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

</urlset>`;

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.status(200).send(xml);
}
