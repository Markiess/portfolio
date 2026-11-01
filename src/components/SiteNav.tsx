import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/research" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const nodes = ["about", "contact"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-ink transition-all duration-500 ${scrolled || open ? "glass-nav" : "bg-transparent"}`}>
      <nav className={`relative mx-auto flex max-w-[1440px] items-center px-5 transition-[height] duration-500 ${scrolled ? "h-12" : "h-14"}`} aria-label="Primary">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[.07] min-[834px]:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-[13px] font-medium tracking-[-0.01em] text-ink no-underline min-[834px]:static min-[834px]:translate-x-0"
          onClick={() => setOpen(false)}
        >
          Qikang Yan
        </Link>
        <ul className="ml-auto hidden items-center gap-5 min-[834px]:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`text-[13px] font-normal leading-none text-muted no-underline transition-colors hover:text-white ${
                  (item.href.startsWith("/#") ? activeSection === item.href.slice(2) : location.pathname === item.href) ? "!text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open ? (
        <ul id="mobile-nav" className="glass-nav flex h-[calc(100dvh-3.5rem)] flex-col justify-center border-t border-white/10 px-8 min-[834px]:hidden">
          {navItems.map((item, index) => (
            <li key={item.label} style={{ animationDelay: `${index * 60}ms` }}>
              <Link
                to={item.href}
                className="flex min-h-16 items-center border-b border-white/10 text-[clamp(28px,8vw,44px)] font-semibold tracking-[-.04em] text-ink no-underline"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
