import { Trophy } from "lucide-react";
import { leadership } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Leadership() {
  return (
    <Section id="leadership">
      <SectionHeading
        eyebrow="Positions of responsibility"
        title={leadership.org}
        subtitle={leadership.about}
      />
      <ol className="relative ml-3 border-l border-accent/25 pl-6 sm:pl-8">
        {leadership.roles.map((r, i) => (
          <Reveal as="li" key={r.role} delay={i * 100} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[2.15rem] grid h-8 w-8 place-items-center rounded-full border border-accent/40 bg-surface text-accent sm:-left-[2.65rem]"
              style={{ boxShadow: "var(--glow-mint)" }}
            >
              <Trophy className="h-4 w-4" />
            </span>
            <div className="glass glass-hover rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base text-foreground">{r.role}</h3>
                <p className="text-xs text-primary">{r.period}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/80" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
