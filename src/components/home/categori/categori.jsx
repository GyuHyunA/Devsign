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
      img {
        position: absolute;
        height: 22px;
        top: 5px;
        right: 5px;
        cursor: pointer;
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
    .cate-link {
      margin-top: 15px;
      img {
        height: 24px;
        margin-right: 10px;
      }
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
          <img src="/assets/icons/search.png" alt="" />
        </div>
      </div>
      <div className="cate-info">
        <h2>GyuHyun</h2>
        <span>FrontEnd Developer</span>
        <div className="cate-link">
          {cateLinkList.map((v) => (
            <a href={v.href} target={v.target} rel="noreferrer noopener" key={v.id}>
              <img src={`/assets/icons/${v.src}`} alt={v.name} />
            </a>
          ))}
        </div>
      </div>
    </CategoriStyle>
  );
};

export default Categori;

const cateLinkList = [
  {
    id: 1,
    name: "github",
    href: "https://github.com/GyuHyunA",
    src: "github.png",
    target: "_blank",
  },
  {
    id: 2,
    name: "mail",
    href: "mailto:ghahn97@gmail.com",
    src: "mail.png",
    target: "_self",
  },
  {
    id: 3,
    name: "insta",
    href: "https://www.instagram.com/_dev_sign_",
    src: "insta.png",
    target: "_blank",
  },
];
