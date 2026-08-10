export interface FAQItem {
  id: string;
  category: 'General' | 'Visas & Compliance' | 'Flights & Hotels' | 'Billing & Savings' | 'Incentives & MICE';
  question: string;
  answer: string;
}

export const corporateFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How is Flyspurs different from online travel booking portals like MakeMyTrip or Expedia?',
    answer: 'Flyspurs is a specialized B2B Corporate Travel Management consulting partner, not a retail booking engine. We provide dedicated corporate travel managers, customized corporate travel policy enforcement, 24/7 emergency human support, flexible credit terms, GST-compliant invoicing for tax credits, and negotiated corporate rates not available on public OTAs.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Where is Flyspurs headquartered, and what is your operational footprint?',
    answer: 'Our global headquarters is located in Vadodara, Gujarat, India (413, 4th Floor, Siddhivinayak Arcus, Bhayli Road). We maintain an active operational presence across India, Singapore, and the United States, providing 24/7 round-the-clock service to multinational organizations.'
  },
  {
    id: 'faq-3',
    category: 'Billing & Savings',
    question: 'How does Flyspurs help companies save money on corporate travel?',
    answer: 'We reduce corporate travel expenses by 15% to 25% through direct corporate airline contracts, negotiated corporate hotel tariffs, smart multi-city routing (open-jaw ticketing), strict travel policy enforcement, and eliminating last-minute booking penalties.'
  },
  {
    id: 'faq-4',
    category: 'Billing & Savings',
    question: 'Do you provide GST invoices for claiming Input Tax Credit (ITC)?',
    answer: 'Yes! Every flight, hotel, and ground transit voucher issued by Flyspurs contains full company GSTIN details and proper state tax splits, allowing your finance team to claim 100% of eligible Input Tax Credit (ITC) seamlessly.'
  },
  {
    id: 'faq-5',
    category: 'Billing & Savings',
    question: 'What credit terms and billing models do you offer corporate accounts?',
    answer: 'We offer structured monthly credit billing for verified corporate accounts, centralized company credit card charge options, and deposit-based corporate accounts. A dedicated account statement is delivered bi-weekly or monthly with line-item breakdowns.'
  },
  {
    id: 'faq-6',
    category: 'Visas & Compliance',
    question: 'What is the approval rate for business visas handled by Flyspurs?',
    answer: 'Our experienced visa team boasts a 99.2% approval rate. We perform strict zero-error document pre-audits, draft compliant covering letters, verify corporate invitation letters, and schedule priority embassy appointment slots.'
  },
  {
    id: 'faq-7',
    category: 'Visas & Compliance',
    question: 'Which countries do you assist with business visas for corporate employees?',
    answer: 'We manage business visas globally, including Schengen states (Germany, France, Switzerland, Italy, etc.), US B1/B2, UK Business, China M-Visa, Japan, Singapore, UAE, Saudi Arabia, Vietnam, Australia, and Canada.'
  },
  {
    id: 'faq-8',
    category: 'Visas & Compliance',
    question: 'How far in advance should our business travelers apply for international visas?',
    answer: 'We recommend initiating Schengen and US business visa filings 4 to 8 weeks prior to travel. For East Asian countries (Singapore, Vietnam, Thailand) and UAE, electronic visas can be processed in 24 to 72 hours.'
  },
  {
    id: 'faq-9',
    category: 'Flights & Hotels',
    question: 'What happens if a flight is canceled, delayed, or an executive needs an urgent date change?',
    answer: 'Your dedicated Flyspurs travel desk acts instantly. Because we hold direct corporate airline relationships, we re-accommodate travelers on alternative flights, handle ticket re-issuances without service fees, and manage hotel date shifts immediately.'
  },
  {
    id: 'faq-10',
    category: 'Flights & Hotels',
    question: 'Can you enforce our internal corporate travel budget policy?',
    answer: 'Absolutely. We configure your company travel policy (e.g. flight class by employee tier, maximum hotel night caps, advance booking windows). Any booking request outside policy triggers an automated approval request to your designated travel manager.'
  },
  {
    id: 'faq-11',
    category: 'Flights & Hotels',
    question: 'Do business travelers still earn individual airline frequent flyer points and hotel loyalty points?',
    answer: 'Yes! All individual traveler loyalty numbers (KrisFlyer, Flying Blue, Miles & More, Marriott Bonvoy, IHG, etc.) are attached to reservations so employees earn personal miles while your company benefits from corporate discounts.'
  },
  {
    id: 'faq-12',
    category: 'Incentives & MICE',
    question: 'What group size can Flyspurs handle for corporate incentive tours and dealer meets?',
    answer: 'We manage MICE delegations ranging from executive leadership retreats of 15 members to large-scale distributor incentive programs exceeding 1,000+ delegates.'
  },
  {
    id: 'faq-13',
    category: 'Incentives & MICE',
    question: 'What destinations are most popular for corporate incentive travel?',
    answer: 'Popular destinations include Dubai, Singapore, Thailand (Phuket/Bangkok), Malaysia, Bali, Vietnam, and Switzerland. We handle charter flights, hotel buyouts, branded gala dinners, and local team bonding activities.'
  },
  {
    id: 'faq-14',
    category: 'General',
    question: 'How quickly does Flyspurs respond to urgent corporate travel requests?',
    answer: 'Our SLA for routine flight and hotel flight itineraries is within 30 minutes. Emergency travel modification requests receive response in under 5 minutes through our dedicated 24/7 hotline.'
  },
  {
    id: 'faq-15',
    category: 'General',
    question: 'How do we get started with Flyspurs corporate travel management?',
    answer: 'Starting is simple! Contact us via WhatsApp (+91 92745 65625) or email (travel@flyspurs.com) to schedule a consultation. We will audit your existing travel spend, design a customized corporate travel agreement, and assign a dedicated account team.'
  },
  {
    id: 'faq-16',
    category: 'Incentives & MICE',
    question: 'Do you provide on-ground Flyspurs staff during international group incentive trips?',
    answer: 'Yes! Senior Flyspurs tour directors accompany every major corporate delegation on-ground from airport departure to return, managing hotel check-ins, dining arrangements, stage setups, and emergency contingencies.'
  },
  {
    id: 'faq-17',
    category: 'Flights & Hotels',
    question: 'Can Flyspurs arrange travel for trade fair exhibitions like Canton Fair or ITB Berlin?',
    answer: 'Yes, exhibition travel is one of our key specialties. We pre-secure hotel blocks near trade fair venues, arrange venue shuttle transfers, assist with trade badges, and manage group flights.'
  },
  {
    id: 'faq-18',
    category: 'General',
    question: 'Do you offer airport transfer and chauffeur services globally?',
    answer: 'Yes, we provide flight-tracked airport pickups and luxury chauffeur rentals across major commercial cities in Asia, Europe, North America, and the Middle East.'
  },
  {
    id: 'faq-19',
    category: 'Visas & Compliance',
    question: 'Can Flyspurs assist with corporate travel insurance and document apostille attestation?',
    answer: 'Yes, we issue instant zero-deductible corporate travel insurance policies and coordinate Ministry of External Affairs (MEA) apostille legalization for commercial contracts and export documents.'
  },
  {
    id: 'faq-20',
    category: 'Billing & Savings',
    question: 'Is there a minimum annual travel spend required to partner with Flyspurs?',
    answer: 'We partner with growing mid-sized enterprises, exporters, and large multinational corporations alike. Whether your company spends $20,000 or $2,000,000 annually on travel, we customize solutions suited to your scale.'
  }
];
