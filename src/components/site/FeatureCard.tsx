import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="surface-card group relative overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/30 via-cyan/20 to-neon/10 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-cyan/20 to-neon/10 text-cyan ring-1 ring-white/10">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="mt-5 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
