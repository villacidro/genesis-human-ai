import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Gênesis Company" },
      { name: "description", content: "Política de Privacidade da Gênesis Company, em conformidade com a LGPD." },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <h1 className="text-balance text-4xl font-bold md:text-5xl">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <div className="prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground">
          <p>A Gênesis Company respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>

          <h2 className="text-xl font-semibold text-foreground">1. Dados coletados</h2>
          <p>Podemos coletar dados básicos de navegação no site, como informações de acesso e cookies, e dados de contato enviados voluntariamente por você por meio de formulários, e-mail, WhatsApp ou redes sociais — como nome, empresa, telefone, e-mail e mensagem.</p>

          <h2 className="text-xl font-semibold text-foreground">2. Uso dos dados</h2>
          <p>As informações fornecidas são utilizadas exclusivamente para responder à sua solicitação, oferecer retorno comercial, prestar atendimento e enviar informações relacionadas aos nossos serviços.</p>

          <h2 className="text-xl font-semibold text-foreground">3. Compartilhamento</h2>
          <p>Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Dados podem ser compartilhados apenas com ferramentas necessárias para a operação do atendimento, sempre dentro dos princípios da LGPD.</p>

          <h2 className="text-xl font-semibold text-foreground">4. Seus direitos</h2>
          <p>Você pode, a qualquer momento, solicitar acesso, correção, atualização ou exclusão dos seus dados pessoais entrando em contato pelo e-mail <a href={`mailto:${SITE.email}`} className="text-cyan hover:text-foreground">{SITE.email}</a>.</p>

          <h2 className="text-xl font-semibold text-foreground">5. Segurança</h2>
          <p>Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acessos não autorizados, perda ou divulgação indevida.</p>

          <h2 className="text-xl font-semibold text-foreground">6. Atualizações</h2>
          <p>Esta política poderá ser atualizada periodicamente. Recomendamos que você a consulte com frequência.</p>

          <h2 className="text-xl font-semibold text-foreground">7. Contato</h2>
          <p>Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados, fale conosco pelo e-mail <a href={`mailto:${SITE.email}`} className="text-cyan hover:text-foreground">{SITE.email}</a>.</p>
        </div>
      </article>
    </Layout>
  );
}
