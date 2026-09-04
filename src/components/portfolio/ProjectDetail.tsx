import { useEffect } from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Pill } from "./primitives";

export function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

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
      className="fixed inset-0 z-70 flex items-start justify-center overflow-y-auto bg-background/85 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      <div
        className="glass my-6 w-full max-w-5xl rounded-3xl p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Back Button */}
        <button
          onClick={onClose}
          className="glow-btn mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-xs text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </button>

        {/* Main Project Image */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          width={1200}
          height={750}
          className="mb-6 w-full rounded-2xl border border-border object-cover"
        />

        {/* Project Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="pink">{project.badge}</Pill>

          {project.role && <Pill>{project.role}</Pill>}

          {project.tool && <Pill tone="mint">{project.tool}</Pill>}
        </div>

        {/* Project Title */}
        <h3 className="mt-4 text-2xl text-foreground sm:text-3xl">{project.title}</h3>

        {/* Project Description */}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {/* Problem / Solution / Contribution / Technologies */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Problem Statement",
              content: project.problem,
            },
            {
              title: "Solution",
              content: project.solution,
            },
            {
              title: "My Contribution",
              content: project.contribution,
            },
          ].map((section) => (
            <div key={section.title} className="rounded-2xl border border-border bg-surface/40 p-5">
              <h4 className="text-sm font-medium text-accent">{section.title}</h4>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {section.content}
              </p>
            </div>
          ))}

          {/* Technologies */}
          <div className="rounded-2xl border border-border bg-surface/40 p-5">
            <h4 className="text-sm font-medium text-accent">Technologies</h4>

            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-primary/25 px-3 py-1 text-[11px] text-foreground/85"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-6 rounded-2xl border border-border bg-surface/40 p-5">
          <h4 className="text-sm font-medium text-accent">Key Features</h4>

          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/80" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Dataset */}
        {project.dataset && (
          <div className="mt-6 rounded-2xl border border-border bg-surface/40 p-5">
            <h4 className="text-sm font-medium text-accent">Dataset</h4>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.dataset}</p>
          </div>
        )}

        {/* Research Results */}
        {project.results && (
          <div className="mt-6">
            <h4 className="mb-4 text-sm font-medium text-accent">Research Results</h4>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* Accuracy */}
              <div className="rounded-2xl border border-border bg-surface/40 p-5 text-center">
                <p className="text-xs text-muted-foreground">Best Accuracy</p>

                <p className="mt-2 text-3xl font-bold text-foreground">
                  {project.results.accuracy}
                </p>
              </div>

              {/* ROC AUC */}
              <div className="rounded-2xl border border-border bg-surface/40 p-5 text-center">
                <p className="text-xs text-muted-foreground">ROC-AUC</p>

                <p className="mt-2 text-3xl font-bold text-foreground">{project.results.rocAuc}</p>
              </div>

              {/* Best Model */}
              <div className="rounded-2xl border border-border bg-surface/40 p-5 text-center">
                <p className="text-xs text-muted-foreground">Best Model</p>

                <p className="mt-2 text-xl font-bold text-foreground">
                  {project.results.bestModel}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Research Publication */}
        {project.publication && (
          <div className="mt-6 rounded-2xl border border-border bg-surface/40 p-5">
            <h4 className="text-sm font-medium text-accent">Research Publication</h4>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.publication}
            </p>
          </div>
        )}

        {/* Future Scope */}
        {project.futureScope && (
          <div className="mt-6 rounded-2xl border border-border bg-surface/40 p-5">
            <h4 className="text-sm font-medium text-accent">Future Scope</h4>

            <ul className="mt-3 grid gap-2">
              {project.futureScope.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ===================================================== */}
        {/* PROJECT SCREENSHOTS */}
        {/* ===================================================== */}

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-8">
            <div>
              <h4 className="text-sm font-medium text-accent">Project Screenshots</h4>

              <p className="mt-1 text-xs text-muted-foreground">
                Explore the NeoDetect interface and its major system components.
              </p>
            </div>

            <div className="mt-5 space-y-6">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={screenshot.title}
                  className="overflow-hidden rounded-2xl border border-border bg-surface/40"
                >
                  {/* Screenshot Number */}
                  <div className="border-b border-border px-5 py-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-accent/80">
                      Screenshot {index + 1}
                    </p>
                  </div>

                  {/* Screenshot Image */}
                  <div className="p-4 sm:p-5">
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      loading="lazy"
                      width={1200}
                      height={750}
                      className="w-full rounded-xl border border-border object-cover transition-transform duration-500 hover:scale-[1.01]"
                    />

                    {/* Screenshot Title */}
                    <h5 className="mt-5 text-lg font-medium text-foreground">{screenshot.title}</h5>

                    {/* Screenshot Description */}
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fallback if no screenshots exist */}
        {(!project.screenshots || project.screenshots.length === 0) && (
          <div className="mt-8">
            <h4 className="text-sm font-medium text-accent">Project Preview</h4>

            <div className="mt-4">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                width={1200}
                height={750}
                className="w-full rounded-xl border border-border object-cover"
              />
            </div>
          </div>
        )}

        {/* Project Links */}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glow-btn inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface/60 px-4 py-2 text-xs text-accent"
            >
              {link.label.toLowerCase().includes("github") ? (
                <Github className="h-3.5 w-3.5" />
              ) : (
                <ExternalLink className="h-3.5 w-3.5" />
              )}

              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
