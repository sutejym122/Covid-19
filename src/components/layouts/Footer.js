import React from "react";
import styled from "styled-components";
import { RiHandHeartLine } from "react-icons/ri";

const Footer = () => {
  return (
    <FooterContainer className="container-fluid text-center pt-2">
      <p className="font-weight-bold align-middle">
        &copy; &nbsp; Rahul Kata, <span className="year ml-1">2020</span>
        <RiHandHeartLine className="ml-2 mb-2" size="2%" />
      </p>
    </FooterContainer>
  );
};

export default Footer;

// STYLES COMPONENTS
const FooterContainer = styled.footer`
  height: 8vh;
  border: 2px solid white;
  color: var(--neon-blue) !important;
  .year {
    color: var(--dark-blue);
  }
`;
