import DeliveryNoteNew from "../../../New-Screens/DeliveryNoteNew";
import React, { useState,useMemo } from "react";
import Header from "../../../components/parts/Header";
import StatusButton from "../../../components/buttons/StatusButton";
import AgGridTable from "../../../components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../../style";
import SupplierCell from "../../../components/Table/CustomCells/SupplierCell";
import { useSelector } from "react-redux";
import MRTTableListScreens from "../../../New-Screens/Components/MantineTable/MRTTableListScreens";
import { MRT_AggregationFns } from "mantine-react-table";
import { Box, Stack } from "@mantine/core";
import SalesOrderNew from "../../../New-Screens/SalesOrderNew";


const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}

const DeliveryNote = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Customer = (p) => {
    return <SupplierCell value={p.value} />;
    
  };


  const data = useMemo(
    () => [
      {
        id: "1",
      customercode: "Revolution Cross Limited",
      invoiceno: "Order001",
      contactperson: "12 January 2024",
      emailaddress: "12 January 2024",
      mobileno: "12 January 2024",
      approvalstatus: "Pending for Approval",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      customercode: "Revolution Cross Limited",
      invoiceno: "Order001",
      contactperson: "12 January 2024",
      emailaddress: "12 January 2024",
      mobileno: "12 January 2024",
      approvalstatus: "Pending for Approval",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      customercode: "Revolution Cross Limited",
      invoiceno: "Order001",
      contactperson: "12 January 2024",
      emailaddress: "12 January 2024",
      mobileno: "12 January 2024",
      approvalstatus: "Pending for Approval",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      customercode: "Revolution Cross Limited",
      invoiceno: "Order001",
      contactperson: "12 January 2024",
      emailaddress: "12 January 2024",
      mobileno: "12 January 2024",
      approvalstatus: "Pending for Approval",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      customercode: "Revolution Cross Limited",
      invoiceno: "Order001",
      contactperson: "12 January 2024",
      emailaddress: "12 January 2024",
      mobileno: "12 January 2024",
      approvalstatus: "Pending for Approval",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      customercode: "Revolution Cross Limited",
      invoiceno: "Order001",
      contactperson: "12 January 2024",
      emailaddress: "12 January 2024",
      mobileno: "12 January 2024",
      approvalstatus: "Pending for Approval",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      customercode: "Revolution Cross Limited",
      invoiceno: "Order001",
      contactperson: "12 January 2024",
      emailaddress: "12 January 2024",
      mobileno: "12 January 2024",
      approvalstatus: "Pending for Approval",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      customercode: "Revolution Cross Limited",
      invoiceno: "Order001",
      contactperson: "12 January 2024",
      emailaddress: "12 January 2024",
      mobileno: "12 January 2024",
      approvalstatus: "Pending for Approval",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      customercode: "Revolution Cross Limited",
      invoiceno: "Order001",
      contactperson: "12 January 2024",
      emailaddress: "12 January 2024",
      mobileno: "12 January 2024",
      approvalstatus: "Pending for Approval",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

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
      header: 'Customer',
      accessorKey: 'customercode',
    },
    {
      header: 'Invoice No',
      accessorKey: 'invoiceno',
    },
    {
      header: 'Contact Person',
      accessorKey: 'contactperson',
    },
    {
      header: 'Email Address',
      accessorKey: 'emailaddress',
    },
    {
      header: 'Mobile No',
      accessorKey: 'mobileno',
    },
    {
      header: 'Approval Status',
      accessorKey: 'approvalstatus',
    },
    {
      header: 'Status',
      accessorKey: 'status',
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    },
    {
      header: 'Net Total',
      accessorKey: 'netTotal',
    },
    {
      header: 'Net Total (FC)',
      accessorKey: 'netTotalFC',
    },
    {
      header: 'Total Amount',
      accessorKey: 'totalAmount',
    },
    {
      header: 'Total Amount (FC)',
      accessorKey: 'totalAmountFC',
    },
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
            title={keys.KEY100167}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1002}
            thirdNav={keys.KEY10011}
            navActive={keys.KEY100141}
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
    <DeliveryNoteNew />
  );
};

export default DeliveryNote;
