import { motion } from "framer-motion";
import { Calendar, FileText, Download, ZoomIn } from "lucide-react";
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
      downloadUrl: c.pdfUrl || c.thumbnail,
    }));
    onOpenImage(lightboxItems, index);
  };

  return (
    <Section id="certifications" title="Certifications & Credentials">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            custom={i * 0.06}
            className="group relative flex flex-col justify-between glass rounded-xl p-5 transition-colors"
          >
            <div>
              {/* Issuer & Date */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-1 flex items-center justify-center">
                    <img src={cert.logo} alt={cert.issuer} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{cert.issuer}</p>
                    <p className="text-[11px] text-white/40 flex items-center gap-1">
                      <Calendar size={11} />
                      {cert.date}
                    </p>
                  </div>
                </div>
                {cert.score && (
                  <span className="rounded-full bg-white/15 text-white/80 px-2.5 py-0.5 text-[11px] font-bold shrink-0">
                    {cert.score}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-bold text-white line-clamp-2 min-h-[40px]">
                {cert.name}
              </h3>

              {/* Thumbnail */}
              <div className="mt-4 relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white/5">
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
            <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => handleOpenCert(i)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/65 hover:text-white transition-colors cursor-pointer"
              >
                <FileText size={13} />
                <span>View Certificate</span>
              </button>
              {cert.pdfUrl && (
                <a
                  href={cert.pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg glass-chip px-2.5 py-1 text-[11px] font-semibold text-white/55 hover:bg-white/15 hover:text-white transition-colors"
                  title="Download PDF"
                >
                  <Download size={11} />
                  <span>PDF</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
