import React from "react";
import "../css/App.scss";
import { useRoutes } from "react-router-dom";
import { routerlist } from "../routers/router";

const App: React.FC = () => {
  const routers = useRoutes(routerlist);
  return (
    <>
      {routers}
    </>
  );
};

export default App;
