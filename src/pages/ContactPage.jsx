import Contact from '../sections/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-4 min-h-screen"
        >
            <Contact />
            <Footer />
        </motion.div>
    );
};

export default ContactPage;
