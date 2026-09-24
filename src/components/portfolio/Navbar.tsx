import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, RESUME_URL } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
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
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Main Navigation"
      >
        {/* Left Brand Logo */}
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-2 font-display text-base font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="font-mono text-cyan-400 font-bold">[</span>
          <span className="text-white tracking-widest uppercase">PRACHI.M</span>
          <span className="font-mono text-cyan-400 font-bold">]</span>
        </button>

        {/* Center Status Indicator - Desktop */}
        <div className="hidden lg:flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1 text-[11px] font-mono font-medium text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <span className="uppercase tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        {/* Right Desktop Nav Links */}
        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`relative rounded-md px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Resume Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={RESUME_URL}
            download
            className="flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 transition-all hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white shadow-[0_0_12px_rgba(34,211,238,0.2)]"
          >
            <Download className="h-3.5 w-3.5" /> RESUME
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {open ? (
        <div className="mx-auto max-w-7xl px-5 pt-3 lg:hidden">
          <div className="rounded-2xl border border-white/10 bg-[#0A0A0A]/95 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 py-2 text-xs font-mono text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className={`w-full rounded-xl px-3 py-2.5 text-left text-xs font-semibold tracking-wider uppercase transition-colors ${
                      active === item.id
                        ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="col-span-2 pt-2 border-t border-white/10">
                <a
                  href={RESUME_URL}
                  download
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}
