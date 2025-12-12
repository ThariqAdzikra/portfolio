import Sidebar from './components/Sidebar/Sidebar';
import TechCarousel from './components/TechCarousel/TechCarousel';
import Welcome from './sections/Welcome/Welcome';
import About from './sections/About/About';
import Education from './sections/Education/Education';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Certificates from './sections/Certificates/Certificates';
import SocialMedia from './sections/SocialMedia/SocialMedia';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large Floating Orbs */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 50%)',
            opacity: 0.08,
            top: '-10%',
            left: '-10%',
            animation: 'orb-float-1 60s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 50%)',
            opacity: 0.06,
            bottom: '10%',
            right: '-5%',
            animation: 'orb-float-2 50s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 50%)',
            opacity: 0.05,
            top: '40%',
            left: '30%',
            animation: 'orb-float-3 70s ease-in-out infinite'
          }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${3 + (i % 4) * 2}px`,
              height: `${3 + (i % 4) * 2}px`,
              background: 'var(--accent-primary)',
              opacity: 0.2 + (i % 3) * 0.1,
              left: `${5 + i * 8}%`,
              top: `${10 + (i * 17) % 80}%`,
              animation: `particle-move ${20 + i * 3}s ease-in-out infinite ${i}s`
            }}
          />
        ))}

        {/* Subtle Grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--accent-primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--accent-primary) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            opacity: 0.02
          }}
        />

        {/* Moving Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, transparent 40%, var(--accent-primary) 50%, transparent 60%)',
            backgroundSize: '400% 400%',
            opacity: 0.02,
            animation: 'gradient-shift 15s ease infinite'
          }}
        />
      </div>

      <Sidebar />

      <main className="relative z-10">
        <Welcome />
        <TechCarousel />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <SocialMedia />
        <Contact />
      </main>

      <style>{`
        @keyframes orb-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, 50px) scale(1.1); }
          50% { transform: translate(50px, 100px) scale(0.95); }
          75% { transform: translate(-50px, 50px) scale(1.05); }
        }
        @keyframes orb-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-80px, -60px) scale(1.1); }
          66% { transform: translate(40px, -40px) scale(0.9); }
        }
        @keyframes orb-float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-100px, -80px); }
        }
        @keyframes particle-move {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          25% { transform: translate(20px, -40px); opacity: 0.4; }
          50% { transform: translate(0, -80px); opacity: 0.2; }
          75% { transform: translate(-20px, -40px); opacity: 0.35; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

export default App;
