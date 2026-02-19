"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>[]{}/?*!@#$%^&*()";

interface ScrambleTextProps {
    children: string;
    className?: string;
    shuffleSpeed?: number;
}

export function ScrambleText({ children, className, shuffleSpeed = 30 }: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(children);
    const [isScrambling, setIsScrambling] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                children
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return children[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= children.length) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iteration += 1 / 3;
        }, shuffleSpeed);

        return () => clearInterval(interval);
    };

    useEffect(() => {
        if (isInView) {
            scramble();
        }
    }, [isInView, children]);

    return (
        <span
            ref={ref}
            className={className}
        >
            {displayText}
        </span>
    );
}
