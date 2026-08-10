export interface Industry {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  description: string;
  travelFrequency: string;
  keyChallenges: string[];
  flyspursSolutions: string[];
  commonDestinations: string[];
}

export const targetIndustries: Industry[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'Factory inspections, machinery procurement, and plant setup trips',
    icon: 'Factory',
    description: 'Manufacturing executives frequently travel to international equipment suppliers, plant commissioned sites, component factories, and quality assurance audits.',
    travelFrequency: 'High (Frequent plant engineers & executive delegations)',
    keyChallenges: [
      'Last-minute flight bookings due to urgent machinery breakdowns',
      'Need for long-duration stay accommodations near remote industrial zones',
      'Complex multi-destination travel for technical inspection teams'
    ],
    flyspursSolutions: [
      'Pre-negotiated corporate hotel rates in industrial belts',
      'Flexible flight ticket re-issuance without heavy penalty fees',
      'Dedicated 24/7 travel manager for emergency technician deployments'
    ],
    commonDestinations: ['Germany', 'China', 'Japan', 'Italy', 'South Korea', 'USA']
  },
  {
    id: 'engineering',
    name: 'Engineering & Capital Goods',
    tagline: 'On-site commissioning, technical audits, and client handovers',
    icon: 'Wrench',
    description: 'Engineering firms send project managers and field service engineers worldwide to install heavy machinery, perform site surveys, and execute infrastructure projects.',
    travelFrequency: 'Continuous site project deployments',
    keyChallenges: [
      'Unpredictable return dates due to project commissioning delays',
      'Heavy luggage & specialized tool transport logistics',
      'Urgent business visas for technical troubleshooting teams'
    ],
    flyspursSolutions: [
      'Open-dated and flexible return flight ticket management',
      'Excess baggage allowance coordination with partner airlines',
      'Express business visa processing with urgent invitation support'
    ],
    commonDestinations: ['UAE', 'Saudi Arabia', 'Vietnam', 'Germany', 'Turkey', 'Mexico']
  },
  {
    id: 'chemical',
    name: 'Chemical & Speciality Materials',
    tagline: 'Global trade fairs, raw material sourcing, and lab partnerships',
    icon: 'FlaskConical',
    description: 'Chemical executives travel extensively for specialized trade expos like CPhI, raw material contract negotiations, and compliance audits.',
    travelFrequency: 'High international trade exhibition attendance',
    keyChallenges: [
      'Skyrocketing hotel tariffs during global chemical exhibitions',
      'Strict visa documentation requirements for chemical industry personnel',
      'Need for seamless ground transit to remote chemical parks'
    ],
    flyspursSolutions: [
      'Guaranteed early-bird hotel blocks near trade exhibition halls',
      'Flawless business visa dossier preparation with zero rejections',
      'Dedicated executive chauffeur transit between airports & chemical hubs'
    ],
    commonDestinations: ['Germany', 'Switzerland', 'USA', 'China', 'Singapore', 'Japan']
  },
  {
    id: 'export',
    name: 'Export Houses',
    tagline: 'International buyer meetings, buyer delegations, and global expos',
    icon: 'Ship',
    description: 'Exporters rely on international roadshows, overseas trade missions, buyer visits, and multi-country buyer pitches to expand global market share.',
    travelFrequency: 'Quarterly global sales tours & multi-city roadshows',
    keyChallenges: [
      'Complex multi-city flight itineraries spanning multiple continents',
      'High travel budgets impacting export profit margins',
      'Time-consuming visa applications across Schengen, US, UK & East Asia'
    ],
    flyspursSolutions: [
      'Circle-trip & open-jaw airfare optimization reducing travel spend by 20%',
      'Single-window visa filing for multi-country export tours',
      'GST tax invoice credit compliance for max tax savings'
    ],
    commonDestinations: ['USA', 'UK', 'Germany', 'UAE', 'South Africa', 'Australia']
  },
  {
    id: 'import',
    name: 'Import & Supply Chain',
    tagline: 'Vendor audits, product sourcing expos, and quality checks',
    icon: 'Container',
    description: 'Import businesses need swift travel execution to inspect vendor facilities, attend sourcing fairs like Canton Fair, and negotiate bulk supply agreements.',
    travelFrequency: 'Bi-monthly sourcing trips to East Asia & Europe',
    keyChallenges: [
      'Language barriers during ground transit and hotel check-ins',
      'Overpriced hotel rooms in sourcing hubs during peak Canton/Fair seasons',
      'Need for local translation assistance during factory visits'
    ],
    flyspursSolutions: [
      'Curated hotel stays with English/Hindi speaking staff assistance',
      'All-inclusive exhibition travel packages with daily venue shuttles',
      'Local interpreter & guide sourcing for factory negotiations'
    ],
    commonDestinations: ['China (Guangzhou, Yiwu, Shanghai)', 'Vietnam', 'Taiwan', 'Thailand']
  },
  {
    id: 'it',
    name: 'IT & Technology',
    tagline: 'Client onsite deployments, leadership retreats, and tech summits',
    icon: 'Cpu',
    description: 'IT consulting and software companies move developers, solution architects, and sales directors to client sites across US, Europe, and Asia-Pacific.',
    travelFrequency: 'Very High (Frequent executive & project trips)',
    keyChallenges: [
      'Enforcing strict corporate travel policy compliance across teams',
      'High volume of expense claims and reimbursement paperwork',
      'Need for rapid booking turnarounds for customer pitch meetings'
    ],
    flyspursSolutions: [
      'Automated corporate travel policy enforcement with approval hierarchies',
      'Centralized corporate credit billing eliminating individual expense reports',
      '30-minute response SLA for fast-moving sales travel requests'
    ],
    commonDestinations: ['USA (Silicon Valley, NYC)', 'UK (London)', 'Singapore', 'Netherlands', 'Germany']
  },
  {
    id: 'healthcare',
    name: 'Pharma & Healthcare',
    tagline: 'Clinical trial summits, regulatory audits, and medical MICE',
    icon: 'Activity',
    description: 'Pharmaceutical companies require strict compliance for medical congresses, regulatory facility audits (US FDA, EU GMP), and clinical trial coordination.',
    travelFrequency: 'Regular regulatory & conference travel',
    keyChallenges: [
      'Strict regulatory compliance governing healthcare travel spend',
      'Need for non-stop flight routes to keep key medical scientists rested',
      'Specialized dietary and hotel requirements for international doctors'
    ],
    flyspursSolutions: [
      'Pharma compliance-certified travel management & spend tracking',
      'Direct airline routing with premium economy & business class upgrades',
      'Custom meal plan & dietary alignment across all hotel bookings'
    ],
    commonDestinations: ['USA', 'Switzerland', 'Germany', 'Japan', 'Singapore', 'UK']
  },
  {
    id: 'education',
    name: 'Education & Institutional',
    tagline: 'Academic delegations, study tours, and university partnerships',
    icon: 'GraduationCap',
    description: 'Educational institutions and universities arrange faculty exchange trips, international student delegations, and global academic partnership summits.',
    travelFrequency: 'Seasonal academic delegations & group travel',
    keyChallenges: [
      'Large student group flight & hotel coordination with safety mandates',
      'Strict budget constraints set by institutional boards',
      'Group visa execution for 30-100 delegates simultaneously'
    ],
    flyspursSolutions: [
      'Bulk group airfare discounting & dedicated group hotel blocks',
      'Dedicated group tour director managing safety & logistics',
      'Streamlined group visa filing with embassy coordination'
    ],
    commonDestinations: ['UK', 'USA', 'Australia', 'Canada', 'Singapore', 'Germany']
  },
  {
    id: 'construction',
    name: 'Construction & Real Estate',
    tagline: 'Architecture study tours, site inspections, and material expos',
    icon: 'Building',
    description: 'Real estate developers and construction firms travel for architectural design inspiration, specialized building material sourcing, and joint ventures.',
    travelFrequency: 'Project-based leadership and sourcing delegations',
    keyChallenges: [
      'Coordinating travel for multi-party delegations (Architects + Directors)',
      'Need for luxury hospitality during high-value investor meetings',
      'Frequent schedule changes based on site approval timelines'
    ],
    flyspursSolutions: [
      'Luxury VIP delegation handling with 5-star hotel suites',
      'Flexible flight modifications with zero service-charge policy',
      'Private chauffeur van rentals for team site visits'
    ],
    commonDestinations: ['Dubai (UAE)', 'Singapore', 'China', 'Italy', 'USA']
  },
  {
    id: 'automobile',
    name: 'Automotive & Component Exporters',
    tagline: 'Auto expos, OEM supplier audits, and global distributor meets',
    icon: 'CarFront',
    description: 'Automotive OEM manufacturers and auto-component exporters travel for major auto shows (e.g. Frankfurt Auto Show, Tokyo Motor Show), client audits, and distributor incentive meets.',
    travelFrequency: 'High (Frequent executive & dealer incentive trips)',
    keyChallenges: [
      'Managing dealer incentive trips for 100-500 distributors',
      'Tight visa deadlines before major international auto expos',
      'High logistics complexity during international vehicle/part displays'
    ],
    flyspursSolutions: [
      'Turnkey distributor incentive tour execution with themed gala nights',
      'Express visa processing for dealer delegations',
      'Complete exhibition hotel & ground logistics management'
    ],
    commonDestinations: ['Germany', 'Japan', 'USA', 'Thailand', 'South Korea', 'Mexico']
  }
];
