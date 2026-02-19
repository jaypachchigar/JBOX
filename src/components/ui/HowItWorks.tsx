"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cpu, FlaskConical, Code, Server, Rocket } from "lucide-react";

export function HowItWorks() {
    const steps = [
        { icon: <MessageSquare className="w-6 h-6" />, title: "Describe your idea", desc: "Share your vision in plain English. No technical specs needed." },
        { icon: <Cpu className="w-6 h-6" />, title: "AI Architects the System", desc: "JBOX stitches together the perfect stack and component architecture." },
        { icon: <FlaskConical className="w-6 h-6" />, title: "Interactive Prototype", desc: "Preview and refine your application in real-time." },
        { icon: <Code className="w-6 h-6" />, title: "Generate Production Code", desc: "Export clean, maintainable React/Next.js code instantly." },
        { icon: <Server className="w-6 h-6" />, title: "Backend Integration", desc: "Auto-generated Supabase/PostgreSQL schema and API routes." },
        { icon: <Rocket className="w-6 h-6" />, title: "Deploy & Scale", desc: "One-click deployment to Vercel/Netlify with full CI/CD." },
    ];

    return (
        <section id="how-it-works" className="py-32 bg-[#FAFAFA] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center p-1 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
                    >
                        <span className="px-4 py-1.5 rounded-full bg-gray-50 text-sm font-semibold text-gray-600">
                            The Workflow
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
                    >
                        From Prompt to Production.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto font-light"
                    >
                        A seamless pipeline that turns natural language into enterprise-grade software.
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-1/2 md:block hidden" />
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-1/2 md:hidden" />

                    <div className="space-y-24">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: idx * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full pl-12 md:pl-0">
                                    <div className={`relative bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group overflow-hidden ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>

                                        {/* Background Number */}
                                        <div className={`absolute -bottom-4 ${idx % 2 === 0 ? "-right-4" : "-left-4"} text-9xl font-bold text-gray-50 opacity-50 select-none z-0`}>
                                            0{idx + 1}
                                        </div>

                                        <div className="relative z-10">
                                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-sm ${idx % 2 !== 0 && "md:ml-auto"}`}>
                                                {step.icon}
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-500 leading-relaxed text-lg">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10">
                                    <div className="w-10 h-10 rounded-full bg-white border-4 border-blue-50 shadow-sm flex items-center justify-center relative">
                                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                                        <div className="absolute inset-0 rounded-full border border-blue-100 animate-ping opacity-20" />
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
