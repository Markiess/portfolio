import { ContactButton } from "../components/ContactButton";
import { aboutCopy } from "../data/content";

export function AboutSection() {
  return (
    <section id="about" className="tile bg-white">
      <div className="mx-auto max-w-[980px] text-center">
        <h2
          className="font-display text-[40px] font-semibold leading-[1.1] text-ink"
          style={{ letterSpacing: "0px" }}
        >
          About me
        </h2>
        <p className="mx-auto mt-6 max-w-[720px] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-ink">
          {aboutCopy}
        </p>
        <div className="mt-8">
          <ContactButton id="contact" />
        </div>
      </div>
    </section>
  );
}
