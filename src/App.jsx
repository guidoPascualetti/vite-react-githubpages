import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Posgrado from "./pages/Posgrado";
import Ddhh from "./pages/Ddhh";
import Academica from "./pages/Academica";
import ComunicacionYVinculacion from "./pages/ComunicacionYVinculacion";
// import Menu from "./components/functional/Navbar";
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunicacion" element={<ComunicacionYVinculacion />} />
        <Route path="/posgrado" element={<Posgrado />} />
        <Route path="/ddhh" element={<Ddhh />} />
        <Route path="/academica" element={<Academica />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
