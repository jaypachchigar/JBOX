import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-20 h-20">
                            <img
                                src="/assets/logo.png"
                                alt="JBOX"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </Link>
                    <p className="text-sm text-gray-500">The AI builder that works.</p>
                </div>

                <nav className="flex flex-wrap justify-center gap-8">
                    {["Product", "How it Works", "Demo", "Docs", "Contact"].map((item) => (
                        <Link key={item} href="#" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="text-sm text-gray-400">
                    © 2026 JBOX. Built to scale.
                </div>
            </div>
        </footer>
    );
}
