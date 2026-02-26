"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Globe, Cpu, Database, Code2 } from "lucide-react";

export function Hero() {
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
                    {/* Orbit Rings (Background) */}
                    {/* Orbit Ring 1 (Outer) */}
                    <div className="absolute inset-0 border border-dashed border-gray-100 rounded-full" />

                    {/* Orbit Ring 2 (Middle) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-6 md:inset-10 border border-gray-100 rounded-full"
                    />

                    {/* Orbit Ring 3 (Inner) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-12 md:inset-20 border border-dashed border-gray-100/50 rounded-full"
                    />

                    {/* Orbiting Node 1 - Code (Outer Ring) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 pointer-events-none"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FAFAFA] border-[3px] border-black rounded-xl flex items-center justify-center pointer-events-auto">
                            {/* Lego Studs */}
                            <div className="absolute -top-[7px] left-2 w-2 h-2 bg-[#FAFAFA] border-[3px] border-black border-b-0 rounded-t-[0.2rem] z-0" />
                            <div className="absolute -top-[7px] right-2 w-2 h-2 bg-[#FAFAFA] border-[3px] border-black border-b-0 rounded-t-[0.2rem] z-0" />
                            <div className="relative z-10 w-full h-full bg-[#FAFAFA] rounded-xl flex items-center justify-center">
                                <Code2 size={20} color="#46d9e1" strokeWidth={2.5} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Orbiting Node 2 - Database (Middle Ring) */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-6 md:inset-10 pointer-events-none"
                    >
                        <div className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2 w-10 h-10 bg-[#FAFAFA] border-[3px] border-black rounded-xl flex items-center justify-center pointer-events-auto">
                            {/* Lego Studs */}
                            <div className="absolute -top-[7px] left-[5px] w-2 h-2 bg-[#FAFAFA] border-[3px] border-black border-b-0 rounded-t-[0.2rem] z-0" />
                            <div className="absolute -top-[7px] right-[5px] w-2 h-2 bg-[#FAFAFA] border-[3px] border-black border-b-0 rounded-t-[0.2rem] z-0" />
                            <div className="relative z-10 w-full h-full bg-[#FAFAFA] flex items-center justify-center rounded-xl">
                                <Database size={16} color="#fd6472" strokeWidth={2.5} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Orbiting Node 3 - CPU (Inner Ring) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-12 md:inset-20 pointer-events-none"
                    >
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-[#FAFAFA] border-[2px] border-black rounded-lg flex items-center justify-center pointer-events-auto">
                            {/* Lego Studs */}
                            <div className="absolute -top-[5px] left-[3px] w-2 h-1.5 bg-[#FAFAFA] border-[2px] border-black border-b-0 rounded-t-[0.2rem] z-0" />
                            <div className="absolute -top-[5px] right-[3px] w-2 h-1.5 bg-[#FAFAFA] border-[2px] border-black border-b-0 rounded-t-[0.2rem] z-0" />
                            <div className="relative z-10 w-full h-full bg-[#FAFAFA] flex items-center justify-center rounded-lg">
                                <Cpu size={14} color="#FFBD2E" strokeWidth={2.5} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Central Logo - Pulsing */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-56 h-56 md:w-72 md:h-72 z-20 pointer-events-none"
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
                        className="group relative px-8 py-4 bg-[#46d7df] text-black font-semibold rounded-full text-lg shadow-[0_10px_40px_-10px_rgba(70,215,223,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(70,215,223,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
                    >
                        <span>Activate JBOX</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
