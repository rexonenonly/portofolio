import { Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
          © {new Date().getFullYear()} {personalInfo.name}. Built with
          <Heart size={12} className="text-zinc-900 fill-current" />
          React & Tailwind CSS.
        </p>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          aria-label="Back to top"
        >
          Back to top
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white group-hover:border-zinc-900 group-hover:bg-zinc-100 transition-colors">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>
    </footer>
  );
}
