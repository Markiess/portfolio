import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Magnet } from "../components/Magnet";
import { PillButton } from "../components/PillButton";
import { profile } from "../data/profile";

const heroEntries = [
  { to: "#about", label: "About me" },
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
  const photoScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.06, 1]);
  const copyY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 54]);
  const copyScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 0.92]);
  const fade = useTransform(scrollYProgress, [0, 0.78], reduce ? [1, 1] : [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-[#05070a]">
      <motion.div style={{ scale: photoScale }} className="hero-image-wrap absolute inset-y-0 right-0 z-0 w-[52vw] max-w-[790px]">
        <picture>
          <source srcSet="/hero-720.avif 720w, /hero-1200.avif 1200w" type="image/avif" />
          <source srcSet="/hero-720.webp 720w, /hero-1200.webp 1200w" type="image/webp" />
          <img
            src="/hero.jpg"
            alt="Qikang Yan holding a basketball"
            className="hero-photo h-full w-full object-cover"
            fetchPriority="high"
            sizes="(max-width: 833px) 100vw, 52vw"
          />
        </picture>
      </motion.div>

      <div className="container-wide relative z-10 min-h-[100svh]">
        <motion.nav
          aria-label="Featured sections"
          style={{ opacity: fade }}
          className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 min-[834px]:flex min-[1100px]:left-10"
        >
          {heroEntries.map((entry) => (
            <Magnet key={entry.to} padding={45} strength={8}>
              <PillButton to={entry.to} label={entry.label} />
            </Magnet>
          ))}
        </motion.nav>

        <div className="absolute left-1/2 top-[42%] z-10 w-[min(90%,780px)] -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.div style={{ y: copyY, scale: copyScale, opacity: fade }}>
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[.18em] text-white/55">Computer Science · AI</p>
            <h1 className="font-display text-[clamp(48px,7.2vw,104px)] font-semibold leading-[.96] tracking-[-.065em] text-white">
              Hi, I&apos;m Qikang
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[clamp(17px,2vw,24px)] font-medium leading-[1.35] text-white/70">
              {profile.tagline}
            </p>
          </motion.div>
        </div>

        <motion.div style={{ opacity: fade }} className="absolute inset-x-5 bottom-8 z-20 flex flex-col items-center gap-2 min-[834px]:hidden">
          {heroEntries.map((entry) => (
            <PillButton key={entry.to} to={entry.to} label={entry.label} />
          ))}
        </motion.div>

        <motion.a
          href="#about"
          style={{ opacity: fade }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[.14em] text-white/45 no-underline min-[834px]:flex"
        >
          Scroll
          <span className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </motion.a>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
