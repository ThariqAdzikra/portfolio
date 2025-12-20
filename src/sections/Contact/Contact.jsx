import { useState } from 'react';
import { Mail, MapPin, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [state, handleSubmit] = useForm("xqezpdzl");

    const contactInfo = [
        { icon: Mail, label: t.contact.info.email, value: 'adzthariq@gmail.com', link: 'mailto:adzthariq@gmail.com' },
        { icon: MapPin, label: t.contact.info.location, value: 'Indonesia', link: null },
        { icon: Clock, label: t.contact.info.timezone, value: 'GMT+7 (WIB)', link: null },
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
                                {t.contact.label}
                            </span>
                            <div className="h-px w-12" style={{ background: 'var(--accent-primary)' }} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4"
                            style={{ color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
                            {t.contact.title}{' '}
                            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.contact.titleHighlight}</span>
                        </h2>
                        <p className="text-lg max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            {t.contact.subtitle}
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
                                    <span className="font-bold" style={{ color: 'var(--accent-secondary)' }}>{t.contact.available.title}</span>
                                </div>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    {t.contact.available.subtitle}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right - Form */}
                    <ScrollReveal animation="fade-left" delay={1} className="lg:col-span-7">
                        {state.succeeded ? (
                            <div className="p-8 rounded-3xl text-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                                    <CheckCircle size={40} className="text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                                    {t.contact.form.successTitle || 'Message Sent!'}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    {t.contact.form.successMessage || 'Thank you for reaching out. I will get back to you soon!'}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="p-8 rounded-3xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t.contact.form.name}</label>
                                        <input 
                                            id="name"
                                            type="text" 
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-200 focus:ring-2 text-sm"
                                            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', '--tw-ring-color': 'var(--accent-primary)' }} 
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t.contact.form.email}</label>
                                        <input 
                                            id="email"
                                            type="email" 
                                            name="email"
                                            placeholder="youremail@example.com"
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-200 focus:ring-2 text-sm"
                                            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} 
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t.contact.form.subject}</label>
                                    <input 
                                        id="subject"
                                        type="text" 
                                        name="subject"
                                        placeholder={t.contact.form.subjectPlaceholder || 'Write subject here...'}
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-200 focus:ring-2 text-sm"
                                        style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} 
                                    />
                                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t.contact.form.message}</label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        rows="5" 
                                        placeholder={t.contact.form.messagePlaceholder}
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-200 resize-none focus:ring-2 text-sm"
                                        style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }} 
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={state.submitting}
                                    className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    style={{ background: 'var(--gradient-primary)', boxShadow: '0 10px 40px rgba(6, 182, 212, 0.25)' }}>
                                    {state.submitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            {t.contact.form.sending || 'Sending...'}
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            {t.contact.form.send}
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </ScrollReveal>
                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 text-center" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        © 2024 <span style={{ color: 'var(--accent-primary)' }}>Thariq Adzikra</span> • {t.contact.footer.text}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
