import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClientsSection } from '../sections/ClientsSection';
import { SEOHead } from '../components/SEOHead';

interface ClientsPageProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenWhatsApp }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Corporate Travel Clients | Flyspurs"
        description="Discover how leading manufacturing enterprise leaders, exporters, and IT corporations partner with Flyspurs for B2B Corporate Travel Management."
        canonicalUrl="https://www.flyspurs.com/clients"
        breadcrumbs={[
          { name: 'Home', url: 'https://www.flyspurs.com/' },
          { name: 'Clients', url: 'https://www.flyspurs.com/clients' },
        ]}
      />

      <main className="pt-24 min-h-screen">
        <div className="bg-[#F8FAFC] py-4 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/" className="hover:text-[#0A2D68]">Home</Link>
              <span>→</span>
              <span className="text-[#071B3D] font-semibold">Clients</span>
            </nav>
          </div>
        </div>

        <ClientsSection onOpenWhatsApp={onOpenWhatsApp} />
      </main>
    </>
  );
};
