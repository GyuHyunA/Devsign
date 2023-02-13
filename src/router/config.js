import { Navigate } from "react-router-dom";
import { Contact, Home, Nopage, PostHome, WorkHome } from "../components";

const routeList = [
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "*", element: <Navigate to={"/404"} /> },
      { path: "404", element: <Nopage /> },
    ],
  },
  { path: "post", element: <PostHome /> },
  { path: "work", element: <WorkHome /> },
  { path: "contact", element: <Contact /> },
];

export default routeList;
