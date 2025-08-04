import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useAnimation } from './AnimationProvider';
import ScrollAnimation from './ScrollAnimations';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrollingUp, scrollY } = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#menu', label: 'Menü' },
    { href: '#events', label: 'Események' },
    // { href: '#dock', label: 'Élő Kamera' },
    //{ href: '#music', label: 'Zene' },
    { href: '#reservation', label: 'Foglalás' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-panel border-b border-reseda-green/20 nav-slide-down visible' 
        : 'bg-transparent nav-slide-down'
    } ${scrollY > 100 && !isScrollingUp ? 'nav-slide-down' : 'nav-slide-down visible'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <ScrollAnimation animation="fade-in-left">
            <img src="/Image/logo.jpg" height="100%"/>
          </ScrollAnimation>
          
          {/* Desktop Menu */}
          <ScrollAnimation animation="fade-in-right" delay={200}>
            <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-ecru hover:text-reseda-green transition-all duration-300 relative group btn-pulse px-3 py-2 rounded-lg"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-reseda-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            </div>
          </ScrollAnimation>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ecru hover:text-reseda-green transition-all duration-300 btn-pulse p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-reseda-green/20 glass-panel rounded-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-ecru hover:text-reseda-green transition-all duration-300 btn-pulse rounded-lg mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;