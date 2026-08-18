import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServicesSection } from '../sections/ServicesSection';
import { GlobalNetworkSection } from '../sections/GlobalNetworkSection';
import { SEOHead } from '../components/SEOHead';
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

interface CorporateTravelPageProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const CorporateTravelPage: React.FC<CorporateTravelPageProps> = ({ onOpenWhatsApp }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Corporate Travel Management Company in India | Flyspurs"
        description="Flyspurs is India's leading Corporate Travel Management Company specializing in enterprise flight coordination, hotel bookings, policy enforcement, and 24/7 travel desk support."
        canonicalUrl="https://www.flyspurs.com/corporate-travel"
        breadcrumbs={[
          { name: 'Home', url: 'https://www.flyspurs.com/' },
          { name: 'Services', url: 'https://www.flyspurs.com/services' },
          { name: 'Corporate Travel Management', url: 'https://www.flyspurs.com/corporate-travel' },
        ]}
      />

      <main className="pt-24 min-h-screen">
        <div className="bg-[#F8FAFC] py-4 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/" className="hover:text-[#0A2D68]">Home</Link>
              <span>→</span>
              <Link to="/services" className="hover:text-[#0A2D68]">Services</Link>
              <span>→</span>
              <span className="text-[#071B3D] font-semibold">Corporate Travel</span>
            </nav>
          </div>
        </div>

        {/* Dedicated Hero Banner for Corporate Travel */}
        <section className="py-16 bg-[#071B3D] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <span className="px-3.5 py-1 bg-[#D5AF58]/20 text-[#D5AF58] rounded-full text-xs font-bold uppercase tracking-wider border border-[#D5AF58]/30">
              Enterprise Mobility Desk
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Corporate Travel Management
            </h1>
            <p className="text-gray-200 text-sm sm:text-lg max-w-3xl leading-relaxed">
              Streamline enterprise flights, hotel stays, policy compliance, and 100% GST ITC recovery with Flyspurs dedicated B2B corporate travel desk.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenWhatsApp('Corporate Travel Desk Inquiry')}
                className="px-6 py-3.5 bg-[#D5AF58] text-[#071B3D] font-extrabold text-sm rounded-xl shadow-lg hover:bg-[#c49e47] transition-all flex items-center gap-2"
              >
                <span>Setup Corporate Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        <ServicesSection onOpenWhatsApp={onOpenWhatsApp} />

        {/* Structured Internal Linking Section */}
        <section className="py-12 bg-[#F8FAFC] border-t border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-heading text-xl font-bold text-[#071B3D]">Related Corporate Mobility Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link to="/business-visa" className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0A2D68] transition-all space-y-1 group">
                <h3 className="font-heading text-sm font-bold text-[#0A2D68] group-hover:underline">Business Visa Assistance</h3>
                <p className="text-xs text-[#4B5563]">Fast-track Schengen, US, UK, and East Asian business visa clearances.</p>
              </Link>
              <Link to="/exhibitions" className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0A2D68] transition-all space-y-1 group">
                <h3 className="font-heading text-sm font-bold text-[#0A2D68] group-hover:underline">Exhibitions</h3>
                <p className="text-xs text-[#4B5563]">Guaranteed hotel blocks and travel logistics for global trade shows.</p>
              </Link>
              <Link to="/incentive-tours" className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0A2D68] transition-all space-y-1 group">
                <h3 className="font-heading text-sm font-bold text-[#0A2D68] group-hover:underline">Incentive Tours</h3>
                <p className="text-xs text-[#4B5563]">Custom MICE corporate reward programs in premier destinations.</p>
              </Link>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2D68] hover:underline">
                <span>Contact Flyspurs Corporate Advisory</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D5AF58]" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
