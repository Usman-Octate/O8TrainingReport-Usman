import React, { useState, useMemo } from "react";

import Header from "../../../components/parts/Header";
import { Main, TopDivWrapper, TopDiv } from "../../style";
import AgGridTable from "../../../components/Table/AgGridTable";
import StatusButton from "../../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import CurrencyCell from "../../../components/Table/CustomCells/CurrencyCell";
import MRTTableListScreens from "../../../New-Screens/Components/MantineTable/MRTTableListScreens";
import { MRT_AggregationFns } from "mantine-react-table";
import { Box, Stack } from "@mantine/core";
import JornalEntrynew from "../../../New-Screens/JornalEntrynew";

import ReccuringTransaction from "../../../components/Modals/ReccuringTransaction";
const initialState = {
  density: "xs",
  columnSizing: {
    id: 100,
  },
};

const RecurringTransactions = (props) => {
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
        sourcedocno: "00001",
        documentno: "00002",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "$ 0.939393",
        duedate: "21 Mar 2023",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reverse: "No",
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },
      {
        id: "2",
        transactiontype: "Auto",
        sourcedocno: "00001",
        documentno: "00002",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "$ 0.939393",
        duedate: "21 Mar 2023",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reverse: "No",
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },
      {
        id: "3",
        transactiontype: "Auto",
        sourcedocno: "00001",
        documentno: "00002",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "$ 0.939393",
        duedate: "21 Mar 2023",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reverse: "No",
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },
      {
        id: "4",
        transactiontype: "Auto",
        sourcedocno: "00001",
        documentno: "00002",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "$ 0.939393",
        duedate: "21 Mar 2023",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reverse: "No",
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },
      {
        id: "5",
        transactiontype: "Auto",
        sourcedocno: "00001",
        documentno: "00002",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "$ 0.939393",
        duedate: "21 Mar 2023",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reverse: "No",
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },
      {
        id: "6",
        transactiontype: "Auto",
        sourcedocno: "00001",
        documentno: "00002",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "$ 0.939393",
        duedate: "21 Mar 2023",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reverse: "No",
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },
      {
        id: "7",
        transactiontype: "Auto",
        sourcedocno: "00001",
        documentno: "00002",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "$ 0.939393",
        duedate: "21 Mar 2023",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reverse: "No",
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },
      {
        id: "8",
        transactiontype: "Auto",
        sourcedocno: "00001",
        documentno: "00002",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "$ 0.939393",
        duedate: "21 Mar 2023",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reverse: "No",
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },
      {
        id: "9",
        transactiontype: "Auto",
        sourcedocno: "00001",
        documentno: "00002",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "$ 0.939393",
        duedate: "21 Mar 2023",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reverse: "No",
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },
      {
        id: "10",
        transactiontype: "Auto",
        sourcedocno: "00001",
        documentno: "00002",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "$ 0.939393",
        duedate: "21 Mar 2023",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reverse: "No",
        reversaldate: "06 Sep 2023",
        recurring: "Yes",
        frequency: "12",
        interval: "1/4",
        recurringdate: "21 Mar 2023",
      },
      {
        id: "11",
        transactiontype: "Auto",
        sourcedocno: "00001",
        documentno: "00002",
        transactiondate: "01 January 2023",
        postingdate: "30 Dec 2023",
        extrarefno: "812131",
        currency: "$ 0.939393",
        duedate: "21 Mar 2023",
        amount: "$ 0.939393",
        status: "Pending for Approval",
        notes: "Expense Claims",
        Debit: 150.0,
        DebitFC: 130.0,
        Credit: 230.0,
        CreditFC: 260.0,
        reverse: "No",
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
        accessorKey: "transactiontype",
        header: "Transaction Type",
      },
      {
        accessorKey: "sourcedocno",
        header: "Source Doc No",
      },
      {
        accessorKey: "documentno",
        header: "Document No",
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
        accessorKey: "duedate",
        header: "Due Date",
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
        accessorKey: "Debit",
        header: "Debit",
      },
      {
        accessorKey: "DebitFC",
        header: "Debit FC",
      },
      {
        accessorKey: "Credit",
        header: "Credit",
      },
      {
        accessorKey: "CreditFC",
        header: "Credit FC",
      },
      {
        accessorKey: "reverse",
        header: "Reverse",
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
  const [showModal, setShowModal] = useState(false);

  const HandleModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const [screen, setScreen] = useState(1);
  const handleScreenChange = () => {
    console.log("as");
    setScreen(2);
  };

  return screen === 1 ? (
    <Main>
      {showModal ? (
        <ReccuringTransaction
          cancel={closeModal}
          save={() => handleScreenChange()}
        />
      ) : null}
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100158}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1001}
            thirdNav={keys.KEY10011}
            navActive={keys.KEY100138}
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
    <ReccuringTransaction />
  );
};

export default RecurringTransactions;
