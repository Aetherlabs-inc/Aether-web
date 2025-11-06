export type QuestionType = 'single' | 'multi' | 'scale' | 'email' | 'text'

export interface QuestionOption {
  value: string
  label: string
}

export interface ShowCondition {
  questionId: string
  in: string[]
}

export interface SurveyQuestion {
  id: string
  type: QuestionType
  label: string
  tooltip?: string
  required?: boolean
  placeholder?: string
  options?: QuestionOption[] // For single, multi
  min?: number // For scale
  max?: number // For scale
  step?: number // For scale
  leftLabel?: string // For scale
  rightLabel?: string // For scale
  maxSelections?: number // For multi
  showIf?: ShowCondition[] // Conditional display
}

export interface SurveyMeta {
  title: string
  intro: string
  ctaLabel: string
  thankYouTitle: string
  thankYouBody: string
  version: string
}

export interface SurveyConfig {
  meta: SurveyMeta
  questions: SurveyQuestion[]
}

// AetherLabs Survey Configuration
export const surveyMeta = {
  title: "AetherLabs — Interest & Pricing Survey",
  intro: "Help us shape AetherLabs — a modern way to authenticate, organize, and manage artworks using NFC tags and digital certificates. This short survey takes under a minute.",
  ctaLabel: "Send feedback →",
  thankYouTitle: "Thanks for your time! 💫",
  thankYouBody: "Your input helps us refine AetherLabs and understand what matters most to artists and collectors. If you left your email, we'll be in touch about early access.",
  version: "2025-11-05.1",
};

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: "role",
    type: "single",
    label: "Which best describes you?",
    tooltip: "We'd love to understand who's most interested in AetherLabs.",
    options: [
      { value: "artist", label: "🎨 Artist" },
      { value: "collector", label: "🖼️ Collector" },
      { value: "gallery", label: "🏛️ Gallery / Curator" },
      { value: "other", label: "🧑‍💻 Other" },
    ],
    required: true,
  },
  {
    id: "current_system",
    type: "multi",
    label: "How do you currently keep track of artwork or certificates?",
    tooltip: "This helps us learn how you manage authenticity and records today.",
    options: [
      { value: "paper_coa", label: "Physical papers / printed COAs" },
      { value: "cloud", label: "Cloud storage (Google Drive, Dropbox, etc.)" },
      { value: "software", label: "Art management software" },
      { value: "none", label: "I don't have a system yet" },
    ],
    required: true,
  },
  {
    id: "interest",
    type: "scale",
    label: "How interested are you in securely linking digital certificates to your artworks using NFC tags?",
    tooltip: "We use NFC tags to connect physical artworks with their digital certificates.",
    min: 1,
    max: 5,
    step: 1,
    leftLabel: "Not interested",
    rightLabel: "Very interested",
    required: true,
  },
  {
    id: "top_features",
    type: "multi",
    label: "Which features would you find most valuable?",
    tooltip: "Select the features that would make AetherLabs most useful for you.",
    options: [
      { value: "coa", label: "Digital certificates of authenticity" },
      { value: "inventory", label: "Artwork inventory & portfolio management" },
      { value: "provenance", label: "Provenance & ownership tracking" },
      { value: "profile", label: "Collector view / public profile" },
      { value: "marketplace", label: "Marketplace or sales integrations" },
    ],
    maxSelections: 2,
    required: true,
  },
  {
    id: "pricing",
    type: "single",
    label: "How much would you be willing to pay per month for this service?",
    tooltip: "We're exploring pricing options that fit different user needs.",
    options: [
      { value: "free", label: "$0 — Free plan with limits" },
      { value: "5_10", label: "$5–10 / month" },
      { value: "10_20", label: "$10–20 / month" },
      { value: "20_plus", label: "$20+ / month (premium)" },
      { value: "unsure", label: "Not sure yet" },
    ],
    required: true,
  },
  {
    id: "early_access",
    type: "single",
    label: "Would you like early access to AetherLabs?",
    tooltip: "Join our beta program to get early access and help shape the product.",
    options: [
      { value: "yes", label: "Yes — I'd love to try it early" },
      { value: "maybe", label: "Maybe later" },
      { value: "no", label: "No thanks" },
    ],
    required: true,
  },
  {
    id: "email",
    type: "email",
    label: "If yes, please drop your email for early access (optional)",
    tooltip: "We'll only use your email to contact you about beta access and updates.",
    placeholder: "you@example.com",
    showIf: [{ questionId: "early_access", in: ["yes", "maybe"] }],
    required: false,
  },
  {
    id: "feedback",
    type: "text",
    label: "Anything specific you'd love to see in AetherLabs?",
    tooltip: "Share a feature idea or pain point you'd like us to solve.",
    placeholder: "e.g., 'Shopify integration' or 'Collector gallery mode'",
    required: false,
  },
];

// Default survey configuration
export const defaultSurveyConfig: SurveyConfig = {
  meta: surveyMeta,
  questions: surveyQuestions,
};

// Default export for dynamic imports
const surveyConfig = { surveyMeta, surveyQuestions };
export default surveyConfig;
