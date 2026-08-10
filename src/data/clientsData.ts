export interface CorporateClient {
  id: string;
  name: string;
  industry: string;
  logoText: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  designation: string;
  company: string;
  location: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
}

export const corporateClients: CorporateClient[] = [
  { id: '1', name: 'Ei (Educational Initiatives)', industry: 'Education & Tech', logoText: 'Ei', description: 'Leading educational assessment & tech company' },
  { id: '2', name: 'Mechtech Inframine', industry: 'Mining & Heavy Engineering', logoText: 'MECHTECH INFRAMINE', description: 'Heavy mining equipment manufacturer' },
  { id: '3', name: 'Kalpvrux Converting Products', industry: 'Packaging & Manufacturing', logoText: 'Kalpvrux', description: 'Converting products private limited' },
  { id: '4', name: 'G-Tech Heavy Infra', industry: 'Engineering & Construction', logoText: 'G-TECH', description: 'Infrastructure and heavy engineering solutions' },
  { id: '5', name: 'Neopolitan Pizza', industry: 'Food & Hospitality Chains', logoText: 'NEOPOLITAN PIZZA', description: 'International QSR restaurant franchise chain' },
  { id: '6', name: 'HTS Technologies', industry: 'Industrial Tech', logoText: 'hts', description: 'High-tech industrial engineering solutions' },
  { id: '7', name: 'Ishan Nets & Synthetics', industry: 'Manufacturing & Export', logoText: 'ISHAN', description: 'Global synthetic product exporter' },
  { id: '8', name: 'Vasudev Group', industry: 'Chemicals & Materials', logoText: 'vāsudev', description: 'Specialty chemical and materials supplier' },
  { id: '9', name: 'Conmar Industrial', industry: 'Capital Goods', logoText: 'conmät', description: 'Industrial machinery and construction equipment' },
  { id: '10', name: 'Perennials Fabrics', industry: 'Textiles & Export', logoText: 'PERENNIALS', description: 'Premium luxury outdoor performance textiles' }
];

export const clientTestimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'Flyspurs transformed our corporate travel workflow completely. Previously, our HR and administrative team spent over 30 hours a week chasing flight rates and coordinating visas. Flyspurs provided a dedicated travel desk that handles everything with 30-minute turnarounds and reduced our annual travel spend by 18%.',
    clientName: 'Rajesh Sharma',
    designation: 'VP - Human Resources & Procurement',
    company: 'Mechtech Inframine Pvt. Ltd.',
    location: 'Vadodara, India',
    rating: 5
  },
  {
    id: 't2',
    quote: 'Managing travel for a 45-member delegation to the Canton Fair in Guangzhou seemed daunting. Flyspurs secured 5-star hotel blocks right next to the Pazhou Complex, executed all business visas with zero rejections, and provided daily private shuttle transfers. Impeccable corporate service!',
    clientName: 'Anil Patel',
    designation: 'Director of International Business',
    company: 'Kalpvrux Converting Products Ltd.',
    location: 'Gujarat, India',
    rating: 5
  },
  {
    id: 't3',
    quote: 'For our annual distributor reward program, Flyspurs organized a 120-person incentive tour to Dubai. From the charter flights and desert safari to the grand awards ceremony at Atlantis The Palm, every detail was executed with luxury precision. Highly recommended for MICE travel.',
    clientName: 'Sanjay Mehta',
    designation: 'Managing Director',
    company: 'Vasudev Chemicals & Materials',
    location: 'Mumbai, India',
    rating: 5
  },
  {
    id: 't4',
    quote: 'When our field engineers had an urgent equipment commissioning job in Saudi Arabia on a Sunday, Flyspurs issued flights and emergency visas in under 3 hours. Their 24/7 dedicated support desk is truly the gold standard in B2B travel management.',
    clientName: 'Vikram Joshi',
    designation: 'General Manager - Operations',
    company: 'G-Tech Infrastructure',
    location: 'Singapore / India',
    rating: 5
  }
];

export const corporateCaseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Optimizing Global Travel Spend for an Industrial Machinery Exporter',
    clientIndustry: 'Heavy Machinery & Exports',
    challenge: 'Unorganized employee flight bookings through multiple retail portals resulted in zero corporate discounts, unmonitored expense leakages, and delayed business visa issuances during peak buyer visits.',
    solution: 'Flyspurs deployed a Dedicated Travel Desk, integrated a centralized corporate billing system with direct airline preferred fares, and created an express Schengen & US visa filing matrix.',
    results: [
      { metric: '21.4%', label: 'Direct Annual Savings on Flights & Hotels' },
      { metric: '100%', label: 'GST Input Credit Compliance Realized' },
      { metric: '30 Mins', label: 'Average Turnaround Time for Urgency Booking' }
    ]
  },
  {
    id: 'cs2',
    title: 'Flawless Execution of a 150-Delegate Dealer Incentive Tour in Singapore',
    clientIndustry: 'Automotive & Consumer Goods',
    challenge: 'A major manufacturing company required an end-to-end luxury dealer incentive trip to Singapore with strict budget controls, customized group visas, and branded gala event coordination.',
    solution: 'Flyspurs negotiated bulk airline group blocks, secured five-star Marina Bay accommodation, managed individual passport visa processing, and curated exclusive night safari & yacht gala experiences.',
    results: [
      { metric: '150+', label: 'Delegates Managed Seamlessly' },
      { metric: '0', label: 'Visa Rejections or Travel Delays' },
      { metric: '98.5%', label: 'Executive Satisfaction Rating' }
    ]
  }
];
