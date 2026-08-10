import React, { useState } from 'react';
import { X, Calculator, TrendingDown, DollarSign, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface CostCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: (msg?: string) => void;
  onOpenWhatsApp?: (service?: string) => void;
}

export const CostCalculatorModal: React.FC<CostCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
  onOpenWhatsApp,
}) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(15000); // USD or converted INR
  const [currency, setCurrency] = useState<'USD' | 'INR'>('INR');
  const [travelersCount, setTravelersCount] = useState<number>(25);
  const [internationalRatio, setInternationalRatio] = useState<number>(60); // % international

  if (!isOpen) return null;

  const multiplier = currency === 'INR' ? 85 : 1;
  const currentAnnualSpend = monthlySpend * 12 * (currency === 'INR' ? 100000 : 1);

  // Projected Savings Math
  const estimatedSavingsMin = Math.round(currentAnnualSpend * 0.16);
  const estimatedSavingsMax = Math.round(currentAnnualSpend * 0.22);
  const estimatedGstRecovery = currency === 'INR' ? Math.round(currentAnnualSpend * 0.05) : Math.round(currentAnnualSpend * 0.03);
  const hoursSavedPerYear = Math.round(travelersCount * 18);

  const formatCurrency = (amount: number) => {
    if (currency === 'INR') {
      if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
      if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} Lakhs`;
      return `₹${amount.toLocaleString('en-IN')}`;
    }
    return `$${amount.toLocaleString('en-US')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071B3D]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#D5AF58]/40 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#071B3D] text-white p-6 relative border-b border-[#D5AF58]/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#D5AF58]/20 border border-[#D5AF58] rounded-xl text-[#D5AF58]">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                Corporate Travel ROI & Savings Estimator
                <Sparkles className="w-4 h-4 text-[#D5AF58]" />
              </h3>
              <p className="text-xs text-gray-300">Simulate potential annual cost reduction with Flyspurs managed travel</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F7F8FA] p-5 rounded-xl border border-gray-200">
            
            {/* Spend Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#071B3D]">Monthly Travel Budget</label>
                <div className="flex items-center gap-1 bg-white border border-gray-300 rounded-md p-1 text-xs">
                  <button
                    onClick={() => setCurrency('INR')}
                    className={`px-2 py-0.5 rounded ${currency === 'INR' ? 'bg-[#0A2D68] text-white font-bold' : 'text-gray-600'}`}
                  >
                    INR (Lakhs)
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-2 py-0.5 rounded ${currency === 'USD' ? 'bg-[#0A2D68] text-white font-bold' : 'text-gray-600'}`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              <input
                type="range"
                min={currency === 'INR' ? 2 : 2000}
                max={currency === 'INR' ? 100 : 100000}
                step={currency === 'INR' ? 1 : 1000}
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full accent-[#0A2D68]"
              />

              <div className="text-right font-heading text-lg font-bold text-[#0A2D68]">
                {currency === 'INR' ? `₹${monthlySpend} Lakhs / month` : `$${monthlySpend.toLocaleString()} / month`}
              </div>
            </div>

            {/* Travelers Count */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#071B3D]">Active Business Travelers</label>
              <input
                type="range"
                min={5}
                max={300}
                step={5}
                value={travelersCount}
                onChange={(e) => setTravelersCount(Number(e.target.value))}
                className="w-full accent-[#0A2D68]"
              />
              <div className="text-right font-heading text-lg font-bold text-[#0A2D68]">
                {travelersCount} Corporate Travelers
              </div>
            </div>

          </div>

          {/* Results Display Grid */}
          <div className="bg-[#EEF5FF] p-6 rounded-2xl text-[#111827] border border-[#0A2D68]/20 shadow-md space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A2D68]">
              Estimated Annual Impact for Your Organization
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="p-4 bg-white rounded-xl border border-[#E5E7EB] shadow-2xs">
                <div className="flex items-center gap-2 text-[#0A2D68] text-xs font-bold mb-1">
                  <TrendingDown className="w-4 h-4 text-[#D5AF58]" />
                  <span>Direct Cost Savings</span>
                </div>
                <div className="font-heading text-xl font-extrabold text-[#071B3D]">
                  {formatCurrency(estimatedSavingsMin)} - {formatCurrency(estimatedSavingsMax)}
                </div>
                <p className="text-[10px] text-[#4B5563] mt-1">16% - 22% via negotiated corporate airfares & hotel tariffs</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E5E7EB] shadow-2xs">
                <div className="flex items-center gap-2 text-[#0A2D68] text-xs font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#D5AF58]" />
                  <span>GST Tax Credit Realized</span>
                </div>
                <div className="font-heading text-xl font-extrabold text-[#0A2D68]">
                  + {formatCurrency(estimatedGstRecovery)}
                </div>
                <p className="text-[10px] text-[#4B5563] mt-1">100% compliant input tax invoices for accounting team</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E5E7EB] shadow-2xs">
                <div className="flex items-center gap-2 text-[#0A2D68] text-xs font-bold mb-1">
                  <Clock className="w-4 h-4 text-[#D5AF58]" />
                  <span>Productivity Time Saved</span>
                </div>
                <div className="font-heading text-xl font-extrabold text-[#071B3D]">
                  {hoursSavedPerYear} Hours
                </div>
                <p className="text-[10px] text-[#4B5563] mt-1">Recaptured administrative & HR search hours per year</p>
              </div>

            </div>

            <div className="p-3 bg-white border border-[#E5E7EB] rounded-xl flex items-center justify-between text-xs text-[#4B5563]">
              <span>* Projected based on Flyspurs historical client savings average across manufacturing, export, and IT sectors.</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2 text-center space-y-3">
            <button
              onClick={() => {
                onClose();
                const msg = `ROI Calculator Audit: Monthly Spend ${
                  currency === 'INR' ? `₹${monthlySpend} Lakhs` : `$${monthlySpend}`
                } for ${travelersCount} travelers`;
                if (onOpenWhatsApp) {
                  onOpenWhatsApp(msg);
                } else if (onOpenConsultation) {
                  onOpenConsultation(msg);
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 font-bold text-sm text-[#071B3D] bg-gradient-to-r from-[#D5AF58] via-[#F4E8C1] to-[#D5AF58] hover:from-[#F4E8C1] hover:to-[#D5AF58] rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Get Custom Travel Spend Audit & Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="text-xs text-gray-500 hover:text-[#0A2D68] underline"
            >
              Close Calculator
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
