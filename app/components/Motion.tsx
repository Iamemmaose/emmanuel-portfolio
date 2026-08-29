"use client"

import { easeOut, motion } from "motion/react"

interface MotionProp {
    children: React.ReactNode
}

const FadeInMotion = ({ children }: MotionProp) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOut }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInMotion;

export const StaggerContainer = ({ children }: MotionProp) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
};



export const StaggerItem = ({ children }: MotionProp) => {
    return (
         <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    y: 30
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            }}
            transition={{
                duration: 0.5, 
                ease: easeOut
            }}
        >
            {children}
        </motion.div>
    );
};