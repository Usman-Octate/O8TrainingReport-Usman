import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 0.5rem;
  /* overflow-x: hidden; */
  /* overflow: hidden; */
  /* position: relative; */
`;

export const Btn = styled.div`
  justify-content: space-between;
  padding: 10px;
  width: 85%;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  background-color: ${(props) => props.bgColor};
  border-radius: 8px;
  padding: 10px 18px;
  /* background-color: ${(props) => (props.isSelected ? props.bgColor : "")}; */
  &:hover {
    /* background-color: ${(props) => (props.isOpen ? "none" : " red")}; */
    background-color: ${(props) => props.hover};
    /* border-radius: 6px; */

    /* padding: 10px 18px; */
  }
  @media (max-width: 600px) {
    padding: 8px 0;
    width: 88%;
    align-items: center;
    &:hover {
      background-color: none;
      border-radius: initial;
      padding: 8px 0;
    }
  }
`;
export const Text = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => props.textColor};
  font-weight: bold;
  margin-left: 17px;
  @media (max-width: 600px) {
    font-size: 10.6px;
    margin-left: 8px;
  }
`;
export const Image = styled.div`
  @media (max-width: 600px) {
    img {
      display: flex;
      width: 17px;
    }
  }
`;

export const IconText = styled.div`
  display: flex;
  @media (max-width: 600px) {
    align-items: center;
  }
`;
export const Arrow = styled.div`
  cursor: pointer;
  display: ${(props) => (props.iconShow ? "none" : "block")};

  @media (max-width: 600px) {
    img {
      display: flex;
      height: 9px;
      width: 9px;
    }
  }
`;
