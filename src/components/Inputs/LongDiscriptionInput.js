import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const InputFields = styled.div`
  position: relative;
  flex-grow: 1; /* Allow the input field to grow */
`;

const LongDescription = styled.textarea`
  border: 1px solid #464f604d;
  height: ${(props) => (props.setHeight === "comment" ? "130px" : "270px")};
  width: 100%; /* Set width to 100% to take full space of parent */
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  padding: 10px;
  resize: none;
  box-sizing: border-box; /* Ensure padding is included in the width */
  overflow-y: auto; /* Ensure scrollbar appears */

  /* Custom scrollbar for WebKit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 5px; /* Width of the vertical scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Color of the scrollbar track */
  }
  &::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar thumb */
    border-radius: 10px; /* Rounded corners for the scrollbar thumb */
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color when the thumb is hovered */
  }

  /* Custom scrollbar for Firefox */
  scrollbar-width: thin; /* Makes scrollbar thinner */
  scrollbar-color: #888 #f1f1f1; /* Thumb and track colors respectively */
`;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  background-color: #ffffff;
  left: 10px;
  top: -5px;
  font-size: 12px;
  padding: 0px 4px;
  color: #58606f; /* Default to grey color */
  font-weight: 600;
`;

const LongDescriptionInput = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const getLabelColor = () =>
    props.disable ? themeKeys.c13 : themeKeys.primary;

  return (
    <Wrapper>
      <InputFields>
        <Label color={getLabelColor()}>{props.Name}</Label>
        <LongDescription
          setHeight={props.setHeight}
          maxLength="20000"
          value={props.value}
          onChange={props.onChange}
        />
      </InputFields>
    </Wrapper>
  );
};

export default LongDescriptionInput;
