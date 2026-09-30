import { motion } from "framer-motion";
import {
  Database,
  Bug,
  Network,
  Monitor,
  Lightbulb,
  MapPin,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import Section from "./Section";
import { personalInfo, highlights } from "../data/data";
import { fadeUp } from "../utils/animations";

const iconMap: Record<string, LucideIcon> = {
  Database,
  Bug,
  Network,
  Monitor,
  Lightbulb,
};

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Profile Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={0}
          className="lg:col-span-4 flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm"
        >
          <div className="relative group mb-4">
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-zinc-900 bg-zinc-100 shadow-md">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-1 right-1 rounded-full border-2 border-white bg-black p-1.5 shadow-md">
              <CheckCircle size={14} className="text-white" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-zinc-900">{personalInfo.name}</h3>
          <p className="text-sm font-semibold text-zinc-600 mt-0.5">{personalInfo.role}</p>

          <div className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-zinc-500">
            <MapPin size={13} className="text-zinc-800" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="mt-5 pt-4 border-t border-zinc-200 w-full text-left space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-medium">Specialization</span>
              <span className="text-zinc-900 font-semibold">Full-Stack & IT</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-medium">System Focus</span>
              <span className="text-zinc-900 font-semibold">Enterprise & AI</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-medium">Availability</span>
              <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Open to Work</span>
            </div>
          </div>
        </motion.div>

        {/* Right column: Summary and Highlights */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={1}
            className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm space-y-4"
          >
            <h4 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-black" />
              Professional Summary
            </h4>
            <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
              {personalInfo.summary}
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 px-1">
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
                    viewport={{ once: true, amount: 0.1 }}
                    custom={1.5 + i * 0.4}
                    className="bg-white rounded-xl p-3.5 text-center border border-zinc-200 shadow-sm hover:border-black hover:shadow-md transition-[border-color,box-shadow] duration-300 group cursor-default"
                  >
                    <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-800 group-hover:bg-black group-hover:text-white transition-all">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-semibold text-zinc-700 group-hover:text-black transition-colors line-clamp-2">
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
