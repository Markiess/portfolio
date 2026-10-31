import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/#research" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <nav className="relative mx-auto flex h-11 max-w-[1440px] items-center px-5" aria-label="Primary">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center min-[834px]:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-[12px] font-normal tracking-[-0.12px] text-white no-underline min-[834px]:static min-[834px]:translate-x-0"
          onClick={() => setOpen(false)}
        >
          Qikang Yan
        </Link>
        <ul className="ml-auto hidden items-center gap-5 min-[834px]:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="text-[12px] font-normal leading-none tracking-[-0.12px] text-white no-underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open ? (
        <ul id="mobile-nav" className="border-t border-white/10 bg-black px-5 py-2 min-[834px]:hidden">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="flex h-11 items-center text-[17px] tracking-[-0.374px] text-white no-underline"
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
