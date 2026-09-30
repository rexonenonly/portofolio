import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
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
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            className="mb-14 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">
              <span className="text-gradient">{title}</span>
            </h2>
            {subtitle && (
              <p className="mt-3 text-zinc-600 text-sm md:text-base max-w-xl mx-auto font-normal">
                {subtitle}
              </p>
            )}
            <div className="mt-4 mx-auto h-1 w-12 rounded-full bg-black" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
