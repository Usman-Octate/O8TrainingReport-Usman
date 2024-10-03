import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import { useSelector } from "react-redux";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import DropdownInput from "../components/Inputs/DropdownInput";
import CalenderInput from "../components/Inputs/CalenderInput";
import Auto from "../assets2/ChartOfAccountNew/InputAuto.svg";
import LargeButton from "../components/buttons/LargeButton";
import TableDetails from "../New-Screens/Sections/TableDetails";
import JornalTables from "./Sections/JornalTables";
import ActivityPart from "./Sections/ActivityPart";
import Dotscell from "../components/Table/CustomCells/Dots";
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
    width: 88%;
  }
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 120px;
`;
const FirstCol = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 15px 0;
`;
const Text = styled.div`
  color: #464f60;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;
const Main = styled.div``;
const Tabs = styled.div`
  display: flex;
  /* align-items: center; */
`;
const Title2 = styled.div`
  color: ${(props) => (props.isActive ? props.txtColor : props.color)};
  font-size: 12px;
  font-weight: 700;
  height: 23px;
  text-align: center;
  margin: 0px 20px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isActive ? `3px solid ${props.txtColor}` : null};
`;
const Line2 = styled.div`
  background-color: #7f7f7f;
  width: 1px;
  height: 14px;
  border-radius: 10px;
`;
const Navigator = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
`;

const CashflowNew = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const TabName = ["CASH & BANK ACCOUNTS", "INFLOW", "OUTFLOW"];

  const defaultTab = "CASH & BANK ACCOUNTS";

  const [activeTab, setActiveTab] = useState(defaultTab);

  const HandleOnClick = (tab) => {
    setActiveTab(tab);
  };

  const getColor = (item) =>
    activeTab === item ? themeKeys.primary : themeKeys.c6;

  const ButtonData = [
    { icon: "Type", title: "Types" },
    { icon: "AddRow", title: "Add Row" },
    { icon: "Remove", title: "Remove" },
    { icon: "Import", title: "Import" },
    { icon: "Export", title: "Export" },
  ];

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

  // Cash Inflow Data

  const [rowData2, setRowData2] = useState([
    {
      id: "INFLOW",
      exchangedate: "INFLOW",
      basecurrency: "INFLOW",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "INFLOW",
      currencyexchange: "INFLOW",
      ratesource: "INFLOW",
    },
    {
      id: "INFLOW",
      exchangedate: "INFLOW",
      basecurrency: "INFLOW",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "INFLOW",
      currencyexchange: "INFLOW",
      ratesource: "INFLOW",
    },
    {
      id: "INFLOW",
      exchangedate: "INFLOW",
      basecurrency: "INFLOW",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "INFLOW",
      currencyexchange: "INFLOW",
      ratesource: "INFLOW",
    },
    {
      id: "INFLOW",
      exchangedate: "INFLOW",
      basecurrency: "INFLOW",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "INFLOW",
      currencyexchange: "INFLOW",
      ratesource: "INFLOW",
    },
    {
      id: "INFLOW",
      exchangedate: "INFLOW",
      basecurrency: "INFLOW",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "INFLOW",
      currencyexchange: "INFLOW",
      ratesource: "INFLOW",
    },
  ]);

  // Cash OutFlow Data

  const [rowData4, setRowData4] = useState([
    {
      id: "OUTFLOW",
      exchangedate: "OUTFLOW",
      basecurrency: "OUTFLOW",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "OUTFLOW",
      currencyexchange: "OUTFLOW",
      ratesource: "OUTFLOW",
    },
    {
      id: "OUTFLOW",
      exchangedate: "OUTFLOW",
      basecurrency: "OUTFLOW",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "OUTFLOW",
      currencyexchange: "OUTFLOW",
      ratesource: "OUTFLOW",
    },
    {
      id: "OUTFLOW",
      exchangedate: "OUTFLOW",
      basecurrency: "OUTFLOW",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "OUTFLOW",
      currencyexchange: "OUTFLOW",
      ratesource: "OUTFLOW",
    },
    {
      id: "OUTFLOW",
      exchangedate: "OUTFLOW",
      basecurrency: "OUTFLOW",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "OUTFLOW",
      currencyexchange: "OUTFLOW",
      ratesource: "OUTFLOW",
    },
    {
      id: "OUTFLOW",
      exchangedate: "OUTFLOW",
      basecurrency: "OUTFLOW",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "OUTFLOW",
      currencyexchange: "OUTFLOW",
      ratesource: "OUTFLOW",
    },
  ]);

  const [colDefs, setColDefs] = useState([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: "60px",
      resizable: false,
      filter: false,
      headerClass: "id-cell",
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
      headerName: "View",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basecurrency",
      headerName: "Type",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basesign",
      headerName: "Account Code",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "baserate",
      headerName: "Description",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "Include",
      headerName: "Jan",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "currencyexchange",
      headerName: "Balance",
      checkboxSelection: true,
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "Jan",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "Feb",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "Mar",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "Apr",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "May",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "June",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "July",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "Aug",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "Sept",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "Oct",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "Nov",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "Dec",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);

  // Activity Data

  const [rowData3, setRowData3] = useState([
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
  const [colDefs3, setColDefs3] = useState([
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
        height={"33%"}
        // OPTIONS
        first={"Cash Flow Details"}
        second={"Table Details"}
        third={"Attachments"}
        fourth={"Activity"}
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
          title={"CASH FLOW FORCAST"}
          firstNav={"Home"}
          secNav={"Finance"}
          fourthNav={"Cash Flow List"}
          navActive={"Cash Flow - New"}
        />
        <HeaderNewButtons />
      </Wrap>

      <Wrapper>
        {/* <AccountsSideNav
          title={"SECTION LIST"}
          first={"Cash Flow Details"}
          second={"Table Details"}
          third={"Attachments"}
          fourth={"Activity"}
        /> */}
        <Div>
          <TitleOfSection title={"CASH FLOW DETAILS"} />
          <Line />
          <Tag>
            <div>
              <FirstCol>
                <ChartAccountInput
                  Name={"Forcast Code"}
                  Hash="*"
                  Padding={true}
                  setWidth={"true"}
                  image={Auto}
                />
                <ChartAccountInput
                  Name="Description"
                  Padding={"P"}
                  setWidth={"false"}
                />
              </FirstCol>
              <FirstCol>
                <CalenderInput Name={"Posting Date"} width={true} />
                <DropdownInput
                  Name={"Transaction Type"}
                  Padding={false}
                  setWidth={false}
                />
                <DropdownInput
                  Name={"Currency"}
                  Padding={false}
                  setWidth={false}
                />
              </FirstCol>
              <FirstCol>
                <DropdownInput
                  Name={"Period Type"}
                  Padding={false}
                  setWidth={false}
                />
                <CalenderInput Name={"Period From"} width={true} />
                <CalenderInput Name={"Period To"} width={true} />
              </FirstCol>
            </div>
            <LargeButton name={"Active"} />
          </Tag>
          <Main>
            <Navigator>
              {TabName.map((item) => {
                return (
                  <Tabs>
                    <Title2
                      color={getColor()}
                      onClick={() => HandleOnClick(item)}
                      isActive={activeTab === item}
                      txtColor={themeKeys.primary}
                    >
                      {item}
                    </Title2>
                    <Line2 />
                  </Tabs>
                );
              })}
            </Navigator>
            <TableDetails
              colDefs={colDefs}
              rowData={
                activeTab === "CASH & BANK ACCOUNTS"
                  ? rowData
                  : activeTab === "INFLOW"
                  ? rowData2
                  : activeTab === "OUTFLOW"
                  ? rowData4
                  : rowData
              }
              buttons={ButtonData}
              name={
                activeTab === "CASH & BANK ACCOUNTS"
                  ? "CASH & BANK DETAILS"
                  : activeTab === "INFLOW"
                  ? "INFLOW"
                  : activeTab === "OUTFLOW"
                  ? "OUTFLOW"
                  : null
              }
            />
          </Main>
          <JornalTables
            Icon={"AttachIcon"}
            Title={"Attach"}
            Name={"ATTACHMENTS"}
            ColData={colDefs3}
            RowData={rowData3}
            button={"true"}
            ShowButton={false}
          />
          <ActivityPart ShowButton={false} />
        </Div>
      </Wrapper>
    </Grab>
  );
};

export default CashflowNew;
//
//
