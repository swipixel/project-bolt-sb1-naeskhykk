import React, { useState, useEffect } from 'react';
import { Camera, RefreshCw } from 'lucide-react';
import ScrollAnimation from './ScrollAnimations';

const LiveDock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <section id="dock" className="py-20 bg-rich-black-2 parallax-medium">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ecru mb-4 text-shadow">Élő Dokk Kamera</h2>
            <p className="text-xl text-ecru/80 max-w-2xl mx-auto">
              Tekintsd meg a jelenlegi hangulatot a Tisza partján
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="scale-in" delay={200}>
            <div className="relative glass-panel rounded-lg overflow-hidden">
            {/* Mock Live Camera Feed */}
            <div className="relative aspect-video bg-gradient-to-br from-rich-black via-raisin-black to-reseda-green/20 parallax-fast">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-reseda-green mx-auto mb-4 icon-pulse" />
                  <p className="text-ecru text-lg mb-2">Élő kamera</p>
                  <p className="text-ecru/70">Tisza part • Garden Stég Szeged</p>
                </div>
              </div>
              
              {/* Mock water animation overlay */}
              <div className="absolute inset-0 water-shimmer opacity-30"></div>
            </div>

            {/* Camera Controls */}
            <div className="p-4 glass-panel border-t border-reseda-green/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-ecru text-sm font-medium">ÉLŐ</span>
                  </div>
                  <div className="text-ecru/70 text-sm">
                    {currentTime.toLocaleString('hu-HU')}
                  </div>
                </div>
                
                <button
                  onClick={handleRefresh}
                  className="flex items-center space-x-2 px-4 py-2 glass-panel text-reseda-green rounded-lg btn-pulse hover:bg-reseda-green hover:text-rich-black"
                  disabled={isRefreshing}
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span className="text-sm">Frissítés</span>
                </button>
              </div>
            </div>
            </div>
          </ScrollAnimation>

          {/* Weather Info */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <ScrollAnimation animation="fade-in-left" delay={400}>
            <div className="glass-panel glass-panel-hover rounded-lg p-4 text-center">
              <p className="text-ecru/70 text-sm mb-1">Hőmérséklet</p>
              <p className="text-2xl font-bold text-reseda-green">12°C</p>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={500}>
            <div className="glass-panel glass-panel-hover rounded-lg p-4 text-center">
              <p className="text-ecru/70 text-sm mb-1">Szél</p>
              <p className="text-2xl font-bold text-reseda-green">5 km/h</p>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right" delay={600}>
            <div className="glass-panel glass-panel-hover rounded-lg p-4 text-center">
              <p className="text-ecru/70 text-sm mb-1">Páratartalom</p>
              <p className="text-2xl font-bold text-reseda-green">65%</p>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDock;