import { Trophy, Calendar } from "lucide-react";
import { leadership } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Leadership() {
  return (
    <Section id="leadership" className="py-20">
      <Reveal className="mb-10">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
          POSITIONS OF RESPONSIBILITY
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          {leadership.org}
        </h2>
        <p className="mt-2 text-sm text-slate-400 font-medium max-w-2xl">
          {leadership.about}
        </p>
      </Reveal>

      {/* Interactive Archive Rows */}
      <div className="flex flex-col gap-4">
        {leadership.roles.map((r, i) => (
          <Reveal key={r.role} delay={i * 80}>
            <div className="group rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(139,92,246,0.15)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-400">
                    <Trophy className="h-4 w-4 text-cyan-400" />
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {r.role}
                  </h3>
                </div>

                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                  <Calendar className="h-3 w-3" /> {r.period}
                </span>
              </div>

              <ul className="space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_#22D3EE]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
