import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/Button";
import { CountUp } from "../components/CountUp";
import { PageShell } from "../components/PageShell";
import { Reveal } from "../components/Reveal";
import { SpotlightCard } from "../components/SpotlightCard";
import type { WorkItem } from "../data/content";

const metrics: Record<string, { value: number; decimals?: number; prefix?: string; suffix?: string; label: string; secondary?: string }> = {
  "llm-safety": { value: 0.06, decimals: 2, label: "Final attack success rate", secondary: "Down from 0.42" },
  clickbait: { value: 80.09, decimals: 2, suffix: "%", label: "Test accuracy", secondary: "66M-parameter student" },
  bitebite: { value: 2.1, decimals: 1, prefix: "v", label: "Current release", secondary: "AI nutrition tracking" },
};

export function SectionIndexPage({
  title,
  intro,
  items,
  basePath,
}: {
  title: string;
  intro: string;
  items: readonly WorkItem[];
  basePath: string;
}) {
  return (
    <PageShell>
      <section className="section-pad pt-[clamp(130px,16vw,220px)]">
        <div className="container-content">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[.17em] text-action">Selected work</p>
            <h1 className="mt-5 font-display text-[clamp(52px,9vw,112px)] font-semibold leading-[.92] tracking-[-.065em] text-ink">{title}</h1>
            <p className="mt-8 max-w-[660px] text-[clamp(19px,2.4vw,28px)] leading-[1.35] text-muted">{intro}</p>
          </Reveal>
          <div className="mt-[clamp(80px,12vw,150px)] flex flex-col gap-8">
            {items.map((item, index) => {
              const metric = metrics[item.slug];
              return (
              <Reveal key={item.slug} delay={index * 0.08}>
                <SpotlightCard className="p-7 sm:p-10">
                  <div className="relative z-10 grid gap-12 min-[760px]:grid-cols-[1.3fr_.7fr] min-[760px]:items-end">
                    <div>
                      <p className="text-[12px] font-medium uppercase tracking-[.12em] text-quiet">
                    {item.number} · {item.category}
                      </p>
                      <h2 className="mt-5 font-display text-[clamp(27px,4vw,46px)] font-semibold leading-[1.05] tracking-[-.05em]">
                        <Link to={`${basePath}/${item.slug}`} className="text-ink no-underline">{item.name}</Link>
                      </h2>
                      <p className="mt-6 max-w-[640px] text-[16px] leading-[1.65] text-muted">{item.summary}</p>
                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link to={`${basePath}/${item.slug}`} className="button button-primary">
                          <span className="relative z-10 flex items-center gap-2">Explore project <ArrowUpRight size={16} /></span>
                        </Link>
                        {item.paperHref ? <Button href={item.paperHref} external variant="secondary">Read paper</Button> : null}
                        {item.href && item.linkLabel ? <Button href={item.href} external variant="secondary">{item.linkLabel}</Button> : null}
                      </div>
                    </div>
                    {metric ? (
                      <div className="border-l border-white/10 pl-7 min-[760px]:text-right">
                        <p className="font-display text-[clamp(48px,7vw,86px)] font-semibold leading-none tracking-[-.065em]">
                          <CountUp value={metric.value} decimals={metric.decimals} prefix={metric.prefix} suffix={metric.suffix} />
                        </p>
                        <p className="mt-4 text-[13px] text-muted">{metric.label}</p>
                        {metric.secondary ? <p className="mt-1 text-[12px] text-quiet">{metric.secondary}</p> : null}
                      </div>
                    ) : null}
                  </div>
                </SpotlightCard>
              </Reveal>
            )})}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
