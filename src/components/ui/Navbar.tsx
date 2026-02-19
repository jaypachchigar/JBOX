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
        setIsScrolled(latest > 20);
    });

    const navLinks = [
        { name: "How it works", href: "#how-it-works" },
        { name: "Why JBOX", href: "#why-jbox" },
        { name: "Pricing", href: "#pricing" },
    ];

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "py-4 glass-premium" : "bg-transparent py-6"
            )}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo - Visible on all screens */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/assets/logo.png"
                            alt="JBOX Logo"
                            className="w-10 h-10 object-contain"
                        />
                        <span className="text-xl font-bold tracking-tight text-white hidden sm:block">JBOX</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 ml-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 bg-white/5 hover:bg-white/10 hover:border-gray-500 transition-all text-sm font-medium text-white shadow-sm"
                    >
                        Sign in
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-black/95 border-b border-gray-800 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-gray-400 hover:text-white transition-colors block py-2"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#"
                        className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gray-700 bg-white/5 hover:bg-white/10 hover:border-gray-500 transition-all text-sm font-medium text-white shadow-sm mt-2"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Sign in
                    </Link>
                </motion.div>
            )}
        </motion.header>
    );
}
