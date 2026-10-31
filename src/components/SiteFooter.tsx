import { githubProfile } from "../data/content";

export function SiteFooter() {
  return (
    <footer className="bg-parchment px-6 py-16 text-[#333333]">
      <div className="mx-auto flex max-w-[980px] flex-col gap-4">
        <p className="text-[12px] leading-none tracking-[-0.12px]">Qikang Yan</p>
        <a href={githubProfile} className="text-link text-[17px] leading-[2.41]" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
