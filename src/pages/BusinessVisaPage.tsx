import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, FileCheck } from 'lucide-react';

interface BusinessVisaPageProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const BusinessVisaPage: React.FC<BusinessVisaPageProps> = ({ onOpenWhatsApp }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Business Visa Assistance | Flyspurs"
        description="End-to-end B2B Business Visa Assistance by Flyspurs. Expert documentation audit and visa filing for Schengen, US B1/B2, UK, China, and global corporate travel."
        canonicalUrl="https://www.flyspurs.com/business-visa"
        breadcrumbs={[
          { name: 'Home', url: 'https://www.flyspurs.com/' },
          { name: 'Services', url: 'https://www.flyspurs.com/services' },
          { name: 'Business Visa Assistance', url: 'https://www.flyspurs.com/business-visa' },
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
              <span className="text-[#071B3D] font-semibold">Business Visa</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-[#071B3D] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <span className="px-3.5 py-1 bg-[#D5AF58]/20 text-[#D5AF58] rounded-full text-xs font-bold uppercase tracking-wider border border-[#D5AF58]/30">
              Immigration & Embassy Clearances
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Business Visa Assistance
            </h1>
            <p className="text-gray-200 text-sm sm:text-lg max-w-3xl leading-relaxed">
              Zero-error document verification, expedited embassy appointments, and invitation letter coordination maintaining a 99.2% approval success rate.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onOpenWhatsApp('Business Visa Inquiry')}
                className="px-6 py-3.5 bg-[#D5AF58] text-[#071B3D] font-extrabold text-sm rounded-xl shadow-lg hover:bg-[#c49e47] transition-all flex items-center gap-2"
              >
                <span>Consult Visa Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Logical H2 Content Sections */}
        <section className="py-16 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#071B3D]">
                Comprehensive Corporate Visa Coverage
              </h2>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                We handle short-term business visas, trade mission entries, and executive travel permits across key global financial centers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] space-y-4">
                <h3 className="font-heading text-lg font-bold text-[#0A2D68]">Schengen Business Visas</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Complete handling for 27 European nations including Germany, France, Italy, and Netherlands with formal host invitation checks.
                </p>
              </div>

              <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] space-y-4">
                <h3 className="font-heading text-lg font-bold text-[#0A2D68]">US & UK Corporate Visas</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  US B1/B2 form DS-160 processing, interview slot monitoring, and UK Business Visitor visa documentation audits.
                </p>
              </div>

              <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] space-y-4">
                <h3 className="font-heading text-lg font-bold text-[#0A2D68]">China & APAC Entries</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  China M-Visa trade invitations, Singapore e-Visas, Japan Business Visas, and expedited East Asian commercial entry permits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Required Internal Links */}
        <section className="py-12 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-heading text-xl font-bold text-[#071B3D]">Explore Complementary Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link to="/corporate-travel" className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0A2D68] transition-all space-y-1 group">
                <h3 className="font-heading text-sm font-bold text-[#0A2D68] group-hover:underline">Corporate Travel</h3>
                <p className="text-xs text-[#4B5563]">End-to-end executive flight coordination and policy management.</p>
              </Link>
              <Link to="/exhibitions" className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0A2D68] transition-all space-y-1 group">
                <h3 className="font-heading text-sm font-bold text-[#0A2D68] group-hover:underline">Exhibitions</h3>
                <p className="text-xs text-[#4B5563]">Trade show invitation visas and venue hotel blocks.</p>
              </Link>
              <Link to="/contact" className="p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#0A2D68] transition-all space-y-1 group">
                <h3 className="font-heading text-sm font-bold text-[#0A2D68] group-hover:underline">Contact</h3>
                <p className="text-xs text-[#4B5563]">Get direct assistance from our Senior Visa Desk.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
