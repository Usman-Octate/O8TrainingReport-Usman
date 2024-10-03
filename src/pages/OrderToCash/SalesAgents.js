import React, { useState, useMemo } from "react";
import Header from "../../components/parts/Header";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { TopDivWrapper, TopDiv, Main } from "../style";
import SalesAgentNew from "../../New-Screens/SalesAgentNew";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";


const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}


const SalesAgents = () => {

  const data = useMemo(() => [
    {
      id: "1",
      salesagentcode: "SA123",
      salesagentname: "Michael Scott",
      emailaddress: "michael.scott@dundermifflin.com",
      phonenumber: "+5551234567",
      commissionstructure: "Tiered",
      commissiontype: "Percentage",
      commissioncycle: "Monthly",
      threshold: 5000,
      commissionbasedon: "Sales Amount",
      salestarget: 10000,
      startdate: "2024-01-01",
      percentageamount: "5%",
      notes: "High performer, consider for bonus."
    },
    {
      id: "1",
      salesagentcode: "SA123",
      salesagentname: "Michael Scott",
      emailaddress: "michael.scott@dundermifflin.com",
      phonenumber: "+5551234567",
      commissionstructure: "Tiered",
      commissiontype: "Percentage",
      commissioncycle: "Monthly",
      threshold: 5000,
      commissionbasedon: "Sales Amount",
      salestarget: 10000,
      startdate: "2024-01-01",
      percentageamount: "5%",
      notes: "High performer, consider for bonus."
    },
    {
      id: "1",
      salesagentcode: "SA123",
      salesagentname: "Michael Scott",
      emailaddress: "michael.scott@dundermifflin.com",
      phonenumber: "+5551234567",
      commissionstructure: "Tiered",
      commissiontype: "Percentage",
      commissioncycle: "Monthly",
      threshold: 5000,
      commissionbasedon: "Sales Amount",
      salestarget: 10000,
      startdate: "2024-01-01",
      percentageamount: "5%",
      notes: "High performer, consider for bonus."
    },
    {
      id: "1",
      salesagentcode: "SA123",
      salesagentname: "Michael Scott",
      emailaddress: "michael.scott@dundermifflin.com",
      phonenumber: "+5551234567",
      commissionstructure: "Tiered",
      commissiontype: "Percentage",
      commissioncycle: "Monthly",
      threshold: 5000,
      commissionbasedon: "Sales Amount",
      salestarget: 10000,
      startdate: "2024-01-01",
      percentageamount: "5%",
      notes: "High performer, consider for bonus."
    },
    {
      id: "1",
      salesagentcode: "SA123",
      salesagentname: "Michael Scott",
      emailaddress: "michael.scott@dundermifflin.com",
      phonenumber: "+5551234567",
      commissionstructure: "Tiered",
      commissiontype: "Percentage",
      commissioncycle: "Monthly",
      threshold: 5000,
      commissionbasedon: "Sales Amount",
      salestarget: 10000,
      startdate: "2024-01-01",
      percentageamount: "5%",
      notes: "High performer, consider for bonus."
    },
    {
      id: "1",
      salesagentcode: "SA123",
      salesagentname: "Michael Scott",
      emailaddress: "michael.scott@dundermifflin.com",
      phonenumber: "+5551234567",
      commissionstructure: "Tiered",
      commissiontype: "Percentage",
      commissioncycle: "Monthly",
      threshold: 5000,
      commissionbasedon: "Sales Amount",
      salestarget: 10000,
      startdate: "2024-01-01",
      percentageamount: "5%",
      notes: "High performer, consider for bonus."
    },
    {
      id: "1",
      salesagentcode: "SA123",
      salesagentname: "Michael Scott",
      emailaddress: "michael.scott@dundermifflin.com",
      phonenumber: "+5551234567",
      commissionstructure: "Tiered",
      commissiontype: "Percentage",
      commissioncycle: "Monthly",
      threshold: 5000,
      commissionbasedon: "Sales Amount",
      salestarget: 10000,
      startdate: "2024-01-01",
      percentageamount: "5%",
      notes: "High performer, consider for bonus."
    },
    {
      id: "1",
      salesagentcode: "SA123",
      salesagentname: "Michael Scott",
      emailaddress: "michael.scott@dundermifflin.com",
      phonenumber: "+5551234567",
      commissionstructure: "Tiered",
      commissiontype: "Percentage",
      commissioncycle: "Monthly",
      threshold: 5000,
      commissionbasedon: "Sales Amount",
      salestarget: 10000,
      startdate: "2024-01-01",
      percentageamount: "5%",
      notes: "High performer, consider for bonus."
    },
    {
      id: "1",
      salesagentcode: "SA123",
      salesagentname: "Michael Scott",
      emailaddress: "michael.scott@dundermifflin.com",
      phonenumber: "+5551234567",
      commissionstructure: "Tiered",
      commissiontype: "Percentage",
      commissioncycle: "Monthly",
      threshold: 5000,
      commissionbasedon: "Sales Amount",
      salestarget: 10000,
      startdate: "2024-01-01",
      percentageamount: "5%",
      notes: "High performer, consider for bonus."
    },
    {
      id: "1",
      salesagentcode: "SA123",
      salesagentname: "Michael Scott",
      emailaddress: "michael.scott@dundermifflin.com",
      phonenumber: "+5551234567",
      commissionstructure: "Tiered",
      commissiontype: "Percentage",
      commissioncycle: "Monthly",
      threshold: 5000,
      commissionbasedon: "Sales Amount",
      salestarget: 10000,
      startdate: "2024-01-01",
      percentageamount: "5%",
      notes: "High performer, consider for bonus."
    },
  ], []);

 

const columns = useMemo(() => [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "salesagentcode",
    header: "Sales Agent Code",
  },
  {
    accessorKey: "salesagentname",
    header: "Sales Agent Name",
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
    accessorKey: "commissionstructure",
    header: "Commis Structure",
  },
  {
    accessorKey: "commissiontype",
    header: "Commission Type",
  },
  {
    accessorKey: "commissioncycle",
    header: "Commission Cycle",
  },
  {
    accessorKey: "threshold",
    header: "Threshold",
  },
  {
    accessorKey: "commissionbasedon",
    header: "Commission Based On",
  },
  {
    accessorKey: "salestarget",
    header: "Sales Target",
  },
  {
    accessorKey: "startdate",
    header: "Start Date",
  },
  {
    accessorKey: "percentageamount",
    header: "Percentage/Amount",
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
            title={keys.KEY100163}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1002}
            navActive={keys.KEY100139}
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
    <SalesAgentNew />
  );
};

export default SalesAgents;
