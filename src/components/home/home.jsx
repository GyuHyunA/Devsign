import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { postList } from "../dummy/dummy";
import Categori from "./categori";

const HomeStyle = styled.section`
  .home-contain {
    padding-top: 180px;
  }
`;

const Home = () => {
  return (
    <HomeStyle>
      <div className="home-contain">
        <Categori />
        {postList.length === 0 ? <IsNotContents /> : postList.map((v) => <IsContents img={v.image} title={v.title} contents={v.contents} id={v.id} key={v.id} />)}
      </div>
    </HomeStyle>
  );
};

export default Home;

const IsContentsStyle = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
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
      width: 768px;
      font-weight: 500;
      font-size: 16px;
      margin-top: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;

const IsContents = ({ img, title, contents, id }) => {
  return (
    <IsContentsStyle className="contents-wrap">
      <Link to={`content/post:${id}`}>
        <div className="thumb">{img}</div>
        <div className="title-wrap">
          <h1 className="title">{title}</h1>
          <p className="text">{contents}</p>
        </div>
      </Link>
    </IsContentsStyle>
  );
};

const IsNotContentsStyle = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const IsNotContents = () => {
  return (
    <IsNotContentsStyle className="contents-wrap">
      <h2>게시글이 없습니다</h2>
    </IsNotContentsStyle>
  );
};
