import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", external = false, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`button button-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}
