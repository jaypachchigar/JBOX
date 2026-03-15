"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function SystemSection() {
    const [showGif, setShowGif] = useState(false);
    const [frozenDesktop, setFrozenDesktop] = useState<string | undefined>(undefined);
    const [frozenMobile, setFrozenMobile] = useState<string | undefined>(undefined);
    const sectionObserverRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLElement>(null);

    // Capture the first frame of each GIF as a still image
    useEffect(() => {
        const captureFirstFrame = (src: string, setter: (url: string) => void) => {
            const img = new window.Image();
            img.crossOrigin = "anonymous";
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.drawImage(img, 0, 0);
                    setter(canvas.toDataURL("image/png"));
                }
            };
            img.src = src;
        };
        captureFirstFrame("/assets/Final_video.gif", setFrozenDesktop);
        captureFirstFrame("/assets/Mobile-video.gif", setFrozenMobile);
    }, []);

    // Start GIF playback 3 seconds after section enters viewport
    useEffect(() => {
        const target = sectionObserverRef.current || containerRef.current;
        if (!target) return;

        let timer: ReturnType<typeof setTimeout> | null = null;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !showGif) {
                    timer = setTimeout(() => {
                        setShowGif(true);
                    }, 3000);
                } else if (!entry.isIntersecting && timer) {
                    clearTimeout(timer);
                    timer = null;
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(target);

        return () => {
            observer.disconnect();
            if (timer) clearTimeout(timer);
        };
    }, [showGif]);
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

    const targetHeightVh = windowWidth > 0 && typeof window !== "undefined"
        ? (windowWidth * (1750 / 3558) / window.innerHeight) * 100
        : 100;

    const height = useTransform(scrollYProgress, [0, 0.5], ["100vh", `${isMobile ? 100 : targetHeightVh}vh`]);

    if (isMobile) {
        return (
            <section ref={sectionObserverRef} id="engine" className="relative w-full bg-[#E7E7EA] font-sans flex flex-col pt-16">
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="w-full pl-6 pr-6 flex flex-col items-start text-left z-10 mb-8 pt-8">


                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.05] mb-4">
                        A complete product<br />
                        <span style={{ color: '#46d7df' }}>
                            {" "}from a single prompt.
                        </span>
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-6">
                        {["Role flows", "reusable patterns", "tokenised UI", "versioning", "Clean code", "GitHub export"].map((item) => (
                            <span key={item} className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-white/60 border border-gray-200/80 rounded-full px-3 py-1">
                                <span className="w-1 h-1 rounded-full bg-[#46d7df]" />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="w-full h-full relative z-20 flex justify-center items-center">
                    <img
                        src={showGif ? "/assets/Mobile-video.gif" : frozenMobile}
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


                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.05] mb-4">
                                A complete product<br className="hidden md:block" />
                                <span style={{ color: '#46d7df' }}>
                                    {" "}from a single prompt.
                                </span>
                            </h2>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {["Role flows", "reusable patterns", "tokenised UI", "versioning", "Clean code", "GitHub export"].map((item) => (
                                    <span key={item} className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 bg-white/60 border border-gray-200/80 rounded-full px-3.5 py-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#46d7df]" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right GIF Container */}
                <motion.div
                    className="relative z-20 overflow-hidden shadow-[-20px_0_50px_-15px_rgba(0,0,0,0.1)] origin-right bg-[#E7E7EA] flex justify-center items-center"
                    style={{
                        width: windowWidth > 0 ? width : "50vw",
                        height: windowWidth > 0 ? height : "100vh",
                    }}
                >
                    <img
                        src={showGif ? "/assets/Final_video.gif" : frozenDesktop}
                        alt="JBOX Engine compiling and deploying features"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
