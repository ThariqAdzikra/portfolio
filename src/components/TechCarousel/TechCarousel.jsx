import LogoLoop from '../LogoLoop/LogoLoop';
import { useTheme } from '../../context/ThemeContext';

const TechCarousel = () => {
    const { theme } = useTheme();
    
    const technologies = [
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', alt: 'Laravel', title: 'Laravel' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', alt: 'PHP', title: 'PHP' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java', title: 'Java' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', alt: 'Kotlin', title: 'Kotlin' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript', title: 'JavaScript' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5', title: 'HTML5' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3', title: 'CSS3' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind', title: 'Tailwind CSS' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', alt: 'Bootstrap', title: 'Bootstrap' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React', title: 'React' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', alt: 'Vite', title: 'Vite' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python', title: 'Python' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL', title: 'MySQL' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', alt: 'SQLite', title: 'SQLite' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', alt: 'Oracle', title: 'Oracle' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', alt: 'Linux', title: 'Linux' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', alt: 'Android Studio', title: 'Android Studio' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', alt: 'VS Code', title: 'VS Code' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', alt: 'Postman', title: 'Postman' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma', title: 'Figma' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', alt: 'Canva', title: 'Canva' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg', alt: 'Photoshop', title: 'Photoshop' },
    ];

    // Get the fade color based on theme (matches --bg-secondary)
    const fadeColor = theme === 'dark' ? '#0f0f0f' : '#f5f5f5';

    // Straight container styling (no tilt)
    const carouselContainerStyle = {
        background: 'var(--bg-secondary)',
        overflow: 'hidden'
    };

    // CSS for grayscale/silver effect on logos - colored on hover with pause
    const logoFilterStyle = `
        .tech-carousel-straight img {
            filter: grayscale(100%) brightness(1.2) contrast(0.9);
            opacity: 0.6;
            transition: all 0.3s ease;
        }
        .tech-carousel-straight:hover img {
            filter: grayscale(0%) brightness(1) contrast(1);
            opacity: 1;
        }
    `;

    return (
        <>
            <style>{logoFilterStyle}</style>
            <section className="py-10" style={carouselContainerStyle}>
                <div className="tech-carousel-straight">
                    <LogoLoop
                        logos={technologies}
                        speed={80}
                        direction="left"
                        logoHeight={56}
                        gap={50}
                        pauseOnHover={true}
                        scaleOnHover
                        fadeOut
                        fadeOutColor={fadeColor}
                        ariaLabel="Technologies I work with"
                    />
                </div>
            </section>
        </>
    );
};

export default TechCarousel;
