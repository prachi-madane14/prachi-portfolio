import { skillGroups } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I build with"
        subtitle="From MERN application development to machine learning pipelines and analytics reporting."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 70}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="text-sm uppercase tracking-[0.18em] text-primary">{group.category}</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((s) => (
                  <li
                    key={s.name + group.category}
                    className="group flex items-center gap-2 rounded-xl border border-border bg-surface/50 px-3 py-2 text-xs text-foreground/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_0_24px_-10px_var(--mint)]"
                  >
                    {s.logo ? (
                      <img
                        src={s.logo}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_var(--mint)]"
                      />
                    ) : (
                      <span className="grid h-[18px] w-[18px] place-items-center rounded-md bg-primary/20 text-[10px] font-semibold text-primary">
                        {s.name.charAt(0)}
                      </span>
                    )}
                    {s.name}
                    {s.note ? <span className="text-[10px] text-accent/80">· {s.note}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
