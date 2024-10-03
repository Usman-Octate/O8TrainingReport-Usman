import React, { useRef, useState, useEffect } from "react";
import AutoSave from "react-autosave";
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
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuChevronRight } from "react-icons/lu";

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
import { LuChevronDown } from "react-icons/lu";
import FlowChartButtons from "../../../components/buttons/FlowChartButtons";
import { useAppContext } from "../../../context/AppProvider";
import { useSelector } from "react-redux";
import AddButton from "../../../components/buttons/AddButton";
import CustomToolbarActions from "./CustomToolbarActions";
import { Menu } from "@mantine/core";
import Toaster from "../../../components/Modals/Toaster";

import styled from "styled-components";
import { BorderTop } from "styled-icons/boxicons-regular";
import { BackgroundColor } from "styled-icons/foundation";
import screenfull from "screenfull";
import "./Style.css";

const menuItemStyle = {
  padding: "8px 16px",
  fontSize: "12px",
  cursor: "pointer",
  color: "#464f60cc",
  borderRadius: "4px",
  transition: "background-color 0.3s ease",
};

const HorizontalLine = styled.div`
  border-top: 1px solid #e0e0e0;
  margin-top: ${(props) => (props.isVisible ? "10px" : "30px")};
  width: 100%;
`;

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
  width: ${(props) => (props.isFullScreen ? "99.5%" : "100%")};
  height: ${(props) =>
    props.setTableHeight
      ? "40vh"
      : props.isVisible
      ? "65vh"
      : "5px"}; /* Adjust height based on isVisible */
  margin-top: ${(props) =>
    props.isFullScreen ? "0" : props.setMargin === "None" ? "0" : "1px"};
  margin-right: ${(props) => (props.isFullScreen ? "0" : "0px")};
  padding-top: ${(props) =>
    props.isFullScreen ? "10px" : "5px"}; /* Missing semicolon fixed */
  padding-left: ${(props) => (props.isFullScreen ? "5px" : "0px")};
  padding-right: ${(props) => (props.isFullScreen ? "5px" : "0px")};
  padding-bottom: ${(props) => (props.isFullScreen ? "5px" : "20px")};
  position: ${(props) => (props.isFullScreen ? "fixed" : "relative")};
  top: ${(props) => (props.isFullScreen ? "0" : "auto")};
  left: ${(props) => (props.isFullScreen ? "0" : "auto")};
  overflow-x: ${(props) => (props.isFullScreen ? "hidden" : "visible")};
  overflow-y: ${(props) => (props.isFullScreen ? "hidden" : "visible")};
  background-color: transparent;
  transition: height 0.3s, width 0.3s, margin-top 0.3s;
  z-index: ${(props) => (props.isFullScreen ? "10" : "auto")};
`;

const HeadlessTableTN = ({
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

  onAddRowAbove,
  onAddRowBelow,
  onDeleteRow,
  ToggleBtnTitle,
  showAttachButton,
  showAddNotesButton,
  showActivateButton,
  showDefaultButton,
  onDefaultClick,
  onAddNotes,

  MDisabled,

  onUpdate,
  onDeleteRowRecord,
  onAddNew,
  onAddNotesClick,
  onAddNotesDoubleClickIN,
  TitleButton,
  titleName,
  SubRows,
  SeriesButton,
  rowSelection,
  editiing,
  onClickRow,
  state,
  mantineTableBodyRowProps,
  AddSeriesClick,
  expandingRow,
  showBranchButton,
  CustomButtons,
  getRowCanExpand,
  mantineExpandToggleProps,
  mantineExpandAllButtonProps,
  currencyButton,
  currencyClick,
  PeriodButton,
  PeriodClick,
  mantineExpandButtonProps,
  setMargin,
  setTableHeight,
  GreyTitle,
  LineUnderTable,
  TableShadow,
  TableBorder,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [isGrouping, setIsGrouping] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const fullScreenRef = useRef(null);
  const [showToaster, setShowToaster] = useState(false);

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

  const handleRowDoubleClick = (row) => {
    if (onAddNotesClick) {
      onAddNotesDoubleClickIN(row); // Trigger the onAddNotesClick function
    }
  };
  const table = useMantineReactTable({
    columns,
    data,
    enableColumnResizing: false,
    defaultColumn: {
      minSize: 20, //allow columns to get smaller than default
      maxSize: 60, //allow columns to get larger than default
      size: 70, //make columns wider by default
    },
    // enableGrouping: true,
    enablePagination: false,
    enableColumnOrdering: false,
    enableStickyHeader: true,
    enableBottomToolbar: true,
    enableStickyFooter: true,
    enableSorting: false, // mantineSelectCheckboxProps: {color: "red", width: '50' },
    enableColumnActions: false,
    enableExpanding: expandingRow,
    getSubRows: SubRows,
    mantineExpandToggleProps: mantineExpandToggleProps,
    // enableRowSelection: rowSelection,
    enableEditing: editiing,
    mantineExpandButtonProps,
    // enablePinning: true,
    // enableColumnPinning: true,
    positionToolbarAlertBanner: "none",
    positionToolbarDropZone: "top",
    enableFullScreenToggle: true,
    getRowCanExpand: getRowCanExpand,
    mantineExpandAllButtonProps: mantineExpandAllButtonProps,

    onIsFullScreenChange: handleFullScreenToggle,
    mantineTableBodyRowProps: ({ row }) => ({
      onDoubleClick: () => handleRowDoubleClick(row),
      sx: {
        cursor: "pointer",
      },
    }),
    // initialState: { density: 'xs' },

    showAlertBanner: true,
    showToolbarDropZone: true,
    enableStickyFooter: false,

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
      IconDots: () => <BsThreeDotsVertical size={18} />,

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
      IconChevronRight: LuChevronRight,
      IconChevronDown: LuChevronDown,
      // IconChevronsDown: () => <LuChevronDown size={20} />,
    },
    getRowProps: (row) => ({
      onDoubleClick: () => handleRowDoubleClick(row),
    }),
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
    mantineTableFooterProps: {
      sx: {
        backgroundColor: "transparent",
        // border: '1px Solid #464f60cc',
        borderBottom: "1px solid lightgrey",
        borderLeft: "5px solid lightgrey",
      },
    },
    mantineTableFooterCellProps: {
      sx: {
        backgroundColor: "transparent",
      },
    },
    mantineTableFooterRowProps: {
      sx: {
        backgroundColor: "transparent",
      },
    },

    mantineToolbarAlertBannerBadgeProps: {
      sx: {
        margin: "0px 0px 0px 5px",
        backgroundColor: themeKeys.TableHead,
        color: "#464f60cc",
        "& .mantine-Alert-root": {
          // fontSize: '12px !important',
          // padding: '5px !important',
        },
      },
    },

    mantineToolbarAlertBannerProps: {
      sx: {
        // padding: '20px'
      },
    },

    mantineFilterTextInputProps: {
      style: {
        // width: "100px",
        // "& .mantine-wkkn0f": {
        //   padding: "5px 5px !important",
        // },
      },
    },
    mantineTableFooterCellProps: {
      sx: {
        backgroundColor: "transparent",

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
          justifyContent: "center",
          fontSize: "12px",
          width: "auto",
          color: "#464f60cc",
          fontWeight: "700",
          margin: "0px 0px 0px 0px",
          alignItems: "center",
        },

        "& .mantine-TableHeadCell-Content-Wrapper": {
          // backgroundColor: 'green ',
          // paddingRight: "0.2rem",
          // overflow: "visible",
          // paddingLeft: '1rem',
        },
        "& .mantine-TableHeadCell-Content-Labels": {
          // backgroundColor: 'green ',
          // paddingRight: '4rem',
          // paddingLeft: '1rem',
        },

        backgroundColor: themeKeys.TableHead,
        maxHeight: "20px",
        minHeight: "20px",
        fontWeight: "700",
        color: "red",
        // borderRadius: '8px',
        // padding: '0px 10px',
        fontSize: "4px",
        "&:first-of-type": {
          // Add styles specific to the first cell
          color: "blue", // Example: changing text color
          fontWeight: "900", // Example: changing font weight
        },
      },
      "&:first-of-type": {
        // Add styles specific to the first cell
        color: "blue", // Example: changing text color
        fontWeight: "900", // Example: changing font weight
      },
      align: "center",
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
          // fontSize: '12px !important',
          padding: "5px !important",
        },
      },
    },
    mantineTableBodyCellProps: (cell) => ({
      style: {
        fontSize: "12px",
        color: "#464f60cc",
        alignSelf: "center",
        // textAlign: cell.column.id === "age" ? "right" : "center",
        textAlign: "center",
        borderRight: "1px solid #F2F2F2",
        borderTop: "1px solid #F2F2F2",
        borderBottom: "1px solid #F2F2F2",
      },
    }),

    mantineTableBodyRowProps,

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
    state,

    mantineTableContainerProps: {
      sx: {
        maxHeight: isFullScreen ? "77vh" : "60vh",
        minHeight: setTableHeight ? "30vh" : isFullScreen ? "77vh" : "60vh",
        margin: "0px 0px 0px 0px",
        // borderRadius: '8px',
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderRadius: "8px",
        border: TableBorder ? "1px solid #dadbdf" : "none",
        // boxShadow: "4px 0px 8px rgba(0, 0, 0, 0.05), -4px 0px 8px rgba(0, 0, 0, 0.05)",
        boxShadow: TableShadow
          ? null
          : "4px 0px 8px rgba(0, 0, 0, 0.05), -4px 0px 8px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.05), 0px -4px 8px rgba(0, 0, 0, 0.05)",

        // display: "flex",
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignSelf: "center",
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
      },
    },
    mantinePaperProps: {
      sx: {
        borderRadius: "8px",
        border: "none",
        borderWidth: "0px",
        borderColor: "transparent !important",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none !important",
        // '& td:hover': {
        //   backgroundColor: themeKeys.TableHead,
        // },
        "--mrt-base-background-color": "red  !important",
        // boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.3)'
      },
    },
    mantineTableHeadProps: {
      sx: {
        borderRadius: "8px",
        "& .mantine-TableHeadCell-Content": {
          "&:first-of-type": {
            justifyContent: "flex-start",
            margin: "0px",
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
    // mantineTableBodyProps,

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
    mantineTableHeadRowProps: {
      sx: {
        "th:first-of-type": {
          justifyContent: "flex-end",
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
    // renderToolbarInternalActions: () => <FlowChartButtons />,
    renderTopToolbarCustomActions: () => <CustomToolbarActions />,

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

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      {showToaster && (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"Grid settings have been saved."}
          duration={4000}
          // handleClose={handleCloseToaster} // Optionally, add a close handler
        />
      )}
      <TableMain
        isFullScreen={isFullScreen}
        setMargin={setMargin}
        isVisible={isVisible}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: isFullScreen ? "0px 0px 0px 5px" : "0px 10px 0px 0px",
            margin: "5px 10px 13px 0px",
          }}
        >
          {CustomButtons ? null : (
            <Box>
              <CustomToolbarActions
                onAddNewClick={onAddNewClick}
                AddSeries={SeriesButton}
                showActivateButton={showActivateButton}
                onDefaultClick={onDefaultClick}
                showDefaultButton={showDefaultButton}
                // onSaveClick={handleSaveClick}
                ToggleBtnTitle={ToggleBtnTitle}
                //   showtToggleButton={true}
                showtTitleButton={TitleButton}
                TitleName={titleName}
                MDisabled={MDisabled}
                // showSaveButton={true}
                toggleVisibility={toggleVisibility}
                showAttachButton={showAttachButton}
                showAddNotesButton={showAddNotesButton}
                onAddNotesClick={onAddNotesClick}
                SeriesClick={AddSeriesClick}
                Branch={showBranchButton}
                showAddCurrencyButton={currencyButton}
                onAddCurrencyClick={currencyClick}
                showAddPeriodButton={PeriodButton}
                onAddPeriodClick={PeriodClick}
                showNewTitle={GreyTitle}
              />
            </Box>
          )}

          {CustomButtons ? null : (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <MRT_GlobalFilterTextInput table={table} />

              <MRT_ToggleGlobalFilterButton table={table} />
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: isVisible ? "grid" : "none",
            width: "100%",
            height: isVisible ? "auto" : "0",
            transition: "all 0.3s ease",
          }}
        >
          <MRT_TableContainer table={table} />
        </Box>
      </TableMain>
      {LineUnderTable ? null : <HorizontalLine isVisible={isVisible} />}
    </>
  );
};
export default HeadlessTableTN;
