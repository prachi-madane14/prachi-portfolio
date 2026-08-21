import { useEffect, useRef } from "react";

/** Subtle mint cursor trail. Disabled on touch devices and for reduced motion. */
export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const dots: { x: number; y: number; life: number; r: number }[] = [];
    let raf = 0;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const onMove = (e: MouseEvent) => {
      dots.push({ x: e.clientX, y: e.clientY, life: 1, r: 1.5 + Math.random() * 2.5 });
      if (dots.length > 60) dots.shift();
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = dots.length - 1; i >= 0; i--) {
        const d = dots[i];
        if (!d) continue;
        d.life -= 0.025;
        if (d.life <= 0) {
          dots.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * d.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 245, 250, ${0.35 * d.life})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(139, 245, 250, 0.6)";
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
    />
  );
}
