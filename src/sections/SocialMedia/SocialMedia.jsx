import { Github, Linkedin, Instagram, Youtube, Mail, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

// Custom X (Twitter) icon
const XIcon = ({ size = 24, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color || "currentColor"}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

const SocialMedia = () => {
    const { t } = useLanguage();

    const socials = [
        { name: 'GitHub', icon: Github, url: '#', color: 'var(--text-primary)', desc: t.socialMedia.platforms.github },
        { name: 'LinkedIn', icon: Linkedin, url: '#', color: '#0077b5', desc: t.socialMedia.platforms.linkedin },
        { name: 'Instagram', icon: Instagram, url: '#', color: '#e4405f', desc: t.socialMedia.platforms.instagram },
        { name: 'X', icon: XIcon, url: '#', color: 'var(--text-primary)', desc: t.socialMedia.platforms.x },
        { name: 'YouTube', icon: Youtube, url: '#', color: '#ff0000', desc: t.socialMedia.platforms.youtube },
        { name: 'Email', icon: Mail, url: '#', color: 'var(--accent-primary)', desc: t.socialMedia.platforms.email },
    ];

    return (
        <section id="social" className="min-h-screen flex items-center py-20" style={{ background: 'var(--bg-section-2)' }}>
            <div className="w-full max-w-5xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Right - Header */}
                    <ScrollReveal animation="fade-left" className="lg:col-span-5 lg:order-2">
                        <div className="lg:text-right">
                            <div className="flex items-center gap-3 mb-6 lg:justify-end">
                                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent-primary)' }}>
                                    {t.socialMedia.label}
                                </span>
                                <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                                style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                {t.socialMedia.title}
                                <span className="block" style={{ 
                                    background: 'var(--gradient-primary)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    {t.socialMedia.titleHighlight}
                                </span>
                            </h2>

                            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {t.socialMedia.description}
                            </p>

                            {/* Stats */}
                            <div className="mt-8 p-6 rounded-2xl lg:text-left" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                <div className="flex items-center gap-8">
                                    <div>
                                        <div className="text-3xl font-black" style={{ color: 'var(--accent-primary)' }}>{t.socialMedia.stats.followers}</div>
                                        <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{t.socialMedia.stats.followersLabel}</div>
                                    </div>
                                    <div className="w-px h-12" style={{ background: 'var(--border-color)' }} />
                                    <div>
                                        <div className="text-3xl font-black" style={{ color: 'var(--accent-secondary)' }}>{t.socialMedia.stats.posts}</div>
                                        <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{t.socialMedia.stats.postsLabel}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Left - Social Grid */}
                    <div className="lg:col-span-7 lg:order-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <ScrollReveal key={index} animation="fade-up" delay={index + 1}>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer"
                                        className="group h-[140px] p-5 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center justify-center text-center"
                                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                        
                                        <div className="mb-4 transition-all duration-300 group-hover:scale-110">
                                            <Icon size={36} color={social.color} />
                                        </div>
                                        
                                        <span className="font-bold mb-1" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                            {social.name}
                                        </span>
                                        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                            {social.desc}
                                        </span>
                                        
                                        <ArrowUpRight size={16} className="mt-2 opacity-0 group-hover:opacity-100 transition-all" 
                                            style={{ color: 'var(--accent-primary)' }} />
                                    </a>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;
