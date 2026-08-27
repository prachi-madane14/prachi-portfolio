import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, RESUME_URL } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main"
      >
        <button
          onClick={() => go("home")}
          className="font-display text-lg font-semibold tracking-tight"
        >
          <span className="text-gradient">Prachi</span>
          <span className="text-foreground/70">.dev</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`rounded-full px-3 py-1.5 text-[13px] transition-colors ${
                  active === item.id
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <div className="glass border-t border-border/60 lg:hidden">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="col-span-2 pt-2">
              <a
                href={RESUME_URL}
                download
                className="flex items-center justify-center gap-2 rounded-lg border border-accent/40 px-3 py-2 text-sm text-accent"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
