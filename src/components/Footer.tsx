import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8FAFC] text-[#111827] pt-16 pb-12 border-t border-[#E5E7EB] relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A2D68]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D5AF58]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E5E7EB]">
          
          {/* Column 1: Brand Info, Description & CTA */}
          <div className="lg:col-span-2 space-y-5">
            <Logo className="h-12" variant="dark" />
            <p className="text-[#4B5563] text-sm leading-relaxed pr-4">
              Flyspurs is India's premier B2B Corporate Travel Management partner. We empower organizations to simplify business travel through strategic flight & hotel coordination, global visa clearances, MICE incentive tours, and international delegation logistics.
            </p>
            
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenWhatsApp('Footer Consultation Request')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-sm rounded-xl shadow-md transition-all duration-200"
              >
                <span>Request B2B Corporate Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#D5AF58]" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/company/flyspurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 text-[#0A2D68] bg-white border border-[#E5E7EB] hover:border-[#0A2D68] hover:text-[#071B3D] rounded-lg transition-colors shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/official_flyspurs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 text-[#0A2D68] bg-white border border-[#E5E7EB] hover:border-[#0A2D68] hover:text-[#071B3D] rounded-lg transition-colors shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-[#0A2D68] tracking-wide">QUICK NAVIGATION</h4>
            <ul className="space-y-2.5 text-sm text-[#4B5563]">
              <li><a href="/#about" className="hover:text-[#0A2D68] transition-colors">About Flyspurs</a></li>
              <li><a href="/#services" className="hover:text-[#0A2D68] transition-colors">Corporate Services</a></li>
              <li><a href="/#industries" className="hover:text-[#0A2D68] transition-colors">Industries We Serve</a></li>
              <li><a href="/#why-us" className="hover:text-[#0A2D68] transition-colors">Why Choose Flyspurs</a></li>
              <li><a href="/#process" className="hover:text-[#0A2D68] transition-colors">Corporate Travel Process</a></li>
              <li><a href="/#incentive-tours" className="hover:text-[#0A2D68] transition-colors">Corporate Incentive Tours</a></li>
              <li><a href="/#exhibitions" className="hover:text-[#0A2D68] transition-colors">Exhibition & Trade Fairs</a></li>
              <li><Link to="/blog" className="hover:text-[#0A2D68] transition-colors">Blog</Link></li>
              <li><a href="/#contact" className="hover:text-[#0A2D68] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate Solutions */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-[#0A2D68] tracking-wide">CORPORATE SOLUTIONS</h4>
            <ul className="space-y-2.5 text-sm text-[#4B5563]">
              <li><button onClick={() => onOpenWhatsApp('Corporate Flight Coordination')} className="hover:text-[#0A2D68] text-left transition-colors">Flight Coordination</button></li>
              <li><button onClick={() => onOpenWhatsApp('Corporate Hotel Reservations')} className="hover:text-[#0A2D68] text-left transition-colors">Hotel Reservations</button></li>
              <li><button onClick={() => onOpenWhatsApp('Business Visa Assistance')} className="hover:text-[#0A2D68] text-left transition-colors">Business Visa Assistance</button></li>
              <li><button onClick={() => onOpenWhatsApp('International Delegations')} className="hover:text-[#0A2D68] text-left transition-colors">International Delegations</button></li>
              <li><button onClick={() => onOpenWhatsApp('Exhibition Travel')} className="hover:text-[#0A2D68] text-left transition-colors">Exhibition Travel</button></li>
              <li><button onClick={() => onOpenWhatsApp('Incentive Tours')} className="hover:text-[#0A2D68] text-left transition-colors">Incentive Tours</button></li>
              <li><button onClick={() => onOpenWhatsApp('Airport Transfers')} className="hover:text-[#0A2D68] text-left transition-colors">Airport Transfers</button></li>
              <li><button onClick={() => onOpenWhatsApp('Corporate Travel Management')} className="hover:text-[#0A2D68] text-left transition-colors">Corporate Travel</button></li>
            </ul>
          </div>

          {/* Column 4: Corporate Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-[#0A2D68] tracking-wide">CORPORATE CONTACT</h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#4B5563]">
              
              <div className="space-y-1">
                <p className="font-bold text-[#111827]">Flyspurs</p>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0A2D68] shrink-0 mt-0.5" />
                  <p className="text-[#4B5563]">
                    4th Floor, Siddhivinayak Arcus,<br />
                    413, Bhayli Road,<br />
                    Bhayli, Vadodara,<br />
                    Gujarat 391410
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#0A2D68] shrink-0" />
                <a href="tel:+919274565625" className="hover:text-[#0A2D68] text-[#111827] font-bold">+91 92745 65625</a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0A2D68] shrink-0" />
                <a href="mailto:travel@flyspurs.com" className="hover:text-[#0A2D68] text-[#111827] font-semibold underline">travel@flyspurs.com</a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#4B5563] gap-4">
          <p>© {currentYear} Flyspurs Corporate Travel Management. All rights reserved. "Beyond The Destination".</p>

          <div className="flex items-center gap-6">
            <a href="/#privacy" className="hover:text-[#0A2D68] transition-colors">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="/#terms" className="hover:text-[#0A2D68] transition-colors">Terms & Conditions</a>
            <span className="text-gray-300">|</span>
            <button onClick={() => onOpenWhatsApp('Footer Contact')} className="text-[#0A2D68] font-bold hover:underline">
              WhatsApp B2B Inquiry
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
