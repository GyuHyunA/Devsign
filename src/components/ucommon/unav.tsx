import { Link } from "react-router-dom";
import styled from "styled-components";

const UnavStyle = styled.nav`
  /* width: 100%; */
  height: 70px;
  margin: 0 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  .logo {
    width: 100px;
    padding: 20px 0;
    a {
      font-size: 20px;
      color: #fd7b7b;
      font-weight: 700;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .input {
      input {
        display: none;
      }
      a {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        img {
          width: inherit;
          height: inherit;
        }
      }
    }
    .about {
      margin-left: 20px;
      color: #000;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

// interface Props {
//   isDeskTop: boolean;
// }

const Unav = () => {
  return (
    <UnavStyle>
      <div className="logo left">
        <Link to="/">Leemit.log</Link>
      </div>
      <div className="right">
        <div className="input">
          <input type="text" />
          <Link to="/">
            <img src="assets/Icons/search.svg" alt="" />
          </Link>
        </div>
        <Link to="about" className="about">
          About Me
        </Link>
      </div>
    </UnavStyle>
  );
};

export default Unav;

// margin: ${(p) => (p.isDeskTop ? 0 + " " + 320 + "px" : 0 + " " + 210 + "px")};
