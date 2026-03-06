import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { SystemSection } from "@/components/ui/SystemSection";
import { ThirdSection } from "@/components/ui/ThirdSection";
import { PricingSection } from "@/components/ui/PricingSection";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent-blue/20 flex flex-col">
      {/* <Navbar /> */}
      <Hero />
      <SystemSection />
      <ThirdSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
