import React from "react";
import Unav from "../ucommon/unav";
import Ucategori from "../ucommon/ucategori";
import { styled } from "styled-components";

const AboutStyle = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  .about-wrap {
    width: 100%;
    max-width: 850px;
    min-width: 480px;
    position: relative;
    gap: 20px;
    place-items: center;
    margin-right: 127px;
    .intro-wrap {
      margin-top: 20px;
      h2 {
        margin-bottom: 23px;
        color: #000;
        font-size: 24px;
        font-weight: 700;
      }
    }
    .contact-warp {
      margin-top: 20px;
      h2 {
        margin-bottom: 10px;
        color: #000;
        font-size: 24px;
        font-weight: 700;
      }
    }
  }
`;

const Uabout = () => {
  return (
    <>
      <Unav />
      <AboutStyle>
        <div className="about-wrap">
          <h1>About me</h1>
          <div className="intro-wrap">
            <h2>안규현</h2>
            <div className="text">
              <p>아무것도 모르고 방황하던 인생...</p>
              <p>3D 프린터와 CAD의 길을 가게 되었으며, CAD에 관심을 가지고 생활 했다</p>
              <p>하지만 전공은 디자인이여서 이것저것 공부하게 되었고</p>
              <p>또 웹에 관심히 생겨 공부하기에 이르렀다</p>
            </div>
          </div>
          <div className="contact-warp">
            <h2>Contact</h2>
            <p>ghahn97@naver.com</p>
          </div>
        </div>

        <Ucategori />
      </AboutStyle>
    </>
  );
};

export default Uabout;
