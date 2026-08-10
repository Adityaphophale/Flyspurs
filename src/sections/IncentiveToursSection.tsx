import React from 'react';
import { incentiveDestinations } from '../data/incentiveDestinations';
import { MessageSquare, Calendar, Users } from 'lucide-react';

interface IncentiveToursSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

const destImages: Record<string, string> = {
  'dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
  'singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800',
  'thailand': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
  'malaysia': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800',
  'europe': 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800',
  'bali': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
  'vietnam': 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800'
};

export const IncentiveToursSection: React.FC<IncentiveToursSectionProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="incentive-tours" className="py-20 bg-white text-[#111827] relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider border border-[#0A2D68]/20">
            Corporate Reward & MICE Programs
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D]">
            Corporate Incentive Tours & Dealer Meets
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Motivate top performers with global reward trips, private gala nights, and charter flights in iconic destinations.
          </p>
        </div>

        {/* Destination Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {incentiveDestinations.map((dest) => {
            const imageUrl = destImages[dest.id] || destImages['dubai'];
            return (
              <div
                key={dest.id}
                className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#D5AF58] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Destination Image Cover */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={imageUrl}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0A2D68]/90 text-white backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {dest.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 text-white backdrop-blur-md rounded-md text-[10px] font-semibold flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D5AF58]" />
                    <span>{dest.suggestedDuration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-xl font-bold text-[#071B3D] group-hover:text-[#0A2D68] transition-colors">
                        {dest.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#0A2D68]">{dest.country}</span>
                    </div>
                    <p className="text-[#4B5563] text-xs leading-relaxed italic line-clamp-2 pt-1">
                      "{dest.tagline}"
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-[#E5E7EB] space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#4B5563]">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#0A2D68]" />
                        <span>Ideal Size:</span>
                      </span>
                      <span className="font-bold text-[#071B3D]">{dest.idealGroupSize}</span>
                    </div>

                    <button
                      onClick={() => onOpenWhatsApp(`${dest.name} Incentive Tour Proposal`)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-xs rounded-xl shadow-2xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#D5AF58]" />
                      <span>Request {dest.name} Deck</span>
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

