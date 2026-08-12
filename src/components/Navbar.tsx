import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { MessageSquare, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenWhatsApp: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Corporate Travel', path: '/#services' },
    { name: 'Business Visa', path: '/#services' },
    { name: 'Incentive Tours', path: '/#incentive-tours' },
    { name: 'Exhibitions', path: '/#exhibitions' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#E5E7EB]'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-[#E5E7EB]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <Logo className="h-8 sm:h-10 md:h-11" variant="dark" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => {
            const isBlogLink = link.path === '/blog';
            return (
              <React.Fragment key={link.name}>
                {isBlogLink ? (
                  <Link
                    to="/blog"
                    className={`px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                      location.pathname.startsWith('/blog')
                        ? 'text-[#0A2D68] bg-[#EEF5FF] border border-[#0A2D68]/20'
                        : 'text-[#374151] hover:text-[#0A2D68] hover:bg-[#EEF5FF]'
                    }`}
                  >
                    Blog
                  </Link>
                ) : (
                  <a
                    href={link.path}
                    className="px-2.5 py-1.5 text-xs xl:text-sm font-semibold text-[#374151] hover:text-[#0A2D68] hover:bg-[#EEF5FF] transition-colors rounded-lg whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Header Action Button - Single Schedule Consultation CTA */}
        <div className="hidden xl:flex items-center">
          <button
            onClick={() => onOpenWhatsApp('General Corporate Travel Inquiry')}
            className="flex items-center gap-2 px-4 py-2 text-xs xl:text-sm font-bold text-white bg-[#0A2D68] hover:bg-[#071B3D] rounded-xl shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#D5AF58]" />
            <span>Schedule Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-[#111827] bg-[#F8FAFC] rounded-xl hover:bg-[#EEF5FF] border border-[#E5E7EB] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-[#E5E7EB] px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col space-y-1 divide-y divide-[#F3F4F6]">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.path === '/blog' ? (
                  <Link
                    to="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-2 text-sm font-bold text-[#0A2D68] hover:bg-[#EEF5FF] rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>Blog</span>
                  </Link>
                ) : (
                  <a
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-2 text-sm font-semibold text-[#374151] hover:text-[#0A2D68] hover:bg-[#EEF5FF] rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                  </a>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp('Schedule Consultation');
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-[#0A2D68] hover:bg-[#071B3D] rounded-xl shadow-md min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 text-[#D5AF58]" />
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
