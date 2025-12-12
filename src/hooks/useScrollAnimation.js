import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once animated, unobserve to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
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
    }, [options.threshold, options.rootMargin]);

    return [elementRef, isVisible];
};

// Hook for staggered children animations
export const useStaggerAnimation = (itemCount, baseDelay = 0.1) => {
    const getDelay = (index) => `${baseDelay * index}s`;
    return { getDelay };
};

export default useScrollAnimation;
