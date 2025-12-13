import { useEffect } from 'react';
import './RippleEffect.css';

const RippleEffect = () => {
    useEffect(() => {
        const createRipple = (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'click-ripple';
            
            // Set size and position
            const size = 100; // Fixed size or dynamic? Fixed size expanding is better for water drop effect
            // Actually, let's make it start small and expand.
            
            ripple.style.left = `${e.clientX}px`;
            ripple.style.top = `${e.clientY}px`;
            
            document.body.appendChild(ripple);

            // Remove after animation
            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        };

        window.addEventListener('click', createRipple);

        return () => {
            window.removeEventListener('click', createRipple);
        };
    }, []);

    return null; // Logic only component
};

export default RippleEffect;
