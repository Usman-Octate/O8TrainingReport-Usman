import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrap2 = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18.6px;
`;
const Span = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.bgColor};
  transition: 0.4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: "";
    height: 11px;
    width: 11px;
    left: ${(props) => (props.clicked ? "3.5px" : "26.0px")};
    bottom: 4px;
    background-color: #ffffff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const InputCheck = styled.input`
  height: 0px;
  width: 0px;
  opacity: 0;
`;

const ToggleButton = () => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [isChecked, setIsChecked] = useState(true);
  const getSpanBg = () => (isChecked ? themeKeys.c6 : themeKeys.c10);

  const HandleOnCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Wrap2>
      <InputCheck style={{ cursor: "pointer" }} type="checkbox" />
      <Span
        bgColor={getSpanBg()}
        clicked={isChecked}
        onClick={HandleOnCheck}
      ></Span>
    </Wrap2>
  );
};

export default ToggleButton;
