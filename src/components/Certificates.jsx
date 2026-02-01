import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import GlowCard from './GlowCard';

const certificates = [
    {
        title: "Web Development",
        issuer: "IBM",
        date: "Jan 2026",
        link: "https://www.credly.com/badges/ebd5380f-85df-4b2c-a5cb-54132e1aafb9", // Placeholder
        skills: ["HTML", "CSS", "JavaScript", "backend Development", "Vs Code", "Devops", "Testing"],
        color: "border-blue-500/20 bg-blue-500/5"
    },
    {
        title: "JavaScript",
        issuer: "Cursa",
        date: "Jan 2026",
        link: "https://cursa.app/en/my-certificate/cert1a10cac03b056af89de0ef2ecf2e16d7", // Placeholder
        skills: ["JavaScript"],
        color: "border-orange-500/20 bg-orange-500/5"
    },
    {
        title: "React Js Course",
        issuer: "Cursa",
        date: "Jan 2026",
        link: "https://cursa.app/en/my-certificate/certcb2a71d773a6401cdd5acc37bb677d13",
        skills: ["React.js"],
        color: "border-cyan-500/20 bg-cyan-500/5"
    }
];

const Certificates = () => {
    return (
        <SectionWrapper id="certificates">
            <div className="mb-12 text-center md:text-left">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Certifications</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        Continuous learning and validation of skills through recognized certifications.
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className="group relative overflow-hidden"
                    >
                        <GlowCard className='h-full'>
                        <div className="p-6 h-full flex flex-col relative z-20">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity z-0 pointer-events-none">
                                <ShieldCheck size={100} />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700 mb-4 group-hover:scale-110 transition-transform">
                                        <Award className="text-indigo-400 w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-300 transition-colors mb-1">
                                        {cert.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm mb-4">{cert.issuer} • {cert.date}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {cert.skills.map(skill => (
                                        <span key={skill} className="text-xs px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                                    >
                                        View Credential <ExternalLink size={14} />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </GlowCard>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certificates;
