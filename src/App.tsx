import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { SEOResourcesPage } from './pages/SEOResourcesPage';
import { WhatsAppModal } from './components/WhatsAppModal';
import { FloatingWhatsAppBtn } from './components/FloatingWhatsAppBtn';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('End-to-End Corporate Travel Management');

  const handleOpenWhatsApp = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    setIsWhatsAppOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-body text-[#071B3D] flex flex-col justify-between selection:bg-[#D5AF58] selection:text-[#071B3D]">
        
        {/* Navigation Bar */}
        <Navbar
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Page Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenWhatsApp={handleOpenWhatsApp}
              />
            }
          />
          <Route
            path="/blog"
            element={<BlogPage onOpenWhatsApp={handleOpenWhatsApp} />}
          />
          <Route
            path="/blog/:slug"
            element={<BlogPostPage onOpenWhatsApp={handleOpenWhatsApp} />}
          />
          <Route path="/seo-resources" element={<SEOResourcesPage />} />
        </Routes>

        {/* Global Footer */}
        <Footer onOpenWhatsApp={handleOpenWhatsApp} />

        {/* WhatsApp Inquiry Modal */}
        <WhatsAppModal
          isOpen={isWhatsAppOpen}
          onClose={() => setIsWhatsAppOpen(false)}
          defaultService={selectedService}
        />

        {/* Persistent Floating Quick Connect Button */}
        <FloatingWhatsAppBtn onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Back To Top Scroll Button */}
        <BackToTop />

      </div>
    </Router>
  );
}

