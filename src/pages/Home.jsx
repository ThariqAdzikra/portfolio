import Welcome from '../sections/Welcome/Welcome';
import TechCarousel from '../components/TechCarousel/TechCarousel';
import About from '../sections/About/About';
import Education from '../sections/Education/Education';
import Skills from '../sections/Skills/Skills';
import SocialMedia from '../sections/SocialMedia/SocialMedia';
import CallToAction from '../sections/CallToAction/CallToAction';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div className="pt-20 md:pt-0"> {/* Add padding for mobile toggle */}
            <Welcome />
            <TechCarousel />
            <About />
            <Education />
            <Skills />
            <SocialMedia />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default Home;
