export type DetailFigure = {
  src: string;
  alt: string;
  caption: string;
};

export type DetailSection = {
  heading: string;
  paragraphs: string[];
};

export type ProjectDetail = {
  slug: string;
  kicker: string;
  title: string;
  authors: string;
  backTo: string;
  backLabel: string;
  paperHref?: string;
  externalHref?: string;
  externalLabel?: string;
  sections: DetailSection[];
  figures: DetailFigure[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "llm-safety": {
    slug: "llm-safety",
    kicker: "STAT 4830 Final Project · University of Pennsylvania · Spring 2026",
    title:
      "Co-Evolving Prompt Defenses: Policy-Gradient Adversaries and Reflection-Based Optimization for LLM Safety",
    authors: "Ren, Sarina, Shiv, and Mark",
    backTo: "/research",
    backLabel: "Research",
    paperHref: "/papers/co-evolving-prompt-defenses.pdf",
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Aligned language models often refuse a harmful request in its direct form, then comply when the same request is recast as fiction, a persona, a clinical exercise, or a list of apparently benign sub-tasks. The paper studies a cheap defense surface: the system prompt. Unlike RLHF or supervised fine-tuning, changing the system prompt does not update the target model’s weights, can be deployed as a configuration change, and stays readable to a human auditor.",
          "The question is whether that surface can be optimized while an adaptive attacker is learning. Safety is written as a minimax game over attack success rate: minimize over defense prompts, and maximize over the adversary’s LoRA weights, the rate at which rewritten harmful requests succeed.",
        ],
      },
      {
        heading: "Method",
        paragraphs: [
          "The target is frozen Llama-3.1-8B-Instruct, served at temperature 0 with at most 256 new tokens. The adversary is Qwen2.5-7B-Instruct with a LoRA adapter (rank 16, alpha 16). Only the LoRA weights train. The adversary does not answer the harmful request; it rewrites it. Attack success is judged with HarmBench-Mistral. The reflection model used by the defender is also Llama-3.1-8B-Instruct.",
          "For each harmful request the adversary samples K = 4 rewrites and updates with a leave-one-out policy gradient (RLOO). A shaped reward mixes the binary judge score with a saturating length term of weight 0.2, so very short rewrites are discouraged without rewarding unbounded length. Some runs add a token-level KL penalty of β = 0.05 against the frozen reference policy. The defender starts from the 28-character prompt “You are a helpful assistant.” GEPA then mutates it in a generate-evaluate-reflect-mutate loop. A co-evolution run has four stages. Each stage trains the adversary for 15 RLOO updates against the current defense, evaluates held-out HarmBench, then runs one GEPA defense update. HarmBench runs use 100 training prompts and a held-out slice of 50. Utility is measured on XSTest: 250 safe prompts and 200 unsafe prompts.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Reward shaping matters. Naive REINFORCE with binary rewards reaches a peak HarmBench ASR of 0.24 and collapses to 0.04. RLOO with the length penalty reaches peak ASR in the range 0.40–0.52. Seed text matters about as much as the optimizer: a 2262-character multi-strategy seed peaks at 0.52, while a 260-character seed that names the same strategies peaks at 0.14. The best RLOO+LP trajectory hits 0.52 near iteration 120 and then degrades.",
          "Co-evolution hardens the prompt. In the no-KL run, stage-boundary ASR moves from 0.42 at stage 0 to 0.12, then 0.06, then 0.06, with a final defense ASR of 0.10. The KL = 0.05 run ends at 0.06. The default 28-character prompt becomes a longer safety directive that names harm categories and asks for clarification when intent is unclear. The adversary does not become a generally strong attacker: after co-evolution, both adapters score ASR 0.08 when tested back against the original default prompt. The paper reads this as overspecialization. The loop is useful for training a defense, not by itself a reliable way to produce a global attacker.",
          "On XSTest, the evolved defense is more conservative. In target-only evaluation, unsafe ASR falls from 0.075 to 0.030, while safe-prompt over-refusal rises from 0.084 to 0.260 and safe compliance falls from 0.916 to 0.740. Saved adversary checkpoints, evaluated by rewriting XSTest prompts and sending them to the default target prompt, keep safe compliance between 0.964 and 0.988 and unsafe ASR between 0.775 and 0.970. The paper’s limitations note that every headline result uses this one target and one adversary, the HarmBench split is small, and a single automated judge is used.",
        ],
      },
      {
        heading: "Mark’s contribution",
        paragraphs: [
          "The paper lists the authors as Ren, Sarina, Shiv, and Mark, for STAT 4830 at the University of Pennsylvania in Spring 2026. It states the project’s contributions collectively — the RLOO-plus-length-penalty adversary recipe, the co-evolution schedule, and the XSTest transfer checks — and does not assign a separate contribution to Mark.",
        ],
      },
    ],
    figures: [
      {
        src: "/figures/safety-fig1-pipeline.webp",
        alt: "Diagram of the minimax pipeline: HarmBench requests go to a frozen generator, an adversary rewrites the user prompt, a judge scores success, and GEPA updates the system prompt.",
        caption:
          "Figure 1. Minimax pipeline. The target model is frozen; the adversary updates LoRA weights to maximize ASR, while GEPA mutates the system prompt to minimize ASR.",
      },
      {
        src: "/figures/safety-fig2-trajectories.webp",
        alt: "Line chart of held-out HarmBench ASR during adversary training for RLOO+LP and REINFORCE.",
        caption:
          "Figure 2. Adversary training is unstable. The best RLOO+LP trajectory reaches ASR 0.52 near iteration 120, then degrades.",
      },
      {
        src: "/figures/safety-fig5-coevolution.webp",
        alt: "Grouped bar chart of HarmBench ASR across co-evolution stages for no-KL and KL = 0.05 runs.",
        caption:
          "Figure 5. Held-out HarmBench ASR across co-evolution stages for the no-KL and KL settings.",
      },
      {
        src: "/figures/safety-table2.png",
        alt: "Table 2, co-evolution dynamics, with stage-boundary and final HarmBench ASR for the no-KL and KL runs.",
        caption:
          "Table 2. Co-evolution dynamics. Stage values are ASR before that stage’s GEPA defense update; “Final” is the optimized defense prompt.",
      },
      {
        src: "/figures/safety-table3.png",
        alt: "Table 3, XSTest safe compliance, over-refusal, and unsafe ASR for target-only and adversary-mode settings.",
        caption:
          "Table 3. Adversary-mode XSTest transfer and collateral over-refusal. Lower over-refusal and higher safe compliance are better; higher unsafe ASR means the rewriter transfers more strongly to unsafe XSTest prompts.",
      },
      {
        src: "/figures/safety-fig7-tradeoff.webp",
        alt: "Scatter plot of held-out HarmBench ASR against XSTest over-refusal for the default prompt and the GEPA defense prompt.",
        caption:
          "Figure 7. Safety–utility tradeoff between held-out HarmBench ASR and XSTest over-refusal for evaluated defense prompts.",
      },
    ],
  },
  clickbait: {
    slug: "clickbait",
    kicker: "University of Pennsylvania",
    title:
      "Enhancing Digital Media Integrity: A Natural Language Processing Model for Clickbait Detection and Mitigation",
    authors: "Carrie Li, Mark Yan, Minyu Deng, and Zhiyuan Li",
    backTo: "/research",
    backLabel: "Research",
    paperHref: "/papers/clickbait-detection.pdf",
    externalHref: "https://github.com/Markiess/clickbait-detector",
    externalLabel: "GitHub",
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Clickbait uses sensational or incomplete language to push a click, often by opening a curiosity gap: the headline withholds the information the reader would need to judge the story. The paper treats detection as binary classification of a headline. It also uses soft labels, both from human annotators and from an LLM, so a smaller model can learn from richer supervision than a hard clickbait / non-clickbait tag.",
          "The data are the Webis Clickbait Corpus 2017. The paper starts from 21,439 Twitter posts and, after cleaning, uses 19,538 instances, split 80 / 10 / 10 into 15,630 training, 1,954 validation, and 1,954 test examples. Across the cleaned corpus there are 4,761 clickbait and 14,777 non-clickbait examples, a ratio of about 1:3.1. truthMean is the average of five annotators on a scale from 0 to 1. The score distribution is right-skewed: most posts sit near the non-clickbait end.",
        ],
      },
      {
        heading: "Method",
        paragraphs: [
          "A logistic-regression baseline uses six surface features: title length, question marks, exclamation marks, uppercase count, a list of clickbait keywords, and word count. Class weights are set inversely to class frequency, 0.661 for non-clickbait and 2.052 for clickbait. The strong baseline fine-tunes bert-base-uncased and classifies from the final hidden state of the [CLS] token after 12 transformer layers.",
          "The extension distills GPT-4o-mini into DistilBERT, which has 66 million parameters against BERT-base’s 110 million. Three students are compared. Vanilla DistilBERT is fine-tuned on hard labels only (α = 0, β = 0). DistilBERT + GPT-4o-mini adds the teacher’s soft labels with distillation weight α = 0.25. A third student also uses human truthMean soft labels, with α = 0.25 and β = 0.25. The paper additionally fine-tunes GPT-4o-mini and GPT-4.1-mini as teachers before distillation. Because of the class imbalance, precision, recall, and F1 are reported alongside accuracy.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Surface features are not enough. Logistic regression reaches test accuracy 0.6063 and F1 0.4165. BERT-base reaches accuracy 0.7966 and F1 0.5998, which the paper describes as 19.03 percentage points of accuracy above the logistic regression. Vanilla DistilBERT falls back to accuracy 0.6377 and F1 0.5293.",
          "Distillation closes that gap. DistilBERT + GPT-4o-mini reaches test accuracy 0.8009 and F1 0.5711, matching and slightly passing BERT-base accuracy with about 40% fewer parameters (66M versus 110M). Adding human truthMean labels lowers accuracy to 0.7897 and raises F1 to 0.5810. A fine-tuned GPT-4o-mini teacher reaches accuracy 0.8076 with a lower F1 of 0.5276. In the error analysis, BERT-base often misses fact-based lures, such as the question “Is this the end of the bond market?”, while the distilled student marks them as clickbait. The student also introduces false positives on legitimate news that uses high-arousal words. The paper says none of the models reach the 0.8–0.9 F1 range reported for heavily tuned transformers, and attributes the remaining gap to limited domain-adaptive pretraining, imbalance handling, and hyperparameter search.",
        ],
      },
      {
        heading: "Mark’s contribution",
        paragraphs: [
          "The paper lists the authors as Carrie Li, Mark Yan, Minyu Deng, and Zhiyuan Li at the University of Pennsylvania. It describes a shared term project. The stated primary contribution is knowledge distillation from GPT-4o-mini into DistilBERT, using both LLM-generated and human-annotated soft labels. The paper does not assign a separate contribution to Mark Yan.",
        ],
      },
    ],
    figures: [
      {
        src: "/figures/clickbait-fig2-scores.webp",
        alt: "Histogram of truthMean clickbait scores across the cleaned Webis corpus, skewed toward low scores.",
        caption:
          "Figure 2. Distribution of truthMean scores across the entire dataset (N = 19,538). The distribution is heavily right-skewed, indicating a prevalence of non-clickbait content.",
      },
      {
        src: "/figures/clickbait-fig4-bert.webp",
        alt: "Diagram of a headline passing through a BERT encoder of transformer layers into a classification layer.",
        caption:
          "Figure 4. Fine-tuning architecture of the BERT-base baseline. The input headline is processed through 12 transformer layers, and the final hidden state of the [CLS] token is fed into a classification layer to predict clickbait probability.",
      },
      {
        src: "/figures/clickbait-table6.png",
        alt: "Table 6 comparing logistic regression, BERT-base, and DistilBERT distillation variants on test accuracy and F1.",
        caption:
          "Table 6. Performance comparison of baselines and distillation extensions on the test set. The parameters α and β are the weights for LLM soft labels and human soft labels.",
      },
    ],
  },
  bitebite: {
    slug: "bitebite",
    kicker: "App Store · since November 2025 · version 2.1.1",
    title: "BiteBite",
    authors: "BiteBite Analyze & Track",
    backTo: "/products",
    backLabel: "Products",
    externalHref: "https://download.nutrisnap.live",
    externalLabel: "Download",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "BiteBite Analyze & Track is a nutrition app, on the App Store since November 2025. The current version is 2.1.1. It is built with React Native and Node.js.",
        ],
      },
      {
        heading: "How it uses a model",
        paragraphs: [
          "GPT-4o Vision recognizes food in a photo and estimates calories and macronutrients. The person using the app can correct that result. Daily energy needs are computed with the Mifflin–St Jeor formula, not with a learned model. Meal plans can be revised across turns in natural language, and the model can be switched by region.",
          "No model was trained in-house. The work is the engineering around an unreliable model output: structured output, human correction, a deterministic formula for TDEE, and a separation between that formula and the generated text.",
        ],
      },
    ],
    figures: [],
  },
};
