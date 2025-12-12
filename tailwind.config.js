/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                // Dark theme colors
                dark: {
                    primary: '#0a0f14',
                    secondary: '#0d1419',
                    tertiary: '#141d24',
                    card: 'rgba(13, 20, 25, 0.85)',
                    'card-solid': '#0d1419',
                },
                // Light theme colors  
                light: {
                    primary: '#fefdfb',
                    secondary: '#faf8f5',
                    tertiary: '#f3efe9',
                    card: 'rgba(255, 255, 255, 0.95)',
                    'card-solid': '#ffffff',
                },
                // Accent colors for dark mode
                accent: {
                    cyan: '#06b6d4',
                    teal: '#14b8a6',
                    'cyan-light': '#22d3ee',
                    'teal-light': '#2dd4bf',
                    emerald: '#10b981',
                    sky: '#38bdf8',
                },
                // Accent colors for light mode
                warm: {
                    orange: '#f97316',
                    'orange-dark': '#ea580c',
                    'orange-light': '#fb923c',
                    amber: '#f59e0b',
                    lime: '#84cc16',
                    gold: '#fbbf24',
                },
            },
            fontFamily: {
                heading: ['Space Grotesk', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'float': 'float 12s ease-in-out infinite',
                'fade-in': 'fadeIn 1s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.8s ease-out',
                'slide-left': 'slideInLeft 0.6s ease-out',
                'blink': 'blink 1s step-end infinite',
                'scroll': 'scroll 30s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeIn: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    from: { opacity: '0', transform: 'scale(0.9)' },
                    to: { opacity: '1', transform: 'scale(1)' },
                },
                slideInLeft: {
                    from: { opacity: '0', transform: 'translateX(-30px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                blink: {
                    '0%, 50%': { opacity: '1' },
                    '51%, 100%': { opacity: '0' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
