import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Incontents from "../content/incontents";

const HomeStyle = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 180px;
  display: flex;
  justify-content: center;
  .contents-wrap {
    .thumb {
      width: 100%;
      .img {
        width: 768px;
        height: 402px;
        background: #ffffff;
        border-radius: 10px;
      }
    }

    .title-wrap {
      width: 100%;
      margin-top: 17px;
      .text {
        font-weight: 500;
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
`;

const Home = () => {
  return (
    <HomeStyle>
      <div className="contents-wrap">
        <a href="../content/incontents.jsx">
          <div className="thumb">
            <div className="img"></div>
          </div>
          <div className="title-wrap">
            <h1 className="title">제목입니다</h1>
            <p className="text">서브제목입니다</p>
          </div>
        </a>
      </div>
    </HomeStyle>
  );
};

export default Home;
