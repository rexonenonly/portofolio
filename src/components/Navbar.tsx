import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 transition-all"
    >
      {/* Desktop nav floater: centered, elevated off the top edge */}
      <div className="mx-auto flex h-14 max-w-fit items-center justify-center gap-1.5 rounded-2xl glass-nav px-3 py-2 mt-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)]">
        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-2.5 -bottom-0.5 h-px bg-white transition-all ${
                      isActive ? "scale-x-100" : "scale-x-0 peer-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle (centered) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden glass-chip rounded-lg p-1.5 text-white/80 hover:text-white transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-white/10 bg-[#0b1017]/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col items-center gap-1 py-4">
              {navLinks.map((l) => (
                <li key={l.href} className="w-full text-center">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
