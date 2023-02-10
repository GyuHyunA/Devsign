import { Route, Routes } from "react-router-dom";
import { Nopage, PostHome, SettingMain } from "../components";
import UserHome from "../components/home/userhome";

function App() {

  return (
    <>
      <Routes>
        <Route path="setting/*" element={<SettingMain />} />
        <Route path="/" element={<UserHome />} />
        {/* <Route path="post" element={<PostHome />} /> */}
        {/* <Route path="work" element={<WorkHome />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="editpost" element={<PostEdit />} /> */}
        {/* {postList.map((v) => (
          <Route path={`/content/post:${v.id}`} element={<Incontents title={v.title} contents={v.contents} hesh={v.hesh} cate={v.cate} />} key={v.id} />
        ))} */}
      </Routes>
    </>
  );
}

export default App;