import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { ProductExplanation } from "@/components/ui/ProductExplanation";
import { BuildFlow } from "@/components/ui/BuildFlow";
import { CoreCapabilities } from "@/components/ui/CoreCapabilities";
import { IntelligenceLayer } from "@/components/ui/IntelligenceLayer";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent/30">
      <Navbar />
      <Hero />
      <div id="about"><ProductExplanation /></div>
      <div id="how-it-works"><BuildFlow /></div>
      <div id="features"><CoreCapabilities /></div>
      <div id="intelligence"><IntelligenceLayer /></div>
      <Footer />
    </main>
  );
}
