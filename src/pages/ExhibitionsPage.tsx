import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExhibitionTravelSection } from '../sections/ExhibitionTravelSection';
import { SEOHead } from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';

interface ExhibitionsPageProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const ExhibitionsPage: React.FC<ExhibitionsPageProps> = ({ onOpenWhatsApp }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Exhibition Travel & Business Delegations | Flyspurs"
        description="International Exhibition Travel & Delegation logistics by Flyspurs. Reserved hotel blocks, trade fair visas, and shuttle logistics for Canton Fair, ITB Berlin, MEDICA, and global trade shows."
        canonicalUrl="https://www.flyspurs.com/exhibitions"
        breadcrumbs={[
          { name: 'Home', url: 'https://www.flyspurs.com/' },
          { name: 'Services', url: 'https://www.flyspurs.com/services' },
          { name: 'Exhibitions', url: 'https://www.flyspurs.com/exhibitions' },
        ]}
      />

      <main className="pt-24 min-h-screen text-[#111827]">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#F8FAFC] py-4 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/" className="hover:text-[#0A2D68]">Home</Link>
              <span>→</span>
              <Link to="/services" className="hover:text-[#0A2D68]">Services</Link>
              <span>→</span>
              <span className="text-[#071B3D] font-semibold">Exhibitions</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-[#071B3D] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <span className="px-3.5 py-1 bg-[#D5AF58]/20 text-[#D5AF58] rounded-full text-xs font-bold uppercase tracking-wider border border-[#D5AF58]/30">
              Trade Fair Mobility
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Exhibition Travel & International Delegations
            </h1>
            <p className="text-gray-200 text-sm sm:text-lg max-w-3xl leading-relaxed">
              Guaranteed accommodation blocks near exhibition halls, official trade invitation visa clearance, and daily venue transit for export delegations.
            </p>
          </div>
        </section>

        <ExhibitionTravelSection onOpenWhatsApp={onOpenWhatsApp} />

        {/* Required Internal Links */}
        <section className="py-12 bg-[#F8FAFC] border-t border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-heading text-xl font-bold text-[#071B3D]">Related Trade Travel Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link to="/corporate-travel" className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0A2D68] transition-all space-y-1 group">
                <h3 className="font-heading text-sm font-bold text-[#0A2D68] group-hover:underline">Corporate Travel</h3>
                <p className="text-xs text-[#4B5563]">Executive airfare and group travel booking desk.</p>
              </Link>
              <Link to="/business-visa" className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0A2D68] transition-all space-y-1 group">
                <h3 className="font-heading text-sm font-bold text-[#0A2D68] group-hover:underline">Business Visa Assistance</h3>
                <p className="text-xs text-[#4B5563]">Expedited visa processing for trade show delegates.</p>
              </Link>
              <Link to="/contact" className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0A2D68] transition-all space-y-1 group">
                <h3 className="font-heading text-sm font-bold text-[#0A2D68] group-hover:underline">Contact</h3>
                <p className="text-xs text-[#4B5563]">Inquire about exhibition hotel room blocks.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
