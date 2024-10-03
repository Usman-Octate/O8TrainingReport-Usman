import React, { useState, useMemo } from "react";
import Header from "../../components/parts/Header";
import { Main, TopDivWrapper, TopDiv } from "../style";
import { useSelector } from "react-redux";
import StatusButton from "../../components/buttons/StatusButton";
import CurrencyCell from "../../components/Table/CustomCells/CurrencyCell";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";
import { MRT_AggregationFns } from "mantine-react-table";
import { Box, Stack } from "@mantine/core";
import JornalEntrynew from "../../New-Screens/JornalEntrynew";
const initialState = {
  density: "xs",
  columnSizing: {
    id: 100,
  },
};

const CustomFieldsList = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };

  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };
  const data = useMemo(
    () => [
      {
        id: 1,
        JournalEntryNo: "12345",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12345",
        duedate: "30 Mar 2023",
        currency: "USD",
        Debit: 100.0,
        Credit: 100.0,
        DebitFC: 100.0,
        CreditFC: 0.0,
        Status: "Pending for Approval",
        Notes: "First entry",
        Reverse: "No",
        "Reversal Date": "",
        Recurring: "No",
        Frequency: "",
        Interval: "",
        "Recurring Date": "",
      },
      {
        id: 2,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 18,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 3,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 4,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 5,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 6,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 7,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 8,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 9,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 10,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 11,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 12,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
      {
        id: 14,
        JournalEntryNo: "12346",
        transactiondate: "22 Mar 2023",
        postingdate: "23 Mar 2023",
        extrarefno: "EX12346",
        duedate: "31 Mar 2023",
        currency: "EUR",
        Debit: 200.0,
        Credit: 0.0,
        DebitFC: 200.0,
        CreditFC: 0.0,
        Status: "Approved",
        Notes: "Second entry",
        Reverse: "No",
        "Reversal Date": "31 Mar 2023",
        Recurring: "Yes",
        Frequency: "Monthly",
        Interval: "1 month",
        "Recurring Date": "24 Mar 2023",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      {
        accessorKey: "JournalEntryNo",
        header: "Module",

        mantineTableFooterCellProps: {
          style: {
            // backgroundColor: '#f5f5f5',
            fontSize: "12px",
            fontWeight: "700",
            textAlign: "center",
            padding: "10px",
          },
        },
      },
      {
        accessorKey: "transactiondate",
        header: "Record Type",
        filterVariant: "date-range",
        sortingFn: "datetime",
      },
      {
        accessorKey: "postingdate",
        header: "Screen",
        filterVariant: "date-range",
        sortingFn: "datetime",
      },
      {
        accessorKey: "duedate",
        header: "Section",
        filterVariant: "date-range",
        sortingFn: "datetime",
      },
      {
        accessorKey: "currency",
        header: "Custom Field Name",
        mantineTableBodyCellProps: {
          style: { textAlign: "center", fontSize: "12px", color: "#464f60cc" },
        },
      },
      {
        accessorKey: "Debit",
        header: "Description",
        mantineTableBodyCellProps: {
          style: { textAlign: "center", fontSize: "12px", color: "#464f60cc" },
        },
        mantineTableFooterCellProps: {
          style: {
            // backgroundColor: '#f5f5f5',
            fontSize: "12px",
            fontWeight: "700",
            textAlign: "center",
            padding: "10px",
          },
        },
        //  Footer: () => <div>Total Debit: {totalDebit.toFixed(2)}</div>,
      },
      {
        accessorKey: "Credit",
        header: "Field Type",
        mantineTableBodyCellProps: {
          style: { textAlign: "center", fontSize: "12px", color: "#464f60cc" },
        },
        mantineTableFooterCellProps: {
          style: {
            // backgroundColor: '#f5f5f5',
            fontSize: "12px",
            fontWeight: "700",
            textAlign: "center",
            padding: "10px",
          },
        },
        // Footer: () => <div>Total Credit: {totalCredit.toFixed(2)}</div>,
      },
      {
        accessorKey: "DebitFC",
        header: "Date Created",
        mantineTableBodyCellProps: {
          style: { textAlign: "center", fontSize: "12px", color: "#464f60cc" },
        },
      },
    ],
    []
  );

  const totalDebit = useMemo(() => {
    return data.reduce((acc, row) => acc + row.Debit, 0);
  }, [data]);

  const averageDebit = useMemo(() => {
    return totalDebit / data.length;
  }, [totalDebit, data.length]);

  const countDebit = useMemo(() => {
    return data.length;
  }, [data.length]);

  const totalCredit = useMemo(() => {
    return data.reduce((acc, row) => acc + row.Credit, 0);
  }, [data]);
  // const totalDebitFC = useMemo(() => {
  //   return data.reduce((acc, row) => acc + row.Debit (FC), 0);
  // }, [data]);
  // const totalCreditFC = useMemo(() => {
  //   return data.reduce((acc, row) => acc + row.Credit (FC), 0);
  // }, [data]);

  // const columnName = 'Debit';
  const keys = useSelector((state) => state.localization.keys);

  const [screen, setScreen] = useState(1);
  const handleScreeChange = () => {
    console.log("as");
    setScreen(2);
  };

  return screen === 1 ? (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={"CUSTOM FIELDS"}
            firstNav={keys.KEY0002}
            secNav={"Configuration"}
            navActive={"Custom Fields List"}
          />
          <MRTTableListScreens
            columns={columns}
            data={data}
            LeftFirst="Debit"
            LeftSecond="DebitFC"
            RightFirst="Credit"
            RightSecond="CreditFC"
            FirstTitle="Total Debit"
            SecondTitle="Total Credit"
            initialState={initialState}
          />
          {/* <AgGridTable
            rowData={rowData}
            colDefs={colDefs}
            header={true}
            Setheight={true}
          /> */}
        </TopDiv>
      </TopDivWrapper>
    </Main>
  ) : (
    <JornalEntrynew />
  );
};

export default CustomFieldsList;
