import { Route, Routes } from "react-router-dom";
// import styled from "styled-components";
import Incontents from "../components/content/incontents";
import Home from "../components/inhome/home";
import Nav from "../components/nav/nav";

function App() {
  return (
    <>
      <Nav />
      {/* <Categori /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Incontents />} />
        </Routes>
    </>
  );
}

export default App;

// const ContentsWrapper = styled.div`

// `;
