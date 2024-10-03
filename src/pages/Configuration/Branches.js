import React, { useMemo, useState } from "react";
import styled from "styled-components";
import TitleOfSection from "../../New-Screens/Components/TitleOfSection";
import { useSelector } from "react-redux";
import Info from "../../assets2/ButtonIcons/InformationIcon.svg";
import HeadlessTable2 from "../../New-Screens/Components/MantineTable/HeadlessTable";
import { MdEdit } from "react-icons/md";
const Wrapper = styled.div``;
const Line3 = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 1px;
`;
const BaseCurr = styled.div`
    font-size: 12px;
  font-weight: 700;
  color: #464f60;
  margin: 15px 15px;
  opacity: 0.8;
`;
const Subtext = styled.div`
  font-size: 12px;
  color: #90959f;
  width: 500px;
  font-weight: normal;
  margin-top: 4px;
`;
const InputCheck2 = styled.input`
  height: 0px;
  width: 0px;
  opacity: 0;
`;
const Text = styled.div`
  font-size: 12px;
  color: #464F60;
  font-weight: 500;
  opacity: 0.8;
  width: 120px;
`;
const Wrap2 = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18.6px;
`;
const Span2 = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.bgColor};
  transition: 0.4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: "";
    height: 11px;
    width: 11px;
    left: ${(props) => (props.clicked ? "3.5px" : "26.0px")};
    bottom: 4px;
    background-color: #ffffff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const Note = styled.div`
  background-color: #eef5ff;
  width: 450px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  margin: 20px 15px;
`;
const Text4 = styled.div`
  color: #90959f;
  font-size: 12px;
`;
const Branches = () => {
  const [isChecked, setIsChecked] = useState(true);
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const getSpanBg = () => (isChecked ? themeKeys.c6 : themeKeys.c10);
  const HandleOnCheck = () => {
    setIsChecked(!isChecked);
  };
  const [internalNotesData, setInternalNotesData] = useState([]);
  const internalNotesColumns = useMemo(
    () => [
      {
        accessorKey: "user",
        header: "Branch Code",
      },
      {
        accessorKey: "date",
        header: "Branch Name",
      },
      {
        accessorKey: "notesDetail",
        header: "Location",
      },
      {
        accessorKey: "notesDetail",
        header: "Address",
      },
      {
        accessorKey: "notesDetail",
        header: "Base Currency",
      },
      {
        accessorKey: "notesDetail",
        header: "Default Language",
      },
      {
        accessorKey: "notesDetail",
        header: "Financial Period",
      },
      {
        accessorKey: "notesDetail",
        header: "Current Period",
      },
    ],
    []
  );
  return (
    <Wrapper>
      <div style={{ margin: "15px 0" }}>
        <TitleOfSection title={"COMPANY BRANCH"} />
      </div>
      <Line3 />
      <BaseCurr>
       ENABLE COMPANY BRANCH
        <Subtext>
          This feature allows for the setup of individual branch profiles,
          including location-specific details, financial data, and operational
          settings, facilitating centralized oversight and streamlined reporting
          across all branches.
        </Subtext>
      </BaseCurr>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0px",
          margin: "20px 15px",
        }}
      >
        <Text>Active Branch</Text>
        <Wrap2>
          <InputCheck2 style={{ cursor: "pointer" }} type="checkbox" />
          <Span2
            bgColor={getSpanBg()}
            clicked={isChecked}
            onClick={HandleOnCheck}
          ></Span2>
        </Wrap2>
      </div>
      <Note>
        <img src={Info} style={{ width: "16px", height: "16px" }} alt="dqwd" />
        <Text4>
          Once activated, the company branches functionality becomes permanent
          and cannot be disabled.
        </Text4>
      </Note>
      <HeadlessTable2
        columns={internalNotesColumns}
        data={internalNotesData}
        ToggleBtnTitle={""}
        TitleButton={true}
        titleName={"BRANCH LIST"}
        showBranchButton={true}
        rowSelection={false}
      />
    </Wrapper>
  );
};

export default Branches;
