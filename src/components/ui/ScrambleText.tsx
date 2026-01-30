"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

interface ScrambleTextProps {
    children: string;
    className?: string;
    hover?: boolean;
}

export function ScrambleText({ children, className, hover = false }: ScrambleTextProps) {
    const [text, setText] = useState(children);
    const [isScrambling, setIsScrambling] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iteration = 0;
        const interval = setInterval(() => {
            setText(prev =>
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
        }, 30);
    };

    useEffect(() => {
        if (isInView && !hover) {
            scramble();
        }
    }, [isInView, hover]);

    return (
        <span
            ref={ref}
            className={className}
            onMouseEnter={hover ? scramble : undefined}
        >
            {text}
        </span>
    );
}
