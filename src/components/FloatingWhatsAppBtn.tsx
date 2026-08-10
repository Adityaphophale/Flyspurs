import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

interface FloatingWhatsAppBtnProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const FloatingWhatsAppBtn: React.FC<FloatingWhatsAppBtnProps> = ({ onOpenWhatsApp }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 group">
      
      {/* Tooltip badge */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-[#071B3D] text-white text-xs font-semibold rounded-xl shadow-xl border border-[#D5AF58]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Corporate Travel Desk Online</span>
      </div>

      {/* Main Pulse Button */}
      <button
        onClick={() => onOpenWhatsApp('Floating Quick Connect')}
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#D5AF58] to-[#B8923C] text-[#071B3D] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white focus:outline-none"
        aria-label="Connect via WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#D5AF58]/50 animate-ping opacity-75"></span>
        <MessageSquare className="w-7 h-7 fill-[#071B3D] relative z-10" />
      </button>

    </div>
  );
};
