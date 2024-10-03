import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import JournalDetails from "./Components/HeroSections/JournalDetails";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import CalenderInput from "../components/Inputs/CalenderInput";
import DropdownInput from "../components/Inputs/DropdownInput";
import LongDescriptionInput from "../components/Inputs/LongDiscriptionInput";
import Auto from "../assets2/ChartOfAccountNew/InputAuto.svg";
import { useSelector } from "react-redux";
import LargeButton from "../components/buttons/LargeButton";
import Dotscell from "../components/Table/CustomCells/Dots";
import JornalTables from "./Sections/JornalTables";
import ActivityPart from "./Sections/ActivityPart";
import StatusButton from "../components/buttons/StatusButton";
import TitleOfSection from "./Components/TitleOfSection";
import NewScreensNav from "./Components/NewScreensNav";

const Grab = styled.div`
  /* display: flex; */
  width: 100%;
  /* height: 100vh; */
`;
const Wrapit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 430px) {
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const Div = styled.div`
  height: 80vh;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 20px;
`;
const Wrap = styled.div`
  padding: 0 10px;
`;
const Main = styled.div`
  display: flex;
  gap: 20px;
`;
const FirstCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
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
  margin-top: 10px;
  height: 0.5px;
  width: 100%;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;
const Tag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const ThirdCol = styled.div``;

const SalesAgentNew = () => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const Dots = () => {
    return <Dotscell />;
  };

  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };

  const [rowData, setRowData] = useState([
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
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
      headerName: "Title",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basecurrency",
      headerName: "Commission Type",
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
      exchangerate: "Open",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "Open",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "Open",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "Open",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "Open",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "Open",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
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
      headerName: "Fiscal Year",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basesign",
      headerName: "Total Commission",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "baserate",
      headerName: "Status",
      // width: "250px",
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
      exchangerate: "Open",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "Open",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "Open",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "Open",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "Open",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "Open",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "Posted",
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
      field: "baserate",
      headerName: "Status",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);

  const [rowData4, setRowData4] = useState([
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
      status: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
      status: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
      status: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
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
      cellClass: "Center-Align",
    },
    {
      field: "blanketorderno",
      headerName: "Document No.",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "purchaser",
      headerName: "Document Name",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "startdate",
      headerName: "Issue Date",
      // width: "160px",
      cellClass: "Center-Align",
      headerClass: "All-header",
    },
    {
      field: "postingdate",
      headerName: "Expiry Date",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "noofpo",
      headerName: "Attached By",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Notes",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },

    {
      field: "status",
      headerName: "Status",
      cellRenderer: Status,
      // width: "160px",
      sortable: false,
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);

  return (
    <Grab>
      <NewScreensNav
        height={"30%"}
        // OPTIONS
        first={"Sales Agent Details"}
        second={"Tiered Comission"}
        third={"Comission"}
        fourth={"Transactions"}
        fifth={"Attachments"}
        sixth={"Activity"}
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
      <Wrap>
        <Header
          title={"SALES AGENTS"}
          firstNav={"Home"}
          secNav={"O2C"}
          thirdNav={"Sales Agents"}
          navActive={"Sales Agents - New"}
        />
        <HeaderNewButtons State={true} />
      </Wrap>

      <Wrapper>
        {/* <AccountsSideNav
          title={"SECTION LIST"}
          first={"Sales Agent Details"}
          second={"Tiered Comission"}
          third={"Commisions"}
          fourth={"Transaction"}
          fifth={"Attachments"}
          sixth={"Activity"}
        /> */}
        <Div>
          <TitleOfSection title={"SALES AGENT DETAILS"} />
          <Line />
          <Tag>
            <Main>
              <FirstCol>
                <ChartAccountInput
                  Name={"Currency Code"}
                  Hash="*"
                  Padding={true}
                  setWidth={"true"}
                  image={Auto}
                />
                <ChartAccountInput
                  Name={"Sales Agent Name"}
                  Padding={true}
                  setWidth={"true"}
                />
                <ChartAccountInput
                  Name={"Email Address"}
                  Padding={true}
                  setWidth={"true"}
                />
                <ChartAccountInput
                  Name={"Phone Number"}
                  Padding={true}
                  setWidth={"true"}
                />
              </FirstCol>
              <FirstCol>
                <DropdownInput
                  Name={"Commission Cyle"}
                  Padding={false}
                  setWidth={false}
                />
                <DropdownInput
                  Name={"Commission Structure"}
                  Padding={false}
                  setWidth={false}
                />
                <DropdownInput
                  Name={"Commission Type"}
                  Padding={false}
                  setWidth={false}
                />
                <ChartAccountInput
                  Name={"Threshold"}
                  Padding={true}
                  setWidth={"true"}
                />
              </FirstCol>
              <FirstCol>
                <DropdownInput
                  Name={"Commission Based On"}
                  Padding={false}
                  setWidth={false}
                />
                <CalenderInput Name={"Start Date"} width={true} />
                <ChartAccountInput
                  Name={"Percentage/Amount"}
                  Padding={true}
                  setWidth={"true"}
                />
                <ChartAccountInput
                  Name={"Sales Target"}
                  Padding={true}
                  setWidth={"true"}
                />
              </FirstCol>
              <ThirdCol>
                <div style={{ width: "20vw" }}>
                  <LongDescriptionInput Name={"Notes"} setHeight={"comment"} />
                </div>
              </ThirdCol>
            </Main>
            <LargeButton name={"Active"} />
          </Tag>
          <JornalTables
            Icon={"GreyAdd"}
            Title={"Add New"}
            Name={"TIERED COMISSION"}
            ColData={colDefs}
            RowData={rowData}
            button={"true"}
            ShowButton={true}
          />
          <JornalTables
            Icon={"Calculate"}
            Title={"Calculate"}
            Name={"COMMISSION"}
            ColData={colDefs2}
            RowData={rowData2}
            button={"true"}
            ShowButton={true}
          />
          <JornalTables
            Name={"TRANSACTIONS"}
            ColData={colDefs3}
            RowData={rowData3}
            button={"false"}
            ShowButton={true}
          />
          <JornalTables
            Icon={"AttachIcon"}
            Title={"Attach"}
            Name={"ATTACHMENTS"}
            ColData={colDefs4}
            RowData={rowData4}
            button={"true"}
            ShowButton={true}
          />
          <ActivityPart ShowButton={true} />
        </Div>
      </Wrapper>
    </Grab>
  );
};

export default SalesAgentNew;
