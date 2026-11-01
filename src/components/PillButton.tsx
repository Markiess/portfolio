import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

type PillButtonProps = {
  to: string;
  label: string;
  size?: "md" | "lg";
  solid?: boolean;
  onClick?: () => void;
};

export function PillButton({ to, label, size = "md", solid = false, onClick }: PillButtonProps) {
  const large = size === "lg";
  const className = `pill-link${large ? " pill-link-lg" : ""}${solid ? " pill-link-solid" : ""}`;
  const content = (
    <>
      <span className={`pill-icon flex items-center justify-center rounded-full border border-white/35 ${large ? "h-7 w-7" : "h-5 w-5"}`}>
        <Plus size={large ? 16 : 12} aria-hidden="true" />
      </span>
      <span>{label}</span>
    </>
  );

  return to.startsWith("#") ? (
    <a href={to} className={className} onClick={onClick}>{content}</a>
  ) : (
    <Link to={to} className={className} onClick={onClick}>{content}</Link>
  );
}
