import React from "react";
import styled from "styled-components";

const NavStyled = styled.nav`
  width: 100vw;
  height: 80px;
  background: #ffffff;
  position: fixed;
  .nav-contain {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo-wrap {
      width: 150px;
      display: flex;
      align-items: center;
      .temp-logo {
        width: 30px;
        height: 30px;
        background: #515151;
        border-radius: 50%;
      }
      span {
        font-weight: 700;
        font-size: 21px;
        margin-left: 16px;
      }
    }

    .navlist {
      width: 250px;
      display: flex;
      justify-content: right;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;

      li:nth-child(2),
      li:nth-child(3) {
        margin-left: 40px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavStyled>
      <div className="nav-contain">
        <div className="logo-wrap">
          <div className="temp-logo"></div>
          {/* <img src="" alt="" /> */}
          <span>블로그</span>
        </div>
        <ul className="navlist">
          <li>Post</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default Nav;
