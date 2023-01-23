import React from "react";
import { Route, Routes } from "react-router-dom";
import Homea from "./homea";
import SettingMainA from "./setting/setmain";
import SetReply from "./setting/setreply";
// import SettingMainA from "./setting/setmain";

export default function HomeMainA() {
  return (
    <Routes>
      <Route path="/" element={<Homea />} />
      <Route path="/text/*" element={<SettingMainA />} />
      <Route path="/reply/*" element={<SetReply />} />
    </Routes>
  );
}
