import React from "react";
import styled from "styled-components";

const WorkHomeStyle = styled.section`
  .posthome-wrap {
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
      <div className="posthome-wrap">
        <h6>페이지 준비중 입니다</h6>
      </div>
    </WorkHomeStyle>
  );
};

export default WorkHome;
