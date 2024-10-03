import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import Purchaseinputs from "../New-Screens/Sections/Purchaseinputs";
import TableDetails from "./Sections/TableDetails";
import StatusButton from "../components/buttons/StatusButton";
import Dotscell from "../components/Table/CustomCells/Dots";
import SupplierCell from "../components/Table/CustomCells/SupplierCell";
import CurrencyCell from "../components/Table/CustomCells/CurrencyCell";
import TotalAmount2 from "./Components/TotalAmount2";
import JornalTables from "./Sections/JornalTables";
import AmountCell from "../components/Table/CustomCells/AmountCell";
import TagsInput from "./Sections/TagsInput";
import ActivityPart from "./Sections/ActivityPart";
import NewScreensNav from "./Components/NewScreensNav";

const Grab = styled.div`
  /* display: flex; */
  width: 100%;
  /* height: 100vh; */
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
const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  width: 100%;
  height: 390px;
  border-radius: 8px;
  margin: auto;
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
const InputField = styled.textarea`
  border: 1px solid #dadbdf;
  resize: none;
  border-radius: 8px;
  padding-top: 10px;
  width: 98%;
  height: 160px;
  padding-left: 10px;
  outline: none;
  /* background-color: green; */
  /* padding-top: 10px; */
`;

const PurchaseInvoiceNew = () => {
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
  const Account = (p) => {
    return <AmountCell value={p.value} />;
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
      headerName: "Row No",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "startdate",
      headerName: "Item Code",
      // width: "160px",
      cellClass: "Center-Align",
      headerClass: "All-header",
    },
    {
      field: "postingdate",
      headerName: "Item Description",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "noofpo",
      headerName: "Item Quantity",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Uom",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },

    {
      field: "status",
      headerName: "Warehouse",
      // width: "160px",
      sortable: false,
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Unit Cost",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Discount Percentage",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Discount Amount",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Discount Amount(FC)",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Tax Code",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Tax Amount(FC)",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Line Total",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Dimension 1",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Dimension 2",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Dimension 3",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Sales Analysis Code",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Sales Analysis Code 1",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Sales Analysis Code 2",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Sales Analysis Code 3",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Cost Center 1",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Cost Center 2",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Cost Center 3",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Sales Analysis Code 1",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Sales Analysis Code 2",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Sales Analysis Code 3",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);
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
      headerName: "Transaction Type",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "reference",
      headerName: "Reference",

      // width: "160px",
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
    {
      field: "duedate",
      headerName: "Due Date",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "totalamount",
      headerName: "Total Amount",
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

  const [rowData5, setRowData5] = useState([
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
  const [colDefs5, setColDefs5] = useState([
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

  const Total = [
    { Label: "Net Total" },
    { Label: "Net Total (FC)" },
    { Label: "Document Discount" },
    { Label: "Total Tax" },
    { Label: "Total Amount" },
    { Label: "Total Amount (FC)" },
    { Label: "Amount Paid" },
    { Label: "Remaining Balance" },
  ];
  const Data = [
    { Amount: "$ 8,430.00" },
    { Amount: "$ 7,725.25" },
    { Amount: "$ 950.00" },
    { Amount: "$ 421.00" },
    { Amount: "$ 8,430.00" },
    { Amount: "$ 8,430.00" },
    { Amount: "$ 8,430.00" },
    { Amount: "$ 8,430.00" },
  ];

  const buttonsData = [
    { icon: "AddRow", title: "Add Row" },
    { icon: "Custom", title: "Customize" },
    { icon: "Import", title: "Import" },
  ];

  return (
    <Grab>
      <NewScreensNav
        height={"30%"}
        // OPTIONS
        first={"Purchase Invoice Details"}
        second={"Table Details"}
        third={"Attachments"}
        fourth={"Internal Notes"}
        fifth={"Cmmunication Logs"}
        sixth={"Linked Transactions"}
        seventh={"Activity"}
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
          title={"PURCHASE INVOICE"}
          firstNav={"Home"}
          secNav={"Procure to Pay"}
          thirdNav={"Transaction"}
          navActive={"Purchase Invoice"}
        />
        <HeaderNewButtons />
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
          <Purchaseinputs
            colName1={"Purchase Invoice No."}
            colName2={"Extra Ref No."}
            colName3={"Transaction Date"}
            colName4={"Posting Date"}
            colName5={"Due Date"}
            Title={"PURCHASE INVOICE DETAILS"}
            showInput={true}
          />
          <TableDetails
            rowData={rowData}
            colDefs={colDefs}
            buttons={buttonsData}
            name={"TABLE DETAILS"}
          />
          <Container>
            <div
              style={{
                marginLeft: "20px",
                marginTop: "11px",
                width: "100%",
              }}
            >
              <Tagline>Notes</Tagline>
              <InputField />
              <TagsInput />
            </div>
            <TotalAmount2 Data={Data} Total={Total} />
          </Container>
          <JornalTables
            Icon={"AttachIcon"}
            Title={"Attach"}
            Name={"ATTACHMENTS"}
            ColData={colDefs3}
            RowData={rowData3}
            button={"true"}
            ShowButton={false}
          />
          <JornalTables
            Icon={"AddNote"}
            Title={"Add Note"}
            Name={"INTERNAL NOTES"}
            ColData={colDefs2}
            RowData={rowData2}
            button={"true"}
            ShowButton={false}
          />
          <JornalTables
            Name={"COMMUNICATION LOGS"}
            ColData={colDefs5}
            RowData={rowData5}
            button={"false"}
            ShowButton={false}
          />
          <JornalTables
            Name={"LINKED TRANSACTIONS"}
            ColData={colDefs4}
            RowData={rowData4}
            button={"false"}
            ShowButton={false}
          />
          <ActivityPart ShowButton={false} />
        </Div>
      </Wrapper>
    </Grab>
  );
};

export default PurchaseInvoiceNew;
