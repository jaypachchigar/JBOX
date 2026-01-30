import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TerminalBackground } from "@/components/ui/TerminalBackground";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JBOX | Turn Product Ideas Into Production-Ready Software",
  description: "An AI-native system that constructs architecture, design, flows, and code together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(jakarta.variable, "dark scroll-smooth")}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <TerminalBackground />
        {children}
      </body>
    </html>
  );
}
