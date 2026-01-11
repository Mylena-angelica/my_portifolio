import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home"; 
import Skills from "./pages/skills";
import Portifolio from "./pages/portifolio";
import Curriculo from "./pages/curriculo";
import Contato from "./pages/contato";

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
