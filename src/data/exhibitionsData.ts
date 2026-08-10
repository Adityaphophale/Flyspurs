export interface ExhibitionFair {
  id: string;
  name: string;
  location: string;
  country: string;
  venue: string;
  industry: string;
  description: string;
  typicalMonth: string;
  keyLogistics: string[];
}

export const majorExhibitions: ExhibitionFair[] = [
  {
    id: 'canton-fair',
    name: 'Canton Fair (China Import & Export Fair)',
    location: 'Guangzhou',
    country: 'China',
    venue: 'China Import & Export Fair Complex (Pazhou)',
    industry: 'Electronics, Industrial Machinery, Hardware, Consumer Goods',
    description: 'The world\'s largest trade fair connecting global buyers and manufacturers across 3 distinct phases.',
    typicalMonth: 'April (Spring) & October (Autumn)',
    keyLogistics: [
      'Guaranteed hotel blocks within 15 mins of Pazhou Complex',
      'China M-Visa (Business) invitation letter & invitation filing',
      'Daily scheduled coach shuttle between hotels & fair grounds',
      'English/Mandarin interpreter sourcing for contract discussions'
    ]
  },
  {
    id: 'itb-berlin',
    name: 'ITB Berlin',
    location: 'Berlin',
    country: 'Germany',
    venue: 'Messe Berlin',
    industry: 'Travel, Hospitality, MICE & Aviation',
    description: 'The world\'s leading travel trade show bringing together global tourism boards, airlines, and MICE operators.',
    typicalMonth: 'March',
    keyLogistics: [
      'Germany Schengen Business Visa document filing and biometrics',
      'Hotel blocks near Alexanderplatz and Berlin ExpoCenter',
      'BVB / Messe transport pass coordination',
      'Networking lounge dinner setup for corporate clients'
    ]
  },
  {
    id: 'atm-dubai',
    name: 'Arabian Travel Market (ATM)',
    location: 'Dubai',
    country: 'United Arab Emirates',
    venue: 'Dubai World Trade Centre (DWTC)',
    industry: 'Travel, Tourism, MICE, Luxury Hospitality',
    description: 'The flagship Middle East event for inbound and outbound corporate travel professionals and trade leaders.',
    typicalMonth: 'May',
    keyLogistics: [
      'Hotel stays connected to DWTC via metro or private transfers',
      'Express UAE Business Visa processing in 24 hours',
      'Exclusive corporate yacht dinner hosting for overseas delegates',
      'Airport VIP arrival fast-track assistance'
    ]
  },
  {
    id: 'medica',
    name: 'MEDICA Dusseldorf',
    location: 'Dusseldorf',
    country: 'Germany',
    venue: 'Messe Düsseldorf',
    industry: 'Pharma, Medical Devices, Healthcare & Tech',
    description: 'The premier global trade fair for medical technology, laboratory equipment, and healthcare manufacturing.',
    typicalMonth: 'November',
    keyLogistics: [
      'Early-bird hotel reservations in Dusseldorf and Essen',
      'EU GMP/Medical trade invitation visa assistance',
      'Private executive chauffeur vans for multi-city lab visits',
      'Group flight ticket bookings with baggage allowances for sample parts'
    ]
  },
  {
    id: 'hannover-messe',
    name: 'Hannover Messe',
    location: 'Hannover',
    country: 'Germany',
    venue: 'Hannover Exhibition Grounds',
    industry: 'Industrial Transformation, Automation, Energy & Engineering',
    description: 'The world\'s top industrial technology trade show showcasing Smart Manufacturing, AI, and green energy.',
    typicalMonth: 'April',
    keyLogistics: [
      'Hotel block allocations during extreme peak accommodation demand',
      'Schengen business visa application support',
      'Group flight bookings with flexible return dates',
      'High-speed DB Train ticket integration across Germany'
    ]
  },
  {
    id: 'ces-las-vegas',
    name: 'CES (Consumer Electronics Show)',
    location: 'Las Vegas',
    country: 'United States',
    venue: 'Las Vegas Convention Center (LVCC)',
    industry: 'Consumer Technology, Enterprise AI, Electronics',
    description: 'The most influential tech event in the world for innovation, smart devices, and next-gen mobility.',
    typicalMonth: 'January',
    keyLogistics: [
      'US B1/B2 Business Visa interview appointment slot acceleration',
      'LVCC Strip hotel accommodation coordination',
      'Executive private dining room reservations for investor pitch meets',
      'Domestic flight extensions to Silicon Valley tech meetings'
    ]
  }
];
