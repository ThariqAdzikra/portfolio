import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Welcome = () => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const { t } = useLanguage();

    // Note: Ideally phrases should also be in translations, but for now names/roles are universal or can be added later
    const phrases = ["Fullstack Developer", "UI/UX Enthusiast", "Data Engineer", "Mobile Developer"];
    const fullName = "Muhammad Thariq Adzikra";

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
                {/* Status Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-10 backdrop-blur-sm"
                    style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--accent-secondary)' }}></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: 'var(--accent-secondary)' }}></span>
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {t.welcome.available}
                    </span>
                </div>

                {/* Main Heading */}
                <div className="mb-8">
                    <p className="text-lg md:text-xl mb-4 font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {t.welcome.greeting}
                    </p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <span style={{ color: 'var(--text-primary)' }}> </span>
                        <span style={{ 
                            background: 'var(--gradient-primary)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            {fullName}
                        </span>
                    </h1>
                </div>
                
                {/* Typing Animation */}
                <div className="flex items-center justify-center gap-1 mb-10 h-10">
                    <span className="text-2xl md:text-3xl font-semibold"
                        style={{ color: 'var(--accent-primary)', fontFamily: "'JetBrains Mono', monospace" }}>
                        {'<'} {displayText}
                        <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
                        {' />'}
                    </span>
                </div>
                
                {/* Description */}
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t.welcome.description}{' '}
                    <span style={{ color: 'var(--accent-primary)' }}>{t.welcome.cleanCode}</span>{' '}
                    {t.welcome.and}{' '}
                    <span style={{ color: 'var(--accent-primary)' }}>{t.welcome.creativeDesign}</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={scrollToAbout}
                        className="group px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        style={{ background: 'var(--gradient-primary)', boxShadow: '0 10px 40px rgba(6, 182, 212, 0.25)' }}>
                        {t.welcome.exploreBtn}
                        <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                    <a href="#contact" 
                        className="px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
                        style={{ border: '2px solid var(--border-color)', color: 'var(--text-primary)' }}>
                        {t.welcome.contactBtn}
                    </a>
                </div>
            </div>

            {/* Scroll Indicator - Made relative to avoid overlap */}
            <div className="hidden md:flex mt-16 sm:mt-24 flex-col items-center gap-2 animate-bounce">
                <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{t.welcome.scroll}</span>
                <div className="w-6 h-10 rounded-full flex justify-center pt-2" style={{ border: '2px solid var(--border-color)' }}>
                    <div className="w-1.5 h-3 rounded-full animate-pulse" style={{ background: 'var(--accent-primary)' }} />
                </div>
            </div>
        </section>
    );
};

export default Welcome;
