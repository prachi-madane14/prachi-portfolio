import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Internships & Practice" />

      <ol className="relative ml-3 border-l border-secondary/25 pl-6 sm:pl-8">
        {experience.map((e, i) => (
          <Reveal
            as="li"
            key={`${e.role}-${e.company}`}
            delay={i * 110}
            className="relative pb-10 last:pb-0"
          >
            <span
              className="absolute left-[-2.15rem] grid h-8 w-8 place-items-center rounded-full border border-secondary/40 bg-surface text-secondary sm:left-[-2.65rem]"
              style={{ boxShadow: "0 0 26px -8px var(--pink)" }}
            >
              <Briefcase className="h-4 w-4" />
            </span>

            <div className="glass glass-hover rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base text-foreground">
                  {e.role}
                  <span className="text-primary"> — {e.company}</span>
                </h3>

                <p className="text-xs text-accent">{e.period}</p>
              </div>

              <p className="mt-1 text-xs text-muted-foreground">{e.mode}</p>

              <ul className="mt-4 space-y-2">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                    {p}
                  </li>
                ))}
              </ul>

              {e.certificateUrl && (
                <a
                  href={e.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
                >
                  View Completion Certificate →
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
