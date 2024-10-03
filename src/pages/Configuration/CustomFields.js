import React, { useState, useMemo, useEffect } from "react";
import Header from "../../components/parts/Header";
import { Main, TopDivWrapper, TopDiv } from "../style";
import { useSelector } from "react-redux";
import StatusButton from "../../components/buttons/StatusButton";
import CurrencyCell from "../../components/Table/CustomCells/CurrencyCell";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";
import { Box, Stack } from "@mantine/core";
import JornalEntrynew from "../../New-Screens/JornalEntrynew";
import { getAllJournalEntries } from "../../Api/Apis";
import JournalEntryUpdate from "../../New-Screens/JournalEntryUpdate";

const initialState = {
  density: "xs",
  columnSizing: {
    id: 100,
  },
};

const CustomFields = () => {
  const Status = (p) => <StatusButton value={p.value} />;
  const Currency = (p) => <CurrencyCell value={p.value} />;

  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const [screen, setScreen] = useState(1);
  const [selectedEntry, setSelectedEntry] = useState(null);
  // Function to fetch entries when the component mounts

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "JournalEntryNo", header: "ID" },
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
      { accessorKey: "extrarefno", header: "Section" },
      {
        accessorKey: "duedate",
        header: "Custom Field Name",
        filterVariant: "date-range",
        sortingFn: "datetime",
      },
      {
        accessorKey: "currency",
        header: "Description",
        mantineTableBodyCellProps: {
          style: { textAlign: "right", fontSize: "12px", color: "#464f60cc" },
        },
      },
      {
        accessorKey: "Debit",
        header: "Field Type",
        mantineTableBodyCellProps: {
          style: { textAlign: "right", fontSize: "12px", color: "#464f60cc" },
        },
      },
      {
        accessorKey: "Credit",
        header: "Date Created",
        mantineTableBodyCellProps: {
          style: { textAlign: "right", fontSize: "12px", color: "#464f60cc" },
        },
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
    setSelectedEntry(rowData); // Store the selected row data
    setScreen(3); // Set to 3 to navigate to the Update screen
  };

  // Handle Add New Click
  const handleScreenChange = () => {
    console.log("Navigating to Add New screen");
    setScreen(2);
  };

  const keys = useSelector((state) => state.localization.keys);

  return screen === 1 ? (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={"CUSTOM FIELDS"}
            firstNav={keys.KEY0002}
            secNav={"Configuration"}
            navActive={"Custom Fields"}
          />
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
            onAddNewClick={handleScreenChange} // Handle add new click
            onRowDoubleClick={handleRowDoubleClick} // Handle row double-click
            onEditClick={handleSelectedRowEdit}
            AddReverse={true}
            // handleSelectedRowEdit={handleSelectedRowEdit}
          />
        </TopDiv>
      </TopDivWrapper>
    </Main>
  ) : (
    <JornalEntrynew entryData={selectedEntry} /> // Render Add New screen
  );
};

export default CustomFields;
