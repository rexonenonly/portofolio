import { motion } from "framer-motion";
import { Camera, ZoomIn, Calendar, Clock, ChevronRight } from "lucide-react";
import Section from "./Section";
import { experiences, type Experience } from "../data/data";
import { fadeUp } from "../utils/animations";
import type { LightboxImage } from "./Lightbox";

interface ExperienceProps {
  onOpenImage?: (images: LightboxImage[], index: number) => void;
}

export default function ExperienceSection({ onOpenImage }: ExperienceProps) {
  const handleOpenGallery = (exp: Experience, photoIndex: number) => {
    if (!onOpenImage || !exp.gallery.length) return;
    const lightboxItems: LightboxImage[] = exp.gallery.map((g) => ({
      src: g.src,
      alt: g.alt,
      title: `${exp.title} - ${exp.company}`,
      subtitle: g.alt,
    }));
    onOpenImage(lightboxItems, photoIndex);
  };

  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              custom={i * 0.1}
              className="relative pl-16 md:pl-24"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-10 -translate-x-1/2 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white/40 bg-[#0b1017]" />

              {/* Main Card */}
              <div className="glass rounded-xl p-6 md:p-8 transition-colors group">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 glass-chip rounded-full px-3 py-1 text-xs font-semibold text-white/80">
                    <Clock size={12} />
                    {exp.type} ({exp.duration})
                  </span>
                  <span className="inline-flex items-center gap-1.5 glass-chip rounded-full px-3 py-1 text-xs text-white/60 font-medium">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                {/* Role and Company */}
                <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                <p className="mt-1 text-sm md:text-base font-medium text-white/60">{exp.company}</p>

                {/* Bullet points */}
                <ul className="mt-4 space-y-2 text-sm text-white/60 leading-relaxed">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill tags */}
                {exp.skillTags.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-white/8">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/35 mb-2">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skillTags.map((tag) => (
                        <span
                          key={tag}
                          className="glass-chip rounded-lg px-2.5 py-1 text-xs font-semibold text-white/60 hover:text-white transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gallery Documentation */}
                {exp.gallery.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-white/8">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/55">
                        <Camera size={14} />
                        <span>Activity Documentation ({exp.gallery.length} Photos)</span>
                      </div>
                      <span className="text-[11px] text-white/40 flex items-center gap-1">
                        Click to enlarge
                        <ChevronRight size={12} />
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {exp.gallery.map((photo, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => handleOpenGallery(exp, pIdx)}
                          className="group/thumb relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:border-white/25 transition-colors text-left cursor-pointer"
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-white/50/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-end p-2">
                            <span className="text-[11px] font-medium text-white line-clamp-1 flex items-center gap-1">
                              <ZoomIn size={12} className="shrink-0" />
                              {photo.alt}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
