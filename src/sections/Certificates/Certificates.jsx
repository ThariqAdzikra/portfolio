import { useState, useRef, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, ExternalLink, Calendar, Building2 } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Modal from '../../components/Modal/Modal';

const Certificates = () => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [selectedCert, setSelectedCert] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const carouselRef = useRef(null);

    const certificates = [
        { 
            id: 1, 
            title: 'Web Development Fundamentals', 
            issuer: 'Example Academy', 
            year: '2024',
            desc: 'Comprehensive course covering HTML5, CSS3, JavaScript ES6+, responsive design principles, and web accessibility standards. Completed with distinction.',
            images: ['🌐', '💻', '📱'],
            credentialUrl: 'https://example.com/cert/1'
        },
        { 
            id: 2, 
            title: 'React & Modern JavaScript', 
            issuer: 'Tech Institute', 
            year: '2024',
            desc: 'Advanced training in React.js including hooks, context API, Redux state management, testing with Jest, and performance optimization techniques.',
            images: ['⚛️', '🔄', '🧪'],
            credentialUrl: 'https://example.com/cert/2'
        },
        { 
            id: 3, 
            title: 'Backend Development with Node.js', 
            issuer: 'Online Learning', 
            year: '2023',
            desc: 'Full-stack backend development covering Express.js, RESTful API design, authentication, database integration, and deployment strategies.',
            images: ['🖥️', '🔐', '🗄️'],
            credentialUrl: 'https://example.com/cert/3'
        },
        { 
            id: 4, 
            title: 'Database Design & SQL', 
            issuer: 'Tech Academy', 
            year: '2023',
            desc: 'In-depth training on relational database design, SQL queries, normalization, indexing, transactions, and NoSQL databases comparison.',
            images: ['🗃️', '📊', '🔍'],
            credentialUrl: 'https://example.com/cert/4'
        },
        { 
            id: 5, 
            title: 'UI/UX Design Principles', 
            issuer: 'Design School', 
            year: '2023',
            desc: 'Foundation course in user interface and user experience design, including wireframing, prototyping, user research, and design systems.',
            images: ['🎨', '✏️', '📐'],
            credentialUrl: 'https://example.com/cert/5'
        },
        { 
            id: 6, 
            title: 'Cloud Computing Basics', 
            issuer: 'Cloud Provider', 
            year: '2023',
            desc: 'Introduction to cloud services including compute, storage, networking, and deployment on major cloud platforms.',
            images: ['☁️', '🚀', '⚡'],
            credentialUrl: 'https://example.com/cert/6'
        },
        { 
            id: 7, 
            title: 'Git & Version Control', 
            issuer: 'Dev Academy', 
            year: '2022',
            desc: 'Mastery of Git version control, branching strategies, collaboration workflows, CI/CD integration, and best practices.',
            images: ['🔀', '📝', '👥'],
            credentialUrl: 'https://example.com/cert/7'
        },
        { 
            id: 8, 
            title: 'Python for Data Science', 
            issuer: 'Data Institute', 
            year: '2022',
            desc: 'Comprehensive Python training for data analysis including pandas, NumPy, data visualization, and basic machine learning concepts.',
            images: ['🐍', '📈', '🤖'],
            credentialUrl: 'https://example.com/cert/8'
        },
    ];

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
    }, [selectedCert]);

    const scroll = (dir) => carouselRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });

    return (
        <section id="certificates" className="min-h-screen flex items-center py-20" style={{ background: 'var(--bg-section-1)' }}>
            <div className="w-full max-w-7xl mx-auto px-6">
                {/* Header */}
                <ScrollReveal animation="fade-up">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent-primary)' }}>
                                Achievements
                            </span>
                            <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4"
                            style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                            Certificates &{' '}
                            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Credentials</span>
                        </h2>
                        <p className="text-lg max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            Continuous learning journey with verified certifications
                        </p>

                        {/* Navigation */}
                        <div className="flex justify-center gap-3 mt-8">
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
                    {canScrollLeft && <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg-section-1), transparent)' }} />}
                    {canScrollRight && <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg-section-1), transparent)' }} />}

                    <div ref={carouselRef} className="flex gap-5 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', overscrollBehaviorX: 'contain' }}>
                        {certificates.map((cert, index) => (
                            <ScrollReveal key={cert.id} animation="fade-up" delay={Math.min(index + 1, 3)}>
                                <div 
                                    onClick={() => setSelectedCert(cert)}
                                    className="group w-[300px] h-[220px] flex-shrink-0 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer relative overflow-hidden flex flex-col"
                                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                    
                                    {/* Top Line Accent */}
                                    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--gradient-primary)' }} />

                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 flex-shrink-0"
                                        style={{ background: 'var(--gradient-primary)' }}>
                                        <Award size={28} className="text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold leading-tight line-clamp-2 flex-1" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                        {cert.title}
                                    </h3>
                                    
                                    <div className="mt-auto">
                                        <div className="flex items-center gap-2 mb-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                                            <Building2 size={14} style={{ color: 'var(--accent-primary)' }} />
                                            <span className="truncate">{cert.issuer}</span>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                                                <Calendar size={14} />
                                                <span>{cert.year}</span>
                                            </div>
                                            <span className="text-xs font-medium" style={{ color: 'var(--accent-primary)' }}>View Details →</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Counter */}
                <div className="text-center mt-8">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                        <Award size={14} style={{ color: 'var(--accent-primary)' }} />
                        {certificates.length} certificates earned
                    </span>
                </div>

                {/* Certificate Modal */}
                <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
                    {selectedCert && (
                        <div className="flex flex-col md:flex-row">
                            {/* Left - Image Gallery */}
                            <div className="md:w-1/2 p-6" style={{ background: 'var(--bg-tertiary)' }}>
                                {/* Main Preview */}
                                <div className="aspect-square rounded-2xl flex items-center justify-center text-[100px] mb-4"
                                    style={{ background: 'var(--bg-card)' }}>
                                    {selectedCert.images[activeImage]}
                                </div>
                                
                                {/* Thumbnails */}
                                <div className="flex gap-3 justify-center">
                                    {selectedCert.images.map((img, i) => (
                                        <button 
                                            key={i}
                                            onClick={() => setActiveImage(i)}
                                            className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all ${activeImage === i ? 'ring-2 ring-offset-2 scale-105' : 'opacity-60 hover:opacity-100'}`}
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
                            <div className="md:w-1/2 p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Award size={24} style={{ color: 'var(--accent-primary)' }} />
                                    <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--accent-primary)' }}>Certificate</span>
                                </div>
                                
                                <h3 className="text-2xl font-black mb-4" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {selectedCert.title}
                                </h3>
                                
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                                        <Building2 size={18} style={{ color: 'var(--accent-primary)' }} />
                                        <span>{selectedCert.issuer}</span>
                                    </div>
                                    <div className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                                        <Calendar size={18} style={{ color: 'var(--accent-primary)' }} />
                                        <span>{selectedCert.year}</span>
                                    </div>
                                </div>
                                
                                <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                                    {selectedCert.desc}
                                </p>
                                
                                <a href={selectedCert.credentialUrl} target="_blank" rel="noopener noreferrer"
                                    className="w-full h-12 flex items-center justify-center gap-2 rounded-xl font-bold text-white transition-all hover:scale-105"
                                    style={{ background: 'var(--gradient-primary)' }}>
                                    <ExternalLink size={18} />
                                    View Credential
                                </a>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
        </section>
    );
};

export default Certificates;
