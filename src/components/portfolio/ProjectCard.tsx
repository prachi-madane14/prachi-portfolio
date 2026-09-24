import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Pill } from "./primitives";

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <article
      data-cursor="project"
      onClick={onOpen}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-9 transition-all duration-500 hover:border-cyan-500/50 hover:bg-white/[0.03] hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(34,211,238,0.2)]"
    >
      <div
        className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
          isEven ? "" : "lg:grid-flow-dense"
        }`}
      >
        {/* Project Visual Container */}
        <div
          className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#050505] aspect-[16/10] ${
            isEven ? "" : "lg:col-start-2"
          }`}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            width={1200}
            height={750}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle Dark Gradient Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />

          {/* Floating Number Badge inside image */}
          <div className="absolute top-4 left-4 font-mono text-xl font-extrabold text-cyan-400 bg-[#050505]/80 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded-lg">
            0{index + 1}
          </div>
        </div>

        {/* Project Info */}
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Pill tone="pink">{project.badge}</Pill>
            {project.role ? <Pill tone="lavender">{project.role}</Pill> : null}
            {project.tool ? <Pill tone="mint">{project.tool}</Pill> : null}
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-6">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2">
              TECH STACK
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-slate-300 group-hover:border-cyan-500/30 group-hover:text-white transition-colors"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Links */}
          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-slate-200 transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                {link.label.includes("GitHub") ? (
                  <Github className="h-3.5 w-3.5" />
                ) : (
                  <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
                )}
                <span>{link.label}</span>
              </a>
            ))}

            <button
              onClick={onOpen}
              className="ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 text-xs font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
