import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/shared/Menu";
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/vite-react-githubpages" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
