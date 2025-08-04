import React from 'react';
import { Calendar, Music, Clock } from 'lucide-react';
import ScrollAnimation from './ScrollAnimations';

const Events = () => {
  const events = [
    {
      date: '2025-01-15',
      day: 'Szerda',
      title: 'DJ Sunset Sessions',
      artist: 'DJ Marcus',
      time: '20:00',
      type: 'DJ Set',
      description: 'Elektronikus zenék a Tisza partján'
    },
    {
      date: '2025-01-18',
      day: 'Szombat',
      title: 'Live Jazz Night',
      artist: 'Szeged Jazz Trio',
      time: '21:00',
      type: 'Élő Zene',
      description: 'Intim jazz hangulat a víz mellett'
    },
    {
      date: '2025-01-22',
      day: 'Szerda',
      title: 'Acoustic Evening',
      artist: 'Anna & The River Band',
      time: '19:30',
      type: 'Akusztik',
      description: 'Lágy hangzások és énekelt dallamok'
    },
    {
      date: '2025-01-25',
      day: 'Szombat',
      title: 'Weekend Vibes',
      artist: 'DJ Luna',
      time: '22:00',
      type: 'DJ Set',
      description: 'Hétvégi bulihangulat'
    }
  ];

  return (
    <section id="events" className="py-20 bg-rich-black parallax-fast">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ecru mb-4 text-shadow">Események</h2>
            <p className="text-xl text-ecru/80 max-w-2xl mx-auto">
              Élő zene és DJ szettek minden héten
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <ScrollAnimation 
              key={index} 
              animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} 
              delay={index * 150}
            >
            <div
              className="group glass-panel glass-panel-hover rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-reseda-green/20 p-2 rounded-lg glass-panel">
                    <Calendar className="w-5 h-5 text-reseda-green icon-float" />
                  </div>
                  <div>
                    <p className="text-ecru font-semibold">{event.day}</p>
                    <p className="text-ecru/70 text-sm">{new Date(event.date).toLocaleDateString('hu-HU')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-reseda-green">
                  <Clock className="w-4 h-4 icon-rotate" />
                  <span className="text-sm font-medium">{event.time}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-ecru mb-2">{event.title}</h3>
              
              <div className="flex items-center space-x-2 mb-3">
                <Music className="w-4 h-4 text-reseda-green icon-pulse" />
                <span className="text-ecru font-medium">{event.artist}</span>
                <span className="text-xs glass-panel text-reseda-green px-2 py-1 rounded-full">
                  {event.type}
                </span>
              </div>

              <p className="text-ecru/70 mb-4">{event.description}</p>

              <button className="w-full py-3 glass-panel text-reseda-green rounded-lg btn-pulse hover:bg-reseda-green hover:text-rich-black">
                Érdekel
              </button>
            </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;