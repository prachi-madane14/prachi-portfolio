import { ArrowRight } from "lucide-react";
import { profile, RESUME_URL } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

const contactLinks = [
  {
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "GITHUB",
    value: "prachi-madane14",
    href: profile.github,
  },
  {
    label: "LINKEDIN",
    value: "prachi-madane",
    href: profile.linkedin,
  },
  {
    label: "RESUME",
    value: "Download PDF",
    href: RESUME_URL,
    download: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="py-28">
      {/* Eyebrow Label */}
      <Reveal className="mb-8">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
          GET IN TOUCH
        </div>
      </Reveal>

      {/* Dramatic Huge Typography Heading */}
      <Reveal className="mb-20">
        <h2 className="text-5xl font-extrabold tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9]">
          LET&apos;S
          <br />
          BUILD
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-white">
            SOMETHING
          </span>
          <br />
          MEANINGFUL.
        </h2>
      </Reveal>

      {/* Large Interactive Link Rows */}
      <div className="flex flex-col border-t border-white/10">
        {contactLinks.map((link, i) => (
          <Reveal key={link.label} delay={i * 80}>
            <a
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noreferrer"}
              download={link.download ? true : undefined}
              className="group relative flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-xs font-bold text-cyan-400">
                  0{i + 1}
                </span>

                <span className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-3 group-hover:text-cyan-300">
                  {link.label}
                </span>
              </div>

              <div className="flex items-center gap-4 pl-10 sm:pl-0">
                <span className="font-mono text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                  {link.value}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 group-hover:scale-110">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}