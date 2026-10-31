import type { CSSProperties, ReactNode } from "react";
import type { WorkItem } from "../data/content";

const radius = "rounded-[18px]";

function Panel({
  kicker,
  value,
  note,
  gradient,
  className,
  style,
  children,
}: {
  kicker: string;
  value: string;
  note: string;
  gradient: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  void gradient;
  return (
    <div
      className={`flex flex-col border border-hairline bg-white p-6 text-ink ${radius} ${className ?? ""}`}
      style={style}
    >
      <p className="text-[14px] font-normal tracking-[-0.224px] text-[#7a7a7a]">{kicker}</p>
      <p className="mt-2 font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.374px] text-ink">
        {value}
      </p>
      <p className="mt-2 max-w-xl text-[14px] leading-[1.43] tracking-[-0.224px] text-ink">{note}</p>
      {children}
    </div>
  );
}

function SafetyDiagram() {
  return (
    <svg viewBox="0 0 360 72" className="mt-4 h-16 w-full max-w-md" aria-hidden="true">
      <rect x="1" y="8" width="140" height="56" rx="28" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <text x="71" y="32" textAnchor="middle" fill="#1d1d1f" fontSize="13" fontFamily="Inter, sans-serif">
        Adversary
      </text>
      <text x="71" y="50" textAnchor="middle" fill="#1d1d1f" fontSize="11" opacity="0.7" fontFamily="Inter, sans-serif">
        policy gradient
      </text>
      <path d="M150 28 H200" stroke="#1d1d1f" strokeWidth="2" />
      <path d="M200 44 H150" stroke="#1d1d1f" strokeWidth="2" />
      <path d="M194 24 l8 4 l-8 4" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <path d="M156 40 l-8 4 l8 4" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <rect x="210" y="8" width="148" height="56" rx="28" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <text x="284" y="32" textAnchor="middle" fill="#1d1d1f" fontSize="13" fontFamily="Inter, sans-serif">
        Defender
      </text>
      <text x="284" y="50" textAnchor="middle" fill="#1d1d1f" fontSize="11" opacity="0.7" fontFamily="Inter, sans-serif">
        system prompt
      </text>
    </svg>
  );
}

function DistillDiagram() {
  return (
    <svg viewBox="0 0 360 72" className="mt-4 h-16 w-full max-w-md" aria-hidden="true">
      <rect x="1" y="12" width="130" height="48" rx="24" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <text x="66" y="41" textAnchor="middle" fill="#1d1d1f" fontSize="13" fontFamily="Inter, sans-serif">
        GPT-4o-mini
      </text>
      <path d="M140 36 H168" stroke="#1d1d1f" strokeWidth="2" />
      <path d="M160 30 l10 6 l-10 6" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <text x="180" y="28" textAnchor="middle" fill="#1d1d1f" fontSize="11" fontFamily="Inter, sans-serif">
        Triad
      </text>
      <path d="M198 36 H226" stroke="#1d1d1f" strokeWidth="2" />
      <path d="M218 30 l10 6 l-10 6" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <rect x="228" y="12" width="130" height="48" rx="24" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <text x="293" y="41" textAnchor="middle" fill="#1d1d1f" fontSize="13" fontFamily="Inter, sans-serif">
        DistilBERT
      </text>
    </svg>
  );
}

function BiteBiteDiagram() {
  return (
    <svg viewBox="0 0 360 72" className="mt-4 h-16 w-full max-w-md" aria-hidden="true">
      <rect x="1" y="12" width="100" height="48" rx="24" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <text x="51" y="41" textAnchor="middle" fill="#1d1d1f" fontSize="13" fontFamily="Inter, sans-serif">
        Photo
      </text>
      <path d="M108 36 H132" stroke="#1d1d1f" strokeWidth="2" />
      <path d="M124 30 l10 6 l-10 6" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <rect x="134" y="12" width="110" height="48" rx="24" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <text x="189" y="41" textAnchor="middle" fill="#1d1d1f" fontSize="12" fontFamily="Inter, sans-serif">
        GPT-4o Vision
      </text>
      <path d="M250 36 H274" stroke="#1d1d1f" strokeWidth="2" />
      <path d="M266 30 l10 6 l-10 6" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <rect x="276" y="12" width="82" height="48" rx="24" fill="none" stroke="#1d1d1f" strokeWidth="2" />
      <text x="317" y="41" textAnchor="middle" fill="#1d1d1f" fontSize="13" fontFamily="Inter, sans-serif">
        Edit
      </text>
    </svg>
  );
}

const diagrams = {
  safety: SafetyDiagram,
  distill: DistillDiagram,
  bitebite: BiteBiteDiagram,
};

export function WorkVisual({ item }: { item: WorkItem }) {
  const Diagram = diagrams[item.diagram];

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      <Panel {...item.leftTop} />
      <Panel {...item.leftBottom} />
      <Panel {...item.feature}>
        <Diagram />
      </Panel>
    </div>
  );
}
