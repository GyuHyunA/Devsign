import React from "react";
import { styled } from "styled-components";
import Unav from "../unav/unav";

const UHomeStyle = styled.section`
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  /* margin: 0 320px; */
  .contents {
    width: 100%;
    max-width: 1280px;
    min-width: 480px;
    margin: 0 320px;
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    place-items: center;
  }
`;

const Uhome: React.FC = () => {
  return (
    <>
      <Unav />
      <UHomeStyle>
        <div className="contents">
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </UHomeStyle>
    </>
  );
};

export default Uhome;

const BoxStyle = styled.div`
  width: 100%;
  max-width: 414px;
  min-width: 160px;
  height: 278px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  .box-title {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 5px;
  }
  .box-contents {
    width: 100%;
    height: 155px;
    overflow: hidden;
    color: #000;
    text-align: justify;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 15px;
  }
  .box-tags {
    width: 100%;
    height: 25px;
    margin-bottom: 10px;
    .tag {
      padding: 2px 10px;
      border-radius: 5px;
      background: #ffd6d6;
      color: #000;
      text-align: justify;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-right: 5px;
    }
  }
  .box-date {
    width: 100%;
    color: #cdcdcd;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Box = () => {
  return (
    <BoxStyle>
      <a href="/">
        <h1 className="box-title">제목</h1>
        <p className="box-contents">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sit magni saepe quae enim numquam perspiciatis, iure repellat quas corrupti
          fuga aliquam modi sint soluta hic expedita dolor eveniet dicta!
        </p>
        <div className="box-tags">
          <span className="tag">React</span>
          <span className="tag">Code</span>
        </div>
        <p className="box-date">Date</p>
      </a>
    </BoxStyle>
  );
};
