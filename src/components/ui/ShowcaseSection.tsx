"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function ShowcaseSection() {
    return (
        <section id="showcase" className="relative w-full bg-[#FAFAFA] flex flex-col items-center justify-center py-12 md:py-20 overflow-hidden font-sans">
            <div className="max-w-4xl mx-auto w-full px-6 flex flex-col items-center relative z-10">

                {/* Section Header */}
                <motion.div
                    className="flex flex-col items-center text-center mb-10 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02)] ring-1 ring-gray-100 text-[10px] font-bold uppercase tracking-widest mb-4 border border-gray-100/50">
                        <PlayCircle size={12} color="#fd6472" />
                        <span className="text-gray-500">In Action</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
                        <span
                            style={{
                                backgroundImage: 'linear-gradient(to right, #fd6472, #46d9e1)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent'
                            }}
                        >
                            Watch it build.
                        </span>
                    </h2>

                    <p className="text-[13px] md:text-[15px] text-gray-500 max-w-lg font-medium">
                        See how JBOX continuously compiles and deploys complex capabilities in seconds without human intervention.
                    </p>
                </motion.div>

                {/* The GIF Showcase Wrapper - Scaled Down */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
                    className="w-full relative group max-w-3xl"
                >
                    {/* Subtle ambient shadow behind the frame */}
                    <div className="absolute inset-[-1rem] rounded-[2rem] blur-xl opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-40" style={{ backgroundImage: 'linear-gradient(to right, #fd6472, #46d9e1)' }} />

                    {/* Sleek Glass Window Wrapper */}
                    <div className="relative bg-[#0A0A0A] border border-gray-200/50 rounded-[1.2rem] md:rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08),inset_0_2px_8px_rgba(255,255,255,0.8)] overflow-hidden w-full aspect-video flex flex-col pointer-events-auto">

                        {/* Fake Browser/Window Top Bar */}
                        <div className="w-full h-8 md:h-10 bg-white border-b border-gray-100 flex items-center px-4 gap-2 relative z-20">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                            <div className="absolute left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                                Editor
                            </div>
                        </div>

                        {/* The GIF Content */}
                        <div className="w-full flex-1 relative flex items-center justify-center p-0 md:p-1 bg-[#F9FAFB]">
                            <img
                                src="/assets/16DF1194-EB3A-4673-80DA-E591069D0D1F-export (1).gif"
                                alt="JBOX Engine compiling and deploying features"
                                className="w-full h-full object-cover rounded-[1px] md:rounded-bl-[1.2rem] md:rounded-br-[1.2rem] opacity-95 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
