import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  articleData?: {
    publishDate: string;
    updatedDate: string;
    author: string;
    title: string;
  };
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Flyspurs | Corporate Travel Management - Beyond The Destination',
  description = "Flyspurs is India's premier B2B Corporate Travel Management partner. Streamlining business travel, flight & hotel coordination, visas, trade fair logistics, and corporate incentive tours.",
  canonicalUrl = 'https://www.flyspurs.com',
  ogType = 'website',
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

    // Organization Schema JSON-LD
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Flyspurs',
      legalName: 'Flyspurs Corporate Travel Management',
      url: 'https://www.flyspurs.com',
      logo: 'https://www.flyspurs.com/logo.png',
      slogan: 'Beyond The Destination',
      taxID: '24BBNPS9571D1Z7',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '413, 4th Floor, Siddhivinayak Arcus, Bhayli Road, Bhayli',
        addressLocality: 'Vadodara',
        addressRegion: 'Gujarat',
        postalCode: '391410',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9274565625',
        contactType: 'customer service',
        email: 'travel@flyspurs.com',
        areaServed: ['IN', 'SG', 'US'],
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
    };

    // Inject or update JSON-LD script
    let scriptTag = document.getElementById('flyspurs-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'flyspurs-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(orgSchema);
  }, [title, description, canonicalUrl, ogType, articleData]);

  return null;
};
