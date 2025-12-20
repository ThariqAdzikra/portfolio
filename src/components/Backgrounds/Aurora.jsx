import { useEffect, useRef, useMemo } from 'react';

const Aurora = ({ 
  colorStops = ['#06b6d4', '#0891b2', '#22d3ee', '#67e8f9'],
  speed = 0.5,
  blur = 80,
  opacity = 0.3,
  className = '',
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  const gradientColors = useMemo(() => colorStops, [colorStops]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      timeRef.current += 0.01 * speed;
      const t = timeRef.current;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      // Clear canvas
      ctx.clearRect(0, 0, w, h);

      // Draw multiple flowing gradients
      for (let i = 0; i < 4; i++) {
        const phase = (t + i * 0.5) % (Math.PI * 2);
        const x = w * 0.5 + Math.sin(phase + i) * w * 0.3;
        const y = h * 0.3 + Math.cos(phase * 0.7 + i * 0.5) * h * 0.2;
        const radius = Math.max(w, h) * (0.4 + Math.sin(phase * 0.5) * 0.1);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, gradientColors[i % gradientColors.length] + '60');
        gradient.addColorStop(0.5, gradientColors[(i + 1) % gradientColors.length] + '30');
        gradient.addColorStop(1, 'transparent');

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
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
  }, [gradientColors, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        filter: `blur(${blur}px)`,
        opacity,
        pointerEvents: 'none',
      }}
    />
  );
};

export default Aurora;
