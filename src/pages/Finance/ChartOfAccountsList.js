import React, { useState, useEffect, useMemo } from "react";
import Header from "../../components/parts/Header";
import StatusButton from "../../components/buttons/StatusButton";
import { useDispatch, useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";
import ChartOfAccountNew from "../../New-Screens/ChartOfAccountNew";
import { baseUrl } from "../../Api/baseUrl";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { fetchChartOfAccounts, GetSegment } from "../../Api/Apis";
import Toaster from "../../components/Modals/Toaster";
import "../../components/Loader/Loader.css";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";
import CurrencyTags from "../../New-Screens/Components/CurrencyTags";
import { ColumnVisibility } from "@tanstack/react-table";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";

const ChartOfAccountsList = (props) => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const [rowData, setRowData] = useState([]);

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID", size: 100 },
      {
        accessorKey: "accountCode",
        header: "Account Code",
        filterVariant: "date-range",
        sortingFn: "datetime",
        size: 100, //small column
      },
      {
        accessorKey: "accountName",
        header: "Account Name",
        filterVariant: "date-range",
        sortingFn: "datetime",
        size: 100, //small column
      },
      { accessorKey: "category", header: "Category", size: 120 },
      {
        accessorKey: "accountType",
        header: "Account Type",
        size: 100,
      },
      {
        accessorKey: "currencies",
        header: "Currency",
        filterVariant: "date-range",
        sortingFn: "datetime",
        size: 150,
        Cell: ({ cell }) => {
          const cellValue = cell.getValue();
          // Ensure cellValue is not null or undefined before passing to CurrencyTags
          return cellValue ? <CurrencyTags Data={cellValue} /> : null;
        },
      },
      {
        accessorKey: "isMainAccount",
        header: "Is Title Account",
        size: 120,
        Cell: ({ cell }) => {
          const value = cell.getValue();
          return value ? "Yes" : "No";
        },
      },
      {
        accessorKey: "isSubAccount",
        header: "Is Sub Account",
        size: 100,
        Cell: ({ cell }) => {
          const value = cell.getValue();
          return value ? "Yes" : "No";
        },
      },
      {
        accessorKey: "parentAccount",
        header: "Parent Account",
        filterVariant: "date-range",
        sortingFn: "datetime",
        size: 100,
      },
      {
        accessorKey: "enableCostCenter",
        header: "Enable Cost Center",
        filterVariant: "date-range",
        sortingFn: "datetime",
        size: 100,
        Cell: ({ cell }) => {
          const value = cell.getValue();
          return value ? "Yes" : "No";
        },
      },
      {
        accessorKey: "division",
        header: "Division",
        filterVariant: "date-range",
        sortingFn: "datetime",
        size: 100,
      },
      {
        accessorKey: "department",
        header: "Department",
        filterVariant: "date-range",
        sortingFn: "datetime",
        size: 100,
      },
      {
        accessorKey: "project",
        header: "Project",
        filterVariant: "date-range",
        sortingFn: "datetime",
        size: 100,
      },
      {
        accessorKey: "allowBudget",
        header: "Allow Budget",
        filterVariant: "date-range",
        size: 100,
        sortingFn: "datetime",
        Cell: ({ cell }) => {
          const value = cell.getValue();
          return value ? "Yes" : "No";
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        filterVariant: "date-range",
        sortingFn: "datetime",
        size: 100,
        Cell: ({ cell }) => {
          return (
            <StatusButton value={cell.getValue() ? "Active" : "Inactive"} />
          );
        },
      },
    ],
    []
  );

  const [loading, setLoading] = useState(false);
  const [showToasterDelete, setShowToasterDelete] = useState(false);
  const [showToasterUpdate, setShowToasterUpdate] = useState(false);
  const [showToasterPosted, setShowToasterPosted] = useState(false);
  const [disableHeaderButtons, setDisableHeaderButtons] = useState(false);
  const numberSeparator = useSelector((state) => state.number.NumberSeprator);
  const negativeSign = useSelector((state) => state.number.NegitiveValue);
  const keys = useSelector((state) => state.localization.keys);

  const [screen, setScreen] = useState(1);
  const [disableFields, setDisableFields] = useState(false);
  const [getVal, setGetVal] = useState();
  const [filterAccountCodeData, setFilteredAccountCodeData] = useState([]);
  const [filteredAccountName, setFilteredAccountName] = useState([]);
  // const [filteredAccountCode, setFilteredAccountCode] = useState([]);
  const [accountName, setAccountName] = useState([]);
  const [showToasterError, setShowToasterError] = useState(false);

  const HandleOnChanged = (selectedRow) => {
    setGetVal(selectedRow || null);
    console.log("Selected Row Data:", selectedRow);
    setGetVal(selectedRow || null);
    console.log("Selected Row Data:", selectedRow);
  };

  const handleScreeChange = () => {
    setGetVal(null);
    setScreen(2);
    setDisableHeaderButtons(true);
  };
  const handleEditButton = () => {
    console.log("Selected Value:", getVal);
    if (getVal) {
      setScreen(2);
    } else {
      setShowToasterError(true);
    }
  };

  const fetchData = async () => {
    setGetVal(null);
    setLoading(true);

    const data = await fetchChartOfAccounts();
    setLoading(false);
    setRowData(data);
    console.log(data);
    /******************AccountCODEDROPDOWN***************/
    var temp = [];
    var temp2 = [];

    temp = data.map((res) => res.accountCode);
    temp2 = data.map((res) => res.accountName);
    setFilteredAccountCodeData(temp);
    setAccountName(temp2);
    /*******************PARENTDROPDOWN******************/
    var tempName = [];
    var tempCode = [];
    tempName = data
      .filter((res) => res.isMainAccount === true)
      .map((res) => res.accountName);
    setFilteredAccountName(tempName);
    // tempCode = data
    //   .filter((res) => res.isMainAccount === true)
    //   .map((res) => res.accountCode);
    // setFilteredAccountCode(tempCode);
    // console.log(tempName, tempCode);
    // console.log(data);
    // if (!data) return;

    // const locale = numberSeparator === "." ? "de-DE" : undefined;
    // const formatNumber = (num) =>
    //   Number(num).toLocaleString(locale, {
    //     minimumFractionDigits: 0,
    //     maximumFractionDigits: 0,
    //   });

    // const formattedData = data.map((x) => ({
    //   ...x,
    //   accountCode: formatNumber(x.accountCode),
    //   balance: formatNumber(x.balance),
    //   balanceFC: formatNumber(x.balanceFC),
    // }));

    // setRowData(formattedData);
    // console.log("Value is Updated " + numberSeparator);
  };
  const [segmentData, setSegmentData] = useState([]);

  const GetData = async () => {
    const data = await GetSegment();
    setSegmentData(data.data);
  };
  console.log(segmentData, "SEGMENT");

  useEffect(() => {
    fetchData();
    GetData();
    // FilteredAccountCodeData();
  }, []);

  // const FilteredAccountCodeData = () => {
  //   var temp = [];
  //   temp = rowData.map((res) => res.accountCode);
  //   console.log(temp);
  //   setFilteredAccountCodeData(temp);
  // };
  // useEffect(() => {
  //   FilteredAccountCodeData();
  // }, []);

  const handleDoubleClick = () => {
    setDisableFields(true);
    setScreen(2);
  };

  const changeScreenOnDelete = () => {
    setScreen(1);
    setShowToasterDelete(true);
    fetchData();
    console.log("Deleted");
  };
  const changeScreenOnUpdate = () => {
    setScreen(1);
    setShowToasterUpdate(true);
    fetchData();
    console.log("Deleted");
  };
  const changeScreenOnPost = () => {
    setScreen(1);
    setShowToasterPosted(true);
    fetchData();
    console.log("postone");
  };
  const handleCloseToaster = () => {
    setShowToasterDelete(false);
  };
  const HandleErrorToaster = () => {
    setShowToasterError(false);
  };
  const AddNewAbleFields = () => {
    setDisableFields(false);
    console.log("lk");
  };
  const initialState = {
    grouping: ["category", "accountType"],
    columnVisibility: { id: false },
    density: "xs",
  };
  return screen === 1 ? (
    <Main>
      {showToasterError ? (
        <Toaster
          icon={"cross"}
          text={"Error"}
          text2={"Select Data before Editing."}
          handleClose={HandleErrorToaster}
          duration={4000}
        />
      ) : null}
      {showToasterDelete ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"The account has been deleted."}
          handleClose={handleCloseToaster}
          duration={4000}
        />
      ) : null}
      {showToasterPosted ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"The account has been created successfully."}
          handleClose={handleCloseToaster}
          duration={4000}
        />
      ) : null}

      {showToasterUpdate ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"Account updated successfully."}
          handleClose={handleCloseToaster}
          duration={4000}
        />
      ) : null}
      {showToasterPosted ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"The account has been created successfully."}
          handleClose={handleCloseToaster}
          duration={4000}
        />
      ) : null}
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100151}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1001}
            navActive={keys.KEY100132}
          />
          {loading ? (
            <div className="loader-container" style={{ height: "100vh" }}>
              <span className="loader"></span>
            </div>
          ) : (
            <MRTTableListScreens
              columns={columns}
              data={rowData}
              LeftFirst="Debit"
              LeftSecond="DebitFC"
              RightFirst="Credit"
              RightSecond="CreditFC"
              FirstTitle="Total Debit"
              SecondTitle="Total Credit"
              initialState={initialState}
              onAddNewClick={() => handleScreeChange()}
              onRowDoubleClick={handleDoubleClick}
              onEditClick={() => handleEditButton()}
              onEditClickR={HandleOnChanged}
              // handleSelectedRowEdit={}
              ReverseButtons={true}
              mantineExpandButtonProps={({ row }) => {
                if (row.depth === 0 || row.depth === 1) {
                  // Show the expand/collapse button for parent (depth 0) and child (depth 1) rows
                  const transactionType = row.original?.transactionType;

                  return {
                    sx: {
                      cursor: "pointer",
                      display: "flex",
                      backgroundColor: "transparent",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "2px",
                      justifyContent: "flex-start",
                      width: "150px",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    },
                    children: (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span
                          style={{
                            color: "#464F60",
                            fontSize: "12px",
                            fontWeight: "400",
                          }}
                        >
                          {transactionType}
                        </span>{" "}
                        {row.getIsExpanded() ? (
                          <LuChevronDown size={20} /> // Icon for expanded row
                        ) : (
                          <LuChevronRight size={20} /> // Icon for collapsed row
                        )}
                      </div>
                    ),
                  };
                }

                // Hide expand button for other rows
                return { style: { display: "none" } };
              }}
            />
            // <AgGridTable
            //   rowData={rowData}
            //   colDefs={colDefs}
            //   header={true}
            //   Setheight={true}
            //   clickScreenChange={() => handleScreeChange()}
            //   SelectRow={HandleOnChanged}
            //   handleEditButton={() => handleEditButton()}
            //   onRowDoubleClick={handleDoubleClick}
            // />
          )}
        </TopDiv>
      </TopDivWrapper>
    </Main>
  ) : (
    <ChartOfAccountNew
      SelectData={getVal}
      changeScreenOnDelete={changeScreenOnDelete}
      changeScreenOnUpdate={changeScreenOnUpdate}
      changeScreenOnPost={changeScreenOnPost}
      disableFields={disableFields}
      disableHeaderButtons={disableHeaderButtons}
      AddNewAbleFields={AddNewAbleFields}
      AccountCodeData={filterAccountCodeData}
      rowData={rowData}
      handleAddNew={props.onBreadcrumbClick}
      AccountNamesForParentDropdown={filteredAccountName}
      // AccountCodesForParentDropdown={filteredAccountCode}
      AccountName={accountName}
      segment={segmentData}
    />
  );
};

export default ChartOfAccountsList;
