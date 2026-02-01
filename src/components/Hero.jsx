import { motion } from 'framer-motion';
import { Github, Linkedin, Terminal, ChevronDown } from 'lucide-react';
import GlowButton from './GlowButton';
import GlowCard from './GlowCard';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
            {/* Background decorations */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    x: [0, -30, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            />

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium text-sm">
                        <Terminal size={16} />
                        <span>Hello World</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Darpan</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-zinc-400 font-light">
                        Full Stack Developer
                    </h2>

                    <p className="text-lg text-zinc-300 max-w-lg leading-relaxed">
                        Full Stack Developer specializing in React, Node.js, and MongoDB. I build real-time and scalable web applications with clean UI and effecient backend architecture
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <GlowButton href="https://github.com/Darpan013" target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 mr-2" /> GitHub
                        </GlowButton>
                        <GlowButton href="https://www.linkedin.com/in/darpan-rajput/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                        </GlowButton>
                    </div>
                </motion.div>

                {/* Right Content - Abstract visual or code snippet */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="relative hidden md:block"
                >
                    <GlowCard className="skew-y-8 hover:skew-y-0 transition-transform duration-400" alwaysVisible={false}>
                        <div className="p-6">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <code className="text-sm font-mono text-zinc-300">
                                <span className="text-purple-400">const</span> developer = <span className="text-yellow-300">{`{`}</span><br />
                                &nbsp;&nbsp;name: <span className="text-green-400">"Darpan"</span>,<br />
                                &nbsp;&nbsp;role: <span className="text-green-400">"Full Stack Developer"</span>,<br />
                                &nbsp;&nbsp;skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"jS"</span>, <span className="text-green-400">"tS"</span>, <span className="text-green-400">"Node"</span>, <span className="text-green-400">"express"</span>,<span className="text-green-400">"Mongoose"</span>],<br />
                                &nbsp;&nbsp;hardWorker: <span className="text-blue-400">true</span><br />
                                <span className="text-yellow-300">{`}`}</span>;
                            </code>
                        </div>
                    </GlowCard>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 blur-2xl opacity-20 -z-10" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
            >
                <ChevronDown />
            </motion.div>
        </section>
    );
};

export default Hero;
