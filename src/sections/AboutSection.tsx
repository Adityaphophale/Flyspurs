import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenWhatsApp?: (service?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F8FAFC] text-[#111827] relative overflow-hidden border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop & Mobile Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Large Image Left on Desktop / Mobile order responsive */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E5E7EB] aspect-4/3 group">
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200"
                alt="Executive Business Traveler in Modern Airport Lounge"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3D]/80 via-transparent to-transparent"></div>
              
              {/* Image Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm text-[#111827]">
                <p className="text-[11px] font-bold text-[#0A2D68] uppercase tracking-wider">CORPORATE TRAVEL MANAGEMENT</p>
                <p className="text-xs font-semibold text-[#4B5563]">Vadodara, Gujarat • India</p>
              </div>
            </div>
          </div>

          {/* Content Right on Desktop */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider border border-[#0A2D68]/20">
              ABOUT FLYSPURS
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D] leading-tight">
              Your Trusted Partner <br className="hidden sm:inline" />
              for Corporate Travel
            </h2>

            <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              Flyspurs helps businesses simplify corporate travel through coordinated flights, hotels, visa assistance, incentive travel, exhibitions and international business travel.
            </p>

            {/* 3 Simple Compact Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="p-4 bg-white rounded-2xl border border-[#E5E7EB] space-y-1">
                <p className="font-heading text-[11px] font-extrabold text-[#0A2D68] uppercase tracking-wider">CORPORATE TRAVEL</p>
                <p className="text-xs text-[#4B5563] font-normal leading-relaxed">Flight and hotel coordination for business travel.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#E5E7EB] space-y-1">
                <p className="font-heading text-[11px] font-extrabold text-[#0A2D68] uppercase tracking-wider">VISA ASSISTANCE</p>
                <p className="text-xs text-[#4B5563] font-normal leading-relaxed">Support with business travel documentation and visa processes.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#E5E7EB] space-y-1">
                <p className="font-heading text-[11px] font-extrabold text-[#0A2D68] uppercase tracking-wider">GLOBAL TRAVEL</p>
                <p className="text-xs text-[#4B5563] font-normal leading-relaxed">International travel support for business destinations.</p>
              </div>
            </div>

            {/* Single CTA */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs hover:shadow-sm"
              >
                <span>Learn About Flyspurs</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D5AF58]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
