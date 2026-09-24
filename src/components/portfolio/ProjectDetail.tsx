import { useEffect } from "react";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#070A0F]/90 p-4 backdrop-blur-2xl sm:p-8"
      onClick={onClose}
    >
      <div
        className="my-6 w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0D1117] p-6 shadow-2xl sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Back Button */}
        <button
          onClick={onClose}
          className="glow-btn mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 text-cyan-400" />
          Back to Portfolio
        </button>

        {/* Main Project Image */}
        <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[#070A0F]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            width={1200}
            height={750}
            className="w-full object-cover max-h-[480px]"
          />
        </div>

        {/* Project Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="pink">{project.badge}</Pill>
          {project.role && <Pill tone="lavender">{project.role}</Pill>}
          {project.tool && <Pill tone="mint">{project.tool}</Pill>}
        </div>

        {/* Project Title */}
        <h3 className="mt-4 text-2xl font-bold text-white sm:text-4xl">{project.title}</h3>

        {/* Project Description */}
        <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{project.description}</p>

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
            <div key={section.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">{section.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {section.content}
              </p>
            </div>
          ))}

          {/* Technologies */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">Technologies Used</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Key Features</h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dataset */}
        {project.dataset && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-400">Dataset Information</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.dataset}</p>
          </div>
        )}

        {/* Research Results */}
        {project.results && (
          <div className="mt-6">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-cyan-400">Research Results & Performance</h4>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5 text-center shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                <p className="text-xs font-semibold uppercase text-cyan-300">Best Accuracy</p>
                <p className="mt-2 text-3xl font-extrabold text-white">
                  {project.results.accuracy}
                </p>
              </div>
              <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-5 text-center shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <p className="text-xs font-semibold uppercase text-purple-300">ROC-AUC</p>
                <p className="mt-2 text-3xl font-extrabold text-white">{project.results.rocAuc}</p>
              </div>
              <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 p-5 text-center shadow-[0_0_15px_rgba(236,72,153,0.15)]">
                <p className="text-xs font-semibold uppercase text-pink-300">Best Model</p>
                <p className="mt-2 text-xl font-bold text-white">
                  {project.results.bestModel}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Research Publication */}
        {project.publication && (
          <div className="mt-6 rounded-2xl border border-purple-500/30 bg-purple-500/10 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300">Research Publication</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {project.publication}
            </p>
          </div>
        )}

        {/* Future Scope */}
        {project.futureScope && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Future Scope</h4>
            <ul className="mt-3 grid gap-2">
              {project.futureScope.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Project Screenshots</h4>
            <div className="mt-4 space-y-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={screenshot.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="border-b border-white/10 bg-white/5 px-5 py-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Screenshot {index + 1}: {screenshot.title}
                    </p>
                  </div>
                  <div className="p-4 sm:p-5">
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      loading="lazy"
                      width={1200}
                      height={750}
                      className="w-full rounded-xl border border-white/10 object-cover"
                    />
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Links */}
        <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-white/10">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glow-btn inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 hover:text-white"
            >
              {link.label.toLowerCase().includes("github") ? (
                <Github className="h-4 w-4" />
              ) : (
                <ExternalLink className="h-4 w-4" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
