import PurchaseReqNew from "../../../New-Screens/PurchaseReqNew";
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


const initialState = {
    density: "xs",
    columnSizing: {
        id: 100,
    }
}

const PurchaseReq = () => {
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
      supplier: "Revolution Cross Limited",
      purchaseRequestNo: "Order001",
      TransactionDate: "12 January 2024",
      validityDate: "12 January 2024",
      Currency: "USD",
      purchaser: "John Doe",
      deliveryType: "Ground Freight",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      supplier: "Revolution Cross Limited",
      purchaseRequestNo: "Order001",
      TransactionDate: "12 January 2024",
      validityDate: "12 January 2024",
      Currency: "USD",
      purchaser: "John Doe",
      deliveryType: "Ground Freight",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      supplier: "Revolution Cross Limited",
      purchaseRequestNo: "Order001",
      TransactionDate: "12 January 2024",
      validityDate: "12 January 2024",
      Currency: "USD",
      purchaser: "John Doe",
      deliveryType: "Ground Freight",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      supplier: "Revolution Cross Limited",
      purchaseRequestNo: "Order001",
      TransactionDate: "12 January 2024",
      validityDate: "12 January 2024",
      Currency: "USD",
      purchaser: "John Doe",
      deliveryType: "Ground Freight",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      supplier: "Revolution Cross Limited",
      purchaseRequestNo: "Order001",
      TransactionDate: "12 January 2024",
      validityDate: "12 January 2024",
      Currency: "USD",
      purchaser: "John Doe",
      deliveryType: "Ground Freight",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      supplier: "Revolution Cross Limited",
      purchaseRequestNo: "Order001",
      TransactionDate: "12 January 2024",
      validityDate: "12 January 2024",
      Currency: "USD",
      purchaser: "John Doe",
      deliveryType: "Ground Freight",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      supplier: "Revolution Cross Limited",
      purchaseRequestNo: "Order001",
      TransactionDate: "12 January 2024",
      validityDate: "12 January 2024",
      Currency: "USD",
      purchaser: "John Doe",
      deliveryType: "Ground Freight",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      {
        id: "1",
      supplier: "Revolution Cross Limited",
      purchaseRequestNo: "Order001",
      TransactionDate: "12 January 2024",
      validityDate: "12 January 2024",
      Currency: "USD",
      purchaser: "John Doe",
      deliveryType: "Ground Freight",
      status: "Active",
      netTotal: 200,
      netTotalFC: 350,
      totalAmount: 400,
      totalAmountFC: 550
      

      },
      
      {
        id: "1",
      supplier: "Revolution Cross Limited",
      purchaseRequestNo: "Order001",
      TransactionDate: "12 January 2024",
      validityDate: "12 January 2024",
      Currency: "USD",
      purchaser: "John Doe",
      deliveryType: "Ground Freight",
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
      accessorKey: "supplier",
      header: "Supplier",
    },
    {
      accessorKey: "purchaseRequestNo",
      header: "Purchase Request No",
    },
    {
      accessorKey: "TransactionDate",
      header: "Transaction Date",
    },
    {
      accessorKey: "validityDate",
      header: "Validity Date",
    },
    {
      accessorKey: "Currency",
      header: "Currency",
    },
    {
      accessorKey: "purchaser",
      header: "Purchaser",
    },
    {
      accessorKey: "deliveryType",
      header: "Delivery Type",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    },
    {
      accessorKey: "netTotal",
      header: "Net Total",
    },
    {
      accessorKey: "netTotalFC",
      header: "Net Total (FC)",
    },
    {
      accessorKey: "totalAmount",
      header: "Total Amount",
    },
    {
      accessorKey: "totalAmountFC",
      header: "Total Amount (FC)",
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
            title={keys.KEY100177}
            firstNav={keys.KEY0002}
            thirdNav={keys.KEY10011}
            secNav={keys.KEY1003}
            navActive={keys.KEY100360}
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
    <PurchaseReqNew />
  );
};

export default PurchaseReq;
