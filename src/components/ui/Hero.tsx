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

                {/* Core Engine Visuals */}
                <div className="relative mb-16 w-64 h-64 flex items-center justify-center">
                    {/* Orbit Ring 1 */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-dashed border-gray-200 rounded-full"
                    />

                    {/* Orbit Ring 2 (Reverse) */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 border border-gray-100 rounded-full"
                    />

                    {/* Orbit Ring 3 (Inner) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-8 border border-dashed border-gray-100/50 rounded-full"
                    />

                    {/* Orbiting Node 1 - Code (Outer Ring) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-8 h-8 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center">
                            <Code2 size={14} className="text-blue-500" />
                        </div>
                    </motion.div>

                    {/* Orbiting Node 2 - Database (Middle Ring) */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <div className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2 w-10 h-10 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center">
                            <Database size={16} className="text-violet-500" />
                        </div>
                    </motion.div>

                    {/* Orbiting Node 3 - CPU (Inner Ring) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <div className="absolute top-[50%] left-8 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center">
                            <Cpu size={14} className="text-emerald-500" />
                        </div>
                    </motion.div>

                    {/* Central Logo - Pulsing */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-32 h-32 md:w-40 md:h-40 z-20"
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
                        className="group relative px-8 py-4 bg-black text-white rounded-full font-medium text-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
                    >
                        <span>Initialize JBOX System</span>

                    </button>

                    <p className="mt-6 text-sm text-gray-400 font-medium">
                        v2.0 • System Operational
                    </p>
                </motion.div>
            </div>
        </section>
    );

}
