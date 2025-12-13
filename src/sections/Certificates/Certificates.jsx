import { useState, useRef, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, ExternalLink, Calendar, Building2 } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Modal from '../../components/Modal/Modal';
import { useLanguage } from '../../context/LanguageContext';

const Certificates = () => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [selectedCert, setSelectedCert] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const carouselRef = useRef(null);
    const { t } = useLanguage();

    // Construct image paths dynamically
    const certificates = t.certificates.data.map(cert => {
        const images = Array.from({ length: cert.count }, (_, i) => 
            `/sertifikat/${cert.folder}/${cert.folder}-${i + 1}.png`
        );
        
        return {
            ...cert,
            images,
            credentialUrl: '#' 
        };
    });

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

    // Reset active image when modal opens
    useEffect(() => {
        if (selectedCert) {
            setActiveImage(0);
        }
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
                                {t.certificates.label}
                            </span>
                            <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4"
                            style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                            {t.certificates.title}{' '}
                            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.certificates.titleHighlight}</span>
                        </h2>
                        <p className="text-lg max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            {t.certificates.description}
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
                                    className="group w-[300px] h-[340px] flex-shrink-0 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer relative overflow-hidden flex flex-col"
                                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                    
                                    {/* Top Line Accent */}
                                    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--gradient-primary)' }} />

                                    {/* Thumbnail Preview */}
                                    <div className="w-full h-[160px] rounded-xl overflow-hidden mb-4 relative"
                                        style={{ background: 'var(--bg-tertiary)' }}>
                                        <img 
                                            src={cert.images[0]} 
                                            alt={cert.title}
                                            className="w-full h-full object-cover transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold leading-tight line-clamp-2 mb-2 flex-1" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
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
                        {certificates.length} {t.certificates.earned}
                    </span>
                </div>

                {/* Certificate Modal */}
                <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
                    {selectedCert && (
                        <div className="flex flex-col md:flex-row h-[80vh] md:h-auto overflow-hidden">
                            {/* Left - Image Gallery */}
                            <div className="md:w-[60%] p-6 flex flex-col items-center justify-center bg-black/20" 
                                style={{ background: 'var(--bg-tertiary)' }}>
                                
                                {/* Main Image Container */}
                                <div className="w-full relative flex-1 min-h-0 flex items-center justify-center mb-4">
                                    <div className="relative max-w-full max-h-full rounded-lg overflow-hidden shadow-2xl">
                                        <img 
                                            src={selectedCert.images[activeImage]} 
                                            alt={`${selectedCert.title} - View ${activeImage + 1}`}
                                            className="max-w-full max-h-[50vh] md:max-h-[60vh] object-contain"
                                        />
                                    </div>
                                    
                                    {/* Navigation Arrows for Multiple Images */}
                                    {selectedCert.images.length > 1 && (
                                        <>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveImage(prev => prev > 0 ? prev - 1 : selectedCert.images.length - 1);
                                                }}
                                                className="absolute left-2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
                                            >
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveImage(prev => prev < selectedCert.images.length - 1 ? prev + 1 : 0);
                                                }}
                                                className="absolute right-2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
                                            >
                                                <ChevronRight size={24} />
                                            </button>
                                        </>
                                    )}
                                </div>
                                
                                {/* Thumbnails - Only show if > 1 image */}
                                {selectedCert.images.length > 1 && (
                                    <div className="flex gap-3 overflow-x-auto max-w-full pb-2 scrollbar-hide">
                                        {selectedCert.images.map((img, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActiveImage(i)}
                                                className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                                                    activeImage === i 
                                                        ? 'border-[var(--accent-primary)] opacity-100 scale-105' 
                                                        : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                                                }`}
                                            >
                                                <img 
                                                    src={img} 
                                                    alt={`Thumbnail ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            {/* Right - Content */}
                            <div className="md:w-[40%] p-8 overflow-y-auto custom-scrollbar" style={{ background: 'var(--bg-tertiary)' }}>
                                <div className="flex items-center gap-2 mb-4">
                                    <Award size={24} style={{ color: 'var(--accent-primary)' }} />
                                    <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--accent-primary)' }}>{t.certificates.modalTitle}</span>
                                </div>
                                
                                <h3 className="text-2xl font-black mb-4" style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {selectedCert.title}
                                </h3>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                                            <Building2 size={20} style={{ color: 'var(--accent-primary)' }} />
                                        </div>
                                        <div>
                                            <span className="text-xs block opacity-70">Issuer</span>
                                            <span className="font-medium">{selectedCert.issuer}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--bg-tertiary)' }}>
                                            <Calendar size={20} style={{ color: 'var(--accent-primary)' }} />
                                        </div>
                                        <div>
                                            <span className="text-xs block opacity-70">Date</span>
                                            <span className="font-medium">{selectedCert.year}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                                    {selectedCert.desc}
                                </p>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } 
            .custom-scrollbar::-webkit-scrollbar { width: 6px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: var(--bg-tertiary); }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 10px; }
            `}</style>
        </section>
    );
};

export default Certificates;
