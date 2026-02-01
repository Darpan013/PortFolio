import { motion } from 'framer-motion';
import { BookOpen, Calendar, MapPin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import GlowCard from './GlowCard';

const educationData = [
    {
        title: "Bachelor of Science - BSC, Computer Science",
        institution: "Glocal University", // Placeholder as user didn't specify
        period: "2020 - 2023", // Placeholder dates
        location: "Saharanpur, UP",
        description: "Bachelor's Degree in Computer Science. Focused on algorithms, Web Programming, data structures, and software engineering principles.",
        icon: <BookOpen className="w-6 h-6" />,
        color: "bg-cyan-500"
    },
    {
        title: "Full Stack Development Course",
        institution: "Dice Academy Delhi",
        period: "July 2024 - July 2025",
        location: "Saket, South Delhi",
        description: "Intensive study focusing on advanced Full Stack Development, System Architecture, and Modern Web Technologies.",
        icon: <BookOpen className="w-6 h-6" />,
        color: "bg-indigo-500"
    }
    
];

const Education = () => {
    return (
        <SectionWrapper id="education">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Left - Header */}
                <motion.div
                    className="md:w-1/3"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Education</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        My academic journey and continuous learning path in the world of technology.
                    </p>
                </motion.div>

                {/* Right - Timeline */}
                <div className="md:w-2/3 relative space-y-8 pl-8 md:pl-0">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-4 top-2 bottom-2 w-0.5 bg-zinc-800 hidden md:block" />

                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: 100, opacity: 0 }} // Adjusted initial animation to match previous motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }} // Adjusted transition to match previous motion.div
                            viewport={{ once: false, amount: 0.1 }}
                            className="relative md:ml-12 mb-8" // Added relative and ml-12 for timeline positioning, and mb-8 for spacing
                        > <GlowCard className="group">
                            {/* Timeline Dot - This dot is for the old timeline style, might be removed if not needed with GlowCard */}
                            <div className={`absolute -left-[52px] top-6 w-5 h-5 rounded-full border-4 border-zinc-950 bg-indigo-500 hidden md:block`} /> {/* Hardcoded color for dot as item.color is removed */}

                            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                        {/* Using BookOpen as a generic icon, as specific icons were removed from data */}
                                        <BookOpen size={30} />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold text-zinc-100 mb-1">{edu.title}</h3>
                                    <p className="text-indigo-400 font-medium mb-3">{edu.institution}</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-zinc-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} /> {edu.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={14} /> {edu.location}
                                        </span>
                                    </div>

                                    <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        </GlowCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Education;
