import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { personalInfo } from "../data/data";
import { fadeUp } from "../utils/animations";

export default function Contact() {
  const contactChannels = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: undefined,
    },
  ];

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's connect.">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Contact info cards — horizontal row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={0}
          className="grid gap-4 sm:grid-cols-3"
        >
          {contactChannels.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="group relative bg-white rounded-2xl p-5 border border-zinc-200 shadow-sm hover:border-black hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-800 group-hover:bg-black group-hover:text-white transition-all">
                <Icon size={20} />
              </div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-zinc-400 mb-1">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-sm font-semibold text-zinc-900 hover:underline transition-all inline-flex items-center gap-1"
                >
                  {value}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                <span className="text-sm font-semibold text-zinc-900">
                  {value}
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Contact form — full width, centered */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={0.4}
          action={`mailto:${personalInfo.email}`}
          method="POST"
          encType="text/plain"
          className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold text-zinc-700 mb-1.5"
              >
                Full Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full rounded-xl bg-zinc-50 border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold text-zinc-700 mb-1.5"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="w-full rounded-xl bg-zinc-50 border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="block text-xs font-semibold text-zinc-700 mb-1.5"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              placeholder="Project inquiry or collaboration..."
              className="w-full rounded-xl bg-zinc-50 border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold text-zinc-700 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="Write your message here..."
              className="w-full rounded-xl bg-zinc-50 border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-black px-8 py-3 text-sm font-semibold text-white shadow-md shadow-black/10 hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            Send Message
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
