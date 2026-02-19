"use client";

import { motion } from "framer-motion";
import { Check, Layers, Code2, Database } from "lucide-react";

export function SolutionSection() {
    const features = [
        {
            icon: <Code2 size={24} />,
            title: "Clean Frontend",
            desc: "Semantic, accessible, component-based code."
        },
        {
            icon: <Layers size={24} />,
            title: "Organized Logic",
            desc: "Separation of concerns and cleaner state management."
        },
        {
            icon: <Database size={24} />,
            title: "Backend-Ready",
            desc: "Schema and API structure built-in from the start."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent-violet font-bold tracking-wide uppercase text-sm mb-2 block text-[#8B5CF6]">
                            The Better Way
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            JBOX Builds It Right <br /> From The Start.
                        </h2>
                        <p className="text-lg text-muted mb-8 leading-relaxed">
                            Instead of generating disposable code, JBOX stitches structured product flows with scalable architecture at the core. Built to grow with your product — not against it.
                        </p>

                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <Check size={16} strokeWidth={3} />
                            </div>
                            <span className="text-xl font-bold text-primary">Production-ready from the first build.</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid gap-6"
                    >
                        {features.map((feature, idx) => (
                            <div key={idx} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-gray-50 text-gray-600 group-hover:bg-accent-blue/20 group-hover:text-[#00F5FF] transition-colors">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-1">{feature.title}</h3>
                                    <p className="text-muted text-sm">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
