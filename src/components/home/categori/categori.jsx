import React from "react";
import styled from "styled-components";

const CategoriStyle = styled.div`
  width: 200px;
  position: fixed;
  top: 180px;
  margin-left: calc(50% - 620px);

  .categori-wrap {
    width: 100%;
    .hr {
      border-bottom: 2px solid #eaeaea;
      margin: 15px 0;
    }
    .cate-list {
      margin-bottom: 15px;
      li {
        font-size: 16px;
      }
    }
    .cate-search {
      position: relative;
      width: 200px;
      input {
        position: relative;
        width: 200px;
        height: 30px;
        border: 2px solid #d9d9d9;
        border-radius: 5px;
      }
      .temp-search {
        position: absolute;
        width: 26px;
        height: 26px;
        top: 5px;
        right: 5px;
        border-radius: 50%;
        background: #515151;
      }
    }
  }

  .cate-info {
    margin-top: 50px;
    h2 {
      margin-bottom: 7px;
    }
    span {
      font-size: 15px;
      line-height: 15px;
      letter-spacing: 0em;
      color: #b1b1b1;
      margin-bottom: 15px;
    }
  }
`;

const Categori = () => {
  return (
    <CategoriStyle>
      <div className="categori-wrap">
        <h2>카테고리 목록</h2>
        <div className="hr"></div>
        <ul className="cate-list">
          <li>전체보기(0)</li>
        </ul>
        <div className="cate-search">
          <input type="text" />
          {/* <img src="" alt="" /> */}
          <div className="temp-search"></div>
        </div>
      </div>
      <div className="cate-info">
        <h2>GyuHyun</h2>
        <span>FrontEnd Developer</span>
        <div className="cate-link">
          <a href="/">
            <img src="" alt="" />
          </a>
          <a href="/">
            <img src="" alt="" />
          </a>
          <a href="/">
            <img src="" alt="" />
          </a>
        </div>
      </div>
    </CategoriStyle>
  );
};

export default Categori;
