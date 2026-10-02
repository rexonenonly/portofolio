import { motion } from "framer-motion";
import { Database, Bug, Network, Monitor, Lightbulb, MapPin, CheckCircle2 } from "lucide-react";
import Section from "./Section";
import { personalInfo, highlights } from "../data/data";
import { fadeUp } from "../utils/animations";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Database, Bug, Network, Monitor, Lightbulb,
};

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Profile Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col items-center text-center"
        >
          <div className="relative w-40 h-40 mb-4">
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-100 ring-2 ring-zinc-200">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-zinc-900">
              <CheckCircle2 size={12} className="text-white" />
            </div>
          </div>

          <h3 className="text-lg font-bold text-zinc-900">{personalInfo.name}</h3>
          <p className="text-sm font-medium text-zinc-600 mt-0.5">{personalInfo.role}</p>

          <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500">
            <MapPin size={13} className="text-zinc-700" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="mt-6 w-full space-y-3 border-t border-zinc-200 pt-4 text-left">
            {[
              { label: "Specialization", value: "Full-Stack & IT" },
              { label: "System Focus", value: "Enterprise & AI" },
              { label: "Availability", value: "Open to Work" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">{label}</span>
                <span className="font-semibold text-zinc-900">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
              {personalInfo.summary}
            </p>
          </motion.div>

          {/* Core Strengths */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
              Core Strengths
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {highlights.map((h, i) => {
                const Icon = iconMap[h.icon] ?? Monitor;
                return (
                  <motion.div
                    key={h.label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.08}
                    className="rounded-xl border border-zinc-200 bg-white p-3 text-center transition-colors hover:border-zinc-900 group cursor-default"
                  >
                    <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">
                      {h.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
