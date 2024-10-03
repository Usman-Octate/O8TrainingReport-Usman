import React from "react";
import styled from "styled-components";

// Styled Button Component
const Btn = styled.button`
  background-color: ${(props) => {
    switch (props.name) {
      case "Completed":
      case "Success":
        return "#ECFAF2";
      case "Partially Completed":
      case "Pending For Approval":
        return "#F5F9E9";
      case "Draft":
        return "#FFF6E6";
      case "Returned":
        return "#FFF5F5";
      case "Posted":
      case "Active":
        return "#ECFAF2";
      case "Open":
        return "#E1EEFF";
      default:
        return "#FFF"; // default background color if no match
    }
  }};
  color: ${(props) => {
    switch (props.name) {
      case "Completed":
      case "Success":
        return "#41C980";
      case "Partially Completed":
      case "Pending For Approval":
        return "#98C425";
      case "Draft":
        return "#FFA800";
      case "Returned":
        return "#EB5757";
      case "Posted":
      case "Active":
        return "#41C980";
      case "Open":
        return "#007AFF";
      default:
        return "#000"; // default text color if no match
    }
  }};
  font-size: ${(props) => (props.font ? props.font : "18px")};
  text-align: center;
  border: none;
  padding: ${(props) => (props.padding ? props.padding : "8px 40px")};
  border-radius: 8px;
`;

const Wrapper = styled.div``;

const LargeButton = ({ name, font, padding }) => {
  return (
    <Wrapper>
      <Btn name={name} font={font} padding={padding}>
        {name}
      </Btn>
    </Wrapper>
  );
};

export default LargeButton;
