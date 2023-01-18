import { Route, Routes } from "react-router-dom";
import Incontents from "../components/content/incontents";
import Home from "../components/home/home";
import Nav from "../components/nav/nav";
import Posthome from "../components/post/posthome";

function App() {
  return (
    <>
      <Nav />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Incontents />} />
          <Route path="/post" element={<Posthome />} />
        </Routes>
    </>
  );
}

export default App;

// const ContentsWrapper = styled.div`

// `;
