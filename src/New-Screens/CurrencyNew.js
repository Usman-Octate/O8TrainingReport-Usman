import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import { useSelector } from "react-redux";
import Auto from "../assets2/ChartOfAccountNew/InputAuto.svg";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import CalenderInput from "../components/Inputs/CalenderInput";
import DropdownInput from "../components/Inputs/DropdownInput";
import LongDescriptionInput from "../components/Inputs/LongDiscriptionInput";
import LargeButton from "../components/buttons/LargeButton";
import AddButton from "../components/buttons/AddButton";
import AgGridTable2 from "../components/Table/AgGridTable2";
import Dotscell from "../components/Table/CustomCells/Dots";
import JornalTables from "./Sections/JornalTables";
import StatusButton from "../components/buttons/StatusButton";
import ActivityPart from "./Sections/ActivityPart";
import TableDetails from "./Sections/TableDetails";
import CurrencyCell from "../components/Table/CustomCells/CurrencyCell";
import TitleOfSection from "./Components/TitleOfSection";
import NewScreensNav from "./Components/NewScreensNav";
import { CurrencyDelete, CurrencyUpdate, CurrencyUpload } from "../Api/Apis";
import dayjs from "dayjs";
import MyModal from "../components/Modals/MyModal";
import Toaster from "../components/Modals/Toaster";

const Grab = styled.div`
  /* display: flex; */
  width: 100%;
  /* height: 100vh; */
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
  height: 100vh;
`;
const Div = styled.div`
  height: 80vh;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 20px;
`;
const Wrap = styled.div`
  padding: 0 10px;
`;
const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin: 10px 10px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
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
const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5%;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #5f656f;
  width: 120px;
`;
const CheckSec = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-left: 15px;
`;
const InputSec = styled.div`
  display: flex;
  gap: 20px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Wrap2 = styled.div`
  margin-top: 20px;
`;
const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const CurrencyNew = ({
  onBreadcrumbClick,
  data,
  changeScreen,
  changeScreenOnDelete,
  changeScreenOnPost,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const numberSeparator = useSelector((state) => state.number.NumberSeprator);
  const Dots = () => {
    return <Dotscell />;
  };
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };

  const [rowData, setRowData] = useState([
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
    {
      id: "1",
      exchangedate: "Reverse Journal Entry",
      basecurrency: "Receipts 000237",
      basesign: "12 January 2024",
      baserate: "12 January 2024",
      exchangerate: "$ 2,932.00",
      currencyexchange: "Active",
      ratesource: "exchangerate.org",
    },
  ]);
  const [colDefs, setColDefs] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
      cellClass: "Center-Align",
    },
    {
      field: "id",
      headerName: "ID",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exhchangedate",
      headerName: "Exchange Date",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "basecurrency",
      headerName: "Base Currency",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
      cellRenderer: Currency,
    },
    {
      field: "basesign",
      headerName: "Base Sign",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "baserate",
      headerName: "Base Rate",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "exchangerate",
      headerName: "Exchange Rate",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "currencyexchange",
      headerName: "Currency Exchange",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "ratesource",
      headerName: "Rate Source",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      headerName: "Lock",
      checkboxSelection: true,
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);

  const [rowData3, setRowData3] = useState([
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
      status: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
      status: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
      status: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
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
      cellClass: "Center-Align",
    },
    {
      field: "blanketorderno",
      headerName: "Document No.",
      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "purchaser",
      headerName: "Document Name",

      // width: "160px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "startdate",
      headerName: "Issue Date",
      // width: "160px",
      cellClass: "Center-Align",
      headerClass: "All-header",
    },
    {
      field: "postingdate",
      headerName: "Expiry Date",
      // width: "140px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "noofpo",
      headerName: "Attached By",
      // width: "250px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
    {
      field: "poamount",
      headerName: "Notes",
      // width: "150px",
      headerClass: "All-header",
      cellClass: "Center-Align",
    },

    {
      field: "status",
      headerName: "Status",
      cellRenderer: Status,
      // width: "160px",
      sortable: false,
      headerClass: "All-header",
      cellClass: "Center-Align",
    },
  ]);

  const buttonsData = [
    { icon: "AddRow", title: "Add Row" },
    { icon: "Remove", title: "Remove" },
  ];

  const [currencyCode, setCurrencyCode] = useState("");
  const [currencyName, setCurrencyName] = useState("");
  const [currencySign, setCurrencySign] = useState("");
  // const [currencyDate, setCurrencyDate] = useState(dayjs());
  const [lossAccount, setLossAccount] = useState("");
  const [gainAccount, setGainAccount] = useState("");
  const [exchange, setExchange] = useState("");
  const [notes, setNotes] = useState("");
  const [defaultCur, setDefaultCur] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [accountAlready, setAccountAlready] = useState(false);
  const [addDataModal, setAddDataModal] = useState(false);
  const [duplicateToaster, setDuplicateToaster] = useState(false);
  const [duplicateClicked, setDuplicateClicked] = useState(false);
  const handleOnChange1 = (e) => {
    setLossAccount(e);
  };

  const handleOnChange2 = (e) => {
    setGainAccount(e);
  };

  const handleOnChange3 = () => {
    setDefaultCur(!defaultCur);
  };

  const HandleCode = (e) => {
    const value = e.target.value;
    setCurrencyCode(value);

    if (numberSeparator === ".") {
      const number = parseFloat(value.replace(/[^0-9.]/g, ""));
      if (!isNaN(number)) {
        const localeString = number.toLocaleString("en-US", {
          minimumFractionDigits: 0,
        });
        setCurrencyCode(localeString);
      } else {
        setCurrencyCode("");
      }
    }
  };

  useEffect(() => {
    if (data) {
      console.log("DATA=", data);
      const real = DropdownData2.find(
        (x) => x.value === data.realizedGainLossAccount
      );
      const unreal = DropdownData.find(
        (x) => x.value === data.unrealizedGainLossAccount
      );
      setLossAccount(unreal);
      setGainAccount(real);
      setCurrencyCode(data.currencyCode);
      setCurrencyName(data.currencyName);
      setCurrencySign(data.currencySign);
      setNotes(data.notes);
      setExchange(data.exchangeRate);
    }
  }, [data]);

  const SubmitInfo = async () => {
    if (data && !duplicateClicked) {
      const response = await CurrencyUpdate(
        data.id,
        currencyCode,
        currencyName,
        currencySign,
        lossAccount,
        gainAccount,
        exchange,
        notes,
        defaultCur
      );
      if (response) {
        console.log("update", response);
      }
    } else {
      try {
        const response = await CurrencyUpload(
          currencyCode,
          currencyName,
          currencySign,
          lossAccount,
          gainAccount,
          exchange,
          notes,
          defaultCur
        );

        if (response.status) {
          setAddDataModal(true);
          console.log(response.data);
        } else {
          alert("Error :" + response.data);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
      }
    }
  };

  const DropdownData = [
    { label: "Option1", value: "Option1" },
    { label: "Option2", value: "Option2" },
    { label: "Option3", value: "Option3" },
    { label: "Option4", value: "Option4" },
  ];

  const DropdownData2 = [
    { label: "Option1", value: "Option1" },
    { label: "Option2", value: "Option2" },
    { label: "Option3", value: "Option3" },
    { label: "Option4", value: "Option4" },
  ];
  const HandleDeleteButton = () => {
    if (data) {
      setIsModal(true);
    }
  };
  const confirmDelete = async () => {
    if (data) {
      const res = await CurrencyDelete(data.id);
      if (res.status) {
        changeScreenOnDelete();
      } else {
        alert("not deleted");
      }
    }
  };
  const CloseModal = () => {
    setIsModal(false);
  };
  const handleDuplicate = () => {
    setCurrencyCode("");
    setCurrencyName("");
    setDuplicateClicked(true);
    setDuplicateToaster(true);
  };
  const HandleNewButton = () => {
    setLossAccount("");
    setGainAccount("");
    setCurrencyCode("");
    setCurrencyName("");
    setCurrencySign("");
    setNotes("");
    setExchange("");
  };
  const handleContinue = () => {};
  const handleClose = () => {
    setDuplicateToaster(false);
    setAccountAlready(false);
  };
  const review = () => {
    setAddDataModal(false);
  };

  const seeList = () => {
    changeScreenOnPost();
  };
  return (
    <Grab>
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
      {addDataModal ? (
        <MyModal
          main={HandleNewButton}
          cancel={review}
          thirdButton={seeList}
          text={
            "Account has been created successfully. Do you want to create another account?"
          }
          heading={"Success"}
          mainText={"Add new"}
          cancelText={"View Record"}
          thirdText={"View list"}
        />
      ) : null}
      {isModal ? (
        <MyModal
          main={confirmDelete}
          cancel={CloseModal}
          text={
            "Are you sure you want to delete this record? This action cannot be undone."
          }
          heading={"Delete Confirmation"}
          mainText={"Delete"}
          cancelText={"Cancel"}
        />
      ) : null}

      <NewScreensNav
        height={"33%"}
        // OPTIONS
        first={"Currency Details"}
        second={"Table Details"}
        third={"Attachments"}
        fourth={"Activity"}
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
          title={"CURRENCY"}
          firstNav={"Home"}
          secNav={"Finance"}
          thirdNav={"Transaction"}
          fourthNav={"Currency List"}
          navActive={"Currency - New"}
          onBreadcrumbClick={onBreadcrumbClick}
        />
        <HeaderNewButtons
          clickScreenChange={SubmitInfo}
          State={true}
          deleteClick={HandleDeleteButton}
          duplicateClick={handleDuplicate}
          AddNewClick={HandleNewButton}
        />
      </Wrap>

      <Wrapper>
        {/* <AccountsSideNav
          title={"SECTION LIST"}
          first={"Currency Details"}
          second={"Table Details"}
          third={"Attachments"}
          fourth={"Activity"}
        /> */}
        <Div>
          <TitleOfSection title={"CURRENCY DETAILS"} />
          <Line />
          <Tag>
            <InputSec>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <ChartAccountInput
                  Name={"Currency Code"}
                  Hash="*"
                  Padding={true}
                  setWidth={"long"}
                  image={Auto}
                  value={currencyCode}
                  onChange={HandleCode}
                />
                <ChartAccountInput
                  Name={"Currency Name"}
                  Padding={true}
                  setWidth={"long"}
                  value={currencyName}
                  onChange={(e) => setCurrencyName(e.target.value)}
                />
                <ChartAccountInput
                  Name={"Currency Sign"}
                  Hash="*"
                  Padding={true}
                  setWidth={"long"}
                  value={currencySign}
                  onChange={(e) => setCurrencySign(e.target.value)}
                />
                <CheckSec>
                  <Text>Is Default Currency</Text>
                  <Checkbox type="checkbox" onClick={handleOnChange3} />
                </CheckSec>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <CalenderInput
                  Name={"Date"}
                  width={false}
                  // value={currencyDate}
                  // onChange={(e) => setCurrencyDate(e.target.value)}
                />
                <DropdownInput
                  Name={"Unrealized Gain/Loss Account"}
                  Padding={false}
                  setWidth={"long"}
                  value={lossAccount}
                  onChange={handleOnChange1}
                  Data={DropdownData}
                />
                <DropdownInput
                  Name={"Realized Gain/Loss Account"}
                  Padding={false}
                  setWidth={"long"}
                  value={gainAccount}
                  onChange={handleOnChange2}
                  Data={DropdownData2}
                />
                <ChartAccountInput
                  Name={"Average Exchange Rate"}
                  Padding={true}
                  setWidth={"long"}
                  value={exchange}
                  onChange={(e) => setExchange(e.target.value)}
                  insertFromRight={true}
                />
              </div>
              <div style={{ width: "20vw" }}>
                <LongDescriptionInput
                  Name={"Notes"}
                  setHeight={"comment"}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </InputSec>
            <LargeButton name={"Active"} />
          </Tag>
          <Wrap2>
            <TableDetails
              rowData={rowData}
              colDefs={colDefs}
              buttons={buttonsData}
              name={"TABLE DETAILS"}
            />
          </Wrap2>
          <JornalTables
            Icon={"AttachIcon"}
            Title={"Attach"}
            Name={"ATTACHMENTS"}
            ColData={colDefs3}
            RowData={rowData3}
            button={"true"}
            ShowButton={false}
          />
          <ActivityPart ShowButton={false} filterName={"currency"} />
        </Div>
      </Wrapper>
    </Grab>
  );
};

export default CurrencyNew;
//
//
