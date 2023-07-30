import { styled } from "styled-components";

const CateStyle = styled.div`
  width: 100%;
  max-width: 300px;
  min-width: 220px;
  .cate-contain {
    width: 210px;
    h1 {
      width: inherit;
      padding-bottom: 10px;
      border-bottom: 1px solid #eaeaea;
      margin-bottom: 10px;
    }
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        margin-bottom: 5px;
        &:last-child {
          margin-bottom: 20px;
        }
      }
    }
  }
  .recent-contain {
    width: 210px;
    h1 {
      width: inherit;
      padding-bottom: 10px;
      border-bottom: 1px solid #eaeaea;
      margin-bottom: 10px;
    }
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        margin-bottom: 5px;
        &:last-child {
          margin-bottom: 20px;
        }
      }
    }
  }
  .link {
    width: 210px;
    h1 {
      width: inherit;
      padding-bottom: 10px;
      border-bottom: 1px solid #eaeaea;
      margin-bottom: 10px;
    }
    div {
      width: 100%;
      display: flex;
      align-items: center;
      a {
        margin-right: 5px;
      }
    }
  }
`;

const Ucategori: React.FC = () => {
  return (
    <CateStyle>
      <div className="cate-contain">
        <h1>Categori</h1>
        <div>
          <a href="/">React</a>
          <a href="/">일상</a>
          <a href="/">디자인</a>
        </div>
      </div>
      <div className="recent-contain">
        <h1>Recent</h1>
        <div>
          <a href="/">제목...</a>
          <a href="/">제목2...</a>
        </div>
      </div>
      <div className="link">
        <h1>Link</h1>
        <div>
          <a href="/">
            <img src="assets/Icons/github.svg" alt="" />
          </a>
          <a href="/">
            <img src="assets/Icons/insta.svg" alt="" />
          </a>
        </div>
      </div>
    </CateStyle>
  );
};

export default Ucategori;
