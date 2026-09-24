import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile / touch device
    const checkMobile = () => {
      const hasTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsMobile(hasTouch);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest("[data-cursor='project']");
      const linkOrBtn = target.closest("a, button, [role='button'], [data-cursor='link']");

      if (projectCard) {
        setIsHovered(true);
        setCursorText("VIEW PROJECT");
      } else if (linkOrBtn) {
        setIsHovered(true);
        setCursorText("OPEN →");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-9999 overflow-hidden"
    >
      <div
        className={`fixed left-0 top-0 flex items-center justify-center rounded-full border border-cyan-400/80 bg-cyan-400/10 backdrop-blur-[2px] transition-all duration-150 ease-out shadow-[0_0_20px_rgba(34,211,238,0.4)] ${
          isHovered
            ? "h-20 w-20 -ml-10 -mt-10 bg-cyan-500/20 border-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.6)]"
            : "h-6 w-6 -ml-3 -mt-3"
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        {isHovered && cursorText ? (
          <span className="text-[10px] font-bold tracking-widest text-cyan-200 uppercase animate-pulse">
            {cursorText}
          </span>
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
        )}
      </div>
    </div>
  );
}
