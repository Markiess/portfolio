import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

type FadeInTag = "div" | "li" | "section" | "p" | "span";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  as?: FadeInTag;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
};

export function FadeIn({
  children,
  className,
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) {
  const Component = motion.create(as);

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease }}
    >
      {children}
    </Component>
  );
}
