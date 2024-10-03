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
const BillMaterials = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const data = useMemo(() => [
    {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    },
    {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    },
    {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    },
    {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    },
    {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    },
    {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    },
    {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    },
     {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    }, {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    },
    {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    },
    {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    },
    {
      id: "1",
      itemservices: "OCEC008",
      revisionnumber: "Orchestrate E-Commerce",
      bomtype: "OCEC008",
      instockqty: "Ernser LLC",
      requiredqty: "New York",
      location: "United States of America",
      leadtime: "10 Jan 2023",
      unitofmeasure: "Gerardo Paucek",
      status: "Active",
      sellingprice: "Groind Frieght",
      cost: "$ 11,101.586",
      fgaccount: "$ 11,101.586",
      wipaccount: "Yes",
    },
  ], []);

  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "itemservices",
      header: "Item Services",
    },
    {
      accessorKey: "revisionnumber",
      header: "Revision Number",
    },
    {
      accessorKey: "bomtype",
      header: "BOM Type",
    },
    {
      accessorKey: "instockqty",
      header: "In Stock Quantity",
    },
    {
      accessorKey: "requiredqty",
      header: "Required Quantity",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "leadtime",
      header: "Lead Time",
    },
    {
      accessorKey: "unitofmeasure",
      header: "Unit of Measure",
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
      accessorKey: "fgaccount",
      header: "FG Account",
    },
    {
      accessorKey: "wipaccount",
      header: "WIP Account",
    }
  ], []);

  const keys = useSelector((state) => state.localization.keys);
  return (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100188}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1004}
            navActive={keys.KEY10054}
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

export default BillMaterials;
