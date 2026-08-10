import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWhatsApp,
}) => {
  return (
    <section id="hero" className="relative pt-24 pb-20 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36 bg-gray-900 text-white overflow-hidden">
      {/* Full-width Background Aircraft Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_banner.jpg"
          alt="Corporate Airplane on Runway at Golden Sunset"
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000"
        />
        {/* Transparent dark vignette overlay for maximum contrast and 100% text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Large Heading */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-lg">
            Corporate Travel <br />
            <span className="text-[#D5AF58]">Beyond The Destination</span>
          </h1>

          {/* Short paragraph (2-3 lines only) */}
          <p className="text-gray-100 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal drop-shadow-md">
            Simplifying global enterprise mobility through strategic executive flight coordination, expedited business visas, turnkey MICE incentive tours, and dedicated 24/7 travel desk management.
          </p>

          {/* Dual Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenWhatsApp('Hero Schedule Consultation Request')}
              className="flex items-center gap-3 px-8 py-4 bg-[#D5AF58] hover:bg-[#c49e47] text-[#071B3D] font-extrabold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 text-[#071B3D]" />
            </button>

            <button
              onClick={() => onOpenWhatsApp('Hero WhatsApp Inquiry')}
              className="flex items-center gap-3 px-8 py-4 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white font-bold text-base rounded-2xl border border-white/40 hover:border-white transition-all duration-300 shadow-md"
            >
              <MessageSquare className="w-5 h-5 text-[#D5AF58]" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>

          {/* Key Assurance Bar */}
          <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-200 border-t border-white/20">
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#D5AF58]" />
              <span>100% GST ITC Invoice Compliance</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#D5AF58]"></span>
              <span>Dedicated Senior Travel Advisory Desk</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



