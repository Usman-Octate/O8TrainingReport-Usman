import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import { useSelector } from "react-redux";
import { useAppContext } from "../context/AppProvider";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import LongDescriptionInput from "../components/Inputs/LongDiscriptionInput";
import Dots from "../components/Table/CustomCells/Dots";
import JornalTables from "./Sections/JornalTables";

import StatusButton from "../components/buttons/StatusButton";
import CustomerSupplierCell from "../components/Table/CustomCells/CustomerSupplierCell";

import ActiveButton from "../components/buttons/ActiveButton";

import Auto from "../../src/assets2/ChartOfAccountNew/InputAuto.svg";
import ContactPersonDropDown from "../components/Inputs/ContactPersonDropDown";
import DropdownInput1 from "../components/Inputs/DropdownInput";
import NewScreensNav from "./Components/NewScreensNav";
import ActivityPart from "./Sections/ActivityPart";
import TitleOfSection from "../New-Screens/Components/TitleOfSection";

const contacts = [
  {
    name: "John Doe",
    role: "CEO",
    email: "john.doe@example.com",
    contact: "123-456-7890",
  },
  {
    name: "Jane Smith",
    role: "Finance Officer",
    email: "jane.smith@example.com",
    contact: "987-654-3210",
  },
  {
    name: "Robert Johnson",
    role: "CTO",
    email: "robert.johnson@example.com",
    contact: "555-666-7777",
  },
  {
    name: "Emily Davis",
    role: "HR Manager",
    email: "emily.davis@example.com",
    contact: "444-555-6666",
  },
  {
    name: "Michael Brown",
    role: "Marketing Director",
    email: "michael.brown@example.com",
    contact: "333-444-5555",
  },
  {
    name: "Sarah Wilson",
    role: "Sales Manager",
    email: "sarah.wilson@example.com",
    contact: "222-333-4444",
  },
];

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Adjust gap as needed */
`;

const Grab = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;

  scrollbar-width: thin;
  //   background-color: red;
  scrollbar-color: #c2c2c2 transparent;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #464f604d;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin: 10px 10px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
`;

const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 10px 0px;
  @media (max-width: 1166px) {
    width: 100%;
  }
`;

const FieldsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Wrapit = styled.div`
  display: flex;
  // background-color: red;
  flex-direction: row;

  align-items: center;
  gap: 20px;
  padding-left: 1px;
  padding-right: 1px;
  @media (max-width: 1166px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  display: flex;
  // align-items: center;
  // background-color: blue;
  width: 100%;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1166px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  // background-color: blue;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 1166px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const WrapperforTop = styled.div`
  display: flex;
  // align-items: center;
  justify-content: center;
  gap: 30px;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  // margin-left: 5%;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px; /* Add space between ActiveButton and ThreeCardsComponents */
`;

const Wrapit1 = styled.div`
  height: 80vh;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 10px;
`;

const Grab1 = styled.div`
  width: 100%;
  //   background-color: blue;
`;

const TextTitle = styled.text`
  color: ${(props) => props.txtColor};
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  align-self: flex-top;
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

const ScrollableSection = styled.div`
  padding: 0 0px;
  /* background-color: green; */
`;

const BottomRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0px 0px 0px;
  gap: 5px;
`;

const Main2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 5px;
  padding-left: 0px;
  @media (max-width: 700px) {
    padding-left: 0;
  }
`;
const Text2 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
  width: 120px;
`;
const Wrap = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18.6px;
`;
const InputCheck = styled.input`
  height: 0px;
  width: 0px;
  opacity: 0;
`;

const Span = styled.div`
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
const Wrap2 = styled.div`
  padding: 0px 10px;
`;

const LocationNew = () => {
  const [isChecked, setIsChecked] = useState(true);

  const getSpanBg = () => (isChecked ? themeKeys.c6 : themeKeys.c10);
  const HandleOnCheck = () => {
    setIsChecked(!isChecked);
  };

  const Dotscell = () => {
    return <Dots />;
  };
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const CustSuppCell = (p) => {
    return <CustomerSupplierCell value={p.value} lineText={p.lineText} />;
  };

  const keys = useSelector((state) => state.localization.keys);
  const { maxModal } = useAppContext();
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const [rowData, setRowData] = useState([
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
  ]);
  const [colDefs, setColDefs] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
      cellClass: "Center-Align",
    },
    {
      field: "id",
      headerName: "ID",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exhchangedate",
      headerName: "Rack Code",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basecurrency",
      headerName: "Rack Description",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basesign",
      headerName: "Rate",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "baserate",
      headerName: "Range From",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exchangerate",
      headerName: "Range To",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "currencyexchange",
      headerName: "Amount",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);

  const [rowData2, setRowData2] = useState([
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
  ]);
  const [colDefs2, setColDefs2] = useState([
    {
      field: "id",
      headerName: "Commission Cycle",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exhchangedate",
      headerName: "Period From",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basecurrency",
      headerName: "Period To",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basesign",
      headerName: "Fiscal Year",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "baserate",
      headerName: "Total Commssion",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exchangerate",
      headerName: "Status",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);

  const [rowData3, setRowData3] = useState([
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
  ]);
  const [colDefs3, setColDefs3] = useState([
    {
      field: "id",
      headerName: "Transaction Type",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exhchangedate",
      headerName: "Reference",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basecurrency",
      headerName: "Date",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basesign",
      headerName: "Due Date",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "baserate",
      headerName: "Total Amount",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exchangerate",
      headerName: "Status",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);

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

  return (
    <Grab1>
      <NewScreensNav
        height={"17%"}
        // OPTIONS
        first={"Product Details"}
        second={"Order & Accounting"}
        third={"Additional Product Info"}
        fourth={"Custom Fields"}
        fifth={"Location Details"}
        sixth={"Supplier Details"}
        seventh={"Batch & Serial Numbers"}
        eighth={"Item Varients"}
        ninth={"Attachments"}
        tenth={"Transactions"}
        eleventh={"Activity"}
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
      {/* <AccountsSideNav
        title={keys.KEY100258}
        first={keys.KEY100275}
        second={keys.KEY100276}
        third={keys.KEY100277}
        fourth={keys.KEY10090}
        fifth={keys.KEY100278}
        sixth={keys.KEY100279}
        seventh={keys.KEY100280}
        eighth={keys.KEY100281}
        ninth={keys.KEY100260}
        tenth={keys.KEY10011}
        eleventh={keys.KEY100261}
      /> */}
      <Wrap2>
        <Header
          title={keys.KEY100322}
          firstNav={keys.KEY0002}
          secNav={keys.KEY1004}
          thirdNav={keys.KEY100320}
          navActive={keys.KEY100321}
        />
        <HeaderNewButtons State={true} />
      </Wrap2>
      <Wrapit1>
        <ScrollableSection>
          <Grab max={maxModal}>
            <TitleOfSection title={"LOCATION DETAILS"} />
            <Line />

            <Wrapit>
              <Wrapper>
                <FieldsBox>
                  <ChartAccountInput
                    Name="Location Code"
                    Hash="*"
                    Padding={true}
                    setWidth={"small"}
                    image={Auto}
                  />
                  <ChartAccountInput
                    Name="Location Name"
                    Padding={true}
                    setWidth={"small"}
                  />
                  <ContactPersonDropDown
                    name="Contact Person"
                    options={contacts}
                  />
                </FieldsBox>

                <FieldsBox>
                  <DropdownInput1
                    Name={keys.KEY100323}
                    Padding={false}
                    setWidth={"small"}
                  />
                </FieldsBox>
                <FieldsBox>
                  <ChartAccountInput
                    Name="Sales Account"
                    Padding={true}
                    setWidth={"small"}
                  />
                  <ChartAccountInput
                    Name="Expense Account"
                    Padding={true}
                    setWidth={"small"}
                  />
                  <ChartAccountInput
                    Name="Inventory Account"
                    Padding={true}
                    setWidth={"small"}
                  />
                  <ChartAccountInput
                    Name="Cost of Goods Sold Account"
                    Padding={true}
                    setWidth={"small"}
                  />
                  <DropdownInput1
                    Name={keys.KEY100327}
                    Padding={false}
                    setWidth={"small"}
                  />
                </FieldsBox>
                <FieldsBox>
                  <FlexContainer></FlexContainer>
                </FieldsBox>

                <LongDescriptionInput Name="Notes" />
                <RightWrapper>
                  <ActiveButton name={"Active"} />
                </RightWrapper>
              </Wrapper>
            </Wrapit>
          </Grab>
          <BottomRowWrapper>
            <Main2>
              <Text2 txtColor={themeKeys.primary}>{keys.KEY100237}</Text2>
              <Wrap>
                <InputCheck style={{ cursor: "pointer" }} type="checkbox" />
                <Span
                  bgColor={getSpanBg()}
                  clicked={isChecked}
                  onClick={HandleOnCheck}
                ></Span>
              </Wrap>
            </Main2>
            <DropdownInput1
              Name={keys.KEY100323}
              Padding={false}
              setWidth={"small"}
            />
            <DropdownInput1
              Name={keys.KEY100324}
              Padding={false}
              setWidth={"small"}
            />

            <DropdownInput1
              Name={keys.KEY100325}
              Padding={false}
              setWidth={"small"}
            />

            <DropdownInput1
              Name={keys.KEY100326}
              Padding={false}
              setWidth={"small"}
            />

            <FlexContainer>
              <Text3 txtColor={"#58606f"}>ON HOLD</Text3>
              <InputCheckOne style={{ cursor: "pointer" }} type="checkbox" />
            </FlexContainer>
          </BottomRowWrapper>
        </ScrollableSection>
        <JornalTables
          Icon={"Import"}
          Title={"Import"}
          Name={"RACK DETAILS"}
          ColData={colDefs}
          RowData={rowData}
          button={"true"}
          ShowButton={false}
        />
        <JornalTables
          Icon={"Calculate"}
          Title={"Calculate"}
          Name={"COMMISION"}
          ColData={colDefs2}
          RowData={rowData2}
          button={"true"}
          ShowButton={false}
        />
        <JornalTables
          Name={"TRANSACTIONS"}
          ColData={colDefs3}
          RowData={rowData3}
          button={"truswqse"}
          ShowButton={false}
        />
        <JornalTables
          Icon={"AttachIcon"}
          Title={"Attach"}
          Name={"ATTACHMENTS"}
          ColData={colDefs4}
          RowData={rowData4}
          button={"true"}
          id={"section4"}
        />
        <ActivityPart ShowButton={true} />
      </Wrapit1>
    </Grab1>
  );
};

export default LocationNew;
