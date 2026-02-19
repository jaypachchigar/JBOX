import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { ProblemSection } from "@/components/ui/ProblemSection";
import { SolutionSection } from "@/components/ui/SolutionSection";
import { HowItWorks } from "@/components/ui/HowItWorks";
import { ProofSection } from "@/components/ui/ProofSection";
import { Differentiators } from "@/components/ui/Differentiators";
import { WhoItIsFor } from "@/components/ui/WhoItIsFor";
import { CTA } from "@/components/ui/CTA";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent-blue/20">
      <Navbar />
      <Hero />

      {/* 
          NOTE: Hiding marketing sections to match the "Tool-First" unique design request.
          The focus is entirely on the "Describe your product" input.
      */}

      <ProblemSection />
      <SolutionSection />
      <div id="how-it-works"><HowItWorks /></div>
      <ProofSection />
      <div id="why-jbox"><Differentiators /></div>
      <WhoItIsFor />
      <CTA />

      <Footer />
    </main>
  );
}
