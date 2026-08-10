import React from 'react';
import { X, CheckCircle2, ShieldCheck, Clock, TrendingDown, ArrowRight, MessageSquare, Award } from 'lucide-react';
import { CorporateService } from '../data/servicesData';

interface ServiceDetailModalProps {
  service: CorporateService | null;
  onClose: () => void;
  onOpenWhatsApp: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenWhatsApp,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071B3D]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#D5AF58]/40 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0A2D68] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-200 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-white/10 border border-[#D5AF58]/50 text-[#D5AF58] rounded-full text-xs font-bold uppercase tracking-wider">
              {service.category}
            </span>
            <h3 className="font-heading text-2xl font-bold text-white">{service.title}</h3>
            <p className="text-sm text-gray-200">{service.shortDesc}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Metrics bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#F7F8FA] rounded-xl border border-gray-200 flex items-center gap-3">
              <div className="p-2.5 bg-[#0A2D68] text-[#D5AF58] rounded-lg">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">Response SLA</p>
                <p className="font-heading text-sm font-bold text-[#071B3D]">{service.sla}</p>
              </div>
            </div>

            <div className="p-4 bg-[#F7F8FA] rounded-xl border border-gray-200 flex items-center gap-3">
              <div className="p-2.5 bg-[#0A2D68] text-[#D5AF58] rounded-lg">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">Cost Optimization Impact</p>
                <p className="font-heading text-sm font-bold text-[#0A2D68]">{service.averageSavings}</p>
              </div>
            </div>
          </div>

          {/* Full Detailed Description */}
          <div className="space-y-2">
            <h4 className="font-heading text-lg font-bold text-[#071B3D]">Service Overview</h4>
            <p className="text-sm text-gray-700 leading-relaxed bg-[#F7F8FA] p-4 rounded-xl border border-gray-100">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold text-[#071B3D] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#D5AF58]" />
              <span>Key Corporate Benefits</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 bg-white rounded-lg border border-gray-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0A2D68] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold text-[#071B3D] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0A2D68]" />
              <span>Service Deliverables & SLA Checklist</span>
            </h4>
            <div className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700 bg-[#F7F8FA] p-2.5 rounded-lg border border-gray-200">
                  <span className="w-2 h-2 rounded-full bg-[#D5AF58] shrink-0"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenWhatsApp(service.title);
              }}
              className="w-full flex-1 flex items-center justify-center gap-2 py-3.5 px-6 font-bold text-sm text-[#071B3D] bg-gradient-to-r from-[#D5AF58] via-[#F4E8C1] to-[#D5AF58] hover:from-[#F4E8C1] hover:to-[#D5AF58] rounded-xl shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-[#071B3D]" />
              <span>Inquire for {service.title}</span>
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-gray-600 hover:text-[#071B3D] border border-gray-300 rounded-xl"
            >
              Close Details
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
