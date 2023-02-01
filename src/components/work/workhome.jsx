import React from "react";
import styled from "styled-components";
import Nav from "../nav/nav";

const WorkHomeStyle = styled.section`
  .workhome-wrap {
    width: 100vw;
    height: 100vh;
    padding-top: 180px;
    display: flex;
    justify-content: center;
  }
`;

const WorkHome = () => {
  return (
    <WorkHomeStyle>
      <Nav />
      <div className="workhome-wrap">
        <h6>페이지 준비중 입니다</h6>
      </div>
    </WorkHomeStyle>
  );
};

export default WorkHome;
