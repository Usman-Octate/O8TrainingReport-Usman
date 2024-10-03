import React, { useState } from "react";
import Header from "../../../components/parts/Header";
import StatusButton from "../../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import AgGridTable from "../../../components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../../style";

const SupplierPayment = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const [rowData, setRowData] = useState([
    {
      id: "1",
      suppliercode: "Revolution Cross Limited",
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
      suppliercode: "Revolution Cross Limited",
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
      suppliercode: "Revolution Cross Limited",
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
      suppliercode: "Revolution Cross Limited",
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
      suppliercode: "Revolution Cross Limited",
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
      suppliercode: "Revolution Cross Limited",
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
      field: "suppliercode",
      headerName: "Supplier Code",
      // width: "200px",
      headerClass: "All-header",
    },
    {
      field: "paymentreferenceno",
      headerName: "Payment Reference No.",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "paymenttype",
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
      field: "postingdate",
      headerName: "Posting Date",
      // width: "140px",
      headerClass: "All-header",
    },
    {
      field: "currency",
      headerName: "Currency",
      // width: "250px",
      headerClass: "All-header",
    },
    {
      field: "amountpaid",
      headerName: "Amount Paid",
      // width: "150px",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "status",
      cellRenderer: Status,
      // width: "160px",
      sortable: false,
      headerClass: "All-header",
    },
    {
      field: "contactperson",
      headerName: "Advance Payment",
      // width: "160px",
      sortable: false,
      headerClass: "All-header",
    },
    {
      field: "project",
      headerName: "Project",
      // width: "160px",
      sortable: false,
      headerClass: "All-header",
    },
    {
      field: "extraref",
      headerName: "Extra Ref Number",
      // width: "160px",
      sortable: false,
      headerClass: "All-header",
    },
    {
      field: "depositidno",
      headerName: "Deposit ID No",
      // width: "160px",
      sortable: false,
      headerClass: "All-header",
    },
  ]);

  const keys = useSelector((state) => state.localization.keys);
  return (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100193}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1005}
            thirdNav={keys.KEY10011}
            navActive={keys.KEY10047}
          />
          <AgGridTable
            rowData={rowData}
            colDefs={colDefs}
            header={true}
            Setheight={true}
          />
        </TopDiv>
      </TopDivWrapper>
    </Main>
  );
};

export default SupplierPayment;
