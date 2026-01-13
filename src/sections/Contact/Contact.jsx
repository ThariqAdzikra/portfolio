import { useState } from 'react';
import { Mail, MapPin, Send, Clock, CheckCircle, Phone, Linkedin, Github, Instagram, Sparkles } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [state, handleSubmit] = useForm("xqezpdzl");

    const contactInfo = [
        { icon: Mail, label: t.contact.info.email, value: 'adzthariq@gmail.com', link: 'mailto:adzthariq@gmail.com' },
        { icon: MapPin, label: t.contact.info.location, value: 'Pekanbaru, Indonesia', link: null },
        { icon: Clock, label: t.contact.info.timezone, value: 'GMT+7 (WIB)', link: null },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com/thariqadzikra', label: 'GitHub', color: '#94a3b8' },
        { icon: Linkedin, href: 'https://linkedin.com/in/thariqadzikra', label: 'LinkedIn', color: '#94a3b8' },
        { icon: Instagram, href: 'https://instagram.com/thariqadzikra', label: 'Instagram', color: '#94a3b8' },
    ];

    return (
        <section id="contact" className="min-h-screen py-20 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
            {/* Decorative backgrounds */}
            <div 
                className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-30"
                style={{ 
                    background: 'radial-gradient(circle, rgba(148, 163, 184, 0.08) 0%, transparent 70%)',
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div 
                className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
                style={{ 
                    background: 'radial-gradient(circle, rgba(148, 163, 184, 0.06) 0%, transparent 70%)',
                    transform: 'translate(30%, 30%)'
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Header */}
                <ScrollReveal animation="fade-up">
                    <div className="text-center mb-16">
                        <h1 
                            className="text-4xl md:text-6xl font-black mb-6"
                            style={{ 
                                fontFamily: "'Space Grotesk', sans-serif",
                                color: 'var(--text-primary)'
                            }}
                        >
                            {t.contact.title}{' '}
                            <span style={{ 
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                {t.contact.titleHighlight}
                            </span>
                        </h1>
                        <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            {t.contact.subtitle}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Main Content */}
                <div className="grid lg:grid-cols-5 gap-10 items-start">
                    
                    {/* Left Column - Contact Info */}
                    <ScrollReveal animation="fade-right" className="lg:col-span-2">
                        <div className="space-y-6">
                            {/* Status Card */}
                            <div 
                                className="p-6 rounded-3xl"
                                style={{ 
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: '0 20px 60px -20px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#10b981' }}></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: '#10b981' }}></span>
                                    </span>
                                    <span className="font-bold text-lg" style={{ color: '#10b981' }}>
                                        {t.contact.available.title}
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    {t.contact.available.subtitle}
                                </p>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => {
                                    const Icon = item.icon;
                                    const Wrapper = item.link ? 'a' : 'div';
                                    return (
                                        <Wrapper 
                                            key={i} 
                                            href={item.link || undefined}
                                            className={`group flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ${item.link ? 'hover:translate-x-2 cursor-pointer' : ''}`}
                                            style={{ 
                                                background: 'var(--bg-card)',
                                                border: '1px solid var(--border-color)'
                                            }}
                                        >
                                            <div 
                                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                                                style={{ background: 'var(--gradient-primary)' }}
                                            >
                                                <Icon size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <span className="text-xs block mb-1 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                                                    {item.label}
                                                </span>
                                                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                                                    {item.value}
                                                </span>
                                            </div>
                                        </Wrapper>
                                    );
                                })}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
                                    Connect With Me
                                </h3>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, i) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={i}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                                style={{ 
                                                    background: 'var(--bg-card)',
                                                    border: '1px solid var(--border-color)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(148, 163, 184, 0.2)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                }}
                                            >
                                                <Icon size={20} style={{ color: 'var(--text-secondary)' }} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Column - Form */}
                    <ScrollReveal animation="fade-left" delay={1} className="lg:col-span-3">
                        {state.succeeded ? (
                            <div 
                                className="p-10 rounded-3xl text-center"
                                style={{ 
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                <div 
                                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
                                    style={{ background: 'rgba(16, 185, 129, 0.1)' }}
                                >
                                    <CheckCircle size={48} className="text-emerald-500" />
                                </div>
                                <h3 className="text-3xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
                                    {t.contact.form.successTitle || 'Pesan Terkirim!'}
                                </h3>
                                <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                                    {t.contact.form.successMessage || 'Terima kasih telah menghubungi. Saya akan segera membalas pesan Anda!'}
                                </p>
                            </div>
                        ) : (
                            <form 
                                onSubmit={handleSubmit} 
                                className="p-8 md:p-10 rounded-3xl"
                                style={{ 
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                                    {t.contact.form.title || 'Kirim Pesan'}
                                </h3>

                                <div className="grid md:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                            {t.contact.form.name}
                                        </label>
                                        <input 
                                            id="name"
                                            type="text" 
                                            name="name"
                                            placeholder="Nama lengkap Anda"
                                            required
                                            className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-200 focus:ring-2 text-sm"
                                            style={{ 
                                                background: 'var(--bg-tertiary)',
                                                border: '1px solid var(--border-color)',
                                                color: 'var(--text-primary)',
                                                '--tw-ring-color': 'var(--accent-primary)'
                                            }} 
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                            {t.contact.form.email}
                                        </label>
                                        <input 
                                            id="email"
                                            type="email" 
                                            name="email"
                                            placeholder="email@example.com"
                                            required
                                            className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-200 focus:ring-2 text-sm"
                                            style={{ 
                                                background: 'var(--bg-tertiary)',
                                                border: '1px solid var(--border-color)',
                                                color: 'var(--text-primary)'
                                            }} 
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        {t.contact.form.subject}
                                    </label>
                                    <input 
                                        id="subject"
                                        type="text" 
                                        name="subject"
                                        placeholder={t.contact.form.subjectPlaceholder || 'Subjek pesan Anda'}
                                        required
                                        className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-200 focus:ring-2 text-sm"
                                        style={{ 
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--border-color)',
                                            color: 'var(--text-primary)'
                                        }} 
                                    />
                                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        {t.contact.form.message}
                                    </label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        rows="6" 
                                        placeholder={t.contact.form.messagePlaceholder || 'Tulis pesan Anda di sini...'}
                                        required
                                        className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-200 resize-none focus:ring-2 text-sm"
                                        style={{ 
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--border-color)',
                                            color: 'var(--text-primary)'
                                        }} 
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={state.submitting}
                                    className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    style={{ 
                                        background: 'var(--gradient-primary)',
                                        boxShadow: '0 15px 50px rgba(148, 163, 184, 0.2)'
                                    }}
                                >
                                    {state.submitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            {t.contact.form.sending || 'Mengirim...'}
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
            </div>
        </section>
    );
};

export default Contact;
