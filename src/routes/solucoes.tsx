import { Link } from "react-router-dom";
import { MessageCircle, Workflow, ClipboardList, HeadphonesIcon, Database, Compass, ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionTitle } from "@/components/site/SectionTitle";
import { WHATSAPP_URL } from "@/lib/site";
import { Seo } from "@/components/site/Seo";

const items = [
  {
    icon: MessageCircle,
    title: "Agentes de IA para WhatsApp",
    description: "Agentes inteligentes que conversam com seus clientes 24/7, qualificam leads, respondem dúvidas e passam o atendimento humano apenas quando necessário.",
    examples: ["Atendimento inicial e qualificação de leads", "FAQ automatizado em linguagem natural", "Agendamentos e confirmações"],
    benefit: "Mais conversas atendidas, menos clientes perdidos por demora.",
  },
  {
    icon: Workflow,
    title: "Automações com n8n e integrações",
    description: "Fluxos automáticos conectando ferramentas, sistemas e equipes para eliminar tarefas repetitivas.",
    examples: ["Sincronizar leads do WhatsApp com o CRM", "Notificar equipe quando um pedido chega", "Atualizar planilhas e relatórios automaticamente"],
    benefit: "Sua equipe deixa de perder horas com cliques manuais.",
  },
  {
    icon: ClipboardList,
    title: "Organização de processos comerciais",
    description: "Mapeamos e estruturamos processos de vendas e atendimento para que a IA entre como apoio, não como bagunça.",
    examples: ["Funil de vendas claro do primeiro contato à venda", "Padronização de respostas e abordagens", "Indicadores fáceis de acompanhar"],
    benefit: "Decisões mais rápidas com base em dados claros.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento automatizado e humanizado",
    description: "Combinação de IA com atendimento humano, para entregar agilidade sem perder o cuidado.",
    examples: ["Triagem inteligente de mensagens", "Respostas automáticas para temas frequentes", "Escalonamento para humanos no momento certo"],
    benefit: "Clientes bem atendidos e equipe focada no que importa.",
  },
  {
    icon: Database,
    title: "Integração com CRM, planilhas e sistemas",
    description: "Conectamos IA e automações com as ferramentas que sua empresa já usa.",
    examples: ["HubSpot, RD Station, Pipedrive", "Google Sheets, Notion, Airtable", "Sistemas internos via API"],
    benefit: "Dados onde precisam estar, sem digitar de novo.",
  },
  {
    icon: Compass,
    title: "Consultoria para implantação de IA",
    description: "Diagnóstico e estratégia para identificar onde a IA realmente faz diferença na sua operação.",
    examples: ["Análise de gargalos e oportunidades", "Roadmap de implantação por prioridade", "Acompanhamento e evolução contínua"],
    benefit: "IA aplicada com clareza, sem desperdício de tempo ou orçamento.",
  },
];

export default function Solucoes() {
  return (
    <Layout>
      <Seo
        title="Soluções | Gênesis Company"
        description="Agentes de IA para WhatsApp, automações, integrações com CRM, atendimento humanizado e consultoria em inteligência artificial."
        ogDescription="Soluções de IA personalizadas para empresas."
      />
      <section className="mx-auto max-w-5xl px-5 pb-8 pt-16 md:px-8 md:pt-24">
        <SectionTitle
          eyebrow="Soluções"
          title={<>Soluções de I.A. para <span className="text-gradient">empresas reais</span></>}
          subtitle="Cada projeto começa entendendo sua operação. A tecnologia entra depois, e do jeito certo."
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {items.map(({ icon: Icon, title, description, examples, benefit }) => (
            <article key={title} className="surface-card relative overflow-hidden rounded-3xl p-7">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 via-cyan/20 to-neon/10 opacity-60 blur-2xl" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-cyan/20 to-neon/10 text-cyan ring-1 ring-white/10">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan">Exemplos</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {examples.map((ex) => (
                      <li key={ex} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon" /> {ex}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neon">Benefício principal</div>
                  <p className="mt-1 text-sm">{benefit}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 md:px-8">
        <div className="surface-card flex flex-col items-center gap-5 rounded-[2rem] p-8 text-center md:p-12">
          <h3 className="text-balance text-2xl font-bold md:text-3xl">Quer descobrir qual solução faz sentido para você?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-cyan to-neon px-6 py-3 text-sm font-semibold text-background">
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10">
              Ir para contato <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
