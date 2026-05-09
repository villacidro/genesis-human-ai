import { Link } from "react-router-dom";
import { Seo } from "@/components/site/Seo";
import {
  MessageCircle, ArrowRight, Sparkles, Workflow, HeadphonesIcon,
  Plug, Compass, GraduationCap, Clock, ListChecks, Lightbulb,
  Heart, ShieldCheck, Stars, Handshake, Users, Wrench,
  Inbox, Brain, CalendarClock, TrendingUp
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionTitle } from "@/components/site/SectionTitle";
import { FeatureCard } from "@/components/site/FeatureCard";
import { HeroVisual } from "@/components/site/HeroVisual";
import { WHATSAPP_URL } from "@/lib/site";

const solutions = [
  { icon: MessageCircle, title: "Agentes de IA para WhatsApp", description: "Automatize conversas, qualifique clientes, responda dúvidas frequentes e direcione atendimentos com mais agilidade." },
  { icon: Workflow, title: "Automações de processos", description: "Conecte ferramentas, reduza tarefas repetitivas e crie fluxos inteligentes para sua operação." },
  { icon: HeadphonesIcon, title: "Atendimento inteligente", description: "Crie experiências mais rápidas, organizadas e humanas para seus clientes." },
  { icon: Plug, title: "Integrações personalizadas", description: "Conectamos IA com ferramentas como CRMs, planilhas, sistemas internos e plataformas de atendimento." },
  { icon: Compass, title: "Estratégia e implantação de IA", description: "Ajudamos sua empresa a entender onde a IA realmente pode gerar resultado." },
  { icon: GraduationCap, title: "Treinamento e suporte", description: "Acompanhamos a implantação para que a tecnologia seja usada com clareza e confiança." },
];

const pains = [
  { icon: Clock, title: "Atendimento mais rápido", description: "Respostas no tempo do cliente, sem perder o toque humano." },
  { icon: ListChecks, title: "Processos mais organizados", description: "Tarefas conectadas, fluxos claros e menos retrabalho no dia a dia." },
  { icon: Lightbulb, title: "Mais tempo para decisões importantes", description: "Sua equipe livre do operacional, focada no que realmente cresce o negócio." },
];

const differentials = [
  { icon: Sparkles, title: "Soluções sob medida", description: "Criadas conforme a necessidade real da sua empresa." },
  { icon: Heart, title: "Linguagem simples", description: "Explicamos sem jargões. Tecnologia acessível, do começo ao fim." },
  { icon: ShieldCheck, title: "Foco em resultado prático", description: "Cada projeto começa com um objetivo claro e mensurável." },
  { icon: Handshake, title: "Atendimento próximo", description: "Consultoria de verdade, não apenas entrega de software." },
  { icon: Users, title: "Tecnologia com toque humano", description: "IA usada para aproximar pessoas, nunca para substituí-las." },
  { icon: Wrench, title: "Implantação acompanhada", description: "Estamos ao seu lado durante toda a operação." },
];

const steps = [
  { n: "01", title: "Diagnóstico", text: "Entendemos sua operação, seus gargalos e seus objetivos." },
  { n: "02", title: "Estratégia", text: "Desenhamos uma solução de IA adequada à realidade do seu negócio." },
  { n: "03", title: "Construção", text: "Criamos os fluxos, agentes e automações necessários." },
  { n: "04", title: "Testes", text: "Ajustamos a solução antes de colocar em operação." },
  { n: "05", title: "Implantação", text: "Acompanhamos o início para garantir segurança e clareza." },
  { n: "06", title: "Evolução", text: "Melhoramos a solução conforme os resultados e necessidades surgem." },
];

const flow = [
  { icon: Inbox, n: "01", title: "O cliente entra em contato", text: "Leads chegam pelo WhatsApp, site ou campanhas." },
  { icon: Brain, n: "02", title: "A I.A. entende a necessidade", text: "A conversa é conduzida de forma natural, humanizada e treinada para o seu negócio." },
  { icon: CalendarClock, n: "03", title: "O atendimento é organizado", text: "A automação qualifica, responde, agenda e direciona cada oportunidade." },
  { icon: TrendingUp, n: "04", title: "Sua empresa ganha tempo e conversão", text: "Menos mensagens perdidas, mais agilidade e mais chances de venda." },
];

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Gênesis Company | Inteligência artificial, conexão real"
        description="Soluções personalizadas em I.A. para empresas que querem automatizar processos, atender melhor e crescer com mais inteligência."
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-2 md:px-8 md:pb-28 md:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cyan">
              <Stars className="h-3.5 w-3.5" /> Inteligência artificial humana
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Inteligência artificial,
              <span className="block text-gradient">conexão real.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
              Criamos soluções personalizadas em I.A. para empresas que querem automatizar tarefas, melhorar o atendimento e transformar processos em experiências mais simples, humanas e eficientes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-cyan to-neon px-6 py-3 text-sm font-semibold text-background shadow-xl shadow-primary/30 transition-transform hover:-translate-y-0.5">
                <MessageCircle className="h-4 w-4" /> Falar com a Gênesis
              </a>
              <Link to="/solucoes" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10">
                Conhecer soluções <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* How Gênesis works for you (visual flow) */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-4 md:px-8">
        <SectionTitle
          eyebrow="Na prática"
          title={<>Como a Gênesis <span className="text-gradient">trabalha por você</span></>}
          subtitle="Enquanto sua equipe foca no que importa, nossa I.A. atende, qualifica e organiza seus contatos em tempo real."
        />
        <div className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          {flow.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="surface-card group relative overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 via-cyan/15 to-neon/10 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 via-cyan/25 to-neon/15 text-cyan ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-2xl font-bold text-gradient">{s.n}</span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pain */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionTitle
          eyebrow="O desafio"
          title={<>Sua empresa não precisa trabalhar mais. <span className="text-gradient">Precisa trabalhar melhor.</span></>}
          subtitle="Atendimentos manuais, processos repetitivos e falta de organização consomem tempo, energia e oportunidades. A Gênesis Company ajuda empresas a usar inteligência artificial de forma prática, segura e personalizada."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pains.map((p) => <FeatureCard key={p.title} {...p} />)}
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionTitle
          eyebrow="Soluções"
          title={<>Soluções de I.A. pensadas para a <span className="text-gradient">realidade do seu negócio</span></>}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => <FeatureCard key={s.title} {...s} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/solucoes" className="inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-foreground">
            Ver todas as soluções em detalhes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Differentials */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionTitle
          eyebrow="Diferenciais"
          title={<>IA personalizada, sem complicar o que <span className="text-gradient">precisa ser simples.</span></>}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d) => <FeatureCard key={d.title} {...d} />)}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionTitle
          eyebrow="Como funciona"
          title={<>Da ideia à implantação, <span className="text-gradient">caminhamos com você.</span></>}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="surface-card relative rounded-3xl p-6">
              <div className="mb-3 inline-flex items-center gap-3">
                <span className="font-display text-3xl font-bold text-gradient">{s.n}</span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Humanized */}
      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8">
        <div className="surface-card glow-ring relative overflow-hidden rounded-[2rem] p-8 md:p-14">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary/30 to-neon/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neon">
              <Heart className="h-3.5 w-3.5" /> Manifesto
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              A tecnologia deve servir pessoas, <span className="text-gradient">não substituir relações.</span>
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-muted-foreground md:text-lg">
              Na Gênesis Company, acreditamos que a inteligência artificial deve aproximar empresas e clientes. Por isso, nossas soluções são pensadas para reduzir esforço, melhorar experiências e liberar pessoas para fazerem o que fazem de melhor: pensar, criar, vender, cuidar e se relacionar.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-5 pb-12 pt-8 md:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-primary via-cyan to-neon p-[1.5px]">
          <div className="rounded-[calc(2rem-1.5px)] bg-background p-8 text-center md:p-14">
            <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Vamos construir uma solução de I.A. para a <span className="text-gradient">sua empresa?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              Converse com a Gênesis Company e descubra como a inteligência artificial pode simplificar sua operação.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-cyan to-neon px-7 py-3.5 text-sm font-semibold text-background shadow-xl shadow-primary/30 transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
