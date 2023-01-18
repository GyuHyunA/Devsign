import { Route, Routes } from "react-router-dom";
import Incontents from "../components/content/incontents";
import Home from "../components/home/home";
import Nav from "../components/nav/nav";
import Posthome from "../components/post/posthome";
import WorkHome from "../components/work/workhome";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Incontents />} />
        <Route path="/post" element={<Posthome />} />
        <Route path="/work" element={<WorkHome />} />
      </Routes>
    </>
  );
}

export default App;