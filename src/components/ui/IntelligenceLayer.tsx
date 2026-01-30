"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, Lightbulb } from "lucide-react";

const insights = [
    { icon: TrendingUp, title: "Usage Patterns", desc: "Detect what features users love and optimize" },
    { icon: Lightbulb, title: "Smart Suggestions", desc: "AI-powered recommendations for better UX" },
    { icon: Brain, title: "Continuous Learning", desc: "Your product improves automatically over time" },
];

export function IntelligenceLayer() {
    return (
        <section className="py-32 px-6 relative">
            <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8">
                        <Brain size={28} className="text-cyan-400" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Intelligence Layer
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        JBOX analyzes real usage, detects friction, and suggests proven UX patterns.
                        Your product gets smarter over time.
                    </p>
                </motion.div>

                {/* Insight cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {insights.map((insight, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/[0.04] flex items-center justify-center mx-auto mb-5">
                                <insight.icon size={24} className="text-cyan-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{insight.title}</h3>
                            <p className="text-white/50 text-sm">{insight.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
