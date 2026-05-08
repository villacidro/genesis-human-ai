import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Heart, Eye } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionTitle } from "@/components/site/SectionTitle";
import { FeatureCard } from "@/components/site/FeatureCard";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos | Gênesis Company" },
      { name: "description", content: "Conheça a Gênesis Company: inteligência artificial acessível, útil e humana para empresas que querem crescer com clareza." },
      { property: "og:title", content: "Quem Somos | Gênesis Company" },
      { property: "og:description", content: "Inteligência artificial acessível, útil e humana para empresas." },
    ],
  }),
  component: QuemSomos,
});

const blocks = [
  { icon: Sparkles, title: "Nossa essência", description: "Inteligência artificial com conexão real. Tecnologia que aproxima, esclarece e simplifica." },
  { icon: Heart, title: "Nosso compromisso", description: "Soluções simples, úteis e personalizadas, pensadas para a realidade de cada empresa." },
  { icon: Eye, title: "Nossa visão", description: "Ajudar empresas a crescerem com mais inteligência e mais humanidade, lado a lado." },
];

function QuemSomos() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-5 pb-10 pt-16 md:px-8 md:pt-24">
        <SectionTitle
          eyebrow="Quem somos"
          title={<>Sobre a <span className="text-gradient">Gênesis Company</span></>}
          subtitle="A Gênesis Company nasceu com o propósito de tornar a inteligência artificial mais acessível, útil e humana para empresas. Nosso trabalho é entender a realidade de cada negócio e criar soluções personalizadas que simplificam processos, melhoram atendimentos e ajudam equipes a produzir mais com menos desgaste."
        />
      </section>

      <section className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="surface-card glow-ring rounded-[2rem] p-8 md:p-12">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Acreditamos que a tecnologia só faz sentido quando gera clareza, aproxima pessoas e melhora a vida de quem trabalha e de quem é atendido.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {blocks.map((b) => <FeatureCard key={b.title} {...b} />)}
        </div>
      </section>
    </Layout>
  );
}
