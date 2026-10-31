import { useEffect, useRef } from "react";
import { marqueeRowOne, marqueeRowTwo } from "../data/content";

function triple(items: readonly string[]) {
  return [...items, ...items, ...items];
}

const chipClass =
  "inline-flex h-[72px] shrink-0 items-center rounded-2xl border border-[#D7E2EA]/30 px-8 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] sm:h-[96px] sm:px-10 sm:text-base md:h-[112px] md:text-lg";

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLUListElement>(null);
  const row2Ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!section || !row1 || !row2) return;

    const update = () => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      row1.style.transform = `translateX(${offset - 200}px)`;
      row2.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const row1 = triple(marqueeRowOne);
  const row2 = triple(marqueeRowTwo);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-label="Skills and research keywords"
    >
      <div className="flex flex-col gap-3">
        <ul ref={row1Ref} className="flex w-max list-none gap-3 will-change-transform">
          {row1.map((label, index) => (
            <li key={`row1-${label}-${index}`} className={chipClass}>
              {label}
            </li>
          ))}
        </ul>
        <ul ref={row2Ref} className="flex w-max list-none gap-3 will-change-transform">
          {row2.map((label, index) => (
            <li key={`row2-${label}-${index}`} className={chipClass}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
