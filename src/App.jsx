import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
