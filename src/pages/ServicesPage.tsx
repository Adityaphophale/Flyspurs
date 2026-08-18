import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServicesSection } from '../sections/ServicesSection';
import { ProcessSection } from '../sections/ProcessSection';
import { SEOHead } from '../components/SEOHead';

interface ServicesPageProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenWhatsApp }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Corporate Travel Services | Flyspurs"
        description="Comprehensive B2B Corporate Travel Services by Flyspurs: flight coordination, hotel reservations, visas, MICE tours, and exhibition travel."
        canonicalUrl="https://www.flyspurs.com/services"
        breadcrumbs={[
          { name: 'Home', url: 'https://www.flyspurs.com/' },
          { name: 'Services', url: 'https://www.flyspurs.com/services' },
        ]}
      />

      <main className="pt-24 min-h-screen">
        <div className="bg-[#F8FAFC] py-4 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/" className="hover:text-[#0A2D68]">Home</Link>
              <span>→</span>
              <span className="text-[#071B3D] font-semibold">Services</span>
            </nav>
          </div>
        </div>

        <ServicesSection onOpenWhatsApp={onOpenWhatsApp} />
        <ProcessSection />
      </main>
    </>
  );
};
