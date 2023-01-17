import React from "react";
import { Link } from "react-router-dom";
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
    .nav-active {
      color: #ffab87;
    }
  }
`;

const Nav = () => {
  return (
    <NavStyled>
      <div className="nav-contain">
        <div className="nav-logo-wrap">
          <Link to="/">
            <div className="temp-logo"></div>
            {/* <img src="" alt="" /> */}
            <h2>블로그</h2>
          </Link>
        </div>
        <ul className="nav-navlist">
          <li>
            <Link to="/" className="nav-active">
              Post
            </Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default Nav;
