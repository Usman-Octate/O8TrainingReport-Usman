import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import Header from "../components/parts/Header";
import { useSelector } from "react-redux";
import NewScreensNav from "./Components/NewScreensNav";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import Dropdown from "../assets2/ChartOfAccountNew/Dropdown.svg";
import BlackDropdown from "../assets2/ChartOfAccountNew/DarkDropDown.svg";
import CustomFields from "../New-Screens/Sections/CustomFields";
import DropdownInput from "../components/Inputs/DropdownInput";
import AddCurrencyDropdown from "../components/Inputs/AddCurrencyDropdown";
import { useAppContext } from "../context/AppProvider";
import ActivityPart from "../New-Screens/Sections/ActivityPart";
import StatusButton from "../components/buttons/StatusButton";
import Dotscell from "../components/Table/CustomCells/Dots";
import TitleOfSection from "../New-Screens/Components/TitleOfSection";
import {
  ChartofAccountDelete,
  InputPost,
  ChartofAccountUpdate,
  ChartofAccountSend,
  GetCurrency,
  AttachmentGet,
  AccountTypeTableData,
  GetAccountType,
  GetDefineCurrency,
} from "../Api/Apis";
import { useReactToPrint } from "react-to-print";
import MyModal from "../components/Modals/MyModal";
import Toaster from "../components/Modals/Toaster";
import AttachmentUpload from "../components/Modals/AttachmentUpload";
import DropdownInputAccountCode from "../components/Inputs/DropdownInputAccountCode";
import ChartofAccountViewMode from "./Components/ViewMode/ChartofAccountViewMode";
import MRTSmallTables from "../New-Screens/Components/MantineTable/MRTSmallTables";
import { useMemo } from "react";
import MRTLinkedTransaction from "./Components/MantineTable/MRTLinkedTransaction";
import LargeButton from "../components/buttons/LargeButton";
import { NutFill } from "styled-icons/bootstrap";
import DivisionAddNew from "../components/Inputs/DivisionAddNew";

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
const Wrapper2 = styled.div`
  display: flex;
  gap: 30px;
`;

const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 10px 0px;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;
const Title2 = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin: 10px 10px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
`;
const FirstColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;
const Main2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 0;
  gap: 35px;
  @media (max-width: 700px) {
    gap: 25px;
  }
`;
const InputCheck2 = styled.input`
  height: 0px;
  width: 0px;
  opacity: 0;
`;
const Text12 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #58606f;
  width: 120px;
`;

const SecondColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 20px;
  /* margin: 20px 0px; */

  /* @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
  } */
`;
const Main22 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  gap: 5px;
  margin-left: 15px;
  /* padding-left: 30px; */
  @media (max-width: 700px) {
    padding-left: 0;
  }
`;
const MainThird2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-left: 15px; */
  padding: 10px 0;
  gap: 35px;
`;
const InputCheckOne2 = styled.input`
  height: 18px;
  width: 18px;
`;
const Wrap2 = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18.6px;
`;
const Span2 = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.bgColor};
  transition: 0.4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: "";
    height: 11px;
    width: 11px;
    left: ${(props) => (props.clicked ? "26.0px" : "3.5px")};
    bottom: 4px;
    background-color: #ffffff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const ThirdColumn2 = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Wrapit2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;

  padding-right: 10px;
  @media (max-width: 1166px) {
    flex-direction: column;
    align-items: start;
  }
`;
const Text22 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #58606f;
  width: 120px;
`;
const Text32 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #58606f;
  width: 120px;
`;
const Grab2 = styled.div`
  height: 80vh;
  overflow-y: auto;
  padding: 0px 8px;
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
  /* @media (min-width: 850px) {
  }
  @media (max-width: 2550px) {
    height: 87vh;
  }
  @media (max-width: 2400px) {
    height: 87vh;
  }
  @media (max-width: 2000px) {
    height: 87vh;
  }
  @media (max-width: 1880px) {
    height: 85.5vh;
  }
  @media (max-width: 1370px) and (max-height: 793px) {
    height: 40vh;
  }
  @media (max-width: 1166px) {
    height: 80.9vh;
  }
  @media (max-width: 915px) {
    height: 77.85vh;
  }
  @media (max-width: 1024px) and (max-height: 1366px) {
    height: 88vh;
  }
  @media (max-width: 820px) and (max-height: 1180px) {
    height: 84vh;
  }
  @media (max-width: 768px) and (max-height: 1024px) {
    height: 82.4vh;
  }
  @media (max-width: 1366px) and (max-height: 1024px) {
    height: 85vh;
  }
  @media (max-width: 1180px) and (max-height: 820px) {
    height: 85.5vh;
  }
  @media (max-width: 1180px) and (max-height: 793px) {
    height: 81vh;
  }
  @media (max-width: 768px) and (max-height: 1024px) {
    height: 82.5vh;
  }
  @media (max-width: 1024px) and (max-height: 768px) {
    height: 82vh;
  }
  @media (max-width: 430px) and (max-height: 935px) {
    height: ${(props) => (props.max ? "100vh" : "77.3vh")};
    height: 77.3vh; */
  /* overflow-x: hidden;
  }
  @media (max-width: 915px) and (max-height: 412px) {
    height: 69.5vh;
  } */
`;

const Wrapit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 10px;
  @media (max-width: 430px) {
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const Grab = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Div = styled.div`
  display: flex;
  /* background-color: red; */
`;
const Error = styled.div`
  font-size: 10px;
  color: red;
  height: 0px;
  margin-top: 3px;
`;
const WrapError = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  align-items: start;
  gap: 30px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 413px;
`;
const Input = styled.div`
  height: 55px;
  background-color: green;
`;

const ChartOfAccountNew = ({
  screen,
  SelectData,
  changeScreenOnDelete,
  changeScreenOnUpdate,
  changeScreenOnPost,
  disableFields,
  disableHeaderButtons,
  AddNewAbleFields,
  AccountCodeData,
  rowData,
  handleAddNew,
  AccountNamesForParentDropdown,
  // AccountCodesForParentDropdown,
  AccountName,
  segment,
}) => {
  console.log(SelectData, "SelectedData");
  const [isChecked, setIsChecked] = useState(false);
  const [isCheck, setIsCheck] = useState(true);
  const [isClick, setIsClick] = useState(false);
  const [accountCode, setAccountCode] = useState("");
  const [parentAcc, setParentAcc] = useState("");
  const [currency, setCurrency] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [accountCategory, setAccountCategory] = useState("");
  const [balance, setBalance] = useState("");
  const [balanceFC, setBalanceFC] = useState("");
  const [status, setStatus] = useState("");
  const [division, setDivision] = useState("");
  const [department, setDepartment] = useState("");
  const [project, setProject] = useState("");
  const [subAccount, setSubAccount] = useState(false);
  const [enableCost, setEnableCost] = useState(false);
  const [customField1, setCustomField1] = useState("");
  const [customField2, setCustomField2] = useState("");
  const [customField3, setCustomField3] = useState("");
  const [customField4, setCustomField4] = useState("");
  const [allowBudget, setAllowBudget] = useState(false);
  const [mainAccount, setMainAccount] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(false);
  const [savedChangesModal, setSavedChangesModal] = useState(false);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [addDataModal, setAddDataModal] = useState(false);
  const [accountAlready, setAccountAlready] = useState(false);
  const [storedAction, setStoredAction] = useState(null);
  const [clickAction, setClickAction] = useState(null);
  const [duplicateClicked, setDuplicateClicked] = useState(false);
  const [duplicateToaster, setDuplicateToaster] = useState(false);
  const [updateToaster, setUpdateToaster] = useState(false);
  const [dropdownDataCurr, setDropdownDataCurr] = useState([]);
  const [currentData, setCurrentData] = useState(SelectData);
  const [costCenterData, setCostCenterData] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  const { maxModal } = useAppContext();
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const keys = useSelector((state) => state.localization.keys);
  const numberSeparator = useSelector((state) => state.number.NumberSeprator);
  const componentPDF = useRef();
  const ref = useRef(null);

  const getSpanBg = () => (isChecked ? themeKeys.c10 : themeKeys.c6);
  const HandleOnCheck = () => {
    setIsChecked(!isChecked);
    setEnableCost(!enableCost);
  };
  const HandleOnClick = () => {
    // setIsClick(!isClick);
    setSubAccount(!subAccount);
  };
  const HandleBudget = () => {
    setAllowBudget(!allowBudget);
  };
  const handleMainAccount = () => {
    // setIsClick(!isClick);
    setMainAccount(!mainAccount);
  };
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Dots = () => {
    return <Dotscell />;
  };

  /*************************************************DROPDoWNS_CHANGE_FUNXTIONS**************** */

  const [exactValue, setExactValue] = useState();

  const handle = (e) => {
    setAccountType(e);
  };
  const handleOnChange = (e) => {
    setAccountCategory(e);
  };
  const HandleAccountType = (e) => {
    setAccountType(e);
    console.log(e, "ACCOUNT TYPE");
  };
  const handleOnChange2 = (e) => {
    setCurrency(e);
    console.log(e, "dropdownselected");
  };
  const handleOnChange3 = (e) => {
    setParentAcc(e);
    // console.log(e.label);
  };
  const handleOnChange4 = (e) => {
    setDivision(e);
  };
  const handleOnChange5 = (e) => {
    setDepartment(e);
  };
  const handleOnChange6 = (e) => {
    setProject(e);
  };

  const DropdownDataDivision = [
    { label: "Assets", value: "Assets" },
    { label: "Liabilities", value: "Liabilities" },
    { label: "Equity", value: "Equity" },
    { label: "Revenue", value: "Revenue" },
    { label: "Expenses", value: "Expenses" },
  ];

  const DropdownDataDep = [
    { label: "Assets", value: "Assets" },
    { label: "Liabilities", value: "Liabilities" },
    { label: "Equity", value: "Equity" },
    { label: "Revenue", value: "Revenue" },
    { label: "Expenses", value: "Expenses" },
  ];
  const DropdownDataPro = [
    { label: "Assets", value: "Assets" },
    { label: "Liabilities", value: "Liabilities" },
    { label: "Equity", value: "Equity" },
    { label: "Revenue", value: "Revenue" },
    { label: "Expenses", value: "Expenses" },
  ];
  const DropdownData7 = [
    { label: "Assets", value: "Assets" },
    { label: "Liabilities", value: "Liabilities" },
    { label: "Equity", value: "Equity" },
    { label: "Revenue", value: "Revenue" },
    { label: "Expenses", value: "Expenses" },
  ];

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
  const openModal = () => {
    setSavedChangesModal(true);
  };
  // const getAll = async () => {
  //   const res = await GetCurrency();
  //   if (res) {
  //     console.log(res.data, "as");
  //     var temp = [];
  //     var tempName = [];
  //     temp = res.data.map((res) => res.currencyCode);
  //     tempName = res.data.map((res) => res.currencyName);
  //     console.log(temp, tempName, "OP");
  //     // setDropdownDataCurr(temp);
  //   }
  // };

  /****************************************GETTING_SEGMENT_COSTCENTER************************************** */
  const [selectedValues, setSelectedValues] = useState({});
  const handleOnChange12 = (value, segment) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [segment]: value, // Update the value for the corresponding segment
    }));
    console.log(value, `Selected Value for ${segment}`);
  };
  const getCostCenter = async () => {
    try {
      const data2 = await getCostCenter(); // Assuming fetchCostCenter fetches the cost center data
      setCostCenterData(data2.data);
      console.log(data2.data, "costCenter");
    } catch (error) {
      console.error("Error fetching cost center data:", error);
    }
  };

  const [showToaster2, setShowToaster2] = useState(false);
  const [showErrorToaster, setShowErrorToaster] = useState(false);

  const HandleToaster = () => {
    setShowErrorToaster(true);
  };
  const RemoveToaster = () => {
    setShowErrorToaster(false);
  };

  const handleClose2 = () => {
    setShowToaster(false);
  };
  const SetShowToaster = () => {
    setShowToaster2(true);
  };

  const renderDropdowns = (data) => {
    console.log(data, "SEGMENTDATA");
    return isChecked || enableCost
      ? data
          .filter((item) => item.status === true) // Only include items with status: true
          .map((item) => (
            <div key={item.id}>
              <DivisionAddNew
                Name={item.segment}
                Padding={true}
                image={isChecked ? Dropdown : BlackDropdown}
                setWidth={false}
                onChange={(value) => handleOnChange12(value, item.segment)}
                value={selectedValues[item.segment] || ""}
                Data={item.costCenter
                  .filter((costCenter) => costCenter.status === true)
                  .map((costCenter) => costCenter.name)}
                OptionId={item.id}
                Toaster={SetShowToaster}
                ShowModal={true}
                Error={HandleToaster}
              />
            </div>
          ))
      : null;
  };
  console.log(selectedValues, "SELECTED VALUES");
  // const handleOnChange4 = (e) => {
  //   setDivision(e);
  // };

  {
    /* <DivisionAddNew
                          Name={keys.KEY100240}
                          Padding={true}
                          image={isChecked ? Dropdown : BlackDropdown}
                          check={isChecked ? true : false}
                          disabled={isChecked ? true : false}
                          setWidth={false}
                          onChange={handleOnChange4}
                          value={division}
                          Data={DropdownDataDivision}
                        /> */
  }

  // Use renderDropdowns in your component

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [
    accountCode,
    accountName,
    balance,
    balanceFC,
    currency,
    accountType,
    parentAcc,
    division,
    department,
    project,
    subAccount,
    enableCost,
    allowBudget,
  ]);

  useEffect(() => {
    console.log(SelectData);
    const getAll = async () => {
      const res = await GetDefineCurrency();
      if (res) {
        console.log(res.data, "as");
        const FilteredData = res.data.filter((x) => x.status);
        // var temp = [];
        // var tempName = [];
        // temp = FilteredData.map((res) => res.code);
        // tempName = FilteredData.map((res) => res.currencyName);
        const dropdownDataCurr2 = FilteredData.map((x) => ({
          code: x.code,
          name: x.currencyName,
        }));
        console.log(dropdownDataCurr2, "dropdownDataCurr2");
        setDropdownDataCurr(dropdownDataCurr2);

        const Response = await GetAccountType();
        if (Response) {
          console.log(Response.data, "CATERGORY OPTIONS");

          const FormattedData = Response.data.map(
            (x) =>
              // label: x.category,
              // value: x.category,
              x.category
          );

          if (currentData) {
            const category = FormattedData.find(
              (option) => option === currentData?.category
            );
            setAccountCategory(category);
          }
          setCategoryOptions(FormattedData);
          console.log(FormattedData, "FORMATTED");
        } else {
          alert("Something went wrong!");
        }

        if (currentData) {
          // const parent = DropdownDataParent.find(
          //   (option) => option.value === SelectData.parentAccount
          // );
          const division = DropdownDataDivision.find(
            (option) => option.value === currentData.division
          );

          const department = DropdownDataDep.find(
            (option) => option.value === currentData.department
          );
          const Accounttype = accountTypeOptions.find(
            (option) => option.value === currentData.accountType
          );
          console.log(Accounttype, "ACCOUNT TYPE");
          const project = DropdownDataPro.find(
            (option) => option.value === currentData.project
          );
          // const currency = currencies2.find(
          //   (option) => option === selectedCurrencies
          // );
          // setCurrency(currency);
          // console.log(currency, "lllll");
          // console.log(SelectData.currencies, "ASSAD");
          const convertedCurrencies = currentData.currencies?.map(
            (currency) => ({
              label: currency, // This will be "USD", "PKR", etc.
              value: currency,
            })
          );

          // const selectedCurrencies=
          const currency = convertedCurrencies
            .map((selected) =>
              dropdownDataCurr2?.find(
                (option) => option.code === selected.label
              )
            )
            .filter(Boolean); // This filters out any undefined values

          const transformedArray = currency?.map((item) => ({
            label: item.name,
            value: item.code,
            code: item.code,
            name: item.name,
          }));

          console.log(transformedArray, "SelectedCurrencoes");
          setCurrency(transformedArray);
          setAccountCode(currentData.accountCode);
          setParentAcc(currentData.parentAccount);
          setAccountName(currentData.accountName);
          setAccountType(Accounttype);
          setAllowBudget(currentData.allowBudget);
          setMainAccount(currentData.isMainAccount);
          setSubAccount(currentData.subAccount);

          // setCurrency(currency);
          setDepartment(department);
          setDivision(division);
          setEnableCost(currentData.enableCostCenter);
          setSubAccount(currentData.isSubAccount);
          // setParentAcc(parent);
          setProject(project);
          // setIsClick(SelectData.isSubAccount);
          setIsChecked(currentData.enableCostCenter);
        }
      }
    };
    getAll();
  }, [currentData]);
  const AccountCodeValue = (e) => {
    setAccountCode(e);

    // console.log("yikes", e.value, "DARA", rowData);

    // Find the object with the matching accountCode
    if (e) {
      const matchedData = rowData.find((item) => item.accountCode === e.value);
      if (matchedData) {
        setCurrentData(matchedData);
      }
      // if (matchedData) {
      //   console.log("Matched Data:", matchedData);
      //   const parent = DropdownDataParent.find(
      //     (option) => option.value === matchedData.parentAccount
      //   );
      //   const division = DropdownDataDivision.find(
      //     (option) => option.value === matchedData.division
      //   );
      //   const category = DropdownDataCat.find(
      //     (option) => option.value === matchedData.category
      //   );
      //   const department = DropdownDataDep.find(
      //     (option) => option.value === matchedData.department
      //   );
      //   const type = accountTypeOptions.find(
      //     (option) => option.value === matchedData.accountType
      //   );
      //   const project = DropdownDataPro.find(
      //     (option) => option.value === matchedData.project
      //   );
      //   const currency = dropdownDataCurr.find(
      //     (option) => option === matchedData.currencies.split(",")
      //   );
      //   const convertedCurrencies = matchedData.currencies
      //     ?.split(",")
      //     .map((currency) => ({
      //       label: currency, // This will be "USD", "PKR", etc.
      //       value: currency,
      //     }));

      //   // const selectedCurrencies=
      //   const currency2 = convertedCurrencies
      //     .map((selected) =>
      //       dropdownDataCurr?.find((option) => option.code === selected.label)
      //     )
      //     .filter(Boolean); // This filters out any undefined values

      //   const transformedArray = currency2?.map((item) => ({
      //     label: item.name,
      //     value: item.code,
      //     code: item.code,
      //     name: item.name,
      //   }));
      //   console.log(currency, "lllll");
      //   setAccountCode(matchedData.accountCode);
      //   setAccountName(matchedData.accountName);
      //   setParentAcc(matchedData.parentAccount);
      //   setAccountType(type);
      //   setAllowBudget(matchedData.allowBudget);
      //   setBalance(matchedData.balance);
      //   setBalanceFC(matchedData.balanceFC);
      //   setAccountCategory(category);
      //   setCurrency(transformedArray);
      //   setDepartment(department);
      //   setDivision(division);
      //   setEnableCost(matchedData.enableCostCenter);
      //   setSubAccount(matchedData.isSubAccount);
      //   // setParentAcc(parent);
      //   setProject(project);
      //   // setIsClick(SelectData.isSubAccount);
      //   setIsChecked(matchedData.enableCostCenter);
      //   // Use the matched data as needed
      // }
      else {
        console.log("No matching data found for accountCode:", e.value);
      }

      handleGetDataFromCode(e.value);
    }
  };
  const handleCurrentDataUpdate = (x) => {
    setCurrentData(x);
  };
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      const hasUnsavedChanges =
        accountCode !== "" ||
        accountName !== "" ||
        balance !== "" ||
        balanceFC !== "" ||
        currency !== "" ||
        accountType !== "" ||
        parentAcc !== "" ||
        division !== "" ||
        department !== "" ||
        project !== "" ||
        subAccount ||
        enableCost ||
        allowBudget;

      if (event.target.innerText === keys.KEY10010) {
      }

      if (hasUnsavedChanges && !saved && disableFields === false) {
        setClickAction(event);

        if (
          event.target.innerText === "Finance" ||
          event.target.innerText === "Order to Cash" ||
          event.target.innerText === "Procure to Pay" ||
          event.target.innerText === "Products & Services" ||
          event.target.innerText === "Banking" ||
          event.target.innerText === "Projects" ||
          event.target.innerText === "Reports" ||
          event.target.innerText === "Transactions" ||
          event.target.innerText === "" ||
          event.target.nodeName === "path" ||
          event.target.nodeName === "Transactions" ||
          event.target.nodeName.toLowerCase() === "path" ||
          event.target.nodeName.toLowerCase() === "svg"
        ) {
          console.log("Finance button clicked:", event);
        } else {
          console.log(
            "Modal will be opened due to unsaved changes:",
            event.target.innerText
          );
          openModal();
        }
      }
    }
  };

  const CloseModal = () => {
    setSavedChangesModal(false);
    setConfirmDeleteModal(false);
  };
  console.log(accountCategory.value, "CATEGORY VALUE");
  const handleSubmit = async () => {
    if (currentData && !duplicateClicked) {
      console.log("UPDATE");
      const accountType2 = accountType?.value || null;
      const accountCategory2 = accountCategory?.value || null;
      const currency2 = currency?.map((res) => res.code) || null;
      const parentAcc2 = parentAcc?.value || null;
      const division2 = division?.value || null;
      const department2 = department?.value || null;
      const project2 = project?.value || null;
      const Data = {
        accountCode: accountCode.value,
        accountName: accountName,
        category: accountCategory2,
        accountType: accountType2,
        currencies: currency2,
        isMainAccount: mainAccount,
        isSubAccount: subAccount,
        parentAccount: parentAcc2,
        allowBudget: allowBudget,
        enableCostCenter: enableCost,
        division: division2,
        department: department2,
        project: project2,
      };
      console.log(Data, "UpdateData");
      const response = await ChartofAccountUpdate(SelectData.id, Data);
      if (response) {
        changeScreenOnUpdate();
        console.log(response);
        setSaved(true);
      } else {
        alert("Failed to update information");
      }
    } else {
      if (
        accountCode.length === 0 ||
        accountName.length === 0 ||
        accountCategory.length === 0 ||
        currency.length === 0
        // accountType.length === 0
      ) {
        setError(true);
      } else {
        console.log("DONE");
        const Data = {
          accountCode: accountCode.value,
          accountName: accountName,
          category: accountCategory?.value,
          accountType: accountType?.value,
          currencies: currency ? currency.map((res) => res.value) : null,
          isMainAccount: mainAccount,
          isSubAccount: subAccount,
          parentAccount: parentAcc.value,
          allowBudget: allowBudget,
          enableCostCenter: enableCost,
          division: division.value,
          department: department.value,
          project: project.value,
          status: "ACTIVE",
        };
        console.log(Data);
        const response = await InputPost({ Data });
        if (response.status) {
          console.log(response.data);
          setAddDataModal(true);
        } else if (response.data.data) {
          setAccountAlready(true);
        } else {
          alert("Failed to store data");
          console.log(response, "error");
        }
      }
    }
  };
  const handleContinue = () => {
    if (
      clickAction &&
      clickAction.target &&
      typeof clickAction.target.click === "function"
    ) {
      clickAction.target.click();
    }

    setAccountCode("");
    setAccountName("");
    setAccountType("");
    setBalance("");
    setAccountCategory("");
    setCurrency("");
    setParentAcc("");
    setBalanceFC("");
    setDivision("");
    setDepartment("");
    setProject("");
    setSubAccount("");
    setEnableCost("");
    setAllowBudget("");

    CloseModal();
  };
  const HandleNewButton = () => {
    console.log("lklk");
    setDuplicateClicked(true);
    AddNewAbleFields();
    setAccountCode("");
    setAccountName("");
    setAccountType("");
    setAccountCategory("");
    setCurrency("");
    setParentAcc(null);
    setMainAccount(false);
    setDivision(null);
    setDepartment(null);
    setProject(null);
    setSubAccount(false);
    setEnableCost(false);
    setAllowBudget(false);
    setIsChecked(false);

    CloseModal();
  };
  const addNew = () => {
    setDuplicateClicked(true);
    AddNewAbleFields();
    setAccountCode("");
    setAccountName("");
    setAccountType(null);
    setAccountCategory(null);
    setCurrency(null);
    setParentAcc(null);
    setMainAccount(false);
    setDivision(null);
    setDepartment(null);
    setProject(null);
    setSubAccount(false);
    setEnableCost(false);
    setAllowBudget(false);
    setIsChecked(true);
  };
  const handleDuplicate = () => {
    if (!disableHeaderButtons) {
      AddNewAbleFields();
      setAccountCode("");
      setAccountName("");
      setDuplicateClicked(true);
      setDuplicateToaster(true);
    }
  };
  const handleEditButton = () => {
    AddNewAbleFields();
  };
  const confirmDelete = async () => {
    if (SelectData) {
      const DeleteResponse = await ChartofAccountDelete(SelectData.id);
      if (DeleteResponse && DeleteResponse.status) {
        console.log("Deletion Successfull :", DeleteResponse);
        changeScreenOnDelete();
      } else if (DeleteResponse) {
        alert("Row ID is not defined");
      }
    } else {
      alert("No data selected");
    }
  };

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Row Data",
  });

  const HandleSendButton = async () => {
    const ResData = await ChartofAccountSend(
      SelectData.id,
      accountCode,
      accountName,
      accountType,
      balance,
      accountCategory,
      currency,
      parentAcc,
      balanceFC,
      division,
      department,
      project,
      subAccount,
      enableCost,
      allowBudget
    );
    if (ResData) {
      alert("Data is Sending");
      generatePDF();
      // setAccountCode("");
      // setAccountName("");
      // setAccountType("");
      // setBalance("");
      // setAccountCategory("");
      // setCurrency("");
      // setParentAcc("");
      // setBalanceFC("");
      // setDivision("");
      // setDepartment("");
      // setProject("");
      // setSubAccount("");
      // setEnableCost("");
      // setAllowBudget("");
      // setIsChecked(true);
    } else {
      alert("Data is not sended");
    }
  };

  const review = () => {
    setAddDataModal(false);
  };
  const seeList = () => {
    changeScreenOnPost();
  };
  const HandleDeleteButton = () => {
    if (SelectData) {
      setConfirmDeleteModal(true);
    }
  };

  const [isModal, setIsModal] = useState(false);
  const [showAttachToaster, setShowAttachToaster] = useState(false);
  const clickToggle = () => {
    if (!SelectData) {
      setIsModal(!isModal);
    } else {
      setIsModal(false);
      setShowAttachToaster(true);
    }
  };
  const ToasterAttachClick = () => {
    setShowAttachToaster(false);
  };
  const ToggleCancel = () => {
    setIsModal(false);
  };

  const handleClose = () => {
    setDuplicateToaster(false);
    setAccountAlready(false);
  };
  const handleGetDataFromCode = (x) => {};
  const AccountCodeFormat = (e) => {
    const inputValue = e.target.value;

    if (!isNaN(inputValue) && inputValue.trim() !== "") {
      let formattedNumber;

      if (numberSeparator === ",") {
        // Format the number using toLocaleString() for "en-US" locale
        formattedNumber = Number(inputValue).toLocaleString("en-US");
      } else if (numberSeparator === ".") {
        // Format the number using toLocaleString() for "de-DE" locale
        formattedNumber = Number(inputValue).toLocaleString("de-DE");
      }

      setAccountCode(formattedNumber);
    } else {
      // Set the input value normally if it's not a number
      setAccountCode(inputValue);
    }
  };

  // const newFunction = () => {
  //   console.log("asddddd");
  // };
  const handleAddNewBtn = () => {
    console.log("ASSAD");
    handleAddNew("KEY10050");
  };
  // *********************************************************ATTACHMENT FUNCTIONS*******************************************************

  const [loading, setLoading] = useState(false);
  const [changeState, setChangeState] = useState(false);
  const [showToaster, setShowToaster] = useState(false);

  const HandleStateChange = () => {
    console.log("HandleState function called");
    setChangeState(true);
    setIsModal(false);
    setShowToaster(true);
  };
  const closeToaster = () => {
    setShowToaster(false);
  };

  const [rowData2, setRowData2] = useState([]);
  const columns2 = useMemo(
    () => [
      { accessorKey: "documentNo", header: "Document No" },
      { accessorKey: "documentName", header: "Document Name" },
      {
        accessorKey: "issueDate",
        header: "Upload Date",
        Cell: ({ cell }) => {
          const date = new Date(cell.getValue());
          // Format the date as needed, e.g., 'MM/DD/YYYY'
          const formattedDate = date.toLocaleDateString();
          return <span>{formattedDate}</span>;
        },
      },
      {
        accessorKey: "expiryDate",
        header: "Expiry Date",
        Cell: ({ cell }) => {
          const date = new Date(cell.getValue());
          // Format the date as needed, e.g., 'MM/DD/YYYY'
          const formattedDate = date.toLocaleDateString();
          return <span>{formattedDate}</span>;
        },
      },
      {
        accessorKey: "notes",
        header: "Notes",
        enableSorting: false,
        size: 350,
      },
      {
        accessorKey: "attachedBy",
        header: "Attached by",
        enableSorting: false,
      },
      {
        accessorKey: "status",
        header: "Status",
        enableSorting: false,
        Cell: ({ cell }) => {
          return (
            <StatusButton value={cell.getValue() ? "Active" : "Inactive"} />
          );
        },
      },
    ],
    []
  );

  const GetAttachmentData = async () => {
    setLoading(true); // Start loading
    try {
      const response = await AttachmentGet(); // Make the API call

      if (response.status) {
        const dataArray = Array.isArray(response.data)
          ? response.data
          : [response.data];

        setRowData2(dataArray); // Update the state with the transformed data
      } else {
        console.log("Failed to fetch data: status is false");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data.");
    } finally {
      setLoading(false); // Always stop loading
    }
  };
  useEffect(() => {
    // getCostCenter();
    GetAttachmentData();
  }, [changeState, isModal]);

  // ///////////////////////////////////Getting dropdown options for ACCOUNT CATEGORY//////////////////////////////////////////

  const getCategoryData = async () => {
    const Response = await GetAccountType();
    if (Response) {
      console.log(Response.data, "CATERGORY OPTIONS");

      const FormattedData = Response.data.map((x) => ({
        label: x.category,
        value: x.category,
      }));
      setCategoryOptions(FormattedData);
      console.log(FormattedData, "FORMATTED");
    } else {
      alert("Something went wrong!");
    }
  };

  const [accountTypeOptions, setAccountTypeOptions] = useState([]);

  const AccountType = async () => {
    const Data = await AccountTypeTableData();
    if (Data) {
      // console.log(Data.data);

      const Temp = Data.data;
      const FilteredData = Temp.filter(
        (x) => x.accountCategory === accountCategory.value
      );

      const FormattedData = FilteredData.map((x) => ({
        label: x.accountType,
        value: x.accountType,
      }));
      console.log(FormattedData, "Accountoptions");
      setAccountTypeOptions(FormattedData);
      if (currentData) {
        const type = FormattedData.find(
          (option) => option.value === currentData.accountType
        );
        setAccountType(type);
        console.log(type, "ewcwecew");
      }
    } else {
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    AccountType();
  }, [accountCategory.value, currentData]);

  return (
    <Grab ref={ref}>
      {duplicateToaster ? (
        <Toaster
          icon={"info"}
          text={"Info"}
          text2={"A duplicate record has been created"}
          handleClose={handleClose}
          duration={4000}
        />
      ) : null}
      {updateToaster ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"Account updated successfully."}
          handleClose={handleClose}
          duration={4000}
        />
      ) : null}
      {showToaster2 ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"Cost Center Created successfully."}
          handleClose={handleClose2}
          duration={4000}
        />
      ) : null}
      {accountAlready ? (
        <Toaster
          icon={"cross"}
          text={"Error"}
          text2={"The account you are trying to create already exists."}
          handleClose={handleClose}
          duration={4000}
        />
      ) : null}
      {showErrorToaster ? (
        <Toaster
          icon={"cross"}
          text={"Error"}
          text2={"An error occurred while creating the cost center."}
          handleClose={RemoveToaster}
          duration={4000}
        />
      ) : null}
      {duplicateToaster ? (
        <Toaster
          icon={"info"}
          text={"Info"}
          text2={"A duplicate record has been created"}
          handleClose={handleClose}
          duration={4000}
        />
      ) : null}
      {accountAlready ? (
        <Toaster
          icon={"cross"}
          text={"Error"}
          text2={"The account you are trying to create already exists."}
          handleClose={handleClose}
          duration={4000}
        />
      ) : null}
      {savedChangesModal ? (
        <MyModal
          main={handleContinue}
          cancel={CloseModal}
          text={"Changes you made on this screen may not be saved ?"}
          heading={"Leaving?"}
          mainText={"Continue"}
          cancelText={"Cancel"}
        />
      ) : null}
      {confirmDeleteModal ? (
        <MyModal
          main={confirmDelete}
          cancel={CloseModal}
          heading={"Delete Confirmation"}
          text={
            "Are you sure you want to delete this record? This action cannot be undone."
          }
          mainText={"Delete"}
          cancelText={"Cancel"}
        />
      ) : null}
      {addDataModal ? (
        <MyModal
          main={addNew}
          cancel={seeList}
          thirdButton={seeList}
          heading={"Success"}
          text={
            "Account has been created successfully. Do you want to create another account?"
          }
          mainText={"Add new"}
          cancelText={"View Record"}
          thirdText={"View list"}
        />
      ) : null}
      {showToaster ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"Attachment Uploaded successfully."}
          handleClose={closeToaster}
          duration={4000}
        />
      ) : null}

      {showAttachToaster ? (
        <Toaster
          icon={"cross"}
          text={"Error"}
          text2={"Could not Attach Document on View Mode."}
          handleClose={ToasterAttachClick}
          duration={4000}
        />
      ) : null}
      {isModal ? (
        <AttachmentUpload
          CancelAction={ToggleCancel}
          stateChange={HandleStateChange}
        />
      ) : null}

      <div ref={componentPDF} style={{ width: "98.3%" }}>
        <NewScreensNav
          height={"33%"}
          // OPTIONS
          first={"Account Details"}
          second={"Custom Fields"}
          third={"Attachments"}
          fourth={"Transactions"}
          fifth={"Activity"}
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
        <Wrapit>
          <Header
            title={keys.KEY100151}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1001}
            thirdNav={keys.KEY10010}
            navActive={keys.KEY100262}
          />
          <HeaderNewButtons
            State={true}
            disableHeaderButtons={disableHeaderButtons}
            clickScreenChange={disableFields ? null : handleSubmit}
            AddNewClick={HandleNewButton}
            deleteClick={HandleDeleteButton}
            duplicateClick={handleDuplicate}
            editButton={handleEditButton}
            disableButton={true}
            disable={true}
            // sendClick={HandleSendButton}
          />
          <Div>
            {/* <AccountsSideNav
            // Side Nav Menu
            title={keys.KEY100258}
            first={keys.KEY100259}
            second={keys.KEY10090}
            third={keys.KEY100260}
            fourth={keys.KEY10011}
            fifth={keys.KEY100261}
            // Classes
            section1={"content"}
            section2={"customField"}
            section3={"attachment"}
            section4={"transaction"}
            section5={"accountDetails"}
          /> */}

            <Grab2>
              <TitleOfSection title={"CHART OF ACCOUNT DETAILS"} />
              <Line />
              {!disableFields ? (
                <div id="accountDetails" style={{ transition: "all 2s ease" }}>
                  <Wrapit2>
                    <Wrapper2>
                      <Column>
                        {" "}
                        <Wrap>
                          <FirstColumn2>
                            <WrapError>
                              <DropdownInputAccountCode
                                Name={"Account Code"}
                                Padding={false}
                                setWidth={false}
                                onChange={AccountCodeValue}
                                value={accountCode}
                                Data={AccountCodeData}
                                Data2={AccountName}
                                rowData={rowData}
                              />
                              {error ? (
                                <Error>This Field is Required</Error>
                              ) : (
                                ""
                              )}
                            </WrapError>
                            <WrapError>
                              <ChartAccountInput
                                Name={keys.KEY100238}
                                Hash="*"
                                Padding={true}
                                setWidth={"true"}
                                onChange={(e) => setAccountName(e.target.value)}
                                value={accountName}
                                // disable={disableFields}
                              />
                              {error ? (
                                <Error>This Field is Required</Error>
                              ) : (
                                ""
                              )}
                            </WrapError>{" "}
                            <WrapError>
                              <DropdownInput
                                Name={keys.KEY100241}
                                Padding={false}
                                image={BlackDropdown}
                                setWidth={false}
                                onChange={handleOnChange}
                                value={accountCategory}
                                Data={categoryOptions}
                              />
                              {error ? (
                                <Error>This Field is Required</Error>
                              ) : (
                                ""
                              )}
                            </WrapError>
                            <WrapError>
                              <DivisionAddNew
                                Name={"Account Type"}
                                Padding={true}
                                setWidth={false}
                                onChange={HandleAccountType}
                                value={accountType || null}
                                Data={accountTypeOptions}
                                ShowModal={false}
                                AddNew={exactValue}
                                AccountType={true}
                              />

                              {error ? (
                                <Error>This Field is Required</Error>
                              ) : (
                                ""
                              )}
                            </WrapError>
                          </FirstColumn2>
                          <SecondColumn2>
                            <Main2>
                              <Text12 txtColor={themeKeys.primary}>
                                Is Title Account?
                              </Text12>
                              <InputCheckOne2
                                type="checkbox"
                                style={{ cursor: "pointer" }}
                                onClick={handleMainAccount}
                                onChange={(e) =>
                                  setMainAccount(e.target.checked)
                                }
                                checked={mainAccount}
                              />
                            </Main2>
                            <Main2>
                              <Text12 txtColor={themeKeys.primary}>
                                {keys.KEY100236}
                              </Text12>
                              <InputCheckOne2
                                type="checkbox"
                                style={{ cursor: "pointer" }}
                                onClick={HandleOnClick}
                                onChange={(e) =>
                                  setSubAccount(e.target.checked)
                                }
                                checked={subAccount}
                              />
                            </Main2>

                            {subAccount ? (
                              <DropdownInput
                                Name={keys.KEY100239}
                                Padding={false}
                                image={subAccount ? Dropdown : BlackDropdown}
                                check={subAccount ? false : true}
                                // disabled={isClick ? false : true}
                                setWidth={false}
                                onChange={handleOnChange3}
                                value={parentAcc}
                                Data={AccountNamesForParentDropdown}
                              />
                            ) : null}
                            <MainThird2>
                              <Text32 txtColor={themeKeys.primary}>
                                Allow Budget
                              </Text32>
                              <InputCheckOne2
                                style={{ cursor: "pointer" }}
                                type="checkbox"
                                onClick={HandleBudget}
                                onChange={(e) =>
                                  setAllowBudget(e.target.checked)
                                }
                                checked={allowBudget}
                              />
                            </MainThird2>
                          </SecondColumn2>
                        </Wrap>
                        {!disableFields ? (
                          <>
                            <AddCurrencyDropdown
                              Name={keys.KEY100247}
                              Padding={true}
                              image={BlackDropdown}
                              check={disableFields}
                              setWidth={false}
                              onChange={handleOnChange2}
                              value={currency}
                              Data={dropdownDataCurr}
                              handleAddNewBtn={handleAddNewBtn}
                            />
                            {/* 
                            {error ? (
                              <Error>This Field is Required</Error>
                            ) : null} */}
                          </>
                        ) : null}
                      </Column>

                      <SecondColumn2>
                        {/* <ChartAccountInput
                          Name={keys.KEY100242}
                          Padding={true}
                          setWidth={"true"}
                          value={balance}
                          onChange={(e) => setBalance(e.target.value)}
                          insertFromRight={true}
                          // disable={disableFields}
                        /> */}
                        <Main22>
                          <Text22 txtColor={themeKeys.primary}>
                            {keys.KEY100237}
                          </Text22>
                          <Wrap2>
                            <InputCheck2
                              style={{ cursor: "pointer" }}
                              type="checkbox"
                            />
                            <Span2
                              bgColor={getSpanBg()}
                              clicked={isChecked}
                              onClick={HandleOnCheck}
                            ></Span2>
                          </Wrap2>
                        </Main22>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 20,
                          }}
                        >
                          {true ? renderDropdowns(segment) : null}
                        </div>
                        {/* <DivisionAddNew
                          Name={keys.KEY100240}
                          Padding={true}
                          image={isChecked ? Dropdown : BlackDropdown}
                          check={isChecked ? true : false}
                          disabled={isChecked ? true : false}
                          setWidth={false}
                          onChange={handleOnChange4}
                          value={division}
                          Data={DropdownDataDivision}
                        />
                        <DropdownInput
                          Name={keys.KEY100243}
                          Padding={true}
                          image={isChecked ? Dropdown : BlackDropdown}
                          check={isChecked ? true : false}
                          disabled={isChecked ? true : false}
                          setWidth={false}
                          onChange={handleOnChange5}
                          value={department}
                          Data={DropdownDataDep}
                        />
                        <DropdownInput
                          Name={keys.KEY100246}
                          Padding={true}
                          image={isChecked ? Dropdown : BlackDropdown}
                          check={isChecked ? true : false}
                          disabled={isChecked ? true : false}
                          setWidth={false}
                          onChange={handleOnChange6}
                          value={project}
                          Data={DropdownDataPro}
                        /> */}
                      </SecondColumn2>
                      {/* <SecondColumn2>
                        <ChartAccountInput
                          Name={keys.KEY100245}
                          Padding={true}
                          setWidth={"true"}
                          onChange={(e) => setBalanceFC(e.target.value)}
                          value={balanceFC}
                          insertFromRight={true}
                          // disable={disableFields}
                        />
                      </SecondColumn2> */}
                      {/* <ThirdColumn2></ThirdColumn2> */}
                    </Wrapper2>
                    <div style={{ width: "30rem" }}>
                      <LargeButton name={"Active"} />
                    </div>

                    {/* <TopRightSection /> */}
                  </Wrapit2>
                </div>
              ) : null}

              {!disableFields ? (
                <div id="customField">
                  <CustomFields
                    Line1={"dwc"}
                    value1={customField1}
                    onChange1={(e) => setCustomField1(e.target.value)}
                    value2={customField2}
                    onChange2={(e) => setCustomField2(e)}
                    value3={customField3}
                    onChange3={(e) => setCustomField3(e)}
                    value4={customField4}
                    onChange4={(e) => setCustomField4(e)}
                  />
                </div>
              ) : null}
              {disableFields ? (
                <ChartofAccountViewMode
                  selectedData={SelectData}
                  Data={rowData}
                  dropdownData={AccountCodeData}
                  Data2={AccountName}
                  costCenterData={segment}
                  handleCurrentDataUpdate={handleCurrentDataUpdate}
                />
              ) : null}
              <MRTSmallTables
                // Icon={"AttachIcon"}
                // Title={"Attach"}
                // Name={"ATTACHMENTS"}
                // ColData={colDefs3}
                // RowData={rowData3}
                // button={"true"}
                // ShowButton={true}
                // clickScreenChange={clickToggle}

                columns={columns2}
                data={rowData2}
                ToggleBtnTitle={"ATTACHMENTS"}
                showAttachButton={true}
                initialState={ISattachments}
                onAttachClick={clickToggle}
                // onAttachClick={openModalAttach}
              />
              <MRTLinkedTransaction
                // Icon={"Export"}
                // Title={"Export"}
                // Name={"TRANSACTIONS"}
                // ColData={colDefs3}
                // RowData={rowData3}
                // button={"true"}
                // ShowButton={true}
                columns={linkedTransactionColumns}
                data={linkedTransactionData}
                ToggleBtnTitle={"TRANSACTIONS"}
                // mantineTableBodyRowProps={mantineTableBodyRowProps}
                // onExportClick={onExportClick}
                // state={{ rowSelectionLT }}
              />

              <ActivityPart
                ShowButton={true}
                filterName="chartofaccount"
                selectedCode={accountCode}
              />
            </Grab2>
          </Div>
        </Wrapit>
      </div>
    </Grab>
  );
};

export default ChartOfAccountNew;
