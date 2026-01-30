"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";
import { ScrambleText } from "./ScrambleText";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20">
            {/* Subtle center glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Announcement badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
                >
                    <span className="flex items-center gap-1.5 text-cyan-400 text-sm font-medium">
                        <Zap size={14} className="fill-cyan-400" />
                        New
                    </span>
                    <span className="w-px h-4 bg-white/10" />
                    <span className="text-sm text-white/60">AI-powered architecture generation</span>
                    <ArrowRight size={14} className="text-white/40" />
                </motion.div>

                {/* Main heading with scramble effect */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.1] mb-8">
                        <ScrambleText>Turn Product Ideas</ScrambleText>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                            Into Reality
                        </span>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    JBOX is an AI-native platform that constructs architecture,
                    design systems, user flows, and production code — all together.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <button className="group flex items-center gap-3 px-7 py-4 bg-white text-black rounded-full font-semibold hover:bg-cyan-50 transition-all shadow-lg shadow-white/10">
                        Start Building Free
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex items-center gap-3 px-7 py-4 text-white/70 hover:text-white transition-colors">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <Play size={16} className="ml-0.5" />
                        </div>
                        Watch demo
                    </button>
                </motion.div>

                {/* Hero visual - Code/Dashboard preview */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="relative"
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-cyan-500/20 blur-3xl rounded-3xl" />

                    {/* Main window */}
                    <div className="relative bg-[#0a0a0a] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
                        {/* Window controls */}
                        <div className="flex items-center gap-2 px-5 py-4 bg-white/[0.02] border-b border-white/[0.06]">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                            <span className="ml-4 text-xs text-white/30 font-mono">jbox — main.tsx</span>
                        </div>

                        {/* Content area */}
                        <div className="p-6 md:p-8 grid grid-cols-4 gap-4 min-h-[300px]">
                            {/* Sidebar */}
                            <div className="hidden md:block col-span-1 space-y-3 border-r border-white/[0.04] pr-4">
                                <div className="h-3 w-20 bg-cyan-500/30 rounded" />
                                <div className="h-3 w-16 bg-white/[0.06] rounded" />
                                <div className="h-3 w-24 bg-white/[0.04] rounded" />
                                <div className="h-3 w-14 bg-white/[0.04] rounded" />
                                <div className="mt-6 h-3 w-20 bg-cyan-500/20 rounded" />
                                <div className="h-3 w-18 bg-white/[0.04] rounded" />
                            </div>

                            {/* Main content */}
                            <div className="col-span-4 md:col-span-3 space-y-4">
                                {/* Code lines */}
                                <div className="flex gap-3 items-center">
                                    <span className="text-white/20 text-xs font-mono w-4">1</span>
                                    <div className="h-3 w-32 bg-purple-500/30 rounded" />
                                    <div className="h-3 w-20 bg-cyan-500/30 rounded" />
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="text-white/20 text-xs font-mono w-4">2</span>
                                    <div className="h-3 w-8 bg-white/[0.06] rounded" />
                                    <div className="h-3 w-40 bg-green-500/20 rounded" />
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="text-white/20 text-xs font-mono w-4">3</span>
                                    <div className="h-3 w-12 bg-white/[0.06] rounded" />
                                    <div className="h-3 w-28 bg-yellow-500/20 rounded" />
                                    <div className="h-3 w-16 bg-white/[0.06] rounded" />
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="text-white/20 text-xs font-mono w-4">4</span>
                                    <div className="h-3 w-8 bg-white/[0.06] rounded" />
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="text-white/20 text-xs font-mono w-4">5</span>
                                    <div className="h-3 w-24 bg-cyan-500/30 rounded" />
                                    <div className="h-3 w-36 bg-white/[0.08] rounded" />
                                </div>

                                {/* Blinking cursor */}
                                <motion.div
                                    className="flex gap-3 items-center"
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    <span className="text-white/20 text-xs font-mono w-4">6</span>
                                    <div className="w-2 h-4 bg-cyan-400" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm"
                >
                    <span>Trusted by teams at</span>
                    <div className="flex gap-8 items-center">
                        {["Vercel", "Supabase", "Linear", "Raycast"].map((company) => (
                            <span key={company} className="font-medium text-white/40 hover:text-white/60 transition-colors cursor-default">
                                {company}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
