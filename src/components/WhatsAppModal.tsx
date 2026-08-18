import React, { useState, useEffect } from 'react';
import { X, MessageSquare, CheckCircle } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Corporate Travel',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    destination: '',
    travelType: defaultService || 'Corporate Travel',
    requirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, travelType: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

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
      'New Flyspurs Business Travel Inquiry',
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
      onClose();
      setSubmitted(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#071B3D]/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-[640px] max-h-[90vh] bg-white rounded-[20px] shadow-2xl overflow-hidden border border-[#E5E7EB] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0A2D68] p-5 sm:p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="space-y-1 pr-10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">Plan Your Business Travel</h3>
            <p className="text-xs sm:text-sm text-gray-200">Tell us about your travel requirement and we'll help you plan it.</p>
          </div>
        </div>

        {/* Modal Body / Form */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-xl font-bold text-[#071B3D]">Opening WhatsApp...</h4>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                Connecting you directly with Flyspurs travel team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1">
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
                    className={`w-full min-h-[48px] px-3.5 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors ${
                      errors.fullName ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#E5E7EB] focus:border-[#0A2D68]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1">
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
                    className={`w-full min-h-[48px] px-3.5 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors ${
                      errors.companyName ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#E5E7EB] focus:border-[#0A2D68]'
                    }`}
                  />
                  {errors.companyName && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.companyName}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Work Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1">
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
                    className={`w-full min-h-[48px] px-3.5 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#E5E7EB] focus:border-[#0A2D68]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1">
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
                    className={`w-full min-h-[48px] px-3.5 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#E5E7EB] focus:border-[#0A2D68]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Destination & Travel Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1">
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
                    className={`w-full min-h-[48px] px-3.5 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors ${
                      errors.destination ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#E5E7EB] focus:border-[#0A2D68]'
                    }`}
                  />
                  {errors.destination && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.destination}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1">
                    TRAVEL TYPE *
                  </label>
                  <select
                    value={formData.travelType}
                    onChange={(e) => {
                      setFormData({ ...formData, travelType: e.target.value });
                      if (errors.travelType) setErrors({ ...errors, travelType: '' });
                    }}
                    className={`w-full min-h-[48px] px-3.5 text-xs sm:text-sm border rounded-xl bg-white text-[#111827] focus:outline-none transition-colors cursor-pointer ${
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
                <label className="block text-xs font-bold text-[#071B3D] uppercase tracking-wider mb-1">
                  TRAVEL REQUIREMENTS
                </label>
                <textarea
                  rows={3}
                  placeholder="Please share your destination, travel dates, number of travellers and any specific requirements."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full p-3.5 text-xs sm:text-sm border border-[#E5E7EB] rounded-xl bg-white text-[#111827] focus:outline-none focus:border-[#0A2D68] transition-colors resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full min-h-[52px] flex items-center justify-center gap-2.5 px-6 font-bold text-xs sm:text-sm text-white bg-[#0A2D68] hover:bg-[#071B3D] rounded-xl shadow-xs transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#D5AF58]" />
                  <span>Send Inquiry on WhatsApp →</span>
                </button>

                <div className="text-center">
                  <a
                    href="/#privacy"
                    className="text-[11px] text-gray-500 hover:text-[#0A2D68] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
