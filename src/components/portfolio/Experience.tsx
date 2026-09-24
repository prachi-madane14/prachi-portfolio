import { Briefcase, ArrowUpRight, Calendar, Building2 } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Experience() {
  return (
    <Section id="experience" className="py-24">
      <Reveal className="mb-14">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
          EXPERIENCE & INDUSTRY PRACTICE
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          TIMELINE
        </h2>
      </Reveal>

      {/* Cinematic Experience List */}
      <div className="flex flex-col gap-10">
        {experience.map((e, i) => (
          <Reveal key={`${e.role}-${e.company}`} delay={i * 100}>
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 sm:p-10 transition-all duration-400 hover:border-cyan-500/40 hover:bg-white/[0.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(34,211,238,0.15)]">
              {/* Large Index Number */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                <span className="font-mono text-4xl sm:text-6xl font-extrabold text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors">
                  0{i + 1}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono font-semibold text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
                  <Calendar className="h-3.5 w-3.5" /> {e.period}
                </span>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {e.role}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 font-mono text-base font-semibold text-purple-400">
                    <Building2 className="h-4 w-4 text-purple-400" />
                    <span>{e.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                      {e.mode}
                    </span>
                  </div>

                  {e.certificateUrl && (
                    <div className="mt-6">
                      <a
                        href={e.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white"
                      >
                        <span>Completion Certificate</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Bullet Highlights */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                    KEY CONTRIBUTIONS
                  </h4>
                  <ul className="space-y-3">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed font-medium">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_#22D3EE]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
