import React from "react";
import { DatePicker } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 0px; /* Adjust as needed */
`;

const StyledDatePicker = styled(DatePicker)`
  width: 220px; // Adjust the width
  height: 45px; // Adjust the height
  .ant-picker-input > input {
    height: 30px; // Adjust the input height
  }
`;

const Label = styled.label`
  position: absolute;
  top: -8px; // Adjust to place half inside and half outside
  left: 10px; // Adjust for horizontal alignment
  background: white;
  padding: 0 5px;
  font-size: 12px;
  color: #000;
  z-index: 20;
  font-weight: 500;
  color: rgba(88, 96, 111, 0.8);
`;

const AntDesignDatePicker = ({ onChange, label }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledDatePicker
        onChange={onChange}
        popupStyle={{
          width: "120px", // Adjust the width
          // left: '-220px', // Position the dropdown to the left
        }}
        dropdownAlign={{
          points: ["tr", "br"],
          offset: [-220, 0], // Adjust to position the dropdown to the left of the input field
        }}
      />
    </Wrapper>
  );
};

export default AntDesignDatePicker;
