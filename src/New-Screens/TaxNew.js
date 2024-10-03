import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import DropdownInput from "../components/Inputs/DropdownInput";
import Auto from "../assets2/ChartOfAccountNew/InputAuto.svg";
import ToggleButton from "../New-Screens/Sections/ToggleButton";
import LongDescriptionInput from "../components/Inputs/LongDiscriptionInput";
import { useSelector } from "react-redux";
import LargeButton from "../components/buttons/LargeButton";
import JornalTables from "./Sections/JornalTables";
import CurrencyCell from "../components/Table/CustomCells/CurrencyCell";
import StatusButton from "../components/buttons/StatusButton";
import Dotscell from "../components/Table/CustomCells/Dots";
import SupplierCell from "../components/Table/CustomCells/SupplierCell";
import ActivityPart from "./Sections/ActivityPart";
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
const Check = styled.input`
  width: 16px;
  height: 16px;
`;
const Text = styled.div`
  color: #464f60;
  font-size: 12px;
  font-weight: 700;
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
const ThirdCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;
const MainSec = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 85px;
`;

const TaxNew = () => {
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
      headerName: "Tax Code",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exhchangedate",
      headerName: "Condition",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basecurrency",
      headerName: "Sign",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basesign",
      headerName: "Value",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "baserate",
      headerName: "Rate",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exchangerate",
      headerName: "Debit Account",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
      cellRenderer: Supplier,
    },
    {
      field: "currencyexchange",
      headerName: "Credit Account",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
      cellRenderer: Supplier,
    },
    {
      field: "ratesource",
      headerName: "Status",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
      cellRenderer: Status,
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
  const buttonsData = [
    { icon: "AddRow", title: "Add Row" },
    { icon: "Remove", title: "Remove" },
  ];

  return (
    <Grab>
      <NewScreensNav
        height={"33%"}
        // OPTIONS
        first={"Tax Details"}
        second={"Sub Tax Setup"}
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
          title={"TAX LIST"}
          firstNav={"Home"}
          secNav={"Finance"}
          thirdNav={"Tax List"}
          navActive={"Tax - New"}
        />
        <HeaderNewButtons State={true} />
      </Wrap>

      <Wrapper>
        {/* <AccountsSideNav
          title={"SECTION LIST"}
          first={"Tax Details"}
          second={"Attachments"}
          third={"Transactions"}
          fourth={"Activity"}
        /> */}
        <Div>
          <TitleOfSection title={"TAX DETAILS"} />
          <Line />
          <MainSec>
            <Main>
              <FirstCol>
                <ChartAccountInput
                  Name={"Tax Code"}
                  Hash="*"
                  Padding={true}
                  setWidth={"true"}
                  image={Auto}
                />
                <ChartAccountInput
                  Name={"Tax Name"}
                  Hash="*"
                  Padding={true}
                  setWidth={"true"}
                />
                <ChartAccountInput
                  Name={"Tax Rate"}
                  Padding={true}
                  setWidth={"true"}
                  insertFromRight={true}
                />
                <DropdownInput
                  Name={"Debit Account"}
                  Padding={false}
                  setWidth={false}
                />
                <DropdownInput
                  Name={"Credit Account"}
                  Padding={false}
                  setWidth={false}
                />
              </FirstCol>
              <FirstCol>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "68px",
                    height: "40px",
                  }}
                >
                  <Text>Is Default Tax</Text>
                  <Check type="checkbox" />
                </div>
                <DropdownInput
                  Name={"Tax Calculation"}
                  Padding={false}
                  setWidth={false}
                />
                <DropdownInput
                  Name={"Apply To Transaction"}
                  Padding={false}
                  setWidth={false}
                />
                <ChartAccountInput
                  Name={"Start Date"}
                  Padding={true}
                  setWidth={"true"}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    height: "40px",
                  }}
                >
                  <Text>Enable Sub Tax</Text>
                  <ToggleButton />
                </div>
              </FirstCol>
              <ThirdCol>
                <div style={{ width: "20vw" }}>
                  <LongDescriptionInput Name={"Notes"} setHeight={"comment"} />
                </div>
                <ChartAccountInput
                  Name={"End Date"}
                  Padding={true}
                  setWidth={"true"}
                />
              </ThirdCol>
            </Main>
            <LargeButton name={"Active"} />
          </MainSec>
          <JornalTables
            Icon={"GreyAdd"}
            Title={"Add New"}
            Name={"SUB TAX SETUP"}
            ColData={colDefs}
            RowData={rowData}
            button={"true"}
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

export default TaxNew;
//
//
