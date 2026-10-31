export const githubProfile = "https://github.com/Markiess";

export const marqueeRowOne = [
  "Python",
  "Java",
  "C",
  "JavaScript",
  "SQL",
  "MATLAB",
  "PyTorch",
  "Pandas",
  "Node.js",
  "React Native",
  "vLLM",
] as const;

export const marqueeRowTwo = [
  "LLM Safety",
  "Knowledge Distillation",
  "HarmBench",
  "DistilBERT",
  "Machine Learning",
  "NLP",
  "Multimodal",
  "Curiosity",
  "Teaching",
  "Cursor",
  "Claude Code",
] as const;

export const experience = [
  {
    number: "01",
    name: "Edinburgh",
    description:
      "BSc Computer Science, September 2023–June 2027. Ranked 1st in year 1. Courses include Data Structures & Algorithms, Intelligent Agents & Reasoning, and Machine Learning.",
  },
  {
    number: "02",
    name: "UPenn",
    description:
      "Exchange, August 2025–June 2026, across AI, NLP, numerical optimization, and big data. Fall 2025 GPA 4.0.",
  },
  {
    number: "03",
    name: "Inspur",
    description:
      "AI Manufacturing Intern, June–August 2024. Labeled and organized computer-vision datasets for industrial monitoring, self-studied Transformers, CNNs, and decision trees, and recorded experimental observations.",
  },
  {
    number: "04",
    name: "New Oriental",
    description:
      "Teaching assistant, June–August 2023. Tutored computer science, mathematics, and physics for an international program.",
  },
] as const;

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

export const aboutCopy =
  "I am a computer science student at the University of Edinburgh, BSc from September 2023 to June 2027, and I ranked 1st in year 1. I was an exchange student at the University of Pennsylvania from August 2025 to June 2026, with a 4.0 GPA in fall 2025. My interests are how language models learn, curiosity, and teaching, including safety alignment, knowledge distillation, and multimodal applications.";

export const heroTagline =
  "a cs & ai student exploring how language models learn, stay safe, and teach";

export const portraitSrc =
  "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";

export const aboutImages = {
  moon: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
  bottomLeft:
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
  lego: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
  bottomRight:
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
} as const;
