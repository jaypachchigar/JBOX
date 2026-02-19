"use client";

import { motion } from "framer-motion";
import { AlertCircle, XCircle, FileWarning, ShieldAlert, Ban } from "lucide-react";

export function ProblemSection() {
    const problems = [
        { icon: <FileWarning size={18} />, text: "Non-existent Architecture", delay: 0.2 },
        { icon: <ShieldAlert size={18} />, text: "Security Vulnerabilities", delay: 0.4 },
        { icon: <XCircle size={18} />, text: "Unmaintainable Spaghetti Code", delay: 0.6 },
        { icon: <Ban size={18} />, text: "Zero Type Safety", delay: 0.8 },
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Noise/Grid */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 font-medium text-sm mb-8"
                    >
                        <AlertCircle size={14} />
                        <span>The AI Paradox</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
                    >
                        AI Tools Generate Demos. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                            Not Durable Systems.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        Most AI builders impress you with a prototype, but leave you with a codebase that needs a total rewrite before day one.
                    </motion.p>
                </div>

                {/* Visual: The Broken Codebase */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative max-w-3xl mx-auto"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl" />
                    <div className="relative bg-[#0F1117] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-900/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="text-xs font-mono text-gray-500">system_analysis.log</div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-8 font-mono text-sm">
                            <div className="space-y-4">
                                <div className="text-gray-400 border-b border-gray-800 pb-4 mb-6">
                                    &gt; running durability_check<span className="animate-pulse">_</span>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {problems.map((problem, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + problem.delay }}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"
                                        >
                                            {problem.icon}
                                            <span>{problem.text}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.5 }}
                                    className="mt-8 pt-4 border-t border-gray-800 text-center"
                                >
                                    <span className="text-red-500 font-bold bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
                                        CRITICAL FAILURE: REWRITE REQUIRED
                                    </span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
