import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type CSSProperties } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

type CharacterProps = {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function Character({ char, index, total, progress }: CharacterProps) {
  const start = index / total;
  const end = Math.min(start + 1 / total, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  let cursor = 0;

  return (
    <p ref={ref} className={`relative ${className ?? ""}`} style={style}>
      <span className="invisible whitespace-pre-wrap" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-0 whitespace-pre-wrap">
        {words.map((word, wordIndex) => {
          const wordStart = cursor;
          cursor += word.length + 1;
          return (
            <span key={`${word}-${wordIndex}`}>
              <span className="whitespace-nowrap">
                {Array.from(word).map((char, charIndex) => (
                  <Character
                    key={`${wordStart + charIndex}-${char}`}
                    char={char}
                    index={wordStart + charIndex}
                    total={text.length}
                    progress={scrollYProgress}
                  />
                ))}
              </span>
              {wordIndex < words.length - 1 ? " " : null}
            </span>
          );
        })}
      </span>
    </p>
  );
}
