import React, { useMemo, useState } from "react";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import JournalDetails from "./Components/HeroSections/JournalDetails";
import styled from "styled-components";
import ForexHerosection from "./Sections/InputSection";
import InputSection from "./Sections/InputSection";
import {
  Wrapper,
  Head,
  Title,
  Buttons,
  Title2,
  Input,
} from "../New-Screens/Components/HeroSections/Style";
import AddButton from "../components/buttons/AddButton";
import AgGridTable2 from "../components/Table/AgGridTable2";
import { useSelector } from "react-redux";
// import DropdownComp from "../components/Table/CustomCells/DropdownComp";
// import DropdownRenderer from "../New-Screens/Components/HeroSections/DropdownRenderer";
import AmountCell from "../components/Table/CustomCells/AmountCell";
import Dotscell from "../components/Table/CustomCells/Dots";
import RealGain from "../components/Table/CustomCells/RealGain";
import TagsInput from "./Sections/TagsInput";
import AmountTotal from "./Sections/AmountTotal";
import JornalTables from "./Sections/JornalTables";
import ActivityPart from "./Sections/ActivityPart";
import StatusButton from "../components/buttons/StatusButton";
import TableDetails from "./Sections/TableDetails";
import NewScreensNav from "./Components/NewScreensNav";

const Grab2 = styled.div`
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
const Wrapper2 = styled.div`
  display: flex;
  height: 100vh;
`;
const Div2 = styled.div`
  height: 80vh;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 20px;
`;
const Wrap2 = styled.div`
  padding: 0 10px;
`;
const HeroSection = styled.div``;

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  width: 100%;
  height: 255px;
  border-radius: 8px;
  margin: auto;
  /* padding: 20px 18px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  padding-bottom: 20px;
  margin-top: 10px;
`;
const Tagline = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #5f656f;
  width: 40px;
  height: 10px;
  text-align: center;
  position: relative;
  top: 5px;
  left: 17px;
  background-color: white;
`;
const InputField = styled.input`
  border: 1px solid #dadbdf;
  border-radius: 8px;
  padding-bottom: 65px;
  width: 98%;
  padding-left: 10px;
  outline: none;
  padding-top: 10px;
`;

const ForexReval = () => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const Dots = () => {
    return <Dotscell />;
  };

  const Cell = styled.div`
    width: 100px;
    overflow: hidden;
    white-space: nowrap; /* Prevent text wrapping */
    text-overflow: ellipsis; /* Truncate text with an ellipsis */
  `;
  const CellComponent = (props) => {
    return <Cell>{props.value}</Cell>;
  };
  const Account = (p) => {
    return <AmountCell value={p.value} />;
  };
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };

  const GainValue = (p) => {
    return <RealGain value={p.value} />;
  };

  const [rowData, setRowData] = useState([
    {
      id: "1",
      glaccount: "FH100012",
      rowdecription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Staight Commission",
      taxcode: "20%",
      taxammount: "0.093963",
      totalammount: "Sales Invoice",
      fctotalammount: "1,200,000.00",
      Project: "Dropdown",
      Division: "Dropdown",
      Department: "Dropdown",
      Account: "",
    },
    {
      id: "1",
      glaccount: "FH100012",
      rowdecription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Staight Commission",
      fccredit: "Percent",
      taxcode: "20%",
      taxammount: "0.093963",
      totalammount: "Sales Invoice",
      fctotalammount: "1,200,000",
      Project: "Dropdown",
      Division: "Dropdown",
      Department: "Dropdown",
      Account: "",
    },
    {
      id: "1",
      glaccount: "FH100012",
      rowdecription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Staight Commission",
      fccredit: "Percent",
      taxcode: "20%",
      taxammount: "0.093963",
      totalammount: "Sales Invoice",
      fctotalammount: "1,200,000",
      Project: "Dropdown",
      Division: "Dropdown",
      Department: "Dropdown",
      Account: "FH100012",
    },
    {
      id: "1",
      glaccount: "FH100012",
      rowdecription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Staight Commission",
      fccredit: "Percent",
      taxcode: "20%",
      taxammount: "0.093963",
      totalammount: "Sales Invoice",
      fctotalammount: "1,200,000",
      Project: "Dropdown",
      Division: "Dropdown",
      Department: "Dropdown",
      Account: "FH100012",
    },
    {
      id: "1",
      glaccount: "FH100012",
      rowdecription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Staight Commission",
      fccredit: "Percent",
      taxcode: "20%",
      taxammount: "0.093963",
      totalammount: "Sales Invoice",
      fctotalammount: "1,200,000",
      Project: "Dropdown",
      Division: "Dropdown",
      Department: "Dropdown",
      Account: "FH100012",
    },
    {
      id: "1",
      glaccount: "FH100012",
      rowdecription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Staight Commission",
      fccredit: "Percent",
      taxcode: "20%",
      taxammount: "0.093963",
      totalammount: "Sales Invoice",
      fctotalammount: "1,200,000",
      Project: "Dropdown",
      Division: "Dropdown",
      Department: "Dropdown",
      Account: "FH100012",
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
      field: "Account",
      headerName: "Reference No.",
      width: 210,
      // cellRenderer: DropdownRenderer,
      cellClass: "Center-Align",
      headerClass: "All-header",
      editable: true,
      // cellEditor: DropdownComp,
      cellEditorParams: {
        // cellRenderer: DropdownRenderer,
        values: [
          "Manifold Pressure",
          "Reservoir Pressure",
          "Bubble Point Pressure",
          "FBHP",
          "Liquid Rate",
          "Total Gas Rate",
          "Oil Rate",
          "Formation Gas Rate",
          "Limit Lift Meas Depth",
          "SG Formation Gas",
          "SG Water",
        ],
      },
    },

    {
      field: "rowdescription",
      headerName: "Date",
      // width: "160px",
      headerClass: "All-header",
      editable: true,
      cellClass: "Center-Align",
      cellEditor: "agLargeTextCellEditor",
      cellEditorPopup: true,
      cellRenderer: CellComponent,
    },
    {
      field: "debit",
      headerName: "Customer/Supplier",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "fcdebit",
      headerName: "Currency",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "fcdebit",
      headerName: "Rate",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "fccredit",
      headerName: "Forex Total",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "taxcode",
      headerName: "Total",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "taxammount",
      headerName: "New Rate",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "totalammmount",
      headerName: "Valuation Total",
      // width: "160px",
      sortable: false,
      headerClass: "All-header",
      editable: true,
      cellRenderer: Account,
      cellClass: "Center-Align",
    },
    {
      field: "fctotalammount",
      headerName: "Amount DIFF",
      // width: "160px",
      sortable: false,
      headerClass: "All-header ",
      editable: true,
      cellRenderer: Account,
      cellClass: "Center-Align",
    },
    {
      field: "fctotalammount",
      headerName: "Forex Gain/Loss Account",
      // width: "160px",
      sortable: false,
      headerClass: "All-header ",
      editable: true,
      cellRenderer: GainValue,
      cellClass: "Center-Align",
    },
  ]);

  // Internal Notes Data

  const [rowData2, setRowData2] = useState([
    {
      id: "1",
      user: "abak62@frepsalan.xyz",
      notedetails: "Waiting from approval Finance Manager",
      date: "12 January 2024",
      action: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
    },
    {
      id: "1",
      user: "abak62@frepsalan.xyz",
      notedetails: "Waiting from approval Finance Manager",
      date: "12 January 2024",
      action: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
    },
    {
      id: "1",
      user: "abak62@frepsalan.xyz",
      notedetails: "Waiting from approval Finance Manager",
      date: "12 January 2024",
      action: "12 January 2024",
      postingdate: "12 January 2024",
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
      field: "user",
      headerName: "User",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "notedetails",
      headerName: "Note Details",

      width: "500px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "date",
      headerName: "Date",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);

  // Attachments Data

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

  // Linked Transaction Data

  const [rowData4, setRowData4] = useState([
    {
      id: "1",
      transactiontype: "Reverse Journal Entry",
      reference: "Receipts 000237",
      date: "12 January 2024",
      duedate: "12 January 2024",
      totalamount: "$ 2,932.00",
      status: "Active",
    },
    {
      id: "1",
      transactiontype: "Reverse Journal Entry",
      reference: "Receipts 000237",
      date: "12 January 2024",
      duedate: "12 January 2024",
      totalamount: "$ 2,932.00",
      status: "Active",
    },
    {
      id: "1",
      transactiontype: "Reverse Journal Entry",
      reference: "Receipts 000237",
      date: "12 January 2024",
      duedate: "12 January 2024",
      totalamount: "$ 2,932.00",
      status: "Active",
    },
    {
      id: "1",
      transactiontype: "Reverse Journal Entry",
      reference: "Receipts 000237",
      date: "12 January 2024",
      duedate: "12 January 2024",
      totalamount: "$ 2,932.00",
      status: "Active",
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
      field: "transactiontype",
      headerName: "Date",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "reference",
      headerName: "Subject",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "date",
      headerName: "Sender",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "duedate",
      headerName: "Recipient",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "totalamount",
      headerName: "Comm Type",
      // width: "250px",
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
    { icon: "Custom", title: "Customize" },
    { icon: "Import", title: "Import" },
  ];

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
      filter: true,
      editable: true,
    };
  }, []);

  return (
    <Grab2>
      <NewScreensNav
        height={"30%"}
        // OPTIONS
        first={"Forex Revaluation Details"}
        second={"Table Details"}
        third={"Attachments"}
        fourth={"Internal Notes"}
        fifth={"Linked Transactions"}
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
      <Wrap2>
        <Header
          title={"FOREX REVALUATION"}
          firstNav={"Home"}
          secNav={"Finance"}
          thirdNav={"Transaction"}
          fourthNav={"Forex Revaluation"}
          navActive={"Forex Revaluation - New"}
        />
        <HeaderNewButtons />
      </Wrap2>

      <Wrapper2>
        {/* <AccountsSideNav
          title={"SECTION LIST"}
          first={"Revaluation Details"}
          second={"Table Details"}
          third={"Attachments"}
          fourth={"Internal Notes"}
          fifth={"Linked Transactions"}
          sixth={"Transaction Logs"}
          seventh={"Activity"}
        /> */}
        <Div2>
          <HeroSection>
            <InputSection
              title={"FOREX REVALUATION DETAILS"}
              firstInput={"Document Number"}
              secondInput={"Revaluation Date"}
              name={"Rate"}
            />
            <Wrapper>
              <TableDetails
                colDefs={colDefs}
                rowData={rowData}
                buttons={buttonsData}
                name={"TABLE DETAILS"}
              />
              <Container>
                <div
                  style={{
                    marginLeft: "20px",
                    marginTop: "15px",
                    width: "100%",
                  }}
                >
                  <Tagline>Notes</Tagline>
                  <InputField />
                  <TagsInput />
                </div>
                <AmountTotal />
              </Container>
              <JornalTables
                Icon={"AttachIcon"}
                Title={"Attach"}
                Name={"ATTACHMENTS"}
                ColData={colDefs3}
                RowData={rowData3}
                button={"true"}
              />
              <JornalTables
                Icon={"AddNote"}
                Title={"Add Note"}
                Name={"INTERNAL NOTES"}
                ColData={colDefs2}
                RowData={rowData2}
                button={"true"}
              />
              <JornalTables
                Name={"LINKED TRANSACTIONS"}
                ColData={colDefs4}
                RowData={rowData4}
                button={"false"}
              />
              <ActivityPart />
            </Wrapper>
          </HeroSection>
        </Div2>
      </Wrapper2>
    </Grab2>
  );
};

export default ForexReval;
