import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollFadeProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollFade({ children, className }: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.55"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.96, 1]);
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [28, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, scale, y }} className={className}>
      {children}
    </motion.div>
  );
}
