import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className, stagger = 0.1 }) => {
    return (
        <section id={id} className={`min-h-screen w-full flex items-center justify-center p-6 md:p-12 overflow-hidden ${className || ''}`}>
            <div className="w-full max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
