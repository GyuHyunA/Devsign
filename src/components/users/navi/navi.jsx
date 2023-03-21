import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { uNList } from "../../../dummy/navlist";

const UNStyle = styled.nav`
  width: inherit;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0 360px;
  .left-wrap {
    /* img */
    .logo-box {
      display: flex;
      align-items: center;
      .circle {
        width: 30px;
        height: 30px;
        margin-left: 20px;
        margin-right: 15px;
        background-color: gray;
        border-radius: 50%;
      }
    }
  }
  .right-wrap {
    width: inherit;
    display: flex;
    align-items: center;
    list-style: none;
    .list-box {
      margin-right: 40px;
      &:nth-child(3) {
        margin-right: 20px;
      }
      &:active {
        color: #ffab87;
      }
    }
  }
`;

const UNavi = () => {
  return (
    <UNStyle>
      <div className="left-wrap">
        <Link className="logo-box" to={"/"}>
          {/* <img src="" alt="" className="logo_img" /> */}
          <div className="circle"></div>
          <p className="logo_title">Devsign</p>
        </Link>
      </div>
      <ul className="right-wrap">
        {uNList.map((v, i) => {
          return (
            <Link className="list-box" to={v.link} key={v.id}>
              <li className="list">{v.name}</li>
            </Link>
          );
        })}
      </ul>
    </UNStyle>
  );
};

export default UNavi;
