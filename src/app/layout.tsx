import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JBOX | Turn Product Ideas Into Production-Ready Software",
  description: "An AI-native system that constructs architecture, design, flows, and code together.",
};

import { TerminalBackground } from "@/components/ui/TerminalBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          spaceGrotesk.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased"
        )}
      >
        <TerminalBackground />
        {children}
      </body>
    </html>
  );
}
