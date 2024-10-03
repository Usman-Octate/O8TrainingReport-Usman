import React, { useState, useMemo } from "react";
import Header from "../../components/parts/Header";
import StatusButton from "../../components/buttons/StatusButton";
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

const Discount = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };


  const data = useMemo(() => [
    {
      id: "1",
      discountcode: "OCEC008",
      discountname: "Orchestrate E-Commerce",
      discounttype: "OCEC008",
      discountby: "Ernser LLC",
      startdate: "New York",
      enddate: "United States of America",
      percentage: "10 Jan 2023",
      quantity: "100",
      status: "Active",
    },
    {
      id: "1",
      discountcode: "OCEC008",
      discountname: "Orchestrate E-Commerce",
      discounttype: "OCEC008",
      discountby: "Ernser LLC",
      startdate: "New York",
      enddate: "United States of America",
      percentage: "10 Jan 2023",
      quantity: "100",
      status: "Active",
    },
    {
      id: "1",
      discountcode: "OCEC008",
      discountname: "Orchestrate E-Commerce",
      discounttype: "OCEC008",
      discountby: "Ernser LLC",
      startdate: "New York",
      enddate: "United States of America",
      percentage: "10 Jan 2023",
      quantity: "100",
      status: "Active",
    },
    {
      id: "1",
      discountcode: "OCEC008",
      discountname: "Orchestrate E-Commerce",
      discounttype: "OCEC008",
      discountby: "Ernser LLC",
      startdate: "New York",
      enddate: "United States of America",
      percentage: "10 Jan 2023",
      quantity: "100",
      status: "Active",
    },
    {
      id: "1",
      discountcode: "OCEC008",
      discountname: "Orchestrate E-Commerce",
      discounttype: "OCEC008",
      discountby: "Ernser LLC",
      startdate: "New York",
      enddate: "United States of America",
      percentage: "10 Jan 2023",
      quantity: "100",
      status: "Active",
    },
    {
      id: "1",
      discountcode: "OCEC008",
      discountname: "Orchestrate E-Commerce",
      discounttype: "OCEC008",
      discountby: "Ernser LLC",
      startdate: "New York",
      enddate: "United States of America",
      percentage: "10 Jan 2023",
      quantity: "100",
      status: "Active",
    }, 
    {
      id: "1",
      discountcode: "OCEC008",
      discountname: "Orchestrate E-Commerce",
      discounttype: "OCEC008",
      discountby: "Ernser LLC",
      startdate: "New York",
      enddate: "United States of America",
      percentage: "10 Jan 2023",
      quantity: "100",
      status: "Active",
    },

  ], []);
  

  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "discountcode",
      header: "Discount Code",
    },
    {
      accessorKey: "discountname",
      header: "Discount Name",
    },
    {
      accessorKey: "discounttype",
      header: "Discount Type",
    },
    {
      accessorKey: "discountby",
      header: "Discount By",
    },
    {
      accessorKey: "startdate",
      header: "Start Date",
    },
    {
      accessorKey: "enddate",
      header: "End Date",
    },
    {
      accessorKey: "percentage",
      header: "Percentage",
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    }
  ], []);


  
  const keys = useSelector((state) => state.localization.keys);
  return (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100190}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1004}
            navActive={keys.KEY10056}
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

export default Discount;
