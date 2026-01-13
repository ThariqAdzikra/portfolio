import { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Attempt auto-play on mount
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.5; // Set reasonable default volume
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch(error => {
                        console.log("Auto-play prevented by browser policy:", error);
                        setIsPlaying(false);
                    });
            }
        }
    }, []);

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(e => console.error("Play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <audio ref={audioRef} src="/sound/soundtrack.mp3" loop />
            
            <button
                onClick={toggleMusic}
                className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg backdrop-blur-xl border transition-all duration-300 hover:scale-110 ${isPlaying ? 'animate-spin-slow' : ''}`}
                style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                    color: isPlaying ? 'var(--accent-primary)' : 'var(--text-muted)'
                }}
                title={isPlaying ? "Mute Music" : "Play Music"}
            >
                {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
            </button>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </>
    );
};

export default MusicPlayer;
