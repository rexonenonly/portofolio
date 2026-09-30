import { motion } from "framer-motion";
import { GraduationCap, Globe, Award, CheckCircle2 } from "lucide-react";
import Section from "./Section";
import { education, languages } from "../data/data";
import { fadeUp } from "../utils/animations";

export default function Education() {
  return (
    <Section id="education" title="Education & Languages">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Education Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={0}
          className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm hover:border-black hover:shadow-md transition-all duration-300 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-black group-hover:text-white transition-all">
              <GraduationCap size={24} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Formal Education
              </span>
              <h3 className="text-lg font-bold text-zinc-900">
                {education.institution}
              </h3>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <p className="text-base font-semibold text-zinc-800">
                {education.degree}
              </p>
              <span className="text-xs text-zinc-600 font-medium bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-full">
                {education.period}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-zinc-100 px-3 py-1.5 text-xs text-zinc-900 font-bold">
              <Award size={14} />
              <span>Cumulative GPA: {education.gpa}</span>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed pt-2">
              Focus: Software Engineering, Database Systems, Networking, and AI (Face Recognition & NLP).
            </p>
          </div>
        </motion.div>

        {/* Languages Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={0.4}
          className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm hover:border-black hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-black group-hover:text-white transition-all">
                <Globe size={24} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Languages
                </span>
                <h3 className="text-lg font-bold text-zinc-900">
                  Language Proficiency
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {languages.map((l) => (
                <div
                  key={l.lang}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 hover:border-black transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-zinc-900">{l.lang}</span>
                    <span className="rounded-full bg-black text-white px-2.5 py-0.5 text-xs font-semibold">
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
            <span className="flex items-center gap-1.5 text-zinc-800 font-semibold">
              <CheckCircle2 size={14} className="text-zinc-900" />
              Ready for global collaboration
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
