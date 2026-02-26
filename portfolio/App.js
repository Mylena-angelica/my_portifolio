import {Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

import Skills from "./pages/skills";
import Portfolio from "./pages/portfolio";
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
    <BrowserRouter basename="/my_portifolio">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
