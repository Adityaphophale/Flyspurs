import React from 'react';
import { corporateClients, clientTestimonials, corporateCaseStudies } from '../data/clientsData';
import { Quote, Star, Award, TrendingDown, CheckCircle2, ArrowRight, Building2, ShieldCheck } from 'lucide-react';

interface ClientsSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="clients" className="py-20 bg-white text-[#071B3D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider">
            Esteemed Corporate Partnerships
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D]">
            Trusted by Leading Enterprises & Export Houses
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Managing corporate travel operations for manufacturing conglomerates, heavy engineering firms, exporters, and technology pioneers across India, Singapore, and global markets.
          </p>
        </div>

        {/* Client Logo Slider Grid */}
        <div className="mb-20">
          <div className="p-8 bg-[#F7F8FA] rounded-2xl border border-gray-200">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-[#0A2D68] mb-6">
              Our Esteemed Corporate Clients
            </p>
            
            {/* Grid of Clean Client Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {corporateClients.map((client) => (
                <div
                  key={client.id}
                  className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#D5AF58] hover:shadow-md transition-all flex flex-col items-center justify-center text-center group h-24"
                >
                  <span className="font-heading font-extrabold text-sm sm:text-base text-[#071B3D] group-hover:text-[#0A2D68] transition-colors tracking-tight">
                    {client.logoText}
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium truncate max-w-full mt-1">
                    {client.industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Case Studies Section */}
        <div className="mb-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-heading text-2xl font-bold text-[#071B3D]">Corporate Case Studies & Results</h3>
            <p className="text-xs text-gray-600">Measurable financial and operational ROI achieved for corporate accounts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporateCaseStudies.map((cs) => (
              <div key={cs.id} className="bg-[#F8FAFC] text-[#111827] p-8 rounded-2xl border border-[#E5E7EB] shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-[#EEF5FF] border border-[#0A2D68]/20 text-[#0A2D68] text-[10px] font-bold rounded-full uppercase">
                    {cs.clientIndustry}
                  </span>
                  <h4 className="font-heading text-xl font-bold text-[#071B3D]">{cs.title}</h4>
                  
                  <div className="space-y-2 text-xs">
                    <p className="text-[#4B5563]"><strong className="text-rose-700 font-bold">Challenge:</strong> {cs.challenge}</p>
                    <p className="text-[#4B5563]"><strong className="text-[#0A2D68] font-bold">Flyspurs Solution:</strong> {cs.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E5E7EB] text-center">
                  {cs.results.map((res, idx) => (
                    <div key={idx} className="bg-white p-2.5 rounded-xl border border-[#E5E7EB] shadow-2xs">
                      <p className="font-heading text-lg font-extrabold text-[#0A2D68]">{res.metric}</p>
                      <p className="text-[10px] text-[#4B5563] leading-tight font-semibold">{res.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Testimonials Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-heading text-2xl font-bold text-[#071B3D]">What Corporate Leaders Say</h3>
            <p className="text-xs text-gray-600">Direct feedback from HR Heads, Procurement Leads, and Managing Directors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientTestimonials.map((t) => (
              <div key={t.id} className="bg-[#F7F8FA] p-8 rounded-2xl border border-gray-200 hover:border-[#D5AF58] transition-all space-y-4 shadow-xs relative">
                <Quote className="w-8 h-8 text-[#D5AF58] opacity-50" />
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="font-heading text-sm font-bold text-[#071B3D]">{t.clientName}</p>
                    <p className="text-xs text-[#0A2D68] font-semibold">{t.designation}</p>
                    <p className="text-[11px] text-gray-500">{t.company} ({t.location})</p>
                  </div>

                  <div className="flex items-center text-[#D5AF58]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D5AF58]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
