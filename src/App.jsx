import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation/Navigation';
import FloatingControls from './components/FloatingControls/FloatingControls';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';
import RippleEffect from './components/RippleEffect/RippleEffect';
import Particles from './components/Backgrounds/Particles';
import { useEffect } from 'react';

// Wrapper to handle scroll reset on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/certificates" element={<CertificatesPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        <ScrollToTop />
        <RippleEffect />
        
        {/* Minimal Modern Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Subtle Particles */}
          <div className="absolute inset-0 pointer-events-auto">
            <Particles 
              count={40}
              color="#94a3b8"
              minSize={0.5}
              maxSize={1.5}
              speed={0.15}
              connectDistance={80}
              connectOpacity={0.06}
            />
          </div>

          {/* Soft ambient glow - top right */}
          <div 
            className="absolute -top-[30%] -right-[20%] w-[70%] h-[70%] rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(148, 163, 184, 0.04) 0%, transparent 60%)',
              filter: 'blur(80px)',
            }}
          />
          
          {/* Soft ambient glow - bottom left */}
          <div 
            className="absolute -bottom-[20%] -left-[15%] w-[50%] h-[50%] rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(100, 116, 139, 0.03) 0%, transparent 60%)',
              filter: 'blur(100px)',
            }}
          />

          {/* Very subtle noise texture */}
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <Navigation />
        <FloatingControls />

        <main className="relative z-10">
            <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
