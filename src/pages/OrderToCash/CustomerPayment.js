import React, { useState } from "react";
import Header from "../../components/parts/Header";
import StatusButton from "../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv, TableMain } from "../style";
import CurrencyCell from "../../components/Table/CustomCells/CurrencyCell";
import SupplierCell from "../../components/Table/CustomCells/SupplierCell";
import Table from "../../components/TSTable/Table";
import PracticeScreen4 from "../../New-Screens/PracticeScreen4";
import NewTable from "../../components/TSTable/NewTable";
import PracticeScreen3 from "../../New-Screens/PracticeScreen3";
import PracticeScreen5 from "../../New-Screens/PracticeScreen5";

const CustomerPayment = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Customer = (p) => {
    return <SupplierCell value={p.value} />;
  };
  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };
  const [rowData, setRowData] = useState([
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      paymentreferenceno: "Order001",
      paymenttype: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amountpaid: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactperson: "+63 917 2732 21",
      advancepayment: "USD",
      project: "-",
      extraref: "-",
      depositidno: "-",
    },
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      paymentreferenceno: "Order001",
      paymenttype: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amountpaid: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactperson: "+63 917 2732 21",
      advancepayment: "USD",
      project: "-",
      extraref: "-",
      depositidno: "-",
    },
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      paymentreferenceno: "Order001",
      paymenttype: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amountpaid: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactperson: "+63 917 2732 21",
      advancepayment: "USD",
      project: "-",
      extraref: "-",
      depositidno: "-",
    },
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      paymentreferenceno: "Order001",
      paymenttype: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amountpaid: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactperson: "+63 917 2732 21",
      advancepayment: "USD",
      project: "-",
      extraref: "-",
      depositidno: "-",
    },
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      paymentreferenceno: "Order001",
      paymenttype: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amountpaid: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactperson: "+63 917 2732 21",
      advancepayment: "USD",
      project: "-",
      extraref: "-",
      depositidno: "-",
    },
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      paymentreferenceno: "Order001",
      paymenttype: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amountpaid: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactperson: "+63 917 2732 21",
      advancepayment: "USD",
      project: "-",
      extraref: "-",
      depositidno: "-",
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
      width: "80px",
      filter: false,
      headerClass: "id-cell",
    },
    {
      field: "customercode",
      headerName: "Customer",
      // width: "200px",
      cellRenderer: Customer,
      headerClass: "All-header",
    },
    {
      field: "paymentreferenceno",
      headerName: "Payment Reference No.",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "transactiondate",
      headerName: "Payment Type",

      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "transactiondate",
      headerName: "Transaction Date",

      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "transactiondate",
      headerName: "Posting Date",

      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "transactiondate",
      headerName: "Currency",
      cellRenderer: Currency,
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "transactiondate",
      headerName: "Amount Paid",

      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "Status",
      cellRenderer: Status,
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "contactperson",
      headerName: "Advance Payment",

      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "contactperson",
      headerName: "Project",

      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "paymenttype",
      headerName: "Extra Reference No.",

      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "transactiondate",
      headerName: "Deposit ID No.",
      // width: "160px",
      headerClass: "All-header",
    },
  ]);

  const keys = useSelector((state) => state.localization.keys);
  const [screen, setScreen] = useState(1);
  const handleScreenChange = () => {
    console.log("as");
    setScreen(2);
  };
  return screen === 1 ? (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100172}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1002}
            thirdNav={keys.KEY10011}
            navActive={keys.KEY100143}
          />
          {/* <AgGridTable
            rowData={rowData}
            colDefs={colDefs}
            header={true}
            Setheight={true}
            clickScreenChange={() => handleScreenChange()}
          /> */}
          <TableMain>
            <PracticeScreen4 />
          </TableMain>
        </TopDiv>
      </TopDivWrapper>
    </Main>
  ) : (
    // <PracticeScreen5/>
    // <div style={{}}>
    // <PracticeScreen3 />
    // </div>

    <PracticeScreen4/>
    // <NewTable/>
    // <Table />
  );
};

export default CustomerPayment;
