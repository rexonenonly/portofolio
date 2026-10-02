import { motion } from "framer-motion";
import { fadeUp, maskReveal, ruleGrow } from "../utils/animations";
import type { ReactNode } from "react";

interface Props {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 md:py-28 px-6 md:px-12 lg:px-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {title && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            {subtitle && (
              <motion.p
                variants={fadeUp}
                className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4"
              >
                {subtitle}
              </motion.p>
            )}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
              variants={maskReveal}
            >
              {title}
            </motion.h2>
            <motion.span
              className="block h-px w-12 bg-zinc-900 mx-auto"
              variants={ruleGrow}
            />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
