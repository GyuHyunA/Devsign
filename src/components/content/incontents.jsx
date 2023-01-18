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
      align-items: center;
      .tag-box {
        border: 1px solid #eaeaea;
        margin-right: 10px;
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
const Incontents = () => {
  return (
    <ContentsStyle>
      <div className="contents-wrap">
        <div className="title-wrap">
          <h2 className="title">제목입니다</h2>
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
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
              infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <br />
            <div style={{ background: "#FFFFFF", width: "768px", height: "200px" }}></div>
          </div>
        </section>
        <div className="hr"></div>
        <div className="hashtag-wrap">
          <div className="tag-box">
            <span className="tag">#해시</span>
          </div>
          <div className="tag-box">
            <span className="tag">#태그</span>
          </div>
          <div className="tag-box">
            <span className="tag">$카테고리</span>
          </div>
        </div>
      </div>
    </ContentsStyle>
  );
};

export default Incontents;
