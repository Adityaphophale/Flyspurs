import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { IndustriesSection } from '../sections/IndustriesSection';
import { WhyFlyspursSection } from '../sections/WhyFlyspursSection';
import { ProcessSection } from '../sections/ProcessSection';
import { GlobalNetworkSection } from '../sections/GlobalNetworkSection';
import { IncentiveToursSection } from '../sections/IncentiveToursSection';
import { ExhibitionTravelSection } from '../sections/ExhibitionTravelSection';
import { BlogSection } from '../sections/BlogSection';
import { FAQSection } from '../sections/FAQSection';
import { ContactSection } from '../sections/ContactSection';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onOpenWhatsApp: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenWhatsApp,
}) => {
  return (
    <>
      <SEOHead
        title="Flyspurs | Corporate Travel Management"
        description="Flyspurs is India's premier B2B Corporate Travel Management company. Streamlining executive flights, hotel reservations, business visa assistance, trade fair logistics, and corporate incentive tours."
        canonicalUrl="https://www.flyspurs.com/"
      />

      <main className="overflow-x-hidden">
        <HeroSection onOpenWhatsApp={onOpenWhatsApp} />
        <AboutSection onOpenWhatsApp={onOpenWhatsApp} />
        <ServicesSection onOpenWhatsApp={onOpenWhatsApp} />
        <IndustriesSection onOpenWhatsApp={onOpenWhatsApp} />
        <WhyFlyspursSection onOpenWhatsApp={onOpenWhatsApp} />
        <ProcessSection />
        <GlobalNetworkSection onOpenWhatsApp={onOpenWhatsApp} />
        <IncentiveToursSection onOpenWhatsApp={onOpenWhatsApp} />
        <ExhibitionTravelSection onOpenWhatsApp={onOpenWhatsApp} />
        <BlogSection onOpenWhatsApp={onOpenWhatsApp} />
        <FAQSection onOpenWhatsApp={onOpenWhatsApp} />
        <ContactSection onOpenWhatsApp={onOpenWhatsApp} />
      </main>
    </>
  );
};


