import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative mt-10">
      <div className="animated-line" />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-8 text-center sm:px-8">
        <p className="text-xs text-muted-foreground">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}