import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeadlessTable2 from "../../../New-Screens/Components/MantineTable/HeadlessTable";
import HeadlessTableTN from "../../../New-Screens/Components/MantineTable/HeadlessTableTN";
import ActivityPart from "../../../New-Screens/Sections/ActivityPart";
import EditTransactionModal from "../../../New-Screens/Components/MantineTable/Models/EditTransactionModal";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";
import { useSelector } from "react-redux";
import HeadlessTableTransactionNumbering from "../../../New-Screens/Components/MantineTable/HeadlessTableTransactionNumbering";
import {
  TransactionGet,
  TransactionPost,
  TransactionUpdate,
  TransactionDefaultUpdate,
  getAllJournalEntries,
} from "../../../Api/Apis";
import Info from "../../../assets2/ButtonIcons/InformationIcon.svg";
import Modal from "react-modal";
import StatusButton from "../../../components/buttons/StatusButton";
import HeadlessModalTable from "../../../New-Screens/Components/MantineTable/HeadlessModalTable";
import Toaster from "../../../components/Modals/Toaster";
import { MdOutlineDownloading } from "react-icons/md";

const Wrapper = styled.div`
  padding: 5px 15px;
`;
const Body = styled.div``;

const customOverlayStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
};

const StyledModal = styled(Modal)`
  padding: 20px;
  max-width: 90%;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 100000;

  position: fixed; /* Make the modal fixed relative to the viewport */
  top: 50%; /* Position it 50% from the top */
  left: 50%; /* Position it 50% from the left */
  transform: translate(
    -50%,
    -50%
  ); /* Translate it by -50% on both axes to center it */
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 5px;
  gap: 10px;
`;
const SaveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  padding: 10px 5px;
  background-color: #1677ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  padding: 10px 5px;
  background-color: white;
  color: black;
  border: 1px solid #cbcbcb;
  border-radius: 8px;
  cursor: pointer;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Note = styled.div`
  background-color: #eef5ff;
  width: 500px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  margin: 20px 0;
`;
const Text = styled.div`
  color: #464f60;
  font-size: 12px;
`;

const TransactionNum = ({ setShowToasterPosted, setShowToasterPosted2 }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const Status = (p) => <StatusButton value={p.value} />;
  const [Rowdata, setRowData] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedTransactionData, setSelectedTransactionData] = useState(null);

  const [rowSelection, setRowSelection] = useState({});
  const [rowMSelection, setRowMSelection] = useState({});
  const [selectedRowModalData, setSelectedRowModalData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [showToaster, setShowToaster] = useState(false);
  const [toasterProps, setToasterProps] = useState({});

  //////////////////////////////////////////////////////////////
  const [journalEntries, setJournalEntries] = useState([]);
  const [isEditDisabled, setIsEditDisabled] = useState(false);

  // Helper function to extract the prefix from journalEntryNumber
  const extractPrefix = (journalEntryNumber) => {
    const specialCharIndex = journalEntryNumber.search(
      /[\/\-\_\.\,\:\;\\\+\*\!\?]/
    );
    // const specialCharIndex = journalEntryNumber.search(/[\/\-]/);
    return specialCharIndex !== -1
      ? journalEntryNumber.slice(0, specialCharIndex)
      : journalEntryNumber;
  };

  // Fetch all journal entries
  const fetchJournalEntries = async () => {
    try {
      const response = await getAllJournalEntries();
      if (response.status) {
        setJournalEntries(response.data);
      }
    } catch (error) {
      console.error("Error fetching journal entries:", error);
    }
  };

  // Check if the prefix matches with any journal entry
  const checkPrefixMatch = () => {
    if (selectedRowModalData) {
      const { prefix } = selectedRowModalData;

      const isMatchFound = journalEntries.some((entry) => {
        const journalEntryPrefix = extractPrefix(entry.journalEntryNumber);
        return journalEntryPrefix === prefix;
      });

      setIsEditDisabled(isMatchFound); // Disable the edit button if a match is found
    }
  };

  useEffect(() => {
    fetchJournalEntries();
  }, []);

  useEffect(() => {
    checkPrefixMatch(); // Check for prefix match when selectedRowModalData or journalEntries changes
  }, [selectedRowModalData, journalEntries]);

  ////////////////////////////////////////////////////////////

  ////////////////////////////
  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleEditClick = () => {
    if (selectedRowModalData) {
      openEditModal(); // Open the EditTransactionModal
    }
  };
  ////////////////////////
  const initialModalState = {
    selectedRowModalData: null,
    selectedTransactionData: null,
    rowSelection: {},
    rowMSelection: {},
  };

  const resetModalState = () => {
    setSelectedRowModalData(initialModalState.selectedRowModalData);
    setSelectedTransactionData(initialModalState.selectedTransactionData);
    setRowSelection(initialModalState.rowSelection);
    setRowMSelection(initialModalState.rowMSelection);
  };

  const [selectedMTransactionData, setSelectedMTransactionData] =
    useState(null);

  const [rowBody, setRowBody] = useState(null);
  const [columnsData] = useState([
    {
      accessorKey: "transactionType",
      header: "Transaction Type",
      mantineTableBodyCellProps: (cell) => ({
        style: {
          fontSize: "12px",
          color: "#464f60cc",
          alignSelf: "center",
          textAlign: "left",
          // padding: "0px 0px 0px 10px"
          borderRight: "1px solid #F2F2F2",
          borderTop: "1px solid #F2F2F2",

          borderBottom: "1px solid #F2F2F2",
          borderLeft: "1px solid none",
          display: "none",
        },
      }),
      mantineTableHeadCellProps: {
        sx: {
          boxShadow:
            "4px 0 8px -2px rgba(0, 0, 0, 0.2), 4px 0 8px -2px rgba(0, 0, 0, 0.2)",
          "& .mantine-TableHeadCell-Content:first-of-type": {
            justifyContent: "left",

            fontSize: "12px",
            color: "#464f60cc",
            fontWeight: "700",
            margin: "0px 0px 0px 0px",
          },

          "& .mantine-TableHeadCell-Content-Labels": {},

          backgroundColor: themeKeys.TableHead,
          display: "none",
          maxHeight: "20px",
          minHeight: "20px",
          fontWeight: "700",
          color: "red",

          fontSize: "4px",
        },
        align: "left",
      },
    },
    {
      accessorKey: "seriesType",
      header: "Series Name",
      mantineTableBodyCellProps: (cell) => ({
        style: {
          fontSize: "12px",
          color: "#464f60cc",
          alignSelf: "center",
          textAlign: "center",
          borderRight: "1px solid #F2F2F2",
          borderTop: "1px solid #F2F2F2",

          borderBottom: "1px solid #F2F2F2",
        },
      }),
    },

    {
      accessorKey: "prefix",
      header: "Prefix",
    },
    {
      accessorKey: "separator",
      header: "Separator",
    },
    {
      accessorKey: "suffix",
      header: "Suffix",
    },
    {
      accessorKey: "firstNumber",
      header: "First Number",
    },

    {
      accessorKey: "nextNumber",
      header: "Next Number",
    },
    {
      accessorKey: "length",
      header: "Length",
    },
    {
      accessorKey: "currentNumber",
      header: "Current Number",
    },
    {
      accessorKey: "isDefaultStatus",
      header: "Default",
      Cell: ({ cell, row }) =>
        row && row.depth > 0 ? (
          <StatusButton value={cell.getValue() ? "Yes" : "No"} />
        ) : null,
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell, row }) =>
        row && row.depth > 0 ? (
          <StatusButton value={cell.getValue() ? "Active" : "Inactive"} />
        ) : null,
    },
  ]);

  const HandleModal = () => {
    if (Object.keys(rowSelection).length > 0) {
      setModal(true); // Open the modal only if a row is selected
    } else {
      setToasterProps({
        text: "Warning",
        text2: "Please select a series first.",
        icon: "warning",
        duration: 5000,
      });
      setShowToaster(true);
    }
  };

  const clickToggle = () => {
    resetModalState();
    setModal(false);
    setSelectedRowModalData(null);
  };

  ////////////////////////////////////////////////

  ////////////////////////////////////////////
  const ToggleSave = async () => {
    if (selectedTransactionData) {
      const newRow = selectedTransactionData[selectedTransactionData.length - 1];
  
      // Check if the new row is indeed new and not a duplicate
      if (newRow.isNew) {
        try {
          const existingDataResponse = await TransactionGet();
  
          if (existingDataResponse.status) {
            const existingData = existingDataResponse.data;
  
            // Check for duplicates by both transactionType and seriesType
            const isDuplicate = existingData.some(
              (row) =>
                row.transactionType === newRow.transactionType &&
                row.seriesType === newRow.seriesType
            );
  
            if (isDuplicate) {
              setToasterProps({
                text: "Error",
                text2: `A series with the transaction type "${newRow.transactionType}" and series type "${newRow.seriesType}" already exists.`,
                icon: "cross",
                duration: 5000,
              });
              setShowToaster(true);
            } else {
              // Proceed to save the new series
              const response = await TransactionPost(
                newRow.transactionType,
                newRow.seriesType,
                newRow.length,
                newRow.prefix,
                newRow.separator,
                newRow.suffix,
                newRow.firstNumber,
                newRow.nextNumber,
                newRow.currentNumber,
                newRow.isDefaultStatus,
                newRow.status
              );
  
              if (response.status) {
                setToasterProps({
                  text: "Success",
                  text2: "Series posted successfully",
                  icon: "check",
                  duration: 5000,
                });
                setShowToaster(true);
                fetchData(); // Refresh data after successful post
              } else {
                setToasterProps({
                  text: "Error",
                  text2: "Transaction Numbering already existed with the same Prefix or Suffix",
                  icon: "cross",
                  duration: 5000,
                });
                setShowToaster(true);
              }
            }
          } else {
            setToasterProps({
              text: "Error",
              text2: "Failed to fetch existing data for validation.",
              icon: "cross",
              duration: 5000,
            });
            setShowToaster(true);
          }
        } catch (error) {
          console.error("Error posting series:", error);
          setToasterProps({
            text: "Error",
            text2: "An error occurred while posting the series.",
            icon: "cross",
            duration: 5000,
          });
          setShowToaster(true);
        }
      }
    }
  
    setModal(false);
    resetModalState();
    setSelectedRowModalData(null);
  };
  

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await TransactionGet();
      if (response.status) {
        const allData = response.data;

        const groupedData = allData.reduce((acc, item) => {
          if (!acc[item.transactionType]) {
            acc[item.transactionType] = [];
          }
          acc[item.transactionType].push(item);
          return acc;
        }, {});

        const structuredData = Object.keys(groupedData).map((type) => {
          const rows = groupedData[type];
          return {
            transactionType: type,
            subRows: rows,
          };
        });

        setRowData(structuredData);
      } else {
        setToasterProps({
          text: "Error",
          text2: "Something went wrong while fetching data",
          icon: "cross",
          duration: 5000,
        });
        setShowToaster(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setToasterProps({
        text: "Error",
        text2: "An error occurred while fetching data",
        icon: "cross",
        duration: 5000,
      });
      setShowToaster(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRowClick = (rowId, row) => {
    setRowSelection((prev) => {
      const newSelection = {};
      newSelection[rowId] = true;
      setSelectedTransactionData(row.original.subRows);
      return newSelection;
    });
  };

  const handleAddRowBelow = () => {
    if (!selectedTransactionData || selectedTransactionData.length === 0) {
      alert("Please select a transaction type first.");
      return;
    }
  
    const transactionType = selectedTransactionData[0]?.transactionType || "";
  
    const newRow = {
      id: Date.now(),
      transactionType: transactionType,
      seriesType: "",
      length: "",
      prefix: "",
      separator: "",
      suffix: "",
      firstNumber: "",
      nextNumber: "",
      currentNumber: "",
      isDefaultStatus: false,
      status: true,
      isNew: true,
    };
  
    // Update the main Rowdata with the new row
    setRowData((prevData) => {
      const updatedData = prevData.map((row) => {
        if (row.transactionType === transactionType) {
          return {
            ...row,
            subRows: [...row.subRows, newRow], // Add the new row to the correct transaction type
          };
        }
        return row;
      });
      return updatedData;
    });
  
    // Update selectedTransactionData to include the new row
    setSelectedTransactionData((prevData) => {
      return prevData ? [...prevData, newRow] : [newRow]; // Append the new row
    });
  };
  
  const handleRowChange = (index, key, value) => {
    const updatedData = [...selectedTransactionData];
    updatedData[index][key] = value;
    setSelectedTransactionData(updatedData);
  };

  const mantineTableBodyRowPropsTD = ({ row }) => ({
    onDoubleClick: () => {
      // Open the modal on double click
      HandleModal(row.original);  // Pass any relevant data from the row if needed
    },
    onClick: () => handleRowClick(row.id, row),
    selected: !!rowSelection[row.id],
    sx: (theme) => ({
      cursor: "pointer",
      pointerEvents: row.depth === 0 ? 'auto' : 'none',
      backgroundColor: rowSelection[row.id]
        ? theme.colors.blue[0]
        : "transparent",
      "&:hover": {
        backgroundColor: rowSelection[row.id]
          ? theme.colors.blue[1]
          : theme.colors.gray[0],
      },
    }),
  });

  ////////////////////////////////////
  const handleRowMChange = (index, key, value) => {
    const updatedData = [...selectedMTransactionData];
    updatedData[index][key] = value;
    setSelectedMTransactionData(updatedData);
  };

  const handleRowMClick = (rowId, row) => {
    console.log("Modal row clicked:", rowId, row.original);
    setRowMSelection((prev) => {
      const newMSelection = {};
      newMSelection[rowId] = true;
      return newMSelection;
    });
  };

  const mantineTableBodyRowProps = ({ row }) => ({
    onClick: (event) => {
      console.log("Row data:", row.original);

      // Update selected row data
      setSelectedRowModalData(row.original);

      // Ensure newly added row stays in the table's data
      setSelectedTransactionData((prevData) => {
        const newRowExists = prevData.some((r) => r.isNew);
        if (newRowExists) {
          return prevData; // No changes needed if new row exists
        }

        return [...prevData]; // Simply return current data without resetting it
      });

      // Handle row selection
      const toggleHandler = row.getToggleSelectedHandler();
      toggleHandler(event); // Pass the event to maintain original behavior
    },
    sx: {
      cursor: "pointer",
      "td:first-of-type": {
        display: "none", // Hide the checkbox column in the body
      },
    },
  });

  // const mantineTableBodyRowPropsModalTable = ({ row }) => ({
  //   onClick: () => handleRowMClick(row.id, row),
  //   selected: !!rowMSelection[row.id],
  //   sx: (theme) => ({
  //     cursor: "pointer",
  //     backgroundColor: rowMSelection[row.id] ?
  //       "#B9DAF8"
  //       : "#B9DAF8",
  //     "&:hover": {
  //       backgroundColor: rowMSelection[row.id]
  //         ? theme.colors.blue[1]
  //         : theme.colors.gray[0],
  //     },
  //   }),
  // });

  ////////////////////////////////////////

  const toggleStatus = async () => {
    if (selectedRowModalData) {
      try {
        const updatedStatus = !selectedRowModalData.status;
        const response = await TransactionUpdate(
          selectedRowModalData.id,
          updatedStatus
        );

        if (response.status) {
          setToasterProps({
            text: "Success",
            text2: "Series status updated successfully",
            icon: "check",
            duration: 5000,
          });
          setShowToaster(true);

          // Update the selected row data directly
          setSelectedRowModalData((prev) => ({
            ...prev,
            status: updatedStatus,
          }));

          // Update the entire transaction data to reflect the change
          setSelectedTransactionData((prevData) =>
            prevData.map((item) =>
              item.id === selectedRowModalData.id
                ? { ...item, status: updatedStatus }
                : item
            )
          );

          // Refresh the full table data
          await fetchData();
        } else {
          setToasterProps({
            text: "Error",
            text2: "Failed to update status",
            icon: "cross",
            duration: 5000,
          });
          setShowToaster(true);
        }
      } catch (error) {
        console.error("Error updating status:", error);
        setToasterProps({
          text: "Error",
          text2: "An error occurred while updating the status",
          icon: "cross",
          duration: 5000,
        });
        setShowToaster(true);
      }
    }
    setModal(false);
    resetModalState();
    setSelectedRowModalData(null);
  };

  ///////////////////////////////////////////////

  const ToggleDefaultStatus = async () => {
    if (selectedRowModalData) {
      try {
        const updatedDefaultStatus = !selectedRowModalData.isDefaultStatus;

        if (updatedDefaultStatus) {
          // Set all other transactions with the same transactionType to isDefaultStatus: false
          const response = await TransactionGet();
          if (response.status) {
            const allTransactions = response.data;

            const similarTransactions = allTransactions.filter(
              (item) =>
                item.transactionType === selectedRowModalData.transactionType &&
                item.id !== selectedRowModalData.id // Exclude the currently selected row
            );

            // Update each similar transaction to have isDefaultStatus: false
            await Promise.all(
              similarTransactions.map((transaction) =>
                TransactionDefaultUpdate(transaction.id, false)
              )
            );
          }
        }

        // Now update the selected transaction to isDefaultStatus: true
        const response = await TransactionDefaultUpdate(
          selectedRowModalData.id,
          updatedDefaultStatus
        );

        if (response.status) {
          setSelectedRowModalData((prev) => ({
            ...prev,
            isDefaultStatus: updatedDefaultStatus,
          }));
          setToasterProps({
            text: "Success",
            text2: "Series set to default successfully",
            icon: "check",
            duration: 5000,
          });
          setShowToaster(true);
          await fetchData();
        } else {
          setToasterProps({
            text: "Error",
            text2: "Failed to update default status",
            icon: "cross",
            duration: 5000,
          });
          setShowToaster(true);
        }
      } catch (error) {
        console.error("Error updating default status:", error);
        setToasterProps({
          text: "Error",
          text2: "An error occurred while updating the default status",
          icon: "cross",
          duration: 3000,
        });
        setShowToaster(true);
      }
    }
    setModal(false);
    resetModalState();
    setSelectedRowModalData(null);
  };

  // Function to specifically update modal data from the current selection
  const updateModalData = () => {
    if (selectedTransactionData) {
      // Re-fetch or update the modal's data
      const updatedModalData = Rowdata.find(
        (row) =>
          row.transactionType === selectedTransactionData[0]?.transactionType
      )?.subRows;

      if (updatedModalData) {
        setSelectedTransactionData(updatedModalData); // Update modal table data
      }
    }
  };

  // Update Modal Data on Row Update
  useEffect(() => {
    if (selectedRowModalData) {
      updateModalData();
    }
  }, [selectedRowModalData]);
  ///////////////////////////////////////////////
  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Wrapper>
      {showToaster && (
        <Toaster {...toasterProps} handleClose={() => setShowToaster(false)} />
      )}
      {showEditModal && selectedRowModalData && (
        <EditTransactionModal
          isOpen={showEditModal}
          onRequestClose={closeEditModal}
          transactionData={selectedRowModalData}
        />
      )}
      {modal && (
        <StyledModal
          isOpen={modal}
          onRequestClose={clickToggle}
          contentLabel="Transaction Details"
          ariaHideApp={false}
          style={customOverlayStyles}
        >
          {selectedTransactionData &&
            (loading ? (
              <MdOutlineDownloading />
            ) : (
              <HeadlessModalTable
                columns={columnsData
                  .filter((column) => column.accessorKey !== "transactionType")
                  .map((column) => ({
                    ...column,
                    Cell: ({ cell, row }) => {
                      // Check if row is marked as new and if the column is one of the specific ones
                      if (
                        row.original.isNew &&
                        [
                          "seriesType",
                          "prefix",
                          "suffix",
                          "firstNumber",
                          "separator",
                        ].includes(cell.column.id)
                      ) {
                        // Render input for new rows
                        return (
                          <input
                            autoFocus={cell.column.id === "seriesType"}
                            onClick={handleInputClick}
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              outline: "none",
                              boxShadow: "none",
                              color: "#464f60cc",
                              fontSize: "12px",
                              minWidth: "50px", // Minimum width
                              width: "auto", // Allow width to grow based on content
                              maxWidth: "100%", // Ensure it doesn't exceed cell width
                              textAlign: "center", // Center text within input
                              padding: "0", // Remove default padding
                              margin: "0", // Remove default margin
                              display: "inline-block", // Make sure input respects its width
                            }}
                            type="text"
                            value={cell.getValue() || ""}
                            onChange={(e) =>
                              handleRowChange(
                                row.index,
                                cell.column.id,
                                e.target.value
                              )
                            }
                          />
                        );
                      }

                      // Handle isDefaultStatus and status columns separately for StatusButton
                      if (column.accessorKey === "isDefaultStatus") {
                        return (
                          <StatusButton
                            value={cell.getValue() ? "Yes" : "No"}
                          />
                        );
                      }

                      if (column.accessorKey === "status") {
                        return (
                          <StatusButton
                            value={cell.getValue() ? "Active" : "Inactive"}
                          />
                        );
                      }

                      // For other columns, use the original logic or default to cell value
                      return column.Cell
                        ? column.Cell({ cell, row })
                        : cell.getValue();
                    },
                  }))}
                data={selectedTransactionData}
                rowSelection={true}
                mantineSelectCheckboxProps={({ row, checked, table }) => {
                  return {
                    sx: {
                      display: "none",
                      // Aligns checkbox to the left
                      width: "0px", // Adjust width of the checkbox
                      height: "20px", // Adjust the height if needed
                      padding: "0", // Remove padding
                      margin: "0px 0px 0px 0px", // Remove margin
                      cursor: "pointer",
                      // Light background when checked
                      // Change border color when checked
                      // Slight rounding for a clean look
                    },
                  };
                }}
                mantineSelectAllCheckboxProps={({ checked, table }) => {
                  return {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start", // Align checkbox to the left
                      width: "0px", // Adjust width for the "Select All" checkbox
                      height: "0px", // Adjust height
                      padding: "0",
                      margin: "0",
                    },
                    checked,
                    onChange: () => {
                      table.toggleAllRowsSelected(); // Toggle select all rows
                    },
                  };
                }}
                expandingRow={false}
                TitleButton={true}
                titleName={
                  selectedTransactionData[0]?.transactionType.toUpperCase() ||
                  "TRANSACTION NUMBERING"
                }
                showAddNotesButton={false}
                onAddNotesClick={handleAddRowBelow}
                state={{ rowMSelection }}
                mantineTableBodyRowProps={mantineTableBodyRowProps}
                onAddSeriesClick={handleAddRowBelow}
                onActivateClick={toggleStatus}
                showActivateButton={selectedRowModalData?.status ? false : true}
                onInActiveClick={toggleStatus}
                showInActiveButton={selectedRowModalData?.status ? true : false}
                showDefaultButton={true}
                onDefaultClick={ToggleDefaultStatus}
                DisableActivateButton={
                  selectedRowModalData === null ? true : false
                }
                DisableDefaultButton={
                  selectedRowModalData === null || !selectedRowModalData?.status
                    ? true
                    : false
                }
                onEditModalClick={handleEditClick}
                showEditModalButton={isEditDisabled ? false : true}
                disableEditSeriesButton={
                  selectedRowModalData === null ? true : false
                }
                // MDisabled={Object.keys(rowMSelection).length === 0}
              />
            ))}
          <BottomContainer>
            <Note>
              <img
                src={Info}
                style={{ width: "16px", height: "16px" }}
                alt="dqwd"
              />
              <Text>
                The numbering series cannot be modified after the transaction
                has been created.
              </Text>
            </Note>
            <ButtonContainer>
              <CloseButton onClick={clickToggle}>Close</CloseButton>
              <SaveButton onClick={ToggleSave}>Save</SaveButton>
              {/* <button onClick={handleEditClick} disabled={isEditDisabled}>Edit</button> */}
            </ButtonContainer>
          </BottomContainer>
        </StyledModal>
      )}

      <Body>
        {loading ? (
          <MdOutlineDownloading />
        ) : (
          <HeadlessTableTransactionNumbering
            columns={columnsData}
            data={Rowdata}
            ToggleBtnTitle={"AUTO NUMBERING"}
            showAddNotesButton={true}
            onAddNotesClick={HandleModal}
            TitleButton={true}
            titleName={"TRANSACTION NUMBERING"}
            SubRows={(row) => row.subRows}
            RowData={(row) => setRowBody(row)}
            rowSelection={false}
            expandingRow={true}
            editiing={false}
            state={{ rowSelection }}
            renderExpandButton={() => null}
            mantineTableBodyRowProps={mantineTableBodyRowPropsTD}
            getRowCanExpand={(row) => row.depth === 0}
            mantineExpandAllButtonProps={({ table }) => ({
              sx: {
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#007BFF",
                backgroundColor: "transparent",
                "&:hover": {
                  color: "#0056b3",
                  backgroundColor: "transparent",
                },
              },
              children: (
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px",alignItems: "center",
                 marginBottom: "8px",
                  color: "#464f60",
                  fontWeight: "700", }}>
Transaction Type                  
                </div>
              ),
            })}
            mantineExpandButtonProps={({ row }) => {
              if (row.depth !== 0) {
                // Hide the expand button for sub-rows
                return { style: { display: "none" } };
              }

              const transactionType = row.original?.transactionType;

              // Show the expand/collapse button for the main rows (depth === 0)
              return {
                sx: {
                  cursor: "pointer",
                  display: "flex",
                  backgroundColor: "transparent",
                  flexDirection: "row", // Arrange icon and text side by side
                  alignItems: "center", // Align icon and text vertically
                  gap: "2px", // Adds space between the icon and text
                  justifyContent: "flex-start",
                  width: "150px", // Aligns items to the start (no extra space)
                  "&:hover": {
                    backgroundColor: "transparent", // Light grey background on hover
                    // Optional: Add some rounding to the corners
                  },
                },
                children: (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                    <div
                      style={{
                        color: "#464F60",
                        fontSize: "12px",
                        fontWeight: "400",
                        width: "120px"
                      }}
                    >
                      {transactionType}
                    </div>{" "}
                    {/* Display the transactionType */}
                    <div>
                    {row.getIsExpanded() ? (
                      <LuChevronDown size={20} /> // Icon for expanded row
                    ) : (
                      <LuChevronRight size={20} /> // Icon for collapsed row
                    )}
                    </div>
                  </div>
                ),
              };
            }}
          />
        )}
        <ActivityPart
          ShowButton={false}
          Val={true}
          filterName={"TransactionNumbering"}
        />
      </Body>
    </Wrapper>
  );
};

export default TransactionNum;
