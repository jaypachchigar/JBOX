"use client";

import Link from "next/link";
import { Github, Twitter, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative pt-32 pb-12 px-6 overflow-hidden">
            {/* CTA Section */}
            <div className="max-w-4xl mx-auto text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to build?
                </h2>
                <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
                    Start turning your product ideas into reality today.
                </p>
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10">
                    Get started for free
                    <ArrowRight size={18} />
                </button>
            </div>

            {/* Divider */}
            <div className="max-w-6xl mx-auto border-t border-white/[0.06]" />

            {/* Footer content */}
            <div className="max-w-6xl mx-auto pt-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                                <span className="text-black font-bold text-sm">J</span>
                            </div>
                            <span className="font-semibold text-lg text-white">JBOX</span>
                        </div>
                        <p className="text-white/40 text-sm mb-6 max-w-xs">
                            AI-native platform for building production software.
                        </p>
                        <div className="flex gap-3">
                            <SocialLink icon={<Twitter size={18} />} href="#" />
                            <SocialLink icon={<Github size={18} />} href="#" />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-medium text-white mb-4">Product</h4>
                        <div className="flex flex-col gap-3">
                            <FooterLink href="#">Features</FooterLink>
                            <FooterLink href="#">Pricing</FooterLink>
                            <FooterLink href="#">Changelog</FooterLink>
                            <FooterLink href="#">Roadmap</FooterLink>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-white mb-4">Resources</h4>
                        <div className="flex flex-col gap-3">
                            <FooterLink href="#">Documentation</FooterLink>
                            <FooterLink href="#">API Reference</FooterLink>
                            <FooterLink href="#">Guides</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-white mb-4">Company</h4>
                        <div className="flex flex-col gap-3">
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Contact</FooterLink>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
                    <p>© 2026 JBOX. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white/60 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white/60 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <Link
            href={href}
            className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-white/50 hover:text-white transition-all"
        >
            {icon}
        </Link>
    );
}

function FooterLink({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <Link href={href} className="text-sm text-white/40 hover:text-white/70 transition-colors">
            {children}
        </Link>
    );
}
