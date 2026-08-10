export interface IncentiveDestination {
  id: string;
  name: string;
  country: string;
  tagline: string;
  badge: string;
  highlights: string[];
  idealGroupSize: string;
  suggestedDuration: string;
  imageKeyword: string;
  itinerarySummary: string;
}

export const incentiveDestinations: IncentiveDestination[] = [
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    tagline: 'Futuristic Luxury, Desert Safaris & Icon-Level Gala Celebrations',
    badge: 'Top Corporate Choice',
    highlights: [
      'Private VIP Desert Dune Gala Dinner with traditional entertainment',
      'Yacht cruises around Dubai Marina & Palm Jumeirah',
      'Burj Khalifa executive lounge access & Museum of the Future private tour',
      'Convenient 3-hour flight connectivity from major Indian business hubs'
    ],
    idealGroupSize: '25 to 500+ Delegates',
    suggestedDuration: '4 Days / 3 Nights',
    imageKeyword: 'dubai-skyline',
    itinerarySummary: 'Day 1: Private Airport Transfer & Dhow Dinner Cruise. Day 2: City Tour, Burj Khalifa & Desert Safari Gala. Day 3: Yacht Cruise & Awards Ceremony at Atlantis. Day 4: Shopping & Departure.'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    tagline: 'World-Class Infrastructure, Gardens by the Bay & Sentosa Nightlife',
    badge: 'MICE Capital of Asia',
    highlights: [
      'Private dinner under the Supertrees at Gardens by the Bay',
      'Sentosa Island team bonding activities & Universal Studios private access',
      'Marina Bay Sands rooftop cocktail reception',
      'Easiest electronic visa processing for Indian corporate groups'
    ],
    idealGroupSize: '20 to 300 Delegates',
    suggestedDuration: '4 Days / 3 Nights',
    imageKeyword: 'singapore-marina',
    itinerarySummary: 'Day 1: Changi Arrival & Marina Bay Sands Check-in. Day 2: Corporate Conference & Gardens by the Bay Gala. Day 3: Sentosa Adventure & Awards Night. Day 4: Jewel Changi & Departure.'
  },
  {
    id: 'thailand',
    name: 'Thailand (Phuket & Bangkok)',
    country: 'Thailand',
    tagline: 'Tropical Luxury Resorts, Island Hopping & High-Energy MICE Venues',
    badge: 'High ROI Value',
    highlights: [
      'Private catamaran charters to Phi Phi & James Bond Islands',
      '5-Star beachfront resort buyouts in Phuket and Hua Hin',
      'Chao Phraya luxury dinner river cruise in Bangkok',
      'Visa-free or instant E-Visa for seamless corporate group entry'
    ],
    idealGroupSize: '30 to 600 Delegates',
    suggestedDuration: '5 Days / 4 Nights',
    imageKeyword: 'thailand-phuket',
    itinerarySummary: 'Day 1: Fly to Phuket & Beach Welcome Dinner. Day 2: Island Yacht Excursion & Beach Volleyball. Day 3: Bangkok Transfer & Chao Phraya Dinner. Day 4: Gala Awards Night. Day 5: Departure.'
  },
  {
    id: 'malaysia',
    name: 'Malaysia (Kuala Lumpur & Langkawi)',
    country: 'Malaysia',
    tagline: 'Petronas Twin Towers, Rainforest Retreats & Island Relaxation',
    badge: 'Popular Reward Destination',
    highlights: [
      'Petronas Towers executive skybridge reception',
      'Cable car and island team-building in Langkawi',
      'Genting Highlands indoor theme park and resort retreats',
      'Seamless visa-free travel entries for business delegations'
    ],
    idealGroupSize: '25 to 400 Delegates',
    suggestedDuration: '5 Days / 4 Nights',
    imageKeyword: 'kuala-lumpur',
    itinerarySummary: 'Day 1: Kuala Lumpur Arrival & Sky Lounge Cocktail. Day 2: City Tour & Genting Highlands Excursion. Day 3: Flight to Langkawi & Sunset Cruise. Day 4: Beach Gala Dinner. Day 5: Return Flight.'
  },
  {
    id: 'europe',
    name: 'Europe (Switzerland & Paris)',
    country: 'Switzerland & France',
    tagline: 'Alpine Excellence, Seine River Cruises & Unrivaled Prestige',
    badge: 'Ultra Luxury Incentive',
    highlights: [
      'Private Jungfraujoch Top of Europe mountain train charter',
      'Private Seine River dinner cruise facing the illuminated Eiffel Tower',
      'Swiss chocolate workshop and alpine team bonding in Interlaken',
      'Long-term multiple entry Schengen business visa coordination'
    ],
    idealGroupSize: '15 to 100 Delegates',
    suggestedDuration: '7 Days / 6 Nights',
    imageKeyword: 'switzerland-alps',
    itinerarySummary: 'Day 1-3: Zurich & Interlaken Alpine Excursions. Day 4: TGV High Speed Train to Paris. Day 5: Paris City Tour & Louvre. Day 6: Seine River Awards Night. Day 7: Departure.'
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    tagline: 'Luxury Cliffside Villas, Ubud Wellness & Beachfront Gala Nights',
    badge: 'Exotic Executive Retreat',
    highlights: [
      'Private cliffside beach club takeover in Uluwatu',
      'Ubud rainforest team retreats & ATV jungle expeditions',
      'Sunset catamaran cruise to Nusa Penida',
      'Hassle-free VoA (Visa on Arrival) for corporate travelers'
    ],
    idealGroupSize: '20 to 250 Delegates',
    suggestedDuration: '5 Days / 4 Nights',
    imageKeyword: 'bali-resort',
    itinerarySummary: 'Day 1: Denpasar Arrival & Jimbaran Seafood Welcome. Day 2: Ubud Jungle Tour & Rice Terrace Team Event. Day 3: Nusa Penida Yacht Trip. Day 4: Rock Bar Awards Night. Day 5: Departure.'
  },
  {
    id: 'vietnam',
    name: 'Vietnam (Da Nang & Hanoi)',
    country: 'Vietnam',
    tagline: 'Bana Hills Golden Bridge, Ha Long Bay Cruises & Emerging Business Hubs',
    badge: 'Trending Destination 2026',
    highlights: [
      'Overnight luxury junk boat charter in Ha Long Bay',
      'Private dinner party at Ba Na Hills French Village',
      'Hoi An ancient lanterns street celebration',
      'Fast E-Visa processing and cost-effective luxury hotel stays'
    ],
    idealGroupSize: '25 to 350 Delegates',
    suggestedDuration: '5 Days / 4 Nights',
    imageKeyword: 'vietnam-halong',
    itinerarySummary: 'Day 1: Hanoi Arrival & Old Quarter Culinary Tour. Day 2: Ha Long Bay Overnight Cruise. Day 3: Da Nang Flight & Golden Bridge. Day 4: Hoi An Lantern Gala Night. Day 5: Departure.'
  }
];
