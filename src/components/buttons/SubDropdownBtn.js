///////////////////// NOT IN USE ///////////////////////
import React from "react";
import styled from "styled-components";
import icon from "../../assets2/SideNavIcons/Banking.svg";
// const Btn = styled.div`
//   background-color: #023f81;
//   border-radius: 0 5px 5px 0;
//   padding: 0 16px;
// `;
const IconDiv = styled.div`
  /* justify-content: center; */
  align-items: center;
  display: flex;
  padding: 5px 8px;
  width: 170px;
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    background-color: #ffffff33;
  }
`;
const Text = styled.div`
  font-weight: 700;
  font-size: 12px;
  margin-left: 14px;
  color: #ffffff;
`;
const SubDropdownBtn = (props) => {
  // const iconsrc = require(`../../assets2/SideNavIcons/${props.icon}`.svg);
  return (
    // <Btn>
    <IconDiv>
      <img src={icon} alt="a" />
      <Text>Juornal Entry</Text>
    </IconDiv>
    // </Btn>
  );
};

export default SubDropdownBtn;
