import React, { useState, } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import { debounce } from "lodash";
const Wrapper = styled.div``;

const InputFields = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.insertFromRight ? "flex-start" : "flex-end"};
`;

const Input1 = styled.textarea`
  width: ${(props) =>
    props.setWidth === "true"
      ? "169px"
      : props.setWidth === "false"
      ? "395px"
      : props.setWidth === "equal"
      ? "158px"
      : props.setWidth === "long"
      ? "218px"
      : props.setWidth === "commsent"
      ? "350px"
      : props.setWidth === "des"
      ? "190px"
      : props.setWidth === "MaxWidth"
      ? "100%"
      : "188px"};
  border: 1px solid #464f604d;
  height: ${(props) => (props.setHeight === "maximum" ? "140px" : "27px")};

  border-radius: 4px;
  outline: none;
  font-size: 14px;
  background: url(${(props) => props.image}) no-repeat 95%;
  padding-right: ${(props) => (props.Padding === "Padding" ? "197px" : "10px")};
  padding-left: 10px;
  padding-bottom: ${(props) => (props.comment === "Large" ? "40px" : null)};
  /* cursor: pointer; */
  text-align: ${(props) =>
    props.alignRight || props.insertFromRight ? "right" : "left"};
  min-height: 27px;
  max-height: 156px;
  direction: ${(props) => (props.insertFromRight ? "rtl" : "ltr")};
  color: ${(props) => (props.disabled ? "#b8b8b8" : "#6a727f")};
  resize: ${(props) => (props.resizeHandler ? "vertical" : "none")};
  font-size: 13px;
  transition: all 0.4s ease;
  padding-top: 14px;
  &:focus,
  &:active {
    border: 1px solid #157bea;
    outline: none;
  }
  overflow: hidden;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 10px; /* Adjust position based on your layout */
  // top: 50%;
  // transform: translateY(-50%);
  cursor: pointer; /* Ensures the icon doesn't block input interaction */
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  /* cursor: default; */
  /* pointer-events: ${(props) => (props.disabled ? "none" : "auto")}; */
`;

const Text = styled.div`
  color: #ff0000;
`;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #ffffff;
  left: 10px;
  top: -5px;
  font-size: 12px;
  padding: 0px 4px;
  color: ${(props) => props.color};
  font-weight: 700;
`;

const ChartAccountInput = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const numberSeparator = useSelector((state) => state.number.NumberSeprator);
  const [inputValue, setInputValue] = useState("");
  const getLabelColor = () => (props.disable ? themeKeys.c13 : "#58606f");

  return (
    <Wrapper>
      <InputFields insertFromRight={props.insertFromRight}>
        <Label color={getLabelColor()}>
          {props.Name}
          <Text>{props.Hash}</Text>
        </Label>
        <Tooltip title={inputValue ? `${inputValue}` : ""} arrow>
          <Input1
            disabled={props.disable}
            Padding={props.Padding}
            readOnly={props.readOnly}
            comment={props.comment}
            setWidth={props.setWidth}
            setHeight={props.setHeight}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (props.onChange) props.onChange(e);
            }}
            value={props.value}
            alignRight={props.alignRight}
            resizeHandler={props.resizeHandler}
            insertFromRight={props.insertFromRight}
          />
        </Tooltip>
        {props.icon && (
          <IconContainer disabled={props.disable} onClick={props.onIconClick}>
            {props.icon}
          </IconContainer>
        )}
      </InputFields>
    </Wrapper>
  );
};

export default React.memo(ChartAccountInput);