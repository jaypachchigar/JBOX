"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Zap } from "lucide-react";

export function ProofSection() {
    return (
        <section className="py-32 bg-[#FAFAFA] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-l from-blue-50/50 to-transparent blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    {/* Left: Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-sm font-bold tracking-widest uppercase text-blue-900">CASE STUDY</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight"
                        >
                            Built in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">2 Weeks.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 font-light"
                        >
                            Using JBOX, we built the world’s first <strong className="text-gray-900 font-semibold">Agentic Employment of Record</strong> platform in just two weeks.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4 border-l-4 border-blue-500 pl-6 py-2"
                        >
                            <p className="text-lg text-gray-900 font-medium">
                                "Not a mockup. Not a demo. A working, scalable system."
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Premium Visual/Stat Card */}
                    <div className="lg:w-1/2 w-full relative">
                        {/* Main Glass Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] aspect-[4/3] flex flex-col justify-between"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="space-y-2">
                                    <div className="h-3 w-24 bg-gray-200 rounded-full" />
                                    <div className="h-8 w-48 bg-gray-900 rounded-lg" />
                                </div>
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                    <Zap size={24} />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <div className="h-2 w-16 bg-gray-200 rounded-full mb-1" />
                                        <div className="text-sm font-semibold text-gray-900">Compliance Engine Ready</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 ml-8 opacity-80">
                                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <div className="h-2 w-16 bg-gray-200 rounded-full mb-1" />
                                        <div className="text-sm font-semibold text-gray-700">Payroll Pipelines Active</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Stat Widget */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-8 -left-8 bg-black text-white p-6 rounded-2xl shadow-xl z-20"
                        >
                            <div className="flex items-center gap-3 mb-1 text-gray-400 text-sm">
                                <Clock size={16} />
                                <span>Time to Market</span>
                            </div>
                            <div className="text-4xl font-bold text-white">2 Weeks</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
