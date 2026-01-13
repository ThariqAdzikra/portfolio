import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Welcome.css';

const Welcome = () => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const { t } = useLanguage();

    const phrases = ["Fullstack Developer", "UI/UX Enthusiast", "Data Engineer", "Mobile Developer"];

    // Trigger entrance animations on mount
    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Canvas-based video text masking
    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;

        const draw = () => {
            // Continue animation regardless of video state
            // Video has loop attribute, so it will restart automatically
            
            // Set canvas size dynamically
            const rect = canvas.parentElement.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';
            ctx.scale(dpr, dpr);

            // Clear canvas
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Only draw if video is ready
            if (video.readyState >= 2) {
                // Set compositing mode
                ctx.globalCompositeOperation = 'source-over';

                // Draw video stretched to fill canvas
                const videoAspect = video.videoWidth / video.videoHeight;
                const canvasAspect = rect.width / rect.height;
                let drawWidth, drawHeight, drawX, drawY;

                if (videoAspect > canvasAspect) {
                    drawHeight = rect.height;
                    drawWidth = drawHeight * videoAspect;
                    drawX = (rect.width - drawWidth) / 2;
                    drawY = 0;
                } else {
                    drawWidth = rect.width;
                    drawHeight = drawWidth / videoAspect;
                    drawX = 0;
                    drawY = (rect.height - drawHeight) / 2;
                }

                ctx.drawImage(video, drawX, drawY, drawWidth, drawHeight);

                // Apply text as mask using 'destination-in' compositing
                ctx.globalCompositeOperation = 'destination-in';
                
                // Calculate GIANT responsive font size - THARIQ as THE main focus
                const isMobile = rect.width < 500;
                const isTablet = rect.width < 768;
                let fontSize;
                if (isMobile) {
                    fontSize = rect.width * 0.22; // Bigger for mobile
                } else if (isTablet) {
                    fontSize = rect.width * 0.28; // Bigger for tablet
                } else {
                    // GIANT size for desktop - THARIQ dominates the screen
                    fontSize = rect.width * 0.18; // Proportional to full width
                }
                // Use 900 weight (Black) for maximum thickness
                ctx.font = `900 ${fontSize}px 'Space Grotesk', sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'black';
                ctx.fillText('THARIQ', rect.width / 2, rect.height / 2);
            }

            animationId = requestAnimationFrame(draw);
        };

        // Start animation loop immediately
        draw();

        // Also handle video play event for initial load
        const handleCanPlay = () => {
            video.play().catch(() => {});
        };

        video.addEventListener('canplay', handleCanPlay);
        
        // Start playing
        video.play().catch(() => {});

        return () => {
            cancelAnimationFrame(animationId);
            video.removeEventListener('canplay', handleCanPlay);
        };
    }, []);

    useEffect(() => {
        let timeout;
        const phrase = phrases[currentPhrase];
        if (displayText.length < phrase.length) {
            timeout = setTimeout(() => setDisplayText(phrase.slice(0, displayText.length + 1)), 80);
        } else {
            timeout = setTimeout(() => {
                setDisplayText('');
                setCurrentPhrase((prev) => (prev + 1) % phrases.length);
            }, 2500);
        }
        return () => clearTimeout(timeout);
    }, [displayText, currentPhrase]);

    useEffect(() => {
        const interval = setInterval(() => setShowCursor(prev => !prev), 500);
        return () => clearInterval(interval);
    }, []);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section 
            id="welcome" 
            className="min-h-screen flex items-start md:items-center justify-center pt-28 md:pt-0 relative overflow-hidden"
        >
            {/* Content */}
            <div className="relative z-10 text-center px-6 w-full mx-auto">

                {/* Greeting - Small subtle text */}
                <p 
                    className="text-xs md:text-sm mb-2 relative z-20 font-normal tracking-widest uppercase transition-all duration-700 ease-out"
                    style={{ 
                        color: 'var(--text-muted)',
                        opacity: loaded ? 0.6 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                        transitionDelay: '150ms',
                        letterSpacing: '0.3em'
                    }}
                >
                    Hello, I'm
                </p>
                    
                {/* Canvas-based Video Masked Name - THARIQ */}
                <div 
                    className="video-mask-container transition-all duration-1000 ease-out"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                        transitionDelay: '300ms',
                    }}
                >
                    {/* Hidden video source */}
                    <video 
                        ref={videoRef}
                        className="hidden-video"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        crossOrigin="anonymous"
                    >
                        <source src="/pasfoto/masking.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Canvas for rendering video in text shape */}
                    <canvas ref={canvasRef} className="video-canvas" />
                    
                    {/* Fallback gradient text for canvas not supported */}
                    <noscript>
                        <h1 className="video-text-fallback">THARIQ</h1>
                    </noscript>
                </div>


                
                {/* Full Name - Subtle but visible */}
                <p 
                    className="text-xs md:text-sm tracking-widest uppercase font-normal transition-all duration-700 ease-out"
                    style={{ 
                        color: 'var(--text-secondary)',
                        opacity: loaded ? 0.75 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                        transitionDelay: '400ms',
                        letterSpacing: '0.3em',
                        marginTop: '-0.5rem',
                        marginBottom: '1rem'
                    }}
                >
                    Muhammad Thariq Adzikra
                </p>

                {/* Typing Animation - Clean without HTML tags */}
                <div 
                    className="flex items-center justify-center gap-1 mb-6 h-8 transition-all duration-700 ease-out"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                        transitionDelay: '500ms',
                    }}
                >
                    <span className="text-lg md:text-2xl font-semibold"
                        style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                        {displayText}<span style={{ opacity: showCursor ? 1 : 0, color: 'var(--accent-primary)' }}>|</span>
                    </span>
                </div>
                


                {/* CTA Buttons */}
                <div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                        transitionDelay: '800ms',
                    }}
                >
                    <button onClick={scrollToAbout}
                        className="group w-48 h-12 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        style={{ 
                            background: 'var(--text-primary)', 
                            color: 'var(--bg-primary)',
                        }}
                    >
                        {t.welcome.exploreBtn}
                        <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                    <a href="/contact" 
                        className="group w-48 h-12 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
                        style={{ 
                            border: '1px solid var(--border-hover)', 
                            color: 'var(--text-secondary)',
                            background: 'transparent',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        {t.welcome.contactBtn}
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 transition-all duration-700 ease-out"
                style={{
                    opacity: loaded ? 0.5 : 0,
                    transitionDelay: '1200ms',
                }}
            >
                <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{t.welcome.scroll}</span>
                <div className="w-5 h-8 rounded-full flex justify-center pt-1.5" style={{ border: '1px solid var(--border-color)' }}>
                    <div className="w-1 h-2 rounded-full animate-bounce" style={{ background: 'var(--accent-primary)' }} />
                </div>
            </div>
        </section>
    );
};

export default Welcome;
