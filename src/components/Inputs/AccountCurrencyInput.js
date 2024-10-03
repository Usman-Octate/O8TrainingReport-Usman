import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  FaDollarSign,
  FaEuroSign,
  FaPoundSign,
  FaYenSign,
} from "react-icons/fa";
import { TbCurrencyDirham, TbCurrencyDollarAustralian } from "react-icons/tb";
import { FaRupeeSign, FaIndianRupeeSign } from "react-icons/fa6";
import { BsChevronDown } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip"; // Import Tooltip from MUI

const DropdownContainer = styled.div`
  position: relative;
  width: ${(props) => (props.setWidth === "long" ? "224px" : "192px")};
  font-size: 12px;
  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px; /* Rounded corners */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px; /* Rounded corners */
  }
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

const Dropdown = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 25px;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 10;
  margin-top: 23px; /* Add margin-top to separate the dropdown container */
  max-height: 200px; /* Add max height to control dropdown height */
  overflow-y: auto; /* Add scroll for the dropdown */
  /* Custom scrollbar styles for the dropdown */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px; /* Rounded corners */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px; /* Rounded corners */
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 6px 4px 5px 6px;
  font-size: 14px;
  color: #58606f;

  &::placeholder {
    color: #c4c4c4;
  }
`;

const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#2684ff" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  &:hover {
    background-color: ${(props) => (props.isSelected ? "#0056b3" : "#e0f7ff")};
  }
`;

const CurrencyIcon = styled.div`
  margin-right: -5px;
  align-self: center;
  color: #58606f;
`;

const SelectedCurrencyOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 7px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.selected ? "lightgray" : "lightgray")}; /* Base border */
  outline: ${(props) =>
    props.focused ? "1.9px solid #2e90fa" : "none"}; /* Outline when focused */
  transition: outline 0.3s ease; /* Add transition effect for smooth border change */

  &:hover {
    border-color: darkgray; /* Change border color on hover */
  }
`;

const CurrencyOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LabelInput = styled.input`
  width: 40px;
  margin-right: 8px;
  border: none;
  outline: none;
  font-size: 12px;
  color: rgba(88, 96, 111, 1);
  font-weight: 700;
  margin-bottom: 2px;
  /* align-self: center; */

  /* Hides the spinner controls */
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const AmountInput = styled.input`
  width: 40px;
  margin-left: 8px;
  border: none;
  outline: none;
  align-self: center;

  /* Hides the spinner controls */
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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

const AccountCurrencyInput = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [editableAmount, setEditableAmount] = useState("");
  const [editableLabel, setEditableLabel] = useState("");
  const [focused, setFocused] = useState(false);
  const [filter, setFilter] = useState(""); // State to handle input filter
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const dropdownRef = useRef(null);
  const amountInputRef = useRef(null);
  const labelInputRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setEditableAmount(option.amount);
    setEditableLabel(option.label);
    setIsDropdownOpen(false);
    setFilter(""); // Clear filter on selection
    props.onChange(option);
    setTimeout(() => {
      if (amountInputRef.current) {
        amountInputRef.current.focus();
      }
    }, 0);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setEditableAmount(value);
    setSelectedOption((prevOption) => ({
      ...prevOption,
      amount: value,
    }));
    props.onChange({
      ...selectedOption,
      amount: value,
    });
  };

  const handleLabelChange = (event) => {
    const value = event.target.value;
    setEditableLabel(value);
    setFilter(value);
    setIsDropdownOpen(true); // Show dropdown when typing
    setSelectedOption((prevOption) => ({
      ...prevOption,
      label: value,
    }));
    props.onChange({
      ...selectedOption,
      label: value,
    });
  };

  const getLabelColor = () => (props.check ? themeKeys.c13 : "#58606f");

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      setFocused(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleContainerClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setFocused(true);
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
    setFocused(true);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setIsDropdownOpen(true); // Show dropdown when typing
  };

  const filteredOptions = currencyOptions.filter((option) =>
    option.label.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <DropdownContainer setWidth={props.setWidth}>
      <Title color={getLabelColor()}>{props.Name}</Title>
      <div ref={dropdownRef}>
        <div onClick={handleContainerClick}>
          {selectedOption ? (
            <SelectedCurrencyOption selected focused={focused}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "3px",
                  justifyContent: "left",
                  alignItems: "flex-start",
                }}
              >
                <LabelInput
                  type="text"
                  value={editableLabel}
                  onChange={handleLabelChange}
                  onClick={handleInputClick}
                  ref={labelInputRef}
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginBottom: "2px",
                    color: "#58606f",
                    fontSize: "13px",
                  }}
                />
                <span
                  style={{
                    fontSize: "11px",
                    marginTop: "-4px",
                    marginLeft: "2px",
                    color: "rgba(88, 96, 111, 0.5)",
                  }}
                >
                  {selectedOption.fullForm}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaChevronDown
                  size={15}
                  color="#464f604d"
                  style={{ marginLeft: "auto", marginRight: "8px" }}
                />
                <Tooltip title={selectedOption.fullForm} arrow>
                  {/* <CurrencyIcon
                    color="#58606f"
                    style={{
                      marginTop: "2px",
                      alignSelf: "center",
                      color: "#58606f !important",
                    }}
                  >
                    {selectedOption.icon}
                  </CurrencyIcon> */}
                </Tooltip>
                {/* <AmountInput
                  type="number"
                  value={editableAmount}
                  onChange={handleAmountChange}
                  onClick={handleInputClick}
                  ref={amountInputRef}
                  style={{
                    fontSize: "13.5px",
                    color: "#6a727f",
                  }}
                /> */}
              </div>
            </SelectedCurrencyOption>
          ) : (
            <SelectedCurrencyOption focused={focused}>
              <StyledInput
                type="text"
                placeholder="Select..."
                value={filter}
                onChange={handleFilterChange}
              />
              <FaChevronDown
                size={15}
                color="#464f604d"
                style={{ marginLeft: "auto", marginRight: "8px" }}
              />
            </SelectedCurrencyOption>
          )}
        </div>
        <Dropdown isOpen={isDropdownOpen}>
          {filteredOptions.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleOptionClick(option)}
              isSelected={
                selectedOption && selectedOption.value === option.value
              }
            >
              <CurrencyOption>
                <div>
                  {option.label}
                  <br />
                  <span style={{ fontSize: "10px" }}>{option.fullForm}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <Tooltip title={option.fullForm} arrow>
                    <CurrencyIcon
                      style={{ marginTop: "3px", marginRight: "3px" }}
                    >
                      {option.icon}
                    </CurrencyIcon>
                  </Tooltip>
                  <span>{option.amount}</span> */}
                </div>
              </CurrencyOption>
            </DropdownItem>
          ))}
        </Dropdown>
      </div>
    </DropdownContainer>
  );
};

export default AccountCurrencyInput;
