import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyled = styled.nav`
  width: 100vw;
  height: 80px;
  background: #ffffff;
  position: fixed;
  z-index: 999;
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
  const [IsNavList, setisNavList] = useState(3);

  return (
    <NavStyled>
      <div className="nav-contain">
        <div className="nav-logo-wrap">
          <Link to="/" onClick={() => setisNavList(3)}>
            <div className="temp-logo"></div>
            {/* <img src="" alt="" /> */}
            <h2>블로그</h2>
          </Link>
        </div>
        <ul className="nav-navlist">
          {navList.map((v, i) => (
            <li key={v.id}>
              <Link to={`/${v.url}`} onClick={() => setisNavList(v.id)} className={`${IsNavList === i ? "nav-active" : " "}`}>
                {v.tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </NavStyled>
  );
};

export default Nav;

const navList = [
  {
    id: 0,
    tag: "Post",
    url: "post",
  },
  {
    id: 1,
    tag: "Work",
    url: "work",
  },
  {
    id: 2,
    tag: "Contact",
    url: "contact",
  },
  {
    id: "logo"
  },
];
