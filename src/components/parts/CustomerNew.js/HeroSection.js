import React from "react";
import SideNavbar from "./SideNavbar";
import PopupBody from "./PopupBody";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <SideNavbar />
      <PopupBody />
    </Wrapper>
  );
};

export default HeroSection;
