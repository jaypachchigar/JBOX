"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, Coins, RefreshCw, TrendingUp, Check } from "lucide-react";
import { useState } from "react";
import { LeadGenModal } from "./LeadGenModal";

export function PricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const features = [
        "250 credits included",
        "Full AI-powered builds",
        "Production-ready code export",
        "Unlimited revisions per credit",
        "Priority support",
    ];

    const topUpSteps = [
        {
            icon: <Coins className="w-5 h-5" />,
            title: "Run low on credits?",
            desc: "Top up with $25 for another 250 credits anytime during the month.",
        },
        {
            icon: <RefreshCw className="w-5 h-5" />,
            title: "Auto-adjusts next month",
            desc: "Your top-up amount rolls into your next subscription. 1 top-up = $50/mo going forward.",
        },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            title: "Scales with you",
            desc: "Only pay more when you need more. No surprises, no caps.",
        },
    ];

    return (
        <section id="pricing" className="relative w-full bg-white py-16 sm:py-24 md:py-36 overflow-hidden font-sans">
            {/* Background Noise */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#46d7df]/10 border border-[#46d7df]/20 text-[#2ab5bc] font-medium text-xs sm:text-sm mb-6 sm:mb-8"
                    >
                        <Zap size={14} />
                        <span>Simple Pricing</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight"
                    >
                        One plan.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46d7df] to-[#2ab5bc]">
                            Zero complexity.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        Pay for what you use. Top up when you need more. That&apos;s it.
                    </motion.p>
                </div>

                {/* Pricing Card — Compact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="relative w-full max-w-sm mx-auto mb-14 sm:mb-20"
                >
                    {/* Glow behind card */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-[#46d7df]/12 to-[#2ab5bc]/8 rounded-[2rem] blur-xl pointer-events-none" />

                    <div className="relative bg-white rounded-2xl border border-gray-100 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.07)] overflow-hidden">
                        {/* Card Header */}
                        <div className="px-6 pt-7 pb-5 text-center border-b border-gray-50">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#46d7df]/10 text-[#2ab5bc] text-[10px] font-bold uppercase tracking-wider mb-4">
                                <Zap size={10} />
                                Monthly
                            </div>

                            <div className="flex items-baseline justify-center gap-1 mb-1">
                                <span className="text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
                                    $25
                                </span>
                                <span className="text-lg text-gray-400 font-medium">/mo</span>
                            </div>

                            <div className="flex items-center justify-center gap-2 mt-2">
                                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100">
                                    <Coins size={12} className="text-[#46d7df]" />
                                    <span className="text-xs font-semibold text-gray-700">250 credits</span>
                                </div>
                                <span className="text-[10px] text-gray-400">•</span>
                                <span className="text-xs text-gray-400 font-medium">$1 = 10 credits</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="px-6 py-5">
                            <ul className="space-y-2.5 mb-6">
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2.5">
                                        <div className="w-4 h-4 rounded-full bg-[#46d7df]/10 flex items-center justify-center flex-shrink-0">
                                            <Check size={10} className="text-[#2ab5bc]" />
                                        </div>
                                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full relative px-6 py-3 bg-[#46d7df] text-black font-semibold rounded-full text-sm shadow-[0_8px_30px_-8px_rgba(70,215,223,0.5)] hover:shadow-[0_12px_40px_-10px_rgba(70,215,223,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <span>Get Started</span>
                                <ArrowRight size={15} />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* How Top-Ups Work — Redesigned */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h3 className="text-center text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 sm:mb-10">
                        How top-ups work
                    </h3>

                    <div className="relative">
                        {/* Vertical connecting gradient (mobile) */}
                        <div className="md:hidden absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-[#46d7df]/30 via-[#46d7df]/15 to-transparent" />

                        {/* Horizontal connecting gradient (desktop) */}
                        <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-[#46d7df]/40 via-[#46d7df]/20 to-[#46d7df]/40" />

                        <div className="grid md:grid-cols-3 gap-6 md:gap-5">
                            {topUpSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + idx * 0.12 }}
                                    className="relative flex md:flex-col items-start md:items-center gap-3 sm:gap-4 md:gap-0 group pl-1 md:pl-0"
                                >
                                    {/* Numbered circle */}
                                    <div className="w-11 h-11 rounded-xl bg-[#0A0A0A] flex items-center justify-center flex-shrink-0 md:mb-5 relative z-10 shadow-md group-hover:scale-105 transition-transform duration-200">
                                        <span className="text-white text-sm font-bold">{idx + 1}</span>
                                    </div>

                                    <div className="md:text-center flex-1">
                                        <h4 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Example callout */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 }}
                        className="mt-10 text-center"
                    >
                        <div className="inline-flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-2 gap-y-1.5 px-4 py-3 sm:py-2.5 rounded-xl bg-[#0A0A0A] text-[11px] sm:text-xs text-gray-400 max-w-full">
                            <span className="text-[#46d7df] font-semibold">Example</span>
                            <span className="hidden sm:inline text-gray-600">—</span>
                            <span className="text-center sm:text-left">
                                250 credits used → top up once → next month{" "}
                                <span className="font-semibold text-white">$50/mo · 500 credits</span>
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <LeadGenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
