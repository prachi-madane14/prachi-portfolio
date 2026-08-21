import { useEffect, useState } from "react";
import { Award, X } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Certifications() {
  const [preview, setPreview] = useState<{ title: string; image: string } | null>(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [preview]);

  return (
    <Section id="certifications">
      <SectionHeading eyebrow="Certifications" title="Verified learning" />
      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <article className="glass glass-hover flex h-full flex-col overflow-hidden rounded-2xl">
              <img
                src={c.image}
                alt={`${c.title} certificate`}
                loading="lazy"
                width={1200}
                height={850}
                className="h-40 w-full border-b border-border object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/30 px-2.5 py-1 text-[11px] text-primary">
                  <Award className="h-3 w-3" /> {c.issuer}
                </span>
                <h3 className="mt-3 text-base text-foreground">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                <button
                  onClick={() => setPreview({ title: c.title, image: c.image })}
                  className="glow-btn mt-5 w-fit rounded-full border border-accent/40 px-4 py-2 text-xs text-accent"
                >
                  View Certificate
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {preview ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={preview.title}
          className="fixed inset-0 z-[70] grid place-items-center bg-background/90 p-4 backdrop-blur-md"
          onClick={() => setPreview(null)}
        >
          <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between gap-4">
              <h3 className="text-sm text-foreground">{preview.title}</h3>
              <button
                onClick={() => setPreview(null)}
                aria-label="Close certificate preview"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <img src={preview.image} alt={preview.title} className="w-full rounded-2xl border border-accent/30" />
          </div>
        </div>
      ) : null}
    </Section>
  );
}
