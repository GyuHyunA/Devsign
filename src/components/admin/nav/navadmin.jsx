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
  }
`;

const NavAdmin = () => {
  return (
    <NavStyled>
      <div className="nav-contain">
        <div className="nav-logo-wrap">
          <Link to="/">
            <div className="temp-logo"></div>
            <h2>블로그</h2>
          </Link>
        </div>
        <div className="write-wrap">
          <Link to="/editpost">글작성</Link>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavAdmin;
