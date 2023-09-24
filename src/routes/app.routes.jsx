import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/About";
import Team from "../pages/Team";
import Services from "../pages/Services";
import Trainings from "../pages/Trainings";
import Publications from "../pages/Publications";
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/quem-somos" element={<About />} />
      <Route path="/equipe" element={<Team />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/treinamentos" element={<Trainings />} />
      <Route path="/publicacoes" element={<Publications />} />
      <Route path="/clientes" element={<Clients />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}
