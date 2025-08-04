import React from 'react';
import { Music, ExternalLink } from 'lucide-react';
import ScrollAnimation from './ScrollAnimations';

const SpotifySection = () => {
  return (
    <section id="music" className="py-20 bg-rich-black parallax-slow">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ecru mb-4 text-shadow">Garden Stég Hangulat</h2>
            <p className="text-xl text-ecru/80 max-w-2xl mx-auto">
              Hallgasd meg a lejátszási listánkat, ami meghatározza a hangulatunkat
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="scale-in" delay={200}>
            <div className="glass-panel rounded-lg overflow-hidden">
            {/* Mock Spotify Player */}
            <div className="aspect-[4/3] bg-gradient-to-br from-green-900/20 via-raisin-black to-rich-black relative parallax-medium">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 glass-panel icon-pulse">
                    <Music className="w-12 h-12 text-white icon-float" />
                  </div>
                  <h3 className="text-2xl font-bold text-ecru mb-2">Garden Stég Vibes</h3>
                  <p className="text-ecru/70 mb-6">Dockside • Chill • Summer</p>
                  
                  <div className="space-y-2 text-left max-w-sm mx-auto">
                    <div className="flex items-center justify-between p-3 glass-panel rounded-lg stagger-animation stagger-1">
                      <span className="text-ecru">Ocean Drive - Duke Dumont</span>
                      <span className="text-reseda-green text-sm">3:24</span>
                    </div>
                    <div className="flex items-center justify-between p-3 glass-panel rounded-lg stagger-animation stagger-2">
                      <span className="text-ecru">Watercolor - Petit Biscuit</span>
                      <span className="text-reseda-green text-sm">4:12</span>
                    </div>
                    <div className="flex items-center justify-between p-3 glass-panel rounded-lg opacity-50 stagger-animation stagger-3">
                      <span className="text-ecru">River - Joni Mitchell</span>
                      <span className="text-reseda-green text-sm">4:02</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 glass-panel">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-ecru mb-1">Most szól: Ocean Drive</h4>
                  <p className="text-ecru/70 text-sm">Duke Dumont • 47 dal • 3 óra 12 perc</p>
                </div>
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-full btn-pulse hover:bg-green-400"
                >
                  <span className="text-sm font-medium">Spotify-on</span>
                  <ExternalLink className="w-4 h-4 icon-float" />
                </a>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-ecru/70 mb-1">
                  <span>1:23</span>
                  <span>3:24</span>
                </div>
                <div className="w-full bg-rich-black rounded-full h-1">
                  <div className="bg-reseda-green h-1 rounded-full w-2/5 water-shimmer"></div>
                </div>
              </div>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;