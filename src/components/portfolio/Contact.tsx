import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile, RESUME_URL } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

const socials = [
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Let's connect"
        title="Let's Build Something Impactful Together."
        subtitle="I'm always open to opportunities, collaborations, and interesting projects in Full Stack Development, AI/ML, and Data Analytics."
      />

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="glass h-full rounded-3xl p-7 sm:p-9">
            <h3 className="text-lg text-foreground">{profile.name}</h3>
            <p className="mt-1 text-sm text-primary">{profile.tagline}</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" /> {profile.location}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Github className="h-4 w-4 text-accent" />
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  github.com/prachi-madane14
                </a>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="glow-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
              <a
                href={RESUME_URL}
                download
                className="glow-btn inline-flex items-center gap-2 rounded-full border border-accent/50 bg-surface/60 px-5 py-2.5 text-sm font-medium text-accent"
              >
                <Download className="h-4 w-4" /> Download My Resume
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass grid h-full grid-cols-2 gap-4 rounded-3xl p-7 sm:p-9">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface/40 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_-12px_var(--mint)]"
              >
                <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-accent" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
