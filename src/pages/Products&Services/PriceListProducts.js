import React, { useState,useMemo } from "react";
import Header from "../../components/parts/Header";
import StatusButton from "../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";
import ProductPriceNew from "../../New-Screens/ProductPriceNew";
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
      pricelistcode: "OCEC008",
      description: "Orchestrate E-Commerce",
      calculationtype: "OCEC008",
      percentage: "Ernser LLC",
      amount: "New York",
      lock: "United States of America",
      status: "10 Jan 2023",
      additionalfield: "Active",  // Adjust this if necessary
    },
    {
      id: "1",
      pricelistcode: "OCEC008",
      description: "Orchestrate E-Commerce",
      calculationtype: "OCEC008",
      percentage: "Ernser LLC",
      amount: "New York",
      lock: "United States of America",
      status: "10 Jan 2023",
      additionalfield: "Active",  // Adjust this if necessary
    },
    {
      id: "1",
      pricelistcode: "OCEC008",
      description: "Orchestrate E-Commerce",
      calculationtype: "OCEC008",
      percentage: "Ernser LLC",
      amount: "New York",
      lock: "United States of America",
      status: "10 Jan 2023",
      additionalfield: "Active",  // Adjust this if necessary
    },
    {
      id: "1",
      pricelistcode: "OCEC008",
      description: "Orchestrate E-Commerce",
      calculationtype: "OCEC008",
      percentage: "Ernser LLC",
      amount: "New York",
      lock: "United States of America",
      status: "10 Jan 2023",
      additionalfield: "Active",  // Adjust this if necessary
    },
    {
      id: "1",
      pricelistcode: "OCEC008",
      description: "Orchestrate E-Commerce",
      calculationtype: "OCEC008",
      percentage: "Ernser LLC",
      amount: "New York",
      lock: "United States of America",
      status: "10 Jan 2023",
      additionalfield: "Active",  // Adjust this if necessary
    },
    {
      id: "1",
      pricelistcode: "OCEC008",
      description: "Orchestrate E-Commerce",
      calculationtype: "OCEC008",
      percentage: "Ernser LLC",
      amount: "New York",
      lock: "United States of America",
      status: "10 Jan 2023",
      additionalfield: "Active",  // Adjust this if necessary
    },
    {
      id: "1",
      pricelistcode: "OCEC008",
      description: "Orchestrate E-Commerce",
      calculationtype: "OCEC008",
      percentage: "Ernser LLC",
      amount: "New York",
      lock: "United States of America",
      status: "10 Jan 2023",
      additionalfield: "Active",  // Adjust this if necessary
    },
    {
      id: "1",
      pricelistcode: "OCEC008",
      description: "Orchestrate E-Commerce",
      calculationtype: "OCEC008",
      percentage: "Ernser LLC",
      amount: "New York",
      lock: "United States of America",
      status: "10 Jan 2023",
      additionalfield: "Active",  // Adjust this if necessary
    },{
      id: "1",
      pricelistcode: "OCEC008",
      description: "Orchestrate E-Commerce",
      calculationtype: "OCEC008",
      percentage: "Ernser LLC",
      amount: "New York",
      lock: "United States of America",
      status: "10 Jan 2023",
      additionalfield: "Active",  // Adjust this if necessary
    },

    {
      id: "1",
      pricelistcode: "OCEC008",
      description: "Orchestrate E-Commerce",
      calculationtype: "OCEC008",
      percentage: "Ernser LLC",
      amount: "New York",
      lock: "United States of America",
      status: "10 Jan 2023",
      additionalfield: "Active",  // Adjust this if necessary
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
      accessorKey: "description",
      header: "Description",
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
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "lock",
      header: "Lock",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

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
            title={keys.KEY100189}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1004}
            navActive={keys.KEY10055}
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
    <ProductPriceNew />
  );
};

export default PriceList;
