import React, { useEffect, useState } from "react";
import Header from "../../../components/parts/Header";
import TitleOfSection from "../../../New-Screens/Components/TitleOfSection";
import NewScreensNav from "../../../New-Screens/Components/NewScreensNav";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import JornalTables from "../../../New-Screens/Sections/JornalTables";
import Dotscell from "../../../components/Table/CustomCells/Dots";
import DropdownInput from "../../../components/Inputs/DropdownInput";
import AccountCurrencyInput from "../../../components/Inputs/AccountCurrencyInput";
import Info from "../../../assets2/ButtonIcons/InformationIcon.svg";
import ActivityPart from "../../../New-Screens/Sections/ActivityPart";
import SettingsNavigation from "../../../components/SettingsNavigation";
import TabNavigation from "../../../New-Screens/Components/TabNavigation";
import SettingsTables from "../../../New-Screens/Sections/SettingsTables";
import SettingModal from "../../../components/Modals/SettingModal";
import AccountModal from "../../../components/Modals/AccountModal";
import HeadlessTable from "../../../components/Table/HeadlessTable";
import TransactionNum from "./TransactionNum";
import CostCenter from "./CostCenter";
import GeneralConfig from "./GeneralConfig";
import CurrencySetup from "./CurrencySetup";
import {
  NumberValue,
  DecimalValue,
  NegitiveValue,
  NumberGroupingValue,
  DecimalPlacesQuantityValue,
  DecimalPlacesAmountValue,
} from "../../../redux/appReducer/NumberFormat";
import {
  PostFinanceSettings,
  UpdateFinanceSettings,
  getAllFiscalYears,
} from "../../../Api/Apis";
import { Alert } from "antd";
import Toaster from "../../../components/Modals/Toaster";
import AccountDefault from "./AccountDefault";
import AccountTypeCategory from "./AccountTypeCategory";
import HeadlessTableTN from "../../../New-Screens/Components/MantineTable/HeadlessTableTN";
import {
  Divider,
  Flex,
  Stack,
  Table,
  Checkbox,
  Drawer,
  Button,
} from "@mantine/core";

const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;
const Head = styled.div`
  padding: 0 15px;
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
`;
const Div = styled.div`
  width: 100%;
  /* padding: 0px 10px; */
`;
const Main = styled.div`
  height: 85vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FinanceSetting = () => {
  const Dots = () => {
    return <Dotscell />;
  };
  const columnsData = [
    {
      accessorKey: "fiscalPeriod",
      header: "Fiscal Period",
      // id: "fiscalPeriod",
    },
    {
      accessorKey: "fiscalYearStartDate",
      header: "Fiscal Year Start Date",
      // id: "fiscalYearStartDate",
    },
    {
      accessorKey: "numberOfPeriods",
      header: "No. of Periods",
      // id: "numberOfPeriods",
    },
    {
      accessorKey: "periodFrom",
      header: "Period From",
      // id: "periodFrom",
    },
    {
      accessorKey: "periodTo",
      header: "Period To",
      // id: "periodTo",
    },
    {
      accessorKey: "currentPeriod",
      header: "Current Period",
      // id: "currentPeriod",
    },
    {
      accessorKey: "status",
      header: "Status",
      // id: "status",
    },
  ];
  const Rowdata = [
    {
      fiscalPeriod: "John",
      fiscalYearStartDate: "Doe",
      numberOfPeriods: "123 Main St",
      periodFrom: "Anytown",
      periodTo: "CA",
      currentPeriod: "Yes",
      status: "Active",
    },
    {
      fiscalPeriod: "Jane",
      fiscalYearStartDate: "Smith",
      numberOfPeriods: "456 Oak St",
      periodFrom: "Othertown",
      periodTo: "NY",
      currentPeriod: "No",
      status: "Inactive",
    },
    // add more data as needed
  ];

  const [selectedCurrency, setSelectedCurrency] = useState("");

  const handleCurrencyChange = (option) => {
    setSelectedCurrency(option);
    console.log(selectedCurrency);
    // Do something with the selected currency option
  };

  const keys = useSelector((state) => state.localization.keys);
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const [selectedDay, setSelectedDay] = useState(null);
  const [modal, setModal] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const HandleSecCancel = () => {
    setPopUp(false);
  };
  const HandleSecSave = () => {
    setPopUp(false);
    alert("Your Information is Saved ");
  };

  const data = [
    "FINANCIAL PERIOD",
    "ACCOUNTING DEFAULT",
    "ACCOUNT TYPES & CATEGORIES",
    "TRANSACTION NUMBERING",
    "DEFINE CURRENCY",
    "COST CENTER",
    "GL ALLOCATION",
  ];
  const [activeTab, setActiveTab] = useState("FINANCIAL PERIOD");
  const tabChange = (tab) => {
    setActiveTab(tab);
    console.log(activeTab);
  };

  const HandleCancel = () => {
    setModal(false);
  };
  const HandleSave = () => {
    setModal(false);
    alert("Your Information is Saved ");
  };

  const [showToasterPosted, setShowToasterPosted] = useState(false);
  const [showToasterPosted2, setShowToasterPosted2] = useState(false);
  const [showToasterSegment, setShowToasterSegment] = useState(false);
  const [showToasterCostCenter, setShowToasterCostCenter] = useState(false);

  const handleCloseToaster = () => {
    setShowToasterPosted(false);
    setShowToasterPosted2(false);
    setShowToasterSegment(false);
    setShowToasterCostCenter(false);
  };

  return (
    <Wrapper>
      {showToasterSegment ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"The Cost Center has been created successfully."}
          handleClose={handleCloseToaster}
          duration={4000}
        />
      ) : null}

      {showToasterCostCenter ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"Segment updated successfully."}
          handleClose={handleCloseToaster}
          duration={4000}
        />
      ) : null}
      {showToasterPosted ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"The Series Code has been Created Successfully."}
          handleClose={handleCloseToaster}
          duration={6000}
        />
      ) : null}
      {showToasterPosted2 ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"The Series Code has been Updated Successfully."}
          handleClose={handleCloseToaster}
          duration={6000}
        />
      ) : null}

      <Drawer
        offset={8}
        size={"40%"}
        radius="md"
        opened={modal}
        onClose={HandleCancel}
        title="DEFAULT METHOD"
      >
        <SettingModal Cancel={HandleCancel} Save={HandleSave} />
      </Drawer>
      {popUp ? (
        <AccountModal
          title={"New Account Type"}
          Cancel2={HandleSecCancel}
          Save2={HandleSecSave}
        />
      ) : null}
      <Wrap>
        {/* <SettingsNavigation /> */}
        <Div>
          <Head>
            <Header
              title={"FINANCE SETTINGS"}
              firstNav={keys.KEY0002}
              secNav={"Finance Settings"}
              navActive={
                activeTab === "FINANCIAL PERIOD"
                  ? "Finance period"
                  : activeTab === "TRANSACTION NUMBERING"
                  ? "Transaction Numbering"
                  : activeTab === "DEFINE CURRENCY"
                  ? "Define Currency"
                  : activeTab === "COST CENTER"
                  ? "Currency Setup"
                  : activeTab === "GL ALLOCATION"
                  ? "GL Allocation"
                  : activeTab === "ACCOUNT TYPES & CATEGORIES"
                  ? "Account Type & Categories"
                  : null
              }
            />
            <TabNavigation
              TabName={data}
              tabChange={(tab) => tabChange(tab)}
              activeTab={activeTab}
            />
            {/* <Line /> */}
          </Head>
          <Main>
            {activeTab === "FINANCIAL PERIOD" ? (
              <div
                style={{
                  padding: "5px 15px",
                }}
              >
                <HeadlessTableTN
                  columns={columnsData}
                  data={Rowdata}
                  // showAddNotesButton={true}
                  // onAddNotesClick={HandleModal}
                  currencyButton={false}
                  PeriodButton={true}
                  PeriodClick={() => setModal(true)}
                  TitleButton={true}
                  titleName={"FISCAL YEARS"}
                  // SubRows={(row) => row.subRows}
                  // RowData={(row) => setRowBody(row)}
                  rowSelection={false}
                  expandingRow={false}
                  editiing={false}
                  setMargin={"None"}
                  // state={{ rowSelection }}
                  // renderExpandButton={() => null}
                  // mantineTableBodyRowProps={mantineTableBodyRowPropsTD}
                  // getRowCanExpand={(row) => row.depth === 0}
                  // mantineExpandButtonProps={({ row }) =>
                  //   row.depth === 0 ? {} : { style: { display: "none" } }
                  // }
                />
                <ActivityPart ShowButton={false} Val={true} />
              </div>
            ) : activeTab === "TRANSACTION NUMBERING" ? (
              <TransactionNum
                setShowToasterPosted={setShowToasterPosted}
                setShowToasterPosted2={setShowToasterPosted2}
              />
            ) : activeTab === "COST CENTER" ? (
              <CostCenter
                ToasterSegment={setShowToasterSegment}
                ToasterCostCenter={setShowToasterCostCenter}
              />
            ) : activeTab === "GL ALLOCATION" ? (
              <GeneralConfig />
            ) : activeTab === "DEFINE CURRENCY" ? (
              <CurrencySetup />
            ) : activeTab === "ACCOUNTING DEFAULT" ? (
              <AccountDefault />
            ) : activeTab === "ACCOUNT TYPES & CATEGORIES" ? (
              <AccountTypeCategory />
            ) : null}
          </Main>
        </Div>
      </Wrap>
    </Wrapper>
  );
};

export default FinanceSetting;
