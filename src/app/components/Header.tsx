import { MapPin, Calendar, Compass } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Compass className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold">Discover Sri Lanka</h1>
              <p className="text-orange-100 text-sm">Find the Perfect Place at the Perfect Time</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#destinations" className="hover:text-orange-200 transition-colors">Destinations</a>
            <a href="#seasons" className="hover:text-orange-200 transition-colors">Best Times</a>
            <a href="#about" className="hover:text-orange-200 transition-colors">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
