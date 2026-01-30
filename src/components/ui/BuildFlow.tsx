"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MessageSquare, Cpu, Palette, Rocket } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        id: "01",
        title: "Prompt",
        desc: "Describe your product idea in plain English. JBOX understands context, user types, and business logic.",
        visual: "prompt"
    },
    {
        icon: Cpu,
        id: "02",
        title: "Generate",
        desc: "Watch as AI constructs complete architecture, database schemas, API routes, and component trees.",
        visual: "generate"
    },
    {
        icon: Palette,
        id: "03",
        title: "Customize",
        desc: "Refine the design system, modify user flows, adjust business rules — all with full control.",
        visual: "customize"
    },
    {
        icon: Rocket,
        id: "04",
        title: "Ship",
        desc: "Export production-ready code directly to GitHub. Deploy to Vercel, AWS, or anywhere.",
        visual: "ship"
    },
];

export function BuildFlow() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-32 px-6 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.02] via-transparent to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        How it works
                    </h2>
                    <p className="text-white/50 text-lg">Idea to production in minutes</p>
                </motion.div>

                {/* Interactive Steps */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Step selector */}
                    <div className="space-y-4">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setActiveStep(i)}
                                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${activeStep === i
                                        ? 'bg-cyan-500/10 border-cyan-500/30'
                                        : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${activeStep === i
                                            ? 'bg-cyan-500 text-black'
                                            : 'bg-white/[0.04] text-white/50'
                                        }`}>
                                        <step.icon size={22} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className={`font-mono text-xs ${activeStep === i ? 'text-cyan-400' : 'text-white/30'}`}>
                                                {step.id}
                                            </span>
                                            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                                        </div>
                                        <p className={`text-sm leading-relaxed transition-colors ${activeStep === i ? 'text-white/70' : 'text-white/40'
                                            }`}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Visual display */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-3xl" />
                        <div className="relative bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-8 min-h-[400px]">
                            {/* Visual content based on active step */}
                            <StepVisual step={activeStep} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function StepVisual({ step }: { step: number }) {
    const visuals = [
        // Prompt
        <div key="prompt" className="space-y-4">
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Ready for input</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/60 font-mono text-sm"
                >
                    &quot;Build a SaaS dashboard with user auth,
                    <br />team management, and billing integration...&quot;
                </motion.p>
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-cyan-400 ml-1"
                />
            </div>
        </div>,

        // Generate
        <div key="generate" className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-sm mb-4">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"
                />
                <span>Generating architecture...</span>
            </div>
            {['Database Schema', 'API Routes', 'Components', 'Auth Flow', 'Billing Logic'].map((item, i) => (
                <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02]"
                >
                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span className="text-white/60 text-sm">{item}</span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.15 + 0.3 }}
                        className="ml-auto text-green-400 text-xs"
                    >
                        ✓
                    </motion.span>
                </motion.div>
            ))}
        </div>,

        // Customize
        <div key="customize" className="space-y-4">
            <div className="flex gap-2 mb-4">
                {['Design', 'Logic', 'Flows'].map((tab, i) => (
                    <div key={tab} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${i === 0 ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/[0.04] text-white/40'
                        }`}>
                        {tab}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
                {['Primary Color', 'Font Family', 'Border Radius', 'Spacing'].map((item) => (
                    <div key={item} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-white/40 text-xs block mb-1">{item}</span>
                        <div className="h-6 rounded bg-white/[0.06]" />
                    </div>
                ))}
            </div>
        </div>,

        // Ship
        <div key="ship" className="text-center py-8">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
            >
                <Rocket size={32} className="text-green-400" />
            </motion.div>
            <h4 className="text-xl font-semibold text-white mb-2">Ready to Deploy</h4>
            <p className="text-white/50 text-sm mb-6">Your code is production-ready</p>
            <div className="flex justify-center gap-3">
                <div className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium">
                    Push to GitHub
                </div>
                <div className="px-4 py-2 rounded-lg bg-white/[0.06] text-white/60 text-sm">
                    Download ZIP
                </div>
            </div>
        </div>,
    ];

    return (
        <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {visuals[step]}
        </motion.div>
    );
}
