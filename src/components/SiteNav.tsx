import { Link } from "react-router-dom";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/#research" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNav({ className }: { className?: string }) {
  return (
    <nav className={className ?? "flex justify-between px-6 pt-6 md:px-10 md:pt-8"}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] no-underline transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
