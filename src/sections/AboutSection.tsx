import React from 'react';
import { ArrowRight, Globe, ShieldCheck, Award } from 'lucide-react';

interface AboutSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="about" className="py-20 bg-[#F8FAFC] text-[#111827] relative overflow-hidden border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Split Layout: Large Image Left, Concise Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Large Image Left */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB] aspect-4/3 group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Flyspurs Executive Corporate Travel Desk"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3D]/80 via-transparent to-transparent"></div>
              
              {/* Image Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg text-[#111827]">
                <p className="text-xs font-bold text-[#0A2D68] uppercase tracking-wider">Registered Corporate Office</p>
                <p className="text-xs font-semibold text-[#4B5563]">Siddhivinayak Arcus, Vadodara • Singapore • US Support Desks</p>
              </div>
            </div>
          </div>

          {/* Concise Text Right */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider border border-[#0A2D68]/20">
              About Flyspurs
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D] leading-tight">
              A Trusted Partner for <span className="text-[#0A2D68]">Corporate Travel Management</span>
            </h2>

            <p className="text-[#4B5563] text-base leading-relaxed font-normal">
              Flyspurs delivers end-to-end B2B travel management for multinational exporters, manufacturing leaders, and IT corporations across 50+ countries. We handle complex itineraries so your executive teams stay focused on business growth.
            </p>

            {/* Mission, Vision & Global Presence */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-[#E5E7EB] shadow-2xs space-y-1">
                <p className="font-heading text-xs font-extrabold text-[#0A2D68] uppercase tracking-wider">Mission</p>
                <p className="text-xs text-[#4B5563] font-medium leading-normal">Zero-friction travel logistics for global enterprise teams.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#E5E7EB] shadow-2xs space-y-1">
                <p className="font-heading text-xs font-extrabold text-[#D5AF58] uppercase tracking-wider">Vision</p>
                <p className="text-xs text-[#4B5563] font-medium leading-normal">India’s most dependable B2B corporate mobility desk.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#E5E7EB] shadow-2xs space-y-1">
                <p className="font-heading text-xs font-extrabold text-[#0A2D68] uppercase tracking-wider">Global Presence</p>
                <p className="text-xs text-[#4B5563] font-medium leading-normal">Support Desks across India, Singapore & USA.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenWhatsApp('About Section Inquiry')}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <span>Connect With Corporate Advisory</span>
                <ArrowRight className="w-4 h-4 text-[#D5AF58]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

