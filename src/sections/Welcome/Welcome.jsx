import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Welcome = () => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const { t } = useLanguage();

    const phrases = ["Fullstack Developer", "UI/UX Enthusiast", "Data Engineer", "Mobile Developer"];
    const fullName = "Muhammad Thariq Adzikra";

    // Trigger entrance animations on mount
    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
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
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* Status Badge - Animate first */}
                <div 
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-10 backdrop-blur-sm transition-all duration-700 ease-out"
                    style={{ 
                        background: 'rgba(6, 182, 212, 0.1)', 
                        border: '1px solid rgba(6, 182, 212, 0.2)',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
                    }}
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--accent-secondary)' }}></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: 'var(--accent-secondary)' }}></span>
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {t.welcome.available}
                    </span>
                </div>

                {/* Greeting - Animate second */}
                <div className="mb-8">
                    <p 
                        className="text-lg md:text-xl mb-4 font-medium transition-all duration-700 ease-out"
                        style={{ 
                            color: 'var(--text-secondary)',
                            opacity: loaded ? 1 : 0,
                            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                            transitionDelay: '150ms',
                        }}
                    >
                        {t.welcome.greeting}
                    </p>
                    
                    {/* Name - Main animation */}
                    <h1 
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight transition-all duration-1000 ease-out"
                        style={{ 
                            fontFamily: "'Space Grotesk', sans-serif",
                            opacity: loaded ? 1 : 0,
                            transform: loaded ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                            transitionDelay: '300ms',
                        }}
                    >
                        <span style={{ 
                            background: 'var(--gradient-primary)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            {fullName}
                        </span>
                    </h1>
                </div>
                
                {/* Typing Animation - Animate fourth */}
                <div 
                    className="flex items-center justify-center gap-1 mb-10 h-10 transition-all duration-700 ease-out"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                        transitionDelay: '500ms',
                    }}
                >
                    <span className="text-2xl md:text-3xl font-semibold"
                        style={{ color: 'var(--accent-primary)', fontFamily: "'JetBrains Mono', monospace" }}>
                        {'<'}{displayText}<span style={{ opacity: showCursor ? 1 : 0 }}>|</span>{'/>'}
                    </span>
                </div>
                
                {/* Description - Animate fifth */}
                <p 
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 ease-out"
                    style={{ 
                        color: 'var(--text-secondary)',
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                        transitionDelay: '650ms',
                    }}
                >
                    {t.welcome.description}{' '}
                    <span style={{ color: 'var(--accent-primary)' }}>{t.welcome.cleanCode}</span>{' '}
                    {t.welcome.and}{' '}
                    <span style={{ color: 'var(--accent-primary)' }}>{t.welcome.creativeDesign}</span>
                </p>

                {/* CTA Buttons - Animate last */}
                <div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                        transitionDelay: '800ms',
                    }}
                >
                    <button onClick={scrollToAbout}
                        className="group w-52 h-14 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        style={{ background: 'var(--gradient-primary)', boxShadow: '0 10px 40px rgba(6, 182, 212, 0.25)' }}>
                        {t.welcome.exploreBtn}
                        <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                    <a href="#contact" 
                        className="group w-52 h-14 rounded-2xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center hover:text-white"
                        style={{ 
                            border: '2px solid var(--accent-primary)', 
                            color: 'var(--text-primary)',
                            background: 'transparent',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--gradient-primary)';
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.borderColor = 'var(--accent-primary)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                    >
                        {t.welcome.contactBtn}
                    </a>
                </div>
            </div>

            {/* Scroll Indicator - Animate with delay */}
            <div 
                className="hidden md:flex mt-16 sm:mt-24 flex-col items-center gap-2 transition-all duration-700 ease-out"
                style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: '1000ms',
                }}
            >
                <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{t.welcome.scroll}</span>
                <div className="w-6 h-10 rounded-full flex justify-center pt-2 animate-bounce" style={{ border: '2px solid var(--border-color)' }}>
                    <div className="w-1.5 h-3 rounded-full animate-pulse" style={{ background: 'var(--accent-primary)' }} />
                </div>
            </div>
        </section>
    );
};

export default Welcome;
