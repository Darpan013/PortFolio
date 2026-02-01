import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Code } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import GlowCard from './GlowCard';
import vvev from '../assets/vvev.png';

const projects = [
    {
        title: "SupChat - Real Time Communication Web App",
        description: "Sup Chat is a real-time chat application built to understand full-stack communication and backend logic. I implemented user authentication, real-time messaging, and secure data handling using modern web technologies. The project focuses on scalable backend architecture and real-time communication",
        tech: ["React.js", "JavaScript", "Node.js", "Express", "Tailwind CSS", "Mongoose", "MongoDB", "JWT", "Rest API"],
        link: "https://supchat-messenger-app.netlify.app/",
        github: "https://github.com/Darpan013/webRTC-Application",
        image: vvev
    },
]; 

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div className="flex flex-col gap-16">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Projects</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        A selection of projects that demonstrate my technical expertise and problem-solving abilities.
                    </p>
                </motion.div>

                <div className="grid gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="group relative grid md:grid-cols-12 gap-8 items-start"
                        >
                            {/* Image / Preview Area */}
                            <div className="md:col-span-7">
                                <GlowCard className="rounded-2xl overflow-hidden relative bg-zinc-900/50">
                                    <div className="relative w-full p-4">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-auto rounded-lg"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-indigo-500/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-500" />
                                    </div>
                                </GlowCard>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-5 flex flex-col justify-center text-left md:text-right z-10">
                                <p className="text-indigo-400 font-medium mb-2">Featured Project</p>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-100 group-hover:text-indigo-300 transition-colors">
                                    {project.title}
                                </h3>

                                <GlowCard className="bg-zinc-800/80 backdrop-blur-md rounded-xl mb-6">
                                    <div className="p-4 md:p-6 text-sm md:text-base text-zinc-300 text-left md:text-right">
                                        {project.description}
                                    </div>
                                </GlowCard>

                                <div className="flex flex-wrap gap-2 md:gap-3 justify-start md:justify-end mb-6 md:mb-8 text-xs md:text-sm font-mono text-zinc-400">
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </div>

                                <div className="flex gap-4 justify-start md:justify-end">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        whileHover={{ scale: 1.1, color: '#818cf8' }}
                                        className="text-zinc-400 transition-colors"
                                    >
                                        <Github className="w-6 h-6" />
                                    </motion.a>
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        whileHover={{ scale: 1.1, color: '#22d3ee' }}
                                        className="text-zinc-400 transition-colors"
                                    >
                                        <ExternalLink className="w-6 h-6" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;