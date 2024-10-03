import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Select from "react-select";

const DropDownContainer = styled.div`
  width: ${(props) =>
    props.setWidth === "long"
      ? "220px"
      : props.setWidth === "extralong"
      ? "264px"
      : props.setWidth === "short"
      ? "164px"
      : props.setWidth === "currency"
      ? "224px"
      : "192px"};
  position: relative;
  font-size: 12px;
  /* padding-top: 4px; */
  /* padding-bottom: 4px; */
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
  /* color: rgba(88, 96, 111, 0.8); */
`;

const Wrap = styled.div``;

const OptionLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomerCode = styled.div`
  font-size: 13px;
  color: #58606f;
  color: rgba(88, 96, 111, 1);
  font-weight: 700;
  padding-top: 4px;
  margin-top: 2px;
  margin-left: 1px;
`;

const CustomerName = styled.div`
  font-size: 11px;
  font-weight: 400;
  color: #58606f;
  color: rgba(88, 96, 111, 0.5);
  padding-bottom: 4px;
  margin-bottom: 1px;
  margin-left: 1px;
  margin-top: 0.5px;
`;

const customStyles = {
  control: (provided) => ({
    ...provided,
    zIndex: 1,
    border: "1px solid #464f604d",
    // width: '200px'
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
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
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "white" : "white", // Apply blue background only to selected option
    "&:hover": {
      backgroundColor: "#f0f0f0", // Change background color on hover if needed
    },
    fontSize: "13px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? "#c4c4c4" : "#c4c4c4",
    fontSize: "14px",
    padding: "11px 0px",
    marginLeft: "5px",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? "#464f604d" : "#58606f",
    fontSize: "13px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    width: "33px",
    height: "33px",
    marginBottom: "3px",
    color: "#58606f",
  }),
  input: (provided) => ({
    ...provided,
    padding: "8px",
    color: "#6a727f", // Adjust padding here
  }),
};

const CustomerDropDown = ({
  options,
  setWidth,
  Name,
  check,
  isDropdownOpen,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const [selectedOption, setSelectedOption] = useState(null); // State to track selected option

  const getLabelColor = () => (check ? "#58606f" : "#58606f");

  const formatOptionLabel = ({ name, code }) => (
    <OptionLabel>
      <CustomerCode>{code}</CustomerCode>
      <CustomerName>{name}</CustomerName>
    </OptionLabel>
  );

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption); // Update the selected option state
    console.log("Selected:", selectedOption);
  };

  // Custom filter option function for predictive search based on customer names
  const filterOptions = (candidate, input) => {
    if (!input) return true;
    const normalizedInput = input.toLowerCase();
    const normalizedLabel = candidate.data.name.toLowerCase();
    return normalizedLabel.includes(normalizedInput);
  };

  return (
    <>
      <DropDownContainer setWidth={setWidth}>
        <Title color={getLabelColor()}>{Name}</Title>
        <Wrap>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isClearable
            isSearchable
            name="customer"
            options={options}
            styles={customStyles}
            formatOptionLabel={formatOptionLabel}
            onChange={handleChange}
            filterOption={filterOptions}
          />
        </Wrap>
      </DropDownContainer>
    </>
  );
};

export default CustomerDropDown;
