export const profile = {
  name: "Qikang Yan",
  email: "1438430734@qq.com",
  github: "https://github.com/Markiess",
  tagline: "CS & AI student exploring how language models learn, stay safe, and teach.",
  intro:
    "I study computer science across Edinburgh and Penn, and build at the intersection of language-model safety, efficient learning, and useful multimodal products.",
} as const;

export const education = [
  {
    period: "2023 — 2027",
    name: "University of Edinburgh",
    role: "BSc Computer Science",
    description: "Ranked 1st in Year 1. Coursework includes algorithms, intelligent agents, reasoning, and machine learning.",
    metric: "1st",
    metricLabel: "Year 1 rank",
  },
  {
    period: "2025 — 2026",
    name: "University of Pennsylvania",
    role: "Exchange Student",
    description: "Studied AI, NLP, numerical optimization, and big data.",
    metric: "4.0",
    metricLabel: "Fall 2025 GPA",
  },
] as const;

export const workExperience = [
  {
    period: "Jun — Aug 2024",
    name: "Inspur",
    role: "AI Manufacturing Intern",
    description: "Organized computer-vision datasets for industrial monitoring and explored Transformers, CNNs, and decision trees.",
  },
  {
    period: "Jun — Aug 2023",
    name: "New Oriental",
    role: "Teaching Assistant",
    description: "Tutored computer science, mathematics, and physics for an international program.",
  },
] as const;

export const interests = [
  { name: "LLM Safety", description: "Adaptive attacks, system-prompt defenses, and the safety–utility trade-off." },
  { name: "Knowledge Distillation", description: "Transferring expensive model judgments into smaller, efficient models." },
  { name: "Multimodal Products", description: "Turning vision-language models into practical, correctable user experiences." },
] as const;

export const skills = ["Python", "PyTorch", "NLP", "React Native", "Node.js", "LLM Safety", "Multimodal AI"] as const;
