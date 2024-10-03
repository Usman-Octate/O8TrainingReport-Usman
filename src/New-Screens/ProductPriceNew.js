import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import NewScreensNav from "./Components/NewScreensNav";
import TitleOfSection from "./Components/TitleOfSection";
import Auto from "../assets2/ChartOfAccountNew/InputAuto.svg";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import CalenderInput from "../components/Inputs/CalenderInput";
import DropdownInput from "../components/Inputs/DropdownInput";
import LongDescriptionInput from "../components/Inputs/LongDiscriptionInput";
import LargeButton from "../components/buttons/LargeButton";
import TableDetails from "./Sections/TableDetails";
import Dotscell from "../components/Table/CustomCells/Dots";
import SupplierCell from "../components/Table/CustomCells/SupplierCell";
import JornalTables from "./Sections/JornalTables";
import ActivityPart from "./Sections/ActivityPart";

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
  padding: 0 10px;
`;
const Wrap = styled.div`
  padding: 0 10px;
`;
const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;
const FirstCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const Util = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-right: 10%;
`;
const Main = styled.div`
  display: flex;
  gap: 30px;
`;
const ThirdCol = styled.div``;

const ProductPriceNew = () => {
  const buttonsData = [
    { icon: "SearchIcon", title: "Select Items" },
    { icon: "Import", title: "Import" },
  ];
  const Dots = () => {
    return <Dotscell />;
  };
  const Supplier = (p) => {
    return <SupplierCell value={p.value} />;
  };

  const [rowData, setRowData] = useState([
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",

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
      field: "blanketorderno",
      headerName: "ID",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "purchaser",
      headerName: "Items",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
      cellRenderer: Supplier,
    },
    {
      field: "startdate",
      headerName: "Product Group",
      // width: "160px",
      cellClass: "Center-Align",
      headerClass: "All-header",
      cellRenderer: Supplier,
    },
    {
      field: "postingdate",
      headerName: "Latest Cost",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "noofpo",
      headerName: "Base Price",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Calculation Based On",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },

    {
      field: "status",
      headerName: "Calculation Type",
      // width: "160px",
      sortable: false,
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Percentage",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Amount",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "New Price",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Lock",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
      checkboxSelection: true,
    },
  ]);

  const [rowData2, setRowData2] = useState([
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",

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
        first={"Price List Details"}
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
          title={"PRICE LIST"}
          firstNav={"Home"}
          secNav={"Product & Services"}
          fourthNav={"Price List List"}
          navActive={"Price List - New"}
        />
        <HeaderNewButtons State={true} x />
      </Wrap>

      <Wrapper>
        {/* <AccountsSideNav
        title={"SECTION LIST"}
        first={"Journal Entry Details"}
        second={"Table Details"}
        third={"Attachments"}
        fourth={"Internal Notes"}
        fifth={"Linked Transactions"}
        sixth={"Activity"}
      /> */}
        <Div>
          <TitleOfSection title={"PRICE LIST"} />
          {/* <Title id="section1" txtColor={themeKeys.primary}>
                {"SALES QUOTATION DETAILS"} */}

          <Line />
          <Util>
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
              <ThirdCol>
                <div style={{ width: "20vw" }}>
                  <LongDescriptionInput Name={"Notes"} setHeight={"comment"} />
                </div>
              </ThirdCol>
            </Main>
            <LargeButton name={"Active"} />
          </Util>
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
            button={"truswqsqe"}
            ShowButton={false}
          />
          <JornalTables
            Icon={"AttachIcon"}
            Title={"Attach"}
            Name={"ATTACHMENTS"}
            ColData={colDefs3}
            RowData={rowData3}
            button={"true"}
            ShowButton={false}
          />
          <ActivityPart ShowButton={true} />
        </Div>
      </Wrapper>
    </Grab>
  );
};

export default ProductPriceNew;
