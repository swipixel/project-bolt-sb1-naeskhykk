import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnimationContextType {
  addRipple: (x: number, y: number) => void;
  isScrollingUp: boolean;
  scrollY: number;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }
  return context;
};

interface AnimationProviderProps {
  children: React.ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollY = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
      
      // Update CSS custom property for parallax effects
      document.documentElement.style.setProperty('--scroll-y', `${currentScrollY * 0.5}px`);
      
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const addRipple = (x: number, y: number) => {
    const ripple = document.createElement('div');
    ripple.className = 'water-ripple';
    ripple.style.left = `${x - 25}px`;
    ripple.style.top = `${y - 25}px`;
    ripple.style.width = '50px';
    ripple.style.height = '50px';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
      document.body.removeChild(ripple);
    }, 800);
  };

  return (
    <AnimationContext.Provider value={{ addRipple, isScrollingUp, scrollY }}>
      {children}
    </AnimationContext.Provider>
  );
};