import React, { useState, useMemo } from "react";
import Header from "../../components/parts/Header";
import StatusButton from "../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";
import BankAccountNew from "../../New-Screens/BankAccountNew";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";

const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}

const BankingAccounts = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const data = useMemo(() => [
    {
      id: "1",
      bankcode: "OCEC008",
      bankname: "Orchestrate E-Commerce",
      entitytype: "OCEC008",
      iban: "Ernser LLC",
      bankaccountnumber: "New York",
      branch: "United States of America",
      isdefault: "10 Jan 2023",
      status: "Active",
      currency: "USD",
      defaultglaccount: "YES",
      bankbalance: "$2,7343"
    },
    {
      id: "1",
      bankcode: "OCEC008",
      bankname: "Orchestrate E-Commerce",
      entitytype: "OCEC008",
      iban: "Ernser LLC",
      bankaccountnumber: "New York",
      branch: "United States of America",
      isdefault: "10 Jan 2023",
      status: "Active",
      currency: "USD",
      defaultglaccount: "YES",
      bankbalance: "$2,7343"
    },
    {
      id: "1",
      bankcode: "OCEC008",
      bankname: "Orchestrate E-Commerce",
      entitytype: "OCEC008",
      iban: "Ernser LLC",
      bankaccountnumber: "New York",
      branch: "United States of America",
      isdefault: "10 Jan 2023",
      status: "Active",
      currency: "USD",
      defaultglaccount: "YES",
      bankbalance: "$2,7343"
    },
    {
      id: "1",
      bankcode: "OCEC008",
      bankname: "Orchestrate E-Commerce",
      entitytype: "OCEC008",
      iban: "Ernser LLC",
      bankaccountnumber: "New York",
      branch: "United States of America",
      isdefault: "10 Jan 2023",
      status: "Active",
      currency: "USD",
      defaultglaccount: "YES",
      bankbalance: "$2,7343"
    },
    {
      id: "1",
      bankcode: "OCEC008",
      bankname: "Orchestrate E-Commerce",
      entitytype: "OCEC008",
      iban: "Ernser LLC",
      bankaccountnumber: "New York",
      branch: "United States of America",
      isdefault: "10 Jan 2023",
      status: "Active",
      currency: "USD",
      defaultglaccount: "YES",
      bankbalance: "$2,7343"
    },
    {
      id: "1",
      bankcode: "OCEC008",
      bankname: "Orchestrate E-Commerce",
      entitytype: "OCEC008",
      iban: "Ernser LLC",
      bankaccountnumber: "New York",
      branch: "United States of America",
      isdefault: "10 Jan 2023",
      status: "Active",
      currency: "USD",
      defaultglaccount: "YES",
      bankbalance: "$2,7343"
    },
    {
      id: "1",
      bankcode: "OCEC008",
      bankname: "Orchestrate E-Commerce",
      entitytype: "OCEC008",
      iban: "Ernser LLC",
      bankaccountnumber: "New York",
      branch: "United States of America",
      isdefault: "10 Jan 2023",
      status: "Active",
      currency: "USD",
      defaultglaccount: "YES",
      bankbalance: "$2,7343"
    }, {
      id: "1",
      bankcode: "OCEC008",
      bankname: "Orchestrate E-Commerce",
      entitytype: "OCEC008",
      iban: "Ernser LLC",
      bankaccountnumber: "New York",
      branch: "United States of America",
      isdefault: "10 Jan 2023",
      status: "Active",
      currency: "USD",
      defaultglaccount: "YES",
      bankbalance: "$2,7343"
    },
    
    
  ], []);

  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "bankcode",
      header: "Bank Code",
    },
    {
      accessorKey: "bankname",
      header: "Bank Name",
    },
    {
      accessorKey: "entitytype",
      header: "Entity Type",
    },
    {
      accessorKey: "iban",
      header: "IBAN",
    },
    {
      accessorKey: "bankaccountnumber",
      header: "Bank Account Number",
    },
    {
      accessorKey: "branch",
      header: "Branch",
    },
    {
      accessorKey: "isdefault",
      header: "Is Default",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    },
    {
      accessorKey: "currency",
      header: "Currency",
    },
    {
      accessorKey: "defaultglaccount",
      header: "Default GL Account",
    },
    {
      accessorKey: "bankbalance",
      header: "Bank Balance",
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
            title={keys.KEY100191}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1005}
            navActive={keys.KEY10065}
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
    <BankAccountNew />
  );
};

export default BankingAccounts;
