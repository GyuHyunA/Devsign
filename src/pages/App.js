import { BrowserRouter } from "react-router-dom";
import Categori from "../components/inhome/categori/categori";
import Home from "../components/inhome/home";
import Nav from "../components/nav/nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
      <Categori />
    </BrowserRouter>
  );
}

export default App;
