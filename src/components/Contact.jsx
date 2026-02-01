import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import GlowButton from './GlowButton';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    // Email validation regex
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Name validation
        if (!formState.name.trim()) newErrors.name = "Name is required";

        // Email validation
        if (!formState.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formState.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Message validation
        if (!formState.message.trim()) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

    // EmailJS Configuration - PUT YOUR KEYS HERE
    const SERVICE_ID = 'service_7uwevwm';      // Replace with your Service ID
    const TEMPLATE_ID = 'template_un4lhfc';    // Replace with your Template ID
    const PUBLIC_KEY = 'nRkTLQtbvxy8AmXlM';      // Replace with your Public Key

    const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
    })
    .catch((error) => {
        console.error('FAILED...', error);
        setIsSubmitting(false);
        alert('Failed to send message. Please try again.');
    });
    };

    return (
        <SectionWrapper id="contact" className="mb-20">
            <div className="grid md:grid-cols-2 gap-16">
                {/* Left Side: Text & Quick Chat */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="space-y-8"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm mb-4">
                            <MessageCircle size={16} />
                            <span>Get in touch</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Connect</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                        <h3 className="text-xl font-semibold mb-4 text-zinc-200">Quick Chat</h3>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Mail />
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500">Email me directly</p>
                                <a href="mailto:darpan@example.com" className="text-lg font-medium hover:text-indigo-400 transition-colors">
                                    darpanrajput2003@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Input */}
                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg bg-zinc-900 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500/20'} focus:outline-none focus:ring-4 transition-all`}
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.name}</p>}
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg bg-zinc-900 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500/20'} focus:outline-none focus:ring-4 transition-all`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
                            </div>

                            {/* Message Input */}
                            <div>
                                <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className={`w-full px-4 py-3 rounded-lg bg-zinc-900 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500/20'} focus:outline-none focus:ring-4 transition-all resize-none`}
                                    placeholder="What's on your mind?"
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-start">
                                <GlowButton
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : isSent ? (
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5" />
                                            Message Sent!
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </div>
                                    )}
                                </GlowButton>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-20 text-center text-zinc-600 text-sm">
                <p>Built with React & Tailwind by Darpan</p>
            </footer>
        </SectionWrapper>
    );
};

export default Contact;
