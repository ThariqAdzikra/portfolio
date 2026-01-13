import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/thariqadzikra', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/thariqadzikra', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://instagram.com/thariqadzikra', label: 'Instagram' },
        { icon: Mail, href: 'mailto:adzthariq@gmail.com', label: 'Email' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative py-12 md:py-16" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
            {/* Subtle gradient overlay */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{ 
                    background: 'linear-gradient(to top, rgba(148, 163, 184, 0.02) 0%, transparent 100%)'
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 
                            className="text-2xl font-black mb-2"
                            style={{ 
                                fontFamily: "'Space Grotesk', sans-serif",
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            THARIQ
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                            Fullstack Developer & UI/UX Enthusiast
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social, i) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    style={{ 
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border-color)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(148, 163, 184, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <Icon size={18} style={{ color: 'var(--text-secondary)' }} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ 
                            background: 'var(--gradient-primary)',
                            boxShadow: '0 4px 15px rgba(148, 163, 184, 0.2)'
                        }}
                        aria-label="Back to top"
                    >
                        <ArrowUp size={18} className="text-white" />
                    </button>
                </div>

                {/* Divider */}
                <div className="h-px w-full mb-8" style={{ background: 'var(--border-color)' }} />

                {/* Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <p className="text-sm flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                        © {currentYear} Muhammad Thariq Adzikra. 
                        <span className="hidden sm:inline">Made with</span>
                        <Heart size={14} className="mx-1" style={{ color: 'var(--accent-primary)' }} fill="currentColor" />
                        <span className="hidden sm:inline">in Indonesia</span>
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        Built with React, Tailwind CSS & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
