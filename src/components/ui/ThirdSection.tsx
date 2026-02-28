"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { LeadGenModal } from "./LeadGenModal";

export function ThirdSection() {
    const containerRef = useRef<HTMLElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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

            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-6 text-center">
                {/* Parallax Central Logo & Aura */}
                <div className="relative flex justify-center items-center cursor-pointer" onClick={() => setIsModalOpen(true)}>
                    {/* Glowing Aura (Centered exactly behind the logo) */}
                    <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full blur-[80px] opacity-30 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at center, #46d7df 0%, transparent 70%)' }}
                    />
                    {/* Parallax Central Logo */}
                    <motion.div
                        style={{ scale, opacity }}
                        className="relative w-48 h-48 md:w-64 md:h-64 mb-12 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                    >
                        <motion.div
                            animate={{ scale: [1, 0.95, 1] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-full h-full heartbeat-logo-container"
                        >
                            <img
                                src="/assets/logo.png"
                                alt="JBOX logo"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A0A0A] mb-6">
                        The genius engine for fast visionaries.
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        Your no-code tool has the <span style={{ color: '#fc5f70' }}>IQ of a toaster.</span> Stop rage-prompting; start shipping.
                    </p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group relative px-8 py-4 bg-[#46d7df] text-black font-semibold rounded-full text-lg shadow-[0_10px_40px_-10px_rgba(70,215,223,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(70,215,223,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 mx-auto"
                    >
                        <span>Try it out</span>
                    </button>
                </motion.div>
            </div>

            <LeadGenModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
