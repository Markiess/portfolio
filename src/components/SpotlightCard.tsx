import { useRef, type MouseEvent, type ReactNode } from "react";

export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <article ref={ref} onMouseMove={onMove} className={`spotlight-card ${className}`}>
      {children}
    </article>
  );
}
