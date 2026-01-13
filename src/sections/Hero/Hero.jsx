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
                    <p className="hero-greeting">Hello, I'm</p>
                    
                    {/* Video Masked Text - THARIQ (MAIN FOCUS) */}
                    <div className="video-mask-container">
                        <div className="video-mask-wrapper">
                            <video 
                                className="mask-video"
                                autoPlay 
                                muted 
                                loop 
                                playsInline
                            >
                                <source src="/pasfoto/masking.mp4" type="video/mp4" />
                            </video>
                            <h1 className="video-masked-text">THARIQ</h1>
                        </div>
                        {/* Monochrome Portrait Overlay */}
                        <img 
                            src="/pasfoto/thariq2.png" 
                            alt="Thariq Portrait" 
                            className="hero-portrait"
                        />
                    </div>

                    <p className="hero-subtitle">Full Stack Developer</p>

                    <div className="hero-cta">
                        <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            View My Work
                        </button>
                        <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Get In Touch
                        </button>
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
