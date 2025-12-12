import { useState, useEffect } from 'react';
import { Home, User, GraduationCap, Zap, FolderKanban, Award, Share2, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('welcome');
    const { theme, toggleTheme } = useTheme();

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
        { id: 'welcome', icon: Home },
        { id: 'about', icon: User },
        { id: 'education', icon: GraduationCap },
        { id: 'skills', icon: Zap },
        { id: 'projects', icon: FolderKanban },
        { id: 'certificates', icon: Award },
        { id: 'social', icon: Share2 },
        { id: 'contact', icon: Mail },
    ];

    return (
        <aside className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3">
            <nav 
                className="flex flex-col gap-2 p-2 rounded-2xl"
                style={{ 
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                }}
            >
                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.id;
                    
                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200"
                            style={isActive ? { 
                                background: 'var(--gradient-primary)',
                                color: 'white'
                            } : { 
                                color: 'var(--text-muted)',
                                background: 'transparent'
                            }}
                            aria-label={item.id}
                        >
                            <IconComponent size={18} strokeWidth={1.5} />
                        </button>
                    );
                })}
            </nav>

            <button 
                className="w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-200 hover:scale-105"
                style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
            </button>
        </aside>
    );
};

export default Sidebar;
