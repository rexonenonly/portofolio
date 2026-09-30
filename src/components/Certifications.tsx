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
      alt: `${c.name} — ${c.issuer}`,
      title: c.name,
      subtitle: `${c.issuer} • ${c.date}${c.score ? ` • ${c.score}` : ""}`,
      downloadUrl: c.pdfUrl || c.thumbnail,
    }));
    onOpenImage(lightboxItems, index);
  };

  return (
    <Section id="certifications" title="Certifications & Credentials">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={i * 0.25}
            className="group relative flex flex-col justify-between bg-white rounded-2xl p-5 border border-zinc-200 shadow-sm hover:border-black hover:shadow-md transition-[border-color,box-shadow] duration-300"
          >
            {/* Top Row: Issuer Logo & Date */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 p-1 flex items-center justify-center">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">
                      {cert.issuer}
                    </p>
                    <p className="text-[11px] text-zinc-500 flex items-center gap-1">
                      <Calendar size={11} />
                      {cert.date}
                    </p>
                  </div>
                </div>

                {cert.score && (
                  <span className="rounded-full bg-black text-white px-2.5 py-0.5 text-[11px] font-bold">
                    {cert.score}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-bold text-zinc-900 group-hover:text-black transition-colors line-clamp-2 min-h-[48px]">
                {cert.name}
              </h3>

              {/* Document Thumbnail with Click to Lightbox */}
              <div className="mt-4 relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
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
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg">
                    <ZoomIn size={18} />
                  </span>
                  <span className="text-xs font-semibold text-white">
                    View Document
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => handleOpenCert(i)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-black transition-colors"
              >
                <FileText size={13} className="text-zinc-800" />
                <span>View Certificate</span>
              </button>

              {cert.pdfUrl && (
                <a
                  href={cert.pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-[11px] font-semibold text-zinc-700 hover:border-black hover:bg-black hover:text-white transition-colors"
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
