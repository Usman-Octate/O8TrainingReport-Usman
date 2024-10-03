// CurrencyInput.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Select, { components } from "react-select";
import {
  FaDollarSign,
  FaEuroSign,
  FaPoundSign,
  FaYenSign,
} from "react-icons/fa";
import { TbCurrencyDirham, TbCurrencyDollarAustralian } from "react-icons/tb";
import { FaRupeeSign, FaIndianRupeeSign } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

const DropdownContainer = styled.div`
  position: relative;
  width: ${(props) => (props.setWidth === "long" ? "224px" : "192px")};
  font-size: 12px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: absolute;
  top: -9px;
  left: 10px;
  z-index: ${(props) => (props.isDropdownOpen ? 0 : 5)};
  font-size: 12px;
  padding: 0px 4px;
  color: ${(props) => props.color};
  font-weight: 700;
`;

const CurrencyOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CurrencyIcon = styled.div`
  margin-right: 8px;
`;

const currencyOptions = [
  {
    label: "USD",
    value: "USD",
    fullForm: "United States Dollar",
    icon: <FaDollarSign />,
    amount: 3.432,
  },
  {
    label: "EUR",
    value: "EUR",
    fullForm: "Euro",
    icon: <FaEuroSign />,
    amount: 2.983,
  },
  {
    label: "GBP",
    value: "GBP",
    fullForm: "British Pound Sterling",
    icon: <FaPoundSign />,
    amount: 4.275,
  },
  {
    label: "JPY",
    value: "JPY",
    fullForm: "Japanese Yen",
    icon: <FaYenSign />,
    amount: 3.675,
  },
  {
    label: "AED",
    value: "AED",
    fullForm: "Arab Emirates Dirham",
    icon: <TbCurrencyDirham />,
    amount: 4.275,
  },
  {
    label: "PKR",
    value: "PKR",
    fullForm: "Pakistani Rupees",
    icon: <FaRupeeSign />,
    amount: 4.275,
  },
  {
    label: "INR",
    value: "INR",
    fullForm: "Indian Rupees",
    icon: <FaIndianRupeeSign />,
    amount: 4.275,
  },
  {
    label: "AUD",
    value: "AUD",
    fullForm: "Australian Dollar",
    icon: <TbCurrencyDollarAustralian />,
    amount: 4.275,
  },
];

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

const CurrencyInput = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isClearable, setIsClearable] = useState(false);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const handleChange = (option) => {
    setSelectedOption(option);
    props.onChange(option);
  };

  const getLabelColor = () => (props.check ? themeKeys.c13 : "#58606f");

  const customStyles = {
    control: (provided) => ({
      ...provided,
      zIndex: 1,
      border: "1px solid #464f604d",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "13px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? "#464f604d" : "#58606f",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? "#464f604d" : "#58606f",
      fontSize: "12px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: selectedOption ? "none" : "flex",
    }),
    indicatorSeparator: (provided) => ({
      display: "none",
    }),
    menuList: (provided) => ({
      ...provided,
      "::-webkit-scrollbar": {
        display: "none", // Hide the scrollbar for WebKit browsers
      },
      msOverflowStyle: "none", // Hide the scrollbar for IE and Edge
      scrollbarWidth: "none", // Hide the scrollbar for Firefox
    }),
  };

  const formatOptionLabel = ({ label, fullForm, icon, amount }) => (
    <CurrencyOption>
      <div>
        {label}
        <br />
        <span style={{ fontSize: "10px" }}>{fullForm}</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CurrencyIcon style={{ marginTop: "3px" }}>{icon}</CurrencyIcon>
        <span>{amount}</span>
      </div>
    </CurrencyOption>
  );

  return (
    <DropdownContainer setWidth={props.setWidth}>
      <Title color={getLabelColor()}>{props.Name}</Title>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={props.check}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="currency"
        options={currencyOptions}
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
        onChange={handleChange}
        components={DropdownIndicator}
      />
    </DropdownContainer>
  );
};

export default CurrencyInput;
