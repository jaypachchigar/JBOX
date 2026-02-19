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
                {/* Empty div to balance the flex container so Logo/Content stays centered if needed, or just standard between */}
                <div className="flex items-center gap-2">
                    {/* Optional: We could put a small logo here if scanned, but user wanted it central. 
                         For now, leaving the left side empty or adding links there? 
                         Let's put links on the left/center and Sign In on right.
                     */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <Link
                    href="#"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white/50 hover:bg-white hover:border-gray-300 transition-all text-sm font-medium text-gray-700 hover:text-black shadow-sm"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    Sign in
                </Link>
            </div>
        </motion.header>
    );
}
