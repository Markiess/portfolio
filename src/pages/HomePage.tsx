import { AboutSection } from "../sections/AboutSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { MarqueeSection } from "../sections/MarqueeSection";
import { StackSection } from "../sections/StackSection";
import { products, research } from "../data/content";

export function HomePage() {
  return (
    <main className="min-h-screen bg-[#0C0C0C]" style={{ overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <StackSection id="research" title="Research" items={research} overlap />
      <StackSection id="products" title="Products" items={products} />
    </main>
  );
}
