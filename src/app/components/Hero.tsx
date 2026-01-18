import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Calendar, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1552055568-e9943cd2a08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGJlYWNofGVufDF8fHx8MTc2ODcyODcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Beautiful Sri Lankan beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Explore the Pearl of the Indian Ocean
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Discover breathtaking destinations matched to the perfect season. From pristine beaches to ancient temples, 
            find your ideal Sri Lankan adventure.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#destinations" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Explore Destinations
            </a>
            <a href="#seasons" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Find Best Time
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
