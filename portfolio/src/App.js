import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Skills from "./pages/skills";
import Portifolio from "./pages/portifolio";
import Curriculo from "./pages/curriculo";
import Contato from "./pages/contato";

function Home() {
  return (
    <main style={{ padding: "80px 40px" }}>
      <h1>Home / Landing Page</h1>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
