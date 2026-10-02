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
      title: `${exp.title} — ${exp.company}`,
      subtitle: g.alt,
    }));
    onOpenImage(lightboxItems, photoIndex);
  };

  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-zinc-200" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="relative pl-16 md:pl-24"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-10 -translate-x-1/2 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-zinc-900 bg-white" />

              {/* Main Card */}
              <div className="bg-white rounded-xl p-6 md:p-8 border border-zinc-200 hover:border-zinc-900 transition-colors group">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                    <Clock size={12} />
                    {exp.type} ({exp.duration})
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600 font-medium">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                {/* Role and Company */}
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900">{exp.title}</h3>
                <p className="mt-1 text-sm md:text-base font-medium text-zinc-600">{exp.company}</p>

                {/* Bullet points */}
                <ul className="mt-4 space-y-2 text-sm text-zinc-600 leading-relaxed">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill tags */}
                {exp.skillTags.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-zinc-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skillTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-zinc-50 border border-zinc-200 px-2.5 py-1 text-xs font-semibold text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gallery Documentation */}
                {exp.gallery.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-zinc-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-700">
                        <Camera size={14} />
                        <span>Activity Documentation ({exp.gallery.length} Photos)</span>
                      </div>
                      <span className="text-[11px] text-zinc-500 flex items-center gap-1">
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
                          className="group/thumb relative aspect-[4/3] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 hover:border-zinc-900 transition-colors text-left cursor-pointer"
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-end p-2">
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
