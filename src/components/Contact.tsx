import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { personalInfo } from "../data/data";
import { fadeUp } from "../utils/animations";

export default function Contact() {
  const contactChannels = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone / WhatsApp", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: undefined },
  ];

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's connect.">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Contact info row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid gap-4 sm:grid-cols-3"
        >
          {contactChannels.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="group relative glass rounded-xl p-5 transition-colors text-center"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/60 group-hover:bg-white/20 group-hover:text-white transition-colors">
                <Icon size={18} />
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/35 mb-1">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-sm font-semibold text-white hover:underline inline-flex items-center gap-1"
                >
                  {value}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                <span className="text-sm font-semibold text-white">{value}</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          action={`mailto:${personalInfo.email}`}
          method="POST"
          encType="text/plain"
          className="glass rounded-xl p-6 md:p-8 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-white/50 mb-1.5">
                Full Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-white/50 mb-1.5">
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-xs font-semibold text-white/50 mb-1.5">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              placeholder="Project inquiry or collaboration..."
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-white/50 mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="Write your message here..."
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#0b1017] hover:bg-white/90 transition-colors shadow-[0_8px_32px_-8px_rgba(255,255,255,0.35)]"
          >
            <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            Send Message
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
