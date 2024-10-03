import React from "react";
import styled from "styled-components";
import Dropdown from "../SVGicons/ArrowDownIcon";
import { useSelector } from "react-redux";
import ArrowRight from "../SVGicons/ArrowRight";
import ArrowLeft from "../SVGicons/ArrowLeft";
import Dropdown3 from "../SVGicons/Dropdown3";
import DropsDown2 from "../SVGicons/DropsDown2";
const DropDown2 = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  return (
    <Wrapper size={props.size}>
      <Image>
        {props.icon === "ArrowDown" ? (
          <Dropdown fill={themeKeys.primary} />
        ) : props.icon === "ArrowRight" ? (
          <DropsDown2 fill={themeKeys.primary} />
        ) : props.icon === "ArrowLeft" ? (
          <Dropdown3 fill={themeKeys.primary} />
        ) : (
          ""
        )}
      </Image>
    </Wrapper>
  );
};

export default DropDown2;

const Wrapper = styled.button`
  height: 31px;
  width: 31px;
  border-radius: 8px;
  background-color: #ffffff;
  border: none;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
