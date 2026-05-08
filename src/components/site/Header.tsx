import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_URL } from "@/lib/site";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/5 bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground bg-white/5" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="rounded-full px-4 py-2 text-sm transition-colors hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-cyan to-neon px-4 py-2 text-sm font-medium text-background shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-foreground bg-white/5" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-xl px-4 py-3 text-base"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-cyan to-neon px-4 py-3 text-sm font-medium text-background"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
