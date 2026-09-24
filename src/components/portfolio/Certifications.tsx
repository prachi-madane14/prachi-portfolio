import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Certifications() {
  // Duplicate list to ensure smooth infinite loop
  const marqueeItems = [...certifications, ...certifications];

  return (
    <Section id="certifications" className="py-20 overflow-hidden">
      <Reveal className="mb-10">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
          VERIFIED CREDENTIALS
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          CERTIFICATIONS
        </h2>
      </Reveal>

      {/* Horizontally Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left/Right Fading Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />

        <div className="animate-marquee flex items-center gap-6">
          {marqueeItems.map((c, i) => (
            <div
              key={`${c.title}-${i}`}
              onClick={() => window.open(c.certificateUrl, "_blank")}
              className="group flex w-80 shrink-0 cursor-pointer flex-col rounded-2xl border border-white/10 bg-[#0A0A0A] p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-purple-300">
                  <Award className="h-3.5 w-3.5 text-purple-400" /> {c.issuer}
                </span>

                <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>

              <h3 className="mt-3 text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                {c.title}
              </h3>

              <p className="mt-1 text-xs text-slate-400 line-clamp-2">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
