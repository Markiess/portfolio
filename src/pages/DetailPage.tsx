import { Link, useParams } from "react-router-dom";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { PageShell } from "../components/PageShell";
import { ScrollFade } from "../components/ScrollFade";
import { projectDetails } from "../data/details";

export function DetailPage({ section }: { section: "research" | "products" }) {
  const { slug } = useParams();
  const detail = slug ? projectDetails[slug] : undefined;
  const matchesSection =
    (section === "research" && (slug === "llm-safety" || slug === "clickbait")) ||
    (section === "products" && slug === "bitebite");

  if (!detail || !matchesSection) {
    return (
      <PageShell>
        <section className="tile">
          <h1 className="font-display text-[40px] font-semibold">Not found</h1>
          <Link to="/" className="text-link mt-6 inline-block">
            Back home
          </Link>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
        <article className="tile">
          <div className="mx-auto max-w-[980px]">
            <Link to={detail.backTo} className="text-link text-[17px]">
              {detail.backLabel}
            </Link>
            <p className="mt-8 text-[14px] tracking-[-0.224px] text-[#7a7a7a]">{detail.kicker}</p>
            <h1
              className="mt-3 font-display font-semibold text-ink"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: 1.1,
                letterSpacing: "-0.28px",
              }}
            >
              {detail.title}
            </h1>
            <p className="mt-4 max-w-[720px] text-[17px] leading-[1.47] tracking-[-0.374px]">{detail.authors}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {detail.paperHref ? <LiveProjectButton href={detail.paperHref} label="Read Paper" /> : null}
              {detail.externalHref && detail.externalLabel ? (
                <LiveProjectButton href={detail.externalHref} label={detail.externalLabel} variant="secondary" />
              ) : null}
            </div>
          </div>
        </article>

        {detail.sections.map((block) => (
          <ScrollFade key={block.heading}>
            <section className="tile">
              <div className="mx-auto max-w-[980px]">
                <h2 className="text-[17px] font-semibold leading-[1.24] tracking-[-0.374px]">{block.heading}</h2>
                <div className="mt-4 max-w-[720px] space-y-4">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="text-[17px] font-normal leading-[1.47] tracking-[-0.374px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </ScrollFade>
        ))}

        {detail.figures.length > 0 ? (
          <section className="tile">
            <div className="mx-auto flex max-w-[980px] flex-col gap-6">
              {detail.figures.map((figure) => (
                <ScrollFade key={figure.src}>
                  <figure className="overflow-hidden rounded-[18px] border border-hairline bg-white">
                    <img src={figure.src} alt={figure.alt} className="h-auto w-full" />
                    <figcaption className="px-6 py-4 text-[14px] leading-[1.43] tracking-[-0.224px] text-[#333333]">
                      {figure.caption}
                    </figcaption>
                  </figure>
                </ScrollFade>
              ))}
            </div>
          </section>
        ) : null}
    </PageShell>
  );
}
