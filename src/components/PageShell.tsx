import type { ReactNode } from "react";
import { ScrollProgress } from "./ScrollProgress";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-ink">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <SiteNav />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
