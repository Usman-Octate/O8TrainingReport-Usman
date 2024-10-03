import React, { useState } from "react";
import AddButton from "../../../components/buttons/AddButton";
import StatusButton from "../../../components/buttons/StatusButton";
import { useAppContext } from "../../../context/AppProvider";
import DropDown from "../../../components/buttons/DropDown";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import AgGridTable from "../../../components/Table/AgGridTable";
import SupplierCell from "../../../../src/components/Table/CustomCells/SupplierCell";
import CurrencyCell from "../../../components/Table/CustomCells/CurrencyCell";
import {
  Grab,
  Line,
  Wrapper,
  TitleSection,
  Title,
  Btn,
  Section1,
  Input2,
  Main,
  Wrap,
  Image,
} from "./Style";
import { useSelector } from "react-redux";

const CustomerPay = ({ setColor }) => {
  const [view, setView] = useState(true);

  const HandleOnChange = () => {
    setView(!view);
  };

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
      headerName: "Customer Code",
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
      cellRenderer: Currency,
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
      headerName: "Status",
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
    <Wrapper>
      <Wrap>
        <TitleSection>
          <Image style={{ cursor: "pointer" }} onClick={HandleOnChange}>
            {view ? (
              <DropDown icon={"ArrowDown"} />
            ) : (
              <DropDown icon={"ArrowRight"} />
            )}
          </Image>
          <Title textColor={setColor}>{keys.KEY100172}</Title>
          <Btn>
            <AddButton icon="AddBackgroundBlue" title="Add New" height={true} />
          </Btn>
        </TitleSection>
        <Section1>
          <Main>
            <Input2 placeholder="Search..." />
          </Main>
        </Section1>
      </Wrap>

      {view ? (
        <Grab>
          <AgGridTable
            rowData={rowData}
            colDefs={colDefs}
            header={false}
            Setheight={false}
          />
        </Grab>
      ) : null}
      <Line />
    </Wrapper>
  );
};

export default CustomerPay;
