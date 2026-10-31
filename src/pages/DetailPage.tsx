import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { SiteNav } from "../components/SiteNav";
import { projectDetails } from "../data/details";

export function DetailPage({ section }: { section: "research" | "products" }) {
  const { slug } = useParams();
  const detail = slug ? projectDetails[slug] : undefined;
  const expectedSection = section === "research" ? "research" : "products";
  const matchesSection =
    (expectedSection === "research" && (slug === "llm-safety" || slug === "clickbait")) ||
    (expectedSection === "products" && slug === "bitebite");

  if (!detail || !matchesSection) {
    return (
      <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA]">
        <SiteNav />
        <div className="px-6 py-24 md:px-10">
          <h1 className="hero-heading font-black uppercase" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
            Not found
          </h1>
          <Link to="/" className="mt-8 inline-block uppercase tracking-widest text-[#D7E2EA]">
            Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA]" style={{ overflowX: "clip" }}>
      <SiteNav />
      <article className="mx-auto max-w-5xl px-5 pb-24 pt-10 sm:px-8 md:px-10">
        <FadeIn y={20}>
          <Link
            to={detail.backTo}
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] no-underline transition-opacity duration-200 hover:opacity-70"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {detail.backLabel}
          </Link>
        </FadeIn>
        <FadeIn delay={0.08} y={24}>
          <p className="mt-8 text-xs font-light uppercase tracking-widest opacity-70 sm:text-sm">
            {detail.kicker}
          </p>
          <h1
            className="hero-heading mt-3 font-black uppercase leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.7rem, 4.4vw, 3.4rem)" }}
          >
            {detail.title}
          </h1>
          <p className="mt-4 max-w-3xl font-medium leading-relaxed" style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}>
            {detail.authors}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {detail.paperHref ? (
              <LiveProjectButton href={detail.paperHref} label="Read Paper" />
            ) : null}
            {detail.externalHref && detail.externalLabel ? (
              <LiveProjectButton href={detail.externalHref} label={detail.externalLabel} />
            ) : null}
          </div>
        </FadeIn>

        {detail.sections.map((block, index) => (
          <FadeIn key={block.heading} delay={0.05 * index} y={24} className="mt-12 border-t border-[#D7E2EA]/15 pt-8">
            <h2 className="font-medium uppercase tracking-widest" style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}>
              {block.heading}
            </h2>
            <div className="mt-4 max-w-3xl space-y-4">
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="font-light leading-relaxed opacity-80" style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        ))}

        {detail.figures.length > 0 ? (
          <div className="mt-14 flex flex-col gap-10">
            {detail.figures.map((figure, index) => (
              <FadeIn key={figure.src} delay={0.04 * index} y={20}>
                <figure className="overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-white sm:rounded-[50px]">
                  <img src={figure.src} alt={figure.alt} className="h-auto w-full" />
                  <figcaption className="bg-[#0C0C0C] px-5 py-4 font-light leading-relaxed text-[#D7E2EA] opacity-80 sm:px-6">
                    {figure.caption}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        ) : null}
      </article>
    </main>
  );
}
