import { Link } from "react-router-dom";
import { ContactButton } from "../components/ContactButton";
import { heroTagline, portraitSrc } from "../data/content";

export function HeroSection() {
  return (
    <section className="tile bg-white text-center">
      <div className="mx-auto flex max-w-[980px] flex-col items-center">
        <h1
          className="font-display font-semibold text-ink"
          style={{
            fontSize: "clamp(28px, 5vw, 56px)",
            lineHeight: 1.07,
            letterSpacing: "-0.28px",
          }}
        >
          Hi, i'm Qikang
        </h1>
        <p
          className="mt-4 max-w-[640px] font-display text-ink"
          style={{ fontSize: "21px", fontWeight: 600, lineHeight: 1.19, letterSpacing: "0.231px" }}
        >
          {heroTagline}
        </p>
        <img
          src={portraitSrc}
          alt="Portrait of Qikang Yan"
          className="mt-12 h-auto w-[min(420px,80%)]"
          style={{ boxShadow: "3px 5px 30px rgba(0, 0, 0, 0.22)" }}
        />
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <ContactButton />
          <Link to="/#research" className="btn-secondary">
            Research
          </Link>
        </div>
      </div>
    </section>
  );
}
