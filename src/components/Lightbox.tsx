import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  downloadUrl?: string;
}

interface LightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate?: (newIndex: number) => void;
}

export default function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && images.length > 1 && onNavigate) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight" && images.length > 1 && onNavigate) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
        aria-modal="true"
        role="dialog"
      >
        {/* Top bar controls */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              Preview {images.length > 1 ? `${currentIndex + 1} / ${images.length}` : ""}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {currentImage.downloadUrl && (
              <a
                href={currentImage.downloadUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors"
                title="Download / View File"
              >
                <Download size={14} />
                <span>Download File</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Close preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Previous button */}
        {images.length > 1 && onNavigate && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Image and Caption Container */}
        <motion.div
          key={currentImage.src}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[85vh] max-w-4xl w-full flex flex-col items-center justify-center"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/60 shadow-2xl max-h-[72vh] flex items-center justify-center">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl select-none"
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center max-w-xl">
            {currentImage.title && (
              <h3 className="text-base font-semibold text-white">
                {currentImage.title}
              </h3>
            )}
            <p className="text-xs md:text-sm text-zinc-300 mt-1">
              {currentImage.alt || currentImage.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Next button */}
        {images.length > 1 && onNavigate && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % images.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
