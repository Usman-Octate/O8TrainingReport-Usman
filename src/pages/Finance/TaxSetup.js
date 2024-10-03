import React, { useState, useMemo } from "react";
import { Main, TopDivWrapper, TopDiv } from "../style";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import StatusButton from "../../components/buttons/StatusButton";
import Header from "../../components/parts/Header";
import TaxNew from "../../New-Screens/TaxNew";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";

const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}

const TaxSetup = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };

  const data = useMemo(() => [
    {
      id: "1",
      taxcode: "TX001",
      taxname: "VAT",
      taxrate: "15%",
      debitaccount: "1234",
      creditaccount: "5678",
      usdefault: "Yes",
      taxcalculation: "Percentage",
      applytotransaction: "Sales",
      startdate: "01 Jan 2024",
      subtax: "None",
      notes: "Standard VAT rate",
      enddate: "31 Dec 2024",
    },
    {
      id: "1",
      taxcode: "TX001",
      taxname: "VAT",
      taxrate: "15%",
      debitaccount: "1234",
      creditaccount: "5678",
      usdefault: "Yes",
      taxcalculation: "Percentage",
      applytotransaction: "Sales",
      startdate: "01 Jan 2024",
      subtax: "None",
      notes: "Standard VAT rate",
      enddate: "31 Dec 2024",
    },
    {
      id: "1",
      taxcode: "TX001",
      taxname: "VAT",
      taxrate: "15%",
      debitaccount: "1234",
      creditaccount: "5678",
      usdefault: "Yes",
      taxcalculation: "Percentage",
      applytotransaction: "Sales",
      startdate: "01 Jan 2024",
      subtax: "None",
      notes: "Standard VAT rate",
      enddate: "31 Dec 2024",
    },
    {
      id: "1",
      taxcode: "TX001",
      taxname: "VAT",
      taxrate: "15%",
      debitaccount: "1234",
      creditaccount: "5678",
      usdefault: "Yes",
      taxcalculation: "Percentage",
      applytotransaction: "Sales",
      startdate: "01 Jan 2024",
      subtax: "None",
      notes: "Standard VAT rate",
      enddate: "31 Dec 2024",
    },
    {
      id: "1",
      taxcode: "TX001",
      taxname: "VAT",
      taxrate: "15%",
      debitaccount: "1234",
      creditaccount: "5678",
      usdefault: "Yes",
      taxcalculation: "Percentage",
      applytotransaction: "Sales",
      startdate: "01 Jan 2024",
      subtax: "None",
      notes: "Standard VAT rate",
      enddate: "31 Dec 2024",
    },
    {
      id: "1",
      taxcode: "TX001",
      taxname: "VAT",
      taxrate: "15%",
      debitaccount: "1234",
      creditaccount: "5678",
      usdefault: "Yes",
      taxcalculation: "Percentage",
      applytotransaction: "Sales",
      startdate: "01 Jan 2024",
      subtax: "None",
      notes: "Standard VAT rate",
      enddate: "31 Dec 2024",
    },
    {
      id: "1",
      taxcode: "TX001",
      taxname: "VAT",
      taxrate: "15%",
      debitaccount: "1234",
      creditaccount: "5678",
      usdefault: "Yes",
      taxcalculation: "Percentage",
      applytotransaction: "Sales",
      startdate: "01 Jan 2024",
      subtax: "None",
      notes: "Standard VAT rate",
      enddate: "31 Dec 2024",
    },
    {
      id: "1",
      taxcode: "TX001",
      taxname: "VAT",
      taxrate: "15%",
      debitaccount: "1234",
      creditaccount: "5678",
      usdefault: "Yes",
      taxcalculation: "Percentage",
      applytotransaction: "Sales",
      startdate: "01 Jan 2024",
      subtax: "None",
      notes: "Standard VAT rate",
      enddate: "31 Dec 2024",
    },
    {
      id: "1",
      taxcode: "TX001",
      taxname: "VAT",
      taxrate: "15%",
      debitaccount: "1234",
      creditaccount: "5678",
      usdefault: "Yes",
      taxcalculation: "Percentage",
      applytotransaction: "Sales",
      startdate: "01 Jan 2024",
      subtax: "None",
      notes: "Standard VAT rate",
      enddate: "31 Dec 2024",
    },
  ], []);
 
  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "taxcode",
      header: "Tax Code",
    },
    {
      accessorKey: "taxname",
      header: "Tax Name",
    },
    {
      accessorKey: "taxrate",
      header: "Tax Rate",
    },
    {
      accessorKey: "debitaccount",
      header: "Debit Account",
    },
    {
      accessorKey: "creditaccount",
      header: "Credit Account",
    },
    {
      accessorKey: "usdefault",
      header: "US Default",
    },
    {
      accessorKey: "taxcalculation",
      header: "Tax Calculation",
    },
    {
      accessorKey: "applytotransaction",
      header: "Apply To Trans",
    },
    {
      accessorKey: "startdate",
      header: "Start Date",
    },
    {
      accessorKey: "subtax",
      header: "Sub Tax",
    },
    {
      accessorKey: "notes",
      header: "Notes",
    },
    {
      accessorKey: "enddate",
      header: "End Date",
    }
  ], []);
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
            title={"TAX SETUP"}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1001}
            navActive={"Tax Setup"}
          />
         <MRTTableListScreens
            columns={columns}
            data={data}
            LeftFirst="netTotal"
            LeftSecond="netTotalFC"
            RightFirst="totalAmount"
            RightSecond="totalAmountFC"
            FirstTitle="Total"
            SecondTitle="Total Amount"
            initialState={initialState}
            onAddNewClick={handleScreenChange}
          />
        </TopDiv>
      </TopDivWrapper>
    </Main>
  ) : (
    <TaxNew />
  );
};

export default TaxSetup;
//
//
