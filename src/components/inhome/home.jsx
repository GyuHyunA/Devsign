import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeStyle = styled.section`

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
        <Link to="content">
          <div className="thumb">
            <div className="img"></div>
          </div>
          <div className="title-wrap">
            <h1 className="title">제목입니다</h1>
            <p className="text">서브제목입니다</p>
          </div>
        </Link>
      </div>
    </HomeStyle>
  );
};

export default Home;
