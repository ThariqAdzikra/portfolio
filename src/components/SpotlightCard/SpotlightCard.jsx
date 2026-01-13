import { useRef, useState, useCallback } from 'react';

const SpotlightCard = ({ 
  children, 
  className = '', 
  spotlightColor = 'rgba(148, 163, 184, 0.12)',
  spotlightSize = 300,
  style = {},
  ...props 
}) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setOpacity(0);
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      {/* Spotlight overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 100%)`,
          zIndex: 1,
        }}
      />
      
      {/* Border glow effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: opacity * 0.5,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(${spotlightSize * 1.5}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 100%)`,
          zIndex: 0,
          filter: 'blur(20px)',
        }}
      />
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
