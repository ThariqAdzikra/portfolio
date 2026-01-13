import { MapPin, Download, Code2, Lightbulb, Heart } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import TiltCard from '../../components/TiltCard/TiltCard';
import StarBorder from '../../components/StarBorder/StarBorder';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    const stats = [
        { icon: Code2, value: '11+', label: t.about.stats.projects },
        { icon: Lightbulb, value: '2+', label: t.about.stats.years },
        { icon: Heart, value: '100%', label: t.about.stats.passion },
    ];

    return (
        <section id="about" className="min-h-screen flex items-center py-24" style={{ background: 'var(--bg-section-1)' }}>
            <div className="w-full max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left - Photo Area */}
                    <ScrollReveal animation="fade-right">
                        <div className="relative flex justify-center">
                            {/* Background glow */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[280px] h-[280px] rounded-full"
                                    style={{ 
                                        background: 'radial-gradient(circle, rgba(148, 163, 184, 0.06) 0%, transparent 70%)'
                                    }} />
                            </div>
                            
                            {/* Photo Container with Star Border */}
                            <div className="relative">
                                <TiltCard className="relative z-10" maxRotation={10} scale={1.02}>
                                    <StarBorder 
                                        color="#94a3b8" 
                                        speed={4} 
                                        borderWidth={2}
                                        borderRadius={24}
                                    >
                                        {/* Main Photo */}
                                        <div className="relative w-[240px] md:w-[300px] h-[300px] md:h-[380px] rounded-3xl overflow-hidden"
                                            style={{ 
                                                background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-tertiary) 100%)',
                                                boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.5)'
                                            }}>
                                            <img 
                                                src="/pasfoto/fotothariq.png" 
                                                alt="Thariq Adzikra" 
                                                className="w-full h-full object-cover object-top"
                                            />
                                            {/* Gradient overlay at bottom */}
                                            <div className="absolute bottom-0 left-0 right-0 h-24"
                                                style={{ background: 'linear-gradient(to top, var(--bg-card), transparent)' }} />
                                        </div>
                                    </StarBorder>

                                    {/* Floating Stats Card */}
                                    <div className="absolute -right-8 bottom-12 p-4 rounded-2xl backdrop-blur-xl"
                                        style={{ 
                                            transform: 'translateZ(30px)',
                                            background: 'var(--bg-card)',
                                            border: '1px solid var(--border-color)',
                                            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)'
                                        }}>
                                        <div className="text-center">
                                            <div className="text-3xl font-black" style={{ 
                                                background: 'var(--gradient-primary)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent'
                                            }}>2+</div>
                                            <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{t.about.yearsExp}</div>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative element */}
                                    <div className="absolute -left-4 top-8 w-8 h-8 rounded-lg flex items-center justify-center"
                                        style={{ 
                                            transform: 'translateZ(20px)',
                                            background: 'var(--gradient-primary)' 
                                        }}>
                                        <Code2 size={16} className="text-white" />
                                    </div>
                                </TiltCard>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right - Content */}
                    <ScrollReveal animation="fade-left" delay={1}>
                        <div>
                            {/* Label */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent-primary)' }}>
                                    {t.about.label}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-sm md:text-base font-medium mb-2 tracking-widest uppercase"
                                style={{ color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
                                Muhammad Thariq Adzikra
                            </h3>
                            <h2 className="text-2xl md:text-5xl font-black mb-6 leading-tight"
                                style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                {t.about.title}
                                <span className="block" style={{ 
                                    background: 'var(--gradient-primary)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    {t.about.titleHighlight}
                                </span>
                            </h2>

                            {/* Description */}
                            <div className="space-y-4 mb-8">
                                <p className="text-sm md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    {t.about.description1}{' '}
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}> {t.about.passion1}</span>, 
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}> {t.about.passion2}</span>, {t.welcome.and}{' '}
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}> {t.about.passion3}</span>.
                                </p>
                                <p className="text-xs md:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                    {t.about.description2} <span style={{ color: 'var(--text-primary)' }}>{t.about.spec1}</span> {t.welcome.and}{' '}
                                    <span style={{ color: 'var(--text-primary)' }}> {t.about.spec2}</span> {t.about.specSuffix}
                                </p>
                            </div>

                            {/* Mini Stats */}
                            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 pb-8" style={{ borderBottom: '1px solid var(--border-color)' }}>
                                {stats.map((stat, i) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                style={{ background: 'rgba(148, 163, 184, 0.1)' }}>
                                                <Icon size={18} style={{ color: 'var(--accent-primary)' }} />
                                            </div>
                                            <div>
                                                <div className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
                                                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                                <a href="/cv.pdf" download="CV_Thariq_Adzikra.pdf" className="h-12 flex items-center justify-center gap-2 px-6 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                                    style={{ background: 'var(--gradient-primary)', color: 'var(--bg-primary)', boxShadow: '0 10px 30px rgba(148, 163, 184, 0.15)' }}>
                                    <Download size={18} />
                                    {t.about.downloadCv}
                                </a>
                                <div className="flex items-center justify-center gap-2 h-12 px-5 rounded-xl"
                                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                    <MapPin size={16} style={{ color: 'var(--accent-primary)' }} />
                                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{t.about.location}</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 h-12 px-5 rounded-xl"
                                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--accent-secondary)' }}></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--accent-secondary)' }}></span>
                                    </span>
                                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{t.about.openToWork}</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
