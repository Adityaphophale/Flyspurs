import React from 'react';
import { majorExhibitions } from '../data/exhibitionsData';
import { MessageSquare, MapPin, Calendar, ArrowRight } from 'lucide-react';

interface ExhibitionTravelSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

const expoImages: Record<string, string> = {
  'canton-fair': 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800',
  'itb-berlin': 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80&w=800',
  'atm-dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
  'medica': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
  'hannover-messe': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  'ces-las-vegas': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
};

export const ExhibitionTravelSection: React.FC<ExhibitionTravelSectionProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="exhibitions" className="py-20 bg-[#F8FAFC] text-[#111827] relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider border border-[#0A2D68]/20">
            Trade Fair & Delegation Logistics
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D]">
            International Exhibition Travel Management
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Guaranteed hotel blocks near convention grounds, trade invitation visas, and daily venue shuttle logistics for global trade shows.
          </p>
        </div>

        {/* Major Exhibitions Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {majorExhibitions.map((expo) => {
            const imageUrl = expoImages[expo.id] || expoImages['canton-fair'];
            return (
              <div
                key={expo.id}
                className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#D5AF58] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Exhibition Image Cover */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={imageUrl}
                    alt={expo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0A2D68]/90 text-white backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D5AF58]" />
                    <span>{expo.typicalMonth}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-[#071B3D] group-hover:text-[#0A2D68] transition-colors">
                      {expo.name}
                    </h3>
                    <p className="text-xs font-bold text-[#0A2D68] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D5AF58]" />
                      <span>{expo.location}, {expo.country}</span>
                    </p>
                    <p className="text-[#4B5563] text-xs leading-relaxed line-clamp-2 pt-1">
                      {expo.description}
                    </p>
                  </div>

                  {/* Card CTA */}
                  <div className="pt-3 border-t border-[#E5E7EB]">
                    <button
                      onClick={() => onOpenWhatsApp(`${expo.name} Travel Package Inquiry`)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-xs rounded-xl shadow-2xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#D5AF58]" />
                      <span>Inquire Exhibition Package</span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

