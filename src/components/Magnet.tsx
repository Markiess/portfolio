import { useEffect, useRef, type ReactNode } from "react";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
};

export function Magnet({
  children,
  className,
  padding = 100,
  strength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}: MagnetProps) {
  const boundsRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bounds = boundsRef.current;
    const inner = innerRef.current;
    if (!bounds || !inner) return;

    const onMove = (event: MouseEvent) => {
      const rect = bounds.getBoundingClientRect();
      const within =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (within) {
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        inner.style.transition = activeTransition;
        inner.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
        return;
      }

      inner.style.transition = inactiveTransition;
      inner.style.transform = "translate3d(0, 0, 0)";
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [activeTransition, inactiveTransition, padding, strength]);

  return (
    <div ref={boundsRef} className={className}>
      <div
        ref={innerRef}
        style={{
          transform: "translate3d(0, 0, 0)",
          transition: inactiveTransition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
