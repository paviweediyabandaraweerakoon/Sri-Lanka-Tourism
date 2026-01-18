import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { MapPin, Calendar, Star, Thermometer, Droplets } from 'lucide-react';

export interface Destination {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
  bestSeasons: string[];
  highlights: string[];
  temperature: string;
  rainfall: string;
  rating: number;
}

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{destination.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
            <div className="flex items-center text-gray-600 gap-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{destination.region}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{destination.description}</p>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold">Best Time to Visit:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {destination.bestSeasons.map((season) => (
              <span
                key={season}
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {season}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 py-3 border-y border-gray-200">
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-red-500" />
            <div>
              <div className="text-xs text-gray-500">Temperature</div>
              <div className="text-sm font-semibold">{destination.temperature}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-blue-500" />
            <div>
              <div className="text-xs text-gray-500">Rainfall</div>
              <div className="text-sm font-semibold">{destination.rainfall}</div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm text-gray-700">Highlights:</h4>
          <ul className="space-y-1">
            {destination.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all">
          Explore {destination.name}
        </button>
      </div>
    </div>
  );
}
