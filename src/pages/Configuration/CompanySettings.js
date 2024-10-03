import React, { useEffect, useState } from "react";
import Header from "../../components/parts/Header";
import TitleOfSection from "../../New-Screens/Components/TitleOfSection";
import NewScreensNav from "../../New-Screens/Components/NewScreensNav";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import JornalTables from "../../New-Screens/Sections/JornalTables";
import DropdownInput from "../../components/Inputs/DropdownInput";
import AccountCurrencyInput from "../../components/Inputs/AccountCurrencyInput";
// import Info from "../../../assets2/ButtonIcons/InformationIcon.svg";
import ActivityPart from "../../New-Screens/Sections/ActivityPart";
import SettingsNavigation from "../../components/SettingsNavigation";
import TabNavigation from "../../New-Screens/Components/TabNavigation";
import SettingsTables from "../../New-Screens/Sections/SettingsTables";
import SettingModal from "../../components/Modals/SettingModal";
import AccountModal from "../../components/Modals/AccountModal";
import HeadlessTable from "../../components/Table/HeadlessTable";
import TransactionNum from "../Finance/FinanceSettings/TransactionNum";
import CostCenter from "../Finance/FinanceSettings/CostCenter";
import GeneralConfig from "../Finance/FinanceSettings/GeneralConfig";
import CustomDatePicker from "../../components/DatePicker/CustomDatePicker";
import DateTypeSelector from "../../components/DatePicker/DateTypeSelector";
import DateSeparatorSelector from "../../components/DatePicker/DateSeparatorSelector";
import SettingsCurrencyDropDown from "../../components/DatePicker/SettingsCurrencyInput";
import CompanyProfile from "./CompanyProfile";
import Info from "../../assets2/ButtonIcons/InformationIcon.svg";
import AddNotesButton from "../../New-Screens/Components/MantineTable/Buttons/AddNotesButton";
import Modal from "react-modal";
import { MdEdit } from "react-icons/md";
import { setTimeFormat } from "../../redux/appReducer/timeFormatSlice";
import { createLocalization, updateLocalization, getAllLocalizations, getLocalizationById } from "../../Api/Apis";

import {
  NumberValue,
  DecimalValue,
  NegitiveValue,
  NumberGroupingValue,
  DecimalPlacesQuantityValue,
  DecimalPlacesAmountValue,
} from "../../redux/appReducer/NumberFormat";

import SettingsModal from "./Modals/SetingsModal";

// import {
//   DecimalValue,
//   NumberValue,
// } from "../../../redux/appReducer/NumberFormat";
// import { PostFinanceSettings, UpdateFinanceSettings } from "../../../Api/Apis";
import { Alert } from "antd";
import TaxDetails from "./TaxDetails";
import Branches from "./Branches";
import Subscription from "./Subscription";
import Utilization from "./Utilization";

const customOverlayStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 20px;
  color: #fff;
  background-color: ${(props) => (props.primary ? "#007BFF" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  border: ${(props) => (props.primary ? "none" : "1px solid #cbcbcb")};
  &:hover {
    opacity: 0.8;
  }
`;

const Line = styled.div`
  background-color: #d9d9d9;
  height: 0.7px;
  width: 100%;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;

const LineModal = styled.div`
  background-color: #d9d9d9;
  height: 0.7px;
  width: 100%;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  padding: 0px 10px;
`;
const Head = styled.div``;

const Body = styled.div`
  width: 100%;
  margin-top: 15px;
`;
const HeroSection = styled.div`
  width: 100%;
  height: 500px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  border-radius: 8px;
  background-color: #ffffff;
  margin: 20px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: start;
`;
const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  width: 20vw;
  /* height: 45vh; */
`;
const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  /* height: 450px; */
`;
const DaySelector = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const DraftSec = styled.div``;
const Text3 = styled.div`
  color: #6a727f;
  font-size: 11px;
  font-weight: bold;
`;
const DateSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  color: #464f60;
  font-size: 11px;
`;
const ThirdOne = styled.input`
  width: 100px;
  /* height: 13px; */
  border-radius: 4px;
  border: 1px solid #c7cacf;
  color: #464f60;
  font-size: 11px;
  padding: 9px 0px;
  text-align: center;
  outline: none;
`;
const Second = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 4px;
  border: 1px solid #c7cacf;
  color: #464f60;
  font-size: 11px;
  /* padding: 9px; */
  text-align: center;
  outline: none;
`;
const Tagline = styled.div`
  color: #6a727f;
  font-size: 11px;
  font-weight: bold;
`;
const T = styled.div`
  text-align: center;
  color: ${(props) => (props.changeColor ? "#ffffff" : "#464f60")};
  font-size: 12px;
  margin-top: 1px;
`;
const Days = styled.div`
  width: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.isSelected ? "#2e90fa" : "#d9d9d9")};
  padding: 4px;
  cursor: pointer;
`;
const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin-top: 40px;
  text-align: center;
  width: 300px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
  padding-bottom: 10px;
`;
const Title2 = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin-top: 40px;
  text-align: center;
  width: 230px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
  padding-bottom: 10px;
`;
const SmallInput = styled.input`
  border: 1px solid #464f604d;
  height: 40px;
  outline: none;
  font-size: 13px;
  text-align: center;
  transition: all 0.4s ease;
  color: #6a727f;
  width: 50px;
  cursor: pointer;
  border-radius: 4px;
  &:focus,
  &:active {
    border: 2px solid #157bea;
    outline: none;
  }
`;
const WrapCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 262px;
`;
const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #2e90fa;
  cursor: pointer;
`;
const Text = styled.div`
  font-size: 11px;
  color: #6a727f;
  width: 220px;
`;
const CheckCircle = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  accent-color: #4ed164;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  background-color: #fff;
  border: 1px solid #464f604d;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: #4ed164;
    border: 2px solid #4ed164;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 7px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -60%) rotate(45deg);
  }
`;
const Line2 = styled.div`
  height: 1px;
  width: 100%;
  background-color: #d9d9d9;
  margin-top: 15px;
  margin-bottom: 10px;
`;
const Line4 = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ecedef;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const InfoSection = styled.div`
  background-color: #eef5ff;
  width: 262px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;
const Image = styled.img`
  width: 17px;
  height: 17px;
`;
const InfoText = styled.div`
  color: #464f60;
  font-size: 11px;
  font-weight: 300;
  width: 235px;
`;
const Col3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  width: 230px;
  margin: 0px 30px;
`;
const Col4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  width: 230px;

  margin: 0px 0px;
`;
const Btn = styled.button`
  background-color: #2e90fa;
  padding: 12px 30px;
  border-radius: 8px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  margin-top: 9rem;
  margin-left: 7.5rem;
  width: 100px;
`;
const Wrap = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;
const Div = styled.div`
  /* width: 100%; */
  padding: 0px 10px;
  overflow-x: auto;
  /* height: 80vh; */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Line3 = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 1px;
`;
const BaseCurr = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #464f60;
  margin: 15px 15px;
  opacity: 0.8;
`;
const Subtext = styled.div`
  font-size: 12px;
  color: #90959f;
  width: 500px;
  font-weight: normal;
  margin-top: 4px;
`;

const Note = styled.div`
  background-color: #eef5ff;
  width: 450px;
  height: auto;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  margin: 20px 15px;
`;
const Text4 = styled.div`
  color: #90959f;
  font-size: 12px;
`;

const ModalTitle = styled.div`
  font-size: 12px;
  margin: 10px 0 0px 0px;
  padding-left: 10px 20px;
  text-align: left;
  color: #464f60;
  font-weight: bold;
  opacity: 0.8;
`;

const MDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledModal = styled(Modal)`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  /* z-index: 100000; */
  width: 100%;
  max-width: 400px;
  height: 53%;
  max-height: 90vh; /* Ensure the modal doesn't exceed the viewport height */
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 330px;
  gap: 10px;
  align-items: flex-start; /* Ensures text starts from top left */
`;
const HCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330px;
  /* margin-top: 20px; */
  gap: 10px;
`;
const MText = styled.text`
  font-size: 12px;
  font-weight: 500;
  color: #464f60;
  opacity: 0.5;

  margin: 5px 15px;
`;
const M2Text = styled.text`
  font-size: 12px;
  font-weight: 500;
  color: #464f60;
  opacity: 0.8;
  margin: 5px 15px;
  display: flex;

  text-align: left;
`;

const MainDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  gap: 12px;
`;

const LDiv = styled.div`
  display: flex;
`;
const LText = styled.div``;
const LSText = styled.div``;
const CompanySettings = () => {
  //   const handleCurrencyChange = (option) => {
  //     setSelectedCurrency(option);
  //     console.log(selectedCurrency);
  //     // Do something with the selected currency option
  //   };

  const [isModalOpenDT, setIsModalOpenDT] = useState(false);

  const keys = useSelector((state) => state.localization.keys);
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  const openModalDT = () => {
    setIsModalOpenDT(true);
  };

  // Function to close the modal
  const closeModalDT = () => {
    setIsModalOpenDT(false);
  };

  const data = [
    "COMPANY PROFILE",
    "LOCALIZATION",
    "TAX DETAILS",
    "BRANCHES",
    "SUBSCRIPTION",
    "UTILIZATION",
  ];
  const [activeTab, setActiveTab] = useState("COMPANY PROFILE");
  const tabChange = (tab) => {
    setActiveTab(tab);
    console.log(activeTab);
  };

  const [getVal, setGetVal] = useState("");

  const HandleValue = (value) => {
    setGetVal(value.target.innerText);
    console.log(getVal);
  };

  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    // Allow empty value, numbers, or a single period for decimal input
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setNumber(value);
      console.log(number);
    }
  };

  const dispatch = useDispatch();
  // const numberSeparator = useSelector((state) => state.number.NumberSeprator);

  const [selectedCDate, setSelectedCDate] = useState(new Date());
  // const dateFormat = useSelector((state) => state.dateFormat.dateFormat);

  const DateType = [
    { label: "Long Date", value: "Long Date" },
    { label: "Mid Date", value: "Mid Date" },
    { label: "Short Date", value: "Short Date" },
  ];

  ///////////////////////
  const [isDTFModalOpen, setIsDTFModalOpen] = useState(false);

  const dateType = useSelector((state) => state.dateType.type);
  const dateFormat = useSelector((state) => state.dateFormat.format);
  const dateSeparator = useSelector((state) => state.dateSeparator.separator);
  const timeFormat = useSelector((state) => state.timeFormat.format);

  const handleChangeTime = (selectedOption) => {
    if (selectedOption) {
      dispatch(setTimeFormat(selectedOption.value)); // Dispatch action to update time format in Redux
    }
  };
  const timeFormatOptions = [
    { label: "12-hour", value: "12-hour" },
    { label: "24-hour", value: "24-hour" },
  ];
  // Function to open the modal
  const openDTFModal = () => {
    setIsDTFModalOpen(true);
  };

  // Function to close the modal
  const closeDTFModal = () => {
    setIsDTFModalOpen(false);
  };

  const handleDTFSave = () => {
    console.log("Save clicked");
    closeDTFModal(); // Close modal after save
  };

  const handleDTFCancel = () => {
    closeDTFModal(); // Close modal on cancel
  };
  //////////////////////

  ///////////////////////////////////////

  const numberSeparator = useSelector((state) => state.number.NumberSeprator);
  const decimalSeparator = useSelector((state) => state.number.DecimalSeprator);
  const negativeSign = useSelector((state) => state.number.NegitiveNumber);
  const numberGrouping = useSelector((state) => state.number.NumberGrouping);
  const decimalPlacesQuantity = useSelector(
    (state) => state.number.DecimalPlacesQuantity
  );
  const decimalPlacesAmount = useSelector(
    (state) => state.number.DecimalPlacesAmount
  );

  const [isNModalOpen, setIsNModalOpen] = useState(false);
  const openNModal = () => {
    setIsNModalOpen(true);
  };

  // Function to close the modal
  const closeNModal = () => {
    setIsNModalOpen(false);
  };

  const handleNSave = () => {
    console.log("Save clicked");
    closeNModal(); // Close modal after save
  };

  const handleNCancel = () => {
    closeNModal(); // Close modal on cancel
  };
  const formatState = useSelector((state) => state.number); // Access your redux state here

  // Dropdown data for each setting
  const numberSeparatorOptions = [
    { label: ",", value: "," },
    { label: ".", value: "." },
  ];

  const decimalSeparatorOptions = [
    { label: ",", value: "," },
    { label: ".", value: "." },
  ];

  const negativeNumberOptions = [
    { label: "-", value: "-" },
    { label: "()", value: "()" },
  ];

  const numberGroupingOptions = [
    { label: "123,456,789", value: "123,456,789" },
    { label: "123456789", value: "123456789" },
    { label: "12,34,56,789", value: "12,34,56,789" },
  ];

  const decimalPlacesQuantityOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];

  const decimalPlacesAmountOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];
  //////////////////////////////////////////////
  const [isLModalOpen, setIsLModalOpen] = useState(false);
  const openLModal = () => {
    setIsLModalOpen(true);
  };

  // Function to close the modal
  const closeLModal = () => {
    setIsLModalOpen(false);
  };

  const handleLSave = () => {
    console.log("Save clicked");
    closeLModal(); // Close modal after save
  };

  const handleLCancel = () => {
    closeLModal(); // Close modal on cancel
  };

  /////////////////////////////////////////

  return (
    <Wrapper>
      {/* <NewScreensNav
        height={"33%"}
        first={"Finance & Accounting"}
        second={"Transaction Numbering"}
        third={"Cost Center"}
        fourth={"General Configuration"}
        fifth={"Activity"}
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
      /> */}

      <Wrap>
        {/* <SettingsNavigation /> */}
        <Head>
          <Header
            title={"COMPANY SETTINGS"}
            firstNav={keys.KEY0002}
            secNav={"Configurations"}
            thirdNav={"Company Settings"}
            navActive={
              activeTab === "LOCALIZATION"
                ? "Localization"
                : activeTab === "COMPANY PROFILE"
                ? "Company Profile"
                : activeTab === "TAX DETAILS"
                ? "Tax Details"
                : activeTab === "BRANCHES"
                ? "Branches"
                : activeTab === "SUBSCRIPTION"
                ? "Subscription"
                : activeTab === "UTILIZATION"
                ? "Utilization"
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
        <Div>
          {activeTab === "LOCALIZATION" ? (
            <div>
              {/* <div style={{ margin: "10px 0" }}>
                <TitleOfSection title={"FINANCE & ACCOUNTING SETUP"} />
              </div> */}

              <Body>
                {/* <div style={{ margin: "15px 0" }}>
                  <TitleOfSection title={"SYSTEM CURRENCY"} />
                </div> */}

                {/* <BaseCurr>
                  BASE CURRENCY
                  <Subtext>
                    Define the primary currency used for financial transactions
                    and reporting within the application.
                  </Subtext>
                </BaseCurr>
                <div
                  style={{
                    display: "flex",
                    margin: "20px 15px",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <SettingsCurrencyDropDown />
                </div>
                <Note>
                  <img
                    src={Info}
                    style={{ width: "16px", height: "16px" }}
                    alt="dqwd"
                  />
                  <Text4>
                    Once the base currency has been set, it can no longer be
                    modified.
                  </Text4>
                </Note> */}
                <div
                  style={{
                    marginTop: "15px",
                    marginBottom: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <TitleOfSection title={"LANGUAGE"} />
                  <AddNotesButton
                    title={"Update Language"}
                    icon={MdEdit}
                    onClick={openLModal}
                  />
                </div>
                <Line2 />
                <BaseCurr>
                  DEFAULT LANGUAGE
                  <Subtext>
                    Choose the primary language for the application's interface.
                    This ensures a consistent experience across the system.
                  </Subtext>
                </BaseCurr>
                <div style={{ margin: "0 15px" }}>
                  {isLModalOpen && (
                    <SettingsModal
                      title="LANGUAGE"
                      buttons={[
                        {
                          label: "SAVE",
                          primary: true,
                          onClick: handleLSave,
                        },
                        {
                          label: "CANCEL",
                          primary: false,
                          onClick: handleLCancel,
                        },
                      ]}
                      closeModal={handleLCancel}
                    >
                      <DropdownInput
                        Name={"Language"}
                        Padding={false}
                        setWidth={"DrawerWidth"}
                      />
                    </SettingsModal>
                  )}
                  <Section>
                    <HCon>
                      <MText>Language</MText>
                      <M2Text>English</M2Text>
                    </HCon>
                    <Line4 />
                  </Section>
                </div>

                <Note>
                  <img
                    src={Info}
                    style={{ width: "16px", height: "16px" }}
                    alt="dqwd"
                  />
                  <Text4>
                    Users can override it according to their preference.
                  </Text4>
                </Note>

                {/* /////////////////////////////////////////////////////////////////// */}

                <div
                  style={{
                    marginTop: "15px",
                    marginBottom: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <TitleOfSection title={"DATE & TIME FORMAT"} />
                  <AddNotesButton
                    title={"Update Format"}
                    icon={MdEdit}
                    onClick={openDTFModal}
                  />
                </div>
                <Line2 />
                <BaseCurr>
                  DATE SETTINGS
                  <Subtext>
                    Set the standard format for displaying dates and times
                    throughout the application.
                  </Subtext>
                </BaseCurr>
                <div
                  style={{
                    display: "flex",
                    margin: "15px",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {isDTFModalOpen && (
                    <SettingsModal
                      title="DATE & TIME FORMAT"
                      buttons={[
                        {
                          label: "SAVE",
                          primary: true,
                          onClick: handleDTFSave,
                        },
                        {
                          label: "CANCEL",
                          primary: false,
                          onClick: handleDTFCancel,
                        },
                      ]}
                      closeModal={handleDTFCancel}
                    >
                      <DateTypeSelector />
                      <DateSeparatorSelector />
                      <CustomDatePicker
                        selectedDate={selectedCDate}
                        onChange={setSelectedCDate}
                      />
                      <DropdownInput
                        Data={timeFormatOptions}
                        value={timeFormat}
                        onChange={handleChangeTime}
                        Name="Time Format"
                        setWidth={"DrawerWidth"}
                      />
                    </SettingsModal>
                  )}

                  {isNModalOpen && (
                    <SettingsModal
                      title="NUMBERS"
                      buttons={[
                        {
                          label: "SAVE",
                          primary: true,
                          onClick: handleNSave,
                        },
                        {
                          label: "CANCEL",
                          primary: false,
                          onClick: handleNCancel,
                        },
                      ]}
                      closeModal={handleNCancel}
                    >
                      {/* Pass any custom inputs or content here */}
                      <DropdownInput
                        Name="Number Separator"
                        Data={numberSeparatorOptions}
                        value={formatState.NumberSeprator}
                        setWidth={"DrawerWidth"}
                        onChange={(option) =>
                          dispatch(NumberValue(option?.value))
                        }
                      />

                      {/* Dropdown for Decimal Separator */}
                      <DropdownInput
                        Name="Decimal Separator"
                        Data={decimalSeparatorOptions}
                        value={formatState.DecimalSeprator}
                        setWidth={"DrawerWidth"}
                        onChange={(option) =>
                          dispatch(DecimalValue(option?.value))
                        }
                      />

                      {/* Dropdown for Negative Number */}
                      <DropdownInput
                        Name="Negative Number Format"
                        Data={negativeNumberOptions}
                        value={formatState.NegitiveNumber}
                        setWidth={"DrawerWidth"}
                        onChange={(option) =>
                          dispatch(NegitiveValue(option?.value))
                        }
                      />

                      {/* Dropdown for Number Grouping */}
                      <DropdownInput
                        Name="Number Grouping"
                        Data={numberGroupingOptions}
                        value={formatState.NumberGrouping}
                        setWidth={"DrawerWidth"}
                        onChange={(option) =>
                          dispatch(NumberGroupingValue(option?.value))
                        }
                      />

                      {/* Dropdown for Decimal Places in Quantity */}
                      <DropdownInput
                        Name="Decimal Places (Quantity)"
                        Data={decimalPlacesQuantityOptions}
                        value={formatState.DecimalPlacesQuantity}
                        setWidth={"DrawerWidth"}
                        onChange={(option) =>
                          dispatch(DecimalPlacesQuantityValue(option?.value))
                        }
                      />

                      {/* Dropdown for Decimal Places in Amount */}
                      <DropdownInput
                        Name="Decimal Places (Amount)"
                        Data={decimalPlacesAmountOptions}
                        value={formatState.DecimalPlacesAmount}
                        setWidth={"DrawerWidth"}
                        onChange={(option) =>
                          dispatch(DecimalPlacesAmountValue(option?.value))
                        }
                      />
                    </SettingsModal>
                  )}

                  <MainDataContainer>
                    <Section>
                      <HCon>
                        <MText>First Day of the Week</MText>
                        <M2Text>Monday</M2Text>
                      </HCon>
                      <Line4 />
                    </Section>
                    <Section>
                      <HCon>
                        <MText>Date Type</MText>
                        <M2Text>{dateType}</M2Text>
                      </HCon>
                      <Line4 />
                    </Section>
                    <Section>
                      <HCon>
                        <MText>Date Format</MText>
                        <M2Text>{dateFormat}</M2Text>
                      </HCon>
                      <Line4 />
                    </Section>
                    <Section>
                      <HCon>
                        <MText>Date Separator</MText>
                        <M2Text>
                          {dateSeparator === " " ? "Space ( )" : dateSeparator}
                        </M2Text>
                      </HCon>
                      <Line4 />
                    </Section>
                    <Section>
                      <HCon>
                        <MText>Time Format</MText>
                        <M2Text>{timeFormat}</M2Text>
                      </HCon>
                      <Line4 />
                    </Section>
                  </MainDataContainer>
                </div>
                <Note>
                  <img
                    src={Info}
                    style={{ width: "16px", height: "16px" }}
                    alt="dqwd"
                  />
                  <Text4>
                    Users can override it according to their preference.
                  </Text4>
                </Note>
                <div
                  style={{
                    marginTop: "15px",
                    marginBottom: "10px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <TitleOfSection title={"NUMBERS"} />
                  <AddNotesButton
                    title={"Update Numbering Format"}
                    icon={MdEdit}
                    onClick={openNModal}
                  />
                </div>

                <Line2 />
                <BaseCurr>
                  NUMBERING FORMAT
                  <Subtext>
                    Defines the structure and sequence of numbers used for
                    consistent and organized document or transaction
                    identification.
                  </Subtext>
                </BaseCurr>
                <MainDataContainer>
                  <Section>
                    <HCon>
                      <MText>Number Grouping</MText>
                      <M2Text>{numberGrouping}</M2Text>
                    </HCon>
                    <Line4 />
                  </Section>
                  <Section>
                    <HCon>
                      <MText>Negative Sign</MText>
                      <M2Text>
                        {negativeSign === "-" ? "Dash ( - )" : negativeSign}
                      </M2Text>
                    </HCon>
                    <Line4 />
                  </Section>
                  <Section>
                    <HCon>
                      <MText>Number Separator</MText>
                      <M2Text>
                        {numberSeparator === ","
                          ? "Comma (,)"
                          : numberSeparator}
                      </M2Text>
                    </HCon>
                    <Line4 />
                  </Section>
                </MainDataContainer>

                <BaseCurr>
                  DECIMAL PLACES
                  <Subtext>
                    Specifies the number of digits to display after the decimal
                    point for accurate numerical representation.
                  </Subtext>
                </BaseCurr>
                <MainDataContainer>
                  <Section>
                    <HCon>
                      <MText>Quantity Fields</MText>
                      <M2Text>{decimalPlacesQuantity}</M2Text>
                    </HCon>
                    <Line4 />
                  </Section>
                  <Section>
                    <HCon>
                      <MText>Amount Fields</MText>
                      <M2Text>{decimalPlacesAmount}</M2Text>
                    </HCon>
                    <Line4 />
                  </Section>
                  <Section>
                    <HCon>
                      <MText>Forex Rate Fields</MText>
                      <M2Text>2.00</M2Text>
                    </HCon>
                    <Line4 />
                  </Section>
                  <Section>
                    <HCon>
                      <MText>Decimal Separator</MText>
                      <M2Text>
                        {decimalSeparator === ","
                          ? "Comma (,)"
                          : decimalSeparator}
                      </M2Text>
                    </HCon>
                    <Line4 />
                  </Section>
                </MainDataContainer>
                <Note>
                  <img
                    src={Info}
                    style={{ width: "16px", height: "16px" }}
                    alt="dqwd"
                  />
                  <Text4>
                    Numbering Format and Decimal Places are one-time
                    configurations. Please ensure their accuracy before
                    finalizing.
                  </Text4>
                </Note>
              </Body>
            </div>
          ) : activeTab === "COMPANY PROFILE" ? (
            <CompanyProfile />
          ) : activeTab === "TAX DETAILS" ? (
            <TaxDetails />
          ) : activeTab === "BRANCHES" ? (
            <Branches />
          ) : activeTab === "SUBSCRIPTION" ? (
            <Subscription />
          ) : activeTab === "UTILIZATION" ? (
            <Utilization />
          ) : null}
        </Div>
      </Wrap>
    </Wrapper>
  );
};

export default CompanySettings;
