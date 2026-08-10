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
            Incentive & Reward Mobility
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D]">
            Corporate Incentive Tours
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Reward your teams with memorable experiences across some of the world's most inspiring destinations.
          </p>
        </div>

        {/* Destination Showcase Grid - Image First, Zero False Claims */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {incentiveDestinations.map((dest) => {
            const imageUrl = destImages[dest.id] || destImages['dubai'];
            return (
              <div
                key={dest.id}
                className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#D5AF58] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
              >
                {/* Destination Image Cover */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={imageUrl}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#0A2D68]/90 text-white backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {dest.country}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-bold text-[#071B3D] group-hover:text-[#0A2D68] transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-[#4B5563] text-xs leading-relaxed font-normal pt-1">
                      {dest.description}
                    </p>
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

