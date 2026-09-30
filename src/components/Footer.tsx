import { Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-200 bg-zinc-50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
          © {new Date().getFullYear()} {personalInfo.name}. Built with
          <Heart size={12} className="text-zinc-900 fill-zinc-900" />
          using React & Tailwind CSS.
        </p>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-black transition-colors"
          aria-label="Back to top"
        >
          Back to top
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-300 bg-white group-hover:border-black group-hover:bg-zinc-100 transition-all shadow-xs">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>
    </footer>
  );
}
