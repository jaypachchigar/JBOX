"use client";

import { motion } from "framer-motion";
import { Layers, Users, Component, Palette, Zap, Shield, Code, GitBranch } from "lucide-react";

const features = [
    { icon: Layers, title: "AI Architecture", desc: "Complete system design generated automatically" },
    { icon: Users, title: "User Flows", desc: "Tailored experiences for every user type" },
    { icon: Component, title: "Components", desc: "Production-ready, accessible UI components" },
    { icon: Palette, title: "Design System", desc: "Consistent tokens, typography, spacing" },
    { icon: Zap, title: "Performance", desc: "Optimized for speed out of the box" },
    { icon: Shield, title: "Security", desc: "Best practices baked in by default" },
];

export function CoreCapabilities() {
    return (
        <section className="py-32 px-6 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] text-white/60 text-sm font-medium mb-6">
                        Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Everything you need
                    </h2>
                    <p className="text-lg text-white/50 max-w-xl mx-auto">
                        Built-in features that would take months to implement manually.
                    </p>
                </motion.div>

                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-white/50 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom highlight cards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                    >
                        <Code size={28} className="text-cyan-400 mb-4" />
                        <h3 className="text-2xl font-semibold text-white mb-3">Clean, Readable Code</h3>
                        <p className="text-white/60">
                            Export code that your team will actually want to work with. No lock-in, ever.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                    >
                        <GitBranch size={28} className="text-purple-400 mb-4" />
                        <h3 className="text-2xl font-semibold text-white mb-3">Full Ownership</h3>
                        <p className="text-white/60">
                            Push directly to GitHub. Deploy to Vercel, AWS, or anywhere you want.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
