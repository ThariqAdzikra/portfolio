import { useState, useEffect } from 'react';
import { Home, User, GraduationCap, Zap, FolderKanban, Award, Share2, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('welcome');
    const { theme, toggleTheme } = useTheme();
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
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
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
        <aside className="fixed z-50 flex items-center gap-3
            bottom-6 left-1/2 -translate-x-1/2 max-w-[90vw] overflow-x-auto
            p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-xl shadow-2xl
            md:flex-col md:bottom-auto md:left-4 md:lg:left-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 
            md:max-w-none md:overflow-visible md:p-0 md:bg-transparent md:border-none md:backdrop-blur-none md:shadow-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            <nav className="flex flex-row md:flex-col gap-2
                md:p-2 md:rounded-2xl md:bg-[var(--bg-card)] md:border md:border-[var(--border-color)] md:backdrop-blur-xl"
                style={{ scrollbarWidth: 'none' }}
            >
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
                            
                            {/* Tooltip - Hidden on mobile, visible on desktop hover */}
                            <div className="hidden md:block absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50"
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

            {/* Separator for mobile - optional or just gap */}
            <div className="md:hidden w-px h-8 bg-[var(--border-color)] flex-shrink-0 mx-1" />

            <div className="flex flex-row md:flex-col gap-3
                md:p-2 md:rounded-2xl md:bg-[var(--bg-card)] md:border md:border-[var(--border-color)] md:backdrop-blur-xl"
            >
                <button 
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200 hover:scale-105"
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
    );
};

export default Sidebar;
