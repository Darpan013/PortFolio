import { motion } from 'framer-motion';

const GlowCard = ({ children, className = "", alwaysVisible = false, ...props }) => {
    return (
        <motion.div
            className={`relative  rounded-xl p-[1px] ${className}`}
            whileHover="hover"
            initial="initial"
            animate={alwaysVisible ? "hover" : undefined} // Force hover state if alwaysVisible is true
            {...props}
        >
            <motion.div
                className="absolute  bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#312e81_50%,#E2E8F0_100%)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5, ease: "linear" }}
                variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                }}
            />
            <motion.div
                className="relative h-full w-full bg-zinc-900 rounded-xl"
                variants={{
                    initial: { boxShadow: "none" },
                    hover: {
                        boxShadow: "0 0 10px rgba(99, 102, 241, 1), 0 0 20px rgba(99, 102, 241, 0.1)"
                    }
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default GlowCard;
