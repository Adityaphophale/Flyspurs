import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../sections/ContactSection';
import { SEOHead } from '../components/SEOHead';

interface ContactPageProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenWhatsApp }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Contact Flyspurs | Corporate Travel Management"
        description="Contact Flyspurs Corporate Travel Desk in Vadodara, Gujarat. Phone: +91 92745 65625, Email: travel@flyspurs.com. Head Office: 4th Floor, Siddhivinayak Arcus, Bhayli Road."
        canonicalUrl="https://www.flyspurs.com/contact"
        breadcrumbs={[
          { name: 'Home', url: 'https://www.flyspurs.com/' },
          { name: 'Contact', url: 'https://www.flyspurs.com/contact' },
        ]}
      />

      <main className="pt-24 min-h-screen">
        <div className="bg-[#F8FAFC] py-4 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/" className="hover:text-[#0A2D68]">Home</Link>
              <span>→</span>
              <span className="text-[#071B3D] font-semibold">Contact</span>
            </nav>
          </div>
        </div>

        <ContactSection onOpenWhatsApp={onOpenWhatsApp} />
      </main>
    </>
  );
};
