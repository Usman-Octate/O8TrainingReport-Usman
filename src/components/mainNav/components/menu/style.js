import styled from "styled-components";

export const Dropdown = styled.div`
  /* background-color: ${(props) => props.bgColor}; */
  border-radius: 0.3rem 0.3rem 0 0;
  padding: 3px 0;
  display: ${(props) => (props.isOpen || props.isFloating ? "block" : "none")};
  position: relative;

  /* transition: max-height 0.5s ease; */
  /* overflow: hidden; */
`;
export const DropDownOptions = styled.div`
  display: flex;
  transition-delay: 2s;
  transition-duration: 2s;

  /* transition: height 10s ease-in-out;
  height: ${(props) => (props.isOpen ? "100%" : "0")}; */
`;
export const Option = styled.div`
  // font-size:  ${(props) => (props.isFloating ? "10.6px" : "14px")};
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.textColor};
  padding: 5px;
  @media (max-width: 600px) {
    font-size: 10.6px;
    padding: 5px 0;
  }
`;
export const VLine = styled.div`
  margin-left: ${(props) => (props.isSubmenu ? "1px" : "30px")};
  @media (max-width: 600px) {
    margin-left: 18px;
  }
`;
export const OptionDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? props.hoverColor : "")};
  /* background-color: pink; */
  border-radius: 6px;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
export const OptionContainer = styled.div`
  /* box-shadow: "0px 1.3597630262374878px 6.798815727233887px 0px #00000040"; */

  width: ${(props) => (props.isFloating ? "null" : "82%")};
  margin: ${(props) => (props.isFloating ? "0px" : "auto")};
`;
export const ImgArr = styled.div`
  visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};
  display: "flex";
  margin-left: ${(props) => (props.isFloating ? "8px" : "0px")};
  @media (max-width: 600px) {
    img {
      width: 10px;
    }
  }
`;
