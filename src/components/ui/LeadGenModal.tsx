"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface LeadGenModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LeadGenModal({ isOpen, onClose }: LeadGenModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1200);
    };

    const handleClose = () => {
        setIsSuccess(false); // Reset state on close
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-lg bg-[#ffffff] rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors z-10"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-10">
                            {isSuccess ? (
                                /* Success State */
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-tr from-[#46d7df] to-[#46d7df]/50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#46d7df]/20">
                                        <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">
                                        You&apos;re on the list!
                                    </h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        We aim to launch within 1 month, we&apos;ll give you extra free credits. Keep an eye on your inbox!
                                    </p>
                                    <button
                                        onClick={handleClose}
                                        className="w-full px-8 py-4 bg-gray-100 text-[#0A0A0A] font-semibold rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        Done
                                    </button>
                                </motion.div>
                            ) : (
                                /* Form State */
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h3 className="text-3xl font-bold text-[#0A0A0A] mb-3">
                                            Let&apos;s build together.
                                        </h3>
                                        <p className="text-gray-500 text-base">
                                            Join the waitlist and secure your early-access credits.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#46d7df]/50 focus:border-[#46d7df] transition-all text-gray-900 placeholder:text-gray-400"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#46d7df]/50 focus:border-[#46d7df] transition-all text-gray-900 placeholder:text-gray-400"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="idea" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                                                Have any idea what you want to build?
                                            </label>
                                            <textarea
                                                id="idea"
                                                rows={3}
                                                placeholder="A marketplace for vintage cameras..."
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#46d7df]/50 focus:border-[#46d7df] transition-all resize-none text-gray-900 placeholder:text-gray-400"
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full relative px-8 py-4 bg-[#46d7df] text-black font-semibold rounded-full text-lg shadow-[0_10px_40px_-10px_rgba(70,215,223,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(70,215,223,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center"
                                            >
                                                {isSubmitting ? (
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full"
                                                    />
                                                ) : (
                                                    "Submit"
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
