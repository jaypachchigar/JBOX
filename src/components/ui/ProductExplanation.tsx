"use client";

import { motion } from "framer-motion";

export function ProductExplanation() {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            {/* Side accents */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed text-white/80">
                        Software as a{" "}
                        <span className="text-white font-medium">single organism</span>
                        {" "}— design, logic, and code evolving{" "}
                        <span className="text-cyan-400 font-medium">together</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
