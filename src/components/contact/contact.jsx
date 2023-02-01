import React from "react";
import styled from "styled-components";
import Nav from "../nav/nav";

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
      <Nav />
      <div className="contact-wrap">
        <h6>페이지 준비중 입니다</h6>
      </div>
    </ContactStyle>
  );
};

export default Contact;
