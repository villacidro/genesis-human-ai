import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./routes/index";
import QuemSomos from "./routes/quem-somos";
import Solucoes from "./routes/solucoes";
import Contato from "./routes/contato";
import Privacidade from "./routes/privacidade";
import Termos from "./routes/termos";
import { Layout } from "./components/site/Layout";
import { Link } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-xl px-5 py-32 text-center">
        <h1 className="text-6xl font-bold text-gradient">404</h1>
        <p className="mt-4 text-muted-foreground">Página não encontrada.</p>
        <Link to="/" className="mt-6 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm hover:bg-white/10">
          Voltar para o início
        </Link>
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
