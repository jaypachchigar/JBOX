"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export function TextReveal({
    children,
    className,
    delay = 0,
    duration = 0.8
}: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const variants: Variants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, // Deep blur for that elite feel
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1.0] // Cinematic ease
            }
        },
    };

    return (
        <div ref={ref} className={cn("overflow-hidden", className)}>
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
            >
                {children}
            </motion.div>
        </div>
    );
}
