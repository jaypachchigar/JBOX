"use client";

import { motion } from "framer-motion";
import { Rocket, Code2, Users, Laptop, Briefcase } from "lucide-react";

export function WhoItIsFor() {
    const audiences = [
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Startup Founders",
            desc: "Validate ideas instantly. Ship your MVP in days without hiring a full engineering team."
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Indie Hackers",
            desc: "The ultimate force multiplier. Build complex SaaS products as a solo developer."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Product Teams",
            desc: "Bridge the gap between design and dev. Prototype in high-fidelity and export real code."
        },
        {
            icon: <Laptop className="w-6 h-6" />,
            title: "CTOs & Tech Leads",
            desc: "Skip the boilerplate setup. Get a production-ready architectural foundation from day one."
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Agencies",
            desc: "Deliver client projects 10x faster. Handle more retainers with the same team size."
        }
    ];

    return (
        <section className="py-32 bg-[#FAFAFA] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
                    >
                        Designed for Builders.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        Whether you're shipping your first product or scaling your tenth -- JBOX adapts to your workflow.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {audiences.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}

                    {/* "And You" Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-blue-600 p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center text-white"
                    >
                        <h3 className="text-2xl font-bold mb-2">Ready to Build?</h3>
                        <p className="text-blue-100 mb-6">Start your journey today.</p>
                        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                            Try JBOX
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
