import { useState } from "react";
import { z } from "zod";
import { Mail, MessageCircle, Instagram, Send } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ContactCard } from "@/components/site/ContactCard";
import { SITE, WHATSAPP_URL } from "@/lib/site";
import { Seo } from "@/components/site/Seo";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(80),
  empresa: z.string().trim().max(80).optional().or(z.literal("")),
  whatsapp: z.string().trim().min(8, "Informe um WhatsApp válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(120),
  mensagem: z.string().trim().min(5, "Conte um pouco mais").max(800),
});

export default function Contato() {
  const [form, setForm] = useState({ nome: "", empresa: "", whatsapp: "", email: "", mensagem: "" });
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const result = schema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Verifique os campos.");
      return;
    }
    const { nome, empresa, whatsapp, email, mensagem } = result.data;
    const msg =
      `Olá, Gênesis Company! 👋\n\n` +
      `*Nome:* ${nome}\n` +
      (empresa ? `*Empresa:* ${empresa}\n` : "") +
      `*WhatsApp:* ${whatsapp}\n` +
      `*E-mail:* ${email}\n\n` +
      `*Gostaria de automatizar:*\n${mensagem}`;
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const field = "mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-cyan focus:ring-2 focus:ring-cyan/30";

  return (
    <Layout>
      <Seo
        title="Contato | Gênesis Company"
        description="Fale com a Gênesis Company por WhatsApp, e-mail ou Instagram. Vamos pensar juntos em uma solução de IA para sua empresa."
        ogDescription="Vamos conversar sobre IA para o seu negócio."
      />
      <section className="mx-auto max-w-5xl px-5 pb-8 pt-16 md:px-8 md:pt-24">
        <SectionTitle
          eyebrow="Contato"
          title={<>Vamos <span className="text-gradient">conversar</span>?</>}
          subtitle="Conte um pouco sobre o que você quer automatizar e a gente responde por WhatsApp."
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 md:grid-cols-5 md:px-8">
        <div className="space-y-4 md:col-span-2">
          <ContactCard icon={MessageCircle} label="WhatsApp" value={SITE.whatsappLabel} href={WHATSAPP_URL} accent="neon" />
          <ContactCard icon={Mail} label="E-mail" value={SITE.email} href={`mailto:${SITE.email}`} accent="cyan" />
          <ContactCard icon={Instagram} label="Instagram" value={`@${SITE.instagramHandle}`} href={SITE.instagramUrl} accent="primary" />

          <div className="surface-card rounded-2xl p-5 text-sm text-muted-foreground">
            Atendemos empresas de todo o Brasil, de forma 100% remota e personalizada.
          </div>
        </div>

        <form onSubmit={onSubmit} className="surface-card glow-ring space-y-5 rounded-3xl p-6 md:col-span-3 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm">
              <span className="text-muted-foreground">Nome</span>
              <input className={field} value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} maxLength={80} required />
            </label>
            <label className="block text-sm">
              <span className="text-muted-foreground">Empresa</span>
              <input className={field} value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} maxLength={80} />
            </label>
            <label className="block text-sm">
              <span className="text-muted-foreground">WhatsApp</span>
              <input className={field} value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="(00) 0 0000-0000" maxLength={20} required />
            </label>
            <label className="block text-sm">
              <span className="text-muted-foreground">E-mail</span>
              <input type="email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={120} required />
            </label>
          </div>

          <label className="block text-sm">
            <span className="text-muted-foreground">O que você gostaria de automatizar?</span>
            <textarea rows={5} className={field} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} maxLength={800} required />
          </label>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-cyan to-neon px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 md:w-auto">
            <Send className="h-4 w-4" /> Enviar mensagem
          </button>

          <p className="text-xs text-muted-foreground">Ao enviar, abriremos uma conversa no WhatsApp com seus dados já preenchidos.</p>
        </form>
      </section>
    </Layout>
  );
}
