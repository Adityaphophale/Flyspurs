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

        {/* Contact Layout: LEFT (Contact Info & Actions), RIGHT (Exact Flyspurs Google Map Pin) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Flyspurs Office Information & Contact Actions */}
          <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Flyspurs Branding */}
              <div className="space-y-1">
                <Logo className="h-10 sm:h-11" variant="dark" />
                <p className="text-xs font-bold text-[#0A2D68] uppercase tracking-wider">Corporate Travel Management</p>
              </div>

              {/* Exact Address */}
              <div className="space-y-4 text-xs sm:text-sm text-[#111827]">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#0A2D68] text-[#D5AF58] rounded-xl shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#071B3D]">Head Office:</p>
                    <p className="text-[#4B5563] mt-0.5 leading-relaxed">
                      4th Floor, Siddhivinayak Arcus,<br />
                      413, Bhayli Road, Bhayli,<br />
                      Vadodara, Gujarat 391410, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A2D68] text-[#D5AF58] rounded-xl shrink-0 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#071B3D]">Phone / Desk:</p>
                    <a href="tel:+919274565625" className="text-[#0A2D68] font-extrabold hover:underline">+91 92745 65625</a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A2D68] text-[#D5AF58] rounded-xl shrink-0 shadow-2xs">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#071B3D]">Official Website:</p>
                    <a href="https://flyspurs.com" className="text-[#0A2D68] font-semibold hover:underline">flyspurs.com</a>
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
              </div>

              {/* Social Channels & WhatsApp */}
              <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onOpenWhatsApp('Contact Desk Direct Inquiry')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0A2D68] hover:underline"
                >
                  <MessageSquare className="w-4 h-4 text-[#D5AF58]" />
                  <span>WhatsApp Inquiry</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/flyspurs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 bg-white border border-[#E5E7EB] hover:border-[#0A2D68] text-[#0A2D68] rounded-xl transition-colors shadow-2xs"
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
                    className="p-2 bg-white border border-[#E5E7EB] hover:border-[#0A2D68] text-[#0A2D68] rounded-xl transition-colors shadow-2xs"
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

            {/* Primary Action Button: Get Directions */}
            <div className="pt-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=22.2947237,73.1248216"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all border border-[#0A2D68]"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 text-[#D5AF58]" />
              </a>
            </div>

          </div>

          {/* RIGHT: Interactive Google Maps Embed Centered EXACTLY on Flyspurs (22.2947237, 73.1248216) */}
          <div className="lg:col-span-7 rounded-[20px] overflow-hidden border border-[#E5E7EB] shadow-md relative h-[350px] sm:h-[400px] lg:h-[450px]">
            <iframe
              title="Flyspurs Office Location Map"
              src="https://maps.google.com/maps?q=22.2947237,73.1248216+(Flyspurs)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
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

