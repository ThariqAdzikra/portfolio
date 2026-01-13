import { useRef, useEffect, useMemo } from 'react';

const StarBorder = ({
  children,
  color = '#94a3b8',
  speed = 6,
  className = '',
  borderWidth = 2,
  borderRadius = 24,
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const gradientColors = useMemo(() => {
    return [color, 'transparent', 'transparent', color];
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rotation = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const rect = parent.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Create rotating gradient
      rotation += speed * 0.01;
      
      const gradient = ctx.createConicGradient(rotation, cx, cy);
      gradientColors.forEach((color, i) => {
        gradient.addColorStop(i / gradientColors.length, color);
      });
      gradient.addColorStop(1, gradientColors[0]);

      // Draw rounded rectangle border
      ctx.strokeStyle = gradient;
      ctx.lineWidth = borderWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const r = borderRadius;
      const offset = borderWidth / 2;
      
      ctx.beginPath();
      ctx.moveTo(r + offset, offset);
      ctx.lineTo(w - r - offset, offset);
      ctx.arcTo(w - offset, offset, w - offset, r + offset, r);
      ctx.lineTo(w - offset, h - r - offset);
      ctx.arcTo(w - offset, h - offset, w - r - offset, h - offset, r);
      ctx.lineTo(r + offset, h - offset);
      ctx.arcTo(offset, h - offset, offset, h - r - offset, r);
      ctx.lineTo(offset, r + offset);
      ctx.arcTo(offset, offset, r + offset, offset, r);
      ctx.closePath();
      ctx.stroke();

      // Add stars/sparkles
      const time = Date.now() * 0.001;
      for (let i = 0; i < 4; i++) {
        const angle = rotation + (i * Math.PI / 2);
        const starX = cx + Math.cos(angle) * (Math.max(w, h) * 0.4);
        const starY = cy + Math.sin(angle) * (Math.max(w, h) * 0.4);
        
        // Only draw if star is near the border
        const isNearBorder = 
          starX < borderWidth * 4 || starX > w - borderWidth * 4 ||
          starY < borderWidth * 4 || starY > h - borderWidth * 4;
        
        if (isNearBorder || i % 2 === 0) {
          const pulse = 0.5 + Math.sin(time * 3 + i) * 0.5;
          const size = 3 + pulse * 2;
          
          ctx.fillStyle = color;
          ctx.globalAlpha = pulse * 0.8;
          
          // Draw 4-pointed star
          ctx.beginPath();
          ctx.moveTo(starX, starY - size);
          ctx.lineTo(starX + size * 0.3, starY);
          ctx.lineTo(starX, starY + size);
          ctx.lineTo(starX - size * 0.3, starY);
          ctx.closePath();
          ctx.fill();
          
          ctx.beginPath();
          ctx.moveTo(starX - size, starY);
          ctx.lineTo(starX, starY + size * 0.3);
          ctx.lineTo(starX + size, starY);
          ctx.lineTo(starX, starY - size * 0.3);
          ctx.closePath();
          ctx.fill();
          
          ctx.globalAlpha = 1;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gradientColors, speed, borderWidth, borderRadius]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ borderRadius }}
      />
      {children}
    </div>
  );
};

export default StarBorder;
