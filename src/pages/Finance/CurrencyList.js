import React, { useEffect, useState } from "react";
import Header from "../../components/parts/Header";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";
import RealGain from "../../components/Table/CustomCells/RealGain";
import CurrencyNew from "../../New-Screens/CurrencyNew";
import { GetCurrency, GetDefineCurrency } from "../../Api/Apis";
import Toaster from "../../components/Modals/Toaster";
import "../../components/Loader/Loader.css";
const CurrencyList = ({ onBreadcrumbClick }) => {
  const [selectedData, setSelectedData] = useState("");
  const numberSeparator = useSelector((state) => state.number.NumberSeprator);
  const [showToasterDelete, setShowToasterDelete] = useState(false);
  const [showToasterPosted, setShowToasterPosted] = useState(false);
  const GainValue = (p) => {
    return <RealGain value={p.value} />;
  };

  const [rowData, setRowData] = useState([]);

  const [colDefs, setColDefs] = useState([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: "60px",
      resizable: false,
      filter: false,
      headerClass: "id-cell",
    },
    {
      field: "id",
      headerName: "ID",
      width: "180px",
      headerClass: "All-header",
    },
    {
      field: "sign",
      headerName: "Sign",
      width: "180px",
      headerClass: "All-header",
    },
    {
      field: "code",
      headerName: "Currency Code",
      width: "160px",
      headerClass: "All-header",
    },
    {
      field: "currencyName",
      headerName: "Currency Name",
      width: "120px",
      headerClass: "All-header",
    },
    {
      field: "isDefaultCurrency",
      headerName: "Is Default",
      width: "130px",
      headerClass: "All-header",
    },
    {
      field: "decimalPlaces",
      headerName: "Decimal Places",
      width: "140px",
      headerClass: "All-header",
    },
    {
      field: "unrealizedGainLossAccount",
      headerName: "Unrealized Gain/Loss Account",
      headerClass: "All-header",
      cellRenderer: GainValue,
    },
    {
      field: "realizedGainLossAccount",
      headerName: "Realized Gain/Loss Account",
      headerClass: "All-header",
      cellRenderer: GainValue,
    },
  ]);
  const [loading, setLoading] = useState(true);
  // const fetchCurrencyData = async () => {
  //   try {
  //     const data = await GetCurrency();
  //     setRowData(data.data);
  //     if (numberSeparator === ".") {
  //       const temp = data.data.map((x) => {
  //         console.log(x.currencyCode, "cewfwefewfwef");
  //         console.log(Number(x.exchangeRate).toLocaleString(), "ce");

  //         // const formatcurrencyCode = Number(x.currencyCode).toLocaleString(
  //         //   "en-US",
  //         //   { minimumFractionDigits: 0 }
  //         // );
  //         const formatexchange = Number(x.exchangeRate).toLocaleString();
  //         const formatID = Number(x.id).toLocaleString();
  //         return {
  //           ...x,
  //           // currencyCode: formatcurrencyCode,
  //           exchangeRate: formatexchange,
  //           id: formatID,
  //         };
  //       });
  //       setRowData(temp);
  //     } else if (numberSeparator === ",") {
  //       const temp = data.data.map((x) => {
  //         console.log(x.currencyCode, "cewfwefewfwef");
  //         console.log(Number(x.exchangeRate).toLocaleString(), "ce");

  //         // const formatcurrencyCode = Number(x.currencyCode).toLocaleString(
  //         //   "en-US",
  //         //   { minimumFractionDigits: 0 }
  //         // );
  //         const formatexchange = Number(x.exchangeRate).toLocaleString();
  //         const formatID = Number(x.id).toLocaleString();
  //         return {
  //           ...x,
  //           // currencyCode: formatcurrencyCode,
  //           exchangeRate: formatexchange,
  //           id: formatID,
  //         };
  //       });
  //       setRowData(temp);
  //     }
  //     console.log(data.data);
  //     // You can optionally set state with the fetched data here
  //   } catch (error) {
  //     console.error("Error fetching currency data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const CurrencyData = async () => {
    const Response = await GetDefineCurrency();
    if (Response) {
      const Data = Response.data;
      const FilteredData = Data.filter((x) => x.status === true);
      setRowData(FilteredData);
      setLoading(false);
    } else {
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    CurrencyData();
  }, []);

  const keys = useSelector((state) => state.localization.keys);
  const [screen, setScreen] = useState(1);
  const handleScreeChange = () => {
    setSelectedData(null);
    setScreen(2);
  };
  const handleEditButton = () => {
    setScreen(2);
  };
  const selectedRowData = (data) => {
    setSelectedData(data.data);
    console.log(data.data);
  };
  const handleDoubleClick = () => {
    setScreen(2);
  };
  const changeScreen = () => {
    setScreen(1);
    GetDefineCurrency();
  };
  const handleCloseToaster = () => {
    setShowToasterDelete(false);
  };
  const changeScreenOnDelete = () => {
    setScreen(1);
    setShowToasterDelete(true);
    GetDefineCurrency();
    console.log("Deleted");
  };
  const changeScreenOnPost = () => {
    setScreen(1);
    setShowToasterPosted(true);
    GetDefineCurrency();
    console.log("postone");
  };
  return screen === 1 ? (
    <Main>
      {showToasterDelete ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"The account has been deleted."}
          handleClose={handleCloseToaster}
          duration={4000}
        />
      ) : null}
      {showToasterPosted ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"The account has been created successfully."}
          handleClose={handleCloseToaster}
          duration={4000}
        />
      ) : null}
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100152}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1001}
            navActive={keys.KEY100133}
            onBreadcrumbClick={onBreadcrumbClick}
          />
          {loading ? (
            <div className="loader-container" style={{ height: "100vh" }}>
              <span className="loader"></span>
            </div>
          ) : (
            <AgGridTable
              rowData={rowData}
              colDefs={colDefs}
              header={true}
              Setheight={true}
              SelectRow={selectedRowData}
              clickScreenChange={() => handleScreeChange()}
              handleEditButton={() => handleEditButton()}
              onRowDoubleClick={handleDoubleClick}
            />
          )}
        </TopDiv>
      </TopDivWrapper>
    </Main>
  ) : (
    <CurrencyNew
      onBreadcrumbClick={onBreadcrumbClick}
      data={selectedData}
      changeScreen={changeScreen}
      changeScreenOnDelete={changeScreenOnDelete}
      changeScreenOnPost={changeScreenOnPost}
    />
  );
};

export default CurrencyList;
