import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            // Main cursor (instant)
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
            
            // Follower (delayed)
            if (followerRef.current) {
                // We use a slight timeout or requestAnimationFrame for smoother trailing, 
                // but direct CSS transition is often smoother for simple implementation.
                // Here we simply update position and let CSS transition handle the lag.
                followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        const handleMouseDown = () => setClicked(true);
        const handleMouseUp = () => setClicked(false);

        const handleLinkHoverEvents = () => {
            const handleMouseEnter = () => setHovered(true);
            const handleMouseLeave = () => setHovered(false);

            const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });

            return () => {
                clickables.forEach(el => {
                    el.removeEventListener('mouseenter', handleMouseEnter);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                });
            };
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        
        // Re-attach listeners when DOM changes (simple approach)
        const cleanupLinks = handleLinkHoverEvents();
        const observer = new MutationObserver(cleanupLinks);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            cleanupLinks();
            observer.disconnect();
        };
    }, []);

    // Only show on desktop (touch devices usually don't need custom cursors)
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            <div 
                ref={followerRef} 
                className={`cursor-follower ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
            />
            <div 
                ref={cursorRef} 
                className={`cursor-dot ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
            />
        </>
    );
};

export default CustomCursor;
