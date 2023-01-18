import React from "react";
import styled from "styled-components";

const NoPageStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    font-size: 80px;
    font-weight: 800;
    color: #B1B1B1;

  }
`;

const Nopage = () => {
  return (
    <NoPageStyle>
      <h1 className="text">잘못된 페이지 입니다</h1>
    </NoPageStyle>
  );
};

export default Nopage;
