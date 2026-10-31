import { PageShell } from "../components/PageShell";
import { AboutSection } from "../sections/AboutSection";
import { ExperienceSection } from "../sections/ExperienceSection";

export function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
      <ExperienceSection />
    </PageShell>
  );
}
