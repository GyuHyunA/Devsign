import React from "react";
import styled from "styled-components";

const ContactStyle = styled.section`
  .contact-wrap {
    width: 100vw;
    height: 100vh;
    padding-top: 180px;
    display: flex;
    justify-content: center;
  }
`;

const Contact = () => {
  return (
    <ContactStyle>
      <div className="contact-wrap">
        <h6>페이지 준비중 입니다</h6>
      </div>
    </ContactStyle>
  );
};

export default Contact;
