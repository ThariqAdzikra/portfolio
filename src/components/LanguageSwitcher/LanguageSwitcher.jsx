import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="flex flex-col items-center gap-2">
            <button
                onClick={toggleLanguage}
                className="relative w-10 h-14 rounded-full flex flex-col items-center justify-between p-1 transition-all duration-300"
                style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
                aria-label="Switch Language"
            >
                {/* Active Indicator */}
                <div 
                    className="absolute w-8 h-6 rounded-full transition-all duration-300 ease-spring"
                    style={{
                        background: 'var(--gradient-primary)',
                        top: language === 'en' ? '4px' : 'calc(100% - 28px)',
                        boxShadow: '0 2px 10px rgba(6, 182, 212, 0.3)'
                    }}
                />

                {/* EN Text */}
                <span className={`z-10 text-[10px] font-black transition-colors duration-300 pt-1 ${language === 'en' ? 'text-white' : 'text-gray-400'}`}>
                    EN
                </span>

                {/* ID Text */}
                <span className={`z-10 text-[10px] font-black transition-colors duration-300 pb-1 ${language === 'id' ? 'text-white' : 'text-gray-400'}`}>
                    ID
                </span>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
