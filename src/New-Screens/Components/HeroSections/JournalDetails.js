import React, { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { writeFile, utils } from "xlsx";
import ChartAccountInput from "../../../components/Inputs/ChartAccountInput";
import Auto from "../../../assets2/ChartOfAccountNew/InputAuto.svg";
import DropdownInput from "../../../components/Inputs/DropdownInput";
import BlackDropdown from "../../../assets2/ChartOfAccountNew/DarkDropDown.svg";
import LargeButton from "../../../components/buttons/LargeButton";
import AgGridTable from "../../../components/Table/AgGridTable";
import TagIcon from "../../../components/SVGicons/TagIcon";
import AddButton from "../../../components/buttons/AddButton";
import TagButton from "../../../components/buttons/TagButton";
import CalenderInput from "../../../components/Inputs/CalenderInput";
import MantineReactTableComponent from "../MantineTable/MantineReactTable";

import intlTelInput from "intl-tel-input";
import { Menu, ActionIcon, Box } from "@mantine/core";
import { BsThreeDotsVertical } from "react-icons/bs";
import PracticeMRT from "../MantineTable/PracticeMRT";
import ActionMenu from "../MantineTable/ActionManu";
import MRTLinkedTransaction from "../MantineTable/MRTLinkedTransaction";
import CustomModal from "../MantineTable/Models/AddNoteModal";
import MRTTableInternalNotes from "../MantineTable/MRTTableInternalNotes";
import EditModal from "../MantineTable/Models/EditModal";
import AttachmentUpload from "../../../components/Modals/AttachmentUpload";
import JournalEntryViewMode from "../JournalEntryViewMode";


import { fetchAllNotes, createNote,  updateNote, deleteNote} from "../../../Api/Apis";

// import "react-tagsinput/react-tagsinput.css";
import {
  Wrap5,
  Title5,
  Line,
  Wrapper5,
  FirstRow,
  Check1,
  Check2,
  Text,
  Wrap,
  Wrapper,
  Head,
  Title,
  Buttons,
  Grab,
  Title2,
  Total,
  Grid,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  Grid8,
  Grid10,
  Grid9,
  Input,
  Tag,
  Title3,
  Input4,
  Some,
  Same10,
  Wrapper10,
  Title10,
  Section11,
  Btn11,
  Textutil11,
  Text11,
  Wrapper11,
  Para11,
  SubText11,
  Grab11,
  Image11,
  Grab2,
  Image9,
  Div,
} from "./Style";
import Dotscell from "../../../components/Table/CustomCells/Dots";
import JornalTables from "../../Sections/JornalTables";
import StatusButton from "../../../components/buttons/StatusButton";
import DropDown from "../../../components/buttons/DropDown";
import AmountCell from "../../../components/Table/CustomCells/AmountCell";
import styled from "styled-components";
import AgGridTable2 from "../../../components/Table/AgGridTable2";
// import DropdownComp from "../../../components/Table/CustomCells/DropdownComp";
// import DropdownRenderer from "./DropdownRenderer";
import AmountTotal from "../../Sections/AmountTotal";
import TagsInput from "../../Sections/TagsInput";
import InputSection from "../../Sections/InputSection";
import TableDetails from "../../Sections/TableDetails";
import ActivityPart from "../../Sections/ActivityPart";
import DropdownRenderer from "../HeroSections/DropdownRenderer";
import MRTTableDetails from "../MantineTable/MRTTableDetails";
import MRTSmallTables from "../MantineTable/MRTSmallTables";
import { color } from "@chakra-ui/react";

// const ISinternalNotes = {
//   density: "md",
//   columnSizing: {
//     // id: 10,
//     user:  10 ,
//     notedetail: 50,
//     date: 10,
//   },
// };

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

const ISlinkedTransactions = {
  density: "md",
  columnSizing: {
    id: 20,
    transactiontype: 20,
    reference: 20,
    date: 20,
    duedate: 20,
    totalamount: 20,
    status: 20,
  },
};

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
  margin-top: 7px;
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

const JournalDetails = (props) => {
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

  
 

  /////////////Attachments//////////
  const columns2 = useMemo(
    () => [
      { accessorKey: "documentNo", header: "Document No" },
      { accessorKey: "documentName", header: "Document Name",

       },
      { accessorKey: "uploadDate", header: "Upload Date" },
      { accessorKey: "expiryDate", header: "Expiry Date" },
      {
        accessorKey: "attachedBy",
        header: "Attached by",
        enableSorting: false,
        size: 350,
       },
    
      { accessorKey: "notes", header: "Notes",
        enableSorting: false,
       },
      { accessorKey: "status", header: "Status",
        enableSorting: false,
       },
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
  console.log(newNote, 'kjhkjh');

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
      prevData.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
    setIsEditModalOpen(false); // Close the edit modal after saving
  } else {
    setError(result.data);
  }
};
const handleDeleteRowIN = async (row) => {
  try {
    const result = await deleteNote(row.original.id);

    if (result.status) {
      // Update UI to reflect the deletion
      setInternalNotesData((prevData) =>
        prevData.filter((item) => item.id !== row.original.id)
      );
    } else {
      // Handle error (e.g., show a message to the user)
      console.error('Failed to delete note:', result.data);
    }
  } catch (error) {
    console.error('Error deleting note:', error);
  }
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
        cursor: 'pointer',
        backgroundColor: isSelected ? 'lightblue' : 'transparent',
        '&:hover': {
          backgroundColor: isSelected ? 'lightblue' : 'lightgray',
        },
      },
    };
  };

  useEffect(() => {
    console.log('Selected Rows:', rowSelectionLT);
  }, [rowSelectionLT]);

  // Export selected rows
  const onExportClick = () => {
    const selectedRows = Object.keys(rowSelectionLT)
      .filter(key => rowSelectionLT[key])
      .map(key => data.find(row => row.id === key));
    
    const worksheet = utils.json_to_sheet(selectedRows);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'SelectedRows');
    writeFile(workbook, 'selected_rows.xlsx');
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
        const [isDropdown, setIsDropdown] = useState(false);

        const handleDoubleClick = () => {
          setIsDropdown(true);
        };

        const handleBlur = () => {
          setIsDropdown(false);
        };

        return isDropdown ? (
          <select
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "1px solid #ddd",
              outline: "none",
              backgroundColor: "transparent",
            }}
            value={cell.getValue()}
            onChange={(e) =>
              handleCellChange(row.index, "glaccount", e.target.value)
            }
            onBlur={handleBlur}
          >
            <option value="FH100012">FH100012</option>
            <option value="FH100013">FH100013</option>
            <option value="FH100014">FH100014</option>
          </select>
        ) : (
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
              handleCellChange(row.index, "glaccount", e.target.value)
            }
            onDoubleClick={handleDoubleClick}
          />
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
    cursor: 'pointer',
    backgroundColor: rowSelection[row.id] ? theme.colors.blue[0] : 'transparent',
    '&:hover': {
      backgroundColor: rowSelection[row.id] ? theme.colors.blue[1] : theme.colors.gray[0],
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
    console.log('Save action');
    closeModal(); // Close modal after save
  };

  const handleCancel = () => {
    // Handle cancel action
    console.log('Cancel action');
    closeModal(); // Close modal on cancel
  };
///////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Grab2>
        {/* <JournalEntryViewMode/> */}
        <InputSection
          title={"JOURNAL ENTRY DETAILS"}
          firstInput={"Journal Entry No."}
          secondInput={"Transaction Date"}
          name={"Rate"}
          value={true}
        />
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

          {/* <TableDetails
            colDefs={colDefs}
            rowData={rowData}
            buttons={buttonsData}
            name={"TABLE DETAILS"}
          /> */}
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
  onDeleteRow={handleDeleteRowIN}
  onAddNotesClick={handleAddNotesClick}
  onAddNotesDoubleClickIN={handleUpdate}
/>

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
        {/* <PracticeMRT /> */}
        {/* <JornalTables
          Icon={"AttachIcon"}
          Title={"Attach"}
          Name={"ATTACHMENTS"}
          ColData={colDefs3}
          RowData={rowData3}
          button={"true"}
          ShowButton={true}
        />
        <JornalTables
          Icon={"AddNote"}
          Title={"Add Note"}
          Name={"INTERNAL NOTES"}
          ColData={colDefs2}
          RowData={rowData2}
          button={"true"}
          ShowButton={true}
        />
        <JornalTables
          Name={"LINKED TRANSACTIONS"}
          ColData={colDefs4}
          RowData={rowData4}
          button={"false"}
          ShowButton={true}
        /> */}

        <ActivityPart ShowButton={true} />
      </Grab2>
    </>
  );
};

export default JournalDetails;
