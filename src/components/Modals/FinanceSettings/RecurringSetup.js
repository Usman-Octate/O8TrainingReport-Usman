import React, { useState } from "react";
import styled from "styled-components";
import DropdownInput from "../../Inputs/DropdownInput";
import CalenderInput from "../../Inputs/CalenderInput";
import { useSelector } from "react-redux";

// Styled components for the modal
const ModalWrapper = styled.div`
  background-color: #ffffff;
  width: 300px;
  padding: 20px;
  border-radius: 12px;
  position: absolute;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 900;
  background-color: rgba(150, 149, 149, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 14px;
  padding-left: 5px;
  color: #58606f;
  font-weight: bold;
`;
const Line = styled.div`
  background-color: #ecedef;
  height: 1px;
  width: 100%;
  margin: 10px 0;
`;

const Section = styled.div`
  /* margin: 20px 0; */
`;

const Label = styled.div`
  font-size: 12px;
  padding-left: 5px;
  color: #58606f;
  font-weight: 700;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

const DaySelector = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const DayButton = styled.button`
  background-color: ${(props) => (props.selected ? "#1677ff" : "#f1f1f1")};
  color: ${(props) => (props.selected ? "#ffffff" : "#000000")};
  border: none;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.selected ? "#135cb6" : "#e0e0e0")};
  }
`;

const DaysWrapper = styled.div`
  display: flex;
  gap: 22px;
  margin: 15px 0;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
`;

const CheckBox = styled.input`
  margin-right: 8px;
  width: 15px;
  height: 15px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 50px;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.primary ? "#1677ff" : "#f1f1f1")};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? "#135cb6" : "#e0e0e0")};
  }
  margin-top: 15px;
`;
const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const Button2 = styled.div`
  font-size: 14px;
  color: ${(props) => (props.primary ? "#ffffff" : "#232222")};
  border: ${(props) => (props.primary ? "none" : "1px solid #cbcbcb")};
  padding: ${(props) => (props.primary ? "12px 0" : "10px 0px")};
  width: 100%;
  text-align: center;
  background-color: ${(props) => (props.primary ? props.btnColor : "#ffffff")};
  border-radius: 8px;
  cursor: pointer;
`;
const Span = styled.div`
  font-size: 12px;
  font-weight: normal;

  color: #58606f;
  text-align: center;
`;
const RecurringSetup = ({ onClose }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [state, setState] = useState("");
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  const DropdownOption = [
    {
      value: "Daily",
      label: "Daily",
    },
    { value: "Weekly", label: "Weekly" },
    {
      value: "Monthly",
      label: "Monthly",
    },
    {
      value: "Quarterly",
      label: "Quarterly",
    },
    {
      value: "Annually",
      label: "Annually",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Overlay>
      <ModalWrapper>
        <Title>RECURRING SETUP</Title>
        <Line />
        <div style={{ marginTop: "15px" }}>
          <DropdownInput
            Name={"Frequency"}
            Padding={true}
            setWidth={"ModalWidth"}
            Data={DropdownOption}
            onChange={(e) => setState(e)}
            value={state}
          />
        </div>
        <Section>
          <DaySelector>
            <Label>Repeats On</Label>
            <DaysWrapper>
              {["M", "T", "W", "Th", "F", "St", "S"].map((day) => (
                <DayButton
                  key={day}
                  selected={selectedDay === day}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </DayButton>
              ))}
            </DaysWrapper>
          </DaySelector>
        </Section>
        <Section>
          <Label>Ends</Label>
          <OptionWrapper>
            <CheckBox
              type="radio"
              value="occurrences"
              checked={selectedOption === "occurrences"}
              onChange={handleRadioChange}
            />
            <Span>After</Span>
            <Input type="text" value={number} onChange={handleChange} />
            <Span>Occurrences</Span>
          </OptionWrapper>
          <OptionWrapper>
            <CheckBox
              type="radio"
              value="date"
              checked={selectedOption === "date"}
              onChange={handleRadioChange}
            />
            <Span style={{ width: "26px", textAlign: "left" }}>On</Span>
            <CalenderInput
              width={false}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </OptionWrapper>
        </Section>
        <Section>
          <OptionWrapper>
            <Label>Save Recurring Transaction as Drafts</Label>
            <CheckBox type="checkbox" />
          </OptionWrapper>
        </Section>
        <ActionButtons>
          <Button2 btnColor={themeKeys.primary} primary onClick={onClose}>
            SAVE
          </Button2>
          <Button2 onClick={onClose}>CANCEL</Button2>
        </ActionButtons>
      </ModalWrapper>
    </Overlay>
  );
};

export default RecurringSetup;
