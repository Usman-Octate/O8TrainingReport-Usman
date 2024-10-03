import React, { useState, useMemo } from "react";
import StatusButton from "../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";
import Header from "../../components/parts/Header";
import PricelistNew from "../../New-Screens/PricelistNew";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";

const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}

const PriceList = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };


  const data = useMemo(() => [
    {
      id: "1",
      pricelistcode: "PL001",
      pricelistname: "Standard Price List",
      postingdate: "2024-01-15",
      lastupdateon: "2024-06-10",
      calculationbasedon: "Product Cost",
      calculationtype: "Markup",
      percentage: "10%",
      status: "Active",
      amount: 1200,
      notes: "Applied to all standard products."
    },
    {
      id: "1",
      pricelistcode: "PL001",
      pricelistname: "Standard Price List",
      postingdate: "2024-01-15",
      lastupdateon: "2024-06-10",
      calculationbasedon: "Product Cost",
      calculationtype: "Markup",
      percentage: "10%",
      status: "Active",
      amount: 1200,
      notes: "Applied to all standard products."
    },
    {
      id: "1",
      pricelistcode: "PL001",
      pricelistname: "Standard Price List",
      postingdate: "2024-01-15",
      lastupdateon: "2024-06-10",
      calculationbasedon: "Product Cost",
      calculationtype: "Markup",
      percentage: "10%",
      status: "Active",
      amount: 1200,
      notes: "Applied to all standard products."
    },
    {
      id: "1",
      pricelistcode: "PL001",
      pricelistname: "Standard Price List",
      postingdate: "2024-01-15",
      lastupdateon: "2024-06-10",
      calculationbasedon: "Product Cost",
      calculationtype: "Markup",
      percentage: "10%",
      status: "Active",
      amount: 1200,
      notes: "Applied to all standard products."
    },
    {
      id: "1",
      pricelistcode: "PL001",
      pricelistname: "Standard Price List",
      postingdate: "2024-01-15",
      lastupdateon: "2024-06-10",
      calculationbasedon: "Product Cost",
      calculationtype: "Markup",
      percentage: "10%",
      status: "Active",
      amount: 1200,
      notes: "Applied to all standard products."
    },

    {
      id: "1",
      pricelistcode: "PL001",
      pricelistname: "Standard Price List",
      postingdate: "2024-01-15",
      lastupdateon: "2024-06-10",
      calculationbasedon: "Product Cost",
      calculationtype: "Markup",
      percentage: "10%",
      status: "Active",
      amount: 1200,
      notes: "Applied to all standard products."
    },
    {
      id: "1",
      pricelistcode: "PL001",
      pricelistname: "Standard Price List",
      postingdate: "2024-01-15",
      lastupdateon: "2024-06-10",
      calculationbasedon: "Product Cost",
      calculationtype: "Markup",
      percentage: "10%",
      status: "Active",
      amount: 1200,
      notes: "Applied to all standard products."
    },
    {
      id: "1",
      pricelistcode: "PL001",
      pricelistname: "Standard Price List",
      postingdate: "2024-01-15",
      lastupdateon: "2024-06-10",
      calculationbasedon: "Product Cost",
      calculationtype: "Markup",
      percentage: "10%",
      status: "Active",
      amount: 1200,
      notes: "Applied to all standard products."
    },
  ], []);

  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "pricelistcode",
      header: "Price List Code",
    },
    {
      accessorKey: "pricelistname",
      header: "Price List Name",
    },
    {
      accessorKey: "postingdate",
      header: "Posting Date",
    },
    {
      accessorKey: "lastupdateon",
      header: "Last Update On",
    },
    {
      accessorKey: "calculationbasedon",
      header: "Calcul Based On",
    },
    {
      accessorKey: "calculationtype",
      header: "Calculation Type",
    },
    {
      accessorKey: "percentage",
      header: "Percentage",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "notes",
      header: "Notes",
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
            title={keys.KEY100162}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1002}
            navActive={keys.KEY10025}
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
    <PricelistNew />
  );
};

export default PriceList;
//
//
