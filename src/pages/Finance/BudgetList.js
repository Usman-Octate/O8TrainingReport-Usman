import React, { useState, useMemo } from "react";
import Header from "../../components/parts/Header";
import { Main, TopDivWrapper, TopDiv } from "../style";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import StatusButton from "../../components/buttons/StatusButton";
import AgGridTable2 from "../../components/Table/AgGridTable2";
import BudgetNew from "../../New-Screens/BudgetNew";
import CurrencyCell from "../../components/Table/CustomCells/CurrencyCell";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";

const initialState = {
  density: "xs",
  columnSizing: {
    id: 100,
  },
};

const BudgetList = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };

  const data = useMemo(
    () => [
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
      {
        id: "1",
        budgetcode: "BUD001",
        description: "Annual Marketing Budget",
        postingdate: "2024-01-01",
        budgettype: "Operational",
        currency: "USD",
        frequency: "Monthly",
        periodfrom: "2024-01-01",
        periodto: "2024-12-31",
        allowbudgettoexceed: "No",
        variance: 5000.0,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "budgetcode",
        header: "Budget Code",
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
        accessorKey: "budgettype",
        header: "Budget Type",
      },
      {
        accessorKey: "currency",
        header: "Currency",
      },
      {
        accessorKey: "frequency",
        header: "Frequency",
      },
      {
        accessorKey: "periodfrom",
        header: "Period From",
      },
      {
        accessorKey: "periodto",
        header: "Period To",
      },
      {
        accessorKey: "allowbudgettoexceed",
        header: "Allow Budget",
      },
      {
        accessorKey: "variance",
        header: "Variance",
      },
    ],
    []
  );

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
            title={keys.KEY100153}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1001}
            navActive={keys.KEY100134}
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
    <BudgetNew />
  );
};

export default BudgetList;
