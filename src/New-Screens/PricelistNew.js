import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import JournalDetails from "./Components/HeroSections/JournalDetails";
import Auto from "../assets2/ChartOfAccountNew/InputAuto.svg";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import DropdownInput from "../components/Inputs/DropdownInput";
import CalenderInput from "../components/Inputs/CalenderInput";
import { useSelector } from "react-redux";
import LongDescriptionInput from "../components/Inputs/LongDiscriptionInput";
import LargeButton from "../components/buttons/LargeButton";
import CurrencyCell from "../components/Table/CustomCells/CurrencyCell";
import StatusButton from "../components/buttons/StatusButton";
import Dotscell from "../components/Table/CustomCells/Dots";
import SupplierCell from "../components/Table/CustomCells/SupplierCell";
import ActivityPart from "./Sections/ActivityPart";
import JornalTables from "./Sections/JornalTables";
import TableDetails from "./Sections/TableDetails";
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
const MainSec = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 85px;
`;

const PricelistNew = () => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };
  const Dots = () => {
    return <Dotscell />;
  };
  const Supplier = (p) => {
    return <SupplierCell value={p.value} />;
  };

  const [rowData, setRowData] = useState([
    {
      id: "1",
      exchangedate: "$ 100.00",
      basecurrency: "$ 180.00",
      basesign: "Base Price",
      baserate: "Increase by Amount",
      exchangerate: "100%",
      currencyexchange: "$ 100.00",
      ratesource: "$ 180.00",
    },
    {
      id: "2",
      exchangedate: "$ 100.00",
      basecurrency: "$ 180.00",
      basesign: "Base Price",
      baserate: "Increase by Amount",
      exchangerate: "100%",
      currencyexchange: "$ 100.00",
      ratesource: "$ 180.00",
    },
    {
      id: "3",
      exchangedate: "$ 100.00",
      basecurrency: "$ 180.00",
      basesign: "Base Price",
      baserate: "Increase by Amount",
      exchangerate: "100%",
      currencyexchange: "$ 100.00",
      ratesource: "$ 180.00",
    },
    {
      id: "4",
      exchangedate: "$ 100.00",
      basecurrency: "$ 180.00",
      basesign: "Base Price",
      baserate: "Increase by Amount",
      exchangerate: "100%",
      currencyexchange: "$ 100.00",
      ratesource: "$ 180.00",
    },
    {
      id: "5",
      exchangedate: "$ 100.00",
      basecurrency: "$ 180.00",
      basesign: "Base Price",
      baserate: "Increase by Amount",
      exchangerate: "100%",
      currencyexchange: "$ 100.00",
      ratesource: "$ 180.00",
    },
    {
      id: "6",
      exchangedate: "$ 100.00",
      basecurrency: "$ 180.00",
      basesign: "Base Price",
      baserate: "Increase by Amount",
      exchangerate: "100%",
      currencyexchange: "$ 100.00",
      ratesource: "$ 180.00",
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
      headerName: "Items",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
      cellRenderer: Supplier,
    },
    {
      field: "Latest Cost",
      headerName: "Sign",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basesign",
      headerName: "Based Price",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "baserate",
      headerName: "Calculation Based On",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exchangerate",
      headerName: "Calculation Type",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "currencyexchange",
      headerName: "Percentage",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "Amount",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "New Price",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      headerName: "Lock",
      checkboxSelection: true,
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);

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

  const [rowData2, setRowData2] = useState([
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "Active",
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
      postingdate: "Inactive",
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
      postingdate: "Active",
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
      postingdate: "Active",
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
      postingdate: "Active",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
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
      cellClass: "Center-Align",
    },
    {
      field: "blanketorderno",
      headerName: "Reference Number",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "purchaser",
      headerName: "Posting Date",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "startdate",
      headerName: "Updated By",
      // width: "160px",
      cellClass: "Center-Align",
      headerClass: "All-header",
    },
    {
      field: "postingdate",
      headerName: "Status",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);
  const buttonsData = [
    { icon: "SearchIcon", title: "Select Items" },
    { icon: "Import", title: "Import" },
  ];

  return (
    <Grab>
      <NewScreensNav
        height={"30%"}
        // OPTIONS
        first={"Customer Price Details"}
        second={"Table Details"}
        third={"Update History"}
        fourth={"Attachments"}
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
      <Wrap>
        <Header
          title={"CUSTOMER PRICE LIST"}
          firstNav={"Home"}
          secNav={"Order to Cash"}
          // thirdNav={"Transaction"}
          fourthNav={"Customer Price List"}
          navActive={"Customer Price - New"}
        />
        <HeaderNewButtons State={true} />
      </Wrap>

      <Wrapper>
        {/* <AccountsSideNav
          title={"SECTION LIST"}
          first={"Price List Details"}
          second={"Table Details"}
          third={"Attachments"}
          fourth={"Activity"}
        /> */}
        <Div>
          <TitleOfSection title={"CUSTOMER PRICE DETAILS"} />
          <Line />
          <MainSec>
            <Main>
              <FirstCol>
                <ChartAccountInput
                  Name={"Price List Code"}
                  Hash="*"
                  Padding={true}
                  setWidth={"true"}
                  image={Auto}
                />
                <ChartAccountInput
                  Name={"Price List Name"}
                  Padding={true}
                  setWidth={"true"}
                />
                <CalenderInput Name={"Posting Date"} width={true} />
                <CalenderInput Name={"Last Update On"} width={true} />
              </FirstCol>
              <FirstCol>
                <DropdownInput
                  Name={"Calculation Based On"}
                  Padding={false}
                  setWidth={false}
                />
                <DropdownInput
                  Name={"Calculation Type"}
                  Padding={false}
                  setWidth={false}
                />
                <ChartAccountInput
                  Name={"Percentage"}
                  Padding={true}
                  setWidth={"true"}
                />
                <ChartAccountInput
                  Name={"Amount"}
                  Padding={true}
                  setWidth={"true"}
                />
              </FirstCol>
              <FirstCol>
                <div style={{ width: "20vw" }}>
                  <LongDescriptionInput Name={"Notes"} setHeight={"comment"} />
                </div>
              </FirstCol>
            </Main>
            <LargeButton name={"Active"} />
          </MainSec>
          <TableDetails
            rowData={rowData}
            colDefs={colDefs}
            buttons={buttonsData}
            name={"TABLE DETAILS"}
          />
          <JornalTables
            Name={"UPDATE HISTORY"}
            ColData={colDefs2}
            RowData={rowData2}
            button={"false"}
            ShowButton={true}
          />
          <JornalTables
            Icon={"AttachIcon"}
            Title={"Attach"}
            Name={"ATTACHMENTS"}
            ColData={colDefs3}
            RowData={rowData3}
            button={"true"}
            ShowButton={true}
          />
          <ActivityPart ShowButton={true} />
        </Div>
      </Wrapper>
    </Grab>
  );
};

export default PricelistNew;
//
//
