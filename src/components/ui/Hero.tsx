"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { LeadGenModal } from "./LeadGenModal";
import { Sparkles, Globe, Cpu, Database, Code2 } from "lucide-react";

export function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (

        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 bg-[#FAFAFA]">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Orbiting System Container */}
            <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center -mt-10">

                {/* Visual Graphic Area */}
                <div className="relative w-full max-w-xl aspect-square flex items-center justify-center mx-auto mt-8 md:mt-12 mb-16">

                    {/* Glowing Static Halo */}
                    <div className="absolute inset-0 max-w-[500px] max-h-[500px] m-auto rounded-full bg-[radial-gradient(circle_at_center,_#46d7df_0%,_transparent_70%)] opacity-20 pointer-events-none" />
                    <div className="absolute inset-0 max-w-[300px] max-h-[300px] m-auto rounded-full bg-[radial-gradient(circle_at_center,_#46d7df_0%,_transparent_60%)] opacity-30 pointer-events-none" />

                    {/* Orbit Ring 1 (Outer - Dashed) */}
                    <div className="absolute inset-0 border border-dashed border-gray-200/50 rounded-full" />

                    {/* Orbit Ring 2 (Middle - Dotted) */}
                    <div className="absolute inset-6 md:inset-10 border border-dotted border-gray-300/60 rounded-full" />

                    {/* Orbit Ring 3 (Inner - Solid) */}
                    <div className="absolute inset-12 md:inset-20 border border-solid border-gray-200/70 rounded-full" />

                    {/* Orbiting Node 1 - Diamond (Outer Ring) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 pointer-events-none"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)]" style={{ transform: "rotate(-360deg)" }}>
                            <motion.div
                                animate={{ rotate: -360, scale: [1, 0.85, 1] }}
                                transition={{
                                    rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="orbiting-node-diamond w-12 h-12 bg-white rounded-xl shadow-[inset_0_-2px_6px_rgba(0,0,0,0.05),_0_2px_8px_rgba(0,0,0,0.04)] border border-gray-50 flex items-center justify-center -rotate-12"
                            >
                                {/* Cyan 3D Diamond */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 10L12 22L22 10L12 2Z" fill="url(#cyan-grad-light)" />
                                    <path d="M12 2L2 10L12 10Z" fill="url(#cyan-grad-light)" />
                                    <path d="M12 2L22 10L12 10Z" fill="url(#cyan-grad-mid)" />
                                    <path d="M2 10L12 22L12 10Z" fill="url(#cyan-grad-mid)" />
                                    <path d="M22 10L12 22L12 10Z" fill="url(#cyan-grad-dark)" />
                                    <defs>
                                        <linearGradient id="cyan-grad-light" x1="12" y1="2" x2="12" y2="10" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#a5f3fc" />
                                            <stop offset="1" stopColor="#67e8f9" />
                                        </linearGradient>
                                        <linearGradient id="cyan-grad-mid" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#22d3ee" />
                                            <stop offset="1" stopColor="#06b6d4" />
                                        </linearGradient>
                                        <linearGradient id="cyan-grad-dark" x1="12" y1="10" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0891b2" />
                                            <stop offset="1" stopColor="#164e63" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Orbiting Node 2 - Pink Sphere (Middle Ring) */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-6 md:inset-10 pointer-events-none"
                    >
                        <div className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2 flex items-center justify-center pointer-events-auto filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)]" style={{ transform: "rotate(360deg)" }}>
                            <motion.div
                                animate={{ rotate: 360, scale: [1, 0.85, 1] }}
                                transition={{
                                    rotate: { duration: 50, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                                }}
                                className="orbiting-node-sphere w-10 h-10 bg-white rounded-lg shadow-[inset_0_-2px_6px_rgba(0,0,0,0.05),_0_2px_8px_rgba(0,0,0,0.04)] border border-gray-50 flex items-center justify-center rotate-12"
                            >
                                {/* Pink Sphere */}
                                <div className="w-5 h-5 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #fbcfe8, #f43f5e)" }} />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Orbiting Node 3 - Green Cylinder (Inner Ring) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-12 md:inset-20 pointer-events-none"
                    >
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)]" style={{ transform: "rotate(-360deg)" }}>
                            <motion.div
                                animate={{ rotate: -360, scale: [1, 0.85, 1] }}
                                transition={{
                                    rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                                }}
                                className="orbiting-node-cylinder w-9 h-9 bg-white rounded-lg shadow-[inset_0_-2px_6px_rgba(0,0,0,0.05),_0_2px_8px_rgba(0,0,0,0.04)] border border-gray-50 flex items-center justify-center -rotate-6"
                            >
                                {/* Green Cylinder */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="12" cy="6" rx="8" ry="4" fill="url(#green-top)" />
                                    <path d="M4 6V18C4 20.2 7.6 22 12 22C16.4 22 20 20.2 20 18V6H4Z" fill="url(#green-body)" />
                                    <defs>
                                        <linearGradient id="green-top" x1="4" y1="6" x2="20" y2="6" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#bbf7d0" />
                                            <stop offset="1" stopColor="#4ade80" />
                                        </linearGradient>
                                        <linearGradient id="green-body" x1="4" y1="14" x2="20" y2="14" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#22c55e" />
                                            <stop offset="1" stopColor="#15803d" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Central Logo - Heartbeat */}
                    <motion.div
                        onClick={() => setIsModalOpen(true)}
                        animate={{ scale: [1, 0.95, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="hero-heartbeat-logo relative w-56 h-56 md:w-72 md:h-72 z-30 cursor-pointer pointer-events-auto"
                    >
                        <img
                            src="/assets/logo.png"
                            alt="JBOX"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </div>

                {/* Main CTA */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group relative px-8 py-4 bg-[#46d7df] text-black font-semibold rounded-full text-lg shadow-[0_10px_40px_-10px_rgba(70,215,223,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(70,215,223,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
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
