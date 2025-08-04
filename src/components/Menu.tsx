import React, { useState } from 'react';
import { Play } from 'lucide-react';
import ScrollAnimation from './ScrollAnimations';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('grills');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const categories = {
    grills: 'Grillezett Ételek',
    drinks: 'Italok',
    appetizers: 'Előételek',
    desserts: 'Desszertek'
  };

  const menuItems = {
    grills: [
      {
        id: 'ribeye',
        name: 'Ribeye Steak',
        description: 'Prémium marha ribeye, grillezett zöldségekkel',
        price: '8,900 Ft',
        video: 'https://player.vimeo.com/external/416394397.hd.mp4?s=97108a8a0d4dd6b0e89b0b8b65bb5e3c8ed9e3cd&profile_id=175'
      },
      {
        id: 'salmon',
        name: 'Grillezett Lazac',
        description: 'Friss lazac, citromos fűszerkeverékkel',
        price: '6,500 Ft',
        video: 'https://player.vimeo.com/external/416394397.hd.mp4?s=97108a8a0d4dd6b0e89b0b8b65bb5e3c8ed9e3cd&profile_id=175'
      },
      {
        id: 'chicken',
        name: 'Tiszai Csirkemell',
        description: 'Házi marinádban eltett csirkemell',
        price: '4,800 Ft',
        video: 'https://player.vimeo.com/external/416394397.hd.mp4?s=97108a8a0d4dd6b0e89b0b8b65bb5e3c8ed9e3cd&profile_id=175'
      }
    ],
    drinks: [
      {
        id: 'cocktail1',
        name: 'Tisza Sunset',
        description: 'Házi készítésű koktél, helyi gyümölcsökkel',
        price: '2,200 Ft',
        video: 'https://player.vimeo.com/external/416394397.hd.mp4?s=97108a8a0d4dd6b0e89b0b8b65bb5e3c8ed9e3cd&profile_id=175'
      },
      {
        id: 'wine',
        name: 'Szegedi Borválogatás',
        description: 'Helyi pincészetek kínálata',
        price: '1,800 Ft/pohár',
        video: 'https://player.vimeo.com/external/416394397.hd.mp4?s=97108a8a0d4dd6b0e89b0b8b65bb5e3c8ed9e3cd&profile_id=175'
      }
    ],
    appetizers: [
      {
        id: 'bruschetta',
        name: 'Tiszaparti Bruschetta',
        description: 'Házi kenyér, friss paradicsommal',
        price: '1,900 Ft',
        video: 'https://player.vimeo.com/external/416394397.hd.mp4?s=97108a8a0d4dd6b0e89b0b8b65bb5e3c8ed9e3cd&profile_id=175'
      }
    ],
    desserts: [
      {
        id: 'tiramisu',
        name: 'Dockside Tiramisu',
        description: 'Klasszikus tiramisu, házi készítésű',
        price: '1,600 Ft',
        video: 'https://player.vimeo.com/external/416394397.hd.mp4?s=97108a8a0d4dd6b0e89b0b8b65bb5e3c8ed9e3cd&profile_id=175'
      }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-rich-black-2 parallax-medium">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ecru mb-4 text-shadow">Menünk</h2>
            <p className="text-xl text-ecru/80 max-w-2xl mx-auto">
              Friss alapanyagokból készült, grillezett finomságok és prémium italok
            </p>
          </div>
        </ScrollAnimation>

        {/* Category Tabs */}
        <ScrollAnimation animation="scale-in" delay={200}>
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(categories).map(([key, label], index) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-medium btn-pulse stagger-animation stagger-${index + 1} ${
                activeCategory === key
                  ? 'bg-reseda-green text-rich-black glass-panel'
                  : 'glass-panel text-ecru hover:bg-reseda-green/20'
              }`}
            >
              {label}
            </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <ScrollAnimation 
              key={item.id} 
              animation="fade-in-up" 
              delay={index * 100}
            >
            <div
              className="group relative glass-panel glass-panel-hover rounded-lg overflow-hidden"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Video Preview */}
              <div className="relative h-48 bg-rich-black overflow-hidden">
                {hoveredItem === item.id && (
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover transition-opacity duration-300"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-raisin-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Play className="text-ecru w-6 h-6 opacity-70 icon-pulse" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-ecru">{item.name}</h3>
                  <span className="text-reseda-green font-bold">{item.price}</span>
                </div>
                <p className="text-ecru/70">{item.description}</p>
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;