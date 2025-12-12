import { MapPin, Briefcase, Download, Code2, Lightbulb, Heart } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';

const About = () => {
    const stats = [
        { icon: Code2, value: '10+', label: 'Projects' },
        { icon: Lightbulb, value: '3+', label: 'Years' },
        { icon: Heart, value: '100%', label: 'Passion' },
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
                                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)'
                                    }} />
                            </div>
                            
                            {/* Photo Container */}
                            <div className="relative">
                                {/* Main Photo */}
                                <div className="relative w-[300px] h-[380px] rounded-3xl overflow-hidden"
                                    style={{ 
                                        background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-tertiary) 100%)',
                                        border: '1px solid var(--border-color)',
                                        boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.5)'
                                    }}>
                                    <img 
                                        src="/src/assets/images/fotothariq.png" 
                                        alt="Thariq Adzikra" 
                                        className="w-full h-full object-cover object-top"
                                    />
                                    {/* Gradient overlay at bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-24"
                                        style={{ background: 'linear-gradient(to top, var(--bg-card), transparent)' }} />
                                </div>
                                
                                {/* Floating Stats Card */}
                                <div className="absolute -right-8 bottom-12 p-4 rounded-2xl backdrop-blur-xl"
                                    style={{ 
                                        background: 'rgba(15, 23, 42, 0.9)',
                                        border: '1px solid var(--border-color)',
                                        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)'
                                    }}>
                                    <div className="text-center">
                                        <div className="text-3xl font-black" style={{ 
                                            background: 'var(--gradient-primary)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>3+</div>
                                        <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Years Exp</div>
                                    </div>
                                </div>
                                
                                {/* Decorative element */}
                                <div className="absolute -left-4 top-8 w-8 h-8 rounded-lg flex items-center justify-center"
                                    style={{ background: 'var(--gradient-primary)' }}>
                                    <Code2 size={16} className="text-white" />
                                </div>
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
                                    About Me
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                                style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                Crafting Digital
                                <span className="block" style={{ 
                                    background: 'var(--gradient-primary)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Experiences
                                </span>
                            </h2>

                            {/* Description */}
                            <div className="space-y-4 mb-8">
                                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    I have a strong passion for 
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}> UI/UX</span>, 
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}> Machine Learning/AI</span>, and 
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}> Data Engineering</span>.
                                </p>
                                <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                    Specializing in <span style={{ color: 'var(--text-primary)' }}>Website Development</span> (Fullstack) and 
                                    <span style={{ color: 'var(--text-primary)' }}> Mobile Development</span> using modern technologies to build scalable solutions.
                                </p>
                            </div>

                            {/* Mini Stats */}
                            <div className="flex items-center gap-6 mb-8 pb-8" style={{ borderBottom: '1px solid var(--border-color)' }}>
                                {stats.map((stat, i) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                style={{ background: 'rgba(6, 182, 212, 0.1)' }}>
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
                            <div className="flex flex-wrap items-center gap-3">
                                <button className="h-12 flex items-center gap-2 px-6 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
                                    style={{ background: 'var(--gradient-primary)', boxShadow: '0 10px 30px rgba(6, 182, 212, 0.25)' }}>
                                    <Download size={18} />
                                    Download CV
                                </button>
                                <div className="flex items-center gap-2 h-12 px-5 rounded-xl"
                                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                    <MapPin size={16} style={{ color: 'var(--accent-primary)' }} />
                                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Indonesia</span>
                                </div>
                                <div className="flex items-center gap-2 h-12 px-5 rounded-xl"
                                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--accent-secondary)' }}></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--accent-secondary)' }}></span>
                                    </span>
                                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Open to Work</span>
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
