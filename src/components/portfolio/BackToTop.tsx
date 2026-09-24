import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-40 flex items-center gap-2 rounded-full border border-cyan-500/40 bg-[#0A0A0A]/90 px-4 py-2.5 font-mono text-xs font-bold tracking-wider text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:text-white ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span>BACK TO TOP</span>
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
