import type { Variants } from "framer-motion";

/* Signature easing: decelerating cubic-bezier, motion decays into rest */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.8, ease: easeOut },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: easeOut } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

/* Line-mask reveal for large headings */
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.9, ease: easeOut },
  },
  exit: { clipPath: "inset(100% 0 0 0)", transition: { duration: 0.5, ease: easeOut } },
};

/* Slim grow-line used under section labels */
export const ruleGrow: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: easeOut, delay: 0.2 },
  },
  exit: { scaleX: 0, transition: { duration: 0.3, ease: easeOut } },
};
