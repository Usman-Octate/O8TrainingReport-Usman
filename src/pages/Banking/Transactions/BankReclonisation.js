import React, { useState,useMemo } from "react";
import Header from "../../../components/parts/Header";
import { useSelector } from "react-redux";
import AgGridTable from "../../../components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../../style";
import MRTTableListScreens from "../../../New-Screens/Components/MantineTable/MRTTableListScreens";


const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}


const BankReclonisation = () => {

  const data = useMemo(() => [
    {
      id: "1",
      transactiontype: "Revolution Cross Limited",
      sourcedocno: "Order001",
      jereferncenono: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      recurring: "$ 0.093963",
      frequency: "+63 917 2732 21"
    },
    {
      id: "1",
      transactiontype: "Revolution Cross Limited",
      sourcedocno: "Order001",
      jereferncenono: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      recurring: "$ 0.093963",
      frequency: "+63 917 2732 21"
    },
    {
      id: "1",
      transactiontype: "Revolution Cross Limited",
      sourcedocno: "Order001",
      jereferncenono: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      recurring: "$ 0.093963",
      frequency: "+63 917 2732 21"
    },
    {
      id: "1",
      transactiontype: "Revolution Cross Limited",
      sourcedocno: "Order001",
      jereferncenono: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      recurring: "$ 0.093963",
      frequency: "+63 917 2732 21"
    },
    {
      id: "1",
      transactiontype: "Revolution Cross Limited",
      sourcedocno: "Order001",
      jereferncenono: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      recurring: "$ 0.093963",
      frequency: "+63 917 2732 21"
    }, {
      id: "1",
      transactiontype: "Revolution Cross Limited",
      sourcedocno: "Order001",
      jereferncenono: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      recurring: "$ 0.093963",
      frequency: "+63 917 2732 21"
    },
    {
      id: "1",
      transactiontype: "Revolution Cross Limited",
      sourcedocno: "Order001",
      jereferncenono: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      recurring: "$ 0.093963",
      frequency: "+63 917 2732 21"
    },
    {
      id: "1",
      transactiontype: "Revolution Cross Limited",
      sourcedocno: "Order001",
      jereferncenono: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      recurring: "$ 0.093963",
      frequency: "+63 917 2732 21"
    },
    {
      id: "1",
      transactiontype: "Revolution Cross Limited",
      sourcedocno: "Order001",
      jereferncenono: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      recurring: "$ 0.093963",
      frequency: "+63 917 2732 21"
    },
    {
      id: "1",
      transactiontype: "Revolution Cross Limited",
      sourcedocno: "Order001",
      jereferncenono: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      recurring: "$ 0.093963",
      frequency: "+63 917 2732 21"
    },
    {
      id: "1",
      transactiontype: "Revolution Cross Limited",
      sourcedocno: "Order001",
      jereferncenono: "12 January 2024",
      postingdate: "12 January 2024",
      transactiondate: "12 January 2024",
      currency: "Currency",
      status: "Active",
      amount: "$ 0.093963",
      recurring: "$ 0.093963",
      frequency: "+63 917 2732 21"
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
      accessorKey: "sourcedocno",
      header: "Source Doc No",
    },
    {
      accessorKey: "jereferncenono",
      header: "Reference No",
    },
    {
      accessorKey: "postingdate",
      header: "Posting Date",
    },
    {
      accessorKey: "transactiondate",
      header: "Transaction Date",
    },
    {
      accessorKey: "currency",
      header: "Currency",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "recurring",
      header: "Recurring",
    },
    {
      accessorKey: "frequency",
      header: "Frequency",
    }
  ], []);

  
  const keys = useSelector((state) => state.localization.keys);
  return (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100195}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1005}
            thirdNav={keys.KEY10011}
            navActive={keys.KEY10071}
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

export default BankReclonisation;
