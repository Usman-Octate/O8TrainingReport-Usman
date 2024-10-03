import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Btn = styled.button`
  background-color: ${(props) => props.bgColor || "#ecfaf2"};
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.textColor || "#41c980"};
  border: none;
  padding: 8px 40px;
  border-radius: 8px;
  font-weight: 600;
`;

const LargeButton = ({ name, textColor, bgColor }) => {
  return (
    <Wrapper>
      <Btn textColor={textColor} bgColor={bgColor}>{name}</Btn>
    </Wrapper>
  );
};

export default LargeButton;
