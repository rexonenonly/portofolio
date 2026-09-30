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
      title: `${project.title} — ${project.subtitle}`,
      subtitle: g.alt,
    }));
    onOpenImage(lightboxItems, photoIndex);
  };

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={i * 0.4}
            className="group relative flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:border-black hover:shadow-md transition-[border-color,box-shadow] duration-300"
          >
            {/* Top accent line */}
            <div className="h-1 w-full bg-zinc-900" />

            <div className="p-6 md:p-7 space-y-4">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={18}
                      className="text-zinc-900"
                    />
                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-black transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-full">
                    <Calendar size={11} />
                    {p.period}
                  </span>
                </div>
                <p className="mt-1 text-xs md:text-sm font-semibold text-zinc-600">
                  {p.subtitle}
                </p>

                {/* Association badge if available */}
                {p.association && (
                  <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-700">
                    <Building size={12} className="text-zinc-800" />
                    <span>{p.association}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-600 leading-relaxed">
                {p.description}
              </p>

              {/* Screenshot Gallery if available */}
              {p.gallery && p.gallery.length > 0 && (
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-1.5">
                      <ImageIcon size={13} />
                      Screenshot Gallery ({p.gallery.length})
                    </span>
                    <span className="text-[11px] text-zinc-500">Click to zoom</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {p.gallery.map((shot, sIdx) => (
                      <button
                        key={sIdx}
                        type="button"
                        onClick={() => handleOpenGallery(p, sIdx)}
                        className="group/img relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 hover:border-black transition-all text-left"
                      >
                        <img
                          src={shot.src}
                          alt={shot.alt}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-1.5 text-center">
                          <span className="text-[11px] text-white font-semibold flex items-center gap-1">
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

            {/* Tags Bottom Footer */}
            <div className="px-6 pb-6 pt-2">
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 border border-zinc-200 px-2 py-0.5 text-[11px] font-semibold text-zinc-800 hover:bg-black hover:text-white hover:border-black transition-colors"
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
