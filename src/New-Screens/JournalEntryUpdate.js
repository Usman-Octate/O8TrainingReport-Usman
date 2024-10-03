import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import JournalDetails from "./Components/HeroSections/JournalDetails";
import NewScreensNav from "./Components/NewScreensNav";
import { useSelector } from "react-redux";
import MRTLinkedTransaction from "../New-Screens/Components/MantineTable/MRTLinkedTransaction";
import CustomModal from "../New-Screens/Components/MantineTable/Models/AddNoteModal";
import ActivityPart from "../New-Screens/Sections/ActivityPart";
import DropdownRenderer from "../New-Screens/Components/HeroSections/DropdownRenderer";
import MRTTableDetails from "../New-Screens/Components/MantineTable/MRTTableDetails";
import MRTSmallTables from "../New-Screens/Components/MantineTable/MRTSmallTables";
import Dotscell from "../components/Table/CustomCells/Dots";
import StatusButton from "../components/buttons/StatusButton";
import AmountCell from "../components/Table/CustomCells/AmountCell";
import TagsInput from "../New-Screens/Sections/TagsInput";
import AmountTotal from "../New-Screens/Sections/AmountTotal";
import Auto from "../assets2/ChartOfAccountNew/InputAuto.svg";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import DropdownInput from "../components/Inputs/DropdownInput";
import LargeButton from "../components/buttons/LargeButton";
import CalenderInput from "../components/Inputs/CalenderInput";
import TitleOfSection from "./Components/TitleOfSection";
import { JournalEntryPost } from "../Api/Apis";
import AttachmentUpload from "../components/Modals/AttachmentUpload";
import { utils } from "xlsx";
import { writeFile } from "xlsx";
import Toaster from "../components/Modals/Toaster";
import CurrencyInput2 from "../components/Inputs/CurrencyInput2";

import MRTTableInternalNotes from "./Components/MantineTable/MRTTableInternalNotes";
import EditModal from "./Components/MantineTable/Models/EditModal";
import { fetchAllNotes, updateNote, createNote, deleteNote, updateJournalEntry } from "../Api/Apis";
import MyModal from "../components/Modals/MyModal";

const ISattachments = {
  density: "md",
  columnSizing: {
    documentName: 10,
    issueDate: 10,
    expiryDate: 10,
    attachedBy: 10,
    documentNo: 10,
    notes: 10,
    status: 10,
  },
};

const Grab = styled.div`
  /* display: flex; */
  width: 100%;
  // height: 100vh;
`;
const Wrapper5 = styled.div`
  width: 100%;
`;
const Text2 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #5f656f;
  width: 120px;
  padding-left: 12px;
`;
const Check1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 175px;
  padding-left: 14px;
`;
const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #5f656f;
  width: 120px;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin: 15px 0;
`;
const Check2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  padding-right: 25px;
`;
const Tagline = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #5f656f;
  width: 40px;
  height: 10px;
  text-align: center;
  position: relative;
  top: 5px;
  left: 17px;
  background-color: white;
`;
const InputField = styled.input`
  border: 1px solid #dadbdf;
  border-radius: 8px;
  padding-bottom: 65px;
  width: 98%;
  padding-left: 10px;
  outline: none;
  padding-top: 10px;
`;
const InputSection1 = styled.div``;
const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 10px 0px;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;
const Wrap5 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-right: 10%;
`;

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  width: 100.3%;
  height: 255px;
  border-radius: 8px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  padding-bottom: 20px;
  margin-top: -15px;
`;
const Wrapit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 430px) {
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  height: 80vh;
`;
const Div = styled.div`
  height: 79vh;
  width: 99%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 20px;
`;
const Wrap = styled.div`
  padding: 0 10px;
`;

const JournalEntryUpdate = ({ entryData }) => {
  // console.log("enteruy",entryData
  // );
  useEffect(() => {
    console.log("JournalEntryUpdate received entryData:", entryData);
  }, [entryData]);


  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [isCheck, setIsCheck] = useState(true);
  const [isTick, setIsTick] = useState(true);

  const [selectedRows, setSelectedRows] = useState([]);

  const [selectedTDRows, setSelectedTDRows] = useState([]);

  const handleOnTick = () => {
    setIsTick(!isTick);
  };

  const handleOnCheck = () => {
    setIsCheck(!isCheck);
  };

  const Dots = () => {
    return <Dotscell />;
  };
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };

  const Account = (p) => {
    return <AmountCell value={p.value} />;
  };
  const Cell = styled.div`
    width: 100px;
    overflow: hidden;
    white-space: nowrap; /* Prevent text wrapping */
    text-overflow: ellipsis; /* Truncate text with an ellipsis */
  `;
  const CellComponent = (props) => {
    return <Cell>{props.value}</Cell>;
  };

  //////////////////////////// After Migration of the DATA ////////////////////////////////

  /////////////Attachments//////////
  const columns2 = useMemo(
    () => [
      { accessorKey: "documentNo", header: "Document No" },
      { accessorKey: "documentName", header: "Document Name" },
      { accessorKey: "uploadDate", header: "Upload Date" },
      { accessorKey: "expiryDate", header: "Expiry Date" },
      {
        accessorKey: "attachedBy",
        header: "Attached by",
        enableSorting: false,
        size: 350,
      },

      { accessorKey: "notes", header: "Notes", enableSorting: false },
      { accessorKey: "status", header: "Status", enableSorting: false },
    ],
    []
  );
  const data2 = useMemo(
    () => [
      {
        documentName: "Document First",
        uploadDate: "12 January 2024",
        expiryDate: "12 January 2024",
        attachedBy: "Active",
        documentNo: "Order001",
        notes: "Currency",
        status: "Active",
      },
      {
        documentName: "Document First",
        uploadDate: "12 January 2024",
        expiryDate: "12 January 2024",
        attachedBy: "Active",
        documentNo: "Order001",
        notes: "Currency",
        status: "Active",
      },
      {
        documentName: "Document First",
        uploadDate: "12 January 2024",
        expiryDate: "12 January 2024",
        attachedBy: "Active",
        documentNo: "Order001",
        notes: "Currency",
        status: "Active",
      },
      {
        documentName: "Document First",
        uploadDate: "12 January 2024",
        expiryDate: "12 January 2024",
        attachedBy: "Active",
        documentNo: "Order001",
        notes: "Currency",
        status: "Active",
      },
      {
        documentName: "Document First",
        uploadDate: "12 January 2024",
        expiryDate: "12 January 2024",
        attachedBy: "Active",
        documentNo: "Order001",
        notes: "Currency",
        status: "Active",
      },
    ],
    []
  );

  ///////////Internal Notes///////////////////
  const [internalNotesData, setInternalNotesData] = useState([]);
  const [error, setError] = useState(null);
  const [isAddNotesModalOpen, setIsAddNotesModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  useEffect(() => {
    const loadNotes = async () => {
      // Example journalEntryId, replace with actual value
      const journalEntryId = 1;

      const result = await fetchAllNotes(journalEntryId);
      if (result.status) {
        setInternalNotesData(result.data);
      } else {
        setError(result.data);
      }
    };

    loadNotes();
  }, []);

  const internalNotesColumns = useMemo(
    () => [
      {
        accessorKey: "user",
        header: "User",
        size: 20,
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 250,
      },
      {
        accessorKey: "notesDetail",
        header: "Note Detail",
        size: 450,
      },
    ],
    []
  );

  const handleAddNotesClick = () => {
    setIsAddNotesModalOpen(true);
  };

  const handleAddNotesSubmit = async (newNote) => {
    console.log(newNote, "kjhkjh");

    // Example journalEntryId, replace with actual value
    const journalEntryId = 1;

    // Add journalEntryId to the newNote object if needed
    const newNoteWithId = {
      ...newNote,
      // If you need to include journalEntryId directly in the note object, uncomment the line below
      // journalEntryId
    };

    // Call createNote with both newNote and journalEntryId
    const result = await createNote(newNote, journalEntryId);

    if (result.status) {
      console.log(result);
      setInternalNotesData((prev) => [...prev, result.data]);
      setIsAddNotesModalOpen(false);
    } else {
      setError(result.data);
    }
  };

  const handleUpdate = (row) => {
    setCurrentRow(row);
    setIsEditModalOpen(true); // Open the edit modal
  };

  const handleSave = async (id, updatedData) => {
    const result = await updateNote(id, updatedData);

    if (result.status) {
      console.log(result);
      setInternalNotesData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, ...updatedData } : item
        )
      );
      setIsEditModalOpen(false); // Close the edit modal after saving
    } else {
      setError(result.data);
    }
  };

  const [isINModalOpen, setINIsModalOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);

  const handleDeleteRowIN = async () => {
    try {
      const result = await deleteNote(rowToDelete.original.id);

      if (result.status) {
        // Update UI to reflect the deletion
        setInternalNotesData((prevData) =>
          prevData.filter((item) => item.id !== rowToDelete.original.id)
        );
      } else {
        console.error("Failed to delete note:", result.data);
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    } finally {
      setINIsModalOpen(false); // Close the modal after deletion
    }
  };

  const confirmDelete = (row) => {
    setRowToDelete(row);
    setINIsModalOpen(true); // Open the modal
  };

  const cancelDelete = () => {
    setRowToDelete(null);
    setINIsModalOpen(false); // Close the modal
  };

  const [value, setValue] = useState(true);

  const HandleOnChange = () => {
    setValue(!value);
  };

  const [tags, setTags] = useState([]);

  const handleChange = (newTags) => {
    setTags(newTags);
  };
  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
      filter: true,
      editable: true,
    };
  }, []);

  const buttonsData = [
    { icon: "AddRow", title: "Add Row" },
    { icon: "Remove", title: "Remove" },
    { icon: "Custom", title: "Customize" },
    { icon: "Import", title: "Import" },
  ];
  // const onTableDetailDeleteClick = () => {
  //   // Get the IDs of the selected rows
  //   const idsToDelete = selectedRowIds;

  //   // Filter out the selected rows from the data
  //   const updatedData = data.filter(row => !idsToDelete.includes(row.id));

  //   // Update the data state with the filtered data
  //   setData(updatedData);
  // };

  ///////////////Linked Transactions Row Selection//////////////////////////////

  ///////////// Linked Transaction Data //////////////////////

  const [linkedTransactionData, setLinkedTransactionData] = useState([
    {
      id: "1",
      transactiontype: "Reverse Journal Entry",
      reference: "Receipts 000237",
      date: "12 January 2024",
      duedate: "12 January 2024",
      totalamount: "$ 2,932.00",
      status: "Active",
    },
    {
      id: "2",
      transactiontype: "Reverse Journal Entry",
      reference: "Receipts 000238",
      date: "13 January 2024",
      duedate: "13 January 2024",
      totalamount: "$ 3,000.00",
      status: "Inactive",
    },
    // ...more data
  ]);

  // State for linkedTransactionColumns
  const [linkedTransactionColumns, setLinkedTransactionColumns] = useState([
    {
      accessorKey: "transactiontype",
      header: "Transaction Type",
    },
    {
      accessorKey: "reference",
      header: "Reference",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "duedate",
      header: "Due Date",
    },
    {
      accessorKey: "totalamount",
      header: "Total Amount",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ]);

  // State for selected rows
  const [rowSelectionLT, setRowSelectionLT] = useState({});

  // Handle row selection toggle
  const handleRowSelectionChange = (row) => {
    setRowSelectionLT((prev) => ({
      ...prev,
      [row.id]: !prev[row.id],
    }));
  };

  // Configure row props including click and styling
  const mantineTableBodyRowProps = ({ row }) => {
    const isSelected = !!rowSelectionLT[row.id];

    return {
      onClick: () => handleRowSelectionChange(row),
      style: {
        cursor: "pointer",
        backgroundColor: isSelected ? "lightblue" : "transparent",
        "&:hover": {
          backgroundColor: isSelected ? "lightblue" : "lightgray",
        },
      },
    };
  };

  useEffect(() => {
    console.log("Selected Rows:", rowSelectionLT);
  }, [rowSelectionLT]);

  // Export selected rows
  const onExportClick = () => {
    const selectedRows = Object.keys(rowSelectionLT)
      .filter((key) => rowSelectionLT[key])
      .map((key) => data.find((row) => row.id === key));

    const worksheet = utils.json_to_sheet(selectedRows);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "SelectedRows");
    writeFile(workbook, "selected_rows.xlsx");
  };
  ///////////////////////// Table Details Rows Selection //////////////////////////

  ////////////////////////////////////////

  const [data, setData] = useState([
    {
      id: "1",
      glaccount: "FH100012",
      rowdescription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Straight Commission",
      taxcode: "20%",
      taxamount: "0.093963",
      totalamount: "Sales Invoice",
      fctotalamount: "1,200,000.00",
      project: "Dropdown",
      division: "Dropdown",
      department: "Dropdown",
      account: "",
    },
    {
      id: "2",
      glaccount: "FH100012",
      rowdescription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Straight Commission",
      taxcode: "20%",
      taxamount: "0.093963",
      totalamount: "Sales Invoice",
      fctotalamount: "1,200,000.00",
      project: "Dropdown",
      division: "Dropdown",
      department: "Dropdown",
      account: "",
    },
    {
      id: "3",
      glaccount: "FH100012",
      rowdescription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Straight Commission",
      taxcode: "20%",
      taxamount: "0.093963",
      totalamount: "Sales Invoice",
      fctotalamount: "1,200,000.00",
      project: "Dropdown",
      division: "Dropdown",
      department: "Dropdown",
      account: "",
    },
    {
      id: "4",
      glaccount: "FH100012",
      rowdescription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Straight Commission",
      taxcode: "20%",
      taxamount: "0.093963",
      totalamount: "Sales Invoice",
      fctotalamount: "1,200,000.00",
      project: "Dropdown",
      division: "Dropdown",
      department: "Dropdown",
      account: "",
    },
    {
      id: "5",
      glaccount: "FH100012",
      rowdescription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Straight Commission",
      taxcode: "20%",
      taxamount: "0.093963",
      totalamount: "Sales Invoice",
      fctotalamount: "1,200,000.00",
      project: "Dropdown",
      division: "Dropdown",
      department: "Dropdown",
      account: "",
    },
    {
      id: "6",
      glaccount: "FH100012",
      rowdescription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Straight Commission",
      taxcode: "20%",
      taxamount: "0.093963",
      totalamount: "Sales Invoice",
      fctotalamount: "1,200,000.00",
      project: "Dropdown",
      division: "Dropdown",
      department: "Dropdown",
      account: "",
    },
    {
      id: "7",
      glaccount: "FH100012",
      rowdescription: "Jurong East",
      debit: "thompson.napoleon@blanda.com",
      credit: "(650)328-8274",
      fcdebit: "Straight Commission",
      taxcode: "20%",
      taxamount: "0.093963",
      totalamount: "Sales Invoice",
      fctotalamount: "1,200,000.00",
      project: "Dropdown",
      division: "Dropdown",
      department: "Dropdown",
      account: "",
    },
  ]);
  //
  const tableDetailColumns = useMemo(
    () => [
      // {
      //   accessorKey: "id",
      //   header: "ID",
      //   enableColumnOrdering: false,
      //   Footer: () => (
      //     <div>
      //       <button
      //         style={{
      //           backgroundColor: "transparent",
      //           border: "none",
      //           fontSize: "12px",
      //           cursor: "pointer",
      //           color: "lightgrey",
      //           fontWeight: "700",
      //           marginLeft: "-90px",
      //         }}
      //         onClick={handleAddRow}
      //       >
      //         + Add Row
      //       </button>
      //     </div>
      //   ),
      // },
      {
        accessorKey: "glaccount",
        header: "GL Account",
        enableColumnOrdering: false,
        Footer: () => (
          <div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "12px",
                cursor: "pointer",
                color: "lightgrey",
                fontWeight: "700",
                marginLeft: "-80px",
              }}
              onClick={handleAddRow}
            >
              + Add Row
            </button>
          </div>
        ),
        Cell: ({ cell, row }) => {
          const [isEditing, setIsEditing] = useState(false);
          const [value, setValue] = useState(cell.getValue());

          const handleDoubleClick = () => {
            setIsEditing(true);
          };

          const handleBlur = () => {
            setIsEditing(false);
            handleCellChange(row.index, "glaccount", value);
          };

          const handleChange = (e) => {
            setValue(e.target.value);
          };

          return (
            <div onDoubleClick={handleDoubleClick}>
              {isEditing ? (
                <select
                  value={value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoFocus
                  style={{
                    display: "flex",
                    width: "70%",
                    padding: "6px 6px",
                    borderRadius: "4px",
                    border: "none",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#ffffff",
                    transition: "border 0.3s, box-shadow 0.3s",
                    fontSize: "12px",
                    color: "#2b2d42",
                    appearance: "none",
                    cursor: "pointer",
                    alignSelf: "left",
                  }}
                >
                  {["FH100012", "FH100013", "FH100014"].map((optionValue) => (
                    <option
                      key={optionValue}
                      value={optionValue}
                      style={{
                        width: "70%",
                        padding: "4px 15px",
                        backgroundColor: "#f8f9fa",
                        color: "#2b2d42",
                        fontSize: "12px",
                        marginTop: "10px",
                        borderRadius: "0px",
                        // borderBottom: "1px solid red",
                      }}
                    >
                      {optionValue}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  style={{
                    fontSize: "12px",
                    color: "#464f60cc",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    width: "100%",
                  }}
                  onBlur={handleBlur}
                />
              )}
            </div>
          );
        },
      },
      {
        accessorKey: "rowdescription",
        header: "Row Description",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "rowdescription", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "debit",
        header: "Debit",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "debit", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "credit",
        header: "Credit",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "credit", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "fcdebit",
        header: "FC Debit",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "fcdebit", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "taxcode",
        header: "Tax Code",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "taxcode", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "taxamount",
        header: "Tax Amount",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "taxamount", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "totalamount",
        header: "Total Amount",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "totalamount", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "fctotalamount",
        header: "FC Total Amount",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "fctotalamount", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "project",
        header: "Project",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "project", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "division",
        header: "Division",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "division", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "department",
        header: "Department",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "department", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "account",
        header: "Account",
        Cell: ({ cell, row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            type="text"
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "account", e.target.value)
            }
          />
        ),
      },
    ],
    []
  );

  const handleCellChange = (rowIndex, columnId, value) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[rowIndex] = { ...updatedData[rowIndex], [columnId]: value };
      return updatedData;
    });
  };

  const handleAddRowAbove = (row) => {
    const newRow = {
      id: Date.now().toString(),
      glaccount: "",
      rowdescription: "",
      debit: "",
      credit: "",
      fcdebit: "",
      taxcode: "",
      taxamount: "",
      totalamount: "",
      fctotalamount: "",
      project: "",
      division: "",
      department: "",
      account: "",
    };
    const rowIndex = row.index;
    const newData = [
      ...data.slice(0, rowIndex),
      newRow,
      ...data.slice(rowIndex),
    ];
    setData(newData);
  };

  const handleAddRowBelow = (row) => {
    const newRow = {
      id: Date.now().toString(),
      glaccount: "",
      rowdescription: "",
      debit: "",
      credit: "",
      fcdebit: "",
      taxcode: "",
      taxamount: "",
      totalamount: "",
      fctotalamount: "",
      project: "",
      division: "",
      department: "",
      account: "",
    };
    const rowIndex = row.index + 1;
    const newData = [
      ...data.slice(0, rowIndex),
      newRow,
      ...data.slice(rowIndex),
    ];
    setData(newData);
  };

  const handleDeleteRow = (row) => {
    const rowId = row.original.id;
    const newData = data.filter((item) => item.id !== rowId);
    setData(newData);
  };
  const handleAddRow = () => {
    const newRow = {
      id: Date.now().toString(), // Unique ID for each row
      glaccount: "",
      rowdescription: "",
      debit: "",
      credit: "",
      fcdebit: "",
      taxcode: "",
      taxamount: "",
      totalamount: "",
      fctotalamount: "",
      project: "",
      division: "",
      department: "",
      account: "",
    };

    // Append new row to the end of the data array
    setData((prevData) => [...prevData, newRow]);
  };
  ///////////////////////////////////////

  const [rowSelection, setRowSelection] = useState({});
  const handleRowClick = (rowId) => {
    setRowSelection((prev) => {
      const newSelection = { ...prev, [rowId]: !prev[rowId] };
      logSelectedRows(newSelection);
      return newSelection;
    });
  };

  const logSelectedRows = (selection) => {
    const selectedRowsData = data.filter((row) => selection[row.id]);
    console.log(selectedRowsData);
  };

  const mantineTableBodyRowPropsTD = ({ row }) => ({
    onClick: () => handleRowClick(row.id),
    selected: !!rowSelection[row.id],
    sx: (theme) => ({
      cursor: "pointer",
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

  const handleDeleteClickTDRows = () => {
    setData((prevData) => prevData.filter((row) => !rowSelection[row.id]));
    setRowSelection({}); // Clear the selection after deletion
  };
  ////////////////////////////////////////////////////////////////////////////////

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveAT = () => {
    // Handle save action
    console.log("Save action");
    closeModal(); // Close modal after save
  };

  const handleCancel = () => {
    // Handle cancel action
    console.log("Cancel action");
    closeModal(); // Close modal on cancel
  };
  ///////////////////////////////////////////////////////////////////////////////

  //////////////////////////// After Migration of the DATA  Bottom////////////////////////////////

  /////////////////////   Updating the Journal Entry Hero Section Fields    /////////////////////////////

  const [isDefaultCheck, setIsDefaultCheck] = useState(false); // For checkbox
  // const [project, setProject] = useState(""); // For project dropdown



  const [id, setID] = useState("");
  const [journalCode, setJournalCode] = useState("");
  const [description, setDescription] = useState("");
  const [isRecurTransaction, setIsRecurTransaction] = useState(false);
  const [transactionDate, setTransactionDate] = useState(null);
  const [currency, setCurrency] = useState("");
  const [reversalDate, setReversalDate] = useState(null);
  const [postingDate, setPostingDate] = useState(null);
  const [project, setProject] = useState("");
  const [frequency, setFrequency] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [department, setDepartment] = useState("");
  const [reference, setReference] = useState("");
  const [division, setDivision] = useState("");
  const [intervalValue, setInterval] = useState("");
  const [recurringDate, setRecurringDate] = useState(null);

  useEffect(() => {
    if (entryData) {
      console.log("this is the data", entryData)
      setID(entryData.id);
      setJournalCode(entryData.JournalEntryNo);
      setDescription(entryData.Notes);
      setIsRecurTransaction(entryData.Recurring === "Yes");
      setTransactionDate(entryData.transactiondate);
      setCurrency(entryData.currency);
      setReversalDate(entryData.ReversalDate);
      setPostingDate(entryData.postingdate);
      setProject(entryData.Project);
      setFrequency(entryData.Frequency);
      setDueDate(entryData.duedate);
      setDepartment(entryData.Department);
      setReference(entryData.extrarefno);
      setDivision(entryData.Division);
      setInterval(entryData.Interval);
      setRecurringDate(entryData.RecurringDate);
    }
}, [entryData]);




const handleSubmit = async () => {
  const updatedData = {
    journalCode,
    description,
    isRecurTransaction,
    transactionDate,
    currency,
    reversalDate,
    postingDate,
    project,
    frequency,
    dueDate,
    department,
    reference,
    division,
    intervalValue,
    recurringDate,
  };
  const result = await updateJournalEntry(entryData.id, updatedData);
  
  if (result.status) {
    setToasterContent({
      icon: "check",
      text: "Success",
      text2: "Journal entry updated successfully.",
    });
  } else {
    setToasterContent({
      icon: "cross",
      text: "Error",
      text2: "Error updating journal entry.",
    });
  }

  setShowToaster(true);
};
  const DropdownDataParent = [
    { label: "Assets", value: "Assets" },
    { label: "Liabilities", value: "Liabilities" },
    { label: "Equity", value: "Equity" },
    { label: "Revenue", value: "Revenue" },
    { label: "Expenses", value: "Expenses" },
  ];

  const handleOnChangeCurrency = (e) => {
    setCurrency(e.value);
  };
  const handleOnChangeProject = (e) => {
    setProject(e.value);
  };
  const handleOnChangeFrequency = (e) => {
    setFrequency(e.value);
  };
  const handleOnChangeDepartment = (e) => {
    setDepartment(e.value);
  };
  const handleOnChangeDivision = (e) => {
    setDivision(e.value);
  };

  const handle = (event) => {
    setIsCheck(event.target.checked);
  };

  const HandleRevrese = (event) => {
    setIsDefaultCheck(event.target.checked);
  };

  const handleTick = () => {
    setIsTick(!isTick);
  };
  const handleCheck = () => {
    setIsCheck(!isCheck);
  };

  ////////////////////////////////////////////////////
  const [showToaster, setShowToaster] = useState(false);
  const [toasterContent, setToasterContent] = useState({});
  const handleCloseToaster = () => {
    setShowToaster(false);
  };

  // Function to handle form submission
  // const handleSubmit = async () => {
  //   const newEntry = {
  //     journalEntryNumber: journalCode,
  //     description,
  //     transactionDate,
  //     postingDate,
  //     dueDate,
  //     currency,
  //     recurringTransaction: isRecurTransaction,
  //     frequency,
  //     intervalValue,
  //     reversalDate,
  //     recurringDate,
  //     extraReferenceNumber: reference,
  //     credit,
  //     debit,
  //     debitFC,
  //     creditFC,
  //   };

  //   const result = await JournalEntryPost(newEntry);

  //   if (result.status) {
  //     setToasterContent({
  //       icon: "check",
  //       text: "Success!",
  //       text2: "The Transaction has been created successfully.",
  //     });
  //     setShowToaster(true);
  //     clearForm();
  //   } else {
  //     setToasterContent({
  //       icon: "cross",
  //       text: "Error!",
  //       text2: "Failed to create journal entry transaction.",
  //     });
  //     setShowToaster(true);
  //   }
  // };

  // // Function to clear the form after successful submission
  // const clearForm = () => {
  //   setJournalCode("");
  //   setDescription("");
  //   setTransactionDate("");
  //   setCurrency("");
  //   setIsRecurTransaction(false);
  //   setPostingDate("");
  //   setFrequency("");
  //   setDueDate("");
  //   setDepartment("");
  //   setInterval("");
  //   setReference("");
  //   setDivision("");
  //   setRecurringDate("");
  //   setCredit(0);
  //   setDebit(0);
  //   setDebitFC(0);
  //   setCreditFC(0);
  // };

  // // Function to close the toaster
 
  // ////////////////////////////////////////////////
  // // *************************************************API INTEGRATION***********************************************

  // const JournalDetailsPosting = async () => {
  //   const Response = await JournalEntryPost(journalCode);
  // };

  return (
    <Grab>
      <NewScreensNav
        height={"30%"}
        // OPTIONS
        first={"Journa Entry Details"}
        second={"Table Details"}
        third={"Attachments"}
        fourth={"Internal Notes"}
        fifth={"Linked Transactions"}
        sixth={"Activity"}
        // CLASSES FOR SCROLL
        class1={"inputSec"}
        class2={"information"}
        class3={"customField"}
        class4={"address"}
        class5={"contact"}
        class6={"bank"}
        class7={"attachment"}
        class8={"correspondence"}
        class9={"transaction"}
        class10={"activity"}
      />
      <Wrap>
        <Header
          title={"JOURNAL ENTRY"}
          firstNav={"Home"}
          secNav={"Finance"}
          thirdNav={"Transaction"}
          fourthNav={"Journal Entry List"}
          navActive={"Journal Entry - New"}
        />

        <HeaderNewButtons clickScreenChange={handleSubmit} />
      </Wrap>

      <Wrapper>
        {showToaster && (
          <Toaster
            icon={toasterContent.icon}
            text={toasterContent.text}
            text2={toasterContent.text2}
            handleClose={handleCloseToaster}
            duration={3000} // Duration in milliseconds
          />
        )}
        {/* <AccountsSideNav
          title={"SECTION LIST"}
          first={"Journal Entry Details"}
          second={"Table Details"}
          third={"Attachments"}
          fourth={"Internal Notes"}
          fifth={"Linked Transactions"}
          sixth={"Activity"}
        /> */}
        <Div>
        <InputSection1>
<TitleOfSection title={"JOURNAL ENTRY DETAILS"} />
<Line />
<Wrap5>
<Wrapper5>
<FirstRow>
<ChartAccountInput
Name={"Journal Entry No."}
Hash="*"
Padding={true}
setWidth={"true"}
onChange={(e) => setJournalCode(e.target.value)}
value={journalCode}
/>
<ChartAccountInput
Name="Description"
Padding={"P"}
setWidth={"false"}
onChange={(e) => setDescription(e.target.value)}
value={description}
/>
<Check2>
<Text2>Auto Reversal</Text2>
<input
style={{ width: "15.5px", height: "15.5px" }}
type="checkbox"
onClick={() => setIsRecurTransaction(!isRecurTransaction)}
checked={isRecurTransaction}
/>
</Check2>
</FirstRow>
<FirstRow>
<CalenderInput
Name={"Transaction Date"}
width={true}
onChange={(date) => setTransactionDate(date)}
value={transactionDate}
/>
<CurrencyInput2
Name="Currency"
// setWidth="long"
onChange={(e) => setCurrency(e.value)}
value={currency}
/>
<Check1>
<Text>Recurr Transaction</Text>
<input
style={{ width: "16px", height: "16px" }}
type="checkbox"
onChange={() => setIsRecurTransaction(!isRecurTransaction)}
checked={isRecurTransaction}
/>
</Check1>
<CalenderInput
Name={"Reversal Date"}
width={true}
disable={!isRecurTransaction}
onChange={(date) => setReversalDate(date)}
value={reversalDate}
/>
</FirstRow>
<FirstRow>
<CalenderInput
Name={"Posting Date"}
Hash={""}
width={true}
onChange={(date) => setPostingDate(date)}
value={postingDate}
/>
<DropdownInput
Name={"Project"}
Padding={false}
setWidth={false}
onChange={(e) => setProject(e.value)}
value={project}
Data={DropdownDataParent}
/>
<DropdownInput
Name={"Frequency"}
Padding={false}
setWidth={false}
check={!isRecurTransaction}
onChange={(e) => setFrequency(e.value)}
value={frequency}
Data={DropdownDataParent}
/>
</FirstRow>
<FirstRow>
<CalenderInput
Name={"Due Date"}
width={true}
onChange={(date) => setDueDate(date)}
value={dueDate}
/>
<DropdownInput
Name={"Department"}
Padding={false}
setWidth={false}
onChange={(e) => setDepartment(e.value)}
value={department}
Data={DropdownDataParent}
/>
<ChartAccountInput
Name={"Interval"}
Padding={true}
setWidth={"true"}
disable={!isRecurTransaction}
insertFromRight={true}
onChange={(e) => setInterval(e.target.value)}
value={intervalValue}
/>
</FirstRow>
<FirstRow>
<ChartAccountInput
Name={"Extra Ref.Number"}
Padding={true}
setWidth={"true"}
insertFromRight={true}
onChange={(e) => setReference(e.target.value)}
value={reference}
/>
<DropdownInput
Name={"Division"}
Padding={false}
setWidth={false}
onChange={(e) => setDivision(e.value)}
value={division}
Data={DropdownDataParent}
/>
<CalenderInput
Name={"Recurring Date"}
width={true}
disable={!isRecurTransaction}
onChange={(date) => setRecurringDate(date)}
value={recurringDate}
/>
</FirstRow>
</Wrapper5>
<div>
<LargeButton
font={"heavy"}
name={"Posted"}
onClick={handleSubmit}
/>
</div>
</Wrap5>
</InputSection1>
          <Wrapper>
            <MRTTableDetails
              data={data}
              columns={tableDetailColumns}
              onAddRowAbove={handleAddRowAbove}
              onAddRowBelow={handleAddRowBelow}
              onDeleteRow={handleDeleteRow}
              mantineTableBodyRowProps={mantineTableBodyRowPropsTD}
              state={{ rowSelection }}
              //           onRowSelectionChange={handleRowSelectionChangeTDS}
              //         // onExportClick={onExportClick}

              onTableDetailDeleteClick={handleDeleteClickTDRows}
            />
          </Wrapper>
          <Container>
            <div
              style={{
                marginLeft: "20px",
                marginTop: "15px",
                width: "100%",
              }}
            >
              <Tagline>Notes</Tagline>
              <InputField />
              <TagsInput />
            </div>
            <AmountTotal />
          </Container>
          {isModalOpen && (
            <AttachmentUpload
              CancelAction={handleCancel}
              SaveAction={handleSaveAT}
            />
          )}
          <MRTSmallTables
            columns={columns2}
            data={data2}
            ToggleBtnTitle={"ATTACHMENTS"}
            showAttachButton={true}
            initialState={ISattachments}
            onAttachClick={openModal}
            // onViewAttachments={onViewAttachments}
            // onDownloadAttachments={onDownloadAttachments}
            // onDeleteAttachments={onDeleteAttachments}
          />
          <MRTTableInternalNotes
            columns={internalNotesColumns}
            data={internalNotesData}
            ToggleBtnTitle={"INTERNAL NOTES"}
            showAddNotesButton={true}
            onAddNotes={handleAddNotesClick}
            onUpdate={handleUpdate}
            onDeleteRow={confirmDelete}
            onAddNotesClick={handleAddNotesClick}
            onAddNotesDoubleClickIN={handleUpdate}
          />

          {isINModalOpen && (
            <MyModal
              heading="Confirm Deletion"
              text="Are you sure you want to delete this note?"
              mainText="Delete"
              cancelText="Cancel"
              main={handleDeleteRowIN} // Call handleDeleteRowIN on confirmation
              cancel={cancelDelete} // Call cancelDelete on cancellation
            />
          )}

          <EditModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            onSave={handleSave}
            row={currentRow}
          />

          <CustomModal
            isOpen={isAddNotesModalOpen}
            onClose={() => setIsAddNotesModalOpen(false)}
            onSubmit={handleAddNotesSubmit}
          />
          <MRTLinkedTransaction
            columns={linkedTransactionColumns}
            data={linkedTransactionData}
            ToggleBtnTitle={"LINKED TRANSACTIONS"}
            mantineTableBodyRowProps={mantineTableBodyRowProps}
            onExportClick={onExportClick}
            state={{ rowSelectionLT }}

            // handleRowClick={handleRowClick}
          />

          <ActivityPart ShowButton={true} />
        </Div>
      </Wrapper>
    </Grab>
  );
};

export default JournalEntryUpdate;
