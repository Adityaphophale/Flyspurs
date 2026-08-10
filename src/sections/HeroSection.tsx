import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWhatsApp,
}) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 bg-white text-[#111827] overflow-hidden border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid Banner Layout (Content on Left, Premium Photography Banner on Right 45-50%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side Content (50-55%) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0A2D68]/10 border border-[#0A2D68]/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#D5AF58]"></span>
              <span className="text-xs font-bold text-[#0A2D68] uppercase tracking-wider">
                Trusted Corporate Travel Partner
              </span>
            </div>

            {/* Large Heading */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#071B3D] tracking-tight">
              Corporate Travel <br />
              <span className="text-[#D5AF58]">Beyond The Destination</span>
            </h1>

            {/* Professional Paragraph */}
            <p className="text-[#4B5563] text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              Simplifying global enterprise mobility through strategic corporate flight planning, expedited business visas, turnkey MICE incentive programs, and dedicated 24/7 travel desk management.
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary Button */}
              <button
                onClick={() => onOpenWhatsApp('Hero Schedule Consultation Request')}
                className="flex items-center gap-2 px-6 py-3.5 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#D5AF58]" />
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => onOpenWhatsApp('Hero WhatsApp Inquiry')}
                className="flex items-center gap-2 px-6 py-3.5 bg-[#F8FAFC] hover:bg-[#EEF5FF] text-[#0A2D68] font-bold text-sm sm:text-base rounded-xl border border-[#0A2D68]/20 hover:border-[#0A2D68] transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-[#D5AF58]" />
                <span>WhatsApp Inquiry</span>
              </button>
            </div>

            {/* Small Link */}
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2D68] hover:text-[#071B3D] hover:underline"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D5AF58]" />
              </a>
            </div>

            {/* Trust Assurance Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#4B5563] border-t border-[#E5E7EB]">
              <div className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#0A2D68]" />
                <span>100% GST ITC Invoice Compliance</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D5AF58]"></span>
                <span>Dedicated Senior Travel Manager</span>
              </div>
            </div>

          </div>

          {/* Right Side Full-Width Travel Image Banner (45-50%) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB] h-[380px] sm:h-[480px] lg:h-[520px] w-full">
              <img
                src="/hero_banner.jpg"
                alt="Corporate Business Travel Executive at Airport"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle Blue Brand Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3D]/80 via-[#071B3D]/20 to-transparent"></div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg text-[#071B3D]">
                <p className="text-xs font-bold text-[#0A2D68] uppercase tracking-wider">Enterprise Corporate Mobility</p>
                <p className="text-xs text-[#4B5563] mt-0.5">Streamlined flight booking, luxury accommodation, and zero-error visas.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


