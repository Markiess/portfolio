import { animate, useInView, useMotionValue, useReducedMotion, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

export function CountUp({ value, decimals = 0, prefix = "", suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();
  const current = useMotionValue(reduce ? value : 0);
  const display = useTransform(current, (latest) => `${prefix}${latest.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(current, value, { duration: reduce ? 0 : 1.3, ease: [0.28, 0.11, 0.32, 1] });
    return controls.stop;
  }, [current, inView, reduce, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
