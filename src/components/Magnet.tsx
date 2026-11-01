import { useReducedMotion } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
};

export function Magnet({
  children,
  className,
  strength = 8,
}: MagnetProps) {
  const boundsRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const inner = innerRef.current;
    if (!inner || reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    inner.style.transform = `translate3d(${(event.clientX - rect.left - rect.width / 2) / strength}px, ${(event.clientY - rect.top - rect.height / 2) / strength}px, 0)`;
  };

  const reset = () => {
    if (innerRef.current) innerRef.current.style.transform = "translate3d(0,0,0)";
  };

  return (
    <div ref={boundsRef} className={className} onMouseMove={onMove} onMouseLeave={reset}>
      <div
        ref={innerRef}
        style={{
          transform: "translate3d(0, 0, 0)",
          transition: "transform .55s cubic-bezier(.28,.11,.32,1)",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
