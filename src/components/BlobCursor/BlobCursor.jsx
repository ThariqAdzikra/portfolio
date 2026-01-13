import { useEffect, useRef, useState } from 'react';
import './BlobCursor.css';

const BlobCursor = ({ 
  blobColor = 'rgba(148, 163, 184, 0.25)',
  size = 40,
}) => {
  const blobRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth animation loop
    const animate = () => {
      setPosition(prev => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.15,
        y: prev.y + (targetRef.current.y - prev.y) * 0.15,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={blobRef}
      className="blob-cursor"
      style={{
        position: 'fixed',
        left: position.x - size / 2,
        top: position.y - size / 2,
        width: size,
        height: size,
        background: blobColor,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9998,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease, transform 0.1s ease',
        filter: 'blur(2px)',
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default BlobCursor;
