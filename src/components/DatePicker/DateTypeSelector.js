import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDateType } from "../../redux/appReducer/DateType";
import styled from "styled-components";
import Select from "react-select";
import { getDefaultLocalization } from "../../Api/Apis";

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

// Move options definition outside of the component
const options = [
  { value: "Short", label: "Short Date" },
  { value: "Mid", label: "Mid Date" },
  { value: "Long", label: "Long Date" },
];

const DateTypeSelector = () => {
  const dispatch = useDispatch();
  const dateType = useSelector((state) => state.dateType.type);
  const [selectedDateType, setSelectedDateType] = useState(null); // Local state for selected date type

  const handleDateTypeChange = (selectedOption) => {
    dispatch(setDateType(selectedOption.value));
    setSelectedDateType(selectedOption); // Update local state when selection changes
  };

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
    placeholder: (provided) => ({
      ...provided,
      color: "#abafb7",
      fontSize: "13px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#58606f",
      fontSize: "12px",
    }),
  };

  // Fetch default localization data and set the date type
  useEffect(() => {
    const fetchLocalizationData = async () => {
      const result = await getDefaultLocalization();
      if (result.status) {
        const dateTypeFromApi = result.data.dateType; // Extract the date type from the API response
        dispatch(setDateType(dateTypeFromApi)); // Dispatch to set dateType in Redux
        setSelectedDateType(options.find(option => option.value === dateTypeFromApi)); // Update local state
      }
    };

    fetchLocalizationData();
  }, [dispatch]); // Removed options from dependencies

  return (
    <DropDownContainer>
      <Title>Date Type</Title>
      <Wrap>
        <Select
          options={options}
          styles={customStyles}
          onChange={handleDateTypeChange}
          placeholder="Select Date Type"
          value={selectedDateType || options.find(option => option.value === dateType)} // Use either local or Redux state
        />
      </Wrap>
    </DropDownContainer>
  );
};

export default DateTypeSelector;
