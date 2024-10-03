import React, { useMemo, useState } from "react";
import {
  useMantineReactTable,
  MRT_ToggleGlobalFilterButton,
  MRT_ShowHideColumnsButton,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_GlobalFilterTextInput,
  MRT_ToggleFullScreenButton,
  MRT_TableContainer,
} from "mantine-react-table";
import styled from "styled-components";
import CustomToolbarActions from "./CustomToolbarActions";
import ActionMenu from "./ActionManu";

// Define a styled component with conditional styles based on full-screen mode
const TableMain = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isFullScreen ? "100vw" : "100%")}; /* Full viewport width when full-screen */
  border-radius: 8px;
  height: ${(props) => (props.isFullScreen ? "100vh" : "6vh")}; 
  margin-top: ${(props) => (props.isFullScreen ? "0" : "40px")}; /* Remove margin when full-screen */
  position: ${(props) => (props.isFullScreen ? "fixed" : "relative")}; /* Fixed position when full-screen */
  top: ${(props) => (props.isFullScreen ? "0" : "auto")}; /* Align top when full-screen */
  left: ${(props) => (props.isFullScreen ? "0" : "auto")}; /* Align left when full-screen */
  overflow: auto; /* Allow scrolling if needed */
  background-color: white; /* Ensure background color if needed */
  transition: height 0.3s, width 0.3s, margin-top 0.3s; /* Smooth transition */
  z-index: ${(props) => (props.isFullScreen ? "10" : "auto")}; /* Ensure full-screen is on top */
`;

const PracticeMRT = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [data, setData] = useState([
    { transactiontype: "Cash Deposit", status: "Posted", notes: "Bank Transfer" },
    // Add more rows here
  ]);

  const columns = useMemo(() => [
    { accessorKey: "transactiontype", header: "Transaction Type" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "notes", header: "Notes" },
    {
      accessorKey: "actions",
      header: "Actions",
      Cell: ({ row }) => (
        <ActionMenu
          row={row}
          onAddRowAbove={handleAddRowAbove}
          onAddRowBelow={handleAddRowBelow}
          onDeleteRow={handleDeleteRow}
        />
      ),
    },
  ], []);
  const handleFullScreenToggle = () => {
    setIsFullScreen(prevState => !prevState); // Toggle full-screen state
  };
  const handleAddRowAbove = (row) => {
    const newRow = { transactiontype: "", status: "", notes: "" };
    const rowIndex = row.index;
    const newData = [
      ...data.slice(0, rowIndex),
      newRow,
      ...data.slice(rowIndex),
    ];
    setData(newData);
  };

  const handleAddRowBelow = (row) => {
    const newRow = { transactiontype: "", status: "", notes: "" };
    const rowIndex = row.index + 1;
    const newData = [
      ...data.slice(0, rowIndex),
      newRow,
      ...data.slice(rowIndex),
    ];
    setData(newData);
  };

  const handleDeleteRow = (row) => {
    const rowIndex = row.index;
    const newData = data.filter((_, index) => index !== rowIndex);
    setData(newData);
  };
  const table = useMantineReactTable({
    columns,
    data,
    enableColumnResizing: true,
    enableGrouping: true,
    enablePagination: false,
    enableColumnOrdering: true,
    enableStickyHeader: true,
    enableBottomToolbar: true,
    enableRowSelection: true,
    enableFullScreenToggle: false, // Disable default full-screen toggle
    onIsFullScreenChange: handleFullScreenToggle, // Use custom toggle function
  });

  return (
    <>
      {/* {!isFullScreen && (
        <div style={{ margin: "20px" }}>
          <CustomToolbarActions />
        </div>
      )} */}
      <TableMain isFullScreen={isFullScreen}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', padding: '10px' }}>
          <div style={{ display: isFullScreen ? "block" : "block" }}>
            <CustomToolbarActions />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <MRT_GlobalFilterTextInput table={table} />
            <MRT_ToggleGlobalFilterButton table={table} />
            <MRT_ToggleFiltersButton table={table} />
            <MRT_ShowHideColumnsButton table={table} />
            <MRT_ToggleDensePaddingButton table={table} />
            <MRT_ToggleFullScreenButton onClick={handleFullScreenToggle} table={table} />
          </div>
        </div>
        <MRT_TableContainer table={table} />
      </TableMain>
    </>
  );
};

export default PracticeMRT;
