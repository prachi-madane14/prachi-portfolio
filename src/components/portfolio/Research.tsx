import { BookOpen, ExternalLink, Activity } from "lucide-react";
import { research } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Research() {
  return (
    <Section id="research" className="py-24">
      <Reveal className="mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
          PEER-REVIEWED SCIENTIFIC WORK
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          RESEARCH / PUBLICATION
        </h2>
      </Reveal>

      <Reveal>
        <article className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0A0A0A] p-8 sm:p-12 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_20px_50px_rgba(34,211,238,0.2)]">
          {/* Scientific Signal Waveform Animation Background SVG */}
          <div className="pointer-events-none absolute inset-0 -z-0 opacity-20 transition-opacity group-hover:opacity-30">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 300">
              <path
                d="M0,150 Q150,90 300,150 T600,150 T900,150 T1200,150"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="2"
                className="animate-pulse"
              />
              <path
                d="M0,150 Q100,200 250,120 T550,180 T850,130 T1200,150"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                <BookOpen className="h-4 w-4 text-cyan-400" /> IEEE CONFERENCE PAPER
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs font-semibold text-purple-300">
                <Activity className="h-3.5 w-3.5 text-purple-400" /> DATA SIGNAL ANALYSIS
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {research.title}
            </h3>

            <p className="mt-4 font-mono text-base font-bold text-cyan-400 sm:text-lg">
              {research.venue}
            </p>

            <ul className="mt-8 space-y-3 max-w-3xl">
              {research.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-white/10">
              <a
                href={research.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3.5 font-mono text-xs font-bold tracking-wider text-white uppercase shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              >
                <span>READ IEEE PUBLICATION</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
