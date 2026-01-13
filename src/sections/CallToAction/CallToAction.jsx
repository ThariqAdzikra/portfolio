import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

const CallToAction = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-section-1)' }}>
            {/* Decorative Background */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(148, 163, 184, 0.05) 0%, transparent 70%)'
                }}
            />
            
            {/* Floating decorative elements */}
            <div 
                className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20"
                style={{ background: 'var(--gradient-primary)', filter: 'blur(60px)' }}
            />
            <div 
                className="absolute bottom-10 right-10 w-48 h-48 rounded-full opacity-15"
                style={{ background: 'var(--gradient-primary)', filter: 'blur(80px)' }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <ScrollReveal animation="fade-up">
                    {/* Badge */}
                    <div 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                        style={{ 
                            background: 'rgba(148, 163, 184, 0.1)',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <Sparkles size={16} style={{ color: 'var(--accent-primary)' }} />
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                            {t?.cta?.badge || "Mari Berkolaborasi"}
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 
                        className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
                        style={{ 
                            fontFamily: "'Space Grotesk', sans-serif",
                            color: 'var(--text-primary)'
                        }}
                    >
                        {t?.cta?.title || "Punya Proyek Menarik?"}
                        <span 
                            className="block mt-2"
                            style={{ 
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            {t?.cta?.titleHighlight || "Ayo Wujudkan Bersama"}
                        </span>
                    </h2>

                    {/* Description */}
                    <p 
                        className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        {t?.cta?.description || "Saya selalu terbuka untuk peluang kolaborasi baru. Baik itu proyek web, mobile app, atau konsultasi UI/UX, mari diskusikan bagaimana kita bisa bekerja sama."}
                    </p>

                    {/* CTA Button */}
                    <Link 
                        to="/contact"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        style={{ 
                            background: 'var(--gradient-primary)',
                            color: 'var(--bg-primary)',
                            boxShadow: '0 15px 40px rgba(148, 163, 184, 0.25)'
                        }}
                    >
                        {t?.cta?.button || "Hubungi Saya"}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Quick contact info */}
                    <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
                        {t?.cta?.email || "atau email langsung ke"}{' '}
                        <a 
                            href="mailto:adzthariq@gmail.com" 
                            className="font-medium hover:underline"
                            style={{ color: 'var(--accent-primary)' }}
                        >
                            adzthariq@gmail.com
                        </a>
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default CallToAction;
