import React, { useState } from "react";
import styled from "styled-components";
import DropdownInput from "../../Inputs/DropdownInput";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 200px;
  border-radius: 12px;
  position: absolute;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
`;

const Wrap = styled.div`
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

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.div`
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

const Box = styled.input`
  border: 1px solid #464f604d;
  width: 40px;
  height: 38px;
  outline: none;
  text-align: center;
  border-radius: 5px;
  /* background-color: ${(props) =>
    props.disabled ? "#ffffff" : "#ffffff"}; */
`;
const Line = styled.div`
  background-color: #ecedef;
  height: 1px;
  width: 100%;
`;

const JournalReversal = ({ save, cancel }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const DropdownOption = [
    {
      value: "At the end of the current month",
      label: "At the end of the current month",
    },
    { value: "Beginning of next month", label: "Beginning of next month" },
    {
      value: "30 Days after posting date",
      label: "30 Days after posting date",
    },
    {
      value: "Specific number of days",
      label: "Specific number of days",
    },
  ];

  const [state, setState] = useState("");

  const [days, setDays] = useState("");

  const HandleChange = (selectedOption) => {
    if (selectedOption === null) {
      setState("");
      setDays("");
    } else {
      setState(selectedOption.value);

      if (selectedOption.value === "30 Days after posting date") {
        setDays("30");
      } else {
        setDays("");
      }
    }
  };

  return (
    <Wrap>
      <Wrapper>
        <Title>JOURNAL ENTRY REVERSAL</Title>
        <Line />
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <DropdownInput
            Name={"Auto Reversal"}
            Padding={true}
            setWidth={"ModalWidth"}
            Data={DropdownOption}
            onChange={HandleChange}
            value={state}
          />
          <Box
            type="text"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            disabled={state !== "Specific number of days"}
            readOnly={state === "30 Days after posting date"}
          />
        </div>
        <ActionButtons>
          <Button btnColor={themeKeys.primary} primary onClick={save}>
            SAVE
          </Button>
          <Button onClick={cancel}>CANCEL</Button>
        </ActionButtons>
      </Wrapper>
    </Wrap>
  );
};

export default JournalReversal;
