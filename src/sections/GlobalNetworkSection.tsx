import React from 'react';
import { Globe2, ArrowRight } from 'lucide-react';

interface GlobalNetworkSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

const regionImages: Record<string, string> = {
  'Europe & UK': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
  'East Asia & China': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=800',
  'Southeast Asia': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800',
  'Middle East & Gulf': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
  'Americas': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800'
};

export const GlobalNetworkSection: React.FC<GlobalNetworkSectionProps> = ({ onOpenWhatsApp }) => {
  const globalRegions = [
    {
      region: 'Europe & UK',
      hubs: 'Frankfurt, London, Zurich, Paris, Berlin, Milan',
      travelSupport: 'Business travel planning, flight and hotel coordination, visa assistance, trade fair travel and international business travel support.'
    },
    {
      region: 'East Asia & China',
      hubs: 'Guangzhou, Shanghai, Tokyo, Seoul, Taipei',
      travelSupport: 'Corporate travel planning, hotel coordination, visa assistance, trade fair travel and business delegation support.'
    },
    {
      region: 'Southeast Asia',
      hubs: 'Singapore, Bangkok, Kuala Lumpur, Hanoi, Jakarta, Bali',
      travelSupport: 'Corporate travel planning, hotel coordination, business travel, incentive travel and international delegation support.'
    },
    {
      region: 'Middle East & Gulf',
      hubs: 'Dubai, Abu Dhabi, Riyadh, Jeddah, Muscat',
      travelSupport: 'Business travel planning, exhibition travel, visa assistance, hotel coordination and corporate travel support.'
    },
    {
      region: 'Americas',
      hubs: 'New York, San Francisco, Chicago, Toronto, Mexico City',
      travelSupport: 'International business travel, flight and hotel coordination, visa assistance and multi-city corporate travel planning.'
    }
  ];

  return (
    <section id="global-network" className="py-20 bg-[#F8FAFC] text-[#111827] relative overflow-hidden border-b border-[#E5E7EB]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider border border-[#0A2D68]/20">
            Global Mobility Footprint
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D]">
            International Business Travel & <span className="text-[#0A2D68]">Global Destinations</span>
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Supporting corporate and business travel across key commercial hubs worldwide.
          </p>
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {globalRegions.map((r, idx) => {
            const imageUrl = regionImages[r.region] || regionImages['Europe & UK'];
            return (
              <div key={idx} className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#D5AF58] shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group">
                {/* Region Image */}
                <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                  <img
                    src={imageUrl}
                    alt={r.region}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0A2D68]/90 text-white backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Globe2 className="w-3 h-3 text-[#D5AF58]" />
                    <span>{r.region}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <p className="text-[10px] text-[#0A2D68] uppercase font-bold tracking-wider">Commercial Hubs</p>
                    <p className="text-xs text-[#111827] font-bold">{r.hubs}</p>
                  </div>

                  <div className="pt-2 border-t border-[#E5E7EB]">
                    <p className="text-[10px] text-[#4B5563] uppercase font-bold tracking-wider">Travel Support</p>
                    <p className="text-xs text-[#4B5563] leading-relaxed">{r.travelSupport}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Card 6: International Delegations */}
          <div className="bg-white p-6 rounded-2xl border border-[#D5AF58] shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-1 bg-[#0A2D68] text-white text-[10px] font-extrabold rounded-md uppercase">
                INTERNATIONAL DELEGATIONS
              </span>
              <h3 className="font-heading text-xl font-bold text-[#071B3D]">International Business Delegations</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Coordinated travel support for international business delegations, including flights, hotels, visas, transfers and travel logistics.
              </p>
            </div>

            <button
              onClick={() => onOpenWhatsApp('International Delegation Support')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-2xs"
            >
              <span>PLAN YOUR DELEGATION</span>
              <ArrowRight className="w-4 h-4 text-[#D5AF58]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
