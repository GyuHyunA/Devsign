import React from "react";
import styled from "styled-components";
import Categori from "./categori/categori";

const NoHomeStyle = styled.section`
  .nohome-wrap {
    width: 100vw;
    height: 100vh;
    padding-top: 180px;
    display: flex;
    justify-content: center;
  }
`;

const NoHome = () => {
  return (
    <NoHomeStyle>
      <Categori />
      <div className="nohome-wrap">
        <h6>게시글이 없습니다</h6>
      </div>
    </NoHomeStyle>
  );
};

export default NoHome;
