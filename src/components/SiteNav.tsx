import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { githubProfile } from "../data/content";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Research", href: "/research" },
  { label: "Products", href: "/products" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-50 text-ink">
      <nav className="relative mx-auto flex h-11 max-w-[1440px] items-center px-5" aria-label="Primary">
        <button
          type="button"
          className="glass flex h-11 w-11 items-center justify-center rounded-full min-[834px]:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-[12px] font-normal tracking-[-0.12px] text-ink no-underline min-[834px]:static min-[834px]:translate-x-0"
          onClick={() => setOpen(false)}
        >
          Qikang Yan
        </Link>
        <ul className="ml-auto hidden items-center gap-5 min-[834px]:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="text-[12px] font-normal leading-none tracking-[-0.12px] text-ink no-underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !min-h-8 !px-3 !py-1 !text-[12px] !leading-none !tracking-[-0.12px]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {open ? (
        <ul id="mobile-nav" className="glass-nav border-t border-white/50 px-5 py-2 min-[834px]:hidden">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="flex h-11 items-center text-[17px] tracking-[-0.374px] text-ink no-underline"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 items-center text-[17px] tracking-[-0.374px] text-action no-underline"
            >
              Contact
            </a>
          </li>
        </ul>
      ) : null}
    </header>
  );
}
