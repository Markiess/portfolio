import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Word({ word, index, total, progress }: { word: string; index: number; total: number; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const start = index / total;
  const opacity = useTransform(progress, [start, Math.min(start + 0.14, 1)], reduce ? [1, 1] : [0.18, 1]);
  return <motion.span style={{ opacity }} className="inline-block">{word}&nbsp;</motion.span>;
}

export function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start .88", "end .3"] });

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <Word key={`${word}-${index}`} word={word} index={index} total={words.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}
