import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import ScrollAnimation from './ScrollAnimations';

const Footer = () => {
  return (
    <footer className="glass-panel border-t border-reseda-green/20 relative z-30 mt-0">
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content */}
        <div>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <ScrollAnimation animation="fade-in-up">
              <div className="md:col-span-2">
              <div className="text-2xl font-bold text-ecru mb-4">
                Garden Stég <span className="text-reseda-green">Szeged</span>
              </div>
              <p className="text-ecru/70 mb-6 max-w-md">
                Tengerparti életérzés a Tisza partján. Friss ételek, prémium italok és 
                felejthetetlen hangulat a víz mellett.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/gardensteg/" className="text-reseda-green hover:text-ecru transition-all duration-300 btn-pulse p-2 rounded-lg">
                  <Facebook className="w-6 h-6 icon-float" />
                </a>
                <a href="https://www.instagram.com/gardensteg" className="text-reseda-green hover:text-ecru transition-all duration-300 btn-pulse p-2 rounded-lg">
                  <Instagram className="w-6 h-6 icon-pulse" />
                </a>
              </div>
              </div>
            </ScrollAnimation>

            {/* Quick Links */}
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div>
              <h4 className="text-ecru font-semibold mb-4">Gyors linkek</h4>
              <div className="space-y-2">
                <a href="#menu" className="block text-ecru/70 hover:text-reseda-green transition-all duration-300 btn-pulse py-1 px-2 rounded">Menü</a>
                <a href="#events" className="block text-ecru/70 hover:text-reseda-green transition-all duration-300 btn-pulse py-1 px-2 rounded">Események</a>
                <a href="#dock" className="block text-ecru/70 hover:text-reseda-green transition-all duration-300 btn-pulse py-1 px-2 rounded">Élő Kamera</a>
                <a href="#reservation" className="block text-ecru/70 hover:text-reseda-green transition-all duration-300 btn-pulse py-1 px-2 rounded">Foglalás</a>
              </div>
              </div>
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation animation="fade-in-up" delay={400}>
              <div>
              <h4 className="text-ecru font-semibold mb-4">Kapcsolat</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-reseda-green w-5 h-5 mt-0.5 icon-float" />
                  <div className="text-ecru/70 text-sm">
                    <p>Szeged 6726 </p>
                    <p>Közép Kikötő sor</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-reseda-green w-5 h-5 icon-pulse" />
                  <span className="text-ecru/70 text-sm">+36 70 605 0070</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-reseda-green w-5 h-5 icon-rotate" />
                  <span className="text-ecru/70 text-sm">info@gardensteg.hu</span>
                </div>
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <ScrollAnimation animation="fade-in-up" delay={600}>
          <div className="border-t border-reseda-green/20 mt-12 pt-8 text-center">
            <p className="text-ecru/70 text-sm">
              © 2025 Garden Stég Szeged. Minden jog fenntartva.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;
