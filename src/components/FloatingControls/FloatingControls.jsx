import { useState } from 'react';
import { Sun, Moon, Settings, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

const FloatingControls = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
            {/* Expandable Controls */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Music Player */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 20 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            <MusicPlayer />
                        </motion.div>

                        {/* Theme Toggle */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 20 }}
                            transition={{ duration: 0.2, delay: 0.05 }}
                            onClick={toggleTheme}
                            className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg backdrop-blur-xl border transition-all duration-300 hover:scale-110"
                            style={{
                                background: 'var(--bg-card)',
                                borderColor: 'var(--border-color)',
                                color: theme === 'dark' ? '#fbbf24' : '#64748b'
                            }}
                            title="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>

                        {/* Language Switcher Container */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg backdrop-blur-xl border overflow-hidden hover:scale-110 transition-transform"
                            style={{
                                background: 'var(--bg-card)',
                                borderColor: 'var(--border-color)',
                            }}
                        >
                            <LanguageSwitcher />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Gear/Settings Button */}
            <button
                onClick={toggleOpen}
                className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg backdrop-blur-xl border transition-all duration-300 hover:scale-110"
                style={{
                    background: isOpen ? 'var(--gradient-primary)' : 'var(--bg-card)',
                    borderColor: isOpen ? 'transparent' : 'var(--border-color)',
                    color: isOpen ? 'white' : 'var(--text-secondary)'
                }}
                title="Settings"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? <X size={20} /> : <Settings size={20} />}
                </motion.div>
            </button>
        </div>
    );
};

export default FloatingControls;
