import { BookOpen, ExternalLink } from "lucide-react";
import { research } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Research() {
  return (
    <Section id="research">
      <SectionHeading eyebrow="Publications & research" title="Peer-reviewed work" />
      <Reveal>
        <article
          className="relative overflow-hidden rounded-3xl border border-accent/30 p-[1px]"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          <div className="rounded-[calc(1.5rem-1px)] bg-background/92 p-7 backdrop-blur-xl sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-accent">
              <BookOpen className="h-3.5 w-3.5" /> IEEE Conference Paper
            </span>
            <h3 className="mt-5 text-xl leading-snug text-foreground sm:text-2xl">{research.title}</h3>
            <p className="mt-3 text-sm text-primary">{research.venue}</p>
            <ul className="mt-6 space-y-3">
              {research.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={research.link}
              target="_blank"
              rel="noreferrer"
              className="glow-btn mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Read IEEE Publication <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
