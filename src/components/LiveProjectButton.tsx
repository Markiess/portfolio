type LiveProjectButtonProps = {
  href: string;
  label: string;
};

export function LiveProjectButton({ href, label }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-block shrink-0 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] no-underline transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      {label}
    </a>
  );
}
