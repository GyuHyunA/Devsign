import UError from "../components/error/uerror";
import Uhome from "../components/uhome/uhome";

export const routerlist = [
  {
    path: "/",
    element: <Uhome />,
  },
  {
    path: "*",
    element: <UError />,
  },
];
