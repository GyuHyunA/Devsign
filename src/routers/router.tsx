import UError from "../components/error/uerror";
import Uabout from "../components/uabout/uabout";
import Uhome from "../components/uhome/uhome";

export const routerlist = [
  {
    path: "/",
    element: <Uhome />,
  },
  {
    path: "about",
    element: <Uabout />,
  },
  {
    path: "*",
    element: <UError />,
  },
];
