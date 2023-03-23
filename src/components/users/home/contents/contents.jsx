import React from "react";
import styled from "styled-components";

const UCStyle = styled.div`
  max-width: 768px;
  display: flex;
  flex-direction: column;
  .img-wrap {
    width: 100%;
    height: 402px;
    position: relative;
    background-color: white;
    border-radius: 10px;
  }
  .title-wrap {
    width: 100%;
    position: relative;
    h5 {
      margin: 10px 0;
    }
    p {
    }
  }
`;

const UContents = ({ id, title, contents }) => {
  return (
    <UCStyle>
      <div className="img-wrap">{/* <img src="" alt="" /> */}</div>
      <div className="title-wrap">
        <h5>{title}</h5>
        <p className="st">{contents}</p>
      </div>
    </UCStyle>
  );
};

export default UContents;
