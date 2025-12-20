import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
            style={{
                background: 'transparent',
                color: 'var(--accent-primary)',
            }}
            aria-label="Switch Language"
        >
            {/* Active language indicator */}
            <span className="text-xs font-black">
                {language === 'en' ? 'EN' : 'ID'}
            </span>
        </button>
    );
};

export default LanguageSwitcher;
