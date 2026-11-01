import { Check, Copy, Github, Mail } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";

export function SiteFooter() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#050505] px-6 py-24 text-ink">
      <div className="mx-auto max-w-[980px]">
        <p className="text-[13px] font-medium uppercase tracking-[.14em] text-muted">Let&apos;s connect</p>
        <h2 className="mt-5 max-w-[800px] font-display text-[clamp(38px,7vw,76px)] font-semibold leading-[1.02]">
          Have an idea worth exploring?
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="button button-primary">
            <Mail size={17} aria-hidden="true" /><span className="relative z-10">{profile.email}</span>
          </a>
          <button type="button" onClick={copyEmail} className="button button-secondary" aria-label="Copy email address">
            {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
            <span className="relative z-10">{copied ? "Copied" : "Copy email"}</span>
          </button>
          <a href={profile.github} className="button button-secondary" target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" /><span className="relative z-10">GitHub</span>
          </a>
        </div>
        <div className="mt-24 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-quiet">
          <p>© {new Date().getFullYear()} Qikang Yan</p>
          <p>Designed with clarity and restraint.</p>
        </div>
      </div>
    </footer>
  );
}
