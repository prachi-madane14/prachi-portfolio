import { useMemo, useState } from "react";
import { projects, type Category, type Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { Reveal, Section, SectionHeading } from "./primitives";

const filters: ("All" | Category)[] = ["All", "Full Stack", "AI/ML", "Data Analytics"];

export function Projects() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        subtitle="Full stack products, applied machine learning systems and analytics dashboards — filter to explore."
      />

      {/* =========================================================
          PROJECT FILTERS
          ========================================================= */}
      <Reveal className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`glow-btn rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              filter === f
                ? "border-transparent text-primary-foreground"
                : "border-border bg-surface/50 text-muted-foreground hover:text-foreground"
            }`}
            style={filter === f ? { backgroundImage: "var(--gradient-brand)" } : undefined}
          >
            {f}
          </button>
        ))}
      </Reveal>

      {/* =========================================================
          PROJECT GRID
          1 column  → Mobile
          2 columns → Tablet
          3 columns → Desktop
          ========================================================= */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={i * 60} className="h-full">
            <ProjectCard project={p} onOpen={() => setSelected(p)} />
          </Reveal>
        ))}
      </div>

      {/* =========================================================
          PROJECT DETAIL MODAL
          ========================================================= */}
      {selected ? <ProjectDetail project={selected} onClose={() => setSelected(null)} /> : null}
    </Section>
  );
}
