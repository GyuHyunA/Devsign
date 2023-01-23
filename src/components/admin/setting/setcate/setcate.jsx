import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SetCateStyle = styled.div`
  position: fixed;
  left: calc(50% - 600px);
  .setcate-wrap {
    width: 250px;
    height: 500px;
    padding: 23px 25px;
    border-radius: 10px;
    background-color: white;
  }

  .cate-contain {
    margin-bottom: 25px;
  }

  .hr {
    width: calc(250px - 50px);
  }
`;

const CateTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
  img {
    height: 24px;
    margin-right: 10px;
  }

  h2 {
    font-size: 21px;
    font-weight: 700;
    line-height: 21px;
  }
`;

const CateList = styled.ul`
  padding-left: 35px;
  margin-top: 15px;
  li {
    margin-bottom: 5px;
  }
  a.active {
    color: #ff7a41;
  }
`;

const SetCate = () => {
  const [isClick, setIsClick] = useState("글 관리");
  return (
    <SetCateStyle>
      <div className="setcate-wrap">
        {catelist.map((v) => (
          <div className="cate-contain" key={v.id}>
            <CateTitle>
              <img src={v.img} alt={v.children.find((v) => v.name)} />
              <h1>{v.name}</h1>
            </CateTitle>
            <div className="hr"></div>
            {v.children.map((val) => (
              <CateList key={val.id}>
                <li onClick={() => setIsClick(val.catenum)}>
                  <Link to={val.link} className={`${isClick === val.name ? "active" : " "}`}>
                    {val.name}
                  </Link>
                </li>
              </CateList>
            ))}
          </div>
        ))}
      </div>
    </SetCateStyle>
  );
};

export default SetCate;

// const iconlist = {
//   chart: "/assets/icons/chart.png",
//   content: "/assets/icons/text.png",
//   reply: "/assets/icons/reply.png",
// };

const catelist = [
  {
    id: 1,
    name: "콘텐츠",
    img: "/assets/icons/text.png",
    children: [
      {
        id: 1,
        link: "/homea/text",
        name: "글 관리",
        catenum: "글 관리",
      },
      {
        id: 2,
        link: "/homea/page",
        name: "페이지 관리",
        catenum: "페이지 관리",
      },
      {
        id: 3,
        link: "/homea/categori",
        name: "카테고리 관리",
        catenum: "페이지 관리",
      },
    ],
  },
  {
    id: 2,
    name: "댓글",
    img: "/assets/icons/reply.png",
    children: [
      {
        id: 4,
        link: "/homea/reply",
        name: "댓글 관리",
        catenum: "댓글 관리",
      },
    ],
  },
  {
    id: 3,
    name: "통계",
    img: "/assets/icons/chart.png",
    children: [
      {
        id: 5,
        link: "/homea/chart",
        name: "방문 통계",
        catenum: "방문 통계",
      },
    ],
  },
];
