import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Discover Sri Lanka</h3>
            <p className="text-gray-400 mb-4">
              Your ultimate guide to exploring the Pearl of the Indian Ocean. 
              Find the best destinations at the perfect time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#destinations" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#seasons" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Best Times to Visit
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Sri Lanka
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Travel Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Sigiriya Rock
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Ella & Tea Country
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Galle Fort
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Yala National Park
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+94 702341369</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>travelo@discoversrilanka.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 Discover Sri Lanka. All rights reserved. | 
            <a href="#" className="hover:text-orange-500 transition-colors ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-orange-500 transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
