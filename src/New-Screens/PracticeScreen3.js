import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { Button, Select, Menu, MenuItem, TextField  } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearchPlus, FaSearchMinus, FaAngleUp } from "react-icons/fa";
import { IoExpand, IoContractOutline } from "react-icons/io5";
import { PiCaretUpDownBold } from "react-icons/pi";
import { TbFilterSearch } from "react-icons/tb";
import { TbFilterX } from "react-icons/tb";
import { RxDragHandleDots2 } from "react-icons/rx";
import { BsSliders } from "react-icons/bs";
import styled from "styled-components";
import axios from "axios";
import { baseUrl } from "../Api/baseUrl";
import { TbSearchOff } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";

const PracticeScreen3 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl + "/chartsofaccount/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data, "dqwdqw");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);
  const [filterColumn, setFilterColumn] = useState(null);

  const handleMenuOpen = (event, rowIndex) => {
    setAnchorEl(event.currentTarget);
    setCurrentRow(rowIndex);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentRow(null);
  };

  const addNewRow = () => {
    setData((prevData) => [
      ...prevData,
      {
        name: "New Name",
        age: 0,
        option: "Option1",
        country: "Unknown",
        job: "Unknown",
        salary: 0,
        experience: 0,
        department: "Unknown",
      },
    ]);
  };

  const deleteRow = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
    handleMenuClose();
  };

  const addRowAbove = (index) => {
    const newRow = {
      name: "New Name",
      age: 0,
      option: "Option1",
      country: "Unknown",
      job: "Unknown",
      salary: 0,
      experience: 0,
      department: "Unknown",
    };
    setData((prevData) => [
      ...prevData.slice(0, index),
      newRow,
      ...prevData.slice(index),
    ]);
    handleMenuClose();
  };

  const addRowBelow = (index) => {
    const newRow = {
      name: "New Name",
      age: 0,
      option: "Option1",
      country: "Unknown",
      job: "Unknown",
      salary: 0,
      experience: 0,
      department: "Unknown",
    };
    setData((prevData) => [
      ...prevData.slice(0, index + 1),
      newRow,
      ...prevData.slice(index + 1),
    ]);
    handleMenuClose();
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        muiTableHeadCellProps: {
          sx: {
            backgroundColor: "lightblue",
          },
          onClick: () => setFilterColumn("name"),
        },
        Filter: ({ column }) => (
          filterColumn === "name" && (
            <TextField
              value={column.getFilterValue() || ""}
              onChange={(e) => column.setFilterValue(e.target.value)}
              placeholder={`Search ${column.id}`}
            />
          )
        ),


        Cell: ({ cell, row }) => {
          if (row.original.isFooter) {
            return (
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "8px",
                }}
                onClick={addNewRow}
              >
                Add New Row
              </Button>
            );
          }
          return <strong>{cell.getValue()}</strong>;
        },
      },
      {
        accessorKey: "accountCode",
        header: "Account Code",
        muiTableHeadCellProps: {
          sx: {
            backgroundColor: "lightblue",
          },
        },
        Filter: ({ column }) => (
          filterColumn === "name" && (
            <TextField
              value={column.getFilterValue() || ""}
              onChange={(e) => column.setFilterValue(e.target.value)}
              placeholder={`Search ${column.id}`}
            />
          )
        ),
        Cell: ({ cell, row }) => {
          if (row.original.isFooter) {
            return null; // Do not render anything for the footer row
          }
          return cell.getValue();
        },
      },
      {
        accessorKey: "accountName",
        header: "Account Name",
        muiTableHeadCellProps: {
          sx: {
            backgroundColor: "lightblue",
          },
        },
        Cell: ({ cell, row }) => {
          if (row.original.isFooter) {
            return null; // Do not render anything for the footer row
          }

          const handleChange = (selectedOption) => {
            const updatedData = [...data];
            updatedData[row.index].option = selectedOption;
            setData(updatedData);
          };

          const options = [
            { value: "Option1", label: "Option1" },
            { value: "Option2", label: "Option2" },
            { value: "Option3", label: "Option3" },
          ];

          return (
            <Select
              value={cell.getValue()}
              onChange={(event) => handleChange(event.target.value)}
              contentEditable="true"
              sx={{
                padding: "4px",
                border: "none",
                "& .MuiSelect-select": {
                  padding: "2px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          );
        },
      },
      {
        accessorKey: "category",
        header: "Account Category",
        muiTableHeadCellProps: {
          sx: {
            backgroundColor: "lightblue",
          },
        },
        Cell: ({ cell, row }) => {
          if (row.original.isFooter) {
            return null; // Do not render anything for the footer row
          }
          return cell.getValue();
        },
      },
      {
        accessorKey: "accountType",
        header: "Account Type",
        muiTableHeadCellProps: {
          sx: {
            backgroundColor: "lightblue",
          },
        },
        Cell: ({ cell, row }) => {
          if (row.original.isFooter) {
            return null; // Do not render anything for the footer row
          }
          return cell.getValue();
        },
      },
      {
        accessorKey: "currency",
        header: "Currency",
        dataType: "numeric",

        aggregation: {
          type: "sum",
        },
        muiTableHeadCellProps: {
          sx: {
            backgroundColor: "lightblue",
          },
        },
        Cell: ({ cell, row }) => {
          if (row.original.isFooter) {
            const aggregatedValue = cell.aggregated
              ? `Sum: ${cell.value}`
              : null;
            return <strong>{aggregatedValue}</strong>;
          }
          return cell.getValue();
        },
      },
      {
        accessorKey: "balance",
        header: "Balance (FC)",
        dataType: "numeric",
        aggregation: {
          type: "average",
        },
        muiTableHeadCellProps: {
          sx: {
            backgroundColor: "lightblue",
          },
        },
        Cell: ({ cell, row }) => {
          if (row.original.isFooter) {
            const aggregatedValue = cell.aggregated
              ? `Avg: ${cell.value.toFixed(2)}`
              : null;
            return <strong>{aggregatedValue}</strong>;
          }
          return cell.getValue();
        },
      },
    ],
    [data, anchorEl, currentRow]
  );

  const tableData = useMemo(() => {
    // Add a placeholder row at the end
    const newData = [...data];
    newData.push({ isFooter: true });
    return newData;
  }, [data]);

  return (
    <MaterialReactTable
      columns={columns}
      data={tableData}
      enableGrouping={true}
      enableColumnOrdering={true}
      columnResizeMode={true}
      enableStickyHeader={true}
      enablePagination={false}
      // enableRowSelection={true}
      // enableColumnResizing={true}
      renderToolbarCustomActions={{ sx: { background: "red" } }}
      // enableColumnVirtualization={true}
      // enableRowSelection={true}
      muiTableContainerProps={{
        sx: {
          maxHeight: "500px",

          // width: "90%",
          marginTop: "0px auto",
          // borderRadius: "8px",
          display: "flex",
          alignSelf: "center",
          "&::-webkit-scrollbar": {
            width: "4px" /* width of the vertical scrollbar */,
            height: "4px" /* height of the horizontal scrollbar */,
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1" /* background of the scrollbar track */,
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888" /* color of the scrollbar thumb */,
            borderRadius: "10px" /* rounded corners of the scrollbar thumb */,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555" /* color of the scrollbar thumb on hover */,
          },
          "&::-webkit-scrollbar-horizontal": {
            height: "4px" /* height of the horizontal scrollbar */,
          },
          "&::-webkit-scrollbar-horizontal:hover": {
            height: "4px" /* height of the horizontal scrollbar on hover */,
          },
        },
      }}
      muiTableProps={{
        sx: { maxHeight: "500px", backgroundColor: "red" },
      }}
      muiTopToolbarProps={{
        sx: { backgroundColor: "lightblue" },
      }}
      muiBottomToolbarProps={{
        sx: {
          borderBottomLeftRadius: "8px",

          borderBottomRightRadius: "8px",
        },
      }}
      renderBottomToolbarCustomActions={
        ({ table }) => ""
        // <div>
        //   <Button
        //     style={{
        //       padding: "5px",
        //       borderRadius: "4px",
        //       backgroundColor: "lightgreen",
        //     }}
        //     onClick={addNewRow}
        //   >
        //     Add New Row
        //   </Button>
        //   <Button onClick={() => table.toggleAllRowsExpanded()}>
        //     Toggle All Rows Expanded
        //   </Button>
        //   <Button onClick={() => table.resetGlobalFilter()}>
        //     Reset Global Filter
        //   </Button>
        //   <Button onClick={() => table.resetColumnFilters()}>
        //     Reset Column Filters
        //   </Button>
        //   <Button onClick={() => table.resetSorting()}>Reset Sorting</Button>
        // </div>
      }
      icons={{
        SearchOffIcon: () => <TbSearchOff />,
        ArrowDownwardIcon: (props) => <FaAngleUp {...props} />,
        KeyboardDoubleArrowDownIcon: () => <PiCaretUpDownBold />,
        SearchIcon: () => <IoIosSearch />,
        FullscreenIcon: () => <IoExpand />,
        FullscreenExitIcon: () => <IoContractOutline />,
        SortIcon: () => <PiCaretUpDownBold />,
        FilterListIcon: () => <TbFilterSearch />,
        FilterListOffIcon: () => <TbFilterX />,
        DragHandleIcon: () => <RxDragHandleDots2 />,
        ViewColumnIcon: () => <BsSliders />,
        
      
      }}
      muiTableBodyCellProps={{
        style: {
          backgroundColor: "inherit",
          borderTop: "none",
        },
      }}
      muiTableRowProps={(row) => ({
        style: {
          backgroundColor: row.original.isFooter ? "#f9f9f9" : "inherit",
          borderTop: row.original.isFooter ? "2px solid #ccc" : "none",
        },
      })}
    />
  );
};

export default PracticeScreen3;
