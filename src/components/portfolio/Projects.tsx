import { useMemo, useState } from "react";
import { projects, type Category, type Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { Reveal, Section } from "./primitives";

const filters: ("ALL" | Category)[] = ["ALL", "Full Stack", "AI/ML", "Data Analytics"];

export function Projects() {
  const [filter, setFilter] = useState<"ALL" | Category>("ALL");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "ALL" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <Section id="projects" className="py-24">
      {/* Title & Filters */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-14">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            SELECTED WORK
          </h2>
        </Reveal>

        {/* Minimal Text Filter Navigation */}
        <Reveal className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const isActive = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={isActive}
                className={`rounded-md px-4 py-2 font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                    : "border border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {f}
              </button>
            );
          })}
        </Reveal>
      </div>

      {/* Large Showcase List */}
      <div className="flex flex-col gap-12">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <ProjectCard project={p} index={i} onOpen={() => setSelected(p)} />
          </Reveal>
        ))}
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selected ? <ProjectDetail project={selected} onClose={() => setSelected(null)} /> : null}
    </Section>
  );
}
