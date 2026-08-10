import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, ShieldCheck, MessageSquare, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { Logo } from '../components/Logo';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenWhatsApp }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    destination: '',
    travelRequirement: 'End-to-End Corporate Travel Management',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0A2D68', '#D5AF58', '#071B3D'],
      });
    } catch {
      //
    }

    const messageText = `Hello Flyspurs,

I am interested in your Corporate Travel Services.

Name: ${formData.fullName}
Company: ${formData.companyName}
Email: ${formData.email}
Phone: ${formData.phone}
Destination: ${formData.destination || 'Not Specified'}
Requirement: ${formData.travelRequirement}
Message: ${formData.message || 'I would like to schedule a B2B corporate travel consultation.'}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919274565625?text=${encodedMessage}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-white text-[#111827] relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 bg-[#0A2D68]/10 text-[#0A2D68] rounded-full text-xs font-bold uppercase tracking-wider border border-[#0A2D68]/20">
            Initiate Partnership
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#071B3D]">
            Connect With Flyspurs Travel Desk
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Schedule a B2B travel audit, request a MICE proposal, or speak directly with our senior corporate advisory leads.
          </p>
        </div>

        {/* Large Corporate Office Image Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E5E7EB] h-64 sm:h-80">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
            alt="Flyspurs Corporate Headquarters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B3D]/90 via-[#071B3D]/40 to-transparent p-6 sm:p-10 flex flex-col justify-end text-white">
            <span className="text-[#D5AF58] text-xs font-bold uppercase tracking-wider">Corporate Headquarters</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold">Vadodara, Gujarat • India</h3>
          </div>
        </div>

        {/* Contact Layout: LEFT (Contact Info & Get Directions), RIGHT (Interactive Google Map Embed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Contact Information & Actions */}
          <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Flyspurs Logo */}
              <div>
                <Logo className="h-10 sm:h-11" variant="dark" />
              </div>

              {/* Short Contact Description */}
              <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                India's premier B2B Corporate Travel Management desk. Reach out directly for corporate travel audits, visa assistance, and global delegation logistics.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 text-xs sm:text-sm text-[#111827]">
                
                {/* Office */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#0A2D68] text-[#D5AF58] rounded-xl shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#071B3D]">Head Office:</p>
                    <p className="text-[#4B5563] mt-0.5">413, 4th Floor, Siddhivinayak Arcus, Bhayli Road, Vadodara – 391410, Gujarat, India.</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A2D68] text-[#D5AF58] rounded-xl shrink-0 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#071B3D]">Phone / WhatsApp Desk:</p>
                    <a href="tel:+919274565625" className="text-[#0A2D68] font-extrabold hover:underline">+91 - 92745 65625</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A2D68] text-[#D5AF58] rounded-xl shrink-0 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#071B3D]">Corporate Email:</p>
                    <a href="mailto:travel@flyspurs.com" className="text-[#0A2D68] font-semibold hover:underline">travel@flyspurs.com</a>
                  </div>
                </div>

                {/* WhatsApp Direct Action */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A2D68] text-[#D5AF58] rounded-xl shrink-0 shadow-2xs">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#071B3D]">WhatsApp Desk:</p>
                    <button
                      onClick={() => onOpenWhatsApp('Contact Desk Direct Inquiry')}
                      className="text-[#0A2D68] font-bold hover:underline"
                    >
                      Connect on WhatsApp
                    </button>
                  </div>
                </div>

              </div>

              {/* Social Media Links: LinkedIn & Instagram */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-xs font-bold text-[#071B3D]">Social Channels:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/flyspurs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="px-3 py-1.5 bg-white border border-[#E5E7EB] hover:border-[#0A2D68] text-[#0A2D68] font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/official_flyspurs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="px-3 py-1.5 bg-white border border-[#E5E7EB] hover:border-[#0A2D68] text-[#0A2D68] font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Primary Action Button: Get Directions */}
            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/tihSGDht4k7h8F6s7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all border border-[#0A2D68]"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 text-[#D5AF58]" />
              </a>
            </div>

          </div>

          {/* RIGHT: Interactive Google Maps Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-lg relative min-h-[380px] lg:min-h-[480px]">
            <iframe
              title="Flyspurs Head Office - Siddhivinayak Arcus, Bhayli Road, Vadodara"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.68334468699!2d73.1259508!3d22.281898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc94cd3a37367%3A0xa1ea009405d4fb17!2sSiddhivinayak%20Arcus!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
            
            {/* Quick Overlay Floating Action on Map */}
            <a
              href="https://maps.app.goo.gl/tihSGDht4k7h8F6s7"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 px-4 py-2 bg-[#0A2D68] text-white text-xs font-bold rounded-xl shadow-lg hover:bg-[#071B3D] transition-colors flex items-center gap-2 border border-white/20 z-10"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D5AF58]" />
              <span>Open Location on Google Maps</span>
            </a>
          </div>

        </div>

        {/* Direct B2B WhatsApp Inquiry Form Container Below */}
        <div className="mt-12 bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] shadow-lg max-w-4xl mx-auto space-y-6">
          <div className="space-y-1 text-center">
            <h3 className="font-heading text-xl font-bold text-[#071B3D]">Start Your Corporate Travel Inquiry</h3>
            <p className="text-xs text-[#4B5563]">Routes formatted query directly to our Senior Travel Manager on WhatsApp.</p>
          </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-heading text-xl font-bold text-[#071B3D]">Connecting to WhatsApp...</h4>
                <p className="text-xs text-[#4B5563] max-w-sm mx-auto">
                  Directing you to Flyspurs Senior Corporate Advisory Desk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111827] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-2.5 text-xs border border-[#E5E7EB] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111827] mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mechtech Inframine Ltd."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full p-2.5 text-xs border border-[#E5E7EB] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111827] mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. r.sharma@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 text-xs border border-[#E5E7EB] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111827] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 text-xs border border-[#E5E7EB] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#111827] mb-1">Primary Destination</label>
                    <input
                      type="text"
                      placeholder="e.g. Germany, Dubai, Canton Fair"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full p-2.5 text-xs border border-[#E5E7EB] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111827] mb-1">Service Requirement *</label>
                    <select
                      value={formData.travelRequirement}
                      onChange={(e) => setFormData({ ...formData, travelRequirement: e.target.value })}
                      className="w-full p-2.5 text-xs border border-[#E5E7EB] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                    >
                      <option value="End-to-End Corporate Travel Management">End-to-End Corporate Travel Desk</option>
                      <option value="Corporate Flight Coordination">Corporate Flight Coordination</option>
                      <option value="Corporate Hotel Reservations">Corporate Hotel Reservations</option>
                      <option value="Business Visa Assistance">Business Visa Assistance</option>
                      <option value="Corporate Incentive Tours">Corporate Incentive Tours (MICE)</option>
                      <option value="Trade Fair & Exhibition Travel">Trade Fair & Exhibition Logistics</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1">Travel Requirement Details</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details regarding travel frequency, delegation size, upcoming exhibition dates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 text-xs border border-[#E5E7EB] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 font-bold text-xs text-[#071B3D] bg-[#D5AF58] hover:bg-[#c49f48] rounded-xl shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-[#071B3D]" />
                  <span>Submit & Open WhatsApp Inquiry</span>
                </button>

              </form>
            )}

          </div>

      </div>
    </section>
  );
};

