import { useRef, useState, useEffect } from 'react';

const TiltCard = ({ children, className = "", perspective = 1000, maxRotation = 15, scale = 1.05 }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        // Calculate mouse position relative to center of card
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;

        // Calculate rotation (Y axis rotation depends on X mouse pos, and vice versa)
        const rotateY = (mouseX / (width / 2)) * maxRotation; 
        const rotateX = -(mouseY / (height / 2)) * maxRotation; // Negative to tilt 'towards' mouse

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 }); // Reset rotation on leave
    };

    return (
        <div
            ref={cardRef}
            className={`transition-transform duration-100 ease-out ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: isHovered 
                    ? `perspective(${perspective}px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`
                    : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
                transformStyle: 'preserve-3d',
                willChange: 'transform'
            }}
        >
            {children}
        </div>
    );
};

export default TiltCard;
