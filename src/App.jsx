import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Posgrado from "./pages/Posgrado";
import ComunicacionYVinculacion from "./pages/ComunicacionYVinculacion";
// import Menu from "./components/functional/Navbar";
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/vite-react-githubpages" element={<Home />} />
        <Route
          path="/vite-react-githubpages/comunicacion"
          element={<ComunicacionYVinculacion />}
        />
        <Route path="/vite-react-githubpages/posgrado" element={<Posgrado />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
