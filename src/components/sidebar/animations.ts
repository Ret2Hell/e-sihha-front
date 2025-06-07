import { Variants } from "framer-motion";

// Animation variants for sidebar
export const sidebarVariants: Variants = {
  expanded: {
    width: "280px",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  collapsed: {
    width: "80px",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Animation variants for mobile sidebar
export const mobileSidebarVariants: Variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Animation variants for overlay
export const overlayVariants: Variants = {
  open: {
    opacity: 0.5,
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

// Animation variants for logo text
export const logoTextVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
};
