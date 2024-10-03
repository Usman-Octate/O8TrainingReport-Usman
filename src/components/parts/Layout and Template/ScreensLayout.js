import React, { useState } from "react";
import AddButton from "../../buttons/AddButton";
import { useAppContext } from "../../../context/AppProvider";
import DropDown from "../../buttons/DropDown";
import SupplierCell from "../../../../src/components/Table/CustomCells/SupplierCell";
import CurrencyCell from "../../../components/Table/CustomCells/CurrencyCell";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import AgGridTable from "../../../components/Table/AgGridTable";
import {
  Image,
  Wrap,
  Wrapper,
  Title,
  Text,
  TitleSection,
  Btn,
  Section1,
  Main,
  Input2,
  Line,
} from "./Style";
import AgGridTable2 from "../../Table/AgGridTable2";

const ScreensLayout = ({
  TextColor,
  data,
  payment,
  credit,
  invoice,
  customer,
  delivery,
  qoutes,
  Data,
  defaultData,
}) => {
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
      field: "contactname",
      headerName: "Status",
      // width: "150px",
      headerClass: "All-header",
    },
  ]);
  const { click, OnChange } = useAppContext();
  return (
    <Wrapper>
      <Wrap>
        <TitleSection>
          <Image style={{ cursor: "pointer" }} onClick={OnChange}>
            {click ? (
              <DropDown icon={"ArrowDown"} />
            ) : (
              <DropDown icon={"ArrowRight"} />
            )}
          </Image>
          <Title color={TextColor}>SCREEN LAYOUT</Title>
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

      {click ? (
        <AgGridTable2
          rowData={
            data === "Sales Order"
              ? Data
              : data === "Sales Quotes"
              ? qoutes
              : data === "Delivery"
              ? delivery
              : data === "Customer Return"
              ? customer
              : data === "Sales Invoice"
              ? invoice
              : data === "Credit Note"
              ? credit
              : data === "Customer Payment"
              ? payment
              : defaultData
          }
          colDefs={colDefs}
        />
      ) : null}
      <Line />
    </Wrapper>
  );
};

export default ScreensLayout;
