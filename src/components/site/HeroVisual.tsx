export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-lg">
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg,var(--color-primary),var(--color-cyan),var(--color-neon),var(--color-primary))] opacity-30 blur-3xl" />
      <div className="absolute inset-8 rounded-full border border-white/10 bg-gradient-to-br from-deep/80 to-background/40 backdrop-blur-md" />
      <div className="absolute inset-16 rounded-full border border-white/10" />
      <div className="absolute inset-24 rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--color-cyan),transparent_60%),radial-gradient(circle_at_70%_70%,var(--color-neon),transparent_60%),radial-gradient(circle_at_50%_50%,var(--color-primary),transparent_70%)] blur-md animate-pulse" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#267DFF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#20D6F7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#62F35A" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="140" fill="none" stroke="url(#g1)" strokeWidth="0.8" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="180" fill="none" stroke="url(#g1)" strokeWidth="0.5" strokeDasharray="1 8" />
      </svg>
    </div>
  );
}
