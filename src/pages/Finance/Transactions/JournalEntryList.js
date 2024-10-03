import React, { useState, useMemo, useEffect } from "react";
import Header from "../../../components/parts/Header";
import { Main, TopDivWrapper, TopDiv } from "../../style";
import { useSelector } from "react-redux";
import StatusButton from "../../../components/buttons/StatusButton";
import MRTTableListScreens from "../../../New-Screens/Components/MantineTable/MRTTableListScreens";
import { Box, Stack } from "@mantine/core";
import JornalEntrynew from "../../../New-Screens/JornalEntrynew";
import { getAllJournalEntries } from "../../../Api/Apis";
import JournalEntryUpdate from "../../../New-Screens/JournalEntryUpdate";

import { formatDate } from "../../../appUtils/dateFormatter";
import { Data } from "styled-icons/boxicons-regular";
import Currency from "../../../components/buttons/CurrencyCell";

const initialState = {
  density: "xs",
  // grouping: ['currencyCode', 'currencySymbol'],
  columnSizing: {
    id: 100,
  },
};

const CurrencyCodeFullForm = ({ currencyData }) => {
  const [code, fullForm] = currencyData;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{code}</div>
      <div style={{ color: "#464f60cc", opacity: 0.5 }}>{fullForm}</div>
    </div>
  );
};

const CurrencySymbolAmount = ({ currencyData }) => {
  const [symbol, amount] = currencyData;

  return (
    <div style={{ display: "flex" }}>
      <div>{symbol}</div>
      <div style={{ marginLeft: "4px" }}>{amount}</div>
    </div>
  );
};

const JournalEntryList = () => {
  const Status = (p) => <StatusButton value={p.value} />;

  const dateFormat = useSelector((state) => state.dateFormat.format); // Get format from Redux
  const dateSeparator = useSelector((state) => state.dateSeparator.separator);

  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [screen, setScreen] = useState(1);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [selectedViewEntry, setSelectedViewEntry] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);

  // Function to fetch entries when the component mounts
  const fetchEntries = async () => {
    try {
      const result = await getAllJournalEntries();
      if (result.status) {
        const mappedEntries = result.data.map((entry) => {
          // Sum debit, credit, debitFC, and creditFC values from jeTableDetails
          const totalDebit = entry.jeTableDetails.reduce((acc, detail) => acc + (detail.debit || 0), 0);
          const totalCredit = entry.jeTableDetails.reduce((acc, detail) => acc + (detail.credit || 0), 0);
          const totalDebitFC = entry.jeTableDetails.reduce((acc, detail) => acc + (detail.debitFC || 0), 0);
          const totalCreditFC = entry.jeTableDetails.reduce((acc, detail) => acc + (detail.creditFC || 0), 0);
  
          return {
            id: entry.id,
            JournalEntryNo: entry.journalEntryNumber,
  
            transactiondate: formatDate(
              entry.transactionDate,
              dateFormat,
              dateSeparator
            ),
            postingdate: formatDate(entry.postingDate, dateFormat, dateSeparator),
            ReversalDate: entry.reversalDate
              ? formatDate(entry.reversalDate, dateFormat, dateSeparator)
              : "",
            RecurringDate: entry.recurringDate
              ? formatDate(entry.recurringDate, dateFormat, dateSeparator)
              : "",
            duedate: formatDate(entry.dueDate, dateFormat, dateSeparator),
            extrarefno: entry.extraReferenceNumber,
  
            currencyCode: [entry.currency[0], entry.currency[1]], // code and full form
            currencySymbol: [entry.currency[2], entry.currency[3]],
  
            Debit: totalDebit,    // Total Debit from jeTableDetails
            Credit: totalCredit,  // Total Credit from jeTableDetails
            DebitFC: totalDebitFC, // Total Debit FC from jeTableDetails
            CreditFC: totalCreditFC, // Total Credit FC from jeTableDetails
  
            Status: entry.status || "Pending",
            description: entry.description || "No Notes",
            Reverse: entry.autoReversal ? "Yes" : "No",
            Recurring: entry.recurringTransaction ? "Yes" : "No",
            Frequency: entry.frequency || "",
            Interval: entry.intervalValue || "",
            project: entry.project,
            frequency: entry.frequency,
            department: entry.department,
            division: entry.division,
            jeTableDetails: entry.jeTableDetails,
            internalNotes: entry.internalNotes || [],
          };
        });
  
        setEntries(mappedEntries);
        setLoading(false); 
      } else {
        setError(result.data);
        setLoading(false); 
        console.error("Error fetching entries:", result.data);
      }
    } catch (err) {
      setError("Error fetching data");
      setLoading(false); 
      console.error("Error fetching data:", err);
    }
  };
  

  useEffect(() => {
    fetchEntries();
  }, [dateFormat, dateSeparator]);

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "JournalEntryNo", header: "Journal Entry No" },
      {
        accessorKey: "transactiondate",
        header: "Transaction Date",
        filterVariant: "date-range",
        sortingFn: "datetime",
      },
      {
        accessorKey: "postingdate",
        header: "Posting Date",
        filterVariant: "date-range",
        sortingFn: "datetime",
      },
      { accessorKey: "extrarefno", header: "Extra Ref No" },
      {
        accessorKey: "duedate",
        header: "Due Date",
        filterVariant: "date-range",
        sortingFn: "datetime",
      },
      {
        accessorKey: "currencyCode",
        header: "Currency",
        Cell: ({ cell }) => (
          <CurrencyCodeFullForm currencyData={cell.getValue()} />
        ),
        mantineTableBodyCellProps: {
          style: { textAlign: "left", fontSize: "12px", color: "#464f60cc" },
        },
      },
      {
        accessorKey: "currencySymbol",
        header: "Currency Rate",
        Cell: ({ cell }) => (
          <CurrencySymbolAmount currencyData={cell.getValue()} />
        ),
        mantineTableBodyCellProps: {
          style: { textAlign: "right", fontSize: "12px", color: "#464f60cc" },
        },
      },
      {
        accessorKey: "Debit",
        header: "Debit",
        mantineTableBodyCellProps: {
          style: { textAlign: "right", fontSize: "12px", color: "#464f60cc" },
        },
      },
      {
        accessorKey: "Credit",
        header: "Credit",
        mantineTableBodyCellProps: {
          style: { textAlign: "right", fontSize: "12px", color: "#464f60cc" },
        },
      },
      {
        accessorKey: "DebitFC",
        header: "Debit (Fx)",
        mantineTableBodyCellProps: {
          style: { textAlign: "right", fontSize: "12px", color: "#464f60cc" },
        },
      },
      {
        accessorKey: "CreditFC",
        header: "Credit (Fx)",
        mantineTableBodyCellProps: {
          style: { textAlign: "right", fontSize: "12px", color: "#464f60cc" },
        },
      },
      {
        accessorKey: "Status",
        header: "Status",
        Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,
      },
      { accessorKey: "description", header: "Description" },
      { accessorKey: "Reverse", header: "Reverse" },
      {
        accessorKey: "ReversalDate",
        header: "Reversal Date",
        filterVariant: "date-range",
        sortingFn: "datetime",
      },
      { accessorKey: "Recurring", header: "Recurring" },
      { accessorKey: "Frequency", header: "Frequency" },
      { accessorKey: "Interval", header: "Interval" },
      {
        accessorKey: "RecurringDate",
        header: "Recurring Date",
        filterVariant: "date-range",
        sortingFn: "datetime",
      },
      {
        accessorKey: "tags",
        header: "Tags",
        // filterVariant: "date-range",
        // sortingFn: "datetime",
      },
    ],
    []
  );

  const handleSelectedRowEdit = (rowData) => {
    console.log("Row double-clicked:", rowData);
    setSelectedEntry(rowData); // Store the selected row data
    setScreen(3); // Set to 3 to navigate to the Update screen
  };
  const handleRowDoubleClick = (rowData) => {
    console.log("Row double-clicked:", rowData);
    setSelectedViewEntry(rowData);
    setScreen(4);
    setSelectedViewEntry(rowData);
    setScreen(4);
  };

  const handleScreenChange = () => {
    console.log("Navigating to Add New screen");
    setScreen(2);
  };

  const handleEditClick = (data) => {
    setSelectedRowData(data);
    setSelectedEntry(data);

    console.log("GGGGGGGGGG", data);
  };

  const movetoEditScreen = () => {
    setScreen(3);
  };
  const handleEditClickV = (data) => {
    setSelectedEntry(data);
    setScreen(3);
  };
  const keys = useSelector((state) => state.localization.keys);

  return screen === 1 ? (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100156}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1001}
            thirdNav={keys.KEY10011}
            navActive={keys.KEY10019}
          />
          {loading ? ( // Show loader while data is loading
            <div className="loader-container" style={{ height: "100vh" }}>
              <span className="loader"></span>
            </div>
          ) : (
            <MRTTableListScreens
              columns={columns}
              data={entries}
              LeftFirst="Debit"
              LeftSecond="DebitFC"
              RightFirst="Credit"
              RightSecond="CreditFC"
              FirstTitle="Total Debit"
              SecondTitle="Total Credit"
              initialState={initialState}
              onAddNewClick={handleScreenChange}
              onRowDoubleClick={handleRowDoubleClick}
              onEditClick={movetoEditScreen}
              onEditClickR={handleEditClick}
              handleSelectedRowEdit={handleSelectedRowEdit}
              ReverseButtons={true}
            />
          )}
        </TopDiv>
      </TopDivWrapper>
    </Main>
  ) : screen === 2 ? (
    <JornalEntrynew />
  ) : screen === 3 ? (
    <JornalEntrynew entryData={selectedEntry} />
  ) : screen === 4 ? (
    <JornalEntrynew
      ViewEntryData={selectedViewEntry}
      onEditClickV={movetoEditScreen}
    />
  ) : null;
};

export default JournalEntryList;
