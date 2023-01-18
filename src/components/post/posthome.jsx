import React from "react";
import styled from "styled-components";
import Nav from "../nav/nav";

const PostHomeStyle = styled.section`
  .posthome-wrap {
    width: 100vw;
    height: 100vh;
    padding-top: 180px;
    display: flex;
    justify-content: center;
  }
`;

const Posthome = () => {
  return (
    <PostHomeStyle>
      <Nav />
      <div className="posthome-wrap">
        <h6>페이지 준비중 입니다</h6>
      </div>
    </PostHomeStyle>
  );
};

export default Posthome;
