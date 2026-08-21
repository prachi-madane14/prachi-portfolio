import { Sparkles } from "lucide-react";
import { aboutPoints } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About me"
        title="Engineer across product, models and data"
        subtitle="Computer Engineering graduate with hands-on experience in full-stack development, AI/ML, and data analytics — from REST APIs and authentication to model development and Power BI dashboards."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {aboutPoints.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="glass glass-hover h-full rounded-2xl p-6">
              <span className="mb-4 grid h-9 w-9 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Sparkles className="h-4 w-4" />
              </span>
              <h3 className="text-base text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
