import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { SeasonSelector, type Season } from '@/app/components/SeasonSelector';
import { DestinationsGrid } from '@/app/components/DestinationsGrid';
import { AboutSection } from '@/app/components/AboutSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [selectedSeason, setSelectedSeason] = useState<Season>('all');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SeasonSelector 
        selectedSeason={selectedSeason} 
        onSeasonChange={setSelectedSeason} 
      />
      <DestinationsGrid selectedSeason={selectedSeason} />
      <AboutSection />
      <Footer />
    </div>
  );
}
