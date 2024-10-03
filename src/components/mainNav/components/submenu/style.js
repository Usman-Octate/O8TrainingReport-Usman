import styled from "styled-components";

export const IconDiv = styled.div`
  display: flex;
  padding: 5px 8px;
  border-radius: 7px;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "pink" : "")};
  &:hover {
    background-color: ${(props) => props.hover};
  }
  // @media (max-width: 600px) {
  //   max-width: 107px;
  // }
`;
export const Text = styled.div`
  display: flex;
  white-space: nowrap;
  font-weight: 400;
  // font-size: ${(props) => (props.isFloating ? "10px" : "12px")};
  font-size: 12px;
  margin-left: ${(props) => (props.isFloating ? "9px" : "14px")};
  color: ${(props) => props.color};
  @media (max-width: 600px) {
    font-size: 10px;
    margin-left: 9px;
  }
`;
export const SubMenuDiv = styled.div`
  display: ${(props) => (props.isFloating ? "block" : "flex")};
  cursor: pointer;
  @media (max-width: 600px) {
    display: block;
  }
  padding: ${(props) => (props.isFloating ? "0" : "0 12px")};
`;
export const VLine = styled.div`
  margin-left: ${(props) => (props.isSubmenu ? "1px" : "30px")};
  @media (max-width: 600px) {
    margin-left: 18px;
  }
`;
export const SubDropdown = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: "#FFFFFF1A";
  border-radius: 0 5px 5px 0;
  padding: ${(props) => (props.isFloating ? "10px 0px" : "10px 10px")};
  @media (max-width: 600px) {
    padding: 10px 0px;
  }
  /* left: 18.5rem; */
  z-index: 10000;
  /* box-shadow: ${(props) =>
    props.shadow
      ? "0px 1.3597630262374878px 6.798815727233887px 0px #00000040"
      : ""}; */
`;

export const ImgArr = styled.div``;

export const SvgImg = styled.img`
  width: 16px;
  height: 16px;
`;
