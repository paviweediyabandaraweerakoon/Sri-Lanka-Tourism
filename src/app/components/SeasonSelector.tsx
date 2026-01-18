import { useState } from 'react';
import { Cloud, Sun, CloudRain, Leaf } from 'lucide-react';

export type Season = 'all' | 'dry-southwest' | 'dry-northeast' | 'inter-monsoon';

interface SeasonSelectorProps {
  selectedSeason: Season;
  onSeasonChange: (season: Season) => void;
}

const seasons = [
  {
    id: 'all' as Season,
    name: 'All Seasons',
    icon: Sun,
    months: 'Year-round',
    color: 'bg-blue-600 hover:bg-blue-700',
    activeColor: 'bg-blue-700'
  },
  {
    id: 'dry-southwest' as Season,
    name: 'Southwest Dry Season',
    icon: Sun,
    months: 'Dec - Mar',
    description: 'Best for West & South Coast',
    color: 'bg-orange-600 hover:bg-orange-700',
    activeColor: 'bg-orange-700'
  },
  {
    id: 'dry-northeast' as Season,
    name: 'Northeast Dry Season',
    icon: Sun,
    months: 'May - Sep',
    description: 'Best for East Coast & Cultural Triangle',
    color: 'bg-amber-600 hover:bg-amber-700',
    activeColor: 'bg-amber-700'
  },
  {
    id: 'inter-monsoon' as Season,
    name: 'Inter-Monsoon',
    icon: Cloud,
    months: 'Apr & Oct-Nov',
    description: 'Hill Country & Central Highlands',
    color: 'bg-teal-600 hover:bg-teal-700',
    activeColor: 'bg-teal-700'
  }
];

export function SeasonSelector({ selectedSeason, onSeasonChange }: SeasonSelectorProps) {
  return (
    <section id="seasons" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">When to Visit</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sri Lanka's climate varies by region and season. Choose the best time for your perfect adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {seasons.map((season) => {
            const Icon = season.icon;
            const isActive = selectedSeason === season.id;
            
            return (
              <button
                key={season.id}
                onClick={() => onSeasonChange(season.id)}
                className={`${
                  isActive ? season.activeColor : season.color
                } text-white p-6 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-left`}
              >
                <Icon className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">{season.name}</h3>
                <p className="text-sm opacity-90 mb-2">{season.months}</p>
                {season.description && (
                  <p className="text-sm opacity-80">{season.description}</p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
