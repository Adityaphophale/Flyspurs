import React, { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  breadcrumbs?: BreadcrumbItem[];
  articleData?: {
    publishDate: string;
    updatedDate: string;
    author: string;
    title: string;
  };
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Flyspurs | Corporate Travel Management',
  description = "Flyspurs is India's premier B2B Corporate Travel Management company. Streamlining business travel, visas, flight & hotel coordination, trade fair logistics, and corporate incentive tours.",
  canonicalUrl = 'https://www.flyspurs.com/',
  ogType = 'website',
  breadcrumbs,
  articleData,
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Canonical URL link tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // Build Graph Schema JSON-LD
    const graphSchemas: any[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://www.flyspurs.com/#organization',
        name: 'Flyspurs',
        legalName: 'Flyspurs Corporate Travel Management',
        url: 'https://www.flyspurs.com/',
        logo: 'https://www.flyspurs.com/flyspurs_logo.png',
        description: 'Corporate Travel Management',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4th Floor, Siddhivinayak Arcus, 413, Bhayli Road, Bhayli',
          addressLocality: 'Vadodara',
          addressRegion: 'Gujarat',
          postalCode: '391410',
          addressCountry: 'IN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91 92745 65625',
          contactType: 'customer service',
          email: 'travel@flyspurs.com',
          availableLanguage: ['English', 'Hindi', 'Gujarati'],
        },
        sameAs: [
          'https://www.linkedin.com/company/flyspurs',
          'https://www.instagram.com/official_flyspurs/',
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://www.flyspurs.com/#website',
        url: 'https://www.flyspurs.com/',
        name: 'Flyspurs',
        description: 'Corporate Travel Management Company',
        publisher: {
          '@id': 'https://www.flyspurs.com/#organization',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description: description,
        isPartOf: {
          '@id': 'https://www.flyspurs.com/#website',
        },
      },
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      graphSchemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: b.name,
          item: b.url,
        })),
      });
    }

    if (articleData) {
      graphSchemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: articleData.title,
        datePublished: articleData.publishDate,
        dateModified: articleData.updatedDate,
        author: {
          '@type': 'Organization',
          name: articleData.author,
        },
        publisher: {
          '@id': 'https://www.flyspurs.com/#organization',
        },
        mainEntityOfPage: canonicalUrl,
      });
    }

    // Inject or update JSON-LD script
    let scriptTag = document.getElementById('flyspurs-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'flyspurs-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify({ '@graph': graphSchemas });
  }, [title, description, canonicalUrl, ogType, breadcrumbs, articleData]);

  return null;
};
