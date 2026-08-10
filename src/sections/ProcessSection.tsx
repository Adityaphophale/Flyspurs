import React from 'react';

export const ProcessSection: React.FC = () => {
  const phases = [
    { num: '01', title: 'Plan & Audit', desc: 'Requirement gathering, travel policy compliance, and route optimization.' },
    { num: '02', title: 'Fares & Visas', desc: 'Negotiated corporate airfares, hotel allocations, and fast-track visas.' },
    { num: '03', title: 'Ground & Vouchers', desc: 'Flight-tracked chauffeur transfers, vouchers, and GST ITC invoices.' },
    { num: '04', title: '24/7 Desk Support', desc: 'Round-the-clock live desk support for flight changes and emergencies.' }
  ];

  return (
    <section id="process" className="py-20 bg-white text-[#111827] relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Width Image Banner with Workflow Overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB]">
          
          <img
            src="/plane_sunset.png"
            alt="Flyspurs Corporate Airplane Soaring Above Sunset Clouds"
            className="w-full h-[480px] sm:h-[520px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071B3D] via-[#071B3D]/80 to-transparent"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 p-6 sm:p-10 lg:p-12 flex flex-col justify-between text-white">
            
            {/* Header */}
            <div className="max-w-2xl space-y-2">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-[#D5AF58] rounded-full text-xs font-bold uppercase tracking-wider border border-[#D5AF58]/30">
                Execution Framework
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white">
                The Flyspurs Corporate Travel Process
              </h2>
              <p className="text-gray-200 text-xs sm:text-sm font-normal">
                A streamlined end-to-end framework delivering seamless executive mobility from initial planning to post-trip financial reconciliation.
              </p>
            </div>

            {/* 4-Phase Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {phases.map((p, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl font-extrabold text-[#D5AF58]">{p.num}</span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-white">{p.title}</h3>
                  <p className="text-[11px] text-gray-200 leading-normal">{p.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

