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
import RippleEffect from './components/RippleEffect/RippleEffect';
import Aurora from './components/Backgrounds/Aurora';
import Particles from './components/Backgrounds/Particles';

function App() {
  return (
    <div className="min-h-screen relative cursor-themed">
      <RippleEffect />
      
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Aurora Effect - Flowing gradients */}
        <Aurora 
          colorStops={['#06b6d4', '#0891b2', '#22d3ee', '#0e7490']}
          speed={0.3}
          blur={100}
          opacity={0.25}
        />
        
        {/* Particles with connections */}
        <div className="absolute inset-0 pointer-events-auto">
          <Particles 
            count={60}
            color="#06b6d4"
            minSize={1}
            maxSize={2.5}
            speed={0.3}
            connectDistance={100}
            connectOpacity={0.12}
          />
        </div>

        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Radial vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, var(--bg-primary) 70%)',
            opacity: 0.5,
          }}
        />

        {/* Corner accent glow */}
        <div 
          className="absolute -top-[30%] -right-[20%] w-[60%] h-[60%] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        <div 
          className="absolute -bottom-[20%] -left-[15%] w-[50%] h-[50%] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 60%)',
            filter: 'blur(80px)',
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
    </div>
  );
}

export default App;
