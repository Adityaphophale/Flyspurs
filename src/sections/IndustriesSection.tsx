import React, { useState } from 'react';
import { targetIndustries } from '../data/industriesData';
import { 
  Factory, Wrench, FlaskConical, Ship, Container, Cpu, Activity, GraduationCap, Building, CarFront, CheckCircle, AlertTriangle, ArrowRight, MapPin 
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

const industryImages: Record<string, string> = {
  'manufacturing': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  'epc-construction': 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=800',
  'pharma': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
  'maritime': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
  'it-software': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  'education': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
  'bfsi-consulting': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  'automotive': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
};

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenWhatsApp }) => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>('manufacturing');

  const activeIndustry = targetIndustries.find((i) => i.id === activeIndustryId) || targetIndustries[0];
  const activeImage = industryImages[activeIndustry.id] || industryImages['manufacturing'];

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      case 'Ship': return <Ship className="w-5 h-5" />;
      case 'Container': return <Container className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Building': return <Building className="w-5 h-5" />;
      case 'CarFront': return <CarFront className="w-5 h-5" />;
      default: return <Factory className="w-5 h-5" />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-white text-[#111827] relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider border border-[#0A2D68]/20">
            Sector-Specific Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D]">
            Tailored Industry Travel Protocols
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Customized travel policies, hotel placements, and emergency SLAs specifically designed for your industry's operating requirements.
          </p>
        </div>

        {/* Industry Switcher Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10 border-b border-[#E5E7EB]">
          {targetIndustries.map((ind) => {
            const isActive = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#0A2D68] text-[#D5AF58] shadow-md border border-[#D5AF58]/30 scale-102'
                    : 'bg-[#F8FAFC] text-[#4B5563] hover:bg-gray-200 border border-[#E5E7EB]'
                }`}
              >
                {getIndustryIcon(ind.icon)}
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Visual Card */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image Banner Column */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
              <img
                src={activeImage}
                alt={activeIndustry.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[#D5AF58] text-xs font-bold uppercase tracking-wider">{activeIndustry.tagline}</span>
                <h3 className="font-heading text-2xl font-bold">{activeIndustry.name} Travel</h3>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                {activeIndustry.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Pain Points */}
                <div className="bg-white p-4 rounded-xl border border-rose-200 space-y-2">
                  <div className="flex items-center gap-1.5 text-rose-700 font-bold text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Industry Challenges</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#4B5563]">
                    {activeIndustry.keyChallenges.slice(0, 3).map((ch, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="bg-white p-4 rounded-xl border border-[#0A2D68]/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-[#0A2D68] font-bold text-xs uppercase tracking-wider">
                    <CheckCircle className="w-4 h-4 text-[#D5AF58] shrink-0" />
                    <span>Flyspurs Protocols</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#111827]">
                    {activeIndustry.flyspursSolutions.slice(0, 3).map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0A2D68] shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenWhatsApp(`${activeIndustry.name} Industry Consultation`)}
                className="w-full sm:w-auto px-6 py-3 bg-[#0A2D68] hover:bg-[#071B3D] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request {activeIndustry.name} Travel Audit</span>
                <ArrowRight className="w-4 h-4 text-[#D5AF58]" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

