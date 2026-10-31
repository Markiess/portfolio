import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { ScrollFade } from "../components/ScrollFade";
import { HeroSection } from "../sections/HeroSection";
import { marqueeRowOne, marqueeRowTwo } from "../data/content";

const entries = [
  {
    to: "/about",
    title: "About",
    text: "Computer science at Edinburgh, ranked 1st in year 1, and an exchange year at UPenn.",
  },
  {
    to: "/experience",
    title: "Experience",
    text: "Edinburgh, UPenn, Inspur, and New Oriental.",
  },
  {
    to: "/research",
    title: "Research",
    text: "Co-evolving prompt defenses, and clickbait detection by distillation.",
  },
  {
    to: "/products",
    title: "Products",
    text: "BiteBite Analyze & Track.",
  },
];

export function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <section className="tile">
        <div className="mx-auto grid max-w-[980px] gap-6 sm:grid-cols-2">
          {entries.map((entry) => (
            <ScrollFade key={entry.to}>
              <Link
                to={entry.to}
                className="glass block rounded-[18px] p-6 text-ink no-underline"
              >
                <h2 className="relative text-[21px] font-semibold leading-[1.19] tracking-[0.231px]">
                  {entry.title}
                </h2>
                <p className="relative mt-3 text-[17px] leading-[1.47] tracking-[-0.374px]">{entry.text}</p>
              </Link>
            </ScrollFade>
          ))}
        </div>
        <ul className="mx-auto mt-10 flex max-w-[980px] flex-wrap justify-center gap-3">
          {[...marqueeRowOne, ...marqueeRowTwo].map((label) => (
            <li key={label} className="chip rounded-full px-4 py-2 text-[14px] tracking-[-0.224px] text-ink">
              {label}
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
