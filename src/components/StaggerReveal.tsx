import React from 'react';
import { motion } from 'framer-motion';

interface StaggerRevealProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    staggerDelay?: number;
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
    children,
    className = "",
    id,
}) => {
    // We assume children are the items to be staggered.
    // Framer motion 'variants' propagate to children if they share the same variant names (hidden/show).
    // However, we need to wrap EACH child in a motion component for this to work automatically,
    // OR we just use this component as a wrapper and expect the consumer to pass motion components?
    // A simpler way for migration:
    // This component wraps the children in a motion.div (the container).
    // But direct children need to be motion.divs too to use the variant propagation.

    // To make it easy to use with EXISTING HTML/JSX children (divs), 
    // we can map the children and wrap them.

    const validChildren = React.Children.toArray(children).filter(React.isValidElement);

    return (
        <motion.div
            id={id}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className={className}
        >
            {validChildren.map((child, index) => (
                <motion.div key={index} variants={item}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};
