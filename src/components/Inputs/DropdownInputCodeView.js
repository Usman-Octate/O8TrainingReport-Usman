import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Select, { components } from "react-select";

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

const DropDownContainer = styled.div`
  width: ${(props) =>
    props.setWidth === "long"
      ? "224px"
      : props.setWidth === "short"
      ? "100px"
      : "175px"};
  /* height: 0px; */
  position: relative;
  font-size: 14px;
  font-weight: bold;
  color: rgba(70, 79, 96, 0.6);
  cursor: pointer;
  /* background-color: red; */
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
  color: ${(props) => props.color};
  font-weight: 700;
`;

const Wrap = styled.div``;

const CustomOption = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(props.isSelected); // Handle selection state
  const { innerProps } = props;

  const handleClick = () => {
    // Toggle selection state
    setIsSelected(!isSelected);
    props.selectOption(props.data); // Pass the selected option back to the parent
  };
  return (
    <components.Option
      {...props}
      innerProps={{
        ...innerProps,
        style: {
          ...innerProps.style,
          backgroundColor: isSelected
            ? "#cce4ff" // Selected background color
            : isHovered
            ? "#e0f0ff" // Hover background color
            : "#fff", // Default background color
        },
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        onClick: handleClick,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ fontWeight: "bold" }}>{props.data.label}</span>
        <span style={{ fontSize: "10px", color: "#888", fontWeight: "normal" }}>
          {props.data.Data2}
        </span>
      </div>
    </components.Option>
  );
};

const DropdownInputAccountCodeView = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const [isSearchable, setIsSearchable] = useState(false);
  console.log(props.Data2, "dwqdwqd");

  const colourOptions =
    Array.isArray(props.Data) &&
    Array.isArray(props.Data2) &&
    typeof props.Data[0] === "string"
      ? props.Data.map((item, index) => ({
          label: item,
          value: item,
          Data2: props.Data2[index],
        }))
      : props.Data;

  const getLabelColor = () => (props.check ? themeKeys.c13 : "#58606f");

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      border: "none",
      boxShadow: "none",
      minHeight: "unset",
      height: "auto",
      padding: "0",
      margin: "0 2px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "2px 0",
    }),
    singleValue: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      fontSize: "12px",
      color: "#9095A0",
    }),
    input: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "0",
      margin: "0",
      color: "#9095A0",
      fontSize: "10px",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
    }),
    menuList: (provided) => ({
      ...provided,
      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "13px",
      color: "#58606f",
      backgroundColor:
        state.data.value === "addNew"
          ? "#f0f8ff" // Keep the "Add New" background color unchanged on hover
          : "#d6e4ff", // Lighter blue for hover on other options
    }),
  };

  const value =
    typeof props.value === "string"
      ? colourOptions.find((option) => option.value === props.value)
      : props.value;

  const handleChange = (selectedOption) => {
    if (props.onChange) {
      props.onChange(selectedOption);
    }
  };

  return (
    <DropDownContainer setWidth={props.setWidth}>
      <Wrap>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isDisabled={props.check}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={true}
          name="color"
          options={colourOptions}
          styles={customStyles}
          isDropdownOpen={props.isDropdownOpen}
          value={value}
          onChange={handleChange}
          formatCreateLabel={(inputValue) => `Add "${inputValue}"`}
          openMenuOnClick={false}
          components={{ Option: CustomOption }}
        />
      </Wrap>
    </DropDownContainer>
  );
};

export default DropdownInputAccountCodeView;
