import React, { useState,useMemo } from "react";
import Header from "../../components/parts/Header";
import { Main, TopDivWrapper, TopDiv } from "../style";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import StatusButton from "../../components/buttons/StatusButton";
import CashflowNew from "../../New-Screens/CashflowNew";
import CurrencyCell from "../../components/Table/CustomCells/CurrencyCell";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";

const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}

const CashFlow = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };
  const data = useMemo(() => [
    {
      id: "1",
      forecastcode: "FCST2024",
      description: "Q1 Sales Forecast",
      postingdate: "2024-01-01",
      transactiontype: "Sales",
      currency: "USD",
      periodtype: "Quarterly",
      periodfrom: "2024-01-01",
      periodto: "2024-03-31"
    }
  ], []);

  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "forecastcode",
      header: "Forecast Code",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "postingdate",
      header: "Posting Date",
    },
    {
      accessorKey: "transactiontype",
      header: "Transaction Type",
    },
    {
      accessorKey: "currency",
      header: "Currency",
    },
    {
      accessorKey: "periodtype",
      header: "Period Type",
    },
    {
      accessorKey: "periodfrom",
      header: "Period From",
    },
    {
      accessorKey: "periodto",
      header: "Period To",
    }
  ], []);

  const keys = useSelector((state) => state.localization.keys);
  const [screen, setScreen] = useState(1);
  const handleScreenChange = () => {
    console.log("as");
    setScreen(2);
  };
  return screen === 1 ? (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100154}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1001}
            navActive={keys.KEY10015}
          />
           <MRTTableListScreens
            columns={columns}
            data={data}
            LeftFirst="netTotal"
            LeftSecond="netTotalFC"
            RightFirst="totalAmount"
            RightSecond="totalAmountFC"
            FirstTitle="Total"
            SecondTitle="Total Amount"
            initialState={initialState}
            onAddNewClick={handleScreenChange}
          />
        </TopDiv>
      </TopDivWrapper>
    </Main>
  ) : (
    <CashflowNew />
  );
};

export default CashFlow;
