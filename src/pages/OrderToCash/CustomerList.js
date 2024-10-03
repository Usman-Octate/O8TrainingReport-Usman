import React, { useState, useMemo } from "react";
import Header from "../../components/parts/Header";
import StatusButton from "../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";
import CustomerListNew from "../../New-Screens/CustomerListNew";
import CurrencyCell from "../../components/Table/CustomCells/CurrencyCell";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";



const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}

const CustomerList = () => {
  const [screen, setScreen] = useState(1);
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };


  const data = useMemo(() => [
    {
      id: "1",
      customercode: "ABC Corp",
      customername: "Alice Johnson",
      currentbalance: 1200.50,
      onboardingdate: "2023-05-01",
      currency: "USD",
      salesagent: "John Doe",
      pricelist: "Standard",
      deliverytype: "Courier",
      customergroup: "Premium",
      accountcode: "AC123",
      emailaddress: "alice.johnson@abccorp.com",
      phonenumber: "+1234567890",
      mobilenumber: "+0987654321",
      customfield1: "Value1",
      customfield2: "Value2",
      customfield3: "Value3",
      customfield4: "Value4",
      status:  'Active',
    },
    {
      id: "1",
      customercode: "ABC Corp",
      customername: "Alice Johnson",
      currentbalance: 1200.50,
      onboardingdate: "2023-05-01",
      currency: "USD",
      salesagent: "John Doe",
      pricelist: "Standard",
      deliverytype: "Courier",
      customergroup: "Premium",
      accountcode: "AC123",
      emailaddress: "alice.johnson@abccorp.com",
      phonenumber: "+1234567890",
      mobilenumber: "+0987654321",
      customfield1: "Value1",
      customfield2: "Value2",
      customfield3: "Value3",
      customfield4: "Value4",
      status:  'Active',

    },
    {
      id: "1",
      customercode: "ABC Corp",
      customername: "Alice Johnson",
      currentbalance: 1200.50,
      onboardingdate: "2023-05-01",
      currency: "USD",
      salesagent: "John Doe",
      pricelist: "Standard",
      deliverytype: "Courier",
      customergroup: "Premium",
      accountcode: "AC123",
      emailaddress: "alice.johnson@abccorp.com",
      phonenumber: "+1234567890",
      mobilenumber: "+0987654321",
      customfield1: "Value1",
      customfield2: "Value2",
      customfield3: "Value3",
      customfield4: "Value4",
      status:  'Active',

    },
    {
      id: "1",
      customercode: "ABC Corp",
      customername: "Alice Johnson",
      currentbalance: 1200.50,
      onboardingdate: "2023-05-01",
      currency: "USD",
      salesagent: "John Doe",
      pricelist: "Standard",
      deliverytype: "Courier",
      customergroup: "Premium",
      accountcode: "AC123",
      emailaddress: "alice.johnson@abccorp.com",
      phonenumber: "+1234567890",
      mobilenumber: "+0987654321",
      customfield1: "Value1",
      customfield2: "Value2",
      customfield3: "Value3",
      customfield4: "Value4",
      status:  'Active',

    },
    {
      id: "1",
      customercode: "ABC Corp",
      customername: "Alice Johnson",
      currentbalance: 1200.50,
      onboardingdate: "2023-05-01",
      currency: "USD",
      salesagent: "John Doe",
      pricelist: "Standard",
      deliverytype: "Courier",
      customergroup: "Premium",
      accountcode: "AC123",
      emailaddress: "alice.johnson@abccorp.com",
      phonenumber: "+1234567890",
      mobilenumber: "+0987654321",
      customfield1: "Value1",
      customfield2: "Value2",
      customfield3: "Value3",
      customfield4: "Value4",
      status:  'Active',

    },


  ],
  []
);

const columns = useMemo(() => [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "customercode",
    header: "Customer Code",
  },
  {
    accessorKey: "customername",
    header: "Customer Name",
  },
  {
    accessorKey: "currentbalance",
    header: "Current Balance",
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
    accessorKey: "customergroup",
    header: "Customer Group",
  },
  {
    accessorKey: "accountcode",
    header: "Account Code",
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
  },
  {
    accessorKey: "customfield1",
    header: "Custom Field 1",
  },
  {
    accessorKey: "customfield2",
    header: "Custom Field 2",
  },
  {
    accessorKey: "customfield3",
    header: "Custom Field 3",
  },
  {
    accessorKey: "customfield4",
    header: "Custom Field 4",
  }
  ,
  {
    accessorKey: "status",
    header: "Status",
    Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

  }
], []);



  
  const handleScreenChange = () => {
    console.log("as");
    setScreen(2);
  };
  const keys = useSelector((state) => state.localization.keys);
  return screen === 1 ? (
    <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100161}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1002}
            navActive={keys.KEY10024}
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
    <CustomerListNew />
  );
};

export default CustomerList;
//
