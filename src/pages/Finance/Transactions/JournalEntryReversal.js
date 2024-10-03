import React, { useState, useMemo } from "react";

import Header from "../../../components/parts/Header";
import { Main, TopDivWrapper, TopDiv } from "../../style";
import AgGridTable from "../../../components/Table/AgGridTable";
import StatusButton from "../../../components/buttons/StatusButton";
import CurrencyCell from "../../../components/Table/CustomCells/CurrencyCell";
import { useSelector } from "react-redux";
import MRTTableListScreens from "../../../New-Screens/Components/MantineTable/MRTTableListScreens";
import { MRT_AggregationFns } from "mantine-react-table";
import { Box, Stack } from "@mantine/core";

import JornalEntrynew from "../../../New-Screens/JornalEntrynew";

const initialState = {
  density: "xs",
  columnSizing: {
    id: 100,
  },
};

const JournalEntryReversal = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };

  const sumValues = (column) => {
    const sum = data.reduce(
      (acc, row) => acc + (row[column.accessorKey] || 0),
      0
    );
    return `Total: ${sum.toFixed(2)}`;
  };

  const data = useMemo(
    () => [
      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",

        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },

      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",

        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },

      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },

      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",

        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },

      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },

      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",

        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },

      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },

      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",

        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },

      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },

      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",

        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },

      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },

      {
        id: "1",
        type: "Auto",
        journalentryno: "00001",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",

        currency: "0.939393",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        reverse: "No",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "type",
        header: "Type",
      },
      {
        accessorKey: "journalentryno",
        header: "Journal Entry No",
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
        accessorKey: "extrarefno",
        header: "Extra Ref No",
      },
      {
        accessorKey: "currency",
        header: "Currency",
      },
      {
        accessorKey: "amount",
        header: "Amount",
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,
      },
      {
        accessorKey: "notes",
        header: "Notes",
      },
      {
        accessorKey: "reverse",
        header: "Reverse",
      },
      {
        accessorKey: "Debit",
        header: "Debit",
      },
      {
        accessorKey: "DebitFC",
        header: "Debit (FC)",
      },
      {
        accessorKey: "Credit",
        header: "Credit",
      },
      {
        accessorKey: "CreditFC",
        header: "Credit FC)",
      },
      {
        accessorKey: "reversaldate",
        header: "Reversal Date",
      },
      {
        accessorKey: "recurring",
        header: "Recurring",
      },
      {
        accessorKey: "frequency",
        header: "Frequency",
      },
      {
        accessorKey: "interval",
        header: "Interval",
      },
      {
        accessorKey: "recurringdate",
        header: "Recurring Date",
      },
    ],
    []
  );

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
            title={keys.KEY100157}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1001}
            thirdNav={keys.KEY10011}
            navActive={keys.KEY10020}
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
            onAddNewClick={handleScreenChange}
          />
        </TopDiv>
      </TopDivWrapper>
    </Main>
  ) : (
    <JornalEntrynew />
  );
};

export default JournalEntryReversal;
