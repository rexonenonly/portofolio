import { motion } from "framer-motion";
import { Calendar, FileText, ZoomIn } from "lucide-react";
import Section from "./Section";
import { certifications } from "../data/data";
import { fadeUp } from "../utils/animations";
import type { LightboxImage } from "./Lightbox";

interface CertificationsProps {
  onOpenImage?: (images: LightboxImage[], index: number) => void;
}

export default function Certifications({ onOpenImage }: CertificationsProps) {
  const handleOpenCert = (index: number) => {
    if (!onOpenImage) return;
    const lightboxItems: LightboxImage[] = certifications.map((c) => ({
      src: c.thumbnail,
      alt: `${c.name} - ${c.issuer}`,
      title: c.name,
      subtitle: `${c.issuer} • ${c.date}${c.score ? ` • ${c.score}` : ""}`,
    }));
    onOpenImage(lightboxItems, index);
  };

  return (
    <Section id="certifications" title="Certifications & Credentials">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            custom={i * 0.06}
            className="group relative flex flex-col justify-between glass-lite rounded-xl p-5 transition-colors h-full"
          >
            <div className="flex flex-col flex-1">
              {/* Issuer & Date */}
              <div className="flex items-center justify-between gap-2 mb-4 h-10">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-1 flex items-center justify-center">
                    <img src={cert.logo} alt={cert.issuer} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate">{cert.issuer}</p>
                    <p className="text-[11px] text-white/40 flex items-center gap-1">
                      <Calendar size={11} className="shrink-0" />
                      <span>{cert.date}</span>
                    </p>
                  </div>
                </div>
                {cert.score ? (
                  <span className="rounded-full bg-white/15 text-white/80 px-2.5 py-0.5 text-[11px] font-bold shrink-0">
                    {cert.score}
                  </span>
                ) : null}
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-bold text-white line-clamp-2 h-12 flex items-center">
                {cert.name}
              </h3>

              {/* Thumbnail */}
              <div className="mt-4 relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <img
                  src={cert.thumbnail}
                  alt={cert.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <button
                  type="button"
                  onClick={() => handleOpenCert(i)}
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-3 text-center cursor-pointer"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0b1017]">
                    <ZoomIn size={16} />
                  </span>
                  <span className="text-xs font-medium text-white">View Document</span>
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-4 pt-3 border-t border-white/8 flex items-center">
              <button
                type="button"
                onClick={() => handleOpenCert(i)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/65 hover:text-white transition-colors cursor-pointer"
              >
                <FileText size={13} />
                <span>View Certificate</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
