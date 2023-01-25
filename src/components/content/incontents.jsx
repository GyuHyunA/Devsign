import React from "react";
import styled from "styled-components";
// import Nav from "../nav/nav";

const ContentsStyle = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 180px;
  display: flex;
  justify-content: center;
  .contents-wrap {
    width: 768px;
    .title-wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      .title {
        font-size: 30px;
      }
      .share-wrap {
        display: flex;
        img {
          height: 20px;
        }
        img:nth-child(2) {
          margin-left: 15px;
        }
      }
    }
    .content-wrap {
      width: 100%;
      margin-top: 70px;
      margin-bottom: 30px;
      .text-wrap {
        width: 100%;
      }
    }
    .hashtag-wrap {
      width: 100%;
      margin-top: 15px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .tag-box {
        border: 1px solid #eaeaea;
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 8px 12px;
        border-radius: 10px;
        .tag {
          width: 100%;
          height: 100%;
          color: #ff7a41;
        }
      }
    }
  }
`;
const Incontents = ({ title, contents, hesh, cate }) => {
  return (
    <ContentsStyle>
      <div className="contents-wrap">
        <div className="title-wrap">
          <h2 className="title">{title}</h2>
          <div className="share-wrap">
            <img src="/assets/icons/heart.png" alt="" className="logo_heart cursor" />
            <img src="/assets/icons/share.png" alt="" className="logo_share cursor" />
          </div>
        </div>
        <div className="date-visit-wrap">
          <p className="date">2023/01/06</p>
          <p className="visitor">조회 : 0</p>
        </div>
        <section className="content-wrap">
          <div className="text-wrap">
            {/* append넣어서 텍스트 입력하기!! */}
            <p>{contents}</p>
            <br />
            <div style={{ background: "#FFFFFF", width: "768px", height: "200px" }}></div>
          </div>
        </section>
        <div className="hr"></div>
        <div className="hashtag-wrap">
          {hesh.map((v) => {
            return (
              <div className="tag-box" key={v.id}>
                <span className="tag">#{v.tag}</span>
              </div>
            );
          })}
          <div className="tag-box">
            <span className="tag">${cate}</span>
          </div>
        </div>
      </div>
    </ContentsStyle>
  );
};

export default Incontents;
