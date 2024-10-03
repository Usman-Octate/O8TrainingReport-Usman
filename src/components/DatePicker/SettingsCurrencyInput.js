import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrency } from "../../redux/appReducer/CurrencySlice";
import styled from "styled-components";
import Select from "react-select";

const DropDownContainer = styled.div`
  width: ${(props) => (props.setWidth ? "100%" : "217px")};
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

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#fff",
    border: state.isFocused ? "1px solid #157BEA" : "1px solid #464f604d",
    boxShadow: state.isFocused ? "0 0 0 1px none" : "none",
    "&:hover": {
      border: "1px solid #157BEA",
    },
    minHeight: "44px",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: "13px",
    color: "#58606f",
    backgroundColor: state.isSelected
      ? "#e0f0ff" // Background color for selected state
      : state.isFocused
      ? "#f1f9ff" // Background color for hover (focused) state
      : "#fff", // Default background color
    "&:hover": {
      backgroundColor: "#f1f9ff", // Hover background color
      cursor: "pointer",
    },
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "#abafb7",
    color: "#abafb7",
    fontSize: "13px",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#58606f",
    fontSize: "12px",
    display: "flex",
    flexDirection: "column",
  }),
};
const SingleValue = ({ data }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      marginTop: "-7px",
      alignSelf: "center",
    }}
  >
    <span
      style={{
        fontSize: "13px",
        fontWeight: "700",
      }}
    >
      {data.label}
    </span>
    <span style={{ fontSize: "11px", color: "#58606f" }}>{data.fullForm}</span>
  </div>
);

const Option = ({ data, isSelected, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...props.innerProps}
      style={{
        padding: "8px 10px",
        backgroundColor: isSelected
          ? "#e0f0ff" // Background color for selected option
          : isHovered
          ? "#f1f9ff" // Background color for hover effect
          : "#fff", // Default background color
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)} // Handle hover enter
      onMouseLeave={() => setIsHovered(false)} // Handle hover leave
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{data.label}</span>
        <span style={{ fontSize: "10px", color: "#58606f" }}>
          {data.fullForm}
        </span>
      </div>
    </div>
  );
};
const SettingsCurrencyDropDown = ({
  width,
  GetValFunction,
  currencyOptions,
}) => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  const handleCurrencyChange = (selectedOption) => {
    // Dispatch the selected option with all fields
    dispatch(updateCurrency(selectedOption));
    GetValFunction(selectedOption);
  };

  return (
    <DropDownContainer setWidth={width}>
      <Title>Currency</Title>
      <Wrap>
        <Select
          options={currencyOptions}
          styles={customStyles}
          onChange={handleCurrencyChange}
          components={{ SingleValue, Option }}
          placeholder="Select a currency"
          defaultValue={currencyOptions?.find(
            (option) => option.value === selectedCurrency.value
          )}
          isSearchable={false}
        />
      </Wrap>
    </DropDownContainer>
  );
};

export default SettingsCurrencyDropDown;
