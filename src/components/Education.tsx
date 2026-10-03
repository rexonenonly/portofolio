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
          className="glass rounded-xl p-6 md:p-8 transition-colors group"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white/65 group-hover:bg-white/20 group-hover:text-white transition-colors">
              <GraduationCap size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Formal Education
              </span>
              <h3 className="text-base font-bold text-white">{education.institution}</h3>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <p className="text-base font-semibold text-white/75">{education.degree}</p>
              <span className="text-xs text-white/50 glass-chip px-2.5 py-1 rounded-full">
                {education.period}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 glass-chip rounded-lg px-3 py-1.5 text-xs text-white/70 font-bold">
              <Award size={13} />
              <span>Cumulative GPA: {education.gpa}</span>
            </div>

            <p className="text-sm text-white/55 leading-relaxed pt-2">
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
          className="glass rounded-xl p-6 md:p-8 transition-colors group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white/65 group-hover:bg-white/20 group-hover:text-white transition-colors">
                <Globe size={22} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                  Languages
                </span>
                <h3 className="text-base font-bold text-white">Language Proficiency</h3>
              </div>
            </div>

            <div className="space-y-4">
              {languages.map((l) => (
                <div
                  key={l.lang}
                  className="glass-chip rounded-lg p-4 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{l.lang}</span>
                    <span className="rounded-full bg-white/15 text-white/85 px-2.5 py-0.5 text-[11px] font-semibold">
                      {l.level}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-white/50 leading-relaxed">
                    {l.lang === "Indonesian" || l.lang === "Indonesia"
                      ? "Native speaker."
                      : "TOEIC L&R 750 - Professional working proficiency."}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between text-xs text-white/40">
            <span className="flex items-center gap-1.5 text-white/55 font-medium">
              <CheckCircle2 size={14} className="text-white/60" />
              Ready for global collaboration
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
