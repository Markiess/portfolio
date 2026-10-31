type LiveProjectButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  onDark?: boolean;
};

export function LiveProjectButton({
  href,
  label,
  variant = "primary",
  onDark = false,
}: LiveProjectButtonProps) {
  const tone = variant === "secondary" ? "btn-secondary" : "btn-primary";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${tone}${onDark && variant === "secondary" ? " on-dark" : ""}`}
    >
      {label}
    </a>
  );
}
