import React, { useState } from "react";
import styled from "styled-components";
import DropdownInput from "../../Inputs/DropdownInput";
import { useSelector } from "react-redux";
import ChartAccountInput from "../../Inputs/ChartAccountInput";
import { CreateAccountType } from "../../../Api/Apis";

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 300px;
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

const AccountType = ({ save, cancel, ChangeState }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const DropdownOption = [
    { label: "Asset", value: "Asset" },
    { label: "Liability", value: "Liability" },
    { label: "Capital", value: "Capital" },
    { label: "Revenue", value: "Revenue" },
    { label: "Expense", value: "Expense" },
  ];

  const [state, setState] = useState("");

  const [accountName, setAccountName] = useState("");
  const [status, setStatus] = useState(false);

  const HandleCheck = (e) => {
    setStatus(!status);
    console.log(e.target.checked);
  };

  const PostAccountData = async () => {
    const Response = await CreateAccountType(state, accountName, status);

    console.log(state, accountName, status);

    if (Response) {
      console.log(Response, "---Modal Response---");
      ChangeState();
      cancel();
    } else {
      alert(Response.error);
    }
  };

  return (
    <Wrap>
      <Wrapper>
        <Title>ADD ACCOUNT TYPE</Title>
        <Line />
        <DropdownInput
          Name={"Account Category"}
          Padding={true}
          setWidth={"ModalWidth"}
          Data={DropdownOption}
          onChange={(e) => setState(e)}
          value={state}
        />
        <ChartAccountInput
          Name={"Account Type"}
          Padding={true}
          setWidth={"MaxWidth"}
          onChange={(e) => setAccountName(e.target.value)}
          value={accountName}
          // disable={disableFields}
        />
        <Check>
          <Status>
            Active
            {/* <div style={{ color: "red" }}>*</div> */}
          </Status>
          <Checkbox type="checkbox" checked={status} onClick={HandleCheck} />
        </Check>
        <ActionButtons>
          <Button
            btnColor={themeKeys.primary}
            primary
            onClick={PostAccountData}
          >
            SAVE
          </Button>
          <Button onClick={cancel}>CANCEL</Button>
        </ActionButtons>
      </Wrapper>
    </Wrap>
  );
};

export default AccountType;
