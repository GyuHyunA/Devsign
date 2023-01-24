import { Route, Routes } from "react-router-dom";
import Nav from "../components/nav/nav";
import Home from "../components/home/home";
import WorkHome from "../components/work/workhome";
import Posthome from "../components/post/posthome";
import Contact from "../components/contact/contact";
import Incontents from "../components/content/incontents";
import Nopage from "../components/home/nopaage";
import HomeMainA from "../components/admin/homemaina";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="*" element={<Nopage />} />
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Incontents />} />
        <Route path="/post" element={<Posthome />} />
        <Route path="/work" element={<WorkHome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homea/*" element={<HomeMainA />} />
      </Routes>
    </>
  );
}

export default App;
