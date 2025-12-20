import { Code, Database, Palette, Wrench } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();

    const skillCategories = [
        { title: t.skills.categories.frontend, icon: Palette, skills: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
        { title: t.skills.categories.backend, icon: Code, skills: ['PHP', 'Laravel', 'Java', 'Kotlin', 'Python', 'Node.js', 'Blade/Breeze', 'REST API'] },
        { title: t.skills.categories.database, icon: Database, skills: ['MySQL', 'SQLite', 'Oracle Apex', 'Oracle Cloud', 'Linux (Ubuntu)'] },
        { title: t.skills.categories.tools, icon: Wrench, skills: ['VS Code', 'NetBeans', 'Android Studio', 'Postman', 'Figma', 'Canva', 'Photoshop', 'Signavio'] }
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center py-20" style={{ background: 'var(--bg-section-1)' }}>
            <div className="w-full max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left - Header */}
                    <ScrollReveal animation="fade-right" className="lg:col-span-4 lg:sticky lg:top-24">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent-primary)' }}>
                                    {t.skills.label}
                                </span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                                style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                {t.skills.title}
                                <span className="block" style={{ 
                                    background: 'var(--gradient-primary)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    {t.skills.titleHighlight}
                                </span>
                            </h2>

                            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {t.skills.description}
                            </p>

                            {/* Total Skills */}
                            <div className="mt-8 p-6 rounded-2xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                <div className="text-5xl font-black" style={{ 
                                    background: 'var(--gradient-primary)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    28+
                                </div>
                                <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{t.skills.techMastered}</div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right - Skills Grid */}
                    <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
                        {skillCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <ScrollReveal key={index} animation="fade-up" delay={index + 1}>
                                    <div className="p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                        
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                                                style={{ background: 'var(--gradient-primary)' }}>
                                                <Icon size={24} className="text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                                {category.title}
                                            </h3>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill, i) => (
                                                <span key={i} 
                                                    className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                                                    style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
