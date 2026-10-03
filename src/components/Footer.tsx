import { Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/8 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="flex items-center gap-1.5 text-xs font-medium text-white/35">
          © {new Date().getFullYear()} {personalInfo.name}. Built with
          <Heart size={12} className="text-white/60 fill-current" />
          React & Tailwind CSS.
        </p>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-medium text-white/35 hover:text-white transition-colors"
          aria-label="Back to top"
        >
          Back to top
          <span className="flex h-8 w-8 items-center justify-center glass-chip rounded-full group-hover:bg-white/15 transition-colors">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>
    </footer>
  );
}
