import React, { useEffect, useState } from "react";
import TitleOfSection from "../../../New-Screens/Components/TitleOfSection";
import styled from "styled-components";
import SettingsTables from "../../../New-Screens/Sections/SettingsTables";
import ActivityPart from "../../../New-Screens/Sections/ActivityPart";
import SettingsCurrencyDropDown from "../../../components/DatePicker/SettingsCurrencyInput";
import Info from "../../../assets2/ButtonIcons/InformationIcon.svg";
import HeadlessTableTN from "../../../New-Screens/Components/MantineTable/HeadlessTableTN";
import { useSelector } from "react-redux";
import AddNotesButton from "../../../New-Screens/Components/MantineTable/Buttons/AddNotesButton";
import { FaRegEdit } from "react-icons/fa";
import UpdateCurrency from "../../../components/Modals/FinanceSettings/UpdateCurrency";
import DefineCurrency from "../../../components/Modals/FinanceSettings/DefineCurrency";
import {
  fetchChartOfAccounts,
  GetBaseCurrency,
  GetDefineCurrency,
} from "../../../Api/Apis";
import RealGain from "../../../components/Table/CustomCells/RealGain";
import TypeDropdown from "../../../components/Inputs/TableWithPopoverDropdown";
import Toaster from "../../../components/Modals/Toaster";
import { updateCurrency } from "../../../redux/appReducer/CurrencySlice";

const Wrapper = styled.div`
  padding: 0 15px;
`;
const Body = styled.div``;
const Line3 = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 1px;
`;
const BaseCurr = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #464f60;
  margin: 15px 15px;
`;
const Subtext = styled.div`
  font-size: 12px;
  color: #90959f;
  width: 500px;
  font-weight: normal;
  margin-top: 4px;
`;

const Note = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 450px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  margin: 20px 15px;
`;
const Text4 = styled.div`
  color: #90959f;
  font-size: 12px;
`;
const Currency = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  border-bottom: 1px solid #ecedef;
  padding: 15px 0;
`;
const Title = styled.div`
  color: #a2a7af;
  font-size: 12px;
  font-weight: normal;
`;
const Data = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #6a727f;
`;
const FullFoam = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #90959f;
`;

const CurrencySetup = () => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const SelectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  // State to hold dropdown values for each row, keyed by row id or index

  // Your column data
  const columnsData = [
    {
      accessorKey: "sign",
      header: "Sign",
      size: 20,
    },
    {
      accessorKey: "code",
      header: "Currency Code",
      size: 20,
    },
    {
      accessorKey: "currencyName",
      header: "Currency Name",
      mantineTableBodyCellProps: (cell) => ({
        style: {
          fontSize: "12px",
          color: "#464f60cc",
          textAlign: "center",
          width: "100px",
          borderRight: "1px solid #F2F2F2",
          borderTop: "1px solid #F2F2F2",
          borderBottom: "1px solid #F2F2F2",
        },
      }),
    },
    {
      accessorKey: "decimalPlaces",
      header: "Decimal Places",
      size: 20,
    },
    {
      accessorKey: "unrealizedGainLossAccount",
      header: "Unrealized Gain/Loss Account",

      mantineTableBodyCellProps: (cell) => ({
        style: {
          fontSize: "12px",
          color: "#464f60cc",
          textAlign: "center",
          width: "100px",
          borderRight: "1px solid #F2F2F2",
          borderTop: "1px solid #F2F2F2",
          borderBottom: "1px solid #F2F2F2",
        },
      }),
    },
    {
      accessorKey: "realizedGainLossAccount",
      header: "Realized Gain/Loss Account",

      mantineTableBodyCellProps: (cell) => ({
        style: {
          fontSize: "12px",
          color: "#464f60cc",
          textAlign: "center",
          width: "100px",
          borderRight: "1px solid #F2F2F2",
          borderTop: "1px solid #F2F2F2",
          borderBottom: "1px solid #F2F2F2",
        },
      }),
    },
  ];

  const [rowdata, setRowdata] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currencyData, setCurrencyData] = useState();
  const [secModal, setSecModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [isState, setIsState] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [currencyFullfoam, setCurrencyFullfoam] = useState();
  const [currencyShortfoam, setCurrencyShortfoam] = useState();

  const HandleModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const Value = (event) => {
    setCurrencyData(event);
  };

  const HandleSecModal = () => {
    setSecModal(true);
  };
  const HandleClose = () => {
    setSecModal(false);
  };

  const ChangeState = () => {
    setIsState(true);
  };

  // Get Currency Data
  const CurrencyData = async () => {
    const Response = await GetDefineCurrency();
    if (Response) {
      const Data = Response.data;
      const FilteredData = Data.filter((x) => x.status === true);
      setRowdata(FilteredData);
      // var temp = [];
      // temp = FilteredData.map((x) => x.currencyName);
      // setCurrencyFullfoam(temp);
      // var temp2 = [];
      // temp = FilteredData.map((x) => x.code);
      setCurrencyShortfoam(FilteredData);
      setModalData(Response.data);
    } else {
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    CurrencyData();
  }, [isState]);

  const ShowToaster = () => {
    setShowToaster(true);
  };
  const closeToaster = () => {
    setShowToaster(false);
  };

  // /////////////////////////////////////////////////////GET BASE CURRENCY/////////////////////////////////////////////////

  const [currentData, setCurrentData] = useState({});
  const [reloadPage, setReloadPage] = useState(false);

  const BaseCurrency = async () => {
    const Response = await GetBaseCurrency();

    if (Response) {
      console.log([Response.data], "jiuhiuhui");
      setCurrentData(Response.data);
    } else {
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    BaseCurrency();
  }, [reloadPage]);
  const changestate = () => {
    setReloadPage(true);
  };

  return (
    <Wrapper>
      {showModal ? (
        <UpdateCurrency
          cancel={closeModal}
          CurrencyValue={Value}
          save={closeModal}
          currencyOptionData={currencyShortfoam}
          reload={changestate}
        />
      ) : null}
      {showToaster ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"Define Currency has been updated successfully."}
          handleClose={closeToaster}
          duration={4000}
        />
      ) : null}
      {secModal ? (
        <DefineCurrency
          save={HandleClose}
          cancel={HandleClose}
          TableData={modalData}
          ReloadPage={ChangeState}
          SuccessToaster={ShowToaster}
        />
      ) : null}
      <Body>
        <div
          style={{
            margin: "15px 0",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <TitleOfSection title={"SYSTEM CURRENCY"} />
          <AddNotesButton
            onClick={HandleModal}
            icon={FaRegEdit}
            title={"Update Base Currency"}
          />
        </div>
        <Line3 />
        <BaseCurr>
          BASE CURRENCY
          <Subtext>
            Define the primary currency used for financial transactions and
            reporting within the application.
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
          <Currency>
            <Title>Currency</Title>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                gap: "5px",
              }}
            >
              <Data>{currentData.currencyCode}</Data>
              <FullFoam>{currentData.currencyName}</FullFoam>
            </div>
          </Currency>
        </div>
        <Note bgColor={themeKeys.hover2}>
          <img
            src={Info}
            style={{ width: "16px", height: "16px" }}
            alt="dqwd"
            color={themeKeys.primary}
          />
          <Text4 txtColor={themeKeys.primary}>
            Once the base currency has been set, it can no longer be modified.
          </Text4>
        </Note>
        <HeadlessTableTN
          columns={columnsData}
          data={rowdata}
          currencyButton={true}
          TitleButton={true}
          titleName={"DEFINE CURRENCY"}
          rowSelection={false}
          expandingRow={false}
          editiing={false}
          currencyClick={HandleSecModal}
        />
        <ActivityPart ShowButton={false} Val={true} />
      </Body>
    </Wrapper>
  );
};

export default CurrencySetup;
