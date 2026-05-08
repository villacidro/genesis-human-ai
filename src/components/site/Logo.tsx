import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_120deg,var(--color-primary),var(--color-cyan),var(--color-neon),var(--color-primary))] opacity-90 blur-[1px] transition-transform duration-500 group-hover:rotate-180" />
        <span className="absolute inset-[3px] rounded-full bg-background" />
        <span className="relative font-display text-sm font-bold text-gradient">G</span>
      </span>
      <span className="font-display text-base font-semibold tracking-tight">
        Gênesis <span className="text-muted-foreground font-medium">Company</span>
      </span>
    </Link>
  );
}
