import { useState, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Folder } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal/Modal';
import TiltCard from '../components/TiltCard/TiltCard';
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer/Footer';

const ProjectsPage = () => {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState(null);
    const [createActiveImage, setCreateActiveImage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const imageMap = {
        4: ['📊', '📈', '💰'], 
        5: ['🌤️', '🌧️', '❄️'], 
        6: ['💬', '📹', '📎'], 
        7: ['📝', '✍️', '📰']
    };

    const projects = t.projects.data.map(proj => ({
        ...proj,
        images: proj.images || imageMap[proj.id] || ['📁'],
        github: proj.github || 'https://github.com/yourusername/project', 
        demo: proj.demo !== undefined ? proj.demo : 'https://demo.com' 
    }));

    // Pagination Logic
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    // Modal Image State
    useEffect(() => {
        setCreateActiveImage(0);
    }, [selectedProject]);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col"
            style={{ background: 'var(--bg-section-2)' }}
        >
            <div className="flex-1 pt-24 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                     <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                        {t.projects.title}{' '}
                        <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.projects.titleHighlight}</span>
                    </h2>
                    <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                        {t.projects.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <AnimatePresence mode='wait'>
                        {currentProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <TiltCard scale={1.02} maxRotation={5}>
                                    <SpotlightCard 
                                        className="group h-[420px] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col cursor-pointer"
                                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                                        spotlightColor="rgba(148, 163, 184, 0.1)"
                                        spotlightSize={350}
                                    >
                                        <div onClick={() => setSelectedProject(project)} className="flex flex-col h-full">
                                            {/* Image Area */}
                                            <div className="h-[180px] relative overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                                                {project.isRealProject ? (
                                                    <img 
                                                        src={project.images[0]} 
                                                        alt={project.title}
                                                        className={`${project.tags.includes('Android Studio') ? 'h-full w-auto object-contain' : 'w-full h-full object-cover object-top'}`}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                ) : null}
                                                <div 
                                                    className="absolute inset-0 items-center justify-center text-7xl"
                                                    style={{ display: project.isRealProject ? 'none' : 'flex' }}
                                                >
                                                    <Folder size={64} style={{ color: 'var(--text-muted)' }} />
                                                </div>
                                                
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                                                    style={{ background: 'rgba(148, 163, 184, 0.85)' }}>
                                                    <span className="text-white font-bold">{t.projects.viewDetails}</span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex flex-col flex-1">
                                                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm leading-relaxed mb-4 flex-1 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                                                    {project.desc}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-auto">
                                                    {project.tags.slice(0, 3).map((tag, i) => (
                                                        <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full" 
                                                            style={{ background: 'var(--bg-tertiary)', color: 'var(--accent-primary)' }}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    {project.tags.length > 3 && (
                                                        <span className="px-3 py-1.5 text-xs font-medium rounded-full" 
                                                            style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
                                                            +{project.tags.length - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="w-10 h-10 flex items-center justify-center rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all hover:scale-110 ${currentPage === number ? 'font-bold' : ''}`}
                                style={{ 
                                    background: currentPage === number ? 'var(--gradient-primary)' : 'var(--bg-card)', 
                                    border: currentPage === number ? 'none' : '1px solid var(--border-color)', 
                                    color: currentPage === number ? 'white' : 'var(--text-primary)' 
                                }}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="w-10 h-10 flex items-center justify-center rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}

                {/* Project Modal */}
                <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                    {selectedProject && (
                        <div className="flex flex-col md:flex-row">
                            {/* Left - Image Gallery */}
                            <div className="md:w-1/2 p-6 flex flex-col" style={{ background: 'var(--bg-tertiary)' }}>
                                <div 
                                    className="rounded-2xl overflow-hidden mb-4 flex items-center justify-center"
                                    style={{ 
                                        background: 'var(--bg-card)', 
                                        minHeight: '300px',
                                        maxHeight: '450px',
                                    }}>
                                    {selectedProject.isRealProject ? (
                                        <img 
                                            src={selectedProject.images[createActiveImage]} 
                                            alt={selectedProject.title}
                                            className="max-w-full max-h-[450px] object-contain"
                                            style={{ margin: '0 auto' }}
                                        />
                                    ) : (
                                        <div className="aspect-video flex items-center justify-center w-full">
                                            <span className="text-[120px]">{selectedProject.images[createActiveImage]}</span>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="flex items-center gap-2">
                                     <button 
                                        onClick={() => setCreateActiveImage(prev => prev > 0 ? prev - 1 : selectedProject.images.length - 1)}
                                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-110"
                                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                                        <ChevronLeft size={16} />
                                    </button>
                                    
                                    <div className="flex-1 overflow-x-auto scrollbar-hide">
                                        <div className="flex gap-2 justify-start">
                                            {selectedProject.images.map((img, i) => (
                                                <button 
                                                    key={i}
                                                    onClick={() => setCreateActiveImage(i)}
                                                    className={`w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden transition-all flex-shrink-0 ${createActiveImage === i ? 'ring-2 ring-offset-2 scale-105' : 'opacity-60 hover:opacity-100'}`}
                                                    style={{ 
                                                        background: 'var(--bg-card)',
                                                        ringColor: 'var(--accent-primary)',
                                                        ringOffsetColor: 'var(--bg-tertiary)'
                                                    }}>
                                                    {selectedProject.isRealProject ? (
                                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="text-2xl">{img}</span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => setCreateActiveImage(prev => prev < selectedProject.images.length - 1 ? prev + 1 : 0)}
                                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-110"
                                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                                        <ChevronRight size={16} />
                                    </button>
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
                                    {selectedProject.demo && (
                                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"
                                            className="w-full h-12 flex items-center justify-center gap-2 rounded-xl font-bold text-white transition-all hover:scale-105"
                                            style={{ background: 'var(--gradient-primary)' }}>
                                            <ExternalLink size={18} />
                                            {t.projects.liveDemo}
                                        </a>
                                    )}
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
            </div>
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
            <Footer />
        </motion.div>
    );
};

export default ProjectsPage;
