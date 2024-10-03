import React, { useRef, useState, useEffect } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { DateInput } from "@mantine/dates";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IoMdCalendar } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const DropDownContainer = styled.div`
  width: ${(props) =>
    props.setWidth === "long"
      ? "240px"
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
  z-index: ${(props) => (props.isDropdownOpen ? 0 : 1)};
  font-size: 12px;
  padding: 0px 4px;
  color: ${(props) => props.color};
  font-weight: 700;
`;

const StyledDateInput = styled(DateInput)`
  // padding:5px;
  // border: 1px solid lightgrey;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 10px;
`;

const CustomDatePicker = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const dateFormat = useSelector((state) => state.dateFormat.format);
  const dateInputRef = useRef(null);

  const [date, setDate] = useState(null);

  const getLabelColor = () => (props.check ? themeKeys.c13 : "#58606f");

  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.focus();
    }
  };

  const handleClearClick = () => {
    setDate(null); // Clear the date state
    if (dateInputRef.current) {
      dateInputRef.current.value = ""; // Clear the input value
    }
    props.onChange(null); // Notify the parent about the cleared date
  };

  useEffect(() => {
    if (props.value) {
      const isValidDate = (date) => date instanceof Date && !isNaN(date);
      const newDate = isValidDate(new Date(props.value)) ? new Date(props.value) : null;
  
      // Only update the date if it has changed
      if (newDate?.getTime() !== date?.getTime()) {
        setDate(newDate);
        props.onChange(newDate); // Notify the parent only when necessary
      }
    }
  }, [props.value]);

  return (
    <>
      <DropDownContainer setWidth={props.setWidth}>
        <Title color={getLabelColor()}>{props.Name}</Title>
        <Wrap>
          <StyledDateInput
            ref={dateInputRef}
            placeholder={dateFormat}
            value={date}
            disabled={props.disable}
            dropdownPosition="right"
            style={{}}
            styles={(theme) => ({
              input: {
               
                // paddingLeft: '34px',
                // padding: '10px 0px 10px 34px'
              },
              rightSection: { display: "none" },
            })}
            valueFormat={dateFormat}
            rightSectionWidth={40}
            clearable
            clearIconPosition="mid"
            onChange={(selectedDate) => {
              setDate(selectedDate); // Update local state
              props.onChange(selectedDate); // Notify the parent component
            }}
          />
          <IconContainer>
            {date ? (
              <div style={{

                marginRight: "2px"
              }}>
              <IoClose
                onClick={handleClearClick}
                size={18}
                color="#58606f"
              />
              </div>
            ) : (
              <IoMdCalendar
                onClick={handleIconClick}
                size={22}
                color="#58606f"
              />
            )}
          </IconContainer>
        </Wrap>
      </DropDownContainer>
    </>
  );
};

export default CustomDatePicker;
