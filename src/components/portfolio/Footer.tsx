import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative mt-10">
      <div className="animated-line" />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-5 py-10 text-center sm:px-8">
        <div>
          <p className="font-display text-base text-foreground">{profile.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Full Stack Developer | AI/ML Engineer | Data Analytics
          </p>
        </div>
        <div className="flex gap-3">
          {[
            { href: profile.github, Icon: Github, label: "GitHub" },
            { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="glow-btn grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/50 text-primary hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
