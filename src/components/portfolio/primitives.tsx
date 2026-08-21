import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as "div";
  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-mint/80">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle ? <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p> : null}
      <div className="divider-glow mt-6" />
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24", className)}>
      {children}
    </section>
  );
}

export function Pill({ children, tone = "lavender" }: { children: ReactNode; tone?: "lavender" | "pink" | "mint" }) {
  const tones = {
    lavender: "border-primary/40 text-primary shadow-[0_0_18px_-8px_var(--lavender)]",
    pink: "border-secondary/40 text-secondary shadow-[0_0_18px_-8px_var(--pink)]",
    mint: "border-accent/40 text-accent shadow-[0_0_18px_-8px_var(--mint)]",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border bg-surface/60 px-3 py-1 text-xs font-medium backdrop-blur-sm",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}
