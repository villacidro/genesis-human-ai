import { Link } from "react-router-dom";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, WHATSAPP_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-background/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {SITE.tagline} Soluções personalizadas em I.A. para empresas que querem crescer com mais inteligência e humanidade.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Contato</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan" /> <a href={`mailto:${SITE.email}`} className="hover:text-foreground">{SITE.email}</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-neon" /> <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">{SITE.whatsappLabel}</a></li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-primary" /> <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">@{SITE.instagramHandle}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Institucional</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/quem-somos" className="hover:text-foreground">Quem Somos</Link></li>
            <li><Link to="/solucoes" className="hover:text-foreground">Soluções</Link></li>
            <li><Link to="/privacidade" className="hover:text-foreground">Política de Privacidade</Link></li>
            <li><Link to="/termos" className="hover:text-foreground">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
          <p>Feito com cuidado humano e tecnologia.</p>
        </div>
      </div>
    </footer>
  );
}
