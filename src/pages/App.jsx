import { Route, Routes } from "react-router-dom";
import Contact from "../components/contact/contact";
import Home from "../components/home/user/home";
import Nav from "../components/nav/nav";
import Posthome from "../components/post/posthome";
import WorkHome from "../components/work/workhome";
import Incontents from "../components/content/user/incontents";
import Nopage from "../components/home/user/nopaage";

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
