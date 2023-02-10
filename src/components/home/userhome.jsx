import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Nav, Nopage, PostHome } from "..";
import Home from "./home";

const UserHomeStyle = styled.div``;

const UserHome = () => {
  const local = useLocation().pathname
  console.log(local);
  return (
    <UserHomeStyle>
      <Nav />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="post" element={<PostHome />} />
      </Routes>
    </UserHomeStyle>
  );
};

export default UserHome;
