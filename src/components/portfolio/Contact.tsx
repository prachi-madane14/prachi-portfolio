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
        title="Have an idea? Let’s turn it into something impactful."
        subtitle="I'm always open to new opportunities, collaborations, and conversations. Have an interesting idea, an exciting project, or simply want to connect? I'd love to hear from you."
      />

      <Reveal>
        <div className="glass rounded-3xl p-7 sm:p-9">
          <h3 className="text-lg text-foreground">{profile.name}</h3>

          <p className="mt-1 text-sm text-primary">{profile.tagline}</p>

          <ul className="mt-6 space-y-4 text-sm">
            {/* Location */}
            <li className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              {profile.location}
            </li>

            {/* Email */}
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />

              <a
                href={`mailto:${profile.email}`}
                className="text-muted-foreground hover:text-foreground"
              >
                {profile.email}
              </a>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" />

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="text-muted-foreground hover:text-foreground"
              >
                {profile.phone}
              </a>
            </li>
          </ul>

          {/* Resume Button + Social Icons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Download Resume */}
            <a
              href={RESUME_URL}
              download
              className="glow-btn inline-flex items-center gap-2 rounded-full border border-accent/50 bg-surface/60 px-5 py-2.5 text-sm font-medium text-accent"
            >
              <Download className="h-4 w-4" />
              Download My Resume
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glow-btn grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/50 text-primary hover:text-accent"
            >
              <Github className="h-5 w-5" />
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glow-btn grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/50 text-primary hover:text-accent"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}