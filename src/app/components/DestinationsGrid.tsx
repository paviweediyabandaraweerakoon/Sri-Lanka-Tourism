import { DestinationCard, type Destination } from './DestinationCard';
import { type Season } from './SeasonSelector';

interface DestinationsGridProps {
  selectedSeason: Season;
}

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Sigiriya',
    region: 'Cultural Triangle',
    description: 'Ancient rock fortress with stunning frescoes and breathtaking views. A UNESCO World Heritage Site.',
    image: 'https://images.unsplash.com/photo-1704797390901-e1d20bd46647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaWdpcml5YSUyMFJvY2slMjBTcmklMjBMYW5rYXxlbnwxfHx8fDE3Njg3Mjg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bestSeasons: ['May - Sep', 'Dec - Mar'],
    highlights: [
      'Climb the 1,200 steps to the summit',
      'Ancient frescoes and mirror wall',
      'Panoramic views of surrounding jungle'
    ],
    temperature: '25-32°C',
    rainfall: 'Low',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Ella',
    region: 'Central Highlands',
    description: 'Picturesque hill country town surrounded by tea plantations, waterfalls, and hiking trails.',
    image: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFbGxhJTIwU3JpJTIwTGFua2F8ZW58MXx8fHwxNzY4NzI4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bestSeasons: ['Dec - Mar', 'Jul - Sep'],
    highlights: [
      'Nine Arch Bridge',
      'Little Adam\'s Peak hike',
      'Ravana Falls waterfall'
    ],
    temperature: '18-28°C',
    rainfall: 'Moderate',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Galle Fort',
    region: 'South Coast',
    description: 'Historic Dutch colonial fort with charming streets, boutiques, and cafes by the ocean.',
    image: 'https://images.unsplash.com/photo-1704797390682-76479a29dc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYWxsZSUyMEZvcnQlMjBTcmklMjBMYW5rYXxlbnwxfHx8fDE3Njg3Mjg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bestSeasons: ['Dec - Mar'],
    highlights: [
      'Walk the fort ramparts',
      'Dutch colonial architecture',
      'Lighthouse and ocean views'
    ],
    temperature: '26-31°C',
    rainfall: 'Low (dry season)',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Mirissa Beach',
    region: 'South Coast',
    description: 'Pristine beach paradise perfect for surfing, whale watching, and relaxation.',
    image: 'https://images.unsplash.com/photo-1552055568-e9943cd2a08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGJlYWNofGVufDF8fHx8MTc2ODcyODcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bestSeasons: ['Dec - Mar'],
    highlights: [
      'Blue whale watching tours',
      'Golden sandy beaches',
      'Surfing and beach activities'
    ],
    temperature: '27-32°C',
    rainfall: 'Low',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Temple of the Tooth',
    region: 'Kandy',
    description: 'Sacred Buddhist temple housing a relic of Buddha\'s tooth. Cultural heart of Sri Lanka.',
    image: 'https://images.unsplash.com/photo-1695748394754-9a8f807f9568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMHRlbXBsZXxlbnwxfHx8fDE3Njg3Mjg3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bestSeasons: ['Dec - Apr', 'Jul - Aug'],
    highlights: [
      'Daily puja ceremonies',
      'Kandy Lake and city views',
      'Traditional Kandyan dance shows'
    ],
    temperature: '20-30°C',
    rainfall: 'Moderate',
    rating: 4.8
  },
  {
    id: '6',
    name: 'Nuwara Eliya',
    region: 'Central Highlands',
    description: 'Colonial hill station known as "Little England" with tea plantations and cool climate.',
    image: 'https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzY4NjM5OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bestSeasons: ['Jan - Mar', 'Jul - Sep'],
    highlights: [
      'Visit tea plantations and factories',
      'Colonial architecture',
      'Horton Plains National Park nearby'
    ],
    temperature: '14-22°C',
    rainfall: 'Moderate',
    rating: 4.7
  },
  {
    id: '7',
    name: 'Yala National Park',
    region: 'Southeast Coast',
    description: 'Premier wildlife sanctuary with highest leopard density in the world and diverse wildlife.',
    image: 'https://images.unsplash.com/photo-1705936981588-a4192f66fcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMHdpbGRsaWZlJTIwZWxlcGhhbnR8ZW58MXx8fHwxNzY4NzI4NzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bestSeasons: ['Feb - Jul'],
    highlights: [
      'Leopard safaris',
      'Elephants, sloth bears, crocodiles',
      'Diverse bird species'
    ],
    temperature: '27-35°C',
    rainfall: 'Low (dry season)',
    rating: 4.9
  },
  {
    id: '8',
    name: 'Diyaluma Falls',
    region: 'Badulla District',
    description: 'Second highest waterfall in Sri Lanka with natural infinity pools at the top.',
    image: 'https://images.unsplash.com/photo-1723779761157-a858c456880d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMHdhdGVyZmFsbHxlbnwxfHx8fDE3Njg3Mjg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bestSeasons: ['Apr - Oct'],
    highlights: [
      '220-meter waterfall',
      'Natural pools at the summit',
      'Scenic hiking trails'
    ],
    temperature: '20-28°C',
    rainfall: 'Moderate',
    rating: 4.6
  }
];

function getSeasonMonths(season: Season): string[] {
  switch (season) {
    case 'dry-southwest':
      return ['Dec - Mar'];
    case 'dry-northeast':
      return ['May - Sep'];
    case 'inter-monsoon':
      return ['Apr', 'Jul - Sep', 'Oct - Nov'];
    default:
      return [];
  }
}

function filterDestinationsBySeason(destinations: Destination[], season: Season): Destination[] {
  if (season === 'all') {
    return destinations;
  }

  const seasonMonths = getSeasonMonths(season);
  
  return destinations.filter(dest => 
    dest.bestSeasons.some(destSeason => 
      seasonMonths.some(seasonMonth => 
        destSeason.includes(seasonMonth) || seasonMonth.includes(destSeason)
      )
    )
  );
}

export function DestinationsGrid({ selectedSeason }: DestinationsGridProps) {
  const filteredDestinations = filterDestinationsBySeason(destinations, selectedSeason);

  return (
    <section id="destinations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {selectedSeason === 'all' ? 'All Destinations' : 'Recommended Destinations'}
          </h2>
          <p className="text-xl text-gray-600">
            {selectedSeason === 'all' 
              ? 'Explore all the amazing places Sri Lanka has to offer'
              : `Best places to visit during the selected season`}
          </p>
          {filteredDestinations.length > 0 && (
            <p className="text-gray-500 mt-2">
              Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No destinations found for this season.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
