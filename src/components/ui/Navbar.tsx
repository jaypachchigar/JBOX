"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "How it works", href: "#how-it-works" },
        { name: "Features", href: "#features" },
        { name: "Intelligence", href: "#intelligence" },
    ];

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    isScrolled
                        ? "bg-[#030303]/90 backdrop-blur-xl border-white/[0.06] py-4"
                        : "bg-transparent border-transparent py-5"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="relative z-50 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                            <span className="text-black font-bold text-sm">J</span>
                        </div>
                        <span className="font-semibold text-lg text-white">JBOX</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-white/50 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                            Sign in
                        </Link>
                        <button className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-cyan-50 transition-colors">
                            Get started
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden relative z-50 text-white"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 bg-[#030303] pt-24 px-6 md:hidden"
                >
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="text-2xl text-white/70 hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                            <Link href="#" className="text-white/60">Sign in</Link>
                            <button className="px-6 py-3 bg-white text-black rounded-full font-medium">
                                Get started
                            </button>
                        </div>
                    </nav>
                </motion.div>
            )}
        </>
    );
}
