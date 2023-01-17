import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Incontents from "../components/content/incontents";
import Categori from "../components/inhome/categori/categori";
import Home from "../components/inhome/home";
import Nav from "../components/nav/nav";

function App() {
  return (
    <>
      <Nav />
      <Categori />
      <ContentsWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Incontents />} />
        </Routes>
      </ContentsWrapper>
    </>
  );
}

export default App;

const ContentsWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 180px;
  display: flex;
  justify-content: center;
`;
