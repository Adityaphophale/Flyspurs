import React, { useState } from 'react';
import { MapPin, Mail, Phone, MessageSquare, Building2, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Logo } from '../components/Logo';

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
    travelType: '',
    requirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid work email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination is required';
    }

    if (!formData.travelType) {
      newErrors.travelType = 'Please select a Travel Type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const lines = [
      'New Flyspurs Corporate Travel Inquiry',
      '',
      `Name: ${formData.fullName.trim()}`,
      `Company: ${formData.companyName.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Destination: ${formData.destination.trim()}`,
      `Travel Type: ${formData.travelType}`,
    ];

    if (formData.requirements.trim()) {
      lines.push(`Requirements: ${formData.requirements.trim()}`);
    }

    const messageText = lines.join('\n');
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919274565625?text=${encodedMessage}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white text-[#111827] relative border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Contact Layout: LEFT (Contact Info), RIGHT (Google Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Flyspurs Office Information */}
          <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] shadow-xs flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Flyspurs Branding */}
              <div className="space-y-1">
                <Logo className="h-10 sm:h-11" variant="dark" />
                <p className="text-xs font-bold text-[#0A2D68] uppercase tracking-wider">Corporate Travel Management</p>
              </div>

              {/* Address & Contact Info */}
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

                {/* GSTIN */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0A2D68] text-[#D5AF58] rounded-xl shrink-0 shadow-2xs">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#071B3D]">GSTIN:</p>
                    <p className="text-[#111827] font-semibold">24BBNPS9571D1Z7</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
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

            {/* Directions Link */}
            <div className="pt-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=22.2947237,73.1248216"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0A2D68] hover:bg-[#071B3D] text-white font-bold text-sm rounded-2xl shadow-xs transition-all"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 text-[#D5AF58]" />
              </a>
            </div>

          </div>

          {/* RIGHT: Google Maps Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xs relative min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]">
            <iframe
              title="Flyspurs Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.68334468699!2d73.1248216!3d22.2947237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc94cd3a37367%3A0xa1ea009405d4fb17!2sSiddhivinayak%20Arcus!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
          </div>

        </div>

        {/* Corporate Travel Inquiry Form Container */}
        <div className="mt-12 bg-[#F8FAFC] p-6 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-sm max-w-4xl mx-auto space-y-8">
          
          {/* Form Header */}
          <div className="space-y-1.5 text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#071B3D]">
              Let’s Plan Your Next Business Journey
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563]">
              Tell us what you need and our travel team will get in touch.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-xl font-bold text-[#071B3D]">Opening WhatsApp...</h4>
              <p className="text-xs text-[#4B5563] max-w-sm mx-auto">
                Your structured inquiry details are loading into WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5 text-xs sm:text-sm">
              
              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1.5">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full min-h-[48px] px-4 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors ${
                      errors.fullName ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#E5E7EB] focus:border-[#0A2D68]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1.5">
                    COMPANY NAME *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={(e) => {
                      setFormData({ ...formData, companyName: e.target.value });
                      if (errors.companyName) setErrors({ ...errors, companyName: '' });
                    }}
                    className={`w-full min-h-[48px] px-4 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors ${
                      errors.companyName ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#E5E7EB] focus:border-[#0A2D68]'
                    }`}
                  />
                  {errors.companyName && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.companyName}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Work Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1.5">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your business email address"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full min-h-[48px] px-4 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#E5E7EB] focus:border-[#0A2D68]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1.5">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your contact number"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full min-h-[48px] px-4 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#E5E7EB] focus:border-[#0A2D68]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Destination & Travel Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1.5">
                    DESTINATION *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your destination"
                    value={formData.destination}
                    onChange={(e) => {
                      setFormData({ ...formData, destination: e.target.value });
                      if (errors.destination) setErrors({ ...errors, destination: '' });
                    }}
                    className={`w-full min-h-[48px] px-4 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors ${
                      errors.destination ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#E5E7EB] focus:border-[#0A2D68]'
                    }`}
                  />
                  {errors.destination && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.destination}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1.5">
                    TRAVEL TYPE *
                  </label>
                  <select
                    value={formData.travelType}
                    onChange={(e) => {
                      setFormData({ ...formData, travelType: e.target.value });
                      if (errors.travelType) setErrors({ ...errors, travelType: '' });
                    }}
                    className={`w-full min-h-[48px] px-4 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors cursor-pointer ${
                      errors.travelType ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#E5E7EB] focus:border-[#0A2D68]'
                    }`}
                  >
                    <option value="" disabled>Select travel requirement</option>
                    <option value="Corporate Travel">Corporate Travel</option>
                    <option value="Business Visa Assistance">Business Visa Assistance</option>
                    <option value="International Delegation">International Delegation</option>
                    <option value="Exhibition Travel">Exhibition Travel</option>
                    <option value="Incentive Tour">Incentive Tour</option>
                    <option value="Flight & Hotel Coordination">Flight & Hotel Coordination</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.travelType && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.travelType}</p>
                  )}
                </div>
              </div>

              {/* Row 4: Travel Requirements */}
              <div>
                <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1.5">
                  TRAVEL REQUIREMENTS
                </label>
                <textarea
                  rows={4}
                  placeholder="Please share your travel requirements, destination, dates, number of travellers and any specific requirements."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full p-4 text-xs sm:text-sm border border-[#E5E7EB] rounded-xl bg-white text-[#111827] focus:outline-none focus:border-[#0A2D68] transition-colors resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[52px] flex items-center justify-center gap-2.5 px-6 font-bold text-xs sm:text-sm text-white bg-[#0A2D68] hover:bg-[#071B3D] rounded-xl shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#D5AF58]" />
                  <span>Send Inquiry on WhatsApp  →</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
