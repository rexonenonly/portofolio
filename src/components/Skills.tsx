import { motion } from "framer-motion";
import { Code2, Database, Network, Brain, Wrench, type LucideIcon } from "lucide-react";
import Section from "./Section";
import { skillGroups } from "../data/data";
import { fadeUp } from "../utils/animations";

const iconMap: Record<string, LucideIcon> = {
  Code2, Database, Network, Brain, Wrench,
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon] ?? Code2;
          return (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.06}
              className="group rounded-xl border border-zinc-200 bg-white p-6 hover:border-zinc-900 transition-colors"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-800 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                  {group.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
