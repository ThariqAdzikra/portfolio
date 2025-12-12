import { Mail, MapPin, Send, Clock } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';

const Contact = () => {
    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'your.email@example.com', link: 'mailto:your.email@example.com' },
        { icon: MapPin, label: 'Location', value: 'Indonesia', link: null },
        { icon: Clock, label: 'Timezone', value: 'GMT+7 (WIB)', link: null },
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center py-20" style={{ background: 'var(--bg-section-1)' }}>
            <div className="w-full max-w-6xl mx-auto px-6">
                {/* Header */}
                <ScrollReveal animation="fade-up">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent-primary)' }}>
                                Get In Touch
                            </span>
                            <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4"
                            style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                            Let's Work{' '}
                            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Together</span>
                        </h2>
                        <p className="text-lg max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            Have a project in mind? I'd love to hear from you!
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left - Info Cards */}
                    <ScrollReveal animation="fade-right" className="lg:col-span-5">
                        <div className="space-y-4">
                            {contactInfo.map((item, i) => {
                                const Icon = item.icon;
                                const Wrapper = item.link ? 'a' : 'div';
                                return (
                                    <Wrapper key={i} href={item.link || undefined}
                                        className={`group h-[80px] flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ${item.link ? 'hover:-translate-x-1 cursor-pointer' : ''}`}
                                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: 'var(--gradient-primary)' }}>
                                            <Icon size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <span className="text-xs block mb-1" style={{ color: 'var(--text-muted)' }}>{item.label}</span>
                                            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{item.value}</span>
                                        </div>
                                    </Wrapper>
                                );
                            })}

                            {/* Availability Card */}
                            <div className="p-5 rounded-2xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--accent-secondary)' }}></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: 'var(--accent-secondary)' }}></span>
                                    </span>
                                    <span className="font-bold" style={{ color: 'var(--accent-secondary)' }}>Currently Available</span>
                                </div>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    I'm open for freelance projects and full-time opportunities.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right - Form */}
                    <ScrollReveal animation="fade-left" delay={1} className="lg:col-span-7">
                        <form className="p-8 rounded-3xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Name</label>
                                    <input type="text" placeholder="John Doe" 
                                        className="w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-200 focus:ring-2 text-sm"
                                        style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', '--tw-ring-color': 'var(--accent-primary)' }} />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Email</label>
                                    <input type="email" placeholder="john@example.com" 
                                        className="w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-200 focus:ring-2 text-sm"
                                        style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Subject</label>
                                <input type="text" placeholder="Project inquiry" 
                                    className="w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-200 focus:ring-2 text-sm"
                                    style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Message</label>
                                <textarea rows="5" placeholder="Tell me about your project..." 
                                    className="w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-200 resize-none focus:ring-2 text-sm"
                                    style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} />
                            </div>

                            <button type="submit" 
                                className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                                style={{ background: 'var(--gradient-primary)', boxShadow: '0 10px 40px rgba(6, 182, 212, 0.25)' }}>
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </ScrollReveal>
                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 text-center" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        © 2024 <span style={{ color: 'var(--accent-primary)' }}>Thariq Adzikra</span> • Built with ❤️ using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
