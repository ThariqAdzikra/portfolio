const TechCarousel = () => {
    const technologies = [
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
        { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
        { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
        // Text/Emoji fallback for others
        { name: 'Rest API', icon: '🌐' },
        { name: 'Visual Paradigm', icon: '📊' },
    ];

    const allTech = [...technologies, ...technologies];

    return (
        <section className="py-10 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
            <div className="relative">
                {/* Left Fade */}
                <div 
                    className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, var(--bg-secondary), transparent)' }}
                />
                
                {/* Right Fade */}
                <div 
                    className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }}
                />

                {/* Track */}
                <div 
                    className="flex gap-6 w-max"
                    style={{ animation: 'scroll 60s linear infinite' }}
                >
                    {allTech.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-3 rounded-2xl flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-color)',
                            }}
                        >
                            {tech.icon.startsWith('http') ? (
                                <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                            ) : (
                                <span className="text-xl">{tech.icon}</span>
                            )}
                            <span 
                                className="font-bold text-sm whitespace-nowrap"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default TechCarousel;
