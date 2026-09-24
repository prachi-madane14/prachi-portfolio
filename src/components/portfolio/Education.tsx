import { education } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Education() {
  return (
    <Section id="education" className="py-20">
      <Reveal className="mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
          ACADEMIC JOURNEY
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          EDUCATION
        </h2>
      </Reveal>

      {/* Vertical Timeline with Large Years */}
      <ol className="relative ml-4 border-l border-cyan-500/30 pl-8 sm:pl-12">
        {education.map((e, i) => (
          <Reveal as="li" key={e.school} delay={i * 100} className="relative pb-12 last:pb-0">
            {/* Timeline Node Ring */}
            <span className="absolute -left-[2.35rem] sm:-left-[3.35rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#050505] shadow-[0_0_12px_#22D3EE]">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <div className="group rounded-2xl border border-white/10 bg-[#0A0A0A] p-7 transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.03] hover:shadow-[0_15px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(34,211,238,0.15)]">
              {/* Large Year Display */}
              <span className="font-mono text-2xl font-extrabold text-cyan-400 sm:text-4xl tracking-tight">
                {e.period}
              </span>

              <h3 className="mt-3 text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {e.school}
              </h3>

              <p className="mt-1.5 text-sm font-medium text-slate-300">{e.degree}</p>

              <div className="mt-4 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                SCORE: {e.score}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
