import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDateFormat } from "../../redux/appReducer/DateFormat";
import styled from "styled-components";
import Select from "react-select";

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

const CustomDatePicker = (props) => {
  const dispatch = useDispatch();
  const dateFormat = useSelector((state) => state.dateFormat.format);
  const dateType = useSelector((state) => state.dateType.type);
  const dateSeparator = useSelector((state) => state.dateSeparator.separator);

  const handleDateFormatChange = (selectedOption) => {
    dispatch(setDateFormat(selectedOption.value));
  };

  const formatOptions = {
    Short: [
      {
        value: `MM${dateSeparator}DD${dateSeparator}YY`,
        label: (
          <>
            <span>MM DD YY</span>
            <br />{" "}
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 08 25 24)
            </span>
          </>
        ),
      },
      {
        value: `DD${dateSeparator}MM${dateSeparator}YYYY`,
        label: (
          <>
            <span>DD MM YYYY</span>
            <br />{" "}
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 25 08 2024)
            </span>
          </>
        ),
      },
      {
        value: `DD${dateSeparator}MM${dateSeparator}YY`,
        label: (
          <>
            <span>DD MM YY</span>
            <br />{" "}
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 25 08 24)
            </span>
          </>
        ),
      },
      {
        value: `MM${dateSeparator}DD${dateSeparator}YYYY`,
        label: (
          <>
            <span>MM DD YYYY</span> <br />
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 08 25 2024)
            </span>
          </>
        ),
      },
      {
        value: `YYYY${dateSeparator}MM${dateSeparator}DD`,
        label: (
          <>
            <span>YYYY MM DD</span> <br />
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 2024 08 25)
            </span>
          </>
        ),
      },
      {
        value: `YY${dateSeparator}MM${dateSeparator}DD`,
        label: (
          <>
            <span>YY MM DD</span> <br />
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 24 08 25)
            </span>
          </>
        ),
      },
    ],
    Mid: [
      {
        value: `DD${dateSeparator}MMM${dateSeparator}YYYY`,
        label: (
          <>
            <span>DD MMM YYYY</span>
            <br />{" "}
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 25 Aug 2024)
            </span>
          </>
        ),
      },
      {
        value: `DD${dateSeparator}MMM${dateSeparator}YY`,
        label: (
          <>
            <span>DD MMM YY</span> <br />
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 25 Aug 24)
            </span>
          </>
        ),
      },
      {
        value: `D${dateSeparator}MMM${dateSeparator}YY`,
        label: (
          <>
            <span>D MMM YY</span> <br />
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 25 Aug 24)
            </span>
          </>
        ),
      },
      {
        value: `MMM${dateSeparator}DD${dateSeparator}YYYY`,
        label: (
          <>
            <span>MMM DD YYYY</span> <br />
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. Aug 25 2024)
            </span>
          </>
        ),
      },
      {
        value: `MMM${dateSeparator}D${dateSeparator}YYYY`,
        label: (
          <>
            <span>MMM D YYYY</span>
            <br />{" "}
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. Aug 25 2024)
            </span>
          </>
        ),
      },
      {
        value: `YYYY${dateSeparator}MMM${dateSeparator}DD`,
        label: (
          <>
            <span>YYYY MMM DD</span>
            <br />{" "}
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 2024 Aug 25)
            </span>
          </>
        ),
      },
      {
        value: `YY${dateSeparator}MMM${dateSeparator}DD`,
        label: (
          <>
            <span>YY MMM DD</span> <br />
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 24 Aug 25)
            </span>
          </>
        ),
      },
    ],
    Long: [
      {
        value: `DD${dateSeparator}MMMM${dateSeparator}YYYY`,
        label: (
          <>
            <span>DD MMMM YYYY</span>
            <br />{" "}
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 25 August 2024)
            </span>
          </>
        ),
      },
      {
        value: `D${dateSeparator}MMMM${dateSeparator}YY`,
        label: (
          <>
            <span>D MMMM YY</span>
            <br />{" "}
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 25 August 24)
            </span>
          </>
        ),
      },
      {
        value: `MMMM${dateSeparator}DD${dateSeparator}YYYY`,
        label: (
          <>
            <span>MMMM DD YYYY</span>
            <br />{" "}
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. August 25 2024)
            </span>
          </>
        ),
      },
      {
        value: `MMMM${dateSeparator}DD${dateSeparator}YYYY`,
        label: (
          <>
            <span>MMMM D YYYY</span> <br />
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. August 25 2024)
            </span>
          </>
        ),
      },
      {
        value: `YYYY${dateSeparator}MMMM${dateSeparator}DD`,
        label: (
          <>
            <span>YYYY MMMM DD</span> <br />
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 2024 August 25)
            </span>
          </>
        ),
      },
      {
        value: `YYYY${dateSeparator}MMMM${dateSeparator}D`,
        label: (
          <>
            <span>YYYY MMMM D</span>
            <br />{" "}
            <span style={{ opacity: 0.6, fontSize: "10px" }}>
              (e.g. 2024 August 25)
            </span>
          </>
        ),
      },
    ],
  };

  const options = formatOptions[dateType] || [];

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
    placeholder: (provided, state) => ({
      ...provided,
      color: "#abafb7",
      fontSize: "13px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#58606f",
      fontSize: "12px",
    }),
  };

  return (
    <DropDownContainer setWidth="short">
      <Title>Date Format</Title>
      <Wrap>
        <Select
          options={options}
          styles={customStyles}
          onChange={handleDateFormatChange}
          placeholder={dateFormat}
          defaultValue={options.find((option) => option.value === dateFormat)}
        />
      </Wrap>
    </DropDownContainer>
  );
};

export default CustomDatePicker;
