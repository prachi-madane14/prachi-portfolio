import { useState } from "react";
import { skillGroups } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <Section id="skills" className="py-20">
      <Reveal className="mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
          SYSTEM STACK & MAP
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          MY STACK
        </h2>
      </Reveal>

      {/* Technical Grid Map */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 60}>
            <div className="h-full rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-cyan-500/30">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  // {group.category}
                </span>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((s) => {
                  const isHovered = hoveredSkill === s.name;
                  const isDimmed = hoveredSkill !== null && !isHovered;

                  return (
                    <li
                      key={s.name + group.category}
                      onMouseEnter={() => setHoveredSkill(s.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`group flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                        isHovered
                          ? "border-cyan-400 bg-cyan-500/15 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] scale-105"
                          : isDimmed
                          ? "border-white/5 bg-white/[0.01] text-slate-600 opacity-40"
                          : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-500/50 hover:text-white"
                      }`}
                    >
                      {s.logo ? (
                        <img
                          src={s.logo}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          width={16}
                          height={16}
                          className="h-4 w-4 object-contain transition-transform duration-200 group-hover:scale-110"
                        />
                      ) : (
                        <span className="flex h-4 w-4 items-center justify-center rounded bg-purple-500/20 text-[10px] font-bold text-purple-300">
                          {s.name.charAt(0)}
                        </span>
                      )}

                      <span className={isHovered ? "underline underline-offset-4" : ""}>
                        {s.name}
                      </span>

                      {s.note ? (
                        <span className="text-[10px] text-purple-400">· {s.note}</span>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
