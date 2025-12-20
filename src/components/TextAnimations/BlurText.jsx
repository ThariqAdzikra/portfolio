import { useRef, useState, useEffect } from 'react';

const BlurText = ({
  text = '',
  delay = 100,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top', 'bottom', 'left', 'right'
  threshold = 0.1,
  rootMargin = '-50px',
  animationFrom,
  animationTo,
  easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  onAnimationComplete,
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const getDefaultFrom = () => {
    const transforms = {
      top: 'translateY(-20px)',
      bottom: 'translateY(20px)',
      left: 'translateX(-20px)',
      right: 'translateX(20px)',
    };
    return {
      filter: 'blur(8px)',
      opacity: 0,
      transform: transforms[direction] || transforms.top,
    };
  };

  const defaultFrom = animationFrom || getDefaultFrom();
  const defaultTo = animationTo || {
    filter: 'blur(0px)',
    opacity: 1,
    transform: 'translateY(0) translateX(0)',
  };

  const elements = animateBy === 'words' 
    ? text.split(' ').map((word, i) => ({ text: word, index: i }))
    : text.split('').map((char, i) => ({ text: char === ' ' ? '\u00A0' : char, index: i }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible]);

  const getStyle = (index) => {
    const baseStyle = {
      display: 'inline-block',
      willChange: 'transform, opacity, filter',
      transition: `all 0.5s ${easing}`,
      transitionDelay: isVisible ? `${index * delay}ms` : '0ms',
    };

    return isVisible
      ? { ...baseStyle, ...defaultTo }
      : { ...baseStyle, ...defaultFrom };
  };

  return (
    <span ref={containerRef} className={className} style={{ display: 'inline' }}>
      {elements.map((el, i) => (
        <span key={i} style={getStyle(i)}>
          {el.text}
          {animateBy === 'words' && i < elements.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
};

export default BlurText;
