import React, { useState } from "react";
import styled from "styled-components";
// import AccountsSideNav from "../New-Screens/Components/AccountsSideNav";
import { useSelector } from "react-redux";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import Auto from "../assets2/ChartOfAccountNew/InputAuto.svg";
import DropdownInput from "../components/Inputs/DropdownInput";
import BlackDropdown from "../assets2/ChartOfAccountNew/DarkDropDown.svg";
import TopRightSection from "./Components/TopRightSection";
import StatusButton from "../components/buttons/StatusButton";
import Dotscell from "../components/Table/CustomCells/Dots";
// import PhoneInput from "react-phone-input-2";
import JornalTables from "./Sections/JornalTables";
import CustomFields from "./Sections/CustomFields";
// import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { border } from "@mui/system";

import CalendarInput from "../components/Inputs/CalenderInput";
import ActivityPart from "./Sections/ActivityPart";
import NewScreensNav from "./Components/NewScreensNav";

const Main = styled.div`
  display: flex;
  width: 100%;
`;
const Wrapit = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0px 10px;
  @media (max-width: 430px) {
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin: 5px 10px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
  padding-bottom: 10px;
`;
const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;

const Hero = styled.div`
  height: 78vh;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 10px;
`;
const Col1 = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;
const Inputs = styled.div`
  display: flex;
  gap: 20px;
`;
const Label = styled.div`
  width: 90px;
  text-align: center;
  color: #58606f;
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  bottom: 32px;
  left: 10px;
  z-index: 10;
  background-color: white;
`;
const Disp = styled.div`
  position: relative;
`;

const FirstWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: red;
  gap: 0px;
  margin: 0px 0px;
  flex-direction: row;
  margin-top: 20px;
`;
const SecondWrap = styled.div`
  margin-top: 1.2rem;
`;
const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: red;
  justify-content: space-between;
  /* justify-content: center; */
`;
const Wrap2 = styled.div`
  display: flex;
  justify-content: space-between;
  // background-color: red;
  gap: 10px;
  margin-top: 10px;
`;
const WrapCompany = styled.div`
  display: flex;
  justify-content: left;
  gap: 20px;
  margin-top: 10px;
  width: 380px;
  // background-color: red;
`;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  // background-color: red;
`;
const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
const Text = styled.div`
  font-size: 12px;
  color: #58606f;
  font-weight: 700;
`;
const CheckBox = styled.input`
  width: 15px;
  height: 15px;
`;
const Phone = styled.div`
  border: 1px solid #464f604d;
  border-radius: 4px;
  width: 142px;
  padding: 0 10px;
`;
const TopWrapper = styled.div`
  // background-color: red;
`;
const Div = styled.div`
  display: flex;
`;

const InputCheckOne = styled.input`
  height: 18px;
  width: 18px;
`;

const Text3 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  margin-bottom: 11px;
  margin-top: 5px;
  margin-left: 14px;
`;

const BankAccountNew = (props) => {
  const keys = useSelector((state) => state.localization.keys);
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Dots = () => {
    return <Dotscell />;
  };

  // Attachment Data

  const [rowData4, setRowData4] = useState([
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      attachedby: "youngblood021@gmail.com",
      notes: "$ 184,032,99",
      status: "Approved",
    },
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      attachedby: "youngblood021@gmail.com",
      notes: "$ 184,032,99",
      status: "Approved",
    },
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      attachedby: "youngblood021@gmail.com",
      notes: "$ 184,032,99",
      status: "Approved",
    },
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      attachedby: "youngblood021@gmail.com",
      notes: "$ 184,032,99",
      status: "Approved",
    },
  ]);

  const [colDefs4, setColDefs4] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
    },
    {
      field: "documentno",
      headerName: "Document No.",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "documentname",
      headerName: "Document Name",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "issuedate",
      headerName: "Issue Date",
      // width: "180px",
      headerClass: "All-header",
    },
    {
      field: "expirydate",
      headerName: "Expiry Date",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "attachedby",
      headerName: "Attached By",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "notes",
      headerName: "Notes",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "Status",
      // width: "120px",
      headerClass: "All-header",
      cellRenderer: Status,
    },
  ]);

  // Communication Logs Data

  // Trnsaction Data

  const [rowData6, setRowData6] = useState([
    {
      transactiontype: "1",
      reference: "SALESBUDGET2021",
      date: "Fiscal Year 2022 Annual Budget",
      duedate: "31 Dec 2022",
      totalamount: "$ 184,032,99",
      status: "Approved",
    },
    {
      transactiontype: "1",
      reference: "SALESBUDGET2021",
      date: "Fiscal Year 2022 Annual Budget",
      duedate: "31 Dec 2022",
      totalamount: "$ 184,032,99",
      status: "Approved",
    },
    {
      transactiontype: "1",
      reference: "SALESBUDGET2021",
      date: "Fiscal Year 2022 Annual Budget",
      duedate: "31 Dec 2022",
      totalamount: "$ 184,032,99",
      status: "Approved",
    },
    {
      transactiontype: "1",
      reference: "SALESBUDGET2021",
      date: "Fiscal Year 2022 Annual Budget",
      duedate: "31 Dec 2022",
      totalamount: "$ 184,032,99",
      status: "Approved",
    },
  ]);

  const [colDefs6, setColDefs6] = useState([
    {
      field: "transactiontype",
      headerName: "Transaction Type",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "reference",
      headerName: "Reference",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "date",
      headerName: "Date",
      // width: "180px",
      headerClass: "All-header",
    },
    {
      field: "duedate",
      headerName: "Due Date",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "totalamount",
      headerName: "Total Amount",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "Status",
      // width: "120px",
      headerClass: "All-header",
      cellRenderer: Status,
    },
  ]);
  const [value, setValue] = useState();
  return (
    <>
      <Main>
        <NewScreensNav
          height={"33%"}
          // OPTIONS
          first={"Bank Account Details"}
          second={"Custom Fields"}
          third={"Attachments"}
          fourth={"Transactions"}
          fifth={"Activity"}
          // CLASSES FOR SCROLL
          class1={"inputSec"}
          class2={"information"}
          class3={"customField"}
          class4={"address"}
          class5={"contact"}
          class6={"bank"}
          class7={"attachment"}
          class8={"correspondence"}
          class9={"transaction"}
          class10={"activity"}
        />
        <Wrapit>
          <Header
            title={"BANK ACCOUNT"}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1005}
            thirdNav={keys.KEY100341}
            navActive={"Bank Account - New"}
          />
          <HeaderNewButtons />
          <Div>
            {/* <AccountsSideNav
              // Side Nav Menu
              title={"SECTION LIST"}
              first={"Bank Account Details"}
              second={"Custom Fields"}
              third={"Attachments"}
              fourth={"Transactions"}
              fifth={"Activity"}

              // Classes
              // section1={"content"}
              // section2={"customField"}
              // section3={"attachment"}
              // section4={"transaction"}
              // section5={"accountDetails"}
            /> */}
            <Hero>
              <Title txtColor={themeKeys.primary}>
                {"BANK ACCOUNT DETAILS"}
              </Title>
              <Line />
              <FirstWrap>
                <Inputs>
                  <Col1>
                    <ChartAccountInput
                      Name="Bank Account Code"
                      Hash="*"
                      Padding={true}
                      image={Auto}
                      setWidth={"true"}
                    />{" "}
                    <ChartAccountInput
                      Name="Bank Account Name"
                      Padding={true}
                      setWidth={"true"}
                    />{" "}
                    <ChartAccountInput
                      Name="IBAN"
                      Padding={true}
                      setWidth={"true"}
                    />
                    <ChartAccountInput
                      Name="Account Number"
                      Padding={true}
                      setWidth={"true"}
                    />
                    <DropdownInput
                      Name={"Currency"}
                      Padding={true}
                      image={BlackDropdown}
                      setWidth={true}
                    />
                  </Col1>

                  <Col1>
                    <ChartAccountInput
                      Name="Branch"
                      Padding={true}
                      setWidth={"true"}
                    />
                    <ChartAccountInput
                      Name="Swift Code"
                      Padding={true}
                      setWidth={"true"}
                    />
                    <CalendarInput Name="Start Date" width={true} />
                    <CalendarInput Name="End Date" width={true} />
                  </Col1>
                  <Col1>
                    <FlexContainer>
                      <Text3 txtColor={"#58606f"}>Is Default?</Text3>
                      <InputCheckOne
                        style={{ cursor: "pointer" }}
                        type="checkbox"
                      />
                    </FlexContainer>
                    <DropdownInput
                      Name={"Debit Account"}
                      Padding={true}
                      image={BlackDropdown}
                      setWidth={true}
                    />
                    <DropdownInput
                      Name={"Credit Account"}
                      Padding={true}
                      image={BlackDropdown}
                      setWidth={true}
                    />
                    <DropdownInput
                      Name={"Balance FC"}
                      Padding={true}
                      image={BlackDropdown}
                      setWidth={true}
                    />
                  </Col1>
                </Inputs>
                <TopRightSection />
              </FirstWrap>

              <div style={{ marginTop: "40px" }}>
                <CustomFields Line1={"true"} />
              </div>

              <JornalTables
                Icon={"AttachIcon"}
                Title={"Attach"}
                Name={"ATTACHMENTS"}
                ColData={colDefs4}
                RowData={rowData4}
                button={"true"}
              />

              <JornalTables
                Title={""}
                Name={"TRANSACTIONS"}
                ColData={colDefs6}
                RowData={rowData6}
                button={"false"}
              />
              <ActivityPart />
            </Hero>
          </Div>
        </Wrapit>
      </Main>
    </>
  );
};

export default BankAccountNew;
