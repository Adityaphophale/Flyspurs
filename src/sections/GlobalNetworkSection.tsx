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
      specialty: 'Schengen Business Visas, Trade Fairs (ITB, MEDICA, Hannover Messe), Industrial Plant Visits'
    },
    {
      region: 'East Asia & China',
      hubs: 'Guangzhou, Shanghai, Tokyo, Seoul, Taipei',
      specialty: 'Canton Fair Hotel Blocks, China M-Visa, Sourcing Fairs, Machinery Factory Inspections'
    },
    {
      region: 'Southeast Asia',
      hubs: 'Singapore, Bangkok, Kuala Lumpur, Hanoi, Jakarta, Bali',
      specialty: 'MICE Incentive Reward Programs, E-Visas, Corporate Retreats, Regional APAC HQ Visits'
    },
    {
      region: 'Middle East & Gulf',
      hubs: 'Dubai, Abu Dhabi, Riyadh, Jeddah, Muscat',
      specialty: 'Exhibition Travel (ATM Dubai), Fast-Track Business Visas, Executive Chauffeurs, Desert Galas'
    },
    {
      region: 'Americas',
      hubs: 'New York, San Francisco, Chicago, Toronto, Mexico City',
      specialty: 'US B1/B2 Interview Slot Scheduling, Tech Summits (CES Las Vegas), Multi-City Exporter Tours'
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
            International Business Travel & <span className="text-[#0A2D68]">Global Network</span>
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Connecting Indian manufacturing exporters, pharmaceutical leaders, and IT firms with commercial hubs across 50+ countries.
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
                    <p className="text-[10px] text-[#4B5563] uppercase font-bold tracking-wider">Specialization</p>
                    <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-2">{r.specialty}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Callout Card */}
          <div className="bg-white p-6 rounded-2xl border border-[#D5AF58] shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-1 bg-[#0A2D68] text-white text-[10px] font-extrabold rounded-md uppercase">
                International C-Suite Delegations
              </span>
              <h3 className="font-heading text-xl font-bold text-[#071B3D]">Protocol-Compliant Executive Travel</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                VIP airport tarmac assistance, luxury armored chauffeur transport, private jet charters, and 5-star executive suite blocks.
              </p>
            </div>

            <button
              onClick={() => onOpenWhatsApp('International Delegation Support')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-2xs"
            >
              <span>Connect Global Delegation Desk</span>
              <ArrowRight className="w-4 h-4 text-[#D5AF58]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

