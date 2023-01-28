import { Route, Routes } from "react-router-dom";
import { postList } from "../components/dummy/dummy";
import { Contact, Home, Incontents, Nav, Nopage, PostEdit, PostHome, SettingMain, WorkHome } from "../components";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="*" element={<Nopage />} />
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostHome />} />
        <Route path="/work" element={<WorkHome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting/*" element={<SettingMain />} />
        <Route path="/editpost" element={<PostEdit />} />
        {postList.map((v) => (
          <Route path={`/content/post:${v.id}`} element={<Incontents title={v.title} contents={v.contents} hesh={v.hesh} cate={v.cate} />} key={v.id} />
        ))}
      </Routes>
    </>
  );
}

export default App;
