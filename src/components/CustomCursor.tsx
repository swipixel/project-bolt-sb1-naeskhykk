import React, { useEffect, useState } from 'react';
import { useAnimation } from './AnimationProvider';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { addRipple } = useAnimation();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, input, select, textarea, [role="button"]') ||
                           target.closest('button, a, input, select, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    const handleClick = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
    };
  }, [addRipple]);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;