import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050505] py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <div>
          <p className="font-display text-sm font-bold tracking-wider text-white uppercase">
            {profile.name}
          </p>
          <p className="font-mono text-xs text-slate-500 mt-0.5">
            FULL STACK / AI / DATA
          </p>
        </div>

        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}