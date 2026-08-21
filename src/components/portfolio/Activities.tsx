import { CalendarDays, Globe2, HeartHandshake, Sparkles } from "lucide-react";
import { activities, languages, seminars, softSkills } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Activities() {
  return (
    <Section id="activities">
      <SectionHeading eyebrow="Beyond code" title="Activities, workshops & strengths" />

      <div className="grid gap-5 md:grid-cols-2">
        {activities.map((a, i) => (
          <Reveal key={a} delay={i * 70}>
            <div className="glass glass-hover flex items-center gap-3 rounded-2xl p-5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-secondary/30 bg-secondary/10 text-secondary">
                {a.includes("Blood") ? <HeartHandshake className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
              </span>
              <p className="text-sm text-foreground/90">{a}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <h3 className="mt-16 text-lg text-foreground">Seminars & Workshops</h3>
      <div className="divider-glow mt-4 mb-8" />
      <ol className="relative ml-3 border-l border-primary/25 pl-6 sm:pl-8">
        {seminars.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 70} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[2.15rem] grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-surface text-primary sm:-left-[2.65rem]">
              <CalendarDays className="h-4 w-4" />
            </span>
            <div className="glass rounded-2xl p-5">
              <p className="text-xs text-accent">{s.date}</p>
              <h4 className="mt-1 text-base text-foreground">{s.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{s.host}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <h3 className="mt-16 text-lg text-foreground">Languages</h3>
      <div className="divider-glow mt-4 mb-8" />
      <div className="grid gap-4 sm:grid-cols-3">
        {languages.map((l, i) => (
          <Reveal key={l.name} delay={i * 80}>
            <div className="glass glass-hover rounded-2xl p-5">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Globe2 className="h-4 w-4" />
              </span>
              <p className="mt-4 text-base text-foreground">{l.name}</p>
              <p className="text-sm text-muted-foreground">{l.level}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <h3 className="mt-16 text-lg text-foreground">Core Competencies</h3>
      <div className="divider-glow mt-4 mb-8" />
      <Reveal>
        <ul className="flex flex-wrap gap-2.5">
          {softSkills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-primary/25 bg-surface/50 px-4 py-2 text-xs text-foreground/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/50 hover:shadow-[0_0_22px_-8px_var(--pink)]"
            >
              {s}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
