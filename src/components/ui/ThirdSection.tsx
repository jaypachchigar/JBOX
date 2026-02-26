"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ThirdSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center overflow-hidden font-sans">
            {/* Dark Mode Grid Background */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)'
                }}
            />

            {/* Glowing Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle, #fd6472 0%, #46d9e1 100%)' }}
            />

            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-6 text-center">
                {/* Parallax Central Logo */}
                <motion.div
                    style={{ scale, opacity }}
                    className="relative w-48 h-48 md:w-64 md:h-64 mb-12 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                >
                    <img
                        src="/assets/logo.png"
                        alt="JBOX"
                        className="w-full h-full object-contain"
                    />
                </motion.div>

                {/* Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A0A0A] mb-6">
                        Pure Intelligence.<br />
                        <span style={{
                            backgroundImage: 'linear-gradient(to right, #fd6472, #46d9e1)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            Infinite Scale.
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        The core engine is built to transcend traditional limits. A singular hub that connects every component of your product ecosystem seamlessly.
                    </p>

                    <button
                        className="group relative px-8 py-4 bg-[#46d7df] text-black font-semibold rounded-full text-lg shadow-[0_10px_40px_-10px_rgba(70,215,223,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(70,215,223,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 mx-auto"
                    >
                        <span>Activate JBOX</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
