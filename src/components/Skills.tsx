import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Network,
  Brain,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Section from "./Section";
import { skillGroups } from "../data/data";
import { fadeUp } from "../utils/animations";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Network,
  Brain,
  Wrench,
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon] ?? Code2;
          return (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={i * 0.3}
              className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:border-black hover:shadow-md transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-black group-hover:text-white transition-all">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-zinc-900 group-hover:text-black transition-colors">
                  {group.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-zinc-50 border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:border-black hover:text-black hover:bg-white transition-all duration-200 cursor-default"
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
