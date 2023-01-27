import React from "react";
import { Route, Routes } from "react-router-dom";
import Homea from "./homea";
import PostEdit from "./setting/postedit";
import SettingText from "./setting/setmain";

export default function HomeMainA() {
  return (
    <Routes>
      <Route path="/" element={<Homea />} />
      <Route path="/setting/*" element={<SettingText />} />
      <Route path="/postedit/*" element={<PostEdit />} />
    </Routes>
  );
}
