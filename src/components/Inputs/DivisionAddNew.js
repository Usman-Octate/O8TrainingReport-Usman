import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Select, { components } from "react-select";
import { FaChevronDown } from "react-icons/fa";
import DivisionModal from "../Modals/DivisonModal";
import AccountType from "../Modals/FinanceSettings/AccountType";

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
  if (props.data.value === "addNew") {
    return (
      <components.Option {...props}>
        <div
          onClick={(e) => {
            e.stopPropagation(); // Prevent the select menu from closing
            props.selectProps.onAddNew(); // Trigger modal open
          }}
        >
          Add New
        </div>
      </components.Option>
    );
  }

  return (
    <components.Option {...props}>
      <div>{props.data.label}</div>
    </components.Option>
  );
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaChevronDown style={{ width: "14px", fontSize: "13px" }} />
    </components.DropdownIndicator>
  );
};

const DivisionAddNew = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const colourOptions = [
    ...(Array.isArray(props.Data) && typeof props.Data[0] === "string"
      ? props.Data.map((item) => ({ label: item, value: item }))
      : Array.isArray(props.Data)
      ? props.Data
      : []),
    { label: "Add New", value: "addNew", name: "addNew" },
  ];
  console.log(colourOptions, "COLOUR OPTIONS");

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
      color: state.data.value === "addNew" ? "#2E90FA" : "#58606f", // Custom color for Add New button
      backgroundColor: state.isSelected
        ? state.data.value === "addNew"
          ? "#f2f7fe" // Custom background for Add New when selected
          : "#e0f0ff"
        : state.data.value === "addNew"
        ? "#f2f7fe" // Custom background for Add New when not selected
        : "#fff",
      fontWeight: state.data.value === "addNew" ? "bold" : "normal", // Bold text for Add New button
      padding: state.data.value === "addNew" ? "10px 12px" : "6px 12px", // Padding for Add New
      textAlign: state.data.value === "addNew" ? "center" : "left", // Center text for Add New button
      "&:hover": {
        backgroundColor: state.data.value === "addNew" ? "#e0f7ff" : "#f1f9ff", // Hover style for Add New
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
      color: "#6a727f",
    }),
  };

  useEffect(() => {
    if (props.value) {
      setSelectedValue(
        colourOptions.find((option) => option.value === props.value.value) ||
          null
      );
    } else {
      // Handle case when props.value is null (deselecting)
      setSelectedValue(null);
    }
    console.log(props.value, "VALUE.VALUE");
  }, [props.value]);

  // const handleChange2 = (selectedOption) => {
  //   // Log the selected option
  //   console.log("Selected option in DropdownInput component:", selectedOption);

  //   // Check if selectedOption is null (cleared)
  //   if (selectedOption === null) {
  //     console.log("Selection cleared");

  //     // Clear the input field by setting selected value to null
  //     setSelectedValue(null);

  //     // Call parent onChange with null
  //     if (props.onChange) {
  //       props.onChange(null);
  //     }
  //   } else if (selectedOption?.value === "addNew") {
  //     // If the selected option is 'addNew', open the modal and clear the selection
  //     setIsModalOpen(true);
  //     setSelectedValue(null); // Clear the input
  //     console.log(selectedOption, "SELECTED OPTION1");
  //   } else {
  //     // Handle valid selection
  //     setSelectedValue(selectedOption); // Set the selected option
  //     if (props.onChange) {
  //       props.onChange(selectedOption);
  //     }
  //   }
  // };

  const handleChange = (selectedOption) => {
    // Handle null or undefined option when clearing the input
    console.log("Selected option in DropdownInput component:", selectedOption);

    // Check if selectedOption is null (cleared)
    if (selectedOption === null) {
      console.log("Selection cleared");
      setSelectedValue(null);
      // Call parent onChange with null
      if (props.onChange) {
        props.onChange(null);
        // setSelectedValue(selectedOption);
      }
    } else if (selectedOption?.value === "addNew") {
      setIsModalOpen(true);
      setSelectedValue(null);
      console.log(selectedOption, "SELECTED OPTION1");
    } else {
      // Handle valid selection
      if (props.onChange) {
        props.onChange(selectedOption);
        setSelectedValue(selectedOption);
      }
    }
  };

  const handleAddNew = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const OpenSecondModal = () => {
    setIsSecondModalOpen(true); // Open second modal conditionally
  };

  const SecondModalClose = () => {
    setIsSecondModalOpen(false);
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
            value={selectedValue}
            onChange={handleChange}
            components={{ Option: CustomOption, DropdownIndicator }}
            onAddNew={props.AccountType ? OpenSecondModal : handleAddNew}
          />
        </Wrap>
      </DropDownContainer>

      {isModalOpen && props.ShowModal && (
        <DivisionModal
          cancelAction={closeModal}
          SelectedOptionId={props.OptionId}
          DefaultName={props.Name}
          closeModal={closeModal}
          ShowToaster={props.Toaster}
          showError={props.Error}
        />
      )}
      {isSecondModalOpen && <AccountType cancel={SecondModalClose} />}
    </>
  );
};

export default DivisionAddNew;
