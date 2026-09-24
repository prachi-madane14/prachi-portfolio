import { CalendarDays, Globe2, HeartHandshake, Sparkles, ExternalLink } from "lucide-react";
import { activities, languages, seminars, softSkills } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Activities() {
  return (
    <Section id="activities" className="py-20">
      <Reveal className="mb-10">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
          EXTRACURRICULAR & STRENGTHS
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          ACTIVITIES & SKILLS
        </h2>
      </Reveal>

      {/* ACTIVITIES ARCHIVE LIST */}
      <div className="grid gap-4 md:grid-cols-2 mb-14">
        {activities.map((a, i) => (
          <Reveal key={a.title} delay={i * 60}>
            <div className="group rounded-2xl border border-white/10 bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                    {a.title.includes("Blood") ? (
                      <HeartHandshake className="h-4.5 w-4.5 text-pink-400" />
                    ) : (
                      <Sparkles className="h-4.5 w-4.5 text-cyan-400" />
                    )}
                  </span>
                  <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {a.title}
                  </p>
                </div>

                {a.certificateUrl && (
                  <a
                    href={a.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 transition-all hover:bg-cyan-500/20 hover:text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* SEMINARS & WORKSHOPS */}
      <Reveal className="mb-6">
        <h3 className="text-xl font-bold tracking-tight text-white font-display">Seminars & Workshops</h3>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 mb-14">
        {seminars.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div className="group rounded-2xl border border-white/10 bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-cyan-500/40">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>{s.date}</span>
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {s.title}
              </h4>
              <p className="mt-1 text-xs text-slate-400 font-medium">{s.host}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* LANGUAGES & CORE COMPETENCIES */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Languages */}
        <div>
          <Reveal className="mb-4">
            <h3 className="text-lg font-bold text-white font-display">Languages Spoken</h3>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-3">
            {languages.map((l, i) => (
              <Reveal key={l.name} delay={i * 60}>
                <div className="group rounded-xl border border-white/10 bg-[#0A0A0A] p-4 text-center transition-all hover:border-purple-500/40">
                  <Globe2 className="h-4 w-4 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white group-hover:text-cyan-300">{l.name}</p>
                  <p className="text-xs text-slate-400">{l.level}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div>
          <Reveal className="mb-4">
            <h3 className="text-lg font-bold text-white font-display">Core Competencies</h3>
          </Reveal>
          <Reveal>
            <ul className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs font-medium text-slate-300 transition-all hover:border-cyan-500/40 hover:text-white hover:bg-cyan-500/10"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
