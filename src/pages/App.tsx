import React from "react";
import "../css/App.scss";
import Unav from "../components/unav/unav";
import Uhome from "../components/uhome/uhome";

const App: React.FC = () => {
  return (
    <>
      <Unav />
      <Uhome />
    </>
  );
};

export default App;
