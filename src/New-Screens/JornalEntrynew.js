import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import styled from "styled-components";
import { debounce } from "lodash";
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
import { FaChevronDown } from "react-icons/fa";
import MRTTableInput from "../components/Inputs/MRTTableInput";
import TagsInput1 from "./Sections/TagInput";

import TitleOfSection from "./Components/TitleOfSection";
import Select from "react-select";
import { JournalEntryPost, TransactionUpdateNew } from "../Api/Apis";
import AttachmentUpload from "../components/Modals/AttachmentUpload";
import { utils } from "xlsx";
import { writeFile } from "xlsx";
import Toaster from "../components/Modals/Toaster";
import CurrencyInput2 from "../components/Inputs/CurrencyInput2";
import AddCurrencyDropdown from "../components/Inputs/AddCurrencyDropdown";
import NumberingChoiceModal from "../components/Modals/NumberingChoiceModal";
import JournalEntryViewMode from "./Components/JournalEntryViewMode";
import DropdownInputAccountCode from "../components/Inputs/DropdownInputAccountCode";
import TypeDropdown from "../components/Inputs/TableWithPopoverDropdown";
import MRTSingleValueDD from "../components/Inputs/MRTSingleValueDD";
import DivisionSelect from "../components/Inputs/DivisionSelect";

import { TbHexagonLetterA } from "react-icons/tb";
import { TbHexagonLetterM } from "react-icons/tb";
import CustomDropdown from "../components/Inputs/MRTDropDown";
import DivisionAddNew from "../components/Inputs/DivisionAddNew";
import CustomFields from "./Sections/CustomFields";

import { AiFillMediumCircle } from "react-icons/ai";
import { MdHdrAuto } from "react-icons/md";
import MRTTableInternalNotes from "./Components/MantineTable/MRTTableInternalNotes";
import EditModal from "./Components/MantineTable/Models/EditModal";
import JournalEntryList from "../pages/Finance/Transactions/JournalEntryList";
import {
  fetchAllNotes,
  updateNote,
  createNote,
  deleteNote,
  getAllJournalEntries,
  GetCurrency,
  updateJournalEntry,
  deleteJournalEntry,
  TransactionUpdate,
  TransactionGet,
  fetchChartOfAccounts,
  CostCenterGet,
  GetSegment,
  updateTableDetails
} from "../Api/Apis";
import { createTableDetails } from "../Api/Apis";
import MyModal from "../components/Modals/MyModal";
import { Padding } from "styled-icons/material";

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
const Grab1 = styled.div`
  height: 80vh;
  overflow-y: auto;
  padding: 0px 15px;
  width: 100%;
  /* background-color: green; */
  scrollbar-width: none; /* Hide the scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide the scrollbar for IE and Edge */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #464f604d;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
const OpenModalButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Grab = styled.div`
  /* display: flex; */
  width: 100%;
  // height: 100vh;
`;
const Wrapper5 = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;

  margin-bottom: 20px;
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
  padding: 12px 10px 12px 10px;
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
  width: 175px;
  padding-left: 14px;
  padding: 12px 10px 12px 10px;
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
  padding-bottom: 60px;
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
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-right: 10%;
  background-color: red; */
`;

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  width: 100%;
  height: 255px;
  border-radius: 8px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  padding-bottom: 20px;
  margin-top: 5px;
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
  /* display: flex;
  height: 80vh; */
`;
const Div = styled.div`
  display: flex;
`;
const Wrap = styled.div`
  padding: 0 10px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainContianer = styled.div`
  display: flex;
`;
const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 90px;
`;
const JornalEntrynew = ({ entryData, ViewEntryData, onEditClickV }) => {
  const jeTableDetails =
    entryData?.jeTableDetails || ViewEntryData?.jeTableDetails;

  // Render and allow editing/viewing of jeTableDetails
  console.log("jeTableDetails:", jeTableDetails);

  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [isCheck, setIsCheck] = useState(true);
  const [isTick, setIsTick] = useState(true);
  const [screen, setScreen] = useState(1);

  /////////////////// Numbering Modal /////////////////////////////

  const [icon, setIcon] = useState(
    <TbHexagonLetterA size={20} color="#58606f" />
  );
  const [isModalNOpen, setIsModalNOpen] = useState(false);
  const [isManual, setIsManual] = useState(false);

  const openNModal = () => {
    setIsModalNOpen(true);
  };

  const closeNModal = () => {
    setIsModalNOpen(false);
  };
  /////////////////////////////////////////////////////////////////////
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
          item.id === id
            ? { ...item, notesDetail: updatedData.notedetail }
            : item
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

  //////////////////////////// After Migration of the DATA  Bottom////////////////////////////////

  //////////////////////  Hero Section Inputs Fields /////////////////////////////////////////

  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );
  const [isDefaultCheck, setIsDefaultCheck] = useState(false); // For checkbox

  const [id, setID] = useState("");

  const [journalCode, setJournalCode] = useState("");

  const [description, setDescription] = useState("");
  const [reference, setReference] = useState("");
  const [intervalValue, setInterval] = useState("");

  const handleDescriptionChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      if (description !== newValue) {
        setDescription(newValue);
      }
    },
    [description]
  );

  const handleReferenceChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      if (reference !== newValue) {
        setReference(newValue);
      }
    },
    [reference]
  );

  const handleIntervalChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      if (intervalValue !== newValue) {
        setInterval(newValue);
      }
    },
    [intervalValue]
  );

  const [currency, setCurrency] = useState([]);
  const [currencyData, setCurrencyData] = useState({
    code: "",
    fullForm: "",
    sign: "",
    amount: "",
  });
  useEffect(() => {
    if (!ViewEntryData && selectedCurrency) {
      if (
        currencyData.code !== selectedCurrency.value ||
        currencyData.amount !== selectedCurrency.exchangeRate
      ) {
        setCurrencyData({
          code: selectedCurrency.value,
          fullForm: selectedCurrency.fullForm,
          sign: selectedCurrency.currencySign,
          amount: selectedCurrency.exchangeRate,
        });
      }
    }
  }, [selectedCurrency, ViewEntryData]);

  // const [currency, setCurrency] = useState("");
  const [isRecurTransaction, setIsRecurTransaction] = useState(false);

  const [postingDate, setPostingDate] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [reversalDate, setReversalDate] = useState("");
  const [recurringDate, setRecurringDate] = useState("");

  const [frequency, setFrequency] = useState("");

  const [project, setProject] = useState("");
  const [department, setDepartment] = useState("");
  const [division, setDivision] = useState("");
  const [credit, setCredit] = useState(0);
  const [debit, setDebit] = useState(0);
  const [debitFC, setDebitFC] = useState(0);
  const [creditFC, setCreditFC] = useState(0);
  const [isAutoReversal, setIsAutoReversal] = useState(false);
  const [seriesId, setSeriesId] = useState("");

  const [segment1, setSegment1] = useState(null); // Change from [] to null
  const [segment2, setSegment2] = useState(null);
  const [segment3, setSegment3] = useState(null);
  const [segment4, setSegment4] = useState(null);
  const [segment5, setSegment5] = useState(null);

  const [costCenterData, setCostCenterData] = useState({});

  const handleOnChangeCostCenter = (segmentType, selectedOption) => {
    console.log("Selected option in handleOnChangeCostCenter:", selectedOption);

    switch (segmentType) {
      case "segment1":
        setSegment1(selectedOption); // Set directly
        break;
      case "segment2":
        setSegment2(selectedOption);
        break;
      case "segment3":
        setSegment3(selectedOption);
        break;
      case "segment4":
        setSegment4(selectedOption);
        break;
      case "segment5":
        setSegment5(selectedOption);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchSegmentData = async () => {
      const result = await GetSegment();
      if (result.status) {
        // Organize the data by segment type
        const segments = result.data.reduce((acc, item) => {
          // Filter out segments with status false
          if (item.status) {
            if (!acc[item.segment]) {
              acc[item.segment] = [];
            }
            // Filter out cost centers with status false
            const costCenterOptions = item.costCenter
              .filter((cc) => cc.status) // Only include cost centers with status true
              .map((cc) => ({
                label: cc.name,
                value: cc.code,
              }));
            acc[item.segment] = costCenterOptions;
          }
          return acc;
        }, {});
        setCostCenterData(segments);
      } else {
        console.error("Failed to fetch segment data");
      }
    };

    fetchSegmentData();
  }, []);

  const [jeDisable, setJEDisable] = useState(false);
  const handleCurrencyChange = (newCurrencyData) => {
    if (
      currencyData.code !== newCurrencyData.code ||
      currencyData.amount !== newCurrencyData.amount
    ) {
      setCurrencyData((prev) => ({
        ...prev,
        ...newCurrencyData,
      }));
    }
  };

  const renderCostCenterDropdowns = () => {
    const segmentMapping = {
      "Segment 1": "segment1",
      "Segment 2": "segment2",
      "Segment 3": "segment3",
      "Segment 4": "segment4",
      "Segment 5": "segment5",
    };

    return Object.keys(costCenterData).map((segmentSystem) => {
      const currentSegment =
        segmentMapping[segmentSystem] === "segment1"
          ? segment1
          : segmentMapping[segmentSystem] === "segment2"
          ? segment2
          : segmentMapping[segmentSystem] === "segment3"
          ? segment3
          : segmentMapping[segmentSystem] === "segment4"
          ? segment4
          : segmentMapping[segmentSystem] === "segment5"
          ? segment5
          : null;

      console.log("Current segment for", segmentSystem, ":", currentSegment);

      return (
        <DivisionSelect
          key={segmentSystem}
          Name={segmentSystem}
          Data={costCenterData[segmentSystem]}
          value={currentSegment} // Check what is passed here
          setWidth="long"
          isDropdownOpen={true}
          onChange={(selectedOption) => {
            console.log(
              "Option selected for",
              segmentSystem,
              ":",
              selectedOption
            );
            handleOnChangeCostCenter(
              segmentMapping[segmentSystem],
              selectedOption
            );
          }}
        />
      );
    });
  };

  ///////////////////////////////
  useEffect(() => {
    if (!entryData) {
      const fetchJournalCode = async () => {
        try {
          const response = await TransactionGet();
          if (response && response.status) {
            // First, try to filter the data based on the primary conditions
            let filteredData = response.data.filter(
              (item) =>
                item.transactionType === "Journal Entry" &&
                item.status === true &&
                item.isDefaultStatus === true
            );

            // If no match is found, filter by transactionType and seriesType
            if (filteredData.length === 0) {
              filteredData = response.data.filter(
                (item) =>
                  item.transactionType === "Journal Entry" &&
                  item.seriesType === "Primary"
              );
            }

            // Check if any entry matches the filter criteria
            if (filteredData.length > 0) {
              // Set the journalCode and seriesId to the first matched entry
              setJournalCode(filteredData[0].currentNumber);
              setSeriesId(filteredData[0].id);
            } else {
              console.error("No matching journal entry found.");
            }
          } else {
            console.error("Failed to fetch transaction data.");
          }
        } catch (error) {
          console.error("Error fetching transaction data:", error);
        }
      };

      fetchJournalCode();
    } else {
      // Use the entryData if it's available
      setJournalCode(entryData.journalCode || "");
      setSeriesId(entryData.seriesId || "");
      setJEDisable(true);
    }
  }, [entryData]);
  ////////////////////////////////////

  //////////////////////////////////////////
  const DropdownDataParent = [
    { label: "Assets", value: "Assets" },
    { label: "Liabilities", value: "Liabilities" },
    { label: "Equity", value: "Equity" },
    { label: "Revenue", value: "Revenue" },
    { label: "Expenses", value: "Expenses" },
  ];

  ///////////////////////////////
  const [readOnly, setReadOnly] = useState(true);

  const handleNSave = ({ selectedOption, currentNumber, id }) => {
    console.log("currentNumber:", currentNumber);
    console.log("selectedOption:", selectedOption);
    console.log("id:", id);

    if (selectedOption === "auto") {
      setIcon(<TbHexagonLetterA size={20} color="#58606f" />);
      setReadOnly(true);
      setJournalCode(currentNumber);

      console.log(
        "Auto Numbering selected. Perform auto numbering related actions."
      );
    } else if (selectedOption === "manual") {
      setIsManual(true);
      setReadOnly(true);
      setIcon(<TbHexagonLetterM size={20} color="#58606f" />);
      setJournalCode(currentNumber);
      console.log(
        "Manual Numbering selected. Perform manual numbering related actions."
      );
    }

    // Use the id as needed in your component state or other logic
    setSeriesId(id || ""); // Ensure you set a valid value or an empty string
  };
  const handleRecurrTransactionChange = () => {
    setIsRecurTransaction(!isRecurTransaction);
  };

  const handleAutoReversalChange = () => {
    setIsAutoReversal(!isAutoReversal);
  };

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

  const [journalCodeError, setJournalCodeError] = useState("");
  const [transactionDateError, setTransactionDateError] = useState("");
  const [postingDateError, setPostingDateError] = useState("");
  const [dueDateError, setDueDateError] = useState("");
  const [currencyError, setCurrencyError] = useState("");

  // const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    if (entryData) {
      console.log(
        "this is the data in the Journal Entry New For Update",
        entryData
      );

      setID(entryData.id);
      setJournalCode(entryData.JournalEntryNo);
      setDescription(entryData.description);
      setIsRecurTransaction(entryData.Recurring === "Yes");
      setTransactionDate(entryData.transactiondate);
      if (entryData) {
        setCurrencyData({
          code: entryData.currencyCode[0] || "",
          fullForm: entryData.currencyCode[1] || "",
          sign: entryData.currencySymbol[0] || "",
          amount: entryData.currencySymbol[1] || "",
        });
      }
      setReversalDate(entryData.ReversalDate);
      setPostingDate(entryData.postingdate);
      setFrequency(frequency);
      setDueDate(entryData.duedate);
      const divisionOption = costCenterData["Division"]?.find(
        (option) => option.value === entryData.division
      );
      const departmentOption = costCenterData["Department"]?.find(
        (option) => option.value === entryData.department
      );
      const projectOption = costCenterData["Project"]?.find(
        (option) => option.value === entryData.project
      );

      setDivision(
        divisionOption || {
          label: entryData.division,
          value: entryData.division,
        }
      );
      setDepartment(
        departmentOption || {
          label: entryData.department,
          value: entryData.department,
        }
      );
      setProject(
        projectOption || { label: entryData.project, value: entryData.project }
      );
      setReference(entryData.extrarefno);
      setInterval(entryData.Interval);
      setRecurringDate(entryData.RecurringDate);
    }
  }, [entryData, costCenterData]);
  // useEffect(() => {
  //   const fetchCurrencyData = async () => {
  //     const result = await GetCurrency();
  //     if (result.status) {
  //       // Transform the data for the dropdown
  //       const transformedData = result.data.map((currency) => ({
  //         label: currency.currencyCode,
  //         value: currency.id,
  //       }));
  //       setCurrencyData(transformedData);
  //     } else {
  //       console.log("Failed to fetch currency data");
  //     }
  //   };

  //   fetchCurrencyData();
  // }, []);

  const handleDropdownChange = (selectedOptions) => {
    setCurrency(selectedOptions);
  };

  //////////////////////// Submition/ Creation and Updatation of the journal Entry ///////////////////////////////////////

  const handleDeleteJE = async () => {
    if (!id) {
      setToasterContent({
        icon: "cross",
        text: "Error!",
        text2: "Journal entry ID not found.",
      });
      setShowToaster(true);
      return;
    }

    const result = await deleteJournalEntry(id);

    if (result.status) {
      setToasterContent({
        icon: "check",
        text: "Success!",
        text2: "Journal entry deleted successfully.",
      });
      setTimeout(() => {
        setScreen(2);
      }, 3000);
      // Optionally, clear the form or navigate away after deletion
      // clearForm();
    } else {
      setToasterContent({
        icon: "check",
        text: "Success!",
        text2:
          "Journal entry deleted successfully." ||
          "Failed to delete journal entry.",
      });
    }

    setShowToaster(true);
  };

  // Function to close the toaster
  const handleCloseToaster = () => {
    setShowToaster(false);
  };

  ////////////////////////////////////////////////
  const journalEntryProps = ViewEntryData
    ? {
        journalEntryNo: ViewEntryData.JournalEntryNo || "N/A",
        code: ViewEntryData.currencyCode[0] || [],
        fullform: ViewEntryData.currencyCode[1] || [],
        symbol: ViewEntryData.currencySymbol[0] || [],
        amount: ViewEntryData.currencySymbol[1] || [],

        // currencyFullName:
        //   ViewEntryData.currencyFullName || "United States Doller",
        tags: ViewEntryData.tags || ["Tag1", "Tag2", "Tag3"],
        descriptionText:
          ViewEntryData.description ||
          " Lorem ipsum is a placeholder text commonly used to demonstrate the",
        extraReferenceNumber: ViewEntryData.extrarefno || "N/A",
        transactionDate: ViewEntryData.transactiondate || "N/A",
        postingDate: ViewEntryData.postingdate || "N/A",
        dueDate: ViewEntryData.duedate || "N/A",
        autoReversalDate: ViewEntryData.ReversalDate || "N/A",
        reverseJournalEntry: ViewEntryData.reverseJournalEntry || false,
        recurTransaction: ViewEntryData.recurTransaction || false,
        recurrenceFrequency: ViewEntryData.Frequency || "N/A",
        recurrenceInterval: ViewEntryData.Interval || "N/A",
        nextRecurrenceDate: ViewEntryData.RecurringDate || "N/A",
        division: ViewEntryData.division || "Division",
        department: ViewEntryData.department || "Department",
        project: ViewEntryData.project || "Project",
        customField1: ViewEntryData.customField1 || "N/A",
        customField2: ViewEntryData.customField2 || "N/A",
        customField3: ViewEntryData.customField3 || "N/A",
        customField4: ViewEntryData.customField4 || "N/A",
        customField5: ViewEntryData.customField5 || "N/A",
      }
    : {};

  const isViewMode = Boolean(ViewEntryData);
  //////////////////////////////////////////////////
  // *************************************************API INTEGRATION***********************************************

  const JournalDetailsPosting = async () => {
    const Response = await JournalEntryPost(journalCode);
  };

  ///////////////////////// Table Details Rows Selection //////////////////////////

  ////////////////////////////////////////

  const formatNumber = (
    value,
    numberSeparator,
    decimalSeparator,
    decimalPlacesQuantity
  ) => {
    if (!value) return ""; // Handle empty or undefined values

    // Remove any non-numeric characters except decimal and negative signs
    let numericValue = value.replace(/[^\d.-]/g, "");

    if (!numericValue) return ""; // Return empty if there's no valid number

    // Split integer and decimal parts
    let [integerPart, decimalPart] = numericValue.split(".");

    // Format the integer part with the number separator (e.g., thousand separator)
    const formattedInteger = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      numberSeparator
    );

    // Handle the decimal part, ensuring the correct number of decimal places
    if (decimalPlacesQuantity) {
      decimalPart = decimalPart
        ? decimalPart.padEnd(decimalPlacesQuantity, "0")
        : "".padEnd(decimalPlacesQuantity, "0");
    }

    // Return formatted integer with the decimal part
    return decimalPart
      ? formattedInteger + decimalSeparator + decimalPart
      : formattedInteger;
  };

  const isEditable = !ViewEntryData;
  const [dynamicColumns, setDynamicColumns] = useState([]);
  const [data, setData] = useState([]);
  const [glAccountData, setGlAccountData] = useState([]);

  useEffect(() => {
    const initializeTableData = () => {
      const tableDetails =
        entryData?.jeTableDetails || ViewEntryData?.jeTableDetails || [];

      const formattedData = tableDetails.map((row) => ({
        id: row.id || Date.now().toString(),
        glaccount: row.glAccount || ["", ""], // Initialize glAccount with empty array if no value
        rowdescription: row.rowDescription || "",
        debit: row.debit || "",
        credit: row.credit || "",
        fcdebit: row.fcDebit || "",
        fccredit: row.fcCredit || "",
        taxcode: row.taxCode || "",
        taxamount: row.taxAmount || "",
        totalamount: row.totalAmount || "",
        fctotalamount: row.fcTotalAmount || "",

        // Map and initialize dynamic segments with fallback to empty array
        segment1: row.segment1 || ["", ""],
        segment2: row.segment2 || ["", ""],
        segment3: row.segment3 || ["", ""],
        segment4: row.segment4 || ["", ""],
        segment5: row.segment5 || ["", ""],

        // Apply dynamic columns logic to ensure columns are initialized with empty arrays
        ...dynamicColumns.reduce(
          (acc, col, index) => ({
            ...acc,
            [col.accessorKey]: row[`segment${index + 1}`] || ["", ""], // Ensure dynamic column maps to segment
          }),
          {}
        ),
      }));

      setData(formattedData);
    };

    if (entryData || ViewEntryData) {
      initializeTableData();
    }
  }, []);

  //////////////////////////////////////////////
  useEffect(() => {
    const fetchGLAccounts = async () => {
      try {
        const glAccounts = await fetchChartOfAccounts();
        console.log("Fetched GL Accounts:", glAccounts);
        const filteredGlAccounts = glAccounts
          .filter((account) => account.isMainAccount === false)
          .map((account) => ({
            value: account.accountCode,
            label: account.accountCode,
            description: account.accountName,
          }));

        setGlAccountData(filteredGlAccounts);
      } catch (error) {
        console.error("Error fetching GL Accounts:", error);
      }
    };

    fetchGLAccounts();
  }, []);

  useEffect(() => {
    const fetchSegmentData = async () => {
      try {
        const response = await GetSegment();
        if (response.status) {
          let segmentsData = response.data.filter(
            (segment) => segment.status === true
          );
          segmentsData.forEach((segment) => {
            segment.costCenter = segment.costCenter.filter(
              (option) => option.status === true
            );
          });

          // Map each segment to a dynamic column and its TypeDropdown component
          const dynamicCols = segmentsData.map((segment, index) => ({
            accessorKey: `segment${index + 1}`, // Ensure this matches how you initialize the data
            header: segment.segment,
            Cell: ({ cell }) => {
              const rowIndex = cell.row.index;
              const selectedValue = data[rowIndex]?.[`segment${index + 1}`] || [
                "",
                "",
              ]; // Ensure segment value is fetched correctly

              const options = segment.costCenter.map((option) => ({
                value: option.code,
                label: option.code,
                description: option.name,
              }));

              return (
                <TypeDropdown
                  value={selectedValue} // Pass the selected value
                  onChange={(newValue) =>
                    isEditable &&
                    handleValueChangeDynamic(
                      rowIndex,
                      newValue,
                      `segment${index + 1}` // Map to the correct segment
                    )
                  }
                  data={options}
                  placeholder={`Select ${segment.segment}`}
                  disabled={!isEditable} // Disable if not editable
                />
              );
            },
          }));

          setDynamicColumns(dynamicCols);
        }
      } catch (error) {
        console.error("Error fetching segment data:", error);
      }
    };

    fetchSegmentData();
  }, [data, isEditable]);

  ///////////////////////////////////////////////////////////////////////
  const [editedUsers, setEditedUsers] = useState({});
  const handleValueChange = (rowIndex, newValue) => {
    const updatedData = [...data];
    updatedData[rowIndex].glaccount = newValue;
    setData(updatedData);
  };

  const handleCellChange = (rowIndex, columnId, value) => {
    console.log("Updating cell", { rowIndex, columnId, value });
    
    // Update the data state
    setData((prevData) => {
      const updatedData = prevData.map((row, index) => {
        if (index === rowIndex) {
          const newRow = { ...row, [columnId]: value };
          
          // Perform necessary calculations
          const debitValue = parseFloat(stripSeparators1(newRow.debit || "0", NumberSeparator, DecimalSeparator)) || 0;
          const creditValue = parseFloat(stripSeparators1(newRow.credit || "0", NumberSeparator, DecimalSeparator)) || 0;
          const fcDebitValue = debitValue * (parseFloat(currencyData.amount) || 1);
          const fcCreditValue = creditValue * (parseFloat(currencyData.amount) || 1);
  
          // Update calculated fields
          newRow.totalamount = formatNumber((debitValue + creditValue).toFixed(DecimalPlacesQuantity), NumberSeparator, DecimalSeparator, DecimalPlacesQuantity);
          newRow.fcdebit = formatNumber(fcDebitValue.toFixed(DecimalPlacesQuantity), NumberSeparator, DecimalSeparator, DecimalPlacesQuantity);
          newRow.fccredit = formatNumber(fcCreditValue.toFixed(DecimalPlacesQuantity), NumberSeparator, DecimalSeparator, DecimalPlacesQuantity);
          newRow.fctotalamount = formatNumber((fcDebitValue + fcCreditValue).toFixed(DecimalPlacesQuantity), NumberSeparator, DecimalSeparator, DecimalPlacesQuantity);
  
          return newRow; // Return the updated row
        }
        return row; // Return the unchanged row
      });
  
      return updatedData; // Return the updated data array
    });
  };
  

  const handleValueChangeDynamic = (rowIndex, newValue, key) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        [key]: newValue,
      };
      return updatedData;
    });
  };

  const stripSeparators = (value, NumberSeprator, DecimalSeprator) => {
    // Ensure that value is a string before using replace
    if (typeof value === "string") {
      return value
        .replace(new RegExp(`\\${NumberSeprator}`, "g"), "")
        .replace(DecimalSeprator, ".");
    }

    // If value is not a string, return it as is or handle it based on your needs
    return value;
  };

  const [totals, setTotals] = useState({
    totalDebit: 0,
    totalCredit: 0,
    totalDebitFx: 0,
    totalCreditFx: 0,
    varianceAmount: 0, // Add variance amount to the state
  });

  const NumberSeparator = useSelector((state) => state.number.NumberSeprator);
  const DecimalSeparator = useSelector((state) => state.number.DecimalSeprator);
  const DecimalPlacesQuantity = useSelector(
    (state) => state.number.DecimalPlacesQuantity
  );

  const stripSeparators1 = (value, numSep, decSep) => {
    if (typeof value !== "string") return value;

    return value
      .replace(new RegExp(`\\${numSep}`, "g"), "")
      .replace(new RegExp(`\\${decSep}`), ".");
  };

  const calculateTotals = () => {
    let totalDebit = 0;
    let totalCredit = 0;
    let totalDebitFx = 0;
    let totalCreditFx = 0;

    data.forEach((row) => {
      const { debit, credit } = row;

      const debitValue =
        parseFloat(
          stripSeparators1(debit, NumberSeparator, DecimalSeparator)
        ) || 0;
      const creditValue =
        parseFloat(
          stripSeparators1(credit, NumberSeparator, DecimalSeparator)
        ) || 0;

      console.log("Row values:", { debitValue, creditValue });

      const debitFxValue = debitValue * (parseFloat(currencyData.amount) || 1);
      const creditFxValue =
        creditValue * (parseFloat(currencyData.amount) || 1);

      totalDebit += debitValue;
      totalCredit += creditValue;
      totalDebitFx += debitFxValue;
      totalCreditFx += creditFxValue;
    });
    const varianceAmount = totalDebit - totalCredit;
    console.log("Total Calculations:", {
      totalDebit,
      totalCredit,
      totalDebitFx,
      totalCreditFx,
    });

    setTotals({
      totalDebit,
      totalCredit,
      totalDebitFx,
      totalCreditFx,
      varianceAmount,
    });
  };

  useEffect(() => {
    calculateTotals();
  }, [data]);

  const tableDetailColumns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        mantineTableBodyCellProps: (cell) => ({
          style: {
            fontSize: "12px",
            color: "#464f60cc",
            borderRight: "1px solid #F2F2F2",
            borderTop: "1px solid #F2F2F2",
            borderBottom: "1px solid #F2F2F2",
            borderLeft: "none",
            display: "none",
          },
        }),
        mantineTableHeadCellProps: {
          sx: {
            "& .mantine-TableHeadCell-Content:first-of-type": {
              justifyContent: "left",

              fontSize: "12px",
              color: "#464f60cc",
              fontWeight: "700",
              margin: "0px 0px 0px 0px",
              display: "none",
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
        Cell: ({ cell }) => (
          <span style={{ fontSize: "12px", color: "#464f60cc" }}>
            {cell.getValue() || ""}
          </span>
        ),
      },
      {
        accessorKey: "glaccount",
        header: "GL Account",
        mantineTableBodyCellProps: (cell) => ({
          style: {
            fontSize: "12px",
            color: "#464f60cc",

            borderRight: "1px solid #F2F2F2",
            borderTop: "1px solid #F2F2F2",

            borderBottom: "1px solid #F2F2F2",
            borderLeft: "none",
          },
        }),
        Footer: () => (
          <div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "12px",
                cursor: "pointer",
                color: "lightgrey",
                fontWeight: "400",
                marginLeft: "-5px",
              }}
              onClick={handleAddRow}
            >
              + Add Row
            </button>
          </div>
        ),
        Cell: ({ cell }) => {
          const rowIndex = cell.row.index;
          const selectedValue = data[rowIndex]?.glaccount || "";
          return (
            <TypeDropdown
              value={selectedValue}
              onChange={(newValue) =>
                isEditable && handleValueChange(rowIndex, newValue)
              }
              data={glAccountData}
              placeholder={"Select Account"}
              disabled={!isEditable}
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
            value={cell.getValue() || ""}
            readOnly={!isEditable}
            onChange={(e) =>
              isEditable &&
              handleCellChange(row.index, "rowdescription", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "debit",
        header: "Debit",
        Cell: ({ row }) => {
          const { NumberSeprator, DecimalSeprator, DecimalPlacesQuantity } =
            useSelector((state) => state.number);
          const [inputValue, setInputValue] = useState(
            row.original.debit || ""
          );

          const handleBlur = (e) => {
            const value = e.target.value;
            const numericValue =
              parseFloat(
                stripSeparators(value, NumberSeprator, DecimalSeprator)
              ) || 0;

            const formattedValue = formatNumber(
              numericValue.toFixed(DecimalPlacesQuantity),
              NumberSeprator,
              DecimalSeprator,
              DecimalPlacesQuantity
            );
            setInputValue(formattedValue);
            handleCellChange(row.index, "debit", formattedValue);
          };

          const handleChange = (e) => {
            setInputValue(e.target.value);
          };

          return (
            <input
              style={{
                fontSize: "12px",
                color: "#464f60cc",
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                textAlign: "right",
              }}
              type="text"
              value={inputValue}
              onChange={isEditable ? handleChange : null}
              onBlur={handleBlur}
              readOnly={!isEditable}
            />
          );
        },
      },
      {
        accessorKey: "fcdebit",
        header: "Debit (Fx)",
        Cell: ({ row }) => {
          const { NumberSeprator, DecimalSeprator, DecimalPlacesQuantity } =
            useSelector((state) => state.number);
          const debitValue =
            parseFloat(
              stripSeparators(
                row.original.debit,
                NumberSeprator,
                DecimalSeprator
              )
            ) || 0;
          const amount = parseFloat(currencyData.amount) || 0;
          const calculatedValue = (debitValue * amount).toFixed(2);

          const formattedValue = formatNumber(
            calculatedValue,
            NumberSeprator,
            DecimalSeprator,
            DecimalPlacesQuantity
          );

          return (
            <input
              style={{
                fontSize: "12px",
                color: "#464f60cc",
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                textAlign: "right",
              }}
              type="text"
              value={formattedValue}
              readOnly
            />
          );
        },
      },
      {
        accessorKey: "credit",
        header: "Credit",
        Cell: ({ row }) => {
          const { NumberSeprator, DecimalSeprator, DecimalPlacesQuantity } =
            useSelector((state) => state.number);
          const [inputValue, setInputValue] = useState(
            row.original.credit || ""
          );

          const handleBlur = (e) => {
            const value = e.target.value;
            const numericValue =
              parseFloat(
                stripSeparators(value, NumberSeprator, DecimalSeprator)
              ) || 0;

            const formattedValue = formatNumber(
              numericValue.toFixed(DecimalPlacesQuantity),
              NumberSeprator,
              DecimalSeprator,
              DecimalPlacesQuantity
            );
            setInputValue(formattedValue);
            handleCellChange(row.index, "credit", formattedValue);
          };

          const handleChange = (e) => {
            setInputValue(e.target.value);
          };

          return (
            <input
              style={{
                fontSize: "12px",
                color: "#464f60cc",
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                textAlign: "right",
              }}
              type="text"
              value={inputValue}
              onChange={isEditable ? handleChange : null}
              onBlur={handleBlur}
              readOnly={!isEditable}
            />
          );
        },
      },
      {
        accessorKey: "fccredit",
        header: "Credit (Fx)",
        Cell: ({ row }) => {
          const { NumberSeprator, DecimalSeprator, DecimalPlacesQuantity } =
            useSelector((state) => state.number);
          const creditValue =
            parseFloat(
              stripSeparators(
                row.original.credit,
                NumberSeprator,
                DecimalSeprator
              )
            ) || 0;
          const amount = parseFloat(currencyData.amount) || 0;
          const calculatedValue = (creditValue * amount).toFixed(2);

          const formattedValue = formatNumber(
            calculatedValue,
            NumberSeprator,
            DecimalSeprator,
            DecimalPlacesQuantity
          );

          return (
            <input
              style={{
                fontSize: "12px",
                color: "#464f60cc",
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                textAlign: "right",
              }}
              type="text"
              value={formattedValue}
              readOnly
            />
          );
        },
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
            value={cell.getValue() || ""}
            onChange={(e) =>
              handleCellChange(row.index, "taxcode", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "totalamount",
        header: "Total Amount",
        Cell: ({ row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              textAlign: "right",
            }}
            type="text"
            value={row.original.totalamount || ""}
            readOnly
          />
        ),
      },

      {
        accessorKey: "fctotalamount",
        header: "FC Total Amount",
        Cell: ({ row }) => (
          <input
            style={{
              fontSize: "12px",
              color: "#464f60cc",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              textAlign: "right",
            }}
            type="text"
            value={row.original.fctotalamount || ""}
            readOnly
          />
        ),
      },
      ...dynamicColumns,
    ],
    [data, glAccountData, dynamicColumns]
  );

  const [rowSelection, setRowSelection] = useState({});
  const handleAddRowAbove = (row) => {
    const newRow = {
      id: Date.now().toString(), // Unique ID for the new row
      glaccount: [], // Initialize glaccount as an empty array
      rowdescription: "",
      debit: "",
      credit: "",
      fcdebit: "",
      fccredit: "",
      taxcode: "",
      taxamount: "",
      totalamount: "",
      fctotalamount: "",
      // Initialize dynamic columns as empty arrays
      ...dynamicColumns.reduce((acc, col) => {
        acc[col.accessorKey] = []; // Set each dynamic field as an empty array
        return acc;
      }, {}),
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
      id: Date.now().toString(), // Unique ID for the new row
      glaccount: [], // Initialize glaccount as an empty array
      rowdescription: "",
      debit: "",
      credit: "",
      fcdebit: "",
      fccredit: "",
      taxcode: "",
      taxamount: "",
      totalamount: "",
      fctotalamount: "",
      // Initialize dynamic columns as empty arrays
      ...dynamicColumns.reduce((acc, col) => {
        acc[col.accessorKey] = []; // Set each dynamic field as an empty array
        return acc;
      }, {}),
    };

    const rowIndex = row.index + 1; // Add the new row below the current one
    const newData = [
      ...data.slice(0, rowIndex),
      newRow,
      ...data.slice(rowIndex),
    ];
    setData(newData);
  };

  const handleDeleteRow = (rowIndex) => {
    console.log("Deleting row at index:", rowIndex);
    setData((prevData) => {
      const updatedData = [...prevData]; // Create a shallow copy
      updatedData.splice(rowIndex, 1); // Remove the specific row
      return updatedData;
    });
  };

  const handleAddRow = () => {
    const newRow = {
      id: Date.now().toString(), // Unique ID for the new row
      glaccount: [], // Initialize glaccount as an empty array
      rowdescription: "",
      debit: "",
      credit: "",
      fcdebit: "",
      fccredit: "",
      taxcode: "",
      taxamount: "",
      totalamount: "",
      fctotalamount: "",
      // Initialize dynamic columns as empty arrays
      ...dynamicColumns.reduce((acc, column) => {
        acc[column.accessorKey] = []; // Set each dynamic field as an empty array
        return acc;
      }, {}),
    };

    setData((prevData) => [...prevData, newRow]);
  };


  const handleUpdateTableDetails = async () => {
    // Ensure that data is available for update
    if (!data || data.length === 0) {
      console.error("No data available for update.");
      return;
    }
  
    // Get the journalEntryId from entryData
    const journalEntryId = entryData.id; // Assuming entryData has the ID of the journal entry
  
    // Prepare the update data based on the current data state
    const updateData = data.map((row) => {
      // Find the corresponding original row from entryData for fallback
      const originalRow = entryData.jeTableDetails.find((e) => e.id === row.id) || {};
  
      return {
        id: row.id,
        rowDescription: row.rowdescription || originalRow.rowDescription, 
        debit: parseFloat(stripSeparators1(row.debit || originalRow.debit || "0", NumberSeparator, DecimalSeparator)),   
        credit: parseFloat(stripSeparators1(row.credit || originalRow.credit || "0", NumberSeparator, DecimalSeparator)),   
        debitFC: parseFloat(stripSeparators1(row.fcdebit || originalRow.fcDebit || "0", NumberSeparator, DecimalSeparator)),   
        creditFC: parseFloat(stripSeparators1(row.fccredit || originalRow.fcCredit || "0", NumberSeparator, DecimalSeparator)),   
        taxCode: row.taxcode || originalRow.taxCode || "",
        taxAmount: row.taxamount || originalRow.taxAmount || null,
        glAccount: row.glaccount.length > 0 ? row.glaccount : originalRow.glAccount || ["", ""], 
        segment1: row.segment1.length > 0 ? row.segment1 : originalRow.segment1 || ["", ""], 
        segment2: row.segment2.length > 0 ? row.segment2 : originalRow.segment2 || ["", ""], 
        segment3: row.segment3.length > 0 ? row.segment3 : originalRow.segment3 || ["", ""], 
        segment4: row.segment4.length > 0 ? row.segment4 : originalRow.segment4 || ["", ""], 
        segment5: row.segment5.length > 0 ? row.segment5 : originalRow.segment5 || ["", ""], 
      };
    });
  
    console.log("Payload for API:", JSON.stringify(updateData, null, 2));
  
    // Send the update request to the API
    const result = await updateTableDetails(journalEntryId, updateData);
  
    if (!result.status) {
      console.error("Failed to update table details:", result.data);
      setToasterContent({
        icon: "cross",
        text: "Error!",
        text2: "Failed to update table details.",
      });
    } else {
      console.log("Successfully updated table details.")   
      setToasterContent({
        icon: "check",
        text: "Success!",
        text2: "All table details updated successfully.",
      });
    }
    setShowToaster(true); 
  };
  
  


  
  
  /////////////////////////////// Api Calls  ///////////////////////////////////////////////

  const handleSubmit = async () => {

    const hasEmptyGlAccount = data.some((row) => {
      return !row.glaccount || row.glaccount.length === 0 || !row.glaccount[0];
    });
  
    if (hasEmptyGlAccount) {
      alert("Please ensure all rows have a GL Account selected before submitting.");
      return; // Exit the function, prevent submission
    }

    if (totals.varianceAmount !== 0) {
      alert(
        "The variance amount must be 0 before submitting the journal entry."
      );
      return; // Exit the function, prevent submission
    }

    const prepareSegmentData = () => ({
      segment1: segment1 || [],
      segment2: segment2 || [],
      segment3: segment3 || [],
      segment4: segment4 || [],
      segment5: segment5 || [],
    });

    if (entryData) {
      console.log("update");

      const updatedData = {
        journalCode,
        description,
        isRecurTransaction,
        transactionDate,
        currency: [
          currencyData.code,
          currencyData.fullForm,
          currencyData.sign,
          currencyData.amount,
        ],
        reversalDate,
        postingDate,
        frequency,
        dueDate,
        reference,
        intervalValue,
        recurringDate,
        ...prepareSegmentData(), // Include dynamic segments
      };

      console.log("Updated Data:", updatedData);
      const result = await updateJournalEntry(entryData.id, updatedData);

      if (result.status) {
        
        // await handleUpdateTableDetails(); // Call the update function for table details
        setToasterContent({
          icon: "check",
          text: "Success",
          text2: "Journal entry and table details updated successfully.",
        });
      } else {
        // Handle update errors
        setToasterContent({
          icon: "cross",
          text: "Error",
          text2: "Failed to update journal entry.",
        });
      }

      setShowToaster(true);
    } else {
      console.log("create");
      console.log("currencyData before submit:", currencyData);
      let isValid = true;

      // Validation logic (kept as is)
      if (!journalCode) {
        setJournalCodeError("Journal Entry No. is required");
        isValid = false;
      } else {
        setJournalCodeError("");
      }

      if (!transactionDate) {
        setTransactionDateError("Transaction Date is required");
        isValid = false;
      } else {
        setTransactionDateError("");
      }

      if (!postingDate) {
        setPostingDateError("Posting Date is required");
        isValid = false;
      } else {
        setPostingDateError("");
      }

      if (!dueDate) {
        setDueDateError("Due Date is required");
        isValid = false;
      } else {
        setDueDateError("");
      }

      if (!currencyData || !currencyData.code) {
        setCurrencyError("Currency is required");
        isValid = false;
      }

      if (!isValid) {
        setToasterContent({
          icon: "cross",
          text: "Error!",
          text2: "Please fill all required fields before submitting.",
        });
        setShowToaster(true);
        return;
      }

      // Create a new journal entry
      const newEntry = {
        journalEntryNumber: journalCode,
        description,
        transactionDate,
        postingDate,
        dueDate,
        currency: [
          currencyData.code,
          currencyData.fullForm,
          currencyData.sign,
          currencyData.amount,
        ],
        recurringTransaction: isRecurTransaction,
        frequency,
        intervalValue,
        reversalDate,
        recurringDate,
        extraReferenceNumber: reference,
        ...prepareSegmentData(), // Include dynamic segments
      };

      console.log("newEntry:", newEntry);
      const result = await JournalEntryPost(newEntry);
      console.log("Result from JournalEntryPost:", result);
      if (result.status) {
        setToasterContent({
          icon: "check",
          text: "Success!",
          text2: "The Transaction has been created successfully.",
        });
        setShowToaster(true);

        const newJournalEntryId = result.data.id;

        await saveTableDetails(newJournalEntryId);

        setTimeout(() => {
          setScreen(2);
        }, 3000);

        // Conditionally execute this block only if isManual is false
        if (!isManual) {
          const transNumberResult = await TransactionGet();

          if (transNumberResult.status && transNumberResult.data) {
            // Find the specific transaction numbering by seriesId
            const transactionNumbering = transNumberResult.data.find(
              (item) => item.id === seriesId
            );

            if (transactionNumbering) {
              const currentFirstNumber = transactionNumbering.firstNumber;
              const updatedFirstNumber = (
                parseInt(currentFirstNumber, 10) + 1
              ).toString();

              // Update the transaction number
              const updateResult = await TransactionUpdateNew(
                seriesId,
                undefined, // seriesType
                undefined, // length
                undefined, // prefix
                undefined, // separator
                undefined, // suffix
                updatedFirstNumber,
                undefined, // nextNumber
                undefined, // currentNumber
                undefined, // isDefaultStatus
                undefined // status
              );

              if (!updateResult.status) {
                console.error("Failed to update the transaction numbering.");
                setToasterContent({
                  icon: "cross",
                  text: "Error!",
                  text2: "Failed to update the transaction numbering.",
                });
                setShowToaster(true);
              }
            } else {
              console.error("Error: Transaction numbering not found.");
              setToasterContent({
                icon: "cross",
                text: "Error!",
                text2: "Transaction numbering not found.",
              });
              setShowToaster(true);
            }
          } else {
            console.error(
              "Error: Failed to fetch transaction numbering details."
            );
            setToasterContent({
              icon: "cross",
              text: "Error!",
              text2: "Failed to fetch transaction numbering details.",
            });
            setShowToaster(true);
          }
        }
      } else {
        setToasterContent({
          icon: "cross",
          text: "Error!",
          text2: "Failed to create journal entry transaction.",
        });
        setShowToaster(true);
      }
    }
  };

  const saveTableDetails = async (journalEntryId) => {
    const tableDetails = data.map((row) => {
      const tableRow = {
        rowDescription: row.rowdescription,
        debit: parseFloat(row.debit.replace(/,/g, "")) || 0,
        credit: parseFloat(row.credit.replace(/,/g, "")) || 0,
        debitFC: parseFloat(row.fcdebit.replace(/,/g, "")) || 0,
        creditFC: parseFloat(row.fccredit.replace(/,/g, "")) || 0,
        taxCode: row.taxcode || "",
        taxAmount: row.taxamount ? parseFloat(row.taxamount) : null,
        glAccount: Array.isArray(row.glaccount) ? row.glaccount : ["", ""], // Store as [label, description]

        // Save dynamic columns (segments) as [label, description] arrays
        segment1: Array.isArray(row.segment1) ? row.segment1 : ["", ""],
        segment2: Array.isArray(row.segment2) ? row.segment2 : ["", ""],
        segment3: Array.isArray(row.segment3) ? row.segment3 : ["", ""],
        segment4: Array.isArray(row.segment4) ? row.segment4 : ["", ""],
        segment5: Array.isArray(row.segment5) ? row.segment5 : ["", ""],
      };

      return tableRow;
    });

    console.log(
      "Sending data to API:",
      JSON.stringify({ journalEntryId, tableDetails }, null, 2)
    );

    try {
      const response = await createTableDetails(journalEntryId, tableDetails);
      console.log("API Response:", response);

      if (response && response.length > 0) {
        alert("Table details saved successfully");
      } else {
        alert("Failed to save table details");
      }
    } catch (error) {
      console.error("Error saving table details:", error);
      alert("Error saving table details");
    }
  };

  ///////////////////////////////////////

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
      position: "relative",
      zIndex: "auto",
      overflow: "visible",
      cursor: "pointer",
      "td:first-of-type": {
        display: "flex",
        alignItems: "center",

        borderRight: "none",
        width: "5px",
      },
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
    setRowSelection({});
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
        <HeaderNewButtons
          clickScreenChange={handleSubmit}
          deleteClick={handleDeleteJE}
          showButton={true}
          editButton={onEditClickV}
        />
      </Wrap>

      <Wrapper>
        {showToaster && (
          <Toaster
            icon={toasterContent.icon}
            text={toasterContent.text}
            text2={toasterContent.text2}
            handleClose={handleCloseToaster}
            duration={3000}
          />
        )}
        {/* <button onClick={openNModal}>Open Numbering Choice Modal</button> */}

        <NumberingChoiceModal
          isOpen={isModalNOpen}
          onRequestClose={closeNModal}
          onSave={handleNSave}
          FilterByTransactionType="Journal Entry"
        />
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
          <Grab1>
            {/* <JournalEntryViewMode {...journalEntryProps} /> */}
            <InputSection1>
              <TitleOfSection title={"JOURNAL ENTRY DETAILS"} />

              <Line />

              {isViewMode ? (
                <JournalEntryViewMode {...journalEntryProps} />
              ) : (
                <Wrap5>
                  <MainContianer>
                    <Wrapper5>
                      <Section>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                          }}
                        >
                          <ChartAccountInput
                            Name={"Journal Entry No."}
                            Hash="*"
                            disable={jeDisable}
                            Padding={true}
                            readOnly={readOnly}
                            setWidth={"true"}
                            onIconClick={openNModal}
                            // image={Auto}
                            icon={icon}
                            onChange={(e) => setJournalCode(e.target.value)}
                            value={journalCode}
                          />
                          {journalCodeError && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "11px",
                                marginTop: "5px",
                              }}
                            >
                              {journalCodeError}
                            </div>
                          )}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                          }}
                        >
                          <CalenderInput
                            Name={"Transaction Date"}
                            width={true}
                            onChange={(date) => setTransactionDate(date)}
                            value={transactionDate}
                          />
                          {transactionDateError && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "11px",
                                marginTop: "5px",
                              }}
                            >
                              {transactionDateError}
                            </div>
                          )}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                          }}
                        >
                          <CalenderInput
                            Name={"Posting Date"}
                            Hash={"*"}
                            width={true}
                            onChange={(date) => setPostingDate(date)}
                            value={postingDate}
                          />
                          {postingDateError && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "11px",
                                marginTop: "5px",
                              }}
                            >
                              {postingDateError}
                            </div>
                          )}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                          }}
                        >
                          <CalenderInput
                            Name={"Due Date"}
                            width={true}
                            onChange={(date) => setDueDate(date)}
                            value={dueDate}
                          />
                          {dueDateError && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "11px",
                                marginTop: "5px",
                              }}
                            >
                              {dueDateError}
                            </div>
                          )}
                        </div>
                        <ChartAccountInput
                          Name={"Extra Ref.Number"}
                          Padding={true}
                          setWidth={"true"}
                          insertFromRight={false}
                          onChange={handleReferenceChange}
                          value={reference}
                        />
                      </Section>

                      <Section>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                          }}
                        >
                          <CurrencyInput2
                            Name="Currency"
                            onChange={handleCurrencyChange}
                            value={currencyData}
                            currencyData={currencyData}
                          />
                          {currencyError && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "11px",
                                marginTop: "5px",
                              }}
                            >
                              {currencyError}
                            </div>
                          )}
                        </div>
                        <Check1>
                          <Text txtColor={themeKeys.primary}>
                            Recurr Transaction
                          </Text>
                          <input
                            style={{ width: "16px", height: "16px" }}
                            type="checkbox"
                            onChange={handleRecurrTransactionChange}
                            checked={isRecurTransaction}
                          />
                        </Check1>
                        {isRecurTransaction && (
                          <>
                            <DropdownInput
                              Name={"Frequency"}
                              Padding={false}
                              setWidth={false}
                              check={!isRecurTransaction}
                              onChange={handleOnChangeFrequency}
                              value={frequency}
                              Data={DropdownDataParent}
                            />
                            <ChartAccountInput
                              Name={"Interval"}
                              Padding={true}
                              setWidth={"true"}
                              disable={!isRecurTransaction}
                              insertFromRight={true}
                              onChange={handleIntervalChange}
                              value={intervalValue}
                            />
                            <CalenderInput
                              Name={"Recurring Date"}
                              width={true}
                              check={!isRecurTransaction}
                              disable={!isRecurTransaction}
                              onChange={(date) => setRecurringDate(date)}
                              value={recurringDate}
                            />
                          </>
                        )}
                      </Section>
                      <Section>
                        <ChartAccountInput
                          Name="Description"
                          Padding={"P"}
                          setWidth={"true"}
                          onChange={handleDescriptionChange}
                          value={description}
                          resizeHandler={true}
                        />
                        <Check2>
                          <Text2>Auto Reversal</Text2>
                          <input
                            style={{ width: "15.5px", height: "15.5px" }}
                            type="checkbox"
                            onChange={handleAutoReversalChange}
                            checked={isAutoReversal}
                          />
                        </Check2>
                        {isAutoReversal && (
                          <CalenderInput
                            Name={"Reversal Date"}
                            width={true}
                            disable={!isAutoReversal}
                            onChange={(date) => setReversalDate(date)}
                            value={reversalDate}
                          />
                        )}
                      </Section>

                      <Section>{renderCostCenterDropdowns()}</Section>
                    </Wrapper5>
                    <StatusContainer>
                      <LargeButton
                        font="18px"
                        name={"Posted"}
                        // onClick={handleSubmit}
                      />
                    </StatusContainer>
                  </MainContianer>
                </Wrap5>
              )}
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
                onTableDetailDeleteClick={handleDeleteClickTDRows}
              />
            </Wrapper>

            {/* <div>
      <h3>Totals</h3>
      <div>Total Debit: {totals.totalDebit.toFixed(2)}</div>
      <div>Total Credit: {totals.totalCredit.toFixed(2)}</div>
      <div>Total Debit (Fx): {totals.totalDebitFx.toFixed(2)}</div>
      <div>Total Credit (Fx): {totals.totalCreditFx.toFixed(2)}</div>
    </div> */}

            <Container>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "0px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    marginTop: "11px",
                    width: "100%",
                  }}
                >
                  <Tagline>Notes</Tagline>
                  <InputField />
                </div>
                <div
                  style={{
                    width: "98%",
                    height: "100px",
                    marginBottom: "15px",
                  }}
                >
                  <TagsInput />
                </div>
              </div>
              <AmountTotal
                TotalCredit={totals.totalCredit.toFixed(2)}
                TotalCreditFC={totals.totalCreditFx.toFixed(2)}
                TotalDebit={totals.totalDebit.toFixed(2)}
                TotalDebitFC={totals.totalDebitFx.toFixed(2)}
                VarianceAmount={totals.varianceAmount.toFixed(2)}
              />
            </Container>
            {isModalOpen && (
              <AttachmentUpload
                CancelAction={handleCancel}
                SaveAction={handleSaveAT}
              />
            )}
            <CustomFields />
            {/* <button onClick={handleUpdateTableDetails}>T</button> */}

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
              onINAddNotesClick={handleAddNotesClick}
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

            <ActivityPart
              ShowButton={true}
              filterName={"journalentry"}
              selectedCode={id}
            />
          </Grab1>
        </Div>
      </Wrapper>
    </Grab>
  );
};

export default JornalEntrynew;
