import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlowCard from './GlowCard';

const skills = [
    {
        category: "Frontend",
        rating: 70,
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Responsive Design", "Rest API Integration", "Form Handling", "Authentication", "Authorization UI", "State Management"],
        color: "from-pink-500 to-rose-500"
    },
    {
        category: "Backend",
        rating: 80,
        items: ["Node.js", "Express", "API Design", "Rest API", "Authentication(JWT)", "WebSockets", "Mongoose", "Database Design", "MVC Architecture", "Middleware"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        category: "Database",
        rating: 75,
        items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "CRUD Operations"],
        color: "from-emerald-500 to-green-500"
    }
];

const About = () => {
    return (
        <SectionWrapper id="about">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Left - Header */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Me</span>
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        I'm a Full Stack Developer who enjoys building complete web applications from frontend to backend. I mainly work with React, Node.js, and MongoDB, and recently built a real-time application using WebRTC. I like understanding how things work under the hood, whether it's API logic, database structure, or deployment. I'm focused on improving my system design skills and writing clean, maintainable code
                    </p>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                        <h3 className="text-xl font-semibold mb-2 text-indigo-300">My Mission</h3>
                        <p className="text-zinc-400">
                            I aim to build applications that are simple to use, reliable, and solve practical problems. I focus on writing clean code and continuously improving my development process.
                        </p>
                    </div>
                </motion.div>

                {/* Right - Skills */}
                <div className="space-y-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="bg-zinc-900/50" // Base bg handled by GlowCard, just adding transparency if needed or removing

                        >
                            <GlowCard>
                            <div className="p-6">
                                <div className="flex justify-between items-end mb-2">
                                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                                    <span className="text-zinc-500 font-mono">{skill.rating}%</span>
                                </div>

                                {/* Rating Bar */}
                                <div className="h-2 w-full bg-zinc-800 rounded-full mb-4 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.rating}%` }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                    />
                                </div>

                                {/* Skills Chips */}
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map(item => (
                                        <span key={item} className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                                            {item}
                                        </span>
                                    ))}
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

export default About;
