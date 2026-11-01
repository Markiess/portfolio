import { PageShell } from "../components/PageShell";
import { AboutSection } from "../sections/AboutSection";
import { HeroSection } from "../sections/HeroSection";

export function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <AboutSection />
    </PageShell>
  );
}
