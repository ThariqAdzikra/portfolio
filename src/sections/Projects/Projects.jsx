import { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Folder } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Modal from '../../components/Modal/Modal';
import TiltCard from '../../components/TiltCard/TiltCard';
import { useLanguage } from '../../context/LanguageContext';

const Projects = () => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const carouselRef = useRef(null);
    const { t } = useLanguage();

    const imageMap = {
        1: ['🛒', '💳', '📦'], 
        2: ['📋', '✅', '👥'], 
        3: ['📊', '📈', '💰'], 
        4: ['🌤️', '🌧️', '❄️'], 
        5: ['💬', '📹', '📎'], 
        6: ['📝', '✍️', '📰']
    };

    const projects = t.projects.data.map(proj => ({
        ...proj,
        images: imageMap[proj.id] || ['📁'],
        // Keep links hardcoded or move to translations if they change by language (unlikely for now)
        github: 'https://github.com/yourusername/project', 
        demo: 'https://demo.com' 
    }));

    const checkScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        carouselRef.current?.addEventListener('scroll', checkScroll);
        return () => carouselRef.current?.removeEventListener('scroll', checkScroll);
    }, []);

    useEffect(() => {
        setActiveImage(0);
    }, [selectedProject]);

    const scroll = (dir) => carouselRef.current?.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });

    return (
        <section id="projects" className="min-h-screen flex items-center py-20" style={{ background: 'var(--bg-section-2)' }}>
            <div className="w-full max-w-7xl mx-auto px-6">
                {/* Header */}
                <ScrollReveal animation="fade-up">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent-primary)' }}>{t.projects.label}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                {t.projects.title}{' '}
                                <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.projects.titleHighlight}</span>
                            </h2>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <span className="text-sm mr-2" style={{ color: 'var(--text-muted)' }}>{projects.length} {t.projects.projectCount}</span>
                            <button onClick={() => scroll('left')} disabled={!canScrollLeft}
                                className="w-12 h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-30 hover:scale-105"
                                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={() => scroll('right')} disabled={!canScrollRight}
                                className="w-12 h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-30 hover:scale-105"
                                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Carousel */}
                <div className="relative">
                    {canScrollLeft && <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg-section-2), transparent)' }} />}
                    {canScrollRight && <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg-section-2), transparent)' }} />}

                    <div ref={carouselRef} className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', overscrollBehaviorX: 'contain' }}>
                        {projects.map((project, index) => (
                            <ScrollReveal key={project.id} animation="fade-up" delay={Math.min(index + 1, 3)}>
                                <TiltCard key={project.id} scale={1.02} maxRotation={5}>
                                    <div 
                                        onClick={() => setSelectedProject(project)}
                                        className="group w-[360px] h-[380px] flex-shrink-0 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col cursor-pointer"
                                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                        
                                        {/* Image Area */}
                                        <div className="h-[180px] relative overflow-hidden flex-shrink-0" style={{ background: 'var(--bg-tertiary)' }}>
                                            <div className="absolute inset-0 flex items-center justify-center text-7xl">
                                                {project.images[0]}
                                            </div>
                                            
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                                                style={{ background: 'rgba(6, 182, 212, 0.9)' }}>
                                                <span className="text-white font-bold">{t.projects.viewDetails}</span>
                                            </div>

                                            {/* Folder Icon */}
                                            <div className="absolute top-4 left-4">
                                                <Folder size={24} style={{ color: 'var(--accent-primary)' }} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                                {project.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
                                                {project.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full" 
                                                        style={{ background: 'var(--bg-tertiary)', color: 'var(--accent-primary)' }}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Project Modal */}
                <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                    {selectedProject && (
                        <div className="flex flex-col md:flex-row">
                            {/* Left - Image Gallery */}
                            <div className="md:w-1/2 p-6" style={{ background: 'var(--bg-tertiary)' }}>
                                {/* Main Preview */}
                                <div className="aspect-square rounded-2xl flex items-center justify-center text-[120px] mb-4"
                                    style={{ background: 'var(--bg-card)' }}>
                                    {selectedProject.images[activeImage]}
                                </div>
                                
                                {/* Thumbnails */}
                                <div className="flex gap-3 justify-center">
                                    {selectedProject.images.map((img, i) => (
                                        <button 
                                            key={i}
                                            onClick={() => setActiveImage(i)}
                                            className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all ${activeImage === i ? 'ring-2 ring-offset-2 scale-105' : 'opacity-60 hover:opacity-100'}`}
                                            style={{ 
                                                background: 'var(--bg-card)',
                                                ringColor: 'var(--accent-primary)',
                                                ringOffsetColor: 'var(--bg-tertiary)'
                                            }}>
                                            {img}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Right - Content */}
                            <div className="md:w-1/2 p-8" style={{ background: 'var(--bg-tertiary)' }}>
                                <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {selectedProject.title}
                                </h3>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full" 
                                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--accent-primary)' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                                    {selectedProject.fullDesc}
                                </p>
                                
                                <div className="space-y-3">
                                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"
                                        className="w-full h-12 flex items-center justify-center gap-2 rounded-xl font-bold text-white transition-all hover:scale-105"
                                        style={{ background: 'var(--gradient-primary)' }}>
                                        <ExternalLink size={18} />
                                        {t.projects.liveDemo}
                                    </a>
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                                        className="w-full h-12 flex items-center justify-center gap-2 rounded-xl font-bold transition-all hover:scale-105"
                                        style={{ background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
                                        <Github size={18} />
                                        {t.projects.viewCode}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
        </section>
    );
};

export default Projects;
