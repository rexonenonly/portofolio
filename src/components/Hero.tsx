import { motion } from "framer-motion";
import { Mail, MapPin, ChevronDown } from "lucide-react";
import { personalInfo } from "../data/data";
import { fadeUp } from "../utils/animations";

/* Brand icons not in lucide-react — lightweight inline SVGs */
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16 bg-white"
    >
      {/* Animated subtle grid background */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute top-1/4 -left-32 h-72 w-72 rounded-full bg-zinc-200/50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-zinc-200/40 blur-[120px] pointer-events-none" />

      {/* Floating subtle ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-zinc-400/40"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + i * 16}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3.5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Status badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-900 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-900" />
          </span>
          Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight text-zinc-900"
        >
          Hi, I'm{" "}
          <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-4 text-lg md:text-xl text-zinc-700 font-semibold tracking-wide"
        >
          {personalInfo.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-3 text-sm md:text-base text-zinc-500 max-w-lg mx-auto leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Location */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3.5}
          className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-zinc-500"
        >
          <MapPin size={14} className="text-zinc-800" />
          {personalInfo.location}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-md shadow-black/10 hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Contact Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 hover:border-black hover:bg-zinc-50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
          >
            View Projects
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="mt-8 flex items-center justify-center gap-3.5"
        >
          {[
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 hover:border-black hover:text-black hover:bg-zinc-50 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 hover:text-black transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
