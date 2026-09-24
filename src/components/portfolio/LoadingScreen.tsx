import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast progress fill under ~800ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 15;
      });
    }, 45);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 300);
    }, 850);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-300 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Brand Logo Header */}
        <div className="flex items-center gap-1 font-display text-2xl font-bold tracking-wider text-white">
          <span className="text-cyan-400">PRACHI</span>
          <span className="text-slate-500">.M</span>
        </div>

        {/* Animated Progress Line Container */}
        <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-cyan-300 transition-all duration-150 ease-out shadow-[0_0_12px_#22D3EE]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          <span>SYSTEM_INIT</span>
          <span className="h-1 w-1 rounded-full bg-cyan-400 animate-ping" />
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
