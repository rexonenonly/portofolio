import { motion } from "framer-motion";
import { Sparkles, Image as ImageIcon, Building, ZoomIn, Calendar } from "lucide-react";
import Section from "./Section";
import { projects, type Project } from "../data/data";
import { fadeUp } from "../utils/animations";
import type { LightboxImage } from "./Lightbox";

interface ProjectsProps {
  onOpenImage?: (images: LightboxImage[], index: number) => void;
}

export default function Projects({ onOpenImage }: ProjectsProps) {
  const handleOpenGallery = (project: Project, photoIndex: number) => {
    if (!onOpenImage || !project.gallery.length) return;
    const lightboxItems: LightboxImage[] = project.gallery.map((g) => ({
      src: g.src,
      alt: g.alt,
      title: `${project.title} - ${project.subtitle}`,
      subtitle: g.alt,
    }));
    onOpenImage(lightboxItems, photoIndex);
  };

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            custom={i * 0.08}
            className="group flex flex-col glass-lite rounded-xl transition-colors overflow-hidden"
          >
            <div className="p-6 md:p-7 space-y-4 flex-1">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-white/70 shrink-0" />
                    <h3 className="text-lg font-bold text-white group-hover:text-white/80 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-white/50 glass-chip px-2 py-0.5 rounded-full shrink-0">
                    <Calendar size={11} />
                    {p.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-white/55">{p.subtitle}</p>
                {p.association && (
                  <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-white/55 glass-chip px-2.5 py-1 rounded-lg">
                    <Building size={12} className="text-white/60" />
                    <span>{p.association}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed">{p.description}</p>

              {/* Gallery */}
              {p.gallery.length > 0 && (
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                      <ImageIcon size={12} />
                      Gallery ({p.gallery.length})
                    </span>
                    <span className="text-[11px] text-white/40">Click to zoom</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {p.gallery.map((shot, sIdx) => (
                      <button
                        key={sIdx}
                        type="button"
                        onClick={() => handleOpenGallery(p, sIdx)}
                        className="group/img relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:border-white/25 transition-colors text-left cursor-pointer"
                      >
                        <img
                          src={shot.src}
                          alt={shot.alt}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[11px] text-white font-medium flex items-center gap-1">
                            <ZoomIn size={12} />
                            Zoom
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="px-6 pb-6 pt-3 border-t border-white/8">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-chip rounded-md px-2 py-0.5 text-[11px] font-semibold text-white/55 hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
