import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { ScrollFade } from "../components/ScrollFade";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { WorkVisual } from "../components/WorkVisual";
import type { WorkItem } from "../data/content";

export function SectionIndexPage({
  title,
  items,
  basePath,
}: {
  title: string;
  items: readonly WorkItem[];
  basePath: string;
}) {
  return (
    <PageShell>
      <section className="tile">
        <div className="mx-auto max-w-[980px]">
          <h1 className="font-display text-[40px] font-semibold leading-[1.1] text-ink">{title}</h1>
          <div className="mt-12 flex flex-col gap-16">
            {items.map((item) => (
              <ScrollFade key={item.slug}>
                <article className="glass rounded-[18px] p-6">
                  <p className="relative text-[14px] tracking-[-0.224px] text-[#7a7a7a]">
                    {item.number} · {item.category}
                  </p>
                  <h2 className="relative mt-2 font-display text-[28px] font-semibold leading-[1.14] tracking-[-0.28px]">
                    <Link to={`${basePath}/${item.slug}`} className="text-ink no-underline">
                      {item.name}
                    </Link>
                  </h2>
                  <p className="relative mt-4 max-w-[720px] text-[17px] leading-[1.47] tracking-[-0.374px]">
                    {item.summary}
                  </p>
                  <div className="relative mt-6 flex flex-wrap items-center gap-3">
                    {item.paperHref ? <LiveProjectButton href={item.paperHref} label="Read Paper" /> : null}
                    {item.href && item.linkLabel ? (
                      <LiveProjectButton href={item.href} label={item.linkLabel} variant="secondary" />
                    ) : null}
                    <Link to={`${basePath}/${item.slug}`} className="text-link">
                      Learn more
                    </Link>
                  </div>
                  <div className="relative">
                    <WorkVisual item={item} />
                  </div>
                </article>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
