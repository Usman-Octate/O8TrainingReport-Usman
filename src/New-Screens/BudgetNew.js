import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import { useSelector } from "react-redux";
import Auto from "../assets2/ChartOfAccountNew/InputAuto.svg";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import CalenderInput from "../components/Inputs/CalenderInput";
import DropdownInput from "../components/Inputs/DropdownInput";
import LargeButton from "../components/buttons/LargeButton";
import Dotscell from "../components/Table/CustomCells/Dots";
import JornalTables from "./Sections/JornalTables";
import StatusButton from "../components/buttons/StatusButton";
import ActivityPart from "./Sections/ActivityPart";
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
  margin-right: 4%;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #5f656f;
  width: 140px;
`;
const Check = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 14px;
`;
const InputSec = styled.div`
  display: flex;
  gap: 20px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Wrap2 = styled.div`
  margin-top: 20px;
`;
const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const FisrtCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const SecondCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const ThirdCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BudgetNew = () => {
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
      headerName: "Account Code",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basecurrency",
      headerName: "Account Description",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basesign",
      headerName: "Allow Exceed",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "baserate",
      headerName: "Actual Total",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exchangerate",
      headerName: "Jan",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "currencyexchange",
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
      headerName: "Jun",
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
    { icon: "Export", title: "Export" },
    { icon: "Import", title: "Import" },
    { icon: "AttachIcon", title: "Attach" },
  ];

  return (
    <Grab>
      <NewScreensNav
        height={"33%"}
        // OPTIONS
        first={"Budget Details"}
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
          title={"BUDGET"}
          firstNav={"Home"}
          secNav={"Finance"}
          thirdNav={"Transaction"}
          fourthNav={"Budget List"}
          navActive={"Budget - New"}
        />
        <HeaderNewButtons />
      </Wrap>

      <Wrapper>
        {/* <AccountsSideNav
          title={"SECTION LIST"}
          first={"Budget Details"}
          second={"Table Details"}
          third={"Attachments"}
          fourth={"Activity"}
        /> */}
        <Div>
          <TitleOfSection title={"BUDGET DETAILS"} />
          <Line />
          <Tag>
            <InputSec>
              <FisrtCol>
                <ChartAccountInput
                  Name={"Budget Code"}
                  Padding={true}
                  setWidth={"true"}
                  image={Auto}
                  Hash="*"
                />
                <ChartAccountInput
                  Name={"Description"}
                  Padding={true}
                  setWidth={"true"}
                />
                <CalenderInput Name={"Posting Date"} width={true} />
                <DropdownInput
                  Name={"Budget Type"}
                  Padding={false}
                  setWidth={"lonsqwsg"}
                />
              </FisrtCol>
              <SecondCol>
                <DropdownInput
                  Name={"Currency"}
                  Padding={false}
                  setWidth={"lonsqwsg"}
                />
                <DropdownInput
                  Name={"Frequency"}
                  Padding={false}
                  setWidth={"lonsqwsg"}
                />
                <DropdownInput
                  Name={"Period From"}
                  Padding={false}
                  setWidth={"lonsqwsg"}
                />
                <DropdownInput
                  Name={"Period to"}
                  Padding={false}
                  setWidth={"lonsqwsg"}
                />
              </SecondCol>
              <ThirdCol>
                <Check>
                  <Text>Allow Budget to Exceed</Text>
                  <Checkbox type="checkbox" />
                </Check>
                <ChartAccountInput
                  Name={"Variance %"}
                  Padding={true}
                  setWidth={"ld32d3"}
                  insertFromRight={true}
                />
              </ThirdCol>
            </InputSec>
            <LargeButton name={"Active"} />
          </Tag>
          <Wrap2>
            <TableDetails
              rowData={rowData}
              colDefs={colDefs}
              buttons={buttonsData}
              name={"TABLE DETAILS"}
            />
          </Wrap2>
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

export default BudgetNew;
//
//
