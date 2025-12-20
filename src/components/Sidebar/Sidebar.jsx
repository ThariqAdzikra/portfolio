import { useState, useEffect } from 'react';
import { Home, User, GraduationCap, Zap, FolderKanban, Award, Share2, Mail, Sun, Moon, Settings } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('welcome');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { t } = useLanguage();

    useEffect(() => {
        let timeoutId;
        
        const handleScroll = () => {
            if (timeoutId) return;
            
            timeoutId = setTimeout(() => {
                const sections = ['welcome', 'about', 'education', 'skills', 'projects', 'certificates', 'social', 'contact'];
                const scrollPosition = window.scrollY + window.innerHeight / 2;

                for (const sectionId of sections) {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        const { offsetTop, offsetHeight } = element;
                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActiveSection(sectionId);
                            break;
                        }
                    }
                }
                timeoutId = null;
            }, 100); // 100ms debounce
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'welcome', icon: Home, label: t.nav.welcome },
        { id: 'about', icon: User, label: t.nav.about },
        { id: 'education', icon: GraduationCap, label: t.nav.education },
        { id: 'skills', icon: Zap, label: t.nav.skills },
        { id: 'projects', icon: FolderKanban, label: t.nav.projects },
        { id: 'certificates', icon: Award, label: t.nav.certificates },
        { id: 'social', icon: Share2, label: t.nav.social },
        { id: 'contact', icon: Mail, label: t.nav.contact },
    ];

    return (
        <>
            {/* Mobile: Top Left - Collapsible Settings */}
            <div 
                className="md:hidden flex flex-col items-start gap-2 fixed z-[9999]"
                style={{ top: '16px', left: '16px' }}>
                
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-10 h-10 flex items-center justify-center rounded-2xl cursor-pointer transition-all duration-300 shadow-lg backdrop-blur-xl"
                    style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--accent-primary)',
                        transform: isMobileMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                    aria-label="Toggle settings"
                >
                    <Settings size={20} strokeWidth={2.5} />
                </button>

                <div 
                    className={`flex flex-col gap-2 p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl shadow-lg transition-all duration-300 origin-top-left ${
                        isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                    }`}
                >
                    <button 
                        className="w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200 hover:scale-105"
                        style={{
                            background: 'transparent',
                            color: 'var(--accent-primary)',
                        }}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
                    </button>
                    <LanguageSwitcher />
                </div>
            </div>

            {/* Desktop: Left Sidebar */}
            <aside className="hidden md:flex fixed z-50 flex-col items-center gap-3 left-4 lg:left-8 top-1/2 -translate-y-1/2">
                <nav className="flex flex-col gap-2 p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        const isActive = activeSection === item.id;
                        
                        return (
                            <div key={item.id} className="relative group flex-shrink-0">
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className="w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200"
                                    style={isActive ? { 
                                        background: 'var(--gradient-primary)',
                                        color: 'white'
                                    } : { 
                                        color: 'var(--accent-primary)',
                                        background: 'transparent'
                                    }}
                                    aria-label={item.label}
                                >
                                    <IconComponent size={18} strokeWidth={2.5} />
                                </button>
                                
                                {/* Tooltip */}
                                <div className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50"
                                    style={{ 
                                        background: 'var(--bg-card)', 
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-primary)',
                                        fontSize: '0.75rem',
                                        fontWeight: '500'
                                    }}>
                                    {item.label}
                                </div>
                            </div>
                        );
                    })}
                </nav>

                <div className="flex flex-col gap-3 p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl">
                    <button 
                        className="w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200 hover:scale-105"
                        style={{
                            background: 'transparent',
                            color: 'var(--accent-primary)',
                        }}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
                    </button>

                    <LanguageSwitcher />
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
