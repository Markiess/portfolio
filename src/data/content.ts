export type MetricPanel = {
  kicker: string;
  value: string;
  note: string;
  gradient: string;
};

export type WorkItem = {
  number: string;
  category: string;
  name: string;
  summary: string;
  slug: string;
  href?: string;
  linkLabel?: string;
  paperHref?: string;
  leftTop: MetricPanel;
  leftBottom: MetricPanel;
  feature: MetricPanel;
  diagram: "safety" | "distill" | "bitebite";
};

export const research: readonly WorkItem[] = [
  {
    number: "01",
    category: "Ren, Sarina, Shiv, and Mark",
    name: "Co-Evolving Prompt Defenses: Policy-Gradient Adversaries and Reflection-Based Optimization for LLM Safety",
    slug: "llm-safety",
    summary:
      "A frozen Llama-3.1-8B-Instruct is defended by evolving its system prompt while a policy-gradient adversary rewrites harmful requests. HarmBench ASR falls from 0.42 to 0.06.",
    paperHref: "/papers/co-evolving-prompt-defenses.pdf",
    leftTop: {
      kicker: "HarmBench ASR",
      value: "0.42",
      note: "Before co-evolution",
      gradient: "linear-gradient(160deg, #2a1238 0%, #0C0C0C 70%)",
    },
    leftBottom: {
      kicker: "HarmBench ASR",
      value: "0.06",
      note: "After four stages",
      gradient: "linear-gradient(200deg, #3a1848 0%, #18011F 55%, #0C0C0C 100%)",
    },
    feature: {
      kicker: "RLOO + length penalty",
      value: "0.52",
      note: "Peak HarmBench ASR with a 2262-character seed. Naive REINFORCE peaks at 0.24.",
      gradient: "linear-gradient(145deg, #18011F 0%, #7621B0 48%, #0C0C0C 100%)",
    },
    diagram: "safety",
  },
  {
    number: "02",
    category: "Carrie Li, Mark Yan, Minyu Deng, Zhiyuan Li",
    name: "Enhancing Digital Media Integrity: A Natural Language Processing Model for Clickbait Detection and Mitigation",
    slug: "clickbait",
    summary:
      "GPT-4o-mini soft labels are distilled into a 66M DistilBERT. On the cleaned Webis Clickbait test set, accuracy is 0.8009.",
    href: "https://github.com/Markiess/clickbait-detector",
    linkLabel: "GitHub",
    paperHref: "/papers/clickbait-detection.pdf",
    leftTop: {
      kicker: "Test accuracy",
      value: "80.09%",
      note: "Above a BERT-base baseline, at lower inference cost",
      gradient: "linear-gradient(165deg, #1c2430 0%, #0C0C0C 72%)",
    },
    leftBottom: {
      kicker: "Student model",
      value: "66M",
      note: "DistilBERT parameters",
      gradient: "linear-gradient(190deg, #243044 0%, #0C0C0C 100%)",
    },
    feature: {
      kicker: "Soft-label weight",
      value: "0.25",
      note: "alpha = 0.25 on GPT-4o-mini soft labels, plus hard labels",
      gradient: "linear-gradient(150deg, #121820 0%, #2a4560 42%, #0C0C0C 100%)",
    },
    diagram: "distill",
  },
];

export const products: readonly WorkItem[] = [
  {
    number: "01",
    category: "App Store",
    name: "BiteBite",
    slug: "bitebite",
    summary:
      "BiteBite Analyze & Track, on the App Store since November 2025, version 2.1.1. React Native and Node.js. GPT-4o Vision estimates calories and macros, and people can correct the result. No model was trained in-house.",
    href: "https://download.nutrisnap.live",
    linkLabel: "Download",
    leftTop: {
      kicker: "Stack",
      value: "React Native",
      note: "Node.js",
      gradient: "linear-gradient(160deg, #2a1810 0%, #0C0C0C 75%)",
    },
    leftBottom: {
      kicker: "Current version",
      value: "2.1.1",
      note: "BiteBite Analyze & Track",
      gradient: "linear-gradient(200deg, #4a2414 0%, #18011F 60%, #0C0C0C 100%)",
    },
    feature: {
      kicker: "Estimate, then correct",
      value: "TDEE",
      note: "Mifflin–St Jeor. Meal plans can be revised in natural language, and the model can switch by region.",
      gradient: "linear-gradient(145deg, #18011F 0%, #B600A8 38%, #BE4C00 78%, #0C0C0C 100%)",
    },
    diagram: "bitebite",
  },
];
