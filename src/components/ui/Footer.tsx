import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="flex flex-col items-start gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-20 h-20">
                            <img
                                src="/assets/logo.png"
                                alt="JBOX"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-400 md:mt-auto">
                    <a href="mailto:contact@jboxai.com" className="hover:text-primary transition-colors">contact@jboxai.com</a>
                    <span>© 2026 JBOX. Built to scale.</span>
                </div>
            </div>
        </footer>
    );
}
