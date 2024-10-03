import React, { useState } from "react";
import styled from "styled-components";
import DropdownInput from "../../Inputs/DropdownInput";
import { useSelector } from "react-redux";
import ChartAccountInput from "../../Inputs/ChartAccountInput";
import {
  BaseCurrencyPost,
  CreateAccountType,
  UpdateBaseCurrency,
} from "../../../Api/Apis";
import SettingsCurrencyDropDown from "../../DatePicker/SettingsCurrencyInput";
import { useDispatch } from "react-redux";
import { updateCurrency } from "../../../redux/appReducer/CurrencySlice";

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
const Check = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #464f60;
`;
const Checkbox = styled.input`
  accent-color: #2e90fa;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const UpdateCurrency = ({
  save,
  cancel,
  CurrencyValue,
  currencyOptionData,
  reload,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const SelectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  const DropdownOption = [
    { label: "Assets", value: "Assets" },
    { label: "Liabilities", value: "Liabilities" },
    { label: "Equity", value: "Equity" },
    { label: "Revenue", value: "Revenue" },
    { label: "Expenses", value: "Expenses" },
  ];
  const [getVal, setGetVal] = useState({});
  const dispatch = useDispatch();
  const GetInputValue = (event) => {
    setGetVal(event);
    console.log(event, "Modal Value");
    CurrencyValue(event);
    dispatch(updateCurrency(event));
  };
  console.log(getVal.value, getVal.fullForm, "cdefwefwef");

  // ////////////////////////////////////Update Currency //////////////////////////////////////////////

  const UpdateCurrency = async () => {
    const Response = await UpdateBaseCurrency(getVal.value, getVal.fullForm);

    if (Response) {
      console.log(Response.data);
      cancel();
      reload();
    } else {
      alert("Something went wrong");
    }
  };

  // //////////////////////////////Create Base Currency ///////////////////////////////////////////////

  const CreateCurrency = async () => {
    const Data = await BaseCurrencyPost(getVal);
    if (Data) {
      console.log(Data.data);
    } else {
      alert("Something went wrong!");
    }
  };

  const Options = currencyOptionData.map((x) => ({
    label: x.code,
    value: x.code,
    fullForm: x.currencyName,
  }));

  return (
    <Wrap>
      <Wrapper>
        <Title>UPDATE BASE CURRENCY</Title>
        <Line />
        <SettingsCurrencyDropDown
          width={true}
          GetValFunction={GetInputValue}
          currencyOptions={Options}
        />
        <ActionButtons>
          <Button onClick={UpdateCurrency} btnColor={themeKeys.primary} primary>
            SAVE
          </Button>
          <Button onClick={cancel}>CANCEL</Button>
        </ActionButtons>
      </Wrapper>
    </Wrap>
  );
};

export default UpdateCurrency;
