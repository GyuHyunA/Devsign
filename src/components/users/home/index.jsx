import React from "react";
import styled from "styled-components";
import { uContList } from "../../../dummy/contentslist";
import UContents from "./contents/contents";

const UHStyle = styled.section`
  max-width: 768px;
  position: relative;
  top: 165px;
  margin: 0 auto;

  .nocons{
    width: 100%;
    text-align: center;
  }
`;

const UHome = () => {
  return (
    <UHStyle>
      {uContList.length === 0 ? (
        <Nocontent />
      ) : (
        uContList.map((v) => {
          return <UContents key={v.id} id={v.id} title={v.title} contents={v.contents} />;
        })
      )}
    </UHStyle>
  );
};

export default UHome;

// 콘텐츠가 없을떄
const Nocontent = () => {
  return <h1 className="nocons">콘텐츠 없음</h1>;
};
