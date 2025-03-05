import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Eventos from "./pages/eventos";
import CriarEvento from "./pages/eventos";
import Organizadores from "./pages/organizadores";
import Ingressos from "./pages/ingressos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizadores" element={<Organizadores />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/criarEvento" element={<CriarEvento />} />
        <Route path="/ingressos" element={<Ingressos />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;