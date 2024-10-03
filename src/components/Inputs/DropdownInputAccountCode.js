import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CreatableSelect from "react-select/creatable";
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
        <span style={{ fontSize: "11px", color: "#888" }}>
          {props.data.Data2}
        </span>
      </div>
    </components.Option>
  );
};

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

const DropdownInputAccountCode = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
  console.log(props.Data, "2343242");

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
      zIndex: 999999,

      boxShadow: "0px 1.7px 8.5px 0px #00000040",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "13px",
      color: "#58606f",
      zIndex: 999999,
      backgroundColor: state.isSelected
        ? "#cce4ff" // Color when the option is selected
        : state.isFocused
        ? "#f1f9ff" // Background on hover (focus state)
        : "#fff", // Default background color
      "&:hover": {
        backgroundColor: "#f1f9ff", // Hover background color
      },
    }),
    menuList: (base) => ({
      ...base,
      zIndex: 999999,
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
      color: "#6a727f",
      cursor: "text",
    }),
  };

  const value =
    typeof props.value === "string"
      ? colourOptions.find((option) => option.value === props.value)
      : props.value;

  const handleChange = (selectedOption) => {
    console.log("Selected option in DropdownInput component:", selectedOption);
    if (props.onChange) {
      props.onChange(selectedOption);
    }
  };

  const handleCreateOption = (inputValue) => {
    console.log("Custom input:", inputValue);
    const customOption = { label: inputValue, value: inputValue };
    handleChange(customOption);

    if (props.onCreate) {
      props.onCreate(inputValue);
    }
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
    setMenuIsOpen(false); // Prevent default behavior of opening the menu
  };

  return (
    <DropDownContainer setWidth={props.setWidth}>
      <Title color={getLabelColor()}>{props.Name}</Title>
      <Wrap>
        <CreatableSelect
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
          onCreateOption={handleCreateOption}
          formatCreateLabel={(inputValue) => `Add "${inputValue}"`}
          menuIsOpen={menuIsOpen} // Control dropdown open state
          onMenuOpen={() => setMenuIsOpen(true)}
          onMenuClose={() => setMenuIsOpen(false)}
          components={{ Option: CustomOption, DropdownIndicator }} // Use the custom dropdown indicator
          openMenuOnClick={false} // Prevent dropdown from opening when input is clicked
        />
      </Wrap>
    </DropDownContainer>
  );
};

export default DropdownInputAccountCode;
