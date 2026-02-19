"use client";

import { motion } from "framer-motion";
import { Terminal, Layers, Zap, Database, UserCheck, ShieldCheck } from "lucide-react";

export function Differentiators() {
    const features = [
        {
            icon: <Terminal className="w-6 h-6" />,
            title: "No Throwaway Code",
            desc: "Every line is written for production, not just a demo.",
            className: "md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Clean Architecture",
            desc: "Modular, component-based structure from day one.",
            className: "bg-white border border-gray-100"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Scalable Structure",
            desc: "Ready for thousands of users, not just your first ten.",
            className: "bg-white border border-gray-100"
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Backend-Ready",
            desc: "Seamless integration with Supabase, Firebase, or custom APIs.",
            className: "md:col-span-2 bg-blue-50 border border-blue-100"
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            title: "Founder Workflow",
            desc: "Designed for speed without sacrificing quality.",
            className: "bg-white border border-gray-100"
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Built for Production",
            desc: "Security, performance, and best practices baked in.",
            className: "bg-white border border-gray-100"
        }
    ];

    return (
        <section className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Why Teams Choose JBOX.
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        We don't just generate code. We engineer platforms.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl ${feature.className}`}
                        >
                            <div className={`relative z-10 ${feature.className.includes("text-white") ? "text-white" : "text-gray-900"}`}>
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.className.includes("text-white")
                                        ? "bg-white/10 text-white"
                                        : "bg-gray-50 text-gray-900"
                                    }`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className={`text-lg leading-relaxed ${feature.className.includes("text-white")
                                        ? "text-gray-300"
                                        : "text-gray-500"
                                    }`}>
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
