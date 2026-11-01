import { ArrowLeft, ArrowRight, ZoomIn } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Lightbox } from "../components/Lightbox";
import { PageShell } from "../components/PageShell";
import { Reveal } from "../components/Reveal";
import { projectDetails, type DetailFigure } from "../data/details";

function idFor(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function DetailPage({ section }: { section: "research" | "products" }) {
  const { slug } = useParams();
  const detail = slug ? projectDetails[slug] : undefined;
  const [active, setActive] = useState("");
  const [lightbox, setLightbox] = useState<DetailFigure | null>(null);
  const peers = useMemo(() => Object.values(projectDetails).filter((item) => item.section === section), [section]);
  const currentIndex = detail ? peers.findIndex((item) => item.slug === detail.slug) : -1;

  useEffect(() => {
    if (!detail) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    detail.sections.forEach((block) => {
      const node = document.getElementById(idFor(block.heading));
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [detail]);

  if (!detail || detail.section !== section) {
    return (
      <PageShell>
        <section className="section-pad flex min-h-[72vh] flex-col items-center justify-center text-center">
          <p className="text-[13px] uppercase tracking-[.14em] text-action">404</p>
          <h1 className="mt-5 font-display text-[clamp(48px,8vw,90px)] font-semibold">Project not found.</h1>
          <Link to={`/${section}`} className="button button-primary mt-8">Back to {section}</Link>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <article>
        <header className="section-pad pb-16 pt-[clamp(130px,16vw,210px)]">
          <div className="container-content">
            <div className="flex items-center gap-3 text-[14px]">
              <Link to="/" className="text-link inline-flex items-center gap-2">
                <ArrowLeft size={15} aria-hidden="true" /> Home
              </Link>
              <span className="text-quiet" aria-hidden="true">/</span>
              <Link to={detail.backTo} className="text-link">{detail.backLabel}</Link>
            </div>
            <p className="mt-12 text-[12px] font-medium uppercase tracking-[.13em] text-quiet">{detail.kicker}</p>
            <h1 className="mt-5 max-w-[960px] font-display text-[clamp(38px,6.3vw,78px)] font-semibold leading-[1.02] tracking-[-.055em]">{detail.title}</h1>
            <p className="mt-7 max-w-[720px] text-[16px] leading-[1.6] text-muted">{detail.authors}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {detail.paperHref ? <Button href={detail.paperHref} external>Read paper</Button> : null}
              {detail.externalHref && detail.externalLabel ? (
                <Button href={detail.externalHref} external variant="secondary">{detail.externalLabel}</Button>
              ) : null}
            </div>
          </div>
        </header>

        <nav className="glass-nav sticky top-12 z-30 overflow-x-auto" aria-label="Project sections">
          <ul className="mx-auto flex w-max min-w-full max-w-[980px] items-center gap-6 px-6 py-3">
            {detail.sections.map((block) => {
              const id = idFor(block.heading);
              return <li key={id}><a href={`#${id}`} className={`whitespace-nowrap text-[13px] no-underline transition-colors ${active === id ? "text-white" : "text-quiet hover:text-muted"}`}>{block.heading}</a></li>;
            })}
          </ul>
        </nav>

        <div className="section-pad pt-14">
          <div className="container-content">
            {detail.sections.map((block) => (
              <Reveal key={block.heading}>
                <section id={idFor(block.heading)} className="scroll-mt-28 border-b border-white/10 py-14 first:pt-4">
                  <div className="grid gap-7 min-[760px]:grid-cols-[220px_1fr]">
                    <h2 className="font-display text-[28px] font-semibold tracking-[-.04em]">{block.heading}</h2>
                    <div className="max-w-[700px] space-y-6">
                      {block.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 48)} className="text-[16px] leading-[1.75] text-muted">{paragraph}</p>)}
                    </div>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
        {detail.figures.length > 0 ? (
          <section className="section-pad pt-0">
            <div className="container-content flex flex-col gap-8">
              {detail.figures.map((figure) => (
                <Reveal key={figure.src}>
                  <button type="button" className="paper-surface group w-full text-left" onClick={() => setLightbox(figure)}>
                    <span className="relative block">
                      <img src={figure.src} alt={figure.alt} className="h-auto w-full" loading="lazy" />
                      <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition-opacity group-hover:opacity-100"><ZoomIn size={18} /></span>
                    </span>
                    <span className="block px-6 py-4 text-[13px] leading-[1.5] text-[#333]">{figure.caption}</span>
                  </button>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}
        <nav className="section-pad border-t border-white/10 py-16" aria-label="Other projects">
          <div className="container-content flex justify-between gap-6">
            {peers[currentIndex - 1] ? <Link to={`/${section}/${peers[currentIndex - 1].slug}`} className="text-link flex items-center gap-2"><ArrowLeft size={16} /> Previous</Link> : <span />}
            {peers[currentIndex + 1] ? <Link to={`/${section}/${peers[currentIndex + 1].slug}`} className="text-link flex items-center gap-2">Next <ArrowRight size={16} /></Link> : <span />}
          </div>
        </nav>
      </article>
      {lightbox ? <Lightbox {...lightbox} onClose={() => setLightbox(null)} /> : null}
    </PageShell>
  );
}
