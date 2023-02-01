import { Link } from "react-router-dom";
import styled from "styled-components";

const NavEditStyled = styled.nav`
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
    .write-wrap {
      width: 107px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #000000;
      border-radius: 44px;
      font-size: 18px;
      font-weight: 700;
      color: #ffffff;
    }
  }
`;

const NavEdit = () => {
  return (
    <NavEditStyled>
      <div className="nav-contain">
        <div className="nav-logo-wrap">
          <Link to="/">
            <div className="temp-logo"></div>
            <h2>블로그</h2>
          </Link>
        </div>
        <Link to="/setting" className="write-wrap">
          완료
        </Link>
      </div>
    </NavEditStyled>
  );
};

export default NavEdit;
