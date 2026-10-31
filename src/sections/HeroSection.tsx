import { ContactButton } from "../components/ContactButton";
import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { portraitSrc } from "../data/content";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Price", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip">
      <FadeIn delay={0} y={-20} className="relative z-20">
        <nav className="flex justify-between px-6 pt-6 md:px-10 md:pt-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <FadeIn delay={0.15} y={40} className="relative z-20">
        <div className="overflow-hidden">
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap font-black uppercase leading-none tracking-tight text-[14vw] sm:mt-4 sm:text-[14.4vw] md:-mt-5 md:text-[14.4vw] lg:text-[14.4vw]">
            Hi, i'm Qikang
          </h1>
        </div>
      </FadeIn>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <div className="pointer-events-auto">
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <img
                src={portraitSrc}
                alt="Portrait of Qikang Yan"
                className="h-auto w-full"
              />
            </Magnet>
          </FadeIn>
        </div>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
