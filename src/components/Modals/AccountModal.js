import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ChartAccountInput from "../Inputs/ChartAccountInput";
import DropdownInput from "../Inputs/DropdownInput";
import { CostCenterPost, UpdateSegment } from "../../Api/Apis";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255);
  width: 17vw;
  height: ${(props) => (props.setWidth ? "52vh" : "45vh")};
  border-radius: 8px;
  position: absolute;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  /* -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px); */
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #464f60;
  margin-top: 4%;
  /* margin-left: 20%; */
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
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
  /* margin-left: 19px; */
  /* padding-bottom: 10px; */
`;
const Inputs = styled.div`
  width: 14.8vw;
  height: ${(props) => (props.setHeight ? "27vh" : "20vh")};
  margin: auto;
  /* margin: 0 55px; */
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
  /* margin-top: 10px; */
  margin: auto;
  width: 14.8vw;
  padding-top: 20px;
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

  @media (max-width: 1166px) {
    width: 88%;
  }
`;

const AccountModal = ({
  Cancel2,
  Save2,
  Object,
  Field,
  title,
  changeState,
  closeModal,
  RowID,
  CloseModal,
  segmentGetFunction,
  UpdateStatus,
  DefaultOptions,
  SegmentNames,
  ToasterSegment,
  ToasterCostCenter,
  Height,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  // const dropdownOptions = [];
  const [category, setCategory] = useState("");
  const [costCenter, setCostCenter] = useState("");
  const [costCenterName, setCostCenterName] = useState("");
  const [costCenterCode, setCostCenterCode] = useState("");
  const [status, setStatus] = useState(false);

  const HandleCategory = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };
  const HandleCostCenter = (event) => {
    setCostCenter(event);
  };
  const HandleCostName = (event) => {
    setCostCenterName(event.target.value);
  };
  const HandleCostCode = (event) => {
    setCostCenterCode(event.target.value);
  };
  const HandleStatus = () => {
    setStatus(!status);
    console.log(status, "wedew");
  };
  // //////////////////////////////////POST API/////////////////////////////////////

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

      const Res = await CostCenterPost(
        costCenterCode,
        costCenter,
        costCenterName,
        status
      );
      if (Res.status) {
        console.log(Res.data);
        ToasterCostCenter(true);
        changeState();
        closeModal();
      }
    } catch (error) {
      alert("An error occurred while creating the cost center.");
    }
  };

  // ///////////////////////////////////UPDATE API//////////////////////////////////////////

  const [isUpdated, setIsUpdated] = useState(false);

  const UpdatedData = async () => {
    setCostCenterName(RowID.segment ? RowID.segment : null);

    const UpdateData = await UpdateSegment(RowID.id, costCenterName, status);

    console.log(costCenterName, RowID.id, status, "cewfwefrgwege");

    console.log("---Response---", UpdateData);
    if (UpdateData) {
      ToasterSegment(true);
      CloseModal();
      UpdateStatus();
      setIsUpdated(true);
    } else {
      alert("Failed to Update");
    }
  };
  const dropdownOptions = SegmentNames?.map((x) => ({
    label: x.segment,
    value: x.id,
  }));
  const dropdownOptions2 = [];
  useEffect(() => {
    if (RowID && title === "Update Segment Name") {
      setCostCenterName(RowID.segment);
      console.log(DefaultOptions, "emwdwenfi");
      const DefaultOption = DefaultOptions.find(
        (option) => option === RowID.segmentSystem
      );
      setCostCenter(DefaultOption);
      setStatus(RowID.status);
    }
  }, [RowID]);

  console.log(RowID, "cwcwecewcewv");

  console.log(RowID, "---Row Data---");

  console.log(costCenter, "cwecwe");

  // const themeKeys = useSelector((state) => state.localization.themeKeys);
  return (
    <Wrap>
      <Wrapper setWidth={Field}>
        <div style={{ marginTop: "13px" }}>
          <Title txtColor={themeKeys.primary}>{title}</Title>
          <Line />
          <Inputs setHeight={Height}>
            {/* <Gap>
              <ChartAccountInput
                Name={"ID"}
                Hash="*"
                Padding={true}
                setWidth={"long"}
                insertFromRight={false}
                onChange={HandleID}
                value={costCenterCodeID}
              />
            </Gap> */}
            <Gap>
              {Object ? (
                // <ChartAccountInput
                //   Name={"ID"}
                //   Padding={true}
                //   setWidth={"long"}
                //   insertFromRight={true}
                // />
                ""
              ) : (
                <DropdownInput
                  Name={"Account Category"}
                  Padding={true}
                  setWidth={"long"}
                  Data={dropdownOptions2}
                  onChange={HandleCategory}
                  value={category}
                />
              )}
            </Gap>
            <Gap>
              {Object ? (
                <DropdownInput
                  Name={"Segment"}
                  Padding={true}
                  setWidth={"long"}
                  Data={RowID ? DefaultOptions : dropdownOptions}
                  onChange={HandleCostCenter}
                  value={costCenter}
                />
              ) : (
                // <ChartAccountInput
                //   Name={"ID"}
                //   Padding={true}
                //   setWidth={"long"}
                //   insertFromRight={true}
                // />
                ""
              )}
            </Gap>
            <Gap>
              {Field ? (
                <ChartAccountInput
                  Name={"Cost Center Code"}
                  Hash="*"
                  Padding={true}
                  setWidth={"long"}
                  insertFromRight={false}
                  onChange={HandleCostCode}
                  value={costCenterCode}
                />
              ) : null}
            </Gap>
            <Gap>
              <ChartAccountInput
                Name={Object ? "Cost Center Name" : "Account Type"}
                Hash="*"
                Padding={true}
                setWidth={"long"}
                insertFromRight={false}
                onChange={Object ? HandleCostName : null}
                value={Object ? costCenterName : null}
              />
            </Gap>

            <Check>
              <Status>
                Active
                {/* <div style={{ color: "red" }}>*</div> */}
              </Status>
              <Checkbox
                type="checkbox"
                checked={RowID?.status ? status : null}
                onChange={HandleStatus}
              />
            </Check>
          </Inputs>
        </div>
        <ActionButtons SetMargin={Field}>
          <Button
            btnColor={themeKeys.primary}
            primary
            onClick={RowID ? UpdatedData : CreateCostCenter}
          >
            Save
          </Button>
          <Button onClick={Cancel2}>Cancel</Button>
        </ActionButtons>
      </Wrapper>
    </Wrap>
  );
};

export default AccountModal;
