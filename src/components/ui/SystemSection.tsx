"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function SystemSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth > 0 && windowWidth < 1024;

    const width = useTransform(scrollYProgress, [0, 0.5], [isMobile ? "100vw" : "50vw", "100vw"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const yText = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

    if (isMobile) {
        return (
            <section id="engine" className="relative w-full bg-[#E7E7EA] font-sans flex flex-col pt-16">
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="w-full pl-6 pr-6 flex flex-col items-start text-left z-10 mb-8 pt-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
                        <Sparkles size={12} color="#fd6472" />
                        <span className="text-gray-500">The Ultimate Compressor</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.05] mb-6">
                        An entire engineering team.<br />
                        <span style={{ color: '#46d7df' }}>
                            {" "}In a single text box.
                        </span>
                    </h2>
                </div>

                <div className="w-full h-full relative z-20">
                    <img
                        src="/assets/Screen Recording 2026-02-26 at 6.53.04 PM.gif"
                        alt="JBOX Engine compiling and deploying features"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        );
    }

    return (
        <section ref={containerRef} id="engine" className="relative w-full h-[250vh] bg-[#E7E7EA] font-sans">
            <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-end">

                {/* Backgrounds */}
                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                {/* Left Text */}
                <div className="absolute inset-0 flex items-center justify-start pointer-events-none z-10">
                    <div className="w-1/2 flex justify-end">
                        <motion.div
                            className="w-full max-w-[600px] flex flex-col items-start text-left pointer-events-auto pl-8 lg:pl-16 pr-12 lg:pr-24"
                            style={{ opacity: opacityText, y: yText }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
                                <Sparkles size={12} color="#fd6472" />
                                <span className="text-gray-500">The Ultimate Compressor</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.05] mb-6">
                                An entire engineering team.<br className="hidden md:block" />
                                <span style={{ color: '#46d7df' }}>
                                    {" "}In a single text box.
                                </span>
                            </h2>
                        </motion.div>
                    </div>
                </div>

                {/* Right GIF Container */}
                <motion.div
                    className="relative z-20 overflow-hidden shadow-[-20px_0_50px_-15px_rgba(0,0,0,0.1)] h-full origin-right bg-black"
                    style={{
                        width: windowWidth > 0 ? width : "50vw",
                    }}
                >
                    <img
                        src="/assets/Screen Recording 2026-02-25 at 9.55.37 PM.gif"
                        alt="JBOX Engine compiling and deploying features"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
