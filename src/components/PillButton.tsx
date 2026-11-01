import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

type PillButtonProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

export function PillButton({ to, label, onClick }: PillButtonProps) {
  const content = (
    <>
      <span className="pill-icon flex h-5 w-5 items-center justify-center rounded-full border border-white/35">
        <Plus size={12} aria-hidden="true" />
      </span>
      <span>{label}</span>
    </>
  );

  return to.startsWith("#") ? (
    <a href={to} className="pill-link" onClick={onClick}>{content}</a>
  ) : (
    <Link to={to} className="pill-link" onClick={onClick}>{content}</Link>
  );
}
