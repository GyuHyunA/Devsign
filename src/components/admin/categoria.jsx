import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cateLinkList } from "../home/categori";

const CategoriAStyle = styled.div`
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
        cursor: pointer;
      }
      .list-active {
        color: #ffab87;
      }
    }
    .cate-search {
      position: relative;
      /* width: 200px; */
      input {
        position: relative;
        width: 192px;
        height: 30px;
        border: 2px solid #d9d9d9;
        border-radius: 5px;
      }
      img {
        position: absolute;
        height: 22px;
        top: 7px;
        right: 13px;
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

  .cate-edit {
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    .cate-write {
      width: 150px;
      height: 35px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #dededf;
      margin-right: 15px;
      span {
        font-size: 15px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: center;
      }
    }
    .cate-setting {
      width: 35px;
      height: 35px;
      box-shadow: 0 0 0 2px #dededf inset;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        height: 20px;
      }
    }
  }
`;

const CategoriA = () => {
  return (
    <CategoriAStyle>
      <div className="categori-wrap">
        <h2>카테고리 목록</h2>
        <div className="hr"></div>
        <ul className="cate-list">
          <li className="list-active">전체보기(0)</li>
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
      <div className="cate-edit">
        <Link to="/homea" className="cate-write">
          <span>글쓰기</span>
        </Link>
        <Link to="/homea/setting" className="cate-setting">
          <img src="/assets/icons/setting.png" alt="" />
        </Link>
      </div>
    </CategoriAStyle>
  );
};

export default CategoriA;
