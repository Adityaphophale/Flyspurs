import React, { useState } from 'react';
import { corporateServices, CorporateService } from '../data/servicesData';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface ServicesSectionProps {
  onOpenWhatsApp: (serviceTitle: string) => void;
}

const serviceImages: Record<string, string> = {
  'corporate-flights': '/corporate_flight_coordination.jpg',
  'hotel-reservations': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
  'business-visa': 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
  'travel-documentation': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
  'airport-transfers': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
  'incentive-tours': 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
  'international-delegations': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
  'exhibition-travel': 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800',
  'multi-city-travel': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  'corporate-retreats': 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
  'dedicated-travel-desk': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenWhatsApp }) => {
  const [selectedService, setSelectedService] = useState<CorporateService | null>(null);

  return (
    <section id="services" className="py-20 bg-white text-[#111827] relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Concise Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider border border-[#0A2D68]/20">
            Corporate Travel Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D]">
            Turnkey Business Travel Solutions
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Negotiated corporate airfares, 5-star hotel placements, zero-error business visas, and turnkey exhibition logistics.
          </p>
        </div>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateServices.map((service) => {
            const imageUrl = serviceImages[service.id] || serviceImages['corporate-flights'];
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#D5AF58] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Large Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0A2D68]/90 text-white backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {service.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-[#071B3D] group-hover:text-[#0A2D68] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#4B5563] text-xs leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-[#0A2D68] hover:text-[#071B3D] flex items-center gap-1 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D5AF58]" />
                    </button>

                    <button
                      onClick={() => onOpenWhatsApp(service.title)}
                      className="px-3.5 py-1.5 bg-[#0A2D68] hover:bg-[#071B3D] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
                    >
                      <MessageSquare className="w-3 h-3 text-[#D5AF58]" />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal Component */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenWhatsApp={onOpenWhatsApp}
      />
    </section>
  );
};

