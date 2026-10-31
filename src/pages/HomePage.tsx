import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { products, research } from "../data/content";
import { AboutSection } from "../sections/AboutSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { MarqueeSection } from "../sections/MarqueeSection";
import { StackSection } from "../sections/StackSection";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ExperienceSection />
        <StackSection id="research" title="Research" items={research} />
        <StackSection id="products" title="Products" items={products} />
      </main>
      <SiteFooter />
    </div>
  );
}
