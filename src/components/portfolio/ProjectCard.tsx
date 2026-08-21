import { ExternalLink, Github, Maximize2 } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Pill } from "./primitives";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="glass glass-hover overflow-hidden rounded-3xl">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="relative overflow-hidden lg:min-h-full">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            width={1200}
            height={750}
            className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="pink">{project.badge}</Pill>
            {project.role ? <Pill>{project.role}</Pill> : null}
            {project.tool ? <Pill tone="mint">{project.tool}</Pill> : null}
          </div>

          <h3 className="mt-4 text-xl text-foreground">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-accent/80">Tech stack</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li key={t} className="rounded-full border border-primary/25 bg-surface/50 px-2.5 py-1 text-[11px] text-foreground/85">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-accent/80">Key features</p>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {project.features.slice(0, 6).map((f) => (
                <li key={f} className="flex gap-2 text-xs text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary/80" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glow-btn inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs text-foreground/90 hover:border-accent/50"
              >
                {l.label.includes("GitHub") ? <Github className="h-3.5 w-3.5" /> : <ExternalLink className="h-3.5 w-3.5" />}
                {l.label}
              </a>
            ))}
            <button
              onClick={onOpen}
              className="glow-btn inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              <Maximize2 className="h-3.5 w-3.5" /> View Project
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
