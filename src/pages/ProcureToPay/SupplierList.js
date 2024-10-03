import React, { useState, useMemo } from "react";
import Header from "../../components/parts/Header";
import StatusButton from "../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";

import SupplierListNew from "../../New-Screens/SupplierListNew";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";

const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}

const SupplierList = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };

  const data = useMemo(() => [
    {
      id: "1",
      suppliercode: "SUP001",
      suppliername: "Global Suppliers Inc.",
      onboardingdate: "2024-01-15",
      currency: "USD",
      salesagent: "John Doe",
      pricelist: "Standard List",
      deliverytype: "Courier",
      suppliergroup: "Group A",
      accountcode: "ACC123",
      status: "Active",
      emailaddress: "contact@globalsuppliers.com",
      phonenumber: "+1234567890",
      mobilenumber: "+0987654321"
    }
  ], []);

  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "suppliercode",
      header: "Supplier Code",
    },
    {
      accessorKey: "suppliername",
      header: "Supplier Name",
    },
    {
      accessorKey: "onboardingdate",
      header: "Onboarding Date",
    },
    {
      accessorKey: "currency",
      header: "Currency",
    },
    {
      accessorKey: "salesagent",
      header: "Sales Agent",
    },
    {
      accessorKey: "pricelist",
      header: "Price List",
    },
    {
      accessorKey: "deliverytype",
      header: "Delivery Type",
    },
    {
      accessorKey: "suppliergroup",
      header: "Supplier Group",
    },
    {
      accessorKey: "accountcode",
      header: "Account Code",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    },
    {
      accessorKey: "emailaddress",
      header: "Email Address",
    },
    {
      accessorKey: "phonenumber",
      header: "Phone Number",
    },
    {
      accessorKey: "mobilenumber",
      header: "Mobile Number",
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
            title={keys.KEY100174}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1003}
            navActive={keys.KEY10036}
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
    <SupplierListNew />
  );
};

export default SupplierList;
