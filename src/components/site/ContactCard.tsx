import type { LucideIcon } from "lucide-react";

export function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  accent = "cyan",
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  accent?: "cyan" | "neon" | "primary";
}) {
  const colorMap = {
    cyan: "text-cyan",
    neon: "text-neon",
    primary: "text-primary",
  } as const;
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="surface-card group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
    >
      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 ${colorMap[accent]}`}>
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </a>
  );
}
