import React from "react";
import { Route, Routes } from "react-router-dom";
import SettingContents from "./settext";

export default function SettingMainA() {
  return (
    <Routes>
      <Route path="/" element={<SettingContents />} />
    </Routes>
  );
}
