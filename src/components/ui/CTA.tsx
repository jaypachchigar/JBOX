"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-white to-accent-violet/10" />

            <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
                        Ready to Build Something <br /> That Lasts?
                    </h2>
                    <p className="text-2xl text-muted mb-10">
                        Start with structure. Ship with confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full text-lg font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-primary/20">
                            Start Building with JBOX
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-full text-lg font-bold hover:bg-gray-50 transition-all duration-300 hover:shadow-md">
                            Book a Demo
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
