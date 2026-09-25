import { useEffect, useState } from "react";
import { ArrowRight, Download, Terminal, Cpu, Database, Mail, Linkedin, Github } from "lucide-react";
import { profile, RESUME_URL } from "@/data/portfolio";
import profilePhoto from "@/assets/profile-placeholder.jpg";
import { Reveal } from "./primitives";

const roles = [
  "FULL STACK DEVELOPER",
  "AI / ML ENGINEER",
  "DATA ANALYTICS",
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setAnimating(false);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-between mx-auto max-w-7xl px-5 pt-32 pb-12 sm:px-8 sm:pt-40"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] my-auto">
        {/* Left Column: Enormous Typography & Morphing Roles */}
        <Reveal>
          {/* Top Label */}
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
            HELLO, I&apos;M PRACHI
          </div>

          {/* Main Enormous Heading */}
          <h1 className="text-5xl font-extrabold tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9]">
            PRACHI
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
              MADANE
            </span>
          </h1>

          {/* Morphing Role Cycler */}
          <div className="mt-6 h-10 overflow-hidden font-display text-lg font-bold tracking-wider text-cyan-400 sm:text-2xl">
            <div
              className={`transition-all duration-300 transform ${
                animating ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <span className="inline-flex items-center gap-2 border-b-2 border-cyan-400/80 pb-1">
                {roles[roleIndex]}
              </span>
            </div>
          </div>

          {/* Supporting Intro Statement */}
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {profile.intro}
          </p>

          {/* Action CTAs + Social Icon Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]"
            >
              <span>EXPLORE WORK</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold tracking-wider text-cyan-300 uppercase backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white"
            >
              <Download className="h-4 w-4 text-cyan-400" />
              <span>DOWNLOAD RESUME</span>
            </a>

            {/* Lightweight Hero Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Rectangular Technical Composition */}
        <Reveal delay={120} className="justify-self-center lg:justify-self-end">
          <div className="relative w-72 sm:w-88">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-transparent blur-2xl" />

            {/* Technical Outer Frame */}
            <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#0A0A0A] p-2.5 shadow-2xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              {/* Scanline Effect Overlay */}
              <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden opacity-30">
                <div className="animate-scanline h-12 w-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent" />
              </div>

              {/* Photo Container */}
              <div className="relative overflow-hidden rounded-xl bg-[#050505] aspect-[4/5]">
                <img
                  src={profilePhoto}
                  alt="Portrait of Prachi Madane"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
              </div>

              {/* Corner Bracket Accents */}
              <span className="absolute top-2 left-2 h-3 w-3 border-t-2 border-l-2 border-cyan-400" />
              <span className="absolute top-2 right-2 h-3 w-3 border-t-2 border-r-2 border-cyan-400" />
              <span className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-cyan-400" />
              <span className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-cyan-400" />
            </div>

            {/* Floating Technical UI Metadata Elements */}
            <div className="absolute -top-3 -left-6 flex items-center gap-2 rounded-lg border border-white/10 bg-[#0A0A0A]/90 px-3 py-1.5 text-[11px] font-mono text-cyan-300 shadow-xl backdrop-blur-md">
              <Terminal className="h-3.5 w-3.5 text-cyan-400" />
              <span>01 / ENGINEERING</span>
            </div>

            <div className="absolute top-1/2 -right-6 flex items-center gap-2 rounded-lg border border-white/10 bg-[#0A0A0A]/90 px-3 py-1.5 text-[11px] font-mono text-purple-300 shadow-xl backdrop-blur-md">
              <Cpu className="h-3.5 w-3.5 text-purple-400" />
              <span>02 / AI</span>
            </div>

            <div className="absolute -bottom-3 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-[#0A0A0A]/90 px-3 py-1.5 text-[11px] font-mono text-pink-300 shadow-xl backdrop-blur-md">
              <Database className="h-3.5 w-3.5 text-pink-400" />
              <span>03 / DATA</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="mt-12 flex flex-col items-center justify-center gap-3">
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="relative h-10 w-[2px] overflow-hidden rounded-full bg-white/10">
          <div className="animate-line-scroll h-5 w-full bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
        </div>
      </div>
    </section>
  );
}
