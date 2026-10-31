import type { CSSProperties, ReactNode } from "react";
import type { WorkItem } from "../data/content";

const radius = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";

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
  return (
    <div
      className={`flex min-h-0 flex-col justify-end overflow-hidden border border-[#D7E2EA]/20 p-4 text-[#D7E2EA] sm:p-5 ${radius} ${className ?? ""}`}
      style={{ background: gradient, ...style }}
    >
      <p className="font-light uppercase tracking-widest opacity-70 text-xs sm:text-sm">
        {kicker}
      </p>
      <p
        className="mt-1 font-black uppercase leading-none"
        style={{ fontSize: "clamp(1.6rem, 3.4vw, 3.6rem)" }}
      >
        {value}
      </p>
      <p
        className="mt-2 max-w-xl font-light leading-snug opacity-80"
        style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)" }}
      >
        {note}
      </p>
      {children}
    </div>
  );
}

function SafetyDiagram() {
  return (
    <svg viewBox="0 0 360 72" className="mt-4 h-16 w-full max-w-md" aria-hidden="true">
      <rect x="1" y="8" width="140" height="56" rx="28" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <text x="71" y="32" textAnchor="middle" fill="#D7E2EA" fontSize="13" fontFamily="Kanit, sans-serif">
        Adversary
      </text>
      <text x="71" y="50" textAnchor="middle" fill="#D7E2EA" fontSize="11" opacity="0.7" fontFamily="Kanit, sans-serif">
        policy gradient
      </text>
      <path d="M150 28 H200" stroke="#D7E2EA" strokeWidth="2" />
      <path d="M200 44 H150" stroke="#D7E2EA" strokeWidth="2" />
      <path d="M194 24 l8 4 l-8 4" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <path d="M156 40 l-8 4 l8 4" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <rect x="210" y="8" width="148" height="56" rx="28" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <text x="284" y="32" textAnchor="middle" fill="#D7E2EA" fontSize="13" fontFamily="Kanit, sans-serif">
        Defender
      </text>
      <text x="284" y="50" textAnchor="middle" fill="#D7E2EA" fontSize="11" opacity="0.7" fontFamily="Kanit, sans-serif">
        system prompt
      </text>
    </svg>
  );
}

function DistillDiagram() {
  return (
    <svg viewBox="0 0 360 72" className="mt-4 h-16 w-full max-w-md" aria-hidden="true">
      <rect x="1" y="12" width="130" height="48" rx="24" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <text x="66" y="41" textAnchor="middle" fill="#D7E2EA" fontSize="13" fontFamily="Kanit, sans-serif">
        GPT-4o-mini
      </text>
      <path d="M140 36 H168" stroke="#D7E2EA" strokeWidth="2" />
      <path d="M160 30 l10 6 l-10 6" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <text x="180" y="28" textAnchor="middle" fill="#D7E2EA" fontSize="11" fontFamily="Kanit, sans-serif">
        Triad
      </text>
      <path d="M198 36 H226" stroke="#D7E2EA" strokeWidth="2" />
      <path d="M218 30 l10 6 l-10 6" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <rect x="228" y="12" width="130" height="48" rx="24" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <text x="293" y="41" textAnchor="middle" fill="#D7E2EA" fontSize="13" fontFamily="Kanit, sans-serif">
        DistilBERT
      </text>
    </svg>
  );
}

function BiteBiteDiagram() {
  return (
    <svg viewBox="0 0 360 72" className="mt-4 h-16 w-full max-w-md" aria-hidden="true">
      <rect x="1" y="12" width="100" height="48" rx="24" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <text x="51" y="41" textAnchor="middle" fill="#D7E2EA" fontSize="13" fontFamily="Kanit, sans-serif">
        Photo
      </text>
      <path d="M108 36 H132" stroke="#D7E2EA" strokeWidth="2" />
      <path d="M124 30 l10 6 l-10 6" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <rect x="134" y="12" width="110" height="48" rx="24" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <text x="189" y="41" textAnchor="middle" fill="#D7E2EA" fontSize="12" fontFamily="Kanit, sans-serif">
        GPT-4o Vision
      </text>
      <path d="M250 36 H274" stroke="#D7E2EA" strokeWidth="2" />
      <path d="M266 30 l10 6 l-10 6" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <rect x="276" y="12" width="82" height="48" rx="24" fill="none" stroke="#D7E2EA" strokeWidth="2" />
      <text x="317" y="41" textAnchor="middle" fill="#D7E2EA" fontSize="13" fontFamily="Kanit, sans-serif">
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
    <div className="mt-4 grid min-h-0 flex-1 grid-cols-[40%_60%] gap-3 md:mt-6">
      <div className="flex min-h-0 flex-col gap-3">
        <Panel {...item.leftTop} className="min-h-0 flex-1" />
        <Panel {...item.leftBottom} className="min-h-0 flex-1" />
      </div>
      <Panel {...item.feature} className="h-full">
        <Diagram />
      </Panel>
    </div>
  );
}
