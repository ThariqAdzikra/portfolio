import { useEffect, useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '',
  threshold = 0.1 
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  const delayClass = delay > 0 ? `delay-${Math.min(delay, 6)}` : '';

  return (
    <div
      ref={elementRef}
      className={`scroll-animate ${animation} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
