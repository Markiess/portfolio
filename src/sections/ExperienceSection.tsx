import { experience } from "../data/content";

export function ExperienceSection() {
  return (
    <section id="experience" className="tile">
      <div className="mx-auto max-w-[980px]">
        <h2 className="text-center font-display text-[40px] font-semibold leading-[1.1] text-ink">
          Experience
        </h2>
        <ul className="mt-12">
          {experience.map((item) => (
            <li key={item.number} className="border-t border-hairline py-6">
              <div className="flex gap-6">
                <span className="w-10 shrink-0 text-[14px] font-semibold tracking-[-0.224px] text-ink">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2 max-w-[720px] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-ink">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
