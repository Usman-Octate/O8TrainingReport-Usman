import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Select from "react-select";
import Tooltip from "@mui/material/Tooltip"; // Import Tooltip from MUI

const DropDownContainer = styled.div`
  width: ${(props) =>
    props.setWidth === "long"
      ? "220px"
      : props.setWidth === "extralong"
      ? "264px"
      : props.setWidth === "short"
      ? "164px"
      : "192px"};
  position: relative;
  font-size: 12px;
  color: #58606f;
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

const DetailContainer = styled.div`
  margin-top: -11px;
  padding: 10px;
  background-color: White;
  border-radius: 8px;
  font-size: 14px;
  max-width: 192px;
  align-self: flex-start;
`;

const DetailDropDown = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

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
      fontSize: "14px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? "#c4c4c4" : "#c4c4c4",
      fontSize: "14px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? "#58606f" : "#58606f",
      fontSize: "14px",
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      width: "33px",
      height: "33px",
      marginBottom: "3px",
    }),
    input: (provided) => ({
      ...provided,
      padding: "10px",
      color: "#6a727f", // Adjust padding here
    }),
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
            options={props.options.map((option) => ({
              label: option.name,
              value: option.name,
            }))}
            styles={customStyles}
            onChange={setSelectedOption}
            isDropdownOpen={props.isDropdownOpen}
          />
        </Wrap>
      </DropDownContainer>
      {selectedOption && (
        <Tooltip
          title={
            <>
              <div style={{ marginBottom: "2px", fontSize: "14px" }}>
                {selectedOption.label}
              </div>
              <div style={{ marginBottom: "2px", fontSize: "14px" }}>
                {
                  props.options.find(
                    (option) => option.name === selectedOption.value
                  ).area
                }
              </div>
              <div style={{ marginBottom: "2px", fontSize: "14px" }}>
                {
                  props.options.find(
                    (option) => option.name === selectedOption.value
                  ).street
                }
              </div>
              <div style={{ marginBottom: "2px", fontSize: "14px" }}>
                {
                  props.options.find(
                    (option) => option.name === selectedOption.value
                  ).city
                }
              </div>
              <div style={{ marginBottom: "2px", fontSize: "14px" }}>
                {
                  props.options.find(
                    (option) => option.name === selectedOption.value
                  ).country
                }
              </div>
            </>
          }
          arrow
        >
          <DetailContainer>
            <div
              style={{
                marginBottom: "6px",
                fontSize: "14px",
                color: "#58606f",
              }}
            >
              {selectedOption.label}
            </div>
            <div
              style={{
                marginBottom: "6px",
                fontSize: "14px",
                color: "#58606f",
              }}
            >
              {
                props.options.find(
                  (option) => option.name === selectedOption.value
                ).area
              }
            </div>
            <div
              style={{
                marginBottom: "6px",
                fontSize: "14px",
                color: "#58606f",
              }}
            >
              {
                props.options.find(
                  (option) => option.name === selectedOption.value
                ).street
              }
            </div>
            <div
              style={{
                marginBottom: "6px",
                fontSize: "14px",
                color: "#58606f",
              }}
            >
              {
                props.options.find(
                  (option) => option.name === selectedOption.value
                ).city
              }
            </div>
            <div
              style={{
                marginBottom: "6px",
                fontSize: "14px",
                color: "#58606f",
              }}
            >
              {
                props.options.find(
                  (option) => option.name === selectedOption.value
                ).country
              }
            </div>
          </DetailContainer>
        </Tooltip>
      )}
    </>
  );
};

export default DetailDropDown;
