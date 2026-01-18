import { Palmtree, Mountain, Waves, Coffee } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Palmtree,
      title: 'Tropical Paradise',
      description: 'Beautiful beaches, lush rainforests, and exotic wildlife all year round.'
    },
    {
      icon: Mountain,
      title: 'Ancient Heritage',
      description: '8 UNESCO World Heritage Sites including ancient cities and sacred temples.'
    },
    {
      icon: Waves,
      title: 'Adventure Sports',
      description: 'Surfing, diving, whale watching, and trekking in stunning landscapes.'
    },
    {
      icon: Coffee,
      title: 'Tea & Cuisine',
      description: 'World-famous Ceylon tea and diverse, flavorful Sri Lankan cuisine.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Visit Sri Lanka?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From pristine beaches to misty mountains, ancient temples to wildlife safaris, 
            Sri Lanka offers an incredible diversity of experiences in a compact island nation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Plan Your Perfect Sri Lankan Adventure</h3>
          <p className="text-xl mb-6 text-orange-100 max-w-2xl mx-auto">
            Use our seasonal guide above to find the best destinations for your travel dates. 
            Each region has its own ideal visiting time based on weather patterns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#seasons" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Choose Your Season
            </a>
            <a href="#destinations" className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              Browse All Destinations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
