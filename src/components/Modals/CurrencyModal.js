import React from "react";
import styled from "styled-components";
import SettingsTables from "../../New-Screens/Sections/SettingsTables";
import Info from "../../assets2/ButtonIcons/InformationIcon.svg";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255);
  width: 800px;
  height: 665px;
  border-radius: 8px;
  position: absolute;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 0 30px;
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
const Note = styled.div`
  background-color: #eef5ff;
  width: 500px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  margin: 20px 0;
`;
const Text = styled.div`
  color: #464f60;
  font-size: 10px;
`;
const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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

const CurrencyModal = ({ save, cancel }) => {
  const columnsData = [
    {
      accessorKey: "fiscalPeriod",
      header: "Day",
      // id: "fiscalPeriod",
    },
    {
      accessorKey: "fiscalYearStartDate",
      header: "Local Currency",
      // id: "fiscalYearStartDate",
    },
    {
      accessorKey: "fiscal",
      header: "Rate",
      // id: "fiscalYearStartDate",
    },
    {
      accessorKey: "periodFrom",
      header: "GBP",
      // id: "periodFrom",
    },
    {
      accessorKey: "periodTo",
      header: "EUR",
      // id: "periodTo",
    },
    {
      accessorKey: "currentPeriod",
      header: "AED",
      // id: "currentPeriod",
    },
    {
      accessorKey: "status",
      header: "PKR",
      // id: "status",
    },
  ];

  const Rowdata = [
    {
      fiscalPeriod: "John",
      fiscalYearStartDate: "Doe",
      numberOfPeriods: "123 Main St",
      periodFrom: "Anytown",
      periodTo: "CA",
      currentPeriod: "Yes",
      status: "Active",
    },
    {
      fiscalPeriod: "Jane",
      fiscalYearStartDate: "Smith",
      numberOfPeriods: "456 Oak St",
      periodFrom: "Othertown",
      periodTo: "NY",
      currentPeriod: "No",
      status: "Inactive",
    },
    // add more data as needed
  ];

  return (
    <Wrap>
      <Wrapper>
        <SettingsTables
          Title={"Add Series"}
          Icon={"AddBlue"}
          Name={"AUTO NUMBERING SERIES"}
          button={"true"}
          ShowButton={false}
          ColData={columnsData}
          RowData={Rowdata}
          Val={true}
          //   Click={HandleModal}
          setHeight={"currency"}
          Inputs={true}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Note>
            <img
              src={Info}
              style={{ width: "16px", height: "16px" }}
              alt="dqwd"
            />
            <Text>
              The numbering series cannot be modified after the transaction has
              been created.
            </Text>
          </Note>
          <ActionButtons>
            <Btn1 onClick={cancel}>Cancel</Btn1>
            <Btn2 onClick={save}>Save</Btn2>
          </ActionButtons>
        </div>
      </Wrapper>
    </Wrap>
  );
};

export default CurrencyModal;
