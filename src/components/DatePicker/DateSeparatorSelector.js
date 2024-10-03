// src/components/DateSeparatorSelector.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDateSeparator } from "../../redux/appReducer/DateSeparator";
import styled from "styled-components";
import Select from "react-select";

const DropDownContainer = styled.div`
  width: 300px;
  position: relative;
  font-size: 12px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: absolute;
  top: -7px;
  left: 10px;
  z-index: ${(props) => (props.isDropdownOpen ? 0 : 5)};
  font-size: 12px;
  padding: 0px 4px;
  color: #58606f;
  font-weight: 700;
`;

const Wrap = styled.div``;

const DateSeparatorSelector = () => {
  const dispatch = useDispatch();
  const dateSeparator = useSelector((state) => state.dateSeparator.separator);

  const handleDateSeparatorChange = (selectedOption) => {
    dispatch(setDateSeparator(selectedOption.value));
  };

  const options = [
    { value: " ", label: "Space ( )" },
    { value: ".", label: "Period (.)" },
    { value: "-", label: "Hyphen (-)" },
    { value: "/", label: "Slash (/)" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#fff",
      border: state.isFocused ? "1px solid #157BEA" : "1px solid #464f604d",
      boxShadow: state.isFocused ? "0 0 0 1px none" : "none",
      "&:hover": {
        border: state.isFocused ? "1px solid #157BEA" : "1px solid #464f604d",
      },
      minHeight: "44px",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "13px",
      color: "#58606f",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "#abafb7",
      fontSize: "13px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#58606f",
      fontSize: "12px",
    }),
  };

  return (
    <DropDownContainer>
      <Title>Date Separator</Title>
      <Wrap>
        <Select
          options={options}
          styles={customStyles}
          onChange={handleDateSeparatorChange}
          placeholder={dateSeparator}
          defaultValue={options.find(
            (option) => option.value === dateSeparator
          )}
        />
      </Wrap>
    </DropDownContainer>
  );
};

export default DateSeparatorSelector;
