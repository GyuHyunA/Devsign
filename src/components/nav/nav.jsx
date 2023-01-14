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

    .nav-logo-wrap {
      width: 150px;
      a {
        display: flex;
        align-items: center;
        .temp-logo {
          width: 30px;
          height: 30px;
          background: #515151;
          border-radius: 50%;
        }
        h2 {
          margin-left: 16px;
        }
      }
    }

    .nav-navlist {
      width: 250px;
      display: flex;
      justify-content: right;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        cursor: pointer;
      }

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
        <div className="nav-logo-wrap">
          <a href="/">
            <div className="temp-logo"></div>
            {/* <img src="" alt="" /> */}
            <h2>블로그</h2>
          </a>
        </div>
        <ul className="nav-navlist">
          <li>
            <a href="/">Post</a>
          </li>
          <li>
            <a href="/">Work</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default Nav;
