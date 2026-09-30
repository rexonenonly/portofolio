import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);

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
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.25, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm"
          : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="text-lg font-extrabold tracking-tight group">
          <span className="text-zinc-400 group-hover:text-black transition-colors">&lt;</span>
          <span className="text-zinc-900">{personalInfo.name.split(" ")[0]}</span>
          <span className="text-zinc-400 group-hover:text-black transition-colors"> /&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={activeSection === l.href.slice(1) ? "page" : undefined}
                className={`relative px-3.5 py-1.5 text-xs font-semibold transition-colors group ${
                  activeSection === l.href.slice(1) ? "text-black" : "text-zinc-500 hover:text-black"
                }`}
              >
                {l.label}
                <span className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 bg-black transition-transform origin-left rounded-full ${activeSection === l.href.slice(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-700 hover:text-black p-1 rounded-lg border border-zinc-200 hover:bg-zinc-100 transition-colors"
          aria-label="Toggle menu"
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
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200 overflow-hidden shadow-lg"
          >
            <ul className="flex flex-col items-center gap-1 py-4">
              {navLinks.map((l) => (
                <li key={l.href} className="w-full text-center">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 text-sm font-semibold transition-colors ${
                      activeSection === l.href.slice(1)
                        ? "bg-zinc-100 text-black"
                        : "text-zinc-700 hover:text-black hover:bg-zinc-100"
                    }`}
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
