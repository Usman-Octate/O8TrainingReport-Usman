import React, { useState,useMemo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import Auto from "../assets2/ChartOfAccountNew/InputAuto.svg";
import DropdownInput from "../components/Inputs/DropdownInput";
import BlackDropdown from "../assets2/ChartOfAccountNew/DarkDropDown.svg";
import TopRightSection from "./Components/TopRightSection";
import StatusButton from "../components/buttons/StatusButton";
import Dotscell from "../components/Table/CustomCells/Dots";
// import PhoneInput from "react-phone-input-2";
import JornalTables from "./Sections/JornalTables";
import CustomFields from "./Sections/CustomFields";
// import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { border } from "@mui/system";
import ContactPersonDropDown from "../components/Inputs/ContactPersonDropDown";
import LargeButton from "../components/buttons/ActiveButton";
import CalanderInput from "../../src/components/Inputs/CalenderInput";
import CustomerSupplierCell from "../components/Table/CustomCells/CustomerSupplierCell";
import TagIcon from "../components/SVGicons/TagIcon";
// import TagsInput from "react-tagsinput";
import ContactDropdown from "../components/Inputs/ContactNewInput";
import DetailDropDown from "../components/Inputs/DetailDropDown";
import ActivityPart from "./Sections/ActivityPart";
import TableDetails from "./Sections/TableDetails";
import TotalAmount2 from "./Components/TotalAmount2";
import TagsInput from "./Sections/TagsInput";
import TitleOfSection from "./Components/TitleOfSection";
import AddRowButton from "./AddRowButton";
import CurrencyInput2 from "../components/Inputs/CurrencyInput2";

import MRTTableDetails from "./Components/MantineTable/MRTTableDetails";
import MRTSmallTables from "./Components/MantineTable/MRTSmallTables";
import {
  Wrap5,
  Title5,
  // Line,
  Wrapper5,
  FirstRow,
  Check1,
  Check2,
  // Text,
  Wrap,
  // Wrapper,
  Head,
  // Title,
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
  // Div,
} from "./Components/HeroSections/Style";
import NewScreensNav from "./Components/NewScreensNav";

const contacts = [
  {
    name: "John Doe",
    role: "CEO",
    email: "john.doe@example.com",
    contact: "123-456-7890",
  },
  {
    name: "Jane Smith",
    role: "Finance Officer",
    email: "jane.smith@example.com",
    contact: "987-654-3210",
  },
  {
    name: "Robert Johnson",
    role: "CTO",
    email: "robert.johnson@example.com",
    contact: "555-666-7777",
  },
  {
    name: "Emily Davis",
    role: "HR Manager",
    email: "emily.davis@example.com",
    contact: "444-555-6666",
  },
  {
    name: "Michael Brown",
    role: "Marketing Director",
    email: "michael.brown@example.com",
    contact: "333-444-5555",
  },
  {
    name: "Sarah Wilson",
    role: "Sales Manager",
    email: "sarah.wilson@example.com",
    contact: "222-333-4444",
  },
];

const Main = styled.div`
  display: flex;
  width: 100%;
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
const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin: 5px 10px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
  padding-bottom: 10px;
`;
const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;

const Hero = styled.div`
  height: 78vh;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 10px;
`;
const Col1 = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;
const MiddleCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 110px;

  gap: 15px;
`;
const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const Label = styled.div`
  width: 90px;
  text-align: center;
  color: #58606f;
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  bottom: 32px;
  left: 10px;
  z-index: 10;
  background-color: white;
`;
const Disp = styled.div`
  position: relative;
`;

const FirstWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: red;
  gap: 30px;
  margin: 0px 0px;
  flex-direction: row;
  margin-top: 20px;
`;
const SecondWrap = styled.div`
  margin-top: 1.2rem;
`;
const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: red;
  justify-content: space-between;
  /* justify-content: center; */
`;
const Wrap2 = styled.div`
  display: flex;
  justify-content: space-between;
  // background-color: red;
  gap: 10px;
  margin-top: 10px;
`;
const WrapCompany = styled.div`
  display: flex;
  justify-content: left;
  gap: 20px;
  margin-top: 10px;
  width: 380px;
  // background-color: red;
`;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  // background-color: red;
`;
const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
const Text = styled.div`
  font-size: 12px;
  color: #58606f;
  font-weight: 700;
`;
const CheckBox = styled.input`
  width: 15px;
  height: 15px;
`;
const Phone = styled.div`
  border: 1px solid #464f604d;
  border-radius: 4px;
  width: 142px;
  padding: 0 10px;
`;
const TopWrapper = styled.div`
  // background-color: red;
`;
const Div = styled.div`
  display: flex;
`;

const BottomRowInputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  gap: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  // align-items: center;
  // background-color: blue;
  width: 100%;
  justify-content: space-between;
  gap: 5px;
  margin-top: 20px;
  /* background-color: red; */

  @media (max-width: 1166px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const FieldsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  width: 100%;
  height: 390px;
  border-radius: 8px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  padding-bottom: 20px;
  margin-top: 10px;
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
const InputField = styled.textarea`
  border: 1px solid #dadbdf;
  resize: none;
  border-radius: 8px;
  padding-top: 10px;
  width: 98%;
  height: 193px;
  padding-left: 10px;
  outline: none;
  /* background-color: green; */
  /* padding-top: 10px; */
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px; /* Adjust gap as needed */
  margin-top: 30px;
  /* background-color: green; */
  width: 11rem;
`;
const Text3 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
`;
const InputCheckOne = styled.input`
  height: 18px;
  width: 18px;
`;

const CustomerReturnNew = (props) => {
  const keys = useSelector((state) => state.localization.keys);
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const [tags, setTags] = useState([]);

  const handleChange = (newTags) => {
    setTags(newTags);
  };

  const warehouseaddress = [
    {
      name: "Warehouse Address 1",
      area: "101 Building 11",
      street: "Al Falak Street ",
      city: "Dubai Internet City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 2",
      area: "103 Building 11",
      street: "Main Street ",
      city: "Sharjah City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 3",
      area: "104 Building 11",
      street: "Sea View Street ",
      city: "Dubai Internet City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 4",
      area: "105 Building 11",
      street: "Beach Star Hotal Street",
      city: "Abu Dhabi City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 5",
      area: "106 Building 11",
      street: "Dubai Stadium Street",
      city: "Dubai City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 6",
      area: "107 Building 11",
      street: "Al Falak Street ",
      city: "Dubai Internet City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 7",
      area: "1018 Building 11",
      street: "Expo Center Mall",
      city: "Dubai Internet City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "",
      area: "",
      street: "",
      city: "",
      country: "",
    },
  ];
  const billingaddress = [
    {
      name: "Address Lane 1",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 2",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 3",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 7",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 4",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 5",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 6",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
  ];
  const peopleData = [
    {
      label: "Amir",
      value: "Amir",
      area: "Area 1",
      street: "Street 1",
      city: "City 1",
      country: "Country 1",
    },
    {
      label: "Ahmad",
      value: "Ahmad",
      area: "Area 2",
      street: "Street 2",
      city: "City 2",
      country: "Country 2",
    },
    {
      label: "Sara",
      value: "Sara",
      area: "Area 3",
      street: "Street 3",
      city: "City 3",
      country: "Country 3",
    },
    {
      label: "Zara",
      value: "Zara",
      area: "Area 4",
      street: "Street 4",
      city: "City 4",
      country: "Country 4",
    },
    {
      label: "John",
      value: "John",
      area: "Area 5",
      street: "Street 5",
      city: "City 5",
      country: "Country 5",
    },
    {
      label: "Jane",
      value: "Jane",
      area: "Area 6",
      street: "Street 6",
      city: "City 6",
      country: "Country 6",
    },
  ];

  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Dots = () => {
    return <Dotscell />;
  };
  const CustSuppCell = (p) => {
    return <CustomerSupplierCell value={p.value} lineText={p.lineText} />;
  };

  // Address Details Data
  const initialRowData = [
    {
      id: "1",
      linetype: "item",
      source: "PO0001",
      item: "LAPTOP200022-108",
      discription: "Intel Core i5-82502, 16GB RAM DDR",
      quantity: "5.00",
      Uom: "PC5",
      location: "Warehouse",
      unitprice: "$ 950.00",
      taxcode: "Standard Rate",
      netamount: "$ 4700.00",
      netamountfc: "$ 4700.00",
    },
    {
      id: "2",
      linetype: "item",
      source: "PO0001",
      item: "LAPTOP200022-108",
      discription: "Intel Core i5-82502, 16GB RAM DDR",
      quantity: "5.00",
      Uom: "PC5",
      location: "Warehouse",
      unitprice: "$ 950.00",
      taxcode: "Standard Rate",
      netamount: "$ 4700.00",
      netamountfc: "$ 4700.00",
    },
    {
      id: "3",
      linetype: "item",
      source: "PO0001",
      item: "LAPTOP200022-108",
      discription: "Intel Core i5-82502, 16GB RAM DDR",
      quantity: "5.00",
      Uom: "PC5",
      location: "Warehouse",
      unitprice: "$ 950.00",
      taxcode: "Standard Rate",
      netamount: "$ 4700.00",
      netamountfc: "$ 4700.00",
    },
    {
      id: "4",
      linetype: "item",
      source: "PO0001",
      item: "LAPTOP200022-108",
      discription: "Intel Core i5-82502, 16GB RAM DDR",
      quantity: "5.00",
      Uom: "PC5",
      location: "Warehouse",
      unitprice: "$ 950.00",
      taxcode: "Standard Rate",
      netamount: "$ 4700.00",
      netamountfc: "$ 4700.00",
    },
    {
      id: "5",
      linetype: "item",
      source: "PO0002",
      item: "DESKTOP200033-209",
      discription: "Intel Core i7-9700, 32GB RAM DDR4",
      quantity: "3.00",
      Uom: "PC3",
      location: "Warehouse",
      unitprice: "$ 1200.00",
      taxcode: "Standard Rate",
      netamount: "$ 3600.00",
      netamountfc: "$ 3600.00",
    },
    {
      id: "addNewRow",
      linetype: "addNew",
      source: "",
      item: "",
      discription: "",
      quantity: "",
      Uom: "",
      location: "",
      unitprice: "",
      taxcode: "",
      netamount: "",
      netamountfc: "",
    },
  ];

  const [rowData1, setRowData1] = useState(initialRowData);

  const colDefs1 = [
    {
      field: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: (params) =>
        params.node.rowIndex === rowData1.length - 1 ? null : <Dots />,
    },
    {
      field: "linetype",
      headerName: "Line Type",
      headerClass: "All-header",
      cellRenderer: (params) =>
        params.node.rowIndex === rowData1.length - 1 ? (
          <div className="add-row-button-container">
            <AddRowButton onClick={addRow} />
          </div>
        ) : (
          params.value
        ),
    },
    {
      field: "source",
      headerName: "Source",
      headerClass: "All-header",
    },
    {
      field: "item",
      headerName: "Item",
      headerClass: "All-header",
      cellRenderer: (params) => (
        <CustSuppCell
          value={params.value}
          lineText="Lenovo Thinkpad 100BA-14"
        />
      ),
    },
    {
      field: "discription",
      headerName: "Discription",
      headerClass: "All-header",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      headerClass: "All-header",
    },
    {
      field: "Uom",
      headerName: "UOM",
      headerClass: "All-header",
    },
    {
      field: "location",
      headerName: "Location",
      headerClass: "All-header",
    },
    {
      field: "unitprice",
      headerName: "Unit Price",
      headerClass: "All-header",
    },
    {
      field: "taxcode",
      headerName: "Tax Code",
      headerClass: "All-header",
    },
    {
      field: "netamount",
      headerName: "Net Amount",
      headerClass: "All-header",
    },
    {
      field: "netamountfc",
      headerName: "Net Amount (FC)",
      headerClass: "All-header",
    },
  ];

  // Define rowClassRules to apply styles to the last row
  const rowClassRules = {
    "last-row": (params) => params.node.rowIndex === rowData1.length - 1,
  };

  const addRow = () => {
    const newRow = {
      id: rowData1.length.toString(),
      linetype: "item",
      source: "PO0002",
      item: "DESKTOP200033-209",
      discription: "Intel Core i7-9700, 32GB RAM DDR4",
      quantity: "3.00",
      Uom: "PC3",
      location: "Warehouse",
      unitprice: "$ 1200.00",
      taxcode: "Standard Rate",
      netamount: "$ 3600.00",
      netamountfc: "$ 3600.00",
    };

    setRowData1((prevRowData) => {
      const updatedRowData = [...prevRowData];
      // Find the index of the addNewRow
      const addNewRowIndex = updatedRowData.findIndex(
        (row) => row.linetype === "addNew"
      );

      // Insert the new row above the addNewRow and keep the addNewRow at the end
      updatedRowData.splice(addNewRowIndex, 0, newRow);
      return updatedRowData;
    });
  };

  // Contact Person Data

  const [rowData2, setRowData2] = useState([
    {
      contacttype: "1",
      contactname: "SALESBUDGET2021",
      gender: "Fiscal Year 2022 Annual Budget",
      designation: "31 Dec 2022",
      phonenumber: "$ 184,032,99",
      mobilenumber: "Approved",
      emailaddress: "0000",
      status: "Active",
    },
    {
      contacttype: "1",
      contactname: "SALESBUDGET2021",
      gender: "Fiscal Year 2022 Annual Budget",
      designation: "31 Dec 2022",
      phonenumber: "$ 184,032,99",
      mobilenumber: "Approved",
      emailaddress: "0000",
      status: "Active",
    },
    {
      contacttype: "1",
      contactname: "SALESBUDGET2021",
      gender: "Fiscal Year 2022 Annual Budget",
      designation: "31 Dec 2022",
      phonenumber: "$ 184,032,99",
      mobilenumber: "Approved",
      emailaddress: "0000",
      status: "Active",
    },
    {
      contacttype: "1",
      contactname: "SALESBUDGET2021",
      gender: "Fiscal Year 2022 Annual Budget",
      designation: "31 Dec 2022",
      phonenumber: "$ 184,032,99",
      mobilenumber: "Approved",
      emailaddress: "0000",
      status: "Active",
    },
    {
      contacttype: "1",
      contactname: "SALESBUDGET2021",
      gender: "Fiscal Year 2022 Annual Budget",
      designation: "31 Dec 2022",
      phonenumber: "$ 184,032,99",
      mobilenumber: "Approved",
      emailaddress: "0000",
      status: "Active",
    },
  ]);

  const [colDefs2, setColDefs2] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
    },
    {
      field: "contacttype",
      headerName: "Contact Type",
      filter: false,
      headerClass: "id-cell",
    },
    {
      field: "contactname",
      headerName: "Contact Name",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "gender",
      headerName: "Gender",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "designation",
      headerName: "Designation",
      // width: "180px",
      headerClass: "All-header",
    },
    {
      field: "phonenumber",
      headerName: "Phone Number",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "mobilenumber",
      headerName: "Mobile Number",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "emailaddress",
      headerName: "Email Address",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "Status",
      cellRenderer: Status,
      // width: "120px",
      headerClass: "All-header",
    },
  ]);

  // Bank Information Data

  const [rowData3, setRowData3] = useState([
    {
      accountname: "1",
      bankname: "SALESBUDGET2021",
      bankaddress: "Fiscal Year 2022 Annual Budget",
      currency: "31 Dec 2022",
      iban: "$ 184,032,99",
      accountnumber: "Approved",
      routingnumber: "0000",
      swiftcode: "Active",
    },
    {
      accountname: "1",
      bankname: "SALESBUDGET2021",
      bankaddress: "Fiscal Year 2022 Annual Budget",
      currency: "31 Dec 2022",
      iban: "$ 184,032,99",
      accountnumber: "Approved",
      routingnumber: "0000",
      swiftcode: "Active",
    },
    {
      accountname: "1",
      bankname: "SALESBUDGET2021",
      bankaddress: "Fiscal Year 2022 Annual Budget",
      currency: "31 Dec 2022",
      iban: "$ 184,032,99",
      accountnumber: "Approved",
      routingnumber: "0000",
      swiftcode: "Active",
    },
    {
      accountname: "1",
      bankname: "SALESBUDGET2021",
      bankaddress: "Fiscal Year 2022 Annual Budget",
      currency: "31 Dec 2022",
      iban: "$ 184,032,99",
      accountnumber: "Approved",
      routingnumber: "0000",
      swiftcode: "Active",
    },
    {
      accountname: "1",
      bankname: "SALESBUDGET2021",
      bankaddress: "Fiscal Year 2022 Annual Budget",
      currency: "31 Dec 2022",
      iban: "$ 184,032,99",
      accountnumber: "Approved",
      routingnumber: "0000",
      swiftcode: "Active",
    },
  ]);

  const [colDefs3, setColDefs3] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
    },
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: "60px",
      resizable: false,
      filter: false,
      headerClass: "id-cell",
    },
    {
      field: "accountname",
      headerName: "Account Name",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "bankname",
      headerName: "Bank Name",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "bankaddress",
      headerName: "Bank Address",
      // width: "180px",
      headerClass: "All-header",
    },
    {
      field: "currency",
      headerName: "Currency",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "iban",
      headerName: "Iban",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "accountnumber",
      headerName: "Account Number",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "routingnumber",
      headerName: "Routing Number",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "swifthcode",
      headerName: "Swift Code",
      // width: "120px",
      headerClass: "All-header",
    },
  ]);

  // Attachment Data

  const [rowData4, setRowData4] = useState([
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      notes: "$ 184,032,99",
      action: "Approved",
    },
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      notes: "$ 184,032,99",
      action: "Approved",
    },
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      notes: "$ 184,032,99",
      action: "Approved",
    },
    {
      documentno: "1",
      documentname: "SALESBUDGET2021",
      issuedate: "Fiscal Year 2022 Annual Budget",
      expirydate: "31 Dec 2022",
      notes: "$ 184,032,99",
      action: "Approved",
    },
  ]);

  const [colDefs4, setColDefs4] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
    },
    {
      field: "documentno",
      headerName: "Document No.",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "documentname",
      headerName: "Document Name",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "issuedate",
      headerName: "Issue Date",
      // width: "180px",
      headerClass: "All-header",
    },
    {
      field: "expirydate",
      headerName: "Expiry Date",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "notes",
      headerName: "Notes",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "action",
      headerName: "Action",
      // width: "120px",
      headerClass: "All-header",
      cellRenderer: Dots,
    },
  ]);

  // Communication Logs Data

  const [rowData5, setRowData5] = useState([
    {
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
  ]);

  const [colDefs5, setColDefs5] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
    },
    {
      field: "date",
      headerName: "Date",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "subject",
      headerName: "Subject",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "sender",
      headerName: "Sender",
      // width: "180px",
      headerClass: "All-header",
    },
    {
      field: "recipient",
      headerName: "Recipient",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "commtype",
      headerName: "Comm Type",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "Status",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "action",
      headerName: "Action",
      // width: "120px",
      headerClass: "All-header",
      cellRenderer: Dots,
    },
  ]);

  // Trnsaction Data

  const [rowData6, setRowData6] = useState([
    {
      transactiontype: "1",
      reference: "SALESBUDGET2021",
      date: "Fiscal Year 2022 Annual Budget",
      duedate: "31 Dec 2022",
      totalamount: "$ 184,032,99",
      status: "Approved",
    },
    {
      transactiontype: "1",
      reference: "SALESBUDGET2021",
      date: "Fiscal Year 2022 Annual Budget",
      duedate: "31 Dec 2022",
      totalamount: "$ 184,032,99",
      status: "Approved",
    },
    {
      transactiontype: "1",
      reference: "SALESBUDGET2021",
      date: "Fiscal Year 2022 Annual Budget",
      duedate: "31 Dec 2022",
      totalamount: "$ 184,032,99",
      status: "Approved",
    },
    {
      transactiontype: "1",
      reference: "SALESBUDGET2021",
      date: "Fiscal Year 2022 Annual Budget",
      duedate: "31 Dec 2022",
      totalamount: "$ 184,032,99",
      status: "Approved",
    },
  ]);

  const [colDefs6, setColDefs6] = useState([
    {
      field: "transactiontype",
      headerName: "Transaction Type",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "reference",
      headerName: "Reference",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "date",
      headerName: "Date",
      // width: "180px",
      headerClass: "All-header",
    },
    {
      field: "duedate",
      headerName: "Due Date",

      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "totalamount",
      headerName: "Total Amount",
      // width: "120px",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "Status",
      // width: "120px",
      headerClass: "All-header",
    },
  ]);

  const [value, setValue] = useState();

  const buttonsData = [
    // { icon: "AddRow", title: "Add Row" },
    { icon: "Custom", title: "Customize" },
    { icon: "Import", title: "Import" },
  ];

  const Total = [
    { Label: "Net Total" },
    { Label: "Net Total (FC)" },
    { Label: "Document Discount" },
    { Label: "Total Tax" },
    { Label: "Total Amount" },
    { Label: "Total Amount (FC)" },
    { Label: "Amount Paid" },
    { Label: "Remaining Balance" },
  ];
  const Data = [
    { Amount: "$ 8,430.00" },
    { Amount: "$ 7,725.25" },
    { Amount: "$ 950.00" },
    { Amount: "$ 421.00" },
    { Amount: "$ 8,430.00" },
    { Amount: "$ 8,430.00" },
    { Amount: "$ 8,430.00" },
    { Amount: "$ 8,430.00" },
  ];
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const handleCurrencyChange = (option) => {
    setSelectedCurrency(option);
    // Do something with the selected currency option
  };

  ///////////////////////////////////////
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
  const tableDetailColumns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
      enableColumnOrdering: false,
      Footer: () => (
        <div>
          <button
            style={{
              backgroundColor: 'transparent',
              border: "none",
              fontSize: '12px',
              cursor: 'pointer',
              color: "lightgrey",
              fontWeight: '700',
              marginLeft: '-90px',
            }}
            onClick={handleAddRow}
          >
            + Add Row
          </button>
        </div>
      ),
    },
    {
      accessorKey: "glaccount",
      header: "GL Account",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "glaccount", e.target.value)}
          onFocus={(e) => e.target.style.border = 'none'} // Ensure no border on focus
          onBlur={(e) => e.target.style.border = 'none'} // Ensure no border on blur
        />
      ),
    },
    {
      accessorKey: "rowdescription",
      header: "Row Description",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "rowdescription", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "debit",
      header: "Debit",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "debit", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "credit",
      header: "Credit",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "credit", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "fcdebit",
      header: "FC Debit",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "fcdebit", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "taxcode",
      header: "Tax Code",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "taxcode", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "taxamount",
      header: "Tax Amount",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "taxamount", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "totalamount",
      header: "Total Amount",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "totalamount", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "fctotalamount",
      header: "FC Total Amount",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "fctotalamount", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "project",
      header: "Project",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "project", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "division",
      header: "Division",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "division", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "department",
      header: "Department",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "department", e.target.value)}
        />
      ),
    },
    {
      accessorKey: "account",
      header: "Account",
      Cell: ({ cell, row }) => (
        <input
          style={{
            fontSize: '12px',
            color: '#464f60cc',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
          }}
          type="text"
          value={cell.getValue()}
          onChange={(e) => handleCellChange(row.index, "account", e.target.value)}
        />
      ),
    },
  ], []);

  const handleCellChange = (rowIndex, columnId, value) => {
    setData(prevData => {
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
  /////////////Attachments//////////
  const columns2 = useMemo(
    () => [
      { accessorKey: 'documentName', header: 'Document Name' },
      { accessorKey: 'issueDate', header: 'Issue Date' },
      { accessorKey: 'expiryDate', header: 'Expiry Date' },
      { accessorKey: 'attachedBy', header: 'Attached by' },
      { accessorKey: 'documentNo', header: 'Document No' },
      { accessorKey: 'notes', header: 'Notes' },
      { accessorKey: 'status', header: 'Status' },
    ],
    []
  );
  const data2 = useMemo(
    () => [
      {
        documentName: 'Document First',
        issueDate: '12 January 2024',
        expiryDate: '12 January 2024',
        attachedBy: 'Active',
        documentNo: 'Order001',
        notes: 'Currency',
        status: 'Active',
      },
      {
        documentName: 'Document First',
        issueDate: '12 January 2024',
        expiryDate: '12 January 2024',
        attachedBy: 'Active',
        documentNo: 'Order001',
        notes: 'Currency',
        status: 'Active',
      },
      {
        documentName: 'Document First',
        issueDate: '12 January 2024',
        expiryDate: '12 January 2024',
        attachedBy: 'Active',
        documentNo: 'Order001',
        notes: 'Currency',
        status: 'Active',
      },
      {
        documentName: 'Document First',
        issueDate: '12 January 2024',
        expiryDate: '12 January 2024',
        attachedBy: 'Active',
        documentNo: 'Order001',
        notes: 'Currency',
        status: 'Active',
      },
      {
        documentName: 'Document First',
        issueDate: '12 January 2024',
        expiryDate: '12 January 2024',
        attachedBy: 'Active',
        documentNo: 'Order001',
        notes: 'Currency',
        status: 'Active',
      },
    ],
    []
  );

   ///////////Internal Notes///////////////////
   const internalNotesData = useMemo(() => [
    {
      id: "1",
      user: "abak62@frepsalan.xyz",
      notedetail: "Waiting from approval Finance Manager",
      date: "12 January 2024",
    },
    {
      id: "1",
      user: "abak62@frepsalan.xyz",
      notedetail: "Waiting from approval Finance Manager",
      date: "12 January 2024",
    },
    {
      id: "1",
      user: "abak62@frepsalan.xyz",
      notedetail: "Waiting from approval Finance Manager",
      date: "12 January 2024",
    },
    {
      id: "1",
      user: "abak62@frepsalan.xyz",
      notedetail: "Waiting from approval Finance Manager",
      date: "12 January 2024",
    },
    {
      id: "1",
      user: "abak62@frepsalan.xyz",
      notedetail: "Waiting from approval Finance Manager",
      date: "12 January 2024",
    },
  ], []);
  const internalNotesColumns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "user",
      header: "User",
    },
    {
      accessorKey: "notedetail",
      header: "Note Detail",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
  ], []);


  /////////////////Correspondance//////////////////////

  const CorrespondenceData = useMemo(() => [
    {
      id: "1",
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      id: "1",
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      id: "1",
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      id: "1",
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
    {
      id: "1",
      date: "1",
      subject: "SALESBUDGET2021",
      sender: "Fiscal Year 2022 Annual Budget",
      recipient: "31 Dec 2022",
      commtype: "$ 184,032,99",
      status: "Approved",
    },
  ], []);

  const CorrespondenceColumns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "subject",
      header: "Subject",
    },
    {
      accessorKey: "sender",
      header: "Sender",
    },
    {
      accessorKey: "recipient",
      header: "Recipient",
    },
    {
      accessorKey: "commtype",
      header: "Comm Type",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ], []);
  

  /////////////////////////////////////////

  ///////////// Linked Transaction Data //////////////////////

  const linkedTransactionData = useMemo(() => [
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
      id: "1",
      transactiontype: "Reverse Journal Entry",
      reference: "Receipts 000237",
      date: "12 January 2024",
      duedate: "12 January 2024",
      totalamount: "$ 2,932.00",
      status: "Active",
    },
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
      id: "1",
      transactiontype: "Reverse Journal Entry",
      reference: "Receipts 000237",
      date: "12 January 2024",
      duedate: "12 January 2024",
      totalamount: "$ 2,932.00",
      status: "Active",
    },
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
      id: "1",
      transactiontype: "Reverse Journal Entry",
      reference: "Receipts 000237",
      date: "12 January 2024",
      duedate: "12 January 2024",
      totalamount: "$ 2,932.00",
      status: "Active",
    },

  ], []);

  const linkedTransactionColumns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
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
  ], []);

  return (
    <>
      <Main>
        <NewScreensNav
          height={"30%"}
          // OPTIONS
          first={"Customer Return Details"}
          second={"Table Details"}
          third={"Attachments"}
          fourth={"Correspondence"}
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
        <Wrapit>
          <Header
            title={"CUSTOMER RETURN"}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1002}
            thirdNav={keys.KEY10011}
            fourthNav={keys.KEY100142}
            navActive={"Customer Return - New"}
          />
          <HeaderNewButtons />
          <Div>
            {/* <AccountsSideNav
    
              title={"SECTION LIST"}
              first={keys.KEY100350}
              second={keys.KEY100344}
              third={keys.KEY100345}
              fourth={keys.KEY100260}
              fifth={keys.KEY100346}
              sixth={keys.KEY100347}
              seventh={keys.KEY100261}
            />  */}

            <Hero>
              <TitleOfSection title={"CUSTOMER RETURN DETAILS"} />

              <Line />
              <Wrapper>
                {/* <Inputs> */}
                <FieldsBox>
                  <DropdownInput
                    Name={"Customer"}
                    Padding={true}
                    image={BlackDropdown}
                    setWidth={false}
                  />
                  <CurrencyInput2
                    Name="Currency"
                    // setWidth="long"
                    check={false} // Or true based on your logic
                    onChange={handleCurrencyChange}
                  />
                  {/* <ContactPersonDropDown name="Contact Person" options={contacts} /> */}
                  <ContactDropdown setWidth={"true"} />
                  {/* <FlexContainer>
                    <Text3 txtColor={"#58606f"}>ON HOLD</Text3>
                    <InputCheckOne
                      style={{ cursor: "pointer" }}
                      type="checkbox"
                    />
                  </FlexContainer> */}
                </FieldsBox>
                <FieldsBox>
                  <DetailDropDown
                    options={warehouseaddress}
                    setWidth={false}
                    check={false}
                    Name="Shipping Address"
                    isDropdownOpen={false}
                  />
                </FieldsBox>
                <FieldsBox>
                  <DetailDropDown
                    options={billingaddress}
                    setWidth={false}
                    check={false}
                    Name="Billing Address"
                    isDropdownOpen={false}
                  />
                </FieldsBox>

                <MiddleCol>
                  <LargeButton
                    name={"DRAFT"}
                    textColor={"#ffa800"}
                    bgColor={"#fee8cd"}
                  />
                </MiddleCol>
                <FieldsBox>
                  <ChartAccountInput
                    Name="Customer Return No."
                    image={Auto}
                    setWidth={"true"}
                  />
                  <ChartAccountInput
                    Name="Customer P.O Number"
                    setWidth={"true"}
                  />
                  <CalanderInput Name={"Transaction Date"} width={true} />
                  <CalanderInput Name={"Posting Date"} width={true} />

                  <CalanderInput Name={"Due Date"} width={true} />
                </FieldsBox>
                {/* </Inputs> */}
              </Wrapper>
              <BottomRowInputs>
                <DropdownInput
                  Name={"Sales Agent"}
                  Padding={true}
                  image={BlackDropdown}
                  setWidth={"short"}
                />
                <DropdownInput
                  Name={"Delivery Type"}
                  Padding={true}
                  image={BlackDropdown}
                  setWidth={"short"}
                />
                <DropdownInput
                  Name={"Delivery By"}
                  Padding={true}
                  image={BlackDropdown}
                  setWidth={"short"}
                />
                <DropdownInput
                  Name={"Price List"}
                  Padding={true}
                  image={BlackDropdown}
                  setWidth={"short"}
                />
                <DropdownInput
                  Name={"Discount"}
                  Padding={true}
                  image={BlackDropdown}
                  setWidth={"short"}
                />
                <DropdownInput
                  Name={"Payment Terms"}
                  Padding={true}
                  image={BlackDropdown}
                  setWidth={"short"}
                />
                <DropdownInput
                  Name={"Project"}
                  Padding={true}
                  image={BlackDropdown}
                  setWidth={"short"}
                />
              </BottomRowInputs>

              <MRTTableDetails
            data={data}
            columns={tableDetailColumns}
            onAddRowAbove={handleAddRowAbove}
            onAddRowBelow={handleAddRowBelow}
            onDeleteRow={handleDeleteRow}
          />

              {/* <TableDetails
                rowData={rowData1}
                colDefs={colDefs1}
                buttons={buttonsData}
                name={"TABLE DETAILS"}
                rowClassRules={rowClassRules}
                domLayout="autoHeight"
              /> */}
              <Container>
                <div
                  style={{
                    marginLeft: "20px",
                    marginTop: "11px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                  }}
                >
                  <Tagline>Notes</Tagline>
                  <InputField />
                  <TagsInput />
                </div>
                <TotalAmount2 Data={Data} Total={Total} />
              </Container>

              <MRTSmallTables columns={columns2} data={data2} ToggleBtnTitle={"ATTACHMENTS"} />
        <MRTSmallTables columns={internalNotesColumns} data={internalNotesData} ToggleBtnTitle={"INTERNAL NOTES"}/>
        <MRTSmallTables columns={CorrespondenceColumns} data={CorrespondenceData} ToggleBtnTitle={"CORRESPONDENCE"}/>

        <MRTSmallTables columns={linkedTransactionColumns} data={linkedTransactionData} ToggleBtnTitle={"LINKED TRANSACTIONS"} />

              {/* <JornalTables
                Icon={"AttachIcon"}
                Title={"Attach"}
                Name={"ATTACHMENTS"}
                ColData={colDefs4}
                RowData={rowData4}
                button={"true"}
                id={"section4"}
              />
              <JornalTables
                Title={""}
                Name={"CORRESPONDENCE"}
                ColData={colDefs5}
                RowData={rowData5}
                button={"false"}
                id={"section5"}
              />
              <JornalTables
                Title={""}
                Name={"LINKED TRANSACTIONS"}
                ColData={colDefs6}
                RowData={rowData6}
                button={"false"}
                id={"section6"}
              /> */}
              <ActivityPart />
            </Hero>
          </Div>
        </Wrapit>
      </Main>
    </>
  );
};

export default CustomerReturnNew;
