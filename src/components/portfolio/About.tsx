import { useState } from "react";
import { aboutPoints } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

const capabilityData = [
  {
    num: "01",
    tag: "FULL STACK",
    title: aboutPoints[0]?.title || "Full Stack Engineering",
    text: aboutPoints[0]?.text || "Builds MERN applications end to end — REST API development, authentication, and database management.",
  },
  {
    num: "02",
    tag: "AI / ML",
    title: aboutPoints[1]?.title || "AI / Machine Learning",
    text: aboutPoints[1]?.text || "AI-powered applications using BERT, XGBoost and Random Forest, with model development and data preprocessing.",
  },
  {
    num: "03",
    tag: "DATA",
    title: aboutPoints[2]?.title || "Data Analytics",
    text: aboutPoints[2]?.text || "Data analytics dashboards in Power BI, with cleaning, modeling and visualization to drive decisions.",
  },
  {
    num: "04",
    tag: "GEN AI",
    title: aboutPoints[3]?.title || "Always Learning",
    text: aboutPoints[3]?.text || "Exploring emerging technologies including Generative AI, RAG, and Agentic AI.",
  },
];

export function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="about" className="py-24">
      {/* Section Eyebrow */}
      <Reveal className="mb-6">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
          ABOUT ME & CAPABILITIES
        </div>
      </Reveal>

      {/* Large Typography Scroll Heading */}
      <Reveal className="mb-16 max-w-4xl">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
          I BUILD{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            DIGITAL SYSTEMS.
          </span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-xl font-medium">
          Computer Engineering graduate with hands-on experience in full-stack development, AI/ML, and data analytics — from REST APIs and authentication to model development and Power BI dashboards.
        </p>
      </Reveal>

      {/* Horizontal Animated Line Drawing Across Section */}
      <div className="relative mb-12 h-[1px] w-full overflow-hidden bg-white/10">
        <div className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 shadow-[0_0_10px_#22D3EE]" />
      </div>

      {/* 4 Large Horizontal Interactive Rows */}
      <div className="flex flex-col gap-4">
        {capabilityData.map((cap, i) => {
          const isHovered = hoveredIndex === i;
          return (
            <Reveal key={cap.num} delay={i * 80}>
              <div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-400 ${
                  isHovered
                    ? "border-cyan-500/50 bg-white/[0.04] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_25px_rgba(34,211,238,0.15)]"
                    : "border-white/10 bg-[#0A0A0A] p-6 sm:p-7"
                }`}
              >
                {/* Accent Highlight Bar on Left */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 transition-all duration-300 ${
                    isHovered ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                  }`}
                />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  {/* Number & Tag */}
                  <div className="flex items-center gap-6">
                    <span
                      className={`font-mono text-2xl sm:text-3xl font-extrabold transition-all duration-300 ${
                        isHovered ? "translate-x-2 text-cyan-400" : "text-slate-500"
                      }`}
                    >
                      {cap.num}
                    </span>

                    <h3
                      className={`font-display text-xl sm:text-3xl font-bold tracking-tight transition-all duration-300 ${
                        isHovered ? "translate-x-3 text-white" : "text-slate-200"
                      }`}
                    >
                      {cap.tag}
                    </h3>
                  </div>

                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {cap.title}
                  </span>
                </div>

                {/* Smooth Fading Description */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isHovered ? "mt-4 max-h-32 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pt-2 text-sm leading-relaxed text-slate-300 border-t border-white/10">
                    {cap.text}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
