import { motion } from 'framer-motion';

const GlowButton = ({ children, onClick, href, className = "", innerClassName = "", ...props }) => {
    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${className}`}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 },
                tap: { scale: 0.95 }
            }}
            {...props}
        >
            <motion.span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#312e81_50%,#E2E8F0_100%)] transition-opacity duration-300"
                variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 },
                    tap: { opacity: 1 }
                }}
            />
            <motion.span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 ${innerClassName || "px-6 py-3"}`}
                style={{ backgroundColor: "#09090b" }}
                variants={{
                    initial: { boxShadow: "none" },
                    hover: {
                        boxShadow: "0 0 30px rgba(0, 212, 170, 0.5), 0 0 15px rgba(0, 212, 170, 0.3)"
                    },
                    tap: { boxShadow: "none" }
                }}
            >
                {children}
            </motion.span>
        </Component>
    );
};

export default GlowButton;
