import { ExternalLink, Github, Maximize2 } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Pill } from "./primitives";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="glass glass-hover flex h-full flex-col overflow-hidden rounded-3xl">
      {/* =========================================================
          PROJECT IMAGE
          ========================================================= */}
      <div className="relative w-full overflow-hidden bg-surface/30">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          width={1200}
          height={750}
          className="block h-auto w-full"
        />
      </div>

      {/* =========================================================
          PROJECT INFORMATION
          ========================================================= */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="pink">{project.badge}</Pill>

          {project.role ? <Pill>{project.role}</Pill> : null}

          {project.tool ? <Pill tone="mint">{project.tool}</Pill> : null}
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl leading-snug text-foreground">{project.title}</h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {/* =======================================================
            TECH STACK
            ======================================================= */}
        <div className="mt-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-accent/80">Tech stack</p>

          <ul className="mt-2 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-primary/25 bg-surface/50 px-2.5 py-1 text-[11px] text-foreground/85"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* =======================================================
            BUTTONS
            ======================================================= */}
        <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glow-btn inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs text-foreground/90 hover:border-accent/50"
            >
              {link.label.includes("GitHub") ? (
                <Github className="h-3.5 w-3.5" />
              ) : (
                <ExternalLink className="h-3.5 w-3.5" />
              )}

              {link.label}
            </a>
          ))}

          {/* View Project */}
          <button
            onClick={onOpen}
            className="glow-btn inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <Maximize2 className="h-3.5 w-3.5" />
            View Project
          </button>
        </div>
      </div>
    </article>
  );
}
