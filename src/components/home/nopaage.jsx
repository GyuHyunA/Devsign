import React from "react";
import styled from "styled-components";
import Nav from "../nav/nav";

const NoPageStyle = styled.section`
  .text-contain {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 80px;
      font-weight: 800;
      color: #b1b1b1;
    }
  }
`;

const Nopage = () => {
  return (
    <NoPageStyle>
      <Nav />
      <div className="text-contain">
        <h1 className="text">잘못된 페이지 입니다</h1>
      </div>
    </NoPageStyle>
  );
};

export default Nopage;
