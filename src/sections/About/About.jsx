import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <h2>About Me</h2>
                    <p className="section-subtitle">Get to know me better</p>
                </div>

                <div className="about-content">
                    <div className="about-card">
                        <div className="card-icon">💡</div>
                        <h3>Who I Am</h3>
                        <p>
                            I'm a passionate developer who loves turning ideas into reality through code.
                            With a keen eye for design and a solid foundation in modern web technologies,
                            I create digital experiences that users love.
                        </p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">🎯</div>
                        <h3>What I Do</h3>
                        <p>
                            I specialize in building responsive web applications using React, modern JavaScript,
                            and cutting-edge CSS techniques. From concept to deployment, I handle the full
                            development lifecycle with precision and care.
                        </p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">🚀</div>
                        <h3>My Approach</h3>
                        <p>
                            I believe in clean code, beautiful design, and seamless user experiences.
                            Every project is an opportunity to learn, grow, and push the boundaries of
                            what's possible on the web.
                        </p>
                    </div>
                </div>

                <div className="about-highlights">
                    <div className="highlight-item">
                        <div className="highlight-icon">🎓</div>
                        <div className="highlight-content">
                            <h4>Education</h4>
                            <p>Computer Science Degree</p>
                            <span className="highlight-year">2020</span>
                        </div>
                    </div>

                    <div className="highlight-item">
                        <div className="highlight-icon">💼</div>
                        <div className="highlight-content">
                            <h4>Experience</h4>
                            <p>Full Stack Developer</p>
                            <span className="highlight-year">2020 - Present</span>
                        </div>
                    </div>

                    <div className="highlight-item">
                        <div className="highlight-icon">🏆</div>
                        <div className="highlight-content">
                            <h4>Achievement</h4>
                            <p>Award Winning Projects</p>
                            <span className="highlight-year">2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
