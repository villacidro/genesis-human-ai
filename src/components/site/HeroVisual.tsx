import { CheckCheck, CalendarCheck, UserCheck, Sparkles, Database } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Msg = { from: "them" | "bot"; text: string; time: string };

const conversation: Msg[] = [
  { from: "them", text: "Oi! Vocês atendem agora?", time: "14:02" },
  { from: "bot", text: "Olá! 👋 Sou a assistente da Gênesis. Posso te ajudar agora mesmo.", time: "14:02" },
  { from: "them", text: "Quero saber sobre os planos.", time: "14:03" },
  { from: "bot", text: "Claro! Já agendei uma demonstração para amanhã às 10h ✅", time: "14:03" },
];

const notifications = [
  { icon: Sparkles, label: "Novo lead recebido", tone: "from-primary to-cyan", pos: "left-[-8%] top-[8%]", delay: "0s" },
  { icon: CalendarCheck, label: "Reunião agendada", tone: "from-cyan to-neon", pos: "right-[-10%] top-[18%]", delay: "0.6s" },
  { icon: UserCheck, label: "Cliente qualificado", tone: "from-neon to-cyan", pos: "left-[-12%] top-[52%]", delay: "1.2s" },
  { icon: CheckCheck, label: "Resposta enviada", tone: "from-primary to-neon", pos: "right-[-12%] bottom-[22%]", delay: "1.8s" },
  { icon: Database, label: "Salvo no CRM", tone: "from-cyan to-primary", pos: "left-[-4%] bottom-[6%]", delay: "2.4s" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* soft glow halo */}
      <div className="absolute inset-6 rounded-full bg-[conic-gradient(from_90deg,var(--color-primary),var(--color-cyan),var(--color-neon),var(--color-primary))] opacity-25 blur-3xl" />
      <div className="absolute inset-16 rounded-full border border-white/5" />

      {/* dashed orbit */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-[spin_80s_linear_infinite]">
        <defs>
          <linearGradient id="orb" x1="0" x2="1">
            <stop offset="0%" stopColor="#267DFF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#20D6F7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#62F35A" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="none" stroke="url(#orb)" strokeWidth="0.6" strokeDasharray="2 9" />
      </svg>

      {/* Phone */}
      <div className="absolute left-1/2 top-1/2 h-[88%] w-[58%] -translate-x-1/2 -translate-y-1/2 [perspective:1200px]">
        <div className="relative h-full w-full rounded-[2.4rem] border border-white/10 bg-gradient-to-b from-[#0b1340] to-[#040820] p-2 shadow-[0_40px_80px_-30px_rgba(38,125,255,0.55)] [transform:rotateY(-10deg)_rotateX(6deg)]">
          {/* outer rim glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] ring-1 ring-inset ring-white/10" />
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />

          {/* screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#0a1138] via-[#08102e] to-[#050a22]">
            {/* status bar */}
            <div className="flex items-center justify-between px-4 pt-3 text-[9px] font-medium text-white/60">
              <span>14:03</span>
              <span>WhatsApp</span>
            </div>
            {/* contact header */}
            <div className="mt-3 flex items-center gap-2 border-b border-white/5 px-3 pb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary via-cyan to-neon p-[1.5px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                  <img src={logoMark} alt="" className="h-4 w-4 object-contain" />
                </div>
              </div>
              <div className="leading-tight">
                <p className="text-[10px] font-semibold text-white">Gênesis I.A.</p>
                <p className="text-[8px] text-neon">online agora</p>
              </div>
            </div>

            {/* messages */}
            <div className="space-y-2 px-3 py-3">
              {conversation.map((m, i) => (
                <div key={i} className={`flex ${m.from === "bot" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[82%] rounded-2xl px-2.5 py-1.5 text-[9px] leading-snug shadow ${
                      m.from === "bot"
                        ? "rounded-br-sm bg-gradient-to-br from-primary/90 to-cyan/80 text-background"
                        : "rounded-bl-sm bg-white/8 text-white/90"
                    }`}
                  >
                    {m.text}
                    <div className={`mt-0.5 flex items-center justify-end gap-0.5 text-[7px] ${m.from === "bot" ? "text-background/70" : "text-white/40"}`}>
                      {m.time}
                      {m.from === "bot" && <CheckCheck className="h-2 w-2" />}
                    </div>
                  </div>
                </div>
              ))}
              {/* typing */}
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-full bg-white/8 px-2.5 py-1.5">
                  <span className="h-1 w-1 animate-bounce rounded-full bg-white/60 [animation-delay:0ms]" />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-white/60 [animation-delay:150ms]" />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-white/60 [animation-delay:300ms]" />
                </div>
              </div>
            </div>

            {/* input bar */}
            <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <span className="text-[9px] text-white/40">Digite uma mensagem…</span>
              <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary via-cyan to-neon text-background">
                <WhatsAppIcon className="h-2.5 w-2.5" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* floating notifications */}
      {notifications.map((n) => {
        const Icon = n.icon;
        return (
          <div
            key={n.label}
            className={`absolute ${n.pos} hidden animate-[float_6s_ease-in-out_infinite] sm:block`}
            style={{ animationDelay: n.delay }}
          >
            <div className="surface-card flex items-center gap-2 rounded-2xl px-3 py-2 shadow-xl">
              <span className={`flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br ${n.tone} text-background`}>
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="whitespace-nowrap text-[11px] font-medium text-foreground">{n.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
