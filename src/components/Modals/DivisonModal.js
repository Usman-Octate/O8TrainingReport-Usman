import React, { useState } from "react";
import styled from "styled-components";
import ChartAccountInput from "../Inputs/ChartAccountInput";
import DropdownInput from "../Inputs/DropdownInput";
import { useSelector } from "react-redux";
import { CostCenterPostCoa } from "../../Api/Apis";
import Toaster from "./Toaster";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255);
  width: 17vw;
  height: 370px;
  border-radius: 8px;
  position: absolute;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #464f60;
  margin-top: 4%;
  text-align: center;
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

const Btn = styled.button`
  background-color: #2e90fa;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  margin-top: 3rem;
`;

const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
  height: 10px;
  margin-right: 30px;
`;

const TagLine = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #464f60;
  text-align: center;
`;

const Div = styled.div`
  margin-top: 8%;
`;

const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin: 10px 18px;
  width: 12.8vw;
`;

const Inputs = styled.div`
  width: 14.8vw;
  height: ${(props) => (props.setHeight ? "27vh" : "20vh")};
  margin: auto;
`;

const Check = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const Gap = styled.div`
  margin: 15px 0;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: auto;
  width: 14.8vw;
  padding-top: 70px;
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

const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
`;

const DivisionModal = ({
  Field,
  Height,
  closeModal,
  cancelAction,
  SelectedOptionId,
  DefaultName,
  ShowToaster,
  showError,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const [isdefault, setIsdefault] = useState(DefaultName);
  const [costCenterName, setCostCenterName] = useState("");
  const [segment, setSegment] = useState("");
  const [status, setStatus] = useState(false);
  const [selectID, setSelectID] = useState(SelectedOptionId);

  console.log(SelectedOptionId, "wece");

  const CreateCostCenter = async () => {
    try {
      // if (
      //   !costCenterCode ||
      //   !costCenterName ||
      //   !costCenterCodeID ||
      //   category === ""
      // ) {
      //   alert("Please fill in all required fields.");
      //   return;
      // }

      const Res = await CostCenterPostCoa(
        isdefault,
        costCenterName,
        segment,
        status,
        selectID
      );
      if (Res.status) {
        console.log(Res.data);
        closeModal();
        ShowToaster();
      }
    } catch (error) {
      showError();
    }
  };
  const HandleStatus = (e) => {
    setStatus(!status);
    console.log(status, "wedew");
    console.log(e.target.checked);
  };
  // const HandleChange = () => {
  //   const defaultOption = isdefault?.find((option) => option);
  //   console.log(defaultOption, "cwecwe");
  //   setIsdefault(defaultOption);
  // };

  return (
    <Wrap>
      <Wrapper setWidth={Field}>
        <div style={{ marginTop: "13px" }}>
          <Title txtColor={themeKeys.primary}>NEW COST CENTER</Title>
          <Line />
          <Inputs setHeight={Height}>
            <Gap>
              <DropdownInput
                Name={"Segment"}
                Padding={true}
                setWidth={"long"}
                // onChange={HandleChange}
                value={{ label: DefaultName, value: DefaultName }}
                // check={true}
              />
            </Gap>
            <Gap>
              <ChartAccountInput
                Name={"Cost Center Name"}
                Hash="*"
                Padding={true}
                setWidth={"long"}
                onChange={(e) => setCostCenterName(e.target.value)}
                value={costCenterName}
              />
            </Gap>
            <Gap>
              <ChartAccountInput
                Name={"Cost Center Code"}
                Hash="*"
                Padding={true}
                setWidth={"long"}
                onChange={(e) => setSegment(e.target.value)}
                value={segment}
              />
            </Gap>
            <Check>
              <Status>Active</Status>
              <Checkbox type="checkbox" onChange={HandleStatus} />
            </Check>
          </Inputs>
        </div>
        <ActionButtons SetMargin={Field}>
          <Button
            primary
            btnColor={themeKeys.primary}
            onClick={CreateCostCenter}
          >
            Save
          </Button>
          <Button onClick={cancelAction}>Cancel</Button>
        </ActionButtons>
      </Wrapper>
    </Wrap>
  );
};

export default DivisionModal;
