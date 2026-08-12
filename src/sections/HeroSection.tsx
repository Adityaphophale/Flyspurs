import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWhatsApp,
}) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-36 bg-[#071B3D] text-white overflow-hidden">
      {/* Full-width Background Aircraft Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_banner.jpg"
          alt="Corporate Airplane on Runway at Golden Sunset"
          className="w-full h-full object-cover object-[75%_center] sm:object-center scale-105 transform transition-transform duration-1000"
          loading="eager"
        />
        {/* Flyspurs Brand Navy Gradient Overlay for perfect brand color theme & 100% text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B3D]/95 via-[#071B3D]/85 sm:via-[#0A2D68]/80 to-[#071B3D]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3D]/95 via-transparent to-[#071B3D]/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-5 sm:space-y-8">
          
          {/* Responsive Heading */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight text-white drop-shadow-lg">
            Corporate Travel <br className="hidden sm:inline" />
            <span className="text-[#D5AF58]">Beyond The Destination</span>
          </h1>

          {/* Short paragraph */}
          <p className="text-gray-100 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal drop-shadow-md">
            Simplifying global enterprise mobility through strategic executive flight coordination, expedited business visas, turnkey MICE incentive tours, and dedicated travel desk management.
          </p>

          {/* Dual Action Buttons - Staked full width on mobile */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              onClick={() => onOpenWhatsApp('Hero Schedule Consultation Request')}
              className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D5AF58] hover:bg-[#c49e47] text-[#071B3D] font-extrabold text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 min-h-[48px]"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 text-[#071B3D]" />
            </button>

            <button
              onClick={() => onOpenWhatsApp('Hero WhatsApp Inquiry')}
              className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white font-bold text-sm sm:text-base rounded-2xl border border-white/40 hover:border-white transition-all duration-300 shadow-md min-h-[48px]"
            >
              <MessageSquare className="w-5 h-5 text-[#D5AF58]" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>

          {/* Key Assurance Bar */}
          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 text-xs sm:text-sm text-gray-200 border-t border-white/20">
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#D5AF58] shrink-0" />
              <span>100% GST ITC Invoice Compliance</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#D5AF58] shrink-0"></span>
              <span>Dedicated Senior Travel Advisory Desk</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
