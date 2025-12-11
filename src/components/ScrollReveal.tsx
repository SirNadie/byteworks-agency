import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    delay?: number;
    threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = "",
    id,
    delay = 0,
    threshold = 0.1
}) => {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px", amount: threshold }}
            transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
            className={`scroll-reveal ${className}`}
        >
            {children}
        </motion.div>
    );
};
