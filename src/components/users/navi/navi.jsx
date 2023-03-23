import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { uNList } from "../../../dummy/navlist";

const UNStyle = styled.nav`
  width: 100vw;
  height: 80px;
  background: white;
  position: fixed;
  top: 0;
  z-index: 999;
  .navi-con {
    height: inherit;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 150px;
    .left-wrap {
      position: relative;
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
      position: relativee;
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
  }

`;

const UNavi = () => {
  return (
    <UNStyle>
      <div className="navi-con">
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
      </div>
    </UNStyle>
  );
};

export default UNavi;
