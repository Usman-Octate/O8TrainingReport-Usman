import React, { useState, useMemo } from "react";
import StatusButton from "../../components/buttons/StatusButton";
import Header from "../../components/parts/Header";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";


const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}

const Location = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };



  const data = useMemo(() => [
    {
      id: "1",
      unitofmeasure: "Kilogram",
      abbreviation: "kg",
      category: "Weight",
      value: "1.00",
      operation: "Addition",
      basevalue: "1.00",
      baseunit: "kg",
      status: "Active",
      sellingprice: "$50.00",
      cost: "$30.00",
      properties: "Standard",
      weight: "2.00 kg",
      packaging: "Box"
    },
    {
      id: "1",
      unitofmeasure: "Kilogram",
      abbreviation: "kg",
      category: "Weight",
      value: "1.00",
      operation: "Addition",
      basevalue: "1.00",
      baseunit: "kg",
      status: "Active",
      sellingprice: "$50.00",
      cost: "$30.00",
      properties: "Standard",
      weight: "2.00 kg",
      packaging: "Box"
    },
    {
      id: "1",
      unitofmeasure: "Kilogram",
      abbreviation: "kg",
      category: "Weight",
      value: "1.00",
      operation: "Addition",
      basevalue: "1.00",
      baseunit: "kg",
      status: "Active",
      sellingprice: "$50.00",
      cost: "$30.00",
      properties: "Standard",
      weight: "2.00 kg",
      packaging: "Box"
    },
    {
      id: "1",
      unitofmeasure: "Kilogram",
      abbreviation: "kg",
      category: "Weight",
      value: "1.00",
      operation: "Addition",
      basevalue: "1.00",
      baseunit: "kg",
      status: "Active",
      sellingprice: "$50.00",
      cost: "$30.00",
      properties: "Standard",
      weight: "2.00 kg",
      packaging: "Box"
    },
    {
      id: "1",
      unitofmeasure: "Kilogram",
      abbreviation: "kg",
      category: "Weight",
      value: "1.00",
      operation: "Addition",
      basevalue: "1.00",
      baseunit: "kg",
      status: "Active",
      sellingprice: "$50.00",
      cost: "$30.00",
      properties: "Standard",
      weight: "2.00 kg",
      packaging: "Box"
    },
    {
      id: "1",
      unitofmeasure: "Kilogram",
      abbreviation: "kg",
      category: "Weight",
      value: "1.00",
      operation: "Addition",
      basevalue: "1.00",
      baseunit: "kg",
      status: "Active",
      sellingprice: "$50.00",
      cost: "$30.00",
      properties: "Standard",
      weight: "2.00 kg",
      packaging: "Box"
    },
    {
      id: "1",
      unitofmeasure: "Kilogram",
      abbreviation: "kg",
      category: "Weight",
      value: "1.00",
      operation: "Addition",
      basevalue: "1.00",
      baseunit: "kg",
      status: "Active",
      sellingprice: "$50.00",
      cost: "$30.00",
      properties: "Standard",
      weight: "2.00 kg",
      packaging: "Box"
    },
    {
      id: "1",
      unitofmeasure: "Kilogram",
      abbreviation: "kg",
      category: "Weight",
      value: "1.00",
      operation: "Addition",
      basevalue: "1.00",
      baseunit: "kg",
      status: "Active",
      sellingprice: "$50.00",
      cost: "$30.00",
      properties: "Standard",
      weight: "2.00 kg",
      packaging: "Box"
    },
  ], []);
  

  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "unitofmeasure",
      header: "Unit of Measure",
    },
    {
      accessorKey: "abbreviation",
      header: "Abbreviation",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "value",
      header: "Value",
    },
    {
      accessorKey: "operation",
      header: "Operation",
    },
    {
      accessorKey: "basevalue",
      header: "Base Value",
    },
    {
      accessorKey: "baseunit",
      header: "Base Unit",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    },
    {
      accessorKey: "sellingprice",
      header: "Selling Price",
    },
    {
      accessorKey: "cost",
      header: "Cost",
    },
    {
      accessorKey: "properties",
      header: "Properties",
    },
    {
      accessorKey: "weight",
      header: "Weight",
    },
    {
      accessorKey: "packaging",
      header: "Packaging",
    }
  ], []);
  const keys = useSelector((state) => state.localization.keys);
  return (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100187}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1004}
            navActive={keys.KEY10053}
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
            // onAddNewClick={handleScreenChange}
          />
        </TopDiv>
      </TopDivWrapper>
    </Main>
  );
};

export default Location;
