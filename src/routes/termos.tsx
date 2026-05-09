import { Layout } from "@/components/site/Layout";
import { SITE } from "@/lib/site";
import { Seo } from "@/components/site/Seo";

export default function Termos() {
  return (
    <Layout>
      <Seo
        title="Termos de Uso | Gênesis Company"
        description="Termos de Uso do site da Gênesis Company."
      />
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <h1 className="text-balance text-4xl font-bold md:text-5xl">Termos de Uso</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <div className="prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground">
          <p>Ao acessar e utilizar o site da Gênesis Company, você concorda com os termos descritos abaixo. Recomendamos a leitura atenta antes de prosseguir com a navegação.</p>

          <h2 className="text-xl font-semibold text-foreground">1. Uso do site</h2>
          <p>O site é destinado à apresentação institucional da Gênesis Company e dos seus serviços de inteligência artificial. Você se compromete a utilizá-lo de forma lícita e respeitosa.</p>

          <h2 className="text-xl font-semibold text-foreground">2. Conteúdo informativo</h2>
          <p>As informações disponibilizadas têm caráter exclusivamente informativo e podem ser atualizadas a qualquer momento, sem aviso prévio.</p>

          <h2 className="text-xl font-semibold text-foreground">3. Contato comercial</h2>
          <p>Os canais de contato são utilizados para conversas comerciais sobre projetos, soluções e propostas. Não há obrigatoriedade de contratação ao iniciar uma conversa.</p>

          <h2 className="text-xl font-semibold text-foreground">4. Limitação de responsabilidade</h2>
          <p>A Gênesis Company se isenta de responsabilidade por decisões tomadas com base no conteúdo do site sem o devido acompanhamento técnico, bem como por eventuais indisponibilidades temporárias.</p>

          <h2 className="text-xl font-semibold text-foreground">5. Propriedade intelectual</h2>
          <p>A marca Gênesis Company, seu logotipo, textos, imagens e demais elementos visuais são de propriedade da empresa e protegidos por lei. É proibida sua reprodução, total ou parcial, sem autorização prévia.</p>

          <h2 className="text-xl font-semibold text-foreground">6. Atualizações</h2>
          <p>Estes Termos de Uso podem ser atualizados periodicamente. A versão vigente será sempre a publicada nesta página.</p>

          <h2 className="text-xl font-semibold text-foreground">7. Contato</h2>
          <p>Em caso de dúvidas, entre em contato pelo e-mail <a href={`mailto:${SITE.email}`} className="text-cyan hover:text-foreground">{SITE.email}</a>.</p>
        </div>
      </article>
    </Layout>
  );
}
