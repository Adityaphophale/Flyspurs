import React from 'react';
import { XCircle, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

interface WhyFlyspursSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const WhyFlyspursSection: React.FC<WhyFlyspursSectionProps> = ({
  onOpenWhatsApp,
}) => {
  const comparisons = [
    {
      metric: 'Travel Spend & Rates',
      without: 'Higher costs from retail OTA non-refundable fares and surge pricing',
      with: 'Direct corporate negotiated airfares & hotel tariffs (Save 15% - 22% annually)'
    },
    {
      metric: 'Booking & Operations',
      without: 'Manual searches by EAs or employees wasting 20+ working hours/month',
      with: 'Dedicated Travel Desk with 30-minute SLA itinerary turnarounds'
    },
    {
      metric: 'Vendor Management',
      without: 'Scattered invoices across multiple airlines, hotels, and local cab drivers',
      with: 'Centralized monthly billing statement with full line-item reconciliation'
    },
    {
      metric: 'Visas & Immigration',
      without: 'High risk of document rejections, delayed embassy slots, & lost trips',
      with: 'Zero-error document audits & 99.2% approval rate across Schengen, US, UK, China'
    },
    {
      metric: '24/7 Emergency Support',
      without: 'No emergency support outside standard office hours or during weekend flight delays',
      with: '365-day 24/7 human emergency helpline for instant flight re-routing'
    },
    {
      metric: 'Tax Compliance (GST)',
      without: 'Incomplete or missing GSTIN numbers resulting in lost Input Tax Credit (ITC)',
      with: '100% compliant state tax invoices ensuring full ITC recovery for finance teams'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-[#F8FAFC] text-[#111827] relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider border border-[#0A2D68]/20">
            Why Choose Flyspurs
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D]">
            The Strategic Advantage of Managed Corporate Travel
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Comparing informal internal booking methods against Flyspurs enterprise-grade corporate travel management.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* WITHOUT FLYSPURS */}
          <div className="bg-white rounded-2xl p-8 border border-rose-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="p-3 bg-rose-100 text-rose-600 rounded-xl">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-rose-700">WITHOUT FLYSPURS</h3>
                <p className="text-xs text-gray-500">Unmanaged, informal internal travel handling</p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, idx) => (
                <div key={idx} className="p-4 bg-rose-50/50 rounded-xl border border-rose-100 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">{item.metric}</span>
                  <p className="text-xs text-gray-700 font-medium flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{item.without}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* WITH FLYSPURS */}
          <div className="bg-white rounded-2xl p-8 border border-[#D5AF58] shadow-lg space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#0A2D68] text-[#D5AF58] rounded-xl font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0A2D68]">WITH FLYSPURS</h3>
                  <p className="text-xs text-[#4B5563]">Enterprise corporate travel management</p>
                </div>
              </div>

              <span className="hidden sm:inline-block px-3 py-1 bg-[#EEF5FF] rounded-full text-xs font-bold text-[#0A2D68] border border-[#0A2D68]/20">
                Managed Partnership
              </span>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A2D68]">{item.metric}</span>
                  <p className="text-xs text-[#111827] font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D5AF58] shrink-0 mt-0.5" />
                    <span>{item.with}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Plan Your Next Corporate Journey Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2D68] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#D5AF58]" />
              <span>Corporate Travel Coordination</span>
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#071B3D]">
              Plan Your Next Corporate Journey
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              From business travel and international delegations to incentive tours and exhibitions, Flyspurs helps coordinate your journey from planning to arrival.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenWhatsApp('Plan Your Next Corporate Journey')}
              className="w-full md:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#D5AF58]" />
              <span>Talk to Flyspurs</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

