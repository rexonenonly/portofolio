import { motion } from "framer-motion";
import { GraduationCap, Globe, Award, CheckCircle2 } from "lucide-react";
import Section from "./Section";
import { education, languages } from "../data/data";
import { fadeUp } from "../utils/animations";

export default function Education() {
  return (
    <Section id="education" title="Education & Languages">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Education Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl p-6 md:p-8 border border-zinc-200 hover:border-zinc-900 transition-colors group"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
              <GraduationCap size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Formal Education
              </span>
              <h3 className="text-base font-bold text-zinc-900">{education.institution}</h3>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <p className="text-base font-semibold text-zinc-700">{education.degree}</p>
              <span className="text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-full">
                {education.period}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-700 font-bold">
              <Award size={13} />
              <span>Cumulative GPA: {education.gpa}</span>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed pt-2">
              Focus: Software Engineering, Database Systems, Networking, and AI (Face Recognition &amp; NLP).
            </p>
          </div>
        </motion.div>

        {/* Languages Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="rounded-xl p-6 md:p-8 border border-zinc-200 hover:border-zinc-900 transition-colors group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                <Globe size={22} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  Languages
                </span>
                <h3 className="text-base font-bold text-zinc-900">Language Proficiency</h3>
              </div>
            </div>

            <div className="space-y-4">
              {languages.map((l) => (
                <div
                  key={l.lang}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 hover:border-zinc-900 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-zinc-900">{l.lang}</span>
                    <span className="rounded-full bg-zinc-900 text-white px-2.5 py-0.5 text-[11px] font-semibold">
                      {l.level}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                    {l.lang === "Indonesian" || l.lang === "Indonesia"
                      ? "Native speaker."
                      : "TOEIC L&R 750 — Professional working proficiency."}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
            <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
              <CheckCircle2 size={14} className="text-zinc-900" />
              Ready for global collaboration
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
