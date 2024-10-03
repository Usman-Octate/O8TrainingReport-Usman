import React, { useState, useMemo } from "react";
import Header from "../../../components/parts/Header";
import { Main, TopDivWrapper, TopDiv } from "../../style";
import AgGridTable from "../../../components/Table/AgGridTable";
import StatusButton from "../../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import CurrencyCell from "../../../components/Table/CustomCells/CurrencyCell";
import ForexReval from "../../../New-Screens/ForexReval";
import MRTTableListScreens from "../../../New-Screens/Components/MantineTable/MRTTableListScreens";
import { MRT_AggregationFns } from "mantine-react-table";
import { Box, Stack } from "@mantine/core";

const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}


const GeneralJournalEntries = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };

  const data = useMemo(
    () => [
      {
        id: "1",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      },
      {
        id: "2",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      },
      {
        id: "3",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      },
      {
        id: "4",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      },
      {
        id: "5",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      },
      {
        id: "6",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      },
      {
        id: "7",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      },
      {
        id: "8",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      },
      {
        id: "9",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      },
      {
        id: "10",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      }, {
        id: "11",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      },
       {
        id: "12",
        transactiontype: "Auto",
        revaluationno: "00001",

        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",

        currency: 8.41,
        duedate: "21 Mar 2023",
        amount:  9.23,
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        status: "Pending for Approval",
        datefrom: "06 Sep 2023",
        dateto: "06 Sep 2023",
        additionalrefno: "932840",
        forexgain: "40015-01",
        notes: "Expense Claims",
      },
    ],
    []
  );



  const columns = useMemo(
    () => [
      {
        accessorKey: 'id', 
        header: 'ID'
      },
      {
        accessorKey: 'transactiontype', 
        header: 'Transaction Type'
      },
      {
        accessorKey: 'revaluationno', 
        header: 'Revaluation No'
      },
      {
        accessorKey: 'transactiondate', 
        header: 'Transaction Date'
      },
      {
        accessorKey: 'postingdate', 
        header: 'Posting Date'
      },
      {
        accessorKey: 'currency', 
        header: 'Currency'
      },
      {
        accessorKey: 'duedate', 
        header: 'Due Date'
      },
      {
        accessorKey: 'amount', 
        header: 'Amount'
      },
      {
        accessorKey: 'Debit', 
        header: 'Debit'
      },
      {
        accessorKey: 'Credit', 
        header: 'Credit'
      },
      {
        accessorKey: 'DebitFC', 
        header: 'Debit (FC)'
      },
      {
        accessorKey: 'CreditFC', 
        header: 'Credit (FC)'
      },
      {
        accessorKey: 'status', 
        header: 'Status',
        Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,
      },
      {
        accessorKey: 'datefrom', 
        header: 'Date From'
      },
      {
        accessorKey: 'dateto', 
        header: 'Date To'
      },
      {
        accessorKey: 'additionalrefno', 
        header: 'Additional Ref No'
      },
      {
        accessorKey: 'forexgain', 
        header: 'Forex Gain'
      },
      {
        accessorKey: 'notes', 
        header: 'Notes'
      },
    ],
    []
  );

 
  const keys = useSelector((state) => state.localization.keys);
  return (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100160}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1001}
            thirdNav={keys.KEY10011}
            navActive={keys.KEY10023}
          />
          <MRTTableListScreens
            columns={columns}
            data={data}
            LeftFirst="currency"
            LeftSecond="amount"
            FirstTitle="Total"
            initialState={initialState}
           
          />
        </TopDiv>
      </TopDivWrapper>
    </Main>
  );
};

export default GeneralJournalEntries;
