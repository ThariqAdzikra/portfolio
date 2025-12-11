import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Get In Touch</h2>
                    <p className="section-subtitle">Let's create something amazing together</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p className="contact-description">
                            I'm always open to discussing new projects, creative ideas, or opportunities
                            to be part of your visions. Feel free to reach out!
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon">📧</div>
                                <div className="method-details">
                                    <h4>Email</h4>
                                    <a href="mailto:your.email@example.com">your.email@example.com</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">📱</div>
                                <div className="method-details">
                                    <h4>Phone</h4>
                                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">📍</div>
                                <div className="method-details">
                                    <h4>Location</h4>
                                    <p>Your City, Country</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links-large">
                            <h4>Follow Me</h4>
                            <div className="social-buttons">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    <span>GitHub</span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    <span>Twitter</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="contact-footer">
                    <p>© 2024 Your Name. Built with React & Vite</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
