import { useEffect, useRef } from "react";
import { marqueeGifs } from "../data/content";

function triple(items: readonly string[]) {
  return [...items, ...items, ...items];
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

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

  const row1 = triple(marqueeGifs.slice(0, 11));
  const row2 = triple(marqueeGifs.slice(11));

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <div ref={row1Ref} className="flex w-max gap-3 will-change-transform">
          {row1.map((src, index) => (
            <img
              key={`row1-${index}`}
              src={src}
              alt=""
              width={420}
              height={270}
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
        <div ref={row2Ref} className="flex w-max gap-3 will-change-transform">
          {row2.map((src, index) => (
            <img
              key={`row2-${index}`}
              src={src}
              alt=""
              width={420}
              height={270}
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
