import React, { useState } from 'react';
import { corporateFAQs, FAQItem } from '../data/faqData';
import { ChevronDown, HelpCircle, MessageSquare, Phone } from 'lucide-react';

interface FAQSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenWhatsApp }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = ['All', 'General', 'Visas & Compliance', 'Flights & Hotels', 'Billing & Savings', 'Incentives & MICE'];

  const filteredFaqs = selectedCategory === 'All'
    ? corporateFAQs
    : corporateFAQs.filter((faq) => faq.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#F7F8FA] text-[#071B3D] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D]">
            Corporate Travel Management FAQ
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Clear answers regarding corporate credit terms, visa lead times, GST tax credits, SLAs, and emergency travel support.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#0A2D68] text-[#D5AF58] shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-[#071B3D] hover:text-[#0A2D68] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#D5AF58] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-[#0A2D68]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#F7F8FA] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Bar */}
        <div className="bg-white text-[#111827] p-8 rounded-2xl border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-xl font-bold text-[#071B3D]">Have a Specific Travel Query?</h4>
            <p className="text-xs text-[#4B5563]">Speak directly with Flyspurs Senior Corporate Advisory Specialists.</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenWhatsApp('FAQ Direct Inquiry')}
              className="flex items-center gap-2 py-3 px-5 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#D5AF58]" />
              <span>WhatsApp Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
