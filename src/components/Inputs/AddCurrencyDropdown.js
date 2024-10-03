import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Select, { components } from "react-select";

const DropDownContainer = styled.div`
  display: inline-flex;
  position: relative;
  font-size: 12px;
  flex-grow: 1;
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

const CustomMultiValue = (props) => {
  return (
    <components.MultiValue {...props}>
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        {props.children}
      </div>
    </components.MultiValue>
  );
};
const CustomOption = (props) => {
  const { data, innerRef, innerProps } = props;
  const [isHovered, setIsHovered] = useState(false);
  const isAddNewOption = data.value === "addNew";

  return (
    <components.Option
      {...props}
      innerRef={innerRef}
      innerProps={{
        ...innerProps,
        style: {
          ...innerProps.style,
          position: isAddNewOption ? "sticky" : "relative",
          bottom: isAddNewOption ? 0 : "auto",
          backgroundColor: isHovered
            ? "#e0f0ff"
            : isAddNewOption
            ? "#f0f8ff"
            : "#fff",
          zIndex: isAddNewOption ? 999 : "auto",
          marginBottom: 0, // Remove any bottom margin
        },
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      }}
    >
      <div
        style={{
          fontWeight: isAddNewOption ? "bold" : "normal",
          color: isAddNewOption ? "#157BEA" : "#58606f",
        }}
      >
        {isAddNewOption ? (
          data.label
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold" }}>{data.code}</span>
            <span style={{ fontSize: "11px", color: "#888" }}>{data.name}</span>
          </div>
        )}
      </div>
    </components.Option>
  );
};

const CustomSingleValue = (props) => {
  return (
    <components.SingleValue {...props}>
      {props.data.code}
    </components.SingleValue>
  );
};
const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}></components.DropdownIndicator>
  );
};

// Custom ClearIndicator to remove the cross icon in the dropdown
const CustomClearIndicator = () => null;

const AddCurrencyDropdown = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [addNewClicked, setAddNewClicked] = useState(false);

  const colourOptions = [
    ...(Array.isArray(props.Data) && typeof props.Data[0] === "object"
      ? props.Data.map((item) => ({
          label: item.code, // Set label based on how you want to display it
          value: item.code,
          code: item.code,
          name: item.name,
        }))
      : props.Data),
    { label: "Add New", value: "addNew", name: "" },
  ];

  const getLabelColor = () => (props.check ? themeKeys.c13 : "#58606f");

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      backgroundColor: state.isDisabled ? "transparent" : "#fff",
      border: state.isFocused ? "1px solid #157BEA" : "1px solid #464f604d",
      boxShadow: state.isFocused ? "0 0 0 1px none" : "none",
      "&:hover": {
        border: state.isFocused ? "1px solid #157BEA" : "1px solid #464f604d",
      },
      minHeight: "44px",
      minWidth: "191px",
      flexGrow: 1,
      display: "flex",
    }),
    menu: (provided) => ({
      ...provided,
      border: "none", // Remove the border of the menu container
      boxShadow: "0px 1.702708125114441px 8.513540267944336px 0px #00000040", // Optionally remove the box-shadow if any
    }),
    menuList: (base) => ({
      ...base,
      position: "relative",
      zIndex: 23999,
      paddingBottom: 0,
      "::-webkit-scrollbar": {
        width: "4px",
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
    option: (provided, state) => {
      const isAddNewOption = state.data.value === "addNew";
      return {
        ...provided,
        fontSize: "13px",
        color: isAddNewOption ? "#157BEA" : "#58606f",
        backgroundColor: isAddNewOption ? "#f0f8ff" : "#fff",
        fontWeight: isAddNewOption ? "bold" : "normal",
        backgroundColor: state.isSelected ? "#e0f0ff" : "#fff",
        "&:hover": {
          backgroundColor: "#e0f0ff",
        },
      };
    },
    multiValue: (provided, state) => ({
      ...provided,
      display: "inline-flex",
      whiteSpace: "nowrap",
      marginRight: "5px",
      borderRadius: 100,
      background: "#DFEDFD",
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: "gray",
      fontSize: "11px",
      borderRadius: "10px",
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "gray",
      "&:hover": {
        backgroundColor: "#e0f0ff",
        color: "#157BEA",
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
    }),
  };

  const value = Array.isArray(props.value)
    ? props.value.map((item) => ({
        label: item.code, // or item.name if you prefer
        value: item.code,
        code: item.code,
        name: item.name,
      }))
    : [];
  const handleChange = (selectedOption) => {
    console.log("Selected option in DropdownInput component:", selectedOption);

    if (
      selectedOption &&
      selectedOption.some((option) => option.value === "addNew")
    ) {
      props.handleAddNewBtn();
    } else if (props.onChange) {
      props.onChange(selectedOption);
    }
  };

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
            value={value}
            onChange={handleChange}
            isMulti
            components={{
              Option: CustomOption,
              SingleValue: CustomSingleValue,
              MultiValue: CustomMultiValue,
              DropdownIndicator: CustomDropdownIndicator,
              ClearIndicator: CustomClearIndicator,
            }} // Custom components
          />
        </Wrap>
      </DropDownContainer>
    </>
  );
};

export default AddCurrencyDropdown;
