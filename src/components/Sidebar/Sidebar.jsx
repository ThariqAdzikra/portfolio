import { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
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
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'IN' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'TW' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Logo/Brand */}
        <div className="sidebar-brand">
          <h2 className="brand-name">Portfolio</h2>
          <div className="brand-line"></div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                  aria-label={`Navigate to ${item.label}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  {activeSection === item.id && <span className="active-indicator"></span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="sidebar-social">
          <div className="social-divider"></div>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
