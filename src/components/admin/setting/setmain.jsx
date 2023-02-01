import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavAdmin from "../nav/navadmin";
import SetCate from "./setcate/setcate";
import SetChart from "./setchart";
import SettingText from "./settext";

const SetMainAStle = styled.div`
  position: relative;
`;

function SettingMain() {
  return (
    <SetMainAStle>
      <SetCate />
      <NavAdmin />
      <Routes>
        <Route path="/" element={<SettingText />} />
        <Route path="/text/*" element={<SettingText />} />
        <Route path="/chart/*" element={<SetChart />} />
      </Routes>
    </SetMainAStle>
  );
}

export default SettingMain;
