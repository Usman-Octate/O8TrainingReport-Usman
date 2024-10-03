import React, { useRef, useState, useEffect } from "react";
import AutoSave from "react-autosave";
import { deleteJournalEntry } from "../../../Api/Apis";
import JornalEntrynew from "../../JornalEntrynew";
import {
  useMantineReactTable,
  MRT_ToggleGlobalFilterButton,
  MRT_ShowHideColumnsButton,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToolbarAlertBanner,
  MRT_TableContainer,
  MRT_GlobalFilterTextInput,
  MRT_ToggleFullScreenButton,
  MRT_ToolbarDropZone,
  MRT_TableHead,
  MRT_TablePagination,
  MRT_TableBody,
  MantineReactTable,
  MRT_TopToolbar,
  MRT_TableBodyCell,
  MRT_TableHeadCell,
  MRT_TableFooter,
  MRT_TableFooterCell,
  MRT_Table,
  MRT_ShowHideColumnsMenu,
} from "mantine-react-table";
import Toaster from "../../../components/Modals/Toaster";
import { VscGroupByRefType } from "react-icons/vsc";
import { LuChevronsUpDown } from "react-icons/lu";
import { Select, Input } from "@mantine/core";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Text,
  Tooltip,
  Portal,
} from "@mantine/core";
import { GrDrag } from "react-icons/gr";
import { BsSliders } from "react-icons/bs";
import { IoIosExpand } from "react-icons/io";
import { IoIosContract } from "react-icons/io";
import { RxDragHandleDots2 } from "react-icons/rx";
import { TbBaselineDensitySmall } from "react-icons/tb";
import { TbBaselineDensityMedium } from "react-icons/tb";
import { TbBaselineDensityLarge } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";
import { TbSearchOff } from "react-icons/tb";
import { TbFilterOff } from "react-icons/tb";
import { TbFilter } from "react-icons/tb";
import { MdClearAll } from "react-icons/md";
import { RxPinLeft } from "react-icons/rx";
import { TbArrowAutofitContent } from "react-icons/tb";
import { IoMdEyeOff } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";
import { FaEuroSign } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import SortUp from "../../../components/Icons/SortUp";
import SortDown from "../../../components/Icons/SortDown";
import SortUpDown from "../../../components/Icons/SortUpDown";

import { useSelector } from "react-redux";
import AddButton from "../../../components/buttons/AddButton";
import CustomToolbarActions from "./CustomToolbarActions";

import styled from "styled-components";

import "./Style.css";

const useDoubleClick = (callback) => {
  const [clickTimeout, setClickTimeout] = useState(null);
  const lastClickTime = useRef(0);

  const handleClick = (event) => {
    const now = Date.now();
    if (now - lastClickTime.current < 300) {
      clearTimeout(clickTimeout);
      callback(event);
    } else {
      setClickTimeout(setTimeout(() => setClickTimeout(null), 300));
    }
    lastClickTime.current = now;
  };

  return handleClick;
};

const CustomDropZone = styled(MRT_ToolbarDropZone)`
  height: 10px;
  line-height: 10px;
  margin-top: 10px;
  padding: 0;
  width: 100%;
`;

const TableMain = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: ${(props) => (props.isFullScreen ? "99.5%" : "99.8")};
  // height: ${(props) => (props.isFullScreen ? "98%" : "65vh")};

  @media (min-height: 1200px) {
    height: ${(props) =>
      props.isFullScreen ? "98%" : "94vh"}; //////// 25% and 33% /////////////
  }

  @media (min-height: 1000px) and (max-height: 1199px) {
    height: ${(props) =>
      props.isFullScreen ? "98%" : "79vh"}; //////// 50% /////////////
  }

  @media (min-height: 800px) and (max-height: 999px) {
    height: ${(props) =>
      props.isFullScreen ? "98%" : "72vh"}; //////// 67% /////////////
  }

  @media (min-height: 780px) and (max-height: 799px) {
    height: ${(props) =>
      props.isFullScreen ? "98%" : "87vh"}; //////// 75% ////////////
  }

  @media (min-height: 700px) and (max-height: 779px) {
    height: ${(props) =>
      props.isFullScreen ? "98%" : "86vh"}; ////////// 80% /////////
  }

  @media (min-height: 600px) and (max-height: 699px) {
    height: ${(props) =>
      props.isFullScreen ? "98%" : "63vh"}; //////////  90%  ///////////
  }

  //   @media (min-height: 500px) and (max-height: 599px) {
  //   height: ${(props) => (props.isFullScreen ? "98%" : "58vh")};
  // }

  // @media (min-height: 300px) and (max-height: 499px) {
  //   height: ${(props) => (props.isFullScreen ? "98%" : "55vh")};
  // }

  margin-top: ${(props) => (props.isFullScreen ? "0" : "32px")};
  margin-right: ${(props) => (props.isFullScreen ? "0" : "0px")};
  padding-top: ${(props) => (props.isFullScreen ? "10px" : "5px")};
  padding-left: ${(props) => (props.isFullScreen ? "5px" : "5px")};
  padding-right: ${(props) => (props.isFullScreen ? "5px" : "5px")};
  padding-bottom: ${(props) => (props.isFullScreen ? "5px" : "0px")};

  position: ${(props) => (props.isFullScreen ? "fixed" : "relative")};
  top: ${(props) => (props.isFullScreen ? "0" : "auto")};
  left: ${(props) => (props.isFullScreen ? "0" : "auto")};
  overflow-x: ${(props) => (props.isFullScreen ? "hidden" : "visible")};
  overflow-y: ${(props) => (props.isFullScreen ? "hidden" : "visible")};
  // overflow: "hidden";
  background-color: white;
  transition: height 0.3s, width 0.3s, margin-top 0.3s;
  z-index: ${(props) => (props.isFullScreen ? "10" : "auto")};
`;

// Custom dropdown component
const Dropdown = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const inputRef = useRef(null);
};
const saveTableState = (state) => {
  // console.log("Saving table state:", state);
  // alert("Current State of the Table Saved", state)
  localStorage.setItem("listScreenTable", JSON.stringify(state));
};

const loadTableState = () => {
  const state = localStorage.getItem("listScreenTable");
  return state ? JSON.parse(state) : {};
};
const handleFullScreenChange = (isFullScreen) => {
  // Handle the fullscreen state change if needed
};

const MRTTableListScreens = ({
  columns,
  data,
  renderBottomToolbarCustomActions,
  LeftFirst,
  RightFirst,
  LeftSecond,
  RightSecond,
  FirstTitle,
  SecondTitle,
  initialState,
  onAddNewClick,
  onRowDoubleClick,
  ReverseButtons,
  handleSelectedRowEdit,
  onEditClick,
  AddReverse,
  onEditClickR,
  mantineExpandButtonProps,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [isGrouping, setIsGrouping] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  //////////////////////////////////
  const [screen, setScreen] = useState(1);
  const [selectedEntry, setSelectedEntry] = useState(null);
  //////////////////////////////////////////////

  const [selectedERow, setSelectedERow] = useState(null);
  const [message, setMessage] = useState("");

  const [showToaster, setShowToaster] = useState(false);
  const handleSaveClick = () => {
    saveTableState(table.getState()); // Your existing save logic
    setShowToaster(true); // Show toaster on save
  };

  const fullScreenRef = useRef(null);

  const savedState = loadTableState();

  const handleFullScreenChange = (isFullScreen) => {
    console.log("Full screen mode:", isFullScreen);
  };

  document.documentElement.style.setProperty(
    "--manu-icon-color",
    themeKeys.primary
  );
  document.documentElement.style.setProperty(
    "--table-row-hover-color",
    themeKeys.TableHead
  );
  const handleFullScreenToggle = () => {
    setIsFullScreen((prevState) => !prevState); // Toggle full-screen state
  };

  const handleRowDoubleClick = useDoubleClick((event) => {
    const rowIndex = event.currentTarget.dataset.rowIndex;
    const rowData = data[rowIndex];
    onRowDoubleClick(rowData); // Call the provided callback with row data
  });

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
    mantineExpandButtonProps,
    // mantineSelectCheckboxProps: {color: "red", width: '50' },

    enablePinning: true,
    enableColumnPinning: true,
    positionToolbarAlertBanner: "none",
    positionToolbarDropZone: "top",
    enableFullScreenToggle: true,
    onIsFullScreenChange: handleFullScreenToggle,

    initialState,

    showAlertBanner: true,
    showToolbarDropZone: true,
    enableStickyFooter: false,

    // mantineTableBodyRowProps,

    columnFilterDisplayMode: "subheader",
    icons: {
      IconSortAscending: SortUp,
      IconArrowsSort: SortUpDown,
      IconSortDescending: SortDown,

      IconBaselineDensityLarge: () => <TbBaselineDensityLarge size={18} />,
      IconBaselineDensityMedium: () => <TbBaselineDensityMedium size={18} />,
      IconBaselineDensitySmall: () => <TbBaselineDensitySmall size={18} />,
      IconSearch: () => <TbSearch size={18} />,
      IconSearchOff: () => <TbSearchOff size={18} />,
      IconFilter: () => <TbFilter size={18} />,
      IconFilterOff: () => <TbFilterOff size={18} />,

      IconResizeHandle: () => <GrDrag color="gray" />,
      IconColumns: () => <BsSliders size={18} />,
      IconMaximize: () => <IoIosExpand size={18} />,
      IconMinimize: () => <IoIosContract size={18} />,
      IconGripHorizontal: () => <RxDragHandleDots2 />,
      IconClearAll: () => <MdClearAll size={18} />,
      IconBoxMultiple: () => <VscGroupByRefType size={18} />,
      IconArrowAutofitContent: () => <TbArrowAutofitContent size={18} />,
      IconEyeOff: () => <IoMdEyeOff size={18} />,
      IconX: () => <ImCross size={8} />,
    },

    mantineColumnActionsMenuProps: {
      sx: {
        zIndex: "9999",
        backgroundColor: "lightgrey",
        border: "1px solid darkgrey",
        borderRadius: "8px",
        padding: "10px",
        color: "black",
      },
    },
    mantineTableHeadCellProps: {
      sx: {
        "&[data-tooltip]::before": {
          display: "none",
        },
      },
    },
    mantineColumnActionsMenuProps: {
      sx: {
        "&[data-tooltip]::before": {
          display: "none",
        },
      },
    },
    mantineToolbarAlertBannerBadgeProps: {
      sx: {
        margin: "0px 0px 0px 5px",
        backgroundColor: themeKeys.TableHead,
        color: "#464f60cc",
        "& .mantine-Alert-root": {},
      },
    },

    mantineToolbarAlertBannerProps: {
      sx: {
        // padding: '20px'
      },
    },

    mantineFilterTextInputProps: {
      style: {},
    },
    mantineTableFooterCellProps: {
      sx: {
        backgroundColor: themeKeys.TableHead,
        "& .mantine-TableFooterCell-Content": {
          justifyContent: "center",
          fontSize: "12px",
          color: "#464f60cc",
          fontWeight: "700",
          margin: "0px 0px 0px 40px",
        },

        fontSize: "12px",
        fontWeight: "700",
        textAlign: "center",
        padding: "10px",
        color: "#464f60cc",
      },
    },
    mantineTableHeadCellProps: {
      sx: {
        boxShadow:
          "4px 0 8px -2px rgba(0, 0, 0, 0.2), 4px 0 8px -2px rgba(0, 0, 0, 0.2)",
        "& .mantine-TableHeadCell-Content:first-of-type": {
          justifyContent: "space-between",

          fontSize: "12px",
          color: "#464f60cc",
          fontWeight: "700",
          margin: "0px 0px 0px 0px",
        },
        "& .mantine-TableHeadCell-Content-Wrapper": {
          overflow: "visible",
        },
        "& .mantine-TableHeadCell-Content-Labels": {},

        backgroundColor: themeKeys.TableHead,
        maxHeight: "20px",
        minHeight: "20px",
        fontWeight: "700",
        color: "red",

        fontSize: "4px",
      },
      align: "left",
    },
    mantineToolbarAlertBannerProps: {
      sx: {
        backgroundColor: "transparent !important",
        "& .mantine-Stack-root": {
          fontSize: "12px !important",
          fontWeight: "500",
          color: "#464f60cc",
        },
        "& .mantine-Alert-root mantine-1al1vhb": {
          padding: "5px !important",
        },
      },
    },
    mantineTableBodyCellProps: (cell) => ({
      onClick: handleRowDoubleClick,
      "data-row-index": cell.row.index,
      style: {
        fontSize: "12px",
        color: "#464f60cc",
        alignSelf: "center",
        textAlign: cell.column.id === "age" ? "right" : "center",
      },
    }),
    // mantineTableBodyCellProps: (cell) => ({
    //   style: {
    //     fontSize: "12px",
    //     color: "#464f60cc",
    //     alignSelf: "center",
    //     textAlign: cell.column.id === "age" ? "right" : "center",
    //   },
    // }),

    mantineTopToolbarProps: {
      sx: {
        backgroundColor: "transparent",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        "& .mantine-Menu-dropdown": {
          borderColor: "red !important",
        },
      },
    },
    mantineTableContainerProps: {
      sx: {
        maxheight: isFullScreen ? "78vh" : "63vh",
        minHeight: isFullScreen ? "78vh" : "63vh",

        margin: "0px 0px 0px 0px",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        border: "none",
        boxShadow:
          "4px 0px 8px rgba(0, 0, 0, 0.05), -4px 0px 8px rgba(0, 0, 0, 0.05), 0px -4px 8px rgba(0, 0, 0, 0.05)",

        fontSize: "2px",
        "&::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#e6e6e6",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
        "&::-webkit-scrollbar-horizontal": {
          height: "4px",
        },
        "&::-webkit-scrollbar-horizontal:hover": {
          height: "4px",
        },
        "@media (min-height: 780px) and (max-height: 799px)": {
          maxHeight: "69vh",
          minHeight: "69vh",
        },
        "@media (min-height: 700px) and (max-height: 779px)": {
          maxHeight: "66.5vh",
          minHeight: "66.5vh",
        },
        "@media (min-height: 600px) and (max-height: 699px)": {
          maxHeight: "63vh",
          minHeight: "63vh",
        },
        "@media (min-height: 800px) and (max-height: 999px)": {
          maxHeight: "72vh",
          minHeight: "72vh",
        },
        "@media (min-height: 500px) and (max-height: 599px)": {
          maxHeight: "56vh",
          minHeight: "56vh",
        },
        "@media (min-height: 300px) and (max-height: 499px)": {
          maxHeight: "50vh",
          minHeight: "50vh",
        },
      },
    },
    mantinePaperProps: {
      sx: {
        "& .mantine-TableHeadCell-Content": {
          "&:first-of-type": {
            justifyContent: "flex-start",
            margin: "0px",
            width: "10px",
          },
        },
        borderRadius: "8px",
        border: "none",
        borderWidth: "0px",
        borderColor: "transparent !important",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none !important",

        "--mrt-base-background-color": "red  !important",
      },
    },
    mantineTableHeadProps: {
      sx: {
        borderRadius: "8px",
        "& .mantine-TableHeadCell-Content": {
          "&:first-of-type": {
            justifyContent: "flex-start",
            margin: "0px",
            // width: '10px',
          },
        },
      },
    },
    mantineSkeletonProps: {
      sx: {
        border: "none",
        borderRadius: "8px",
      },
    },
    mantineTableBodyProps: {
      sx: {
        "& .mantine-TableBodyCell-Content": {
          justifyContent: "center",
          fontSize: "12px",
          color: "red",
          fontWeight: "700",
        },

        "& tr.selected": {
          backgroundColor: "green !important", // Example color for selected rows
        },
      },
    },
    mantineTableProps: {
      sx: {
        border: "none",
        borderRadius: "8px",
        td: { fontSize: "12px" },
        th: { fontSize: "14px" },
      },
    },
    //  mantineTableHeadRowProps: {
    //   sx: {
    //     'th:first-of-type': {
    //      display: "none"
    //     },
    //   },
    // },
    // renderToolbarInternalActions: () => <FlowChartButtons />,
    renderTopToolbarCustomActions: () => <CustomToolbarActions />,
    mantineTableBodyRowProps: ({ row }) => ({
      onClick: () => {
        console.log("This is the Single Row Data", row.original);
        handleRowClick(row);
        onEditClickR(row.original);
        setSelectedERow(row.original);
      },
      onDoubleClick: () => {
        console.log("Double-clicked:", row.original);
        handleRowDoubleClick(row); // Double-click event handler
      },
      sx: {
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "black !important", // Hover color
        },
        "& tr:hover": {
          backgroundColor: "red !important", // Color when hovering over rows
        },
      },
    }),
    renderBottomToolbar: renderBottomToolbarCustomActions,
  });
  useEffect(() => {
    setIsGrouping(table.getState().grouping.length > 0);
  }, [table.getState().grouping]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      fullScreenRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);
  const [showDeleteToaster, setShowDeleteToaster] = useState(false);

  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const handleRowClick = (row) => {
    const rowId = row.id;
    setSelectedRowIds((prev) => {
      const isSelected = prev.includes(rowId);
      const newSelection = isSelected
        ? prev.filter((id) => id !== rowId)
        : [...prev, rowId];
      const selectionObject = newSelection.reduce(
        (acc, id) => ({ ...acc, [id]: true }),
        {}
      );

      // Update row selection
      table.setRowSelection(selectionObject);

      // Log selected rows
      console.log(
        "Currently Selected Rows:",
        newSelection.map((id) => table.getRow(id).original)
      );

      return newSelection;
    });
  };

  const handleDeleteSelectedRows = async () => {
    try {
      const promises = selectedRowIds.map(async (rowId) => {
        const row = table.getRow(rowId).original;
        await deleteJournalEntry(row.id);
      });
      await Promise.all(promises);
      // Handle post-delete logic, such as updating UI

      setSelectedRowIds([]); // Clear selected rows
      setShowDeleteToaster(true);
      console.log("Selected row(s) deleted successfully.");
    } catch (error) {
      console.error("Error deleting selected rows:", error);
    }
  };

  const handleEditClick = () => {
    if (selectedERow) {
      console.log("Editing row:", selectedERow);
      setSelectedEntry(selectedERow);
      // setScreen(2);
      setMessage("Data after clicking the edit button");
    } else {
      console.log("No row selected");
      setMessage("No row selected");
    }
  };

  const selectedRows = table.getSelectedRowModel().flatRows;

  const totalDebitC = selectedRows
    .reduce((sum, row) => sum + (row.original[LeftFirst] || 0), 0)
    .toFixed(2);

  const totalCreditC = selectedRows
    .reduce((sum, row) => sum + (row.original[RightFirst] || 0), 0)
    .toFixed(2);

  const totalDebitFCC = selectedRows
    .reduce((sum, row) => sum + (row.original[LeftSecond] || 0), 0)
    .toFixed(2);

  const totalCreditFCC = selectedRows
    .reduce((sum, row) => sum + (row.original[RightSecond] || 0), 0)
    .toFixed(2);

  return (
    <div>
      {showDeleteToaster && (
        <Toaster
          icon="check"
          text="Success"
          text2="Selected rows deleted successfully."
          handleClose={() => setShowDeleteToaster(false)}
          duration={3000} // duration in milliseconds
        />
      )}
      {showToaster && (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"Grid settings have been saved."}
          duration={4000}
          // handleClose={handleCloseToaster} // Optionally, add a close handler
        />
      )}
      <TableMain isFullScreen={isFullScreen}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: isFullScreen ? "0px 0px 0px 5px" : "0px 10px 0px 0px",
            margin: "0px 10px 0px 0px",
          }}
        >
          {/* <Button onClick={handleEditClick}>Edit</Button>
{message && <Text>{message}</Text>} */}
          {/* <button onClick={handleDeleteSelectedRows}>Delete Selected Rows</button> */}
          <Box>
            <CustomToolbarActions
              onAddNewClick={onAddNewClick}
              onSaveClick={handleSaveClick}
              showAddButton={true}
              showEditButton={true}
              onEditClick={onEditClick}
              showExportButton={true}
              showPreviewButton={true}
              showDeleteButton={true}
              onTableDetailDeleteClick={handleDeleteSelectedRows}
              showPrintButton={true}
              showReportButton={true}
              showSaveButton={true}
              Reverse={AddReverse}
              showButton={ReverseButtons}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <MRT_GlobalFilterTextInput table={table} />

            <MRT_ToggleGlobalFilterButton table={table} />
            <MRT_ToggleFiltersButton table={table} />
            <MRT_ShowHideColumnsButton table={table} />

            {/* <MRT_ShowHideColumnsMenu table={table}/> */}
            <MRT_ToggleDensePaddingButton table={table} />
            <MRT_ToggleFullScreenButton
              onClick={handleFullScreenToggle}
              table={table}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: isFullScreen ? "100%" : "100%",
            // backgroundColor: 'red',
          }}
        >
          {!isGrouping ? (
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "10px 0px 0px 0px",
                backgroundColor: "transparent",
                borderRight: "1px solid transparent",
                borderLeft: "1px solid transparent",
                borderTop: "1px solid transparent",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                borderColor: "transparent",
                width: isFullScreen ? "100%" : "100%",
                boxShadow:
                  "4px 0px 8px rgba(0, 0, 0, 0.05), -4px 0px 8px rgba(0, 0, 0, 0.05), 0px -4px 8px rgba(0, 0, 0, 0.05)",

                alignSelf: "center",
                padding: "0px 13px",
              }}
            >
              <VscGroupByRefType color="#464f60cc" />
              <Text
                style={{
                  color: "#7f7f7f",
                  textAlign: "left",
                  padding: "15px",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                Drag here for Grouping
              </Text>
            </Box>
          ) : (
            <>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  backgroundColor: "transparent",
                  borderRight: "1px solid transparent",
                  borderLeft: "1px solid transparent",
                  borderTop: "1px solid transparent",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  borderColor: "transparent",
                  width: isFullScreen ? "100%" : "100%",

                  boxShadow:
                    "4px 0px 8px rgba(0, 0, 0, 0.05), -4px 0px 8px rgba(0, 0, 0, 0.05), 0px -4px 8px rgba(0, 0, 0, 0.05)",
                  marginTop: "10px",
                  alignSelf: "center",
                  minHeight: "48px",
                  maxHeight: "48px",
                  padding: "0px 10px",
                  "& .mantine-Alert-root": {
                    // fontSize: '12px !important',
                    padding: "5px !important",
                    BackgroundColor: "red !important",
                  },
                }}
              >
                <VscGroupByRefType color="#464f60cc" />
                <MRT_ToolbarAlertBanner table={table} />
              </Box>
            </>
          )}

          <CustomDropZone
            table={table}
            onChange={() => setIsGrouping(table.getState().grouping.length > 0)}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            width: "100%",
            height: isFullScreen ? "100%" : "100%",
          }}
        >
          <MRT_TableContainer allowFullScreen table={table} />
        </Box>

        {/* /////////////////////////////////////////////////////////////////////// */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 30px",
            borderBottomRightRadius: "8px",
            borderBottomLeftRadius: "8px",
            marginTop: "0px",
            boxShadow:
              "0px 4px 8px rgba(0, 0, 0, 0.05), -4px 0px 8px rgba(0, 0, 0, 0.05), 4px 0px 8px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "10rem",
            }}
          >
            <div
              style={{ fontSize: "12px", fontWeight: 700, color: "#464f60cc" }}
            >
              {selectedRows.length} of {table.getCoreRowModel().rows.length}{" "}
              row(s) selected
            </div>
          </Box>
          <Box></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              justifyContent: "space-between",
              // gap: "70px",
              width: "18rem",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "12px",
                fontWeight: 700,
                color: "#464f60cc",
                justifyContent: "flex-start",
              }}
            >
              {FirstTitle}
            </div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                gap: "70px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0px",
                  alignItems: "flex-end",
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "center",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#464f60cc",
                  }}
                >
                  <FaDollarSign size={11} />
                  {totalDebitC}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "rgba(70, 79, 96, 0.5)",
                  }}
                >
                  USD
                </div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0px",
                  alignItems: "flex-end",
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "center",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#464f60cc",
                  }}
                >
                  <FaEuroSign size={11} />
                  {totalDebitFCC}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "rgba(70, 79, 96, 0.5)",
                  }}
                >
                  EUR
                </div>
              </Box>
            </Box>
          </Box>

          {SecondTitle && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "18rem",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#464f60cc",
                }}
              >
                {SecondTitle}
              </div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "70px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0px",
                    alignItems: "flex-end",
                    textAlign: "right",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignSelf: "center",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#464f60cc",
                    }}
                  >
                    <FaDollarSign size={11} />
                    {totalCreditC}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "rgba(70, 79, 96, 0.5)",
                    }}
                  >
                    USD
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0px",
                    alignItems: "flex-end",
                    textAlign: "right",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignSelf: "center",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#464f60cc",
                    }}
                  >
                    <FaEuroSign size={11} />
                    {totalCreditFCC}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "rgba(70, 79, 96, 0.5)",
                    }}
                  >
                    EUR
                  </div>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </TableMain>
    </div>
  );
};
export default MRTTableListScreens;
