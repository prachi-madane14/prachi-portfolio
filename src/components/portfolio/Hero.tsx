import { ArrowRight, Download, Mail } from "lucide-react";
import { profile, RESUME_URL } from "@/data/portfolio";
/** Replace this import with Prachi's real photo (same path or a new file in src/assets). */
import profilePhoto from "@/assets/profile-placeholder.jpg";
import { Reveal } from "./primitives";

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  return (
    <section id="home" className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-surface/60 px-3 py-1 text-xs text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--mint)]" />
            Open to opportunities
          </p>
          <h1 className="text-4xl leading-[1.1] sm:text-6xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 font-display text-sm text-foreground/80 sm:text-base">{profile.tagline}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="glow-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Explore My Work <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={RESUME_URL}
              download
              className="glow-btn inline-flex items-center gap-2 rounded-full border border-accent/50 bg-surface/60 px-5 py-2.5 text-sm font-medium text-accent"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="glow-btn inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-surface/60 px-5 py-2.5 text-sm font-medium text-secondary"
            >
              <Mail className="h-4 w-4" /> Let&apos;s Connect
            </button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {profile.badges.map((b, i) => (
              <li
                key={b}
                className="rounded-full border border-primary/25 bg-surface/50 px-3 py-1.5 text-xs text-foreground/85 backdrop-blur-sm transition-shadow hover:shadow-[0_0_22px_-8px_var(--lavender)]"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="justify-self-center">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            <div className="animate-pulse-ring absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,var(--lavender),var(--mint),var(--pink),var(--lavender))] opacity-30 blur-2xl" />
            <div className="animate-float-soft absolute inset-0 rounded-full p-[2px]" style={{ backgroundImage: "var(--gradient-brand)" }}>
              <div className="h-full w-full overflow-hidden rounded-full bg-background p-1.5">
                <img
                  src={profilePhoto}
                  alt="Portrait of Prachi Madane"
                  width={900}
                  height={900}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
