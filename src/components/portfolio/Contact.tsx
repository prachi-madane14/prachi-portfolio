import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { profile, RESUME_URL } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";
import { ContactForm } from "./ContactForm";

const socialButtons = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
    isExternal: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
    isExternal: true,
  },
  {
    label: "Download Resume",
    href: RESUME_URL,
    icon: FileText,
    download: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="py-20 sm:py-24">
      {/* Eyebrow Label */}
      <Reveal className="mb-4">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
          GET IN TOUCH
        </div>
      </Reveal>

      {/* Proportional Section Heading */}
      <Reveal className="mb-8 sm:mb-10 max-w-3xl">
        <h2 className="text-[clamp(28px,5vw,56px)] font-extrabold tracking-tight text-white leading-tight">
          LET&apos;S BUILD{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-white">
            SOMETHING
          </span>{" "}
          MEANINGFUL.
        </h2>
      </Reveal>

      {/* Formspree Interactive Contact Form */}
      <Reveal className="mb-8">
        <ContactForm />
      </Reveal>

      {/* Horizontal Icon Buttons Row */}
      <Reveal>
        <div className="flex flex-row items-center gap-3 sm:gap-4 flex-nowrap">
          {socialButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <a
                key={btn.label}
                href={btn.href}
                aria-label={btn.label}
                target={btn.isExternal ? "_blank" : undefined}
                rel={btn.isExternal ? "noreferrer" : undefined}
                download={btn.download ? true : undefined}
                className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A] text-slate-300 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}