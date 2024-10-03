import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Select, { components } from "react-select";
import { FaChevronDown } from "react-icons/fa";

const DropDownContainer = styled.div`
  width: ${(props) =>
    props.setWidth === "long"
      ? "224px"
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

const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <div>{props.data.label}</div>
    </components.Option>
  );
};
const DropdownIndicator = (props) => {
  const { innerProps } = props;

  return (
    <components.DropdownIndicator {...props} innerProps={innerProps}>
      <FaChevronDown style={{ width: "14px", fontSize: "13px" }} />
    </components.DropdownIndicator>
  );
};

const DivisionSelect = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const colourOptions = Array.isArray(props.Data) ? props.Data : [];

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
      minHeight: "44px",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
      border: "none",
      boxShadow: "0px 1.702708125114441px 8.513540267944336px 0px #00000040",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "13px",
      color: "#58606f",
      backgroundColor: state.isSelected ? "#e0f0ff" : "#fff",
      "&:hover": {
        backgroundColor: "#d6e4ff",
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
  };

  const value = props.value ? colourOptions.find((option) => option.value === props.value) : null;

  const handleChange = (selectedOption) => {
    console.log("Selected option:", selectedOption);
    if (props.onChange) {
      props.onChange(selectedOption);
    }
  };
  return (
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
          value={value}
          onChange={handleChange}
          components={{ Option: CustomOption, DropdownIndicator }}
        />
      </Wrap>
    </DropDownContainer>
  );
};

export default DivisionSelect;
