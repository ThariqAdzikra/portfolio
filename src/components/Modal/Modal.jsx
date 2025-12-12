import { X } from 'lucide-react';
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            {/* Backdrop */}
            <div className="absolute inset-0 backdrop-blur-sm" style={{ background: 'rgba(0, 0, 0, 0.8)' }} />
            
            {/* Modal Content */}
            <div 
                className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl"
                style={{ 
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
                >
                    <X size={20} />
                </button>
                
                {children}
            </div>
        </div>
    );
};

export default Modal;
