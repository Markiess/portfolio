import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { WorkVisual } from "../components/WorkVisual";
import type { WorkItem } from "../data/content";

type StackSectionProps = {
  id: string;
  title: string;
  items: readonly WorkItem[];
  overlap?: boolean;
};

type StackCardProps = {
  item: WorkItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function StackCard({ item, index, total, progress }: StackCardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const range: [number, number] = [index / total, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[85vh]" style={{ "--stack-index": index } as CSSProperties}>
      <motion.div
        style={{ scale }}
        className="project-sticky sticky flex h-[85vh] origin-top flex-col overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <span
              className="shrink-0 font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {item.number}
            </span>
            <div className="min-w-0">
              <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {item.category}
              </p>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {item.name}
              </h3>
            </div>
          </div>
          {item.href && item.linkLabel ? (
            <LiveProjectButton href={item.href} label={item.linkLabel} />
          ) : null}
        </div>
        <p
          className="mt-3 max-w-4xl font-light leading-relaxed text-[#D7E2EA] opacity-70"
          style={{ fontSize: "clamp(0.8rem, 1.3vw, 1.05rem)" }}
        >
          {item.summary}
        </p>
        <WorkVisual item={item} />
      </motion.div>
    </div>
  );
}

export function StackSection({ id, title, items, overlap = false }: StackSectionProps) {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id={id}
      className={`relative bg-[#0C0C0C] px-5 pb-16 pt-16 sm:px-8 sm:pt-20 md:px-10 md:pt-24 ${
        overlap
          ? "z-10 -mt-10 rounded-t-[40px] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
          : "z-10 border-t border-[#D7E2EA]/15"
      }`}
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        {title}
      </h2>
      <div ref={stackRef}>
        {items.map((item, index) => (
          <StackCard
            key={item.number}
            item={item}
            index={index}
            total={items.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
