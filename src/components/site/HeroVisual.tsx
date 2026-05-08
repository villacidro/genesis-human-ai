import logoMark from "@/assets/logo-mark.png";

export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-lg">
      {/* soft glow halo */}
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg,var(--color-primary),var(--color-cyan),var(--color-neon),var(--color-primary))] opacity-25 blur-3xl" />

      {/* concentric rings */}
      <div className="absolute inset-6 rounded-full border border-white/10" />
      <div className="absolute inset-16 rounded-full border border-white/5" />

      {/* dashed orbit */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-[spin_60s_linear_infinite]">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#267DFF" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#20D6F7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#62F35A" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="160" fill="none" stroke="url(#g1)" strokeWidth="0.8" strokeDasharray="2 8" />
        <circle cx="200" cy="200" r="190" fill="none" stroke="url(#g1)" strokeWidth="0.5" strokeDasharray="1 10" />
      </svg>

      {/* logo mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          className="relative h-2/3 w-2/3 object-contain drop-shadow-[0_20px_60px_rgba(38,125,255,0.45)]"
        />
      </div>
    </div>
  );
}
