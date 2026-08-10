export interface CorporateService {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyBenefits: string[];
  deliverables: string[];
  sla: string;
  averageSavings: string;
}

export const corporateServices: CorporateService[] = [
  {
    id: 'corporate-flights',
    title: 'Corporate Flight Coordination',
    category: 'Flight Logistics',
    shortDesc: 'Optimized corporate flight schedules with negotiated business airfares, priority seat selection, and flexible change management.',
    fullDesc: 'Flyspurs coordinates domestic and international air travel tailored specifically to corporate flight schedules. We leverage direct airline corporate relations to secure flexible fare rules, complimentary baggage allowances, priority seat assignment, and round-the-clock flight modification support.',
    iconName: 'Plane',
    keyBenefits: [
      'Access to exclusive corporate negotiated airfares & bulk discounts',
      'Flexible ticket reissuance and cancellation policy assistance',
      'Dedicated route optimization minimizing layovers for busy executives',
      'Unified billing statement with detailed flight spend reporting'
    ],
    deliverables: [
      'Multi-airline fare comparison options within 30 minutes',
      'Web check-in management & boarding pass issuance',
      '24/7 flight delay/cancellation re-accommodation support',
      'GST tax invoice compliance for input credit claiming'
    ],
    sla: '30 Minutes Turnaround for Urgent Itineraries',
    averageSavings: '12% - 18% Annual Flight Cost Reduction'
  },
  {
    id: 'hotel-reservations',
    title: 'Corporate Hotel Reservations',
    category: 'Accommodation',
    shortDesc: 'Strategic hotel placements offering vetted business stays, preferred locations near trade hubs, and corporate tariff benefits.',
    fullDesc: 'We partner with premium business hotels, boutique corporate properties, and global hotel chains across major international financial hubs and industrial clusters. Our hotel desk secures late check-outs, breakfast inclusions, high-speed Wi-Fi, and corporate rates.',
    iconName: 'Building2',
    keyBenefits: [
      'Vetted 4-star and 5-star properties with corporate amenities',
      'Complimentary early check-in & late check-out privileges',
      'Proximity-based property mapping near customer factories or exhibition venues',
      'No hidden surprise charges; transparent corporate billing'
    ],
    deliverables: [
      'Curated property comparison matrix based on corporate budget policy',
      'Direct voucher delivery with confirmed corporate reservation numbers',
      'Custom meal plan arrangements & conference room bookings',
      'Consolidated monthly hotel ledger for accounting teams'
    ],
    sla: '1 Hour Reservation Turnaround',
    averageSavings: '15% - 22% Savings vs Published OTA Rates'
  },
  {
    id: 'business-visa',
    title: 'Business Visa Assistance',
    category: 'Immigration & Visas',
    shortDesc: 'End-to-end guidance for Schengen, US B1/B2, UK C-Business, China M, Japan, Singapore, and global business visas.',
    fullDesc: 'Navigating complex international visa mandates requires zero-error documentation. Flyspurs provides complete documentation checking, invitation letter validation, embassy appointment scheduling, biometric guidance, and fast-track processing for corporate executives.',
    iconName: 'FileCheck2',
    keyBenefits: [
      'Zero-error pre-submission document audit by senior visa specialists',
      'Embassy appointment slot prioritization and biometrics scheduling',
      'Formal corporate invitation letter draft templates & advisory',
      'Real-time passport tracking with status alerts'
    ],
    deliverables: [
      'Personalized visa document checklist per destination country',
      'Covering letter drafting tailored to corporate traveler position',
      'Form fill-up and fee payment execution',
      'Passport pick-up and secure dispatch back to corporate office'
    ],
    sla: 'Document Audit Completed in 4 Hours',
    averageSavings: '99.2% First-Time Visa Approval Rate'
  },
  {
    id: 'travel-documentation',
    title: 'Travel Documentation',
    category: 'Compliance',
    shortDesc: 'Comprehensive travel health clearances, apostille, document legalization, travel insurance, and compliance verification.',
    fullDesc: 'Ensure your business travelers carry bulletproof documentation. Flyspurs manages corporate travel insurance policies, country-specific health declarations, embassy apostille attestation for business contracts, and international driving permits.',
    iconName: 'ShieldCheck',
    keyBenefits: [
      'Compliant corporate travel insurance covering medical & trip interruption',
      'Legalization of trade documents, MOUs, and commercial invoices',
      'Apostille coordination with the Ministry of External Affairs',
      'Centralized digital document repository for company executives'
    ],
    deliverables: [
      'Instant travel insurance policy issuance with zero deductibles',
      'Embassy attestation and document legalization handling',
      'Pre-departure travel compliance briefing document',
      'Emergency medical assistance helpline integration'
    ],
    sla: 'Instant Insurance & 24h Attestation Dispatch',
    averageSavings: '100% Regulatory Compliance & Peace of Mind'
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers & Ground Logistics',
    category: 'Ground Transit',
    shortDesc: 'Reliable airport pickups, luxury chauffeur services, and inter-city chauffeur transit for business mobility.',
    fullDesc: 'Seamless ground mobility ensures business travelers arrive punctual and refreshed. Flyspurs arranges flight-tracked airport pickups, executive sedan transfers, inter-city luxury coaches for team delegations, and daily chauffeur rentals globally.',
    iconName: 'Car',
    keyBenefits: [
      'Real-time flight arrival tracking for zero-wait airport pickups',
      'Vetted professional drivers with multi-lingual assistance',
      'Luxury executive fleet: Mercedes E-Class, BMW 5-Series, Toyota Vellfire, SUV',
      'Bottled water, Wi-Fi, and executive amenities inside vehicles'
    ],
    deliverables: [
      'Chauffeur contact and vehicle details sent 2 hours prior to pickup',
      'Meet-and-greet service at airport arrival gates',
      'Fixed transparent corporate rates without surge pricing',
      'Integrated toll, parking, and driver meal billing'
    ],
    sla: 'Punctuality Guarantee (Driver Arrives 15 Mins Early)',
    averageSavings: 'Eliminates Last-Minute Cab Surge Costs'
  },
  {
    id: 'incentive-tours',
    title: 'Corporate Incentive Tours',
    category: 'MICE & Rewards',
    shortDesc: 'Bespoke international reward trips for top-performing sales teams, distributors, dealers, and executive retreats.',
    fullDesc: 'Incentive trips are powerful drivers of corporate sales performance and channel loyalty. Flyspurs designs immersive international experiences in destinations like Dubai, Singapore, Europe, Thailand, and Bali, managing charter flights, gala dinners, team building, and VIP hospitality.',
    iconName: 'Award',
    keyBenefits: [
      'Turnkey end-to-end program management for groups from 20 to 1,000+ delegates',
      'Customized branding, welcoming banners, and themed corporate gala nights',
      'Exclusive access to iconic venues, private yacht cruises, and desert safaris',
      'On-ground Flyspurs tour managers accompanying the delegation throughout'
    ],
    deliverables: [
      'Interactive day-wise itinerary deck with custom mobile app preview',
      'Group visa execution and bulk flight ticket issuance',
      'Hotel room block allocation with personalized welcoming hampers',
      'AV setup, stage production, and entertainment for reward ceremonies'
    ],
    sla: 'Detailed Proposal & Concept Deck in 48 Hours',
    averageSavings: '20% Cost Optimization on Group MICE Tariffs'
  },
  {
    id: 'international-delegations',
    title: 'International Delegations',
    category: 'Executive Travel',
    shortDesc: 'High-level protocol coordination for C-Suite executives, government trade delegations, and board meetings abroad.',
    fullDesc: 'When board members, C-level executives, or diplomatic trade delegations travel abroad, precision is paramount. Flyspurs manages VIP airport lounge access, protocol-compliant security escorts, private jet charters, and high-level meeting room logistics.',
    iconName: 'Globe2',
    keyBenefits: [
      'VIP Fast-Track airport customs & immigration clearance',
      'Private jet and luxury helicopter charter coordination',
      'Five-star executive suite reservations and private dining room bookings',
      '24/7 dedicated executive travel concierge'
    ],
    deliverables: [
      'Minute-by-minute master executive movement itinerary',
      'Diplomatic and trade invitation documentation verification',
      'Armored or luxury chauffeur vehicle dispatch',
      'Dedicated C-suite travel desk support manager'
    ],
    sla: '100% Protocol Compliance & Confidentiality',
    averageSavings: 'Flawless Executive Mobility'
  },
  {
    id: 'exhibition-travel',
    title: 'Exhibition Travel & Trade Fair Planning',
    category: 'Trade Fairs',
    shortDesc: 'Specialized travel arrangements for international trade shows like Canton Fair, ITB Berlin, ATM Dubai, and MEDICA.',
    fullDesc: 'Attending international exhibitions requires booking accommodation near convention centers months in advance and coordinating freight/booth delegate schedules. Flyspurs handles early-bird exhibition hotel blocks, shuttle transfers, trade badges, and delegation logistics.',
    iconName: 'Briefcase',
    keyBenefits: [
      'Guaranteed room blocks near major convention grounds (Canton, Messe Frankfurt, etc.)',
      'Daily scheduled shuttle buses between hotels and exhibition halls',
      'Exhibitor badge registration & interpreter assistance',
      'Group airfare discounts for multi-member technical teams'
    ],
    deliverables: [
      'Trade fair travel packages inclusive of flight, hotel, transfer & visa',
      'Translator and local booth assistant sourcing',
      'Post-exhibition regional business visit itineraries',
      'Consolidated corporate invoicing'
    ],
    sla: 'Early-Bird Guaranteed Exhibition Room Allocations',
    averageSavings: 'Save Up to 30% by Booking Exhibition Blocks Early'
  },
  {
    id: 'multi-city-travel',
    title: 'Multi-City Business Travel',
    category: 'Complex Travel',
    shortDesc: 'Complex multi-destination flight routing and seamless hotel/transfer chain alignment across continents.',
    fullDesc: 'Executing a 5-country overseas sales tour requires precision alignment. Flyspurs structures seamless multi-stop flight tickets, local train connections (Eurail/Shinkansen), synchronized hotel check-ins, and flexible buffers for unexpected client meeting changes.',
    iconName: 'Route',
    keyBenefits: [
      'Optimized multi-leg airfares (Circle Trip & Open-Jaw tickets)',
      'Cross-border train and ferry ticket integration',
      'Single point of contact managing the entire multi-city chain',
      'Instant itinerary updates pushed directly to the traveler\'s phone'
    ],
    deliverables: [
      'Master multi-city travel matrix with layover buffer assessments',
      'Local currency advisory & SIM card/eSIM setup guidance',
      'Re-routing assistance in case of meeting date shifts',
      'Centralized invoice tracking per business trip'
    ],
    sla: '24/7 Live Re-routing Assistance',
    averageSavings: '25% Fare Reduction via Smart Open-Jaw Ticketing'
  },
  {
    id: 'corporate-retreats',
    title: 'Corporate Retreats & Offsites',
    category: 'MICE & Retreats',
    shortDesc: 'Strategy workshops, leadership offsites, and team bonding retreats in scenic, inspiring global destinations.',
    fullDesc: 'Reenergize your leadership and engineering teams with thoughtfully curated offsite retreats. Flyspurs designs productive corporate retreats featuring high-tech conference facilities, wellness activities, adventure experiences, and memorable group dining.',
    iconName: 'Users',
    keyBenefits: [
      'Inspirational venues combining state-of-the-art conference rooms & nature',
      'Customized team-building workshops and key-note guest speaker arrangements',
      'Comprehensive F&B menu customization catering to diverse dietary needs',
      'Smooth group transport logistics from multiple departure cities'
    ],
    deliverables: [
      'Retreat venue inspection report & site selection deck',
      'Event schedule design including AV equipment setup',
      'On-site event coordination team',
      'Post-retreat feedback summary & expense reporting'
    ],
    sla: 'Complete Event Plan Delivered in 3 Business Days',
    averageSavings: '18% Savings via Direct Hotel Group Contracts'
  },
  {
    id: 'dedicated-travel-desk',
    title: 'Dedicated Travel Desk',
    category: 'Outsourced Desk',
    shortDesc: 'An embedded or virtual corporate travel manager acting as an extension of your procurement & HR department.',
    fullDesc: 'For enterprise organizations with high travel volume, Flyspurs provides an embedded or virtual Dedicated Travel Desk. Our certified travel specialists enforce your internal corporate travel policy, handle emergency changes, manage supplier negotiations, and deliver monthly analytical reports.',
    iconName: 'Headphones',
    keyBenefits: [
      'Dedicated travel manager assigned exclusively to your company account',
      'Enforcement of corporate travel spend limits and approval workflows',
      'Monthly MIS reporting highlighting spend trends, savings, and traveler patterns',
      '365-day 24/7 priority emergency response line'
    ],
    deliverables: [
      'Customized corporate travel policy draft creation & audit',
      'Bi-weekly spend review calls with procurement leads',
      'Centralized vendor credit management & GST credit compliance',
      'Dedicated WhatsApp emergency support hotline for employees'
    ],
    sla: 'Immediate Response Line (Under 5 Minutes)',
    averageSavings: 'Up to 25% Total Annual Corporate Travel Cost Savings'
  }
];
