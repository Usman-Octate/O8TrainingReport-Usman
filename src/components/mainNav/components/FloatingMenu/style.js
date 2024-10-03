import styled from "styled-components";

export const ClosedNavMenu = styled.div`
  background-color: ${(props) => props.bgColor};
  color: white;
  padding: 5px;
  display: "block";
  position: absolute;
  z-index: 1000;
  box-shadow: 0px 1.3597630262374878px 6.798815727233887px 0px #00000040;
  top: ${(props) =>
    props.centerFloatMenu ? `${props.top}px` : `${props.top}px`};
  top: ${(props) =>
    props.centerFloatMenu ? `${props.top}px` : `${props.top}px`};
  border-radius: 8px;
  left: 4rem;
  @media (max-width: 1300px) {
    left: 3.35rem;
  }
  @media (max-width: 1200px) {
    left: 3.2rem;
  }
  @media (max-width: 1100px) {
    left: 3.3rem;
  }
  @media (max-width: 900px) {
    left: 3.17rem;
  }
  @media (max-width: 800px) {
    left: 3.2rem;
  }
  @media (max-width: 600px) {
    left: 2.4rem;
  }
  @media (max-width: 500px) {
    left: 2.35rem;
  }
  @media (max-width: 400px) {
    left: 2.3rem;
  }
  @media (max-width: 300px) {
    left: 2.15rem;
  }
  @media (max-width: 200px) {
    left: 1.8rem;
  }
`;
export const ClosedNavSubMenu = styled.div`
  background-color: ${(props) => props.bgColor};
  left: ${(props) => props.leftMargin}px;
  color: white;
  padding: 5px;
  display: block;
  position: absolute;
  top: -5px;
  border-radius: 8px;
  box-shadow: 0px 1.3597630262374878px 6.798815727233887px 0px #00000040;
`;

export const OptionContainer = styled.div`
  margin: auto;
`;
export const OptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#FFFFFF1A" : "transparent"};
  border-radius: 6px;
  &:hover {
    background-color: #ffffff1a;
  }
`;
