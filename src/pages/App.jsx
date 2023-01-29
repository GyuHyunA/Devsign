import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import { postList } from "../components/dummy/dummy";
import { Contact, Home, Incontents, Nav, Nopage, PostEdit, PostHome, SettingMain, WorkHome } from "../components";

function App() {
  const location = useLocation();
  console.log(location.pathname);

  // routing
  const routing = useRoutes(routlist);
  console.log(routing);

  // const navlocation = () => {
  //   switch (location) {
  //     case "setting":
  //       <NavAdmin />;
  //       break;
  //     default:
  //       <Nav />;
  //       break;
  //   }
  // };

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

const routlist = [
  {
    id: 0,
    path: "*",
    element: <Nopage />,
  },
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/post",
    element: <PostHome />,
  },
  {
    id: 3,
    path: "/work",
    element: <WorkHome />,
  },
  {
    id: 4,
    path: "/contact",
    element: <Contact />,
  },
  {
    id: 5,
    path: "/setting/*",
    element: <SettingMain />,
  },
  {
    id: 6,
    path: "/editpost",
    element: <PostEdit />,
  },
  // {
  //   id: 7,
  //   path: `/content/post:`,
  //   element: <Incontents />,
  // },
];
