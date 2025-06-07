export const AI_SYMPTOM_CHECKER_CONSTANTS = {
  INITIAL_MESSAGE: {
    id: "initial",
    role: "assistant" as const,
    content:
      "Hello! I'm your AI health assistant. Please describe your symptoms, and I'll help suggest the most appropriate medical specialty for your consultation. Remember, this is not a medical diagnosis - always consult with a healthcare professional.",
  },
  ERROR_MESSAGE: {
    content:
      "I apologize, but I'm experiencing technical difficulties. Please try again later or consult directly with a healthcare professional.",
  },
  PLACEHOLDER_TEXT: "Describe your symptoms...",
  DISCLAIMER_TEXT:
    "This is not medical advice. Always consult a healthcare professional.",
  SCROLL_DELAY: 100,
  ANIMATION_DELAYS: {
    DOT_1: "0.1s",
    DOT_2: "0.2s",
  },
} as const;

export const CHAT_STYLES = {
  GRADIENT_PRIMARY: "bg-gradient-to-r from-teal-500 to-cyan-500",
  GRADIENT_HOVER: "hover:from-teal-600 hover:to-cyan-600",
  AVATAR_SIZE: "h-8 w-8",
  BUTTON_SIZE: "h-14 w-14",
  POPOVER_SIZE: "w-[500px] h-[700px]",
  SCROLL_AREA_HEIGHT: "h-[500px]",
} as const;
