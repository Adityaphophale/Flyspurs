import React, { useState } from 'react';
import { X, Send, MessageSquare, Building2, User, Mail, Phone, MapPin, Briefcase, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'End-to-End Corporate Travel Management',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    destination: '',
    travelRequirement: defaultService,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger confetti celebrating inquiry submission
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0A2D68', '#D5AF58', '#071B3D'],
      });
    } catch {
      // Fallback
    }

    const messageText = `Hello Flyspurs,

I am interested in your Corporate Travel Services.

Name: ${formData.fullName}
Company: ${formData.companyName}
Email: ${formData.email}
Phone: ${formData.phone}
Destination: ${formData.destination || 'Not Specified'}
Requirement: ${formData.travelRequirement}
Message: ${formData.message || 'I would like to discuss a corporate travel management partnership.'}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919274565625?text=${encodedMessage}`;

    setSubmitted(true);

    // Open WhatsApp in new window after slight delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071B3D]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#D5AF58]/30 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#0A2D68] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-200 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 border border-[#D5AF58]/50 rounded-xl text-[#D5AF58]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white">Schedule B2B Consultation</h3>
              <p className="text-xs text-gray-200">Direct connection with Flyspurs Corporate Advisory Desk</p>
            </div>
          </div>
        </div>

        {/* Modal Body / Form */}
        <div className="p-6 overflow-y-auto space-y-4">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-[#071B3D]">Redirecting to WhatsApp...</h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Your B2B inquiry details have been formatted. Connecting you directly with our senior corporate travel manager.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Company Name *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mechtech Inframine Ltd."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Work Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. r.sharma@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Destination */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Primary Destination</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Germany, Dubai, USA, Canton Fair"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                    />
                  </div>
                </div>

                {/* Travel Requirement */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Service Requirement *</label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <select
                      value={formData.travelRequirement}
                      onChange={(e) => setFormData({ ...formData, travelRequirement: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2D68] bg-white"
                    >
                      <option value="End-to-End Corporate Travel Management">End-to-End Corporate Travel Desk</option>
                      <option value="Corporate Flight Coordination">Corporate Flight Coordination</option>
                      <option value="Corporate Hotel Reservations">Corporate Hotel Reservations</option>
                      <option value="Business Visa Assistance">Business Visa Assistance</option>
                      <option value="Corporate Incentive Tours">Corporate Incentive Tours (MICE)</option>
                      <option value="Trade Fair & Exhibition Travel">Trade Fair & Exhibition Logistics</option>
                      <option value="International Delegations">International C-Suite Delegation</option>
                      <option value="Airport Transfers & Ground Mobility">Airport Transfers & Chauffeur</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Travel Requirement Details</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about expected travel frequency, team size, upcoming exhibition, or specific corporate travel requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2D68]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 font-bold text-base text-[#071B3D] bg-gradient-to-r from-[#D5AF58] via-[#F4E8C1] to-[#D5AF58] hover:from-[#F4E8C1] hover:to-[#D5AF58] rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5 fill-[#071B3D]" />
                <span>Submit & Open WhatsApp Chat</span>
              </button>

              <p className="text-center text-xs text-gray-500">
                🔒 Privacy Assured: We respect your corporate data. No spam guaranteed.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
