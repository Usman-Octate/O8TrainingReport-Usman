import React, { useState } from "react";
import styled from "styled-components";
import BlackDropdown from "../../assets2/ChartOfAccountNew/DarkDropDown.svg";
import CustomerDropDown from "../Inputs/CustomerDropDown";
import AccountCurrencyInput from "../Inputs/AccountCurrencyInput";
import ChartAccountInput from "../Inputs/ChartAccountInput";
import CalanderInput from "../Inputs/CalenderInput";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255);
  width: 280px;
  height: 330px;
  border-radius: 8px;
  position: absolute;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding-top: 25px;
`;
const Wrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 900;
  background-color: rgba(150, 149, 149, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 1px 19px 20px black;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  margin: 10px 20px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dadbdf;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: auto;
  width: 225px;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 25px 20px;
`;

const Btn1 = styled.div`
  font-size: 15px;
  color: #232222;
  border: 1px solid #cbcbcb;
  padding: 10px 15px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 50px;
  text-align: center;
  cursor: pointer;
`;

const Btn2 = styled.div`
  font-size: 15px;
  color: #ffffff;
  border: 1px solid #cbcbcb;
  padding: 11px 16px;
  width: 50px;
  text-align: center;
  background-color: #1677ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const AddCurrencyModal = (props) => {
  const customerOptions = [
    { name: "Junaid Nasir", code: "C001" },
    { name: "Alice William", code: "C002" },
    { name: "Kamran Khan", code: "C003" },
    { name: "Donald Trump", code: "C004" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleCurrencyChange = (option) => {
    setSelectedCurrency(option);
    console.log(selectedCurrency);
    // Do something with the selected currency option
  };

  const handleTextFieldChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Only allow numeric values
      setTextFieldValue(value);
    }
  };

  return (
    <Wrap>
      <Wrapper>
        <InputContainer>
          <AccountCurrencyInput
            Name="Currency"
            setWidth="long"
            check={false} // Or true based on your logic
            onChange={handleCurrencyChange}
          />
          <CustomerDropDown
            Name={"Customer"}
            Padding={true}
            image={BlackDropdown}
            setWidth="currency"
            options={customerOptions}
          />
          <ChartAccountInput
            Name={"Text Field"}
            // Hash="*"
            Padding={true}
            setWidth={"long"}
            insertFromRight={true}
            onChange={handleTextFieldChange}
            value={textFieldValue}
          />
          <CalanderInput
            Name={"Date Field"}
            setWidth={"long"}
            setHeight={true}
          />
        </InputContainer>
        <ActionButtons>
          <Btn1 onClick={props.CancelAction}>Cancel</Btn1>
          <Btn2 onClick={props.SaveAction}>Save</Btn2>
        </ActionButtons>
      </Wrapper>
    </Wrap>
  );
};

export default AddCurrencyModal;
