import { Route, Routes } from "react-router-dom";
import Contact from "../components/contact/contact";
import Incontents from "../components/content/incontents";
import Home from "../components/home/home";
import Nopage from "../components/home/nopaage";
import Nav from "../components/nav/nav";
import Posthome from "../components/post/posthome";
import WorkHome from "../components/work/workhome";

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
      </Routes>
    </>
  );
}

export default App;
