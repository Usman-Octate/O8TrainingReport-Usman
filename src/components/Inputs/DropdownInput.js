import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Select from "react-select";
import { FaChevronDown } from "react-icons/fa";
import { components } from "react-select";

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
      : props.setWidth === "ModalWidth"
      ? "100%"
      : props.setWidth === "DrawerWidth"
      ? "300px"
      : props.setWidth === "short"
      ? "164px"
      : "191px"};

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
  color: ${(props) => props.color};
  font-weight: 700;
`;
const Wrap = styled.div``;
const DropdownIndicator = (props) => {
  const { innerProps, selectProps } = props;
  const { onClick } = selectProps;

  return (
    <components.DropdownIndicator {...props} innerProps={innerProps}>
      <FaChevronDown
        onClick={onClick}
        style={{ width: "14px", fontSize: "13px" }}
      />
    </components.DropdownIndicator>
  );
};

const DropdownInput = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const colourOptions =
  Array.isArray(props.Data) && typeof props.Data[0] === "string"
    ? props.Data.map((item) => ({ label: item, value: item }))
    : Array.isArray(props.Data)
    ? props.Data
    : [];

  const getLabelColor = () => (props.check ? themeKeys.c13 : "#58606f");

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled ? "transparent" : "#fff",
      border: state.isFocused ? "1px solid #157BEA" : "1px solid #464f604d",
      boxShadow: state.isFocused ? "0 0 0 1px none" : "none",
      "&:hover": {
        border: state.isFocused ? "1px solid #157BEA" : "1px solid #464f604d",
      },
      minHeight: "44px", // Increase the minHeight to increase input height
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
      border: "none", // Remove the border of the menu container
      boxShadow: "0px 1.702708125114441px 8.513540267944336px 0px #00000040",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "13px",
      color: "#58606f",
      backgroundColor: state.isSelected
        ? "#e0f0ff"
        : // Background on hover (focus state)
          "#fff", // Default background color
      "&:hover": {
        backgroundColor: "#f1f9ff", // Hover background color
      },
    }),
    menuList: (base) => ({
      ...base,
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
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? "#464f604d" : "#abafb7",
      fontSize: "13px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? "#464f604d" : "#58606f",
      fontSize: "12px",
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      width: "33px",
      height: "33px",
      marginBottom: "3px",
      color: "#58606f",
    }),
    input: (provided, state) => ({
      ...provided,
      color: "#6a727f", // Change color of the input text
    }),
  };
  const value =
  typeof props.value === "string"
    ? colourOptions?.find((option) => option?.value === props.value) || null
    : props.value || null;
  useEffect(() => {
    if (props.value && props.onChange) {
      props.onChange(value);
    }
  }, [props.value]);
  useEffect(() => {
    console.log("Dropdown Data:", props.Data);
    console.log("Dropdown Colour Options:", colourOptions);
  }, [props.Data, colourOptions]);

  const handleChange = (selectedOption) => {
    // Handle null or undefined option when clearing the input
    console.log("Selected option in DropdownInput component:", selectedOption);

    // Check if selectedOption is null (cleared)
    if (selectedOption === null) {
      console.log("Selection cleared");
      props.onChange(null);
      // Call parent onChange with null
      if (props.onChange) {
        props.onChange(null);
        console.log("NULL");
      }
    } else {
      // Handle valid selection
      if (props.onChange) {
        props.onChange(selectedOption || null);
        console.log("ELSE");
      }
    }
  };
  // const handleVal = (selected) => {
  //   console.log("Selected option in DropdownInput component:", selected);
  //   if (props.value) {
  //     props.value(selectedOption);
  //   }

  return (
    <>
      <DropDownContainer setWidth={props.setWidth}>
        <Title color={getLabelColor()}>{props.Name}</Title>
        <Wrap>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isDisabled={props.check}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={colourOptions}
            styles={customStyles}
            isDropdownOpen={props.isDropdownOpen}
            value={value || null}
            onChange={handleChange}
            components={{ DropdownIndicator }}
            // Handle changes with the onChange prop
          />
        </Wrap>
      </DropDownContainer>
    </>
  );
};

export default DropdownInput;
