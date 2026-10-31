import { marqueeRowOne, marqueeRowTwo } from "../data/content";

const chips = [...marqueeRowOne, ...marqueeRowTwo];

export function MarqueeSection() {
  return (
    <section className="tile bg-parchment" aria-label="Skills and research keywords">
      <ul className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-3">
        {chips.map((label) => (
          <li
            key={label}
            className="rounded-full border border-hairline bg-white px-4 py-3 text-[14px] tracking-[-0.224px] text-ink"
          >
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
