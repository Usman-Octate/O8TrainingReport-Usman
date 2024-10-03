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
`;

const Line = styled.div`
  background-color: #ecedef;
  height: 1px;
  width: 100%;
  margin-bottom: 10px;
`;

const DefaultMethod = ({ save, cancel }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const DropdownOption = [
    {
      value: "Accrual Basis",
      label: "Accrual Basis",
    },
    { value: "Cash Accounting", label: "Cash Accounting" },
  ];

  const [state, setState] = useState("");

  return (
    <Wrap>
      <Wrapper>
        <Title>DEFAULT METHOD</Title>
        <Line />
        <DropdownInput
          Name={"Accounting Method"}
          Padding={true}
          setWidth={"ModalWidth"}
          Data={DropdownOption}
          onChange={(e) => setState(e)}
          value={state}
        />
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

export default DefaultMethod;
