import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/vite-react-githubpages" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
