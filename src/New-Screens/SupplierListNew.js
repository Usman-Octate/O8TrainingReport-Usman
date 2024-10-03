import React, { useState } from "react";
import styled from "styled-components";
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
import JornalTables from "./Sections/JornalTables";
import CustomFields from "./Sections/CustomFields";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ActivityPart from "./Sections/ActivityPart";
import TitleOfSection from "./Components/TitleOfSection";
import TabNavigation from "./Components/TabNavigation";
import NewScreensNav from "../New-Screens/Components/NewScreensNav";

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
  width: 170px;
  padding: 0 10px;
`;
const TopWrapper = styled.div`
  // background-color: red;
`;
const Div = styled.div`
  display: flex;
`;

const SupplierListNew = (props) => {
  const keys = useSelector((state) => state.localization.keys);
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Dots = () => {
    return <Dotscell />;
  };

  // Address Details Data

  const [rowData1, setRowData1] = useState([
    {
      addressdetails: "1",
      addresscode: "SALESBUDGET2021",
      addressdetails: "Fiscal Year 2022 Annual Budget",
      city: "31 Dec 2022",
      state: "$ 184,032,99",
      country: "Approved",
      zipcode: "0000",
      status: "Active",
    },
    {
      addressdetails: "1",
      addresscode: "SALESBUDGET2021",
      addressdetails: "Fiscal Year 2022 Annual Budget",
      city: "31 Dec 2022",
      state: "$ 184,032,99",
      country: "Approved",
      zipcode: "0000",
      status: "Active",
    },
    {
      addressdetails: "1",
      addresscode: "SALESBUDGET2021",
      addressdetails: "Fiscal Year 2022 Annual Budget",
      city: "31 Dec 2022",
      state: "$ 184,032,99",
      country: "Approved",
      zipcode: "0000",
      status: "Active",
    },
    {
      addressdetails: "1",
      addresscode: "SALESBUDGET2021",
      addressdetails: "Fiscal Year 2022 Annual Budget",
      city: "31 Dec 2022",
      state: "$ 184,032,99",
      country: "Approved",
      zipcode: "0000",
      status: "Active",
    },
    {
      addressdetails: "1",
      addresscode: "SALESBUDGET2021",
      addressdetails: "Fiscal Year 2022 Annual Budget",
      city: "31 Dec 2022",
      state: "$ 184,032,99",
      country: "Approved",
      zipcode: "0000",
      status: "Active",
    },
  ]);

  const [colDefs1, setColDefs1] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
    },
    {
      field: "addresstype",
      headerName: "Address Type",
      filter: false,
      headerClass: "id-cell",
    },
    {
      field: "addresscode",
      headerName: "Address Code",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "addressdetails",
      headerName: "Address Details",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "city",
      headerName: "City",
      // width: "180px",
      headerClass: "All-header",
    },
    {
      field: "state",
      headerName: "Country",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "zipcode",
      headerName: "Zips Code",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "Status",
      cellRenderer: Status,
      // width: "120px",
      headerClass: "All-header",
    },
  ]);

  // Contact Person Data

  const [rowData2, setRowData2] = useState([
    {
      contacttype: "1",
      contactname: "SALESBUDGET2021",
      gender: "Fiscal Year 2022 Annual Budget",
      designation: "31 Dec 2022",
      phonenumber: "$ 184,032,99",
      mobilenumber: "Approved",
      emailaddress: "0000",
      status: "Active",
    },
    {
      contacttype: "1",
      contactname: "SALESBUDGET2021",
      gender: "Fiscal Year 2022 Annual Budget",
      designation: "31 Dec 2022",
      phonenumber: "$ 184,032,99",
      mobilenumber: "Approved",
      emailaddress: "0000",
      status: "Active",
    },
    {
      contacttype: "1",
      contactname: "SALESBUDGET2021",
      gender: "Fiscal Year 2022 Annual Budget",
      designation: "31 Dec 2022",
      phonenumber: "$ 184,032,99",
      mobilenumber: "Approved",
      emailaddress: "0000",
      status: "Active",
    },
    {
      contacttype: "1",
      contactname: "SALESBUDGET2021",
      gender: "Fiscal Year 2022 Annual Budget",
      designation: "31 Dec 2022",
      phonenumber: "$ 184,032,99",
      mobilenumber: "Approved",
      emailaddress: "0000",
      status: "Active",
    },
    {
      contacttype: "1",
      contactname: "SALESBUDGET2021",
      gender: "Fiscal Year 2022 Annual Budget",
      designation: "31 Dec 2022",
      phonenumber: "$ 184,032,99",
      mobilenumber: "Approved",
      emailaddress: "0000",
      status: "Active",
    },
  ]);

  const [colDefs2, setColDefs2] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
    },
    {
      field: "contacttype",
      headerName: "Contact Type",
      filter: false,
      headerClass: "id-cell",
    },
    {
      field: "contactname",
      headerName: "Contact Name",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "gender",
      headerName: "Gender",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "designation",
      headerName: "Designation",
      // width: "180px",
      headerClass: "All-header",
    },
    {
      field: "phonenumber",
      headerName: "Phone Number",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "mobilenumber",
      headerName: "Mobile Number",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "emailaddress",
      headerName: "Email Address",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "Status",
      cellRenderer: Status,
      // width: "120px",
      headerClass: "All-header",
    },
  ]);

  // Bank Information Data

  const [rowData3, setRowData3] = useState([
    {
      accountname: "1",
      bankname: "SALESBUDGET2021",
      bankaddress: "Fiscal Year 2022 Annual Budget",
      currency: "31 Dec 2022",
      iban: "$ 184,032,99",
      accountnumber: "Approved",
      routingnumber: "0000",
      swiftcode: "Active",
    },
    {
      accountname: "1",
      bankname: "SALESBUDGET2021",
      bankaddress: "Fiscal Year 2022 Annual Budget",
      currency: "31 Dec 2022",
      iban: "$ 184,032,99",
      accountnumber: "Approved",
      routingnumber: "0000",
      swiftcode: "Active",
    },
    {
      accountname: "1",
      bankname: "SALESBUDGET2021",
      bankaddress: "Fiscal Year 2022 Annual Budget",
      currency: "31 Dec 2022",
      iban: "$ 184,032,99",
      accountnumber: "Approved",
      routingnumber: "0000",
      swiftcode: "Active",
    },
    {
      accountname: "1",
      bankname: "SALESBUDGET2021",
      bankaddress: "Fiscal Year 2022 Annual Budget",
      currency: "31 Dec 2022",
      iban: "$ 184,032,99",
      accountnumber: "Approved",
      routingnumber: "0000",
      swiftcode: "Active",
    },
    {
      accountname: "1",
      bankname: "SALESBUDGET2021",
      bankaddress: "Fiscal Year 2022 Annual Budget",
      currency: "31 Dec 2022",
      iban: "$ 184,032,99",
      accountnumber: "Approved",
      routingnumber: "0000",
      swiftcode: "Active",
    },
  ]);

  const [colDefs3, setColDefs3] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
    },
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: "60px",
      resizable: false,
      filter: false,
      headerClass: "id-cell",
    },
    {
      field: "accountname",
      headerName: "Account Name",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "bankname",
      headerName: "Bank Name",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "bankaddress",
      headerName: "Bank Address",
      // width: "180px",
      headerClass: "All-header",
    },
    {
      field: "currency",
      headerName: "Currency",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "iban",
      headerName: "Iban",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "accountnumber",
      headerName: "Account Number",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "routingnumber",
      headerName: "Routing Number",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "swifthcode",
      headerName: "Swift Code",
      // width: "120px",
      headerClass: "All-header",
    },
  ]);

  // Attachment Data

  const [rowData4, setRowData4] = useState([
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      notes: "$ 184,032,99",
      action: "Approved",
    },
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      notes: "$ 184,032,99",
      action: "Approved",
    },
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      notes: "$ 184,032,99",
      action: "Approved",
    },
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      notes: "$ 184,032,99",
      action: "Approved",
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
      field: "documnetname",
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
      field: "notes",
      headerName: "Notes",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "action",
      headerName: "Action",
      // width: "120px",
      headerClass: "All-header",
      cellRenderer: Dots,
    },
  ]);

  // Communication Logs Data

  const [rowData5, setRowData5] = useState([
    {
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
  ]);

  const [colDefs5, setColDefs5] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
    },
    {
      field: "date",
      headerName: "Date",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "subject",
      headerName: "Subject",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "sender",
      headerName: "Sender",
      // width: "180px",
      headerClass: "All-header",
    },
    {
      field: "recipient",
      headerName: "Recipient",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "commtype",
      headerName: "Comm Type",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "Status",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "action",
      headerName: "Action",
      // width: "120px",
      headerClass: "All-header",
      cellRenderer: Dots,
    },
  ]);

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
    },
  ]);
  const [value, setValue] = useState();
  return (
    <>
      <Main>
        <NewScreensNav
          height={"22%"}
          // OPTIONS
          first={"Supplier Details"}
          second={"General Information"}
          third={"Custom Fields"}
          fourth={"Address Details"}
          fifth={"Contact Person"}
          sixth={"Bank Information"}
          seventh={"Attachments"}
          eighth={"Correspondence"}
          ninth={"Transactions"}
          tenth={"Activity"}
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
            title={"SUPPLIER LIST"}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1003}
            thirdNav={keys.KEY10036}
            navActive={"Supplier - New"}
          />
          <HeaderNewButtons State={true} />

          <Div>
            {/* <AccountsSideNav
              // Side Nav Menu
              title={"SECTION LIST"}
              first={"Supplier Details"}
              second={"General Information"}
              third={"Custom Fields"}
              fourth={"Address Details"}
              fifth={"Contact Person"}
              sixth={"Bank Information"}
              seventh={"Attachments"}
              eighth={"Correspondence"}
              nine={"Transactions"}
              tenth={"Activity"}
              // Classes
              // section1={"content"}
              // section2={"customField"}
              // section3={"attachment"}
              // section4={"transaction"}
              // section5={"accountDetails"}
            /> */}

            <Hero>
              <TitleOfSection title={"SUPPLIER DETAILS"} />
              <Line />
              <div id="inputSec">
                <FirstWrap>
                  <Inputs>
                    <Col1>
                      <ChartAccountInput
                        Name="Supplier Code"
                        Hash="*"
                        Padding={true}
                        image={Auto}
                        setWidth={"true"}
                      />{" "}
                      <ChartAccountInput
                        Name="Supplier Name"
                        Hash="*"
                        Padding={true}
                        setWidth={"true"}
                      />{" "}
                      <ChartAccountInput
                        Name="Onboarding Date"
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
                      <DropdownInput
                        Name={"Sales Agent"}
                        Padding={true}
                        image={BlackDropdown}
                        setWidth={true}
                      />
                      <DropdownInput
                        Name={"Price List"}
                        Padding={true}
                        image={BlackDropdown}
                        setWidth={true}
                      />
                      <DropdownInput
                        Name={"Delivery Type"}
                        Padding={true}
                        image={BlackDropdown}
                        setWidth={true}
                      />
                      <DropdownInput
                        Name={"Supplier Group"}
                        Padding={true}
                        image={BlackDropdown}
                        setWidth={true}
                      />
                    </Col1>
                    <Col1>
                      <DropdownInput
                        Name={"Account Code"}
                        Padding={true}
                        image={BlackDropdown}
                        setWidth={true}
                      />
                      <ChartAccountInput
                        Name="Email Address"
                        Padding={true}
                        setWidth={"true"}
                      />
                      <ChartAccountInput
                        Name="Phone Number"
                        setWidth={"true"}
                      />
                      <ChartAccountInput
                        Name="Mobile Number"
                        setWidth={"true"}
                      />
                    </Col1>
                  </Inputs>
                  <TopRightSection />
                </FirstWrap>
              </div>
              <div id="information">
                <SecondWrap>
                  <TitleOfSection title={"GENERAL INFORMATION"} />
                  <Line />
                  <MainWrapper>
                    <CompanyInfo>
                      <MainWrap>
                        <Title txtColor={themeKeys.primary}>
                          {"COMPANY INFORMATION"}
                        </Title>
                        <WrapCompany>
                          <Col1>
                            <Disp>
                              <Label>Phone Number</Label>
                              <Phone>
                                <PhoneInput value={value} onChange={setValue} />
                              </Phone>
                            </Disp>
                            <Disp>
                              <Label>Mobile Number</Label>
                              <Phone>
                                <PhoneInput
                                  value={value}
                                  onChange={setValue}
                                  style={{ border: "none", outline: "none" }}
                                />
                              </Phone>
                            </Disp>
                            <ChartAccountInput
                              Name="Email Address"
                              setWidth={"true"}
                            />
                            <ChartAccountInput
                              Name="Website"
                              setWidth={"true"}
                            />
                          </Col1>
                          <Col1>
                            <DropdownInput
                              Name={"Category"}
                              image={BlackDropdown}
                              setWidth={true}
                            />
                            <DropdownInput
                              Name={"Industry"}
                              image={BlackDropdown}
                              setWidth={true}
                            />
                            <ChartAccountInput
                              comment={"Large"}
                              Name="Comments"
                              setWidth={"true"}
                            />
                          </Col1>
                        </WrapCompany>
                      </MainWrap>
                    </CompanyInfo>

                    <CompanyInfo>
                      <MainWrap>
                        <Title txtColor={themeKeys.primary}>
                          {"ACCOUNTING"}
                        </Title>
                        <Wrap2>
                          <Col1>
                            <DropdownInput
                              Name={"A/R Account"}
                              image={BlackDropdown}
                              setWidth={true}
                            />
                            <DropdownInput
                              Name={"Payment Type"}
                              image={BlackDropdown}
                              setWidth={true}
                            />
                            <DropdownInput
                              Name={"Payment Terms"}
                              image={BlackDropdown}
                              setWidth={true}
                            />
                            <ChartAccountInput
                              Name="Credit Limit"
                              setWidth={"true"}
                            />
                          </Col1>
                        </Wrap2>
                      </MainWrap>
                    </CompanyInfo>
                    <CompanyInfo>
                      <MainWrap>
                        <Title txtColor={themeKeys.primary}>
                          {"TAX & DISCOUNTS"}
                        </Title>
                        <Wrap2>
                          <Col1>
                            <DropdownInput
                              Name={"Discount Code"}
                              image={BlackDropdown}
                              setWidth={true}
                            />
                            <ChartAccountInput
                              Name="Max Disc Amount"
                              setWidth={"true"}
                            />
                            <DropdownInput
                              Name={"Tax Code"}
                              image={BlackDropdown}
                              setWidth={true}
                            />
                            <ChartAccountInput
                              Name="Tax ID Number"
                              setWidth={"true"}
                            />
                          </Col1>
                        </Wrap2>
                      </MainWrap>
                    </CompanyInfo>
                  </MainWrapper>
                </SecondWrap>
              </div>

              <div id="customField" style={{ marginTop: "40px" }}>
                <CustomFields Line1={"true"} />
              </div>
              <div id="address">
                <JornalTables
                  Icon={"AddBlue"}
                  Title={"Add New"}
                  Name={"ADDRESS DETAILS"}
                  ColData={colDefs1}
                  RowData={rowData1}
                  button={"true"}
                />
              </div>
              <div id="contact">
                <JornalTables
                  Icon={"AddBlue"}
                  Title={"Add New"}
                  Name={"CONTACT PERSON"}
                  ColData={colDefs2}
                  RowData={rowData2}
                  button={"true"}
                />
              </div>
              <div id="bank">
                <JornalTables
                  Icon={"AddBlue"}
                  Title={"Add New"}
                  Name={"BANK INFORMATION"}
                  ColData={colDefs3}
                  RowData={rowData3}
                  button={"true"}
                />
              </div>
              <div id="attachment">
                <JornalTables
                  Icon={"AttachIcon"}
                  Title={"Attach"}
                  Name={"ATTACHMENTS"}
                  ColData={colDefs4}
                  RowData={rowData4}
                  button={"true"}
                />
              </div>
              <div id="correspondence">
                <JornalTables
                  Title={""}
                  Name={"CORRESPONDENCE"}
                  ColData={colDefs5}
                  RowData={rowData5}
                  button={"t"}
                />
              </div>
              <div id="transaction">
                <JornalTables
                  Title={""}
                  Name={"TRANSACTIONS"}
                  ColData={colDefs6}
                  RowData={rowData6}
                  button={"t"}
                />
              </div>
              <div id="activity">
                <ActivityPart />
              </div>
            </Hero>
          </Div>
        </Wrapit>
      </Main>
    </>
  );
};

export default SupplierListNew;
