/** Soft gradient glows + floating particles behind the page content. */
export function Backdrop() {
  const particles = Array.from({ length: 18 });
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-primary/12 blur-[140px]" />
      <div className="absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-secondary/10 blur-[150px]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-accent/8 blur-[150px]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(oklch(0.98_0.01_265/0.06)_1px,transparent_1px),linear-gradient(90deg,oklch(0.98_0.01_265/0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      {particles.map((_, i) => (
        <span
          key={i}
          className="animate-float-soft absolute rounded-full bg-accent/40"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            height: `${2 + (i % 3)}px`,
            width: `${2 + (i % 3)}px`,
            animationDelay: `${i * 0.45}s`,
            animationDuration: `${6 + (i % 5)}s`,
            boxShadow: "0 0 10px var(--mint)",
          }}
        />
      ))}
    </div>
  );
}
