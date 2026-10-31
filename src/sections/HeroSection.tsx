import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { heroTagline } from "../data/content";

const heroEntries = [
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/products", label: "Products" },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 72]);
  const copyY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 28]);
  const fade = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 0.45]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-parchment">
      <div className="relative mx-auto flex min-h-[calc(100svh-44px)] max-w-[1440px] flex-col justify-center px-6 py-16 min-[834px]:block min-[834px]:px-10">
        <motion.div style={{ y: copyY, opacity: fade }} className="relative z-10 max-w-[680px]">
          <h1
            className="font-display font-semibold text-ink"
            style={{
              fontSize: "clamp(44px, 7vw, 84px)",
              lineHeight: 1.02,
              letterSpacing: "-0.28px",
            }}
          >
            Hi, i'm Qikang
          </h1>
          <p
            className="mt-5 max-w-[560px] font-display text-ink"
            style={{ fontSize: "clamp(22px, 2.6vw, 32px)", fontWeight: 600, lineHeight: 1.15, letterSpacing: "0.196px" }}
          >
            {heroTagline}
          </p>
          <div className="mt-8 grid w-full max-w-[560px] grid-cols-3 gap-3">
            {heroEntries.map((entry) => (
              <Link key={entry.to} to={entry.to} className="btn-glass">
                {entry.label}
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          style={{ y: photoY }}
          className="relative z-0 mt-10 h-[460px] min-[834px]:absolute min-[834px]:inset-y-0 min-[834px]:right-0 min-[834px]:mt-0 min-[834px]:h-auto min-[834px]:w-[min(52vw,760px)]"
        >
          <img src="/hero.jpg" alt="Qikang Yan" className="hero-photo h-full w-full min-[834px]:absolute min-[834px]:right-0 min-[834px]:top-0" />
          <div className="hero-wash pointer-events-none absolute inset-0" />
        </motion.div>
      </div>
    </section>
  );
}
