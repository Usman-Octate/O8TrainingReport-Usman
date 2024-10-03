import React, { useState } from "react";
import styled from "styled-components";

const DatePickerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0px;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: -8px;
  left: 10px; /* Adjust as needed */
  background-color: white;
  padding: 0 4px;
  font-size: 12px;
  pointer-events: none;
  font-weight: 500;
  color: rgba(88, 96, 111, 0.8);
`;

const StyledInput = styled.input`
  height: 45px;
  width: 220px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 14px;
  color: #58606f;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &::-webkit-input-placeholder {
    color: blue; /* Set placeholder color for WebKit browsers */
    text-transform: uppercase; /* Ensure placeholder text is uppercase */
  }
  &::-moz-placeholder {
    color: blue; /* Set placeholder color for Mozilla browsers */
    text-transform: uppercase; /* Ensure placeholder text is uppercase */
  }
  &:-ms-input-placeholder {
    color: blue; /* Set placeholder color for Internet Explorer */
    text-transform: uppercase; /* Ensure placeholder text is uppercase */
  }
  &:-moz-placeholder {
    color: blue; /* Set placeholder color for old Mozilla browsers */
    text-transform: uppercase; /* Ensure placeholder text is uppercase */
  }

  &:hover {
    border-color: #666;
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const CustomDatePicker = ({ Title }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <DatePickerWrapper>
      <StyledLabel htmlFor="datePicker">{Title}</StyledLabel>
      <StyledInput
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
        placeholder="MM/DD/YYYY" // Ensure this is in uppercase
      />
    </DatePickerWrapper>
  );
};

export default CustomDatePicker;
