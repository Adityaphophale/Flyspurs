import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IncentiveToursSection } from '../sections/IncentiveToursSection';
import { SEOHead } from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';

interface IncentiveToursPageProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const IncentiveToursPage: React.FC<IncentiveToursPageProps> = ({ onOpenWhatsApp }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Corporate Incentive Tours | Flyspurs"
        description="Turnkey B2B Corporate Incentive Tours and dealer reward trips worldwide by Flyspurs. End-to-end MICE management in Dubai, Singapore, Europe, and Asia."
        canonicalUrl="https://www.flyspurs.com/incentive-tours"
        breadcrumbs={[
          { name: 'Home', url: 'https://www.flyspurs.com/' },
          { name: 'Services', url: 'https://www.flyspurs.com/services' },
          { name: 'Corporate Incentive Tours', url: 'https://www.flyspurs.com/incentive-tours' },
        ]}
      />

      <main className="pt-24 min-h-screen text-[#111827]">
        {/* Breadcrumbs */}
        <div className="bg-[#F8FAFC] py-4 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/" className="hover:text-[#0A2D68]">Home</Link>
              <span>→</span>
              <Link to="/services" className="hover:text-[#0A2D68]">Services</Link>
              <span>→</span>
              <span className="text-[#071B3D] font-semibold">Incentive Tours</span>
            </nav>
          </div>
        </div>

        {/* Hero Section with H1 */}
        <section className="py-16 bg-[#071B3D] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <span className="px-3.5 py-1 bg-[#D5AF58]/20 text-[#D5AF58] rounded-full text-xs font-bold uppercase tracking-wider border border-[#D5AF58]/30">
              MICE & Reward Mobility
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Corporate Incentive Tours
            </h1>
            <p className="text-gray-200 text-sm sm:text-lg max-w-3xl leading-relaxed">
              Curated dealer meets, performance reward programs, and corporate retreats executed with 5-star precision across global destinations.
            </p>
          </div>
        </section>

        <IncentiveToursSection onOpenWhatsApp={onOpenWhatsApp} />

        {/* Internal Linking Section */}
        <section className="py-12 bg-[#F8FAFC] border-t border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-heading text-xl font-bold text-[#071B3D]">Related Enterprise Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/corporate-travel" className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0A2D68] transition-all space-y-1 group">
                <h3 className="font-heading text-sm font-bold text-[#0A2D68] group-hover:underline">Corporate Travel</h3>
                <p className="text-xs text-[#4B5563]">Consolidated executive flight and hotel travel management.</p>
              </Link>
              <Link to="/contact" className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0A2D68] transition-all space-y-1 group">
                <h3 className="font-heading text-sm font-bold text-[#0A2D68] group-hover:underline">Contact</h3>
                <p className="text-xs text-[#4B5563]">Request a tailored corporate MICE proposal.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
