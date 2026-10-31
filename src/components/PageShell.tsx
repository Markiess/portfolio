import type { ReactNode } from "react";
import { MeshBackground } from "./MeshBackground";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-parchment text-ink">
      <MeshBackground />
      <div className="relative">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
