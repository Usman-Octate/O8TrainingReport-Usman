import React from "react";
import styled from "styled-components";
import IcItem from "../mainNav/components/buttons/IcItem";
const Btn = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  background-color: ${(props) => (props.isSelected ? "red" : "")};
  border-radius: 6px;
  @media (max-width: 600px) {
    padding: 8px 0;
  }
  &:hover {
    background-color: ${(props) => props.hoverColor};

    border-radius: 6px;
  }
`;
const Image = styled.div`
  @media (max-width: 600px) {
    display: flex;

    img {
      width: 17px;
    }
  }
`;

const NavHideButtons = ({
  data,
  onClick,
  icColor,
  hoverColor,
  selectedOption,

  handleDropDownOptionClick,
}) => {
  return (
    <Btn
      onClick={(e) => onClick(e, data.title)}
      hoverColor={hoverColor}
      isSelected={selectedOption === data.title}
    >
      {/* <Image>{data.icon}</Image> */}
      {/* <div>{selectedOption}</div> */}
      <IcItem color={icColor} iconsrc={data.icon} />
    </Btn>
  );
};

export default NavHideButtons;
