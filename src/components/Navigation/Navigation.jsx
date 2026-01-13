import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Home, FolderKanban, Award, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (path) => {
        setIsOpen(false);
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Simplified navigation - pages only
    const navItems = [
        { path: '/', icon: Home, label: t.nav.welcome },
        { path: '/projects', icon: FolderKanban, label: t.nav.projects },
        { path: '/certificates', icon: Award, label: t.nav.certificates },
        { path: '/contact', icon: Mail, label: t.nav.contact },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "-100%",
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const itemVariants = {
        closed: { x: -20, opacity: 0 },
        open: (i) => ({
            x: 0, 
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        })
    };

    return (
        <>
            {/* Toggle Button - Elegant MENU text */}
            <button
                onClick={toggleMenu}
                className="fixed top-6 left-6 z-[60] px-4 py-2 flex items-center justify-center cursor-pointer transition-all duration-300 hover:opacity-70"
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: isOpen ? '#ffffff' : 'var(--text-primary)',
                }}
            >
                <span 
                    className="text-sm font-medium tracking-widest uppercase transition-all duration-300"
                    style={{ 
                        fontFamily: "'Space Grotesk', sans-serif",
                        letterSpacing: '0.2em'
                    }}
                >
                    {isOpen ? 'CLOSE' : 'MENU'}
                </span>
            </button>

            {/* Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-[50] flex items-center justify-center"
                        style={{
                            background: 'rgba(9, 9, 11, 0.97)',
                            backdropFilter: 'blur(24px)',
                        }}
                    >
                        <nav className="flex flex-col gap-8">
                            {navItems.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.button
                                        key={item.path}
                                        custom={i}
                                        variants={itemVariants}
                                        onClick={() => handleNavClick(item.path)}
                                        className="group flex items-center gap-5 text-4xl md:text-6xl font-bold transition-all hover:translate-x-4"
                                        style={{ 
                                            color: 'var(--text-secondary)', 
                                            fontFamily: "'Space Grotesk', sans-serif" 
                                        }}
                                    >
                                        <span 
                                            className="p-3 rounded-xl transition-all group-hover:bg-white/5"
                                            style={{ border: '1px solid var(--border-color)' }}
                                        >
                                            <Icon size={28} strokeWidth={1.5} />
                                        </span>
                                        <span className="group-hover:text-white transition-colors">
                                            {item.label}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
