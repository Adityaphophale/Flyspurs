import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { blogArticles } from '../data/blogsData';
import { FileText, Code2, Globe, ShieldCheck, Copy, Check } from 'lucide-react';

export const SEOResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'robots' | 'rss' | 'schema'>('sitemap');
  const [copied, setCopied] = useState(false);

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.flyspurs.com/</loc>
    <lastmod>2026-08-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.flyspurs.com/blog</loc>
    <lastmod>2026-08-08</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  ${blogArticles
    .map(
      (a) => `
  <url>
    <loc>https://www.flyspurs.com/blog/${a.slug}</loc>
    <lastmod>${a.updatedDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  const robotsTxt = `# Flyspurs Corporate Travel Management Robots.txt
User-agent: *
Allow: /
Sitemap: https://www.flyspurs.com/sitemap.xml
Crawl-delay: 1`;

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Flyspurs Corporate Travel Management Blog</title>
    <link>https://www.flyspurs.com/blog</link>
    <description>B2B Corporate travel policy guides, business visa insights, and trade fair logistics.</description>
    <language>en-us</language>
    ${blogArticles
      .slice(0, 5)
      .map(
        (a) => `
    <item>
      <title>${a.title}</title>
      <link>https://www.flyspurs.com/blog/${a.slug}</link>
      <description>${a.summary}</description>
      <pubDate>${a.publishDate}</pubDate>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getContent = () => {
    switch (activeTab) {
      case 'sitemap': return sitemapXml;
      case 'robots': return robotsTxt;
      case 'rss': return rssFeed;
      case 'schema':
        return JSON.stringify(
          {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Flyspurs',
            legalName: 'Flyspurs Corporate Travel Management',
            address: {
              streetAddress: '413, 4th Floor, Siddhivinayak Arcus, Bhayli Road',
              addressLocality: 'Vadodara',
              addressRegion: 'Gujarat',
              postalCode: '391410',
              addressCountry: 'IN',
            },
            telephone: '+91-9274565625',
            email: 'travel@flyspurs.com',
            taxID: '24BBNPS9571D1Z7',
          },
          null,
          2
        );
    }
  };

  return (
    <>
      <SEOHead title="SEO Technical Resources | Flyspurs Sitemap & Robots" />

      <div className="pt-28 pb-20 bg-[#F7F8FA] min-h-screen text-[#071B3D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="px-3 py-1 bg-[#0A2D68] text-[#D5AF58] rounded-full text-xs font-bold uppercase">
              SEO Technical Infrastructure
            </span>
            <h1 className="font-heading text-3xl font-bold text-[#071B3D]">Search Engine & Technical Files</h1>
            <p className="text-xs sm:text-sm text-gray-600">Inspect sitemap.xml, robots.txt, RSS Feed, and Schema.org structured data</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-6">
            
            <div className="flex items-center gap-2 border-b border-gray-200 pb-4 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('sitemap')}
                className={`px-4 py-2 rounded-xl text-xs font-bold ${
                  activeTab === 'sitemap' ? 'bg-[#0A2D68] text-[#D5AF58]' : 'bg-[#F7F8FA] text-gray-700'
                }`}
              >
                sitemap.xml
              </button>
              <button
                onClick={() => setActiveTab('robots')}
                className={`px-4 py-2 rounded-xl text-xs font-bold ${
                  activeTab === 'robots' ? 'bg-[#0A2D68] text-[#D5AF58]' : 'bg-[#F7F8FA] text-gray-700'
                }`}
              >
                robots.txt
              </button>
              <button
                onClick={() => setActiveTab('rss')}
                className={`px-4 py-2 rounded-xl text-xs font-bold ${
                  activeTab === 'rss' ? 'bg-[#0A2D68] text-[#D5AF58]' : 'bg-[#F7F8FA] text-gray-700'
                }`}
              >
                RSS Feed
              </button>
              <button
                onClick={() => setActiveTab('schema')}
                className={`px-4 py-2 rounded-xl text-xs font-bold ${
                  activeTab === 'schema' ? 'bg-[#0A2D68] text-[#D5AF58]' : 'bg-[#F7F8FA] text-gray-700'
                }`}
              >
                JSON-LD Schema
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => handleCopy(getContent())}
                className="absolute top-3 right-3 px-3 py-1.5 bg-[#0A2D68] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>

              <pre className="p-4 bg-[#071B3D] text-[#D5AF58] text-xs font-mono rounded-xl overflow-x-auto max-h-96 leading-relaxed">
                {getContent()}
              </pre>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
