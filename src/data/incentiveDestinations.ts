export interface IncentiveDestination {
  id: string;
  name: string;
  country: string;
  description: string;
}

export const incentiveDestinations: IncentiveDestination[] = [
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    description: 'Luxury experiences, desert adventures, iconic architecture, premium hospitality and unforgettable city experiences.'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    description: 'World-class infrastructure, vibrant city experiences, Gardens by the Bay and premium entertainment.'
  },
  {
    id: 'thailand',
    name: 'Thailand',
    country: 'Thailand',
    description: 'Beautiful beaches, luxury resorts, island experiences, vibrant cities and memorable leisure experiences.'
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    country: 'Malaysia',
    description: 'Petronas Twin Towers, tropical island retreats, rich cultural heritage and modern hospitality.'
  },
  {
    id: 'europe',
    name: 'Europe',
    country: 'Switzerland & France',
    description: 'Alpine landscapes, iconic European landmarks, cultural heritage and luxury travel experiences.'
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Luxury beachfront resorts, cultural heritage, island retreats and scenic tropical landscapes.'
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    country: 'Vietnam',
    description: 'Ha Long Bay cruises, vibrant historic cities, stunning coastal resorts and rich heritage.'
  }
];
