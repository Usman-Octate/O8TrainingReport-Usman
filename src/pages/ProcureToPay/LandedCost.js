import React, { useState, useMemo } from "react";
import StatusButton from "../../components/buttons/StatusButton";
import Header from "../../components/parts/Header";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";
import SupplierCell from "../../components/Table/CustomCells/SupplierCell";
import CurrencyCell from "../../components/Table/CustomCells/CurrencyCell";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";

const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}


const LandedCost = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Supplier = (p) => {
    return <SupplierCell value={p.value} />;
  };
  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };


  const data = useMemo(() => [
    {
      id: "1",
      suppliercode: "SUP12345",
      agent: "John Doe",
      landedcostref: "LCREF67890",
      invoiceto: "Jane Doe",
      autoinvoice: "Yes",
      allocationtype: "Direct",
      transactiondate: "2024-07-01",
      postingdate: "2024-07-05",
      duedate: "2024-07-15",
      currency: "USD",
      totalamount: 1500.00,
      status: "Pending"
    }
  ], []);

  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "suppliercode",
      header: "Supplier Code",
    },
    {
      accessorKey: "agent",
      header: "Agent",
    },
    {
      accessorKey: "landedcostref",
      header: "Landed Cost Ref",
    },
    {
      accessorKey: "invoiceto",
      header: "Invoice To",
    },
    {
      accessorKey: "autoinvoice",
      header: "Auto Invoice",
    },
    {
      accessorKey: "allocationtype",
      header: "Allocation Type",
    },
    {
      accessorKey: "transactiondate",
      header: "Transaction Date",
    },
    {
      accessorKey: "postingdate",
      header: "Posting Date",
    },
    {
      accessorKey: "duedate",
      header: "Due Date",
    },
    {
      accessorKey: "currency",
      header: "Currency",
    },
    {
      accessorKey: "totalamount",
      header: "Total Amount",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    }
  ], []);

  const keys = useSelector((state) => state.localization.keys);

  return (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100176}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1003}
            navActive={keys.KEY100145}
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
            // onAddNewClick={handleScreenChange}
          />
        </TopDiv>
      </TopDivWrapper>
    </Main>
  );
};

export default LandedCost;
