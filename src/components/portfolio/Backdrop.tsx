/** Subtle animated technical background with fine horizontal/vertical grid matrix + ambient radial glows. */
export function Backdrop() {
  const particles = Array.from({ length: 20 });
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Radial Glow Orbs behind sections */}
      <div className="absolute -left-40 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="absolute -right-32 top-1/3 h-[38rem] w-[38rem] rounded-full bg-purple-600/10 blur-[170px]" />
      <div className="absolute bottom-10 left-1/4 h-[34rem] w-[34rem] rounded-full bg-pink-500/8 blur-[160px]" />

      {/* Tech Grid Matrix Overlay with Subtle Gradient Fade */}
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)]" />

      {/* Floating Micro Particles */}
      {particles.map((_, i) => (
        <span
          key={i}
          className="animate-float-soft absolute rounded-full"
          style={{
            left: `${(i * 37 + 11) % 100}%`,
            top: `${(i * 53 + 17) % 100}%`,
            height: `${2 + (i % 2)}px`,
            width: `${2 + (i % 2)}px`,
            backgroundColor: i % 2 === 0 ? "rgba(34, 211, 238, 0.4)" : "rgba(139, 92, 246, 0.4)",
            animationDelay: `${(i * 0.5) % 5}s`,
            animationDuration: `${8 + (i % 4)}s`,
            boxShadow: i % 2 === 0 ? "0 0 6px #22D3EE" : "0 0 6px #8B5CF6",
          }}
        />
      ))}
    </div>
  );
}
