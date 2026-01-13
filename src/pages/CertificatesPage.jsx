import { useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, Calendar, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal/Modal';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer/Footer';

const CertificatesPage = () => {
    const { t } = useLanguage();
    const [selectedCert, setSelectedCert] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

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

    // Pagination Logic
    const totalPages = Math.ceil(certificates.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCertificates = certificates.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    // Reset image when modal opens
    useEffect(() => {
        if (selectedCert) {
            setActiveImage(0);
        }
    }, [selectedCert]);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col"
            style={{ background: 'var(--bg-section-1)' }}
        >
            <div className="flex-1 pt-24 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <AnimatePresence mode='wait'>
                        {currentCertificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div 
                                    onClick={() => setSelectedCert(cert)}
                                    className="group h-[340px] flex-shrink-0 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer relative overflow-hidden flex flex-col"
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
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                                            }}
                                        />
                                        <div className="fallback-icon absolute inset-0 items-center justify-center" style={{ display: 'none' }}>
                                            <Award size={48} style={{ color: 'var(--text-muted)' }} />
                                        </div>
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
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mb-12">
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

                 {/* Counter */}
                 <div className="text-center">
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
            </div>
             <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } 
            .custom-scrollbar::-webkit-scrollbar { width: 6px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: var(--bg-tertiary); }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 10px; }
             `}</style>
            <Footer />
        </motion.div>
    );
};

export default CertificatesPage;
