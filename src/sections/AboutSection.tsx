import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { WordReveal } from "../components/WordReveal";
import { education, interests, profile, skills, workExperience } from "../data/profile";

function Chapter({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start .75", "end .35"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 24 });

  return (
    <section ref={ref} className="grid gap-10 border-t border-white/10 py-20 min-[834px]:grid-cols-[260px_1fr] min-[834px]:py-28">
      <div className="relative">
        <div className="top-24 min-[834px]:sticky">
          <p className="text-[12px] font-medium tracking-[.15em] text-quiet">{number}</p>
          <h3 className="mt-3 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.03]">{title}</h3>
          <div className="mt-6 hidden h-24 w-px origin-top bg-white/10 min-[834px]:block">
            <motion.div style={{ scaleY }} className="h-full origin-top bg-action" />
          </div>
        </div>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="bg-black px-6 pb-10 pt-[clamp(100px,15vw,220px)]">
      <div className="mx-auto max-w-[1080px]">
        <p className="mb-8 text-[12px] font-medium uppercase tracking-[.17em] text-action">About me</p>
        <WordReveal
          text={profile.intro}
          className="max-w-[1000px] font-display text-[clamp(34px,5.6vw,72px)] font-semibold leading-[1.08] tracking-[-.05em] text-white"
        />

        <div className="mt-[clamp(120px,16vw,220px)]">
          <Chapter number="01" title="Education">
            {education.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <article className="grid gap-6 rounded-[24px] border border-white/10 bg-tile p-7 sm:grid-cols-[1fr_auto] sm:p-9">
                  <div>
                    <p className="text-[12px] font-medium uppercase tracking-[.12em] text-quiet">{item.period}</p>
                    <h4 className="mt-3 text-[24px] font-semibold tracking-[-.035em]">{item.name}</h4>
                    <p className="mt-1 text-[15px] text-action">{item.role}</p>
                    <p className="mt-5 max-w-[590px] text-[16px] leading-[1.6] text-muted">{item.description}</p>
                  </div>
                  <div className="min-w-24 self-end sm:text-right">
                    <p className="font-display text-[46px] font-semibold leading-none tracking-[-.06em]">{item.metric}</p>
                    <p className="mt-2 text-[12px] text-quiet">{item.metricLabel}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </Chapter>

          <Chapter number="02" title="Work experience">
            {workExperience.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <article className="border-b border-white/10 py-7 first:pt-0">
                  <p className="text-[12px] font-medium uppercase tracking-[.12em] text-quiet">{item.period}</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-[220px_1fr]">
                    <div>
                      <h4 className="text-[22px] font-semibold tracking-[-.035em]">{item.name}</h4>
                      <p className="mt-1 text-[14px] text-action">{item.role}</p>
                    </div>
                    <p className="max-w-[560px] text-[16px] leading-[1.6] text-muted">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </Chapter>

          <Chapter number="03" title="Research interests">
            <div className="grid gap-4">
              {interests.map((item, index) => (
                <Reveal key={item.name} delay={index * 0.07}>
                  <article className="rounded-[22px] border border-white/10 bg-surface p-7 transition-colors hover:border-white/20">
                    <h4 className="text-[21px] font-semibold tracking-[-.03em]">{item.name}</h4>
                    <p className="mt-3 text-[15px] leading-[1.6] text-muted">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="flex flex-wrap gap-2 pt-3">
                {skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-white/[.05] px-4 py-2 text-[13px] text-muted">{skill}</span>)}
              </div>
              <Link to="/research" className="text-link mt-8 inline-flex items-center gap-2 text-[16px]">
                Explore my research <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </Chapter>
        </div>
      </div>
    </section>
  );
}
