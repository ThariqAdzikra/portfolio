import { useMemo, useRef, useEffect, useState } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 50,
  animationFrom = { opacity: 0, transform: 'translate3d(0,30px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  threshold = 0.1,
  rootMargin = '0px',
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCount, setAnimatedCount] = useState(0);

  const letters = useMemo(() => {
    const result = [];
    let letterIndex = 0;
    
    text.split('').forEach((char, i) => {
      if (char === ' ') {
        result.push({ char: '\u00A0', isSpace: true, index: i });
      } else {
        result.push({ char, isSpace: false, index: i, letterIndex: letterIndex++ });
      }
    });
    
    return result;
  }, [text]);

  const totalLetters = letters.filter(l => !l.isSpace).length;

  useEffect(() => {
    // Start animation immediately for hero section or use IntersectionObserver
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

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

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [threshold, rootMargin, isVisible]);

  useEffect(() => {
    if (animatedCount === totalLetters && onLetterAnimationComplete) {
      onLetterAnimationComplete();
    }
  }, [animatedCount, totalLetters, onLetterAnimationComplete]);

  const getLetterStyle = (letter) => {
    const baseStyle = {
      display: 'inline-block',
      willChange: 'transform, opacity',
      transition: `all 0.6s ${easing}`,
      transitionDelay: isVisible && !letter.isSpace ? `${letter.letterIndex * delay}ms` : '0ms',
    };

    if (!isVisible) {
      return {
        ...baseStyle,
        ...animationFrom,
      };
    }

    return {
      ...baseStyle,
      ...animationTo,
    };
  };

  return (
    <span
      ref={containerRef}
      className={className}
      style={{ 
        display: 'inline-block',
      }}
    >
      {letters.map((letter, i) => (
        <span
          key={i}
          style={getLetterStyle(letter)}
          onTransitionEnd={() => {
            if (!letter.isSpace) {
              setAnimatedCount(prev => prev + 1);
            }
          }}
        >
          {letter.char}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
