import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic journey" />
      <ol className="relative ml-3 border-l border-primary/25 pl-6 sm:pl-8">
        {education.map((e, i) => (
          <Reveal as="li" key={e.school} delay={i * 100} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[2.15rem] grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-surface text-primary sm:-left-[2.65rem]"
              style={{ boxShadow: "var(--glow-lavender)" }}
            >
              <GraduationCap className="h-4 w-4" />
            </span>
            <div className="glass glass-hover rounded-2xl p-5">
              <p className="text-xs uppercase tracking-wider text-accent">{e.period}</p>
              <h3 className="mt-2 text-base text-foreground">{e.school}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
              <p className="mt-3 inline-block rounded-full border border-secondary/40 px-3 py-1 text-xs text-secondary">
                {e.score}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
