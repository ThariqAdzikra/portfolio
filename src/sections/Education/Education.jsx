import { useState } from 'react';
import { GraduationCap, School, BookOpen, Calendar, MapPin, Star } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

const Education = () => {
    const [expandedId, setExpandedId] = useState(null);
    const { t } = useLanguage();

    const iconMap = {
        1: GraduationCap,
        2: School,
        3: BookOpen,
        4: BookOpen
    };

    const educationData = t.education.journey.map(edu => ({
        ...edu,
        icon: iconMap[edu.id]
    }));

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="education" className="min-h-screen flex items-center py-20 relative overflow-hidden" style={{ background: 'var(--bg-section-2)' }}>
            {/* Decorative Background */}
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5" 
                style={{ background: 'var(--accent-primary)', filter: 'blur(80px)' }} />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5" 
                style={{ background: 'var(--accent-secondary)', filter: 'blur(100px)' }} />

            <div className="w-full max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <ScrollReveal animation="fade-up">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent-primary)' }}>
                                {t.education.label}
                            </span>
                            <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4"
                            style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                            {t.education.title}{' '}
                            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.education.titleHighlight}</span>
                        </h2>
                        <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            {t.education.subtitle}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                        style={{ background: 'var(--gradient-primary)' }} />

                    {educationData.map((edu, index) => {
                        const Icon = edu.icon;
                        const isLeft = index % 2 === 0;
                        const isExpanded = expandedId === edu.id;

                        return (
                            <ScrollReveal key={edu.id} animation={isLeft ? 'fade-right' : 'fade-left'} delay={index + 1}>
                                <div className={`relative lg:flex lg:items-start ${isLeft ? '' : 'lg:flex-row-reverse'} mb-8 lg:mb-12`}>
                                    
                                    {/* Content Side */}
                                    <div className={`lg:w-5/12 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                                        
                                        {/* Main Card */}
                                        <div 
                                            onClick={() => toggleExpand(edu.id)}
                                            className="group p-5 rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
                                            style={{ 
                                                background: 'var(--bg-card)', 
                                                border: isExpanded ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                                            }}>
                                            
                                            <div className={`flex gap-4 ${isLeft ? 'lg:flex-row-reverse text-right' : 'flex-row text-left'}`}>


                                                {/* Info */}
                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                    <div className={`flex items-center gap-2 mb-1 ${isLeft ? 'lg:justify-end' : ''}`}>
                                                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--accent-primary)' }}>
                                                            {edu.level}
                                                        </span>
                                                        {edu.current && (
                                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wide"
                                                                style={{ background: 'var(--gradient-primary)' }}>
                                                                {t.education.current}
                                                            </span>
                                                        )}
                                                    </div>
                                                    
                                                    <h3 className="text-lg font-bold leading-tight mb-1" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                                        {edu.name}
                                                    </h3>
                                                    
                                                    {edu.major && (
                                                        <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>{edu.major}</p>
                                                    )}

                                                    <div className={`flex items-center gap-1.5 text-xs ${isLeft ? 'lg:justify-end' : ''}`} style={{ color: 'var(--text-muted)' }}>
                                                        <Calendar size={12} />
                                                        <span>{edu.period}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Detail Card */}
                                        <div className={`
                                            overflow-hidden transition-all duration-300 ease-in-out
                                            ${isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
                                        `}>
                                            <div className="p-4 rounded-xl relative" 
                                                style={{ 
                                                    background: 'var(--bg-tertiary)',
                                                    borderLeft: !isLeft ? '2px solid var(--accent-primary)' : 'none',
                                                    borderRight: isLeft ? '2px solid var(--accent-primary)' : 'none',
                                                }}>
                                                
                                                <div className={`flex flex-wrap items-center gap-3 mb-3 ${isLeft ? 'justify-end' : ''}`}>
                                                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium"
                                                        style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)' }}>
                                                        <MapPin size={10} />
                                                        {edu.location}
                                                    </span>
                                                    {edu.gpa && (
                                                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium"
                                                            style={{ background: 'var(--bg-card)', color: 'var(--accent-primary)' }}>
                                                            <Star size={10} />
                                                            {edu.level === 'SMA' || edu.level === 'HIGH SCHOOL' ? `${t.education.average}: ` : `${t.education.gpa}: `}{edu.gpa}
                                                        </span>
                                                    )}
                                                </div>

                                                <p className={`text-sm leading-relaxed mb-3 ${isLeft ? 'text-right' : ''}`} style={{ color: 'var(--text-secondary)' }}>
                                                    {edu.description}
                                                </p>

                                                {edu.highlights.length > 0 && (
                                                    <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : ''}`}>
                                                        {edu.highlights.map((item, i) => (
                                                            <span key={i} className="px-2 py-1 rounded-md text-xs font-medium"
                                                                style={{ background: 'rgba(6, 182, 212, 0.1)', color: 'var(--text-primary)' }}>
                                                                {item}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10"
                                        style={{ 
                                            background: 'var(--bg-card)',
                                            border: '2px solid var(--accent-primary)',
                                            boxShadow: '0 0 0 4px var(--bg-section-2)'
                                        }}>
                                        <div className="w-3 h-3 rounded-full" style={{ background: 'var(--accent-primary)' }} />
                                    </div>

                                    {/* Empty Space */}
                                    <div className="hidden lg:block lg:w-5/12" />
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Summary Stats */}
                <ScrollReveal animation="fade-up" delay={5}>
                    <div className="mt-8 p-6 rounded-2xl text-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                        <div className="flex items-center justify-center gap-8 flex-wrap">
                            <div>
                                <div className="text-3xl font-black" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>15+</div>
                                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{t.education.stats.years}</div>
                            </div>
                            <div className="w-px h-12" style={{ background: 'var(--border-color)' }} />
                            <div>
                                <div className="text-3xl font-black" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>4</div>
                                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{t.education.stats.levels}</div>
                            </div>
                            <div className="w-px h-12" style={{ background: 'var(--border-color)' }} />
                            <div>
                                <div className="text-3xl font-black" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>∞</div>
                                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{t.education.stats.spirit}</div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Education;
