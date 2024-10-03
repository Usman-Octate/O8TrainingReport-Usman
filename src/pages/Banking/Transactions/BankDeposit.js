import React, { useState, useMemo } from "react";
import Header from "../../../components/parts/Header";
import StatusButton from "../../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import AgGridTable from "../../../components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../../style";
import SupplierCell from "../../../components/Table/CustomCells/SupplierCell";
import CurrencyCell from "../../../components/Table/CustomCells/CurrencyCell";
import MRTTableListScreens from "../../../New-Screens/Components/MantineTable/MRTTableListScreens";
import PracticeMRT from "../../../New-Screens/Components/MantineTable/PracticeMRT";


const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}


const BankDeposit = () => {
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
      transactiontype: "Cash Deposit",
      depositid: "00001",
      source: "00002",
      currency: "USD",
      transactiondate: "10 Jan 2023",
      postingdate: "10 Jan 2023",
      cashaccount: "10000-01",
      depositamount: "$343,245,433",
      charges: "$343,245,433",
      totalamount: "$343,245,433",
      status: "Posted",
      extraref: "9594549",
      notes: "Bank Transfer"
    },
    {
      id: "1",
      transactiontype: "Cash Deposit",
      depositid: "00001",
      source: "00002",
      currency: "USD",
      transactiondate: "10 Jan 2023",
      postingdate: "10 Jan 2023",
      cashaccount: "10000-01",
      depositamount: "$343,245,433",
      charges: "$343,245,433",
      totalamount: "$343,245,433",
      status: "Posted",
      extraref: "9594549",
      notes: "Bank Transfer"
    },
    {
      id: "1",
      transactiontype: "Cash Deposit",
      depositid: "00001",
      source: "00002",
      currency: "USD",
      transactiondate: "10 Jan 2023",
      postingdate: "10 Jan 2023",
      cashaccount: "10000-01",
      depositamount: "$343,245,433",
      charges: "$343,245,433",
      totalamount: "$343,245,433",
      status: "Posted",
      extraref: "9594549",
      notes: "Bank Transfer"
    },
    {
      id: "1",
      transactiontype: "Cash Deposit",
      depositid: "00001",
      source: "00002",
      currency: "USD",
      transactiondate: "10 Jan 2023",
      postingdate: "10 Jan 2023",
      cashaccount: "10000-01",
      depositamount: "$343,245,433",
      charges: "$343,245,433",
      totalamount: "$343,245,433",
      status: "Posted",
      extraref: "9594549",
      notes: "Bank Transfer"
    },
    {
      id: "1",
      transactiontype: "Cash Deposit",
      depositid: "00001",
      source: "00002",
      currency: "USD",
      transactiondate: "10 Jan 2023",
      postingdate: "10 Jan 2023",
      cashaccount: "10000-01",
      depositamount: "$343,245,433",
      charges: "$343,245,433",
      totalamount: "$343,245,433",
      status: "Posted",
      extraref: "9594549",
      notes: "Bank Transfer"
    },
    {
      id: "1",
      transactiontype: "Cash Deposit",
      depositid: "00001",
      source: "00002",
      currency: "USD",
      transactiondate: "10 Jan 2023",
      postingdate: "10 Jan 2023",
      cashaccount: "10000-01",
      depositamount: "$343,245,433",
      charges: "$343,245,433",
      totalamount: "$343,245,433",
      status: "Posted",
      extraref: "9594549",
      notes: "Bank Transfer"
    },
    {
      id: "1",
      transactiontype: "Cash Deposit",
      depositid: "00001",
      source: "00002",
      currency: "USD",
      transactiondate: "10 Jan 2023",
      postingdate: "10 Jan 2023",
      cashaccount: "10000-01",
      depositamount: "$343,245,433",
      charges: "$343,245,433",
      totalamount: "$343,245,433",
      status: "Posted",
      extraref: "9594549",
      notes: "Bank Transfer"
    },
    {
      id: "1",
      transactiontype: "Cash Deposit",
      depositid: "00001",
      source: "00002",
      currency: "USD",
      transactiondate: "10 Jan 2023",
      postingdate: "10 Jan 2023",
      cashaccount: "10000-01",
      depositamount: "$343,245,433",
      charges: "$343,245,433",
      totalamount: "$343,245,433",
      status: "Posted",
      extraref: "9594549",
      notes: "Bank Transfer"
    },
    {
      id: "1",
      transactiontype: "Cash Deposit",
      depositid: "00001",
      source: "00002",
      currency: "USD",
      transactiondate: "10 Jan 2023",
      postingdate: "10 Jan 2023",
      cashaccount: "10000-01",
      depositamount: "$343,245,433",
      charges: "$343,245,433",
      totalamount: "$343,245,433",
      status: "Posted",
      extraref: "9594549",
      notes: "Bank Transfer"
    },
  ], []);

  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "transactiontype",
      header: "Transaction Type",
    },
    {
      accessorKey: "depositid",
      header: "Deposit ID",
    },
    {
      accessorKey: "source",
      header: "Source",
    },
    {
      accessorKey: "currency",
      header: "Currency",
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
      accessorKey: "cashaccount",
      header: "Cash Account",
    },
    {
      accessorKey: "depositamount",
      header: "Deposit Amount",
    },
    {
      accessorKey: "charges",
      header: "Charges",
    },
    {
      accessorKey: "totalamount",
      header: "Total Amount",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    },
    {
      accessorKey: "extraref",
      header: "Extra Reference",
    },
    {
      accessorKey: "notes",
      header: "Notes",
    }
  ], []);

  const keys = useSelector((state) => state.localization.keys);
  return (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100194}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1005}
            thirdNav={keys.KEY10011}
            navActive={keys.KEY10070}
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
          />

          {/* <PracticeMRT/> */}
        </TopDiv>
      </TopDivWrapper>
    </Main>
  );
};

export default BankDeposit;
