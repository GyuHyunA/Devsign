import React from "react";
import styled from "styled-components";
import SetCate from "./setcate/setcate";

const SetReplyStyle = styled.section`
  margin-right: 38px;
`;

const SetReply = () => {
  return (
    <SetReplyStyle>
      <SetCate />
    </SetReplyStyle>
  );
};

export default SetReply;
