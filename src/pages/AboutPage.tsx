import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AboutSection } from '../sections/AboutSection';
import { WhyFlyspursSection } from '../sections/WhyFlyspursSection';
import { SEOHead } from '../components/SEOHead';

interface AboutPageProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenWhatsApp }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="About Flyspurs | Corporate Travel Management"
        description="Learn about Flyspurs, India's premier B2B Corporate Travel Management partner for enterprise mobility, business visas, and executive travel services."
        canonicalUrl="https://www.flyspurs.com/about"
        breadcrumbs={[
          { name: 'Home', url: 'https://www.flyspurs.com/' },
          { name: 'About Flyspurs', url: 'https://www.flyspurs.com/about' },
        ]}
      />

      <main className="pt-24 min-h-screen">
        <div className="bg-[#F8FAFC] py-4 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/" className="hover:text-[#0A2D68]">Home</Link>
              <span>→</span>
              <span className="text-[#071B3D] font-semibold">About Flyspurs</span>
            </nav>
          </div>
        </div>

        {/* Dedicated Hero Banner for About Page */}
        <section className="py-16 bg-[#071B3D] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="px-3.5 py-1 bg-[#D5AF58]/20 text-[#D5AF58] rounded-full text-xs font-bold uppercase tracking-wider border border-[#D5AF58]/30">
              Corporate Travel Management
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              About Flyspurs
            </h1>
            <p className="text-gray-200 text-sm sm:text-lg max-w-3xl leading-relaxed">
              India's trusted corporate travel partner enabling businesses to streamline global flights, hotels, business visas, exhibition logistics, and incentive travel programs.
            </p>
          </div>
        </section>

        <AboutSection onOpenWhatsApp={onOpenWhatsApp} />
        <WhyFlyspursSection onOpenWhatsApp={onOpenWhatsApp} />
      </main>
    </>
  );
};
