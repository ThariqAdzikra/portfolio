import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="grid-pattern"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hi, I'm</p>
                    <h1 className="hero-name">
                        <span className="gradient-text">Your Name</span>
                    </h1>
                    <h2 className="hero-title">Full Stack Developer</h2>
                    <p className="hero-description">
                        I craft beautiful, modern web experiences that merge creativity with functionality.
                        Specialized in React, Node.js, and creating seamless user experiences.
                    </p>

                    <div className="hero-cta">
                        <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            View My Work
                        </button>
                        <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Get In Touch
                        </button>
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <h3 className="stat-number gradient-text">3+</h3>
                        <p className="stat-label">Years Experience</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number gradient-text">20+</h3>
                        <p className="stat-label">Projects Completed</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number gradient-text">15+</h3>
                        <p className="stat-label">Happy Clients</p>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <p className="scroll-text">Scroll to explore</p>
            </div>
        </section>
    );
};

export default Hero;
