import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Contact, Home, Nav, Nopage, PostEdit, PostHome, SettingMain, WorkHome } from "../components";

function App() {
  // const [navCheck, setNavCheck] = useState("");
  const urlLog = useLocation();
  const urlString = urlLog.pathname.substring(1, 8);
  console.log(urlString);

  return (
    <>
      {urlString === "setting" && "editpost" ? null : <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Nopage />} />
        <Route path="post" element={<PostHome />} />
        <Route path="work" element={<WorkHome />} />
        <Route path="contact" element={<Contact />} />
        <Route path="setting/*" element={<SettingMain />} />
        <Route path="editpost/*" element={<PostEdit />} />
      </Routes>
    </>
  );
}

export default App;
