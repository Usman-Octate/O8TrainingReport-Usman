import React, { useState } from "react";
import HeroSection from "../../../components/parts/Layout and Template/HeroSection";
import Header from "../../../components/parts/Header";
import LayoutNav from "../../../components/parts/LayoutNav";
import { useSelector } from "react-redux";
import {
  Wrapper2,
  Grab2,
  Main2,
  TopDivWrapper,
  TopDiv,
} from "../../OrderToCash/Layout&Template/Style";
import TabNavigation from "../../../New-Screens/Components/TabNavigation";
import NewScreensNav from "../../../New-Screens/Components/NewScreensNav";
import JornalTables from "../../../New-Screens/Sections/JornalTables";
import ActivityPart from "../../../New-Screens/Sections/ActivityPart";
import SupplierCell from "../../../components/Table/CustomCells/SupplierCell";
import CurrencyCell from "../../../components/Table/CustomCells/CurrencyCell";

const Main = () => {
  const [selected, setSelected] = useState(null);
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const OpenScreen = (value) => {
    setSelected(value);
    console.log(selected);
  };

  const Customer = (p) => {
    return <SupplierCell value={p.value} />;
  };
  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };

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
      headerName: "Screen Title",
      // width: "200px",
      cellRenderer: Customer,
      headerClass: "All-header",
    },
    {
      field: "creditnoteno",
      headerName: "Description",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "currency",
      cellRenderer: Currency,
      headerName: "IsDefault",

      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "transactiondate",
      headerName: "Data Created",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "postingdate",
      headerName: "Data Modified",
      // width: "140px",
      headerClass: "All-header",
    },
    {
      field: "duedate",
      headerName: "User",
      // width: "250px",
      headerClass: "All-header",
    },
    {
      field: "duedate",
      headerName: "Printer",
      // width: "250px",
      headerClass: "All-header",
    },
    {
      field: "contactname",
      headerName: "Status",
      // width: "150px",
      headerClass: "All-header",
    },
  ]);
  const [rowData, setRowData] = useState([
    {
      id: "1",
      customercode: "Sales Order",
      creditnoteno: "Sales Order",
      transactiondate: "Sales Order",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Order",
      creditnoteno: "Sales Order",
      transactiondate: "Sales Order",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Order",
      creditnoteno: "Sales Order",
      transactiondate: "Sales Order",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Order",
      creditnoteno: "Sales Order",
      transactiondate: "Sales Order",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Order",
      creditnoteno: "Sales Order",
      transactiondate: "Sales Order",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Order",
      creditnoteno: "Sales Order",
      transactiondate: "Sales Order",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
  ]);

  const [Data, setData] = useState([
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      creditnoteno: "Order001",
      transactiondate: "12 January 2024",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      creditnoteno: "Order001",
      transactiondate: "12 January 2024",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      creditnoteno: "Order001",
      transactiondate: "12 January 2024",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      creditnoteno: "Order001",
      transactiondate: "12 January 2024",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      creditnoteno: "Order001",
      transactiondate: "12 January 2024",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      creditnoteno: "Order001",
      transactiondate: "12 January 2024",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Revolution Cross Limited",
      creditnoteno: "Order001",
      transactiondate: "12 January 2024",
      postingdate: "12 January 2024",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
  ]);
  const [qoutes, setQoutes] = useState([
    {
      id: "1",
      customercode: "Sales Qoutes",
      creditnoteno: "Sales Qoutes",
      transactiondate: "Sales Qoutes",
      postingdate: "Sales Qoutes",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Qoutes",
      creditnoteno: "Sales Qoutes",
      transactiondate: "Sales Qoutes",
      postingdate: "Sales Qoutes",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Qoutes",
      creditnoteno: "Sales Qoutes",
      transactiondate: "Sales Qoutes",
      postingdate: "Sales Qoutes",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Qoutes",
      creditnoteno: "Sales Qoutes",
      transactiondate: "Sales Qoutes",
      postingdate: "Sales Qoutes",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Qoutes",
      creditnoteno: "Sales Qoutes",
      transactiondate: "Sales Qoutes",
      postingdate: "Sales Qoutes",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Qoutes",
      creditnoteno: "Sales Qoutes",
      transactiondate: "Sales Qoutes",
      postingdate: "Sales Qoutes",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Qoutes",
      creditnoteno: "Sales Qoutes",
      transactiondate: "Sales Qoutes",
      postingdate: "Sales Qoutes",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
  ]);

  const [delivery, setDelivery] = useState([
    {
      id: "1",
      customercode: "Delivery",
      creditnoteno: "Delivery",
      transactiondate: "Delivery",
      postingdate: "Delivery",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Delivery",
      creditnoteno: "Delivery",
      transactiondate: "Delivery",
      postingdate: "Delivery",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Delivery",
      creditnoteno: "Delivery",
      transactiondate: "Delivery",
      postingdate: "Delivery",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Delivery",
      creditnoteno: "Delivery",
      transactiondate: "Delivery",
      postingdate: "Delivery",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Delivery",
      creditnoteno: "Delivery",
      transactiondate: "Delivery",
      postingdate: "Delivery",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Delivery",
      creditnoteno: "Delivery",
      transactiondate: "Delivery",
      postingdate: "Delivery",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Delivery",
      creditnoteno: "Delivery",
      transactiondate: "Delivery",
      postingdate: "Delivery",
      duedate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
  ]);

  const [customer, setCustomer] = useState([
    {
      id: "1",
      customercode: "Customer Return",
      creditnoteno: "Customer Return",
      transactiondate: "Customer Return",
      postingdate: "Customer Return",
      duedate: "Customer Return",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Return",
      creditnoteno: "Customer Return",
      transactiondate: "Customer Return",
      postingdate: "Customer Return",
      duedate: "Customer Return",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Return",
      creditnoteno: "Customer Return",
      transactiondate: "Customer Return",
      postingdate: "Customer Return",
      duedate: "Customer Return",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Return",
      creditnoteno: "Customer Return",
      transactiondate: "Customer Return",
      postingdate: "Customer Return",
      duedate: "Customer Return",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Return",
      creditnoteno: "Customer Return",
      transactiondate: "Customer Return",
      postingdate: "Customer Return",
      duedate: "Customer Return",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Return",
      creditnoteno: "Customer Return",
      transactiondate: "Customer Return",
      postingdate: "Customer Return",
      duedate: "Customer Return",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Return",
      creditnoteno: "Customer Return",
      transactiondate: "Customer Return",
      postingdate: "Customer Return",
      duedate: "Customer Return",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
  ]);

  const [invoice, setInvoice] = useState([
    {
      id: "1",
      customercode: "Sales Invoice",
      creditnoteno: "Sales Invoice",
      transactiondate: "Sales Invoice",
      postingdate: "Sales Invoice",
      duedate: "Sales Invoice",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Invoice",
      creditnoteno: "Sales Invoice",
      transactiondate: "Sales Invoice",
      postingdate: "Sales Invoice",
      duedate: "Sales Invoice",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Invoice",
      creditnoteno: "Sales Invoice",
      transactiondate: "Sales Invoice",
      postingdate: "Sales Invoice",
      duedate: "Sales Invoice",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Invoice",
      creditnoteno: "Sales Invoice",
      transactiondate: "Sales Invoice",
      postingdate: "Sales Invoice",
      duedate: "Sales Invoice",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Invoice",
      creditnoteno: "Sales Invoice",
      transactiondate: "Sales Invoice",
      postingdate: "Sales Invoice",
      duedate: "Sales Invoice",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Invoice",
      creditnoteno: "Sales Invoice",
      transactiondate: "Sales Invoice",
      postingdate: "Sales Invoice",
      duedate: "Sales Invoice",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Sales Invoice",
      creditnoteno: "Sales Invoice",
      transactiondate: "Sales Invoice",
      postingdate: "Sales Invoice",
      duedate: "Sales Invoice",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
  ]);

  const [credit, setCredit] = useState([
    {
      id: "1",
      customercode: "Credit Note",
      creditnoteno: "Credit Note",
      transactiondate: "Credit Note",
      postingdate: "Credit Note",
      duedate: "Credit Note",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Credit Note",
      creditnoteno: "Credit Note",
      transactiondate: "Credit Note",
      postingdate: "Credit Note",
      duedate: "Credit Note",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Credit Note",
      creditnoteno: "Credit Note",
      transactiondate: "Credit Note",
      postingdate: "Credit Note",
      duedate: "Credit Note",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Credit Note",
      creditnoteno: "Credit Note",
      transactiondate: "Credit Note",
      postingdate: "Credit Note",
      duedate: "Credit Note",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Credit Note",
      creditnoteno: "Credit Note",
      transactiondate: "Credit Note",
      postingdate: "Credit Note",
      duedate: "Credit Note",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Credit Note",
      creditnoteno: "Credit Note",
      transactiondate: "Credit Note",
      postingdate: "Credit Note",
      duedate: "Credit Note",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Credit Note",
      creditnoteno: "Credit Note",
      transactiondate: "Credit Note",
      postingdate: "Credit Note",
      duedate: "Credit Note",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
  ]);

  const [payment, setPayment] = useState([
    {
      id: "1",
      customercode: "Customer Payment",
      creditnoteno: "Customer Payment",
      transactiondate: "Customer Payment",
      postingdate: "Customer Payment",
      duedate: "Customer Payment",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Payment",
      creditnoteno: "Customer Payment",
      transactiondate: "Customer Payment",
      postingdate: "Customer Payment",
      duedate: "Customer Payment",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Payment",
      creditnoteno: "Customer Payment",
      transactiondate: "Customer Payment",
      postingdate: "Customer Payment",
      duedate: "Customer Payment",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Payment",
      creditnoteno: "Customer Payment",
      transactiondate: "Customer Payment",
      postingdate: "Customer Payment",
      duedate: "Customer Payment",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Payment",
      creditnoteno: "Customer Payment",
      transactiondate: "Customer Payment",
      postingdate: "Customer Payment",
      duedate: "Customer Payment",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Payment",
      creditnoteno: "Customer Payment",
      transactiondate: "Customer Payment",
      postingdate: "Customer Payment",
      duedate: "Customer Payment",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
    {
      id: "1",
      customercode: "Customer Payment",
      creditnoteno: "Customer Payment",
      transactiondate: "Customer Payment",
      postingdate: "Customer Payment",
      duedate: "Customer Payment",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      amountfc: "$ 0.093963",
      contactname: "(888)538-6676",
      salesagent: "USD",
      shipping: "USD",
    },
  ]);
  const [activity, setActivity] = useState(["Data has been changed"]);

  const data = [
    "STOCK ADJUSTMENT",
    "STOCK TRANSFER",
    "PICK LIST & PACKAGING",
    "INSPECTION",
    "STOCK REVALUTION",
    "DEBIT NOTE",
    "SUPPLIER PAYMENT",
  ];

  return (
    <Main2>
      <NewScreensNav
        height={"30%"}
        // OPTIONS
        first={"Screen Layout"}
        second={"Forms Layout"}
        third={"Reports Layout"}
        fourth={"Email Templates"}
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
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={"LAYOUT & TEMPLATE"}
            firstNav={"Home"}
            secNav={"Prouct & Services"}
            navActive={"Layout & Template"}
          />
        </TopDiv>
      </TopDivWrapper>
      <div style={{ marginTop: "30px" }}>
        <TabNavigation TabName={data} />
      </div>
      <Grab2>
        {/* <LayoutNav
        title={"TRANSACTION LIST"}
        first={"Purchase Request"}
        second={"Purchase Order"}
        third={"Good Reciept Note"}
        fourth={"Return to Supplier"}
        fifth={"Purchase Invoice"}
        sixth={"Debit Note"}
        seventh={"Supplier Payment"}
        onOpenScreen={OpenScreen}
        color={themeKeys.primary}
        hoverColor={themeKeys.lightVersion}
      /> */}
        <Wrapper2>
          <JornalTables
            Icon={"AddBlue"}
            Title={"Add New"}
            Name={"SCREEN LAYOUT"}
            ColData={colDefs}
            RowData={rowData}
            button={"true"}
          />
          <JornalTables
            Icon={"AddBlue"}
            Title={"Add New"}
            Name={"FORMS LAYOUT"}
            ColData={colDefs}
            RowData={rowData}
            button={"true"}
          />
          <JornalTables
            Icon={"AddBlue"}
            Title={"Add New"}
            Name={"REPORTS LAYOUT"}
            ColData={colDefs}
            RowData={rowData}
            button={"true"}
          />
          <JornalTables
            Icon={"AddBlue"}
            Title={"Add New"}
            Name={"EMAIL TEMPLATES"}
            ColData={colDefs}
            RowData={rowData}
            button={"true"}
          />
          <ActivityPart ShowButton={true} />
        </Wrapper2>
      </Grab2>
    </Main2>
  );
};

export default Main;
