import React from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollAnimation from './ScrollAnimations';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden parallax-slow">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/416394397.hd.mp4?s=97108a8a0d4dd6b0e89b0b8b65bb5e3c8ed9e3cd&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-rich-black/40"></div>
      </div>

      {/* Water Ripple Animation */}
      <div className="absolute inset-0 water-ripple-overlay"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-ecru trailer-text text-shadow">
            Garden Stég
            <span className="block text-reseda-green trailer-text trailer-text-delay-1">Szeged</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-ecru/90 font-light trailer-text trailer-text-delay-2 text-shadow">
            Tengerparti életérzés a Tiszán
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center trailer-text trailer-text-delay-3">
            <a
              href="#menu"
              className="px-8 py-4 bg-reseda-green text-rich-black font-semibold rounded-full btn-pulse glass-panel-hover"
            >
              Menü megtekintése
            </a>
            <a
              href="#reservation"
              className="px-8 py-4 border-2 border-ecru text-ecru font-semibold rounded-full btn-pulse glass-panel-hover hover:bg-ecru hover:text-rich-black"
            >
              Asztal foglalása
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 icon-float">
        <ChevronDown className="text-ecru w-8 h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
      </div>
    </section>
  );
};

export default Hero;