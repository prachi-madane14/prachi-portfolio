import { useEffect } from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Pill } from "./primitives";

export function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-background/85 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      <div
        className="glass my-6 w-full max-w-4xl rounded-3xl p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="glow-btn mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-xs text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Portfolio
        </button>

        <img
          src={project.image}
          alt={`${project.title} preview`}
          width={1200}
          height={750}
          className="mb-6 w-full rounded-2xl border border-border object-cover"
        />

        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="pink">{project.badge}</Pill>
          {project.role ? <Pill>{project.role}</Pill> : null}
          {project.tool ? <Pill tone="mint">{project.tool}</Pill> : null}
        </div>

        <h3 className="mt-4 text-2xl text-foreground sm:text-3xl">{project.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            { h: "Problem statement", t: project.problem },
            { h: "Solution", t: project.solution },
            { h: "My contribution", t: project.contribution },
          ].map((b) => (
            <div key={b.h} className="rounded-2xl border border-border bg-surface/40 p-5">
              <h4 className="text-sm text-accent">{b.h}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.t}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-border bg-surface/40 p-5">
            <h4 className="text-sm text-accent">Technologies</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-primary/25 px-2.5 py-1 text-[11px] text-foreground/85"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface/40 p-5">
          <h4 className="text-sm text-accent">Features</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/80" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-sm text-accent">Screenshots</h4>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {[0, 1].map((n) => (
              <img
                key={n}
                src={project.image}
                alt={`${project.title} screenshot ${n + 1}`}
                loading="lazy"
                width={1200}
                height={750}
                className="w-full rounded-xl border border-border object-cover opacity-90"
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glow-btn inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface/60 px-4 py-2 text-xs text-accent"
            >
              {l.label.includes("GitHub") ? (
                <Github className="h-3.5 w-3.5" />
              ) : (
                <ExternalLink className="h-3.5 w-3.5" />
              )}
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
