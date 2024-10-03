import React from "react";
import styled from "styled-components";
import Cross from "../SVGicons/Cross";
import { useSelector } from "react-redux";
import JornalAdd from "../SVGicons/JornalAdd";

const Wrapper = styled.div`
  /* width: 90px; */
  height: ${(props) => (props.disable === "disabled" ? "21px" : "18px")};
  border-radius: 10px;
  background-color: ${(props) =>
    props.disable === "disabled" ? "#dadbdf" : null};
  border: 2px solid
    ${(props) => (props.disable === "disabled" ? "none" : props.border)};
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 8px;
  padding-right: ${(props) => (props.disable === "disabled" ? "3px" : "1px")};
`;
const Title = styled.div`
  font-size: 12px;
  color: ${(props) =>
    props.textColor === "disabled" ? "#464F60" : props.txtColor};
  text-align: center;
`;

const TagButton = ({ name, disable, textColor }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  return (
    <Wrapper disable={disable} border={themeKeys.primary}>
      <Title textColor={textColor} txtColor={themeKeys.primary}>
        {name}
      </Title>
      {disable === "disabled" ? (
        <JornalAdd fill={"darkgrey"} />
      ) : (
        <Cross fill={themeKeys.primary} />
      )}
    </Wrapper>
  );
};

export default TagButton;
