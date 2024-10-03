import React, { useState,useMemo } from "react";
import Header from "../../components/parts/Header";
import StatusButton from "../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";
import SupplierCell from "../../components/Table/CustomCells/SupplierCell";
import CurrencyCell from "../../components/Table/CustomCells/CurrencyCell";
import BlanketNew from "../../New-Screens/BlanketNew";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";

const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}


const BlanketOrder = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const Supplier = (p) => {
    return <SupplierCell value={p.value} />;
  };
  const Currency = (p) => {
    return <CurrencyCell value={p.value} />;
  };


  const data = useMemo(() => [
    {
      id: "1",
      supplier: "Alpha Industries",
      blanketorderno: "BLK123456",
      purchaser: "Jane Smith",
      startdate: "2024-01-01",
      enddate: "2024-12-31",
      extraref: "EX123456",
      potype: "Standard",
      currency: "USD",
      shippingaddress: "1234 Elm St, Springfield, IL",
      billingaddress: "5678 Oak St, Springfield, IL",
      status: "Active",
      onhold: "No",
      extrarefno: "ER78910",
      project: "Project X",
      paymentterms: "Net 30",
      paymentmode: "Bank Transfer",
      discount: "5%",
      contactperson: "Robert Johnson"
    },
    {
      id: "1",
      supplier: "Alpha Industries",
      blanketorderno: "BLK123456",
      purchaser: "Jane Smith",
      startdate: "2024-01-01",
      enddate: "2024-12-31",
      extraref: "EX123456",
      potype: "Standard",
      currency: "USD",
      shippingaddress: "1234 Elm St, Springfield, IL",
      billingaddress: "5678 Oak St, Springfield, IL",
      status: "Active",
      onhold: "No",
      extrarefno: "ER78910",
      project: "Project X",
      paymentterms: "Net 30",
      paymentmode: "Bank Transfer",
      discount: "5%",
      contactperson: "Robert Johnson"
    },{
      id: "1",
      supplier: "Alpha Industries",
      blanketorderno: "BLK123456",
      purchaser: "Jane Smith",
      startdate: "2024-01-01",
      enddate: "2024-12-31",
      extraref: "EX123456",
      potype: "Standard",
      currency: "USD",
      shippingaddress: "1234 Elm St, Springfield, IL",
      billingaddress: "5678 Oak St, Springfield, IL",
      status: "Active",
      onhold: "No",
      extrarefno: "ER78910",
      project: "Project X",
      paymentterms: "Net 30",
      paymentmode: "Bank Transfer",
      discount: "5%",
      contactperson: "Robert Johnson"
    },
    {
      id: "1",
      supplier: "Alpha Industries",
      blanketorderno: "BLK123456",
      purchaser: "Jane Smith",
      startdate: "2024-01-01",
      enddate: "2024-12-31",
      extraref: "EX123456",
      potype: "Standard",
      currency: "USD",
      shippingaddress: "1234 Elm St, Springfield, IL",
      billingaddress: "5678 Oak St, Springfield, IL",
      status: "Active",
      onhold: "No",
      extrarefno: "ER78910",
      project: "Project X",
      paymentterms: "Net 30",
      paymentmode: "Bank Transfer",
      discount: "5%",
      contactperson: "Robert Johnson"
    },
    {
      id: "1",
      supplier: "Alpha Industries",
      blanketorderno: "BLK123456",
      purchaser: "Jane Smith",
      startdate: "2024-01-01",
      enddate: "2024-12-31",
      extraref: "EX123456",
      potype: "Standard",
      currency: "USD",
      shippingaddress: "1234 Elm St, Springfield, IL",
      billingaddress: "5678 Oak St, Springfield, IL",
      status: "Active",
      onhold: "No",
      extrarefno: "ER78910",
      project: "Project X",
      paymentterms: "Net 30",
      paymentmode: "Bank Transfer",
      discount: "5%",
      contactperson: "Robert Johnson"
    },
    {
      id: "1",
      supplier: "Alpha Industries",
      blanketorderno: "BLK123456",
      purchaser: "Jane Smith",
      startdate: "2024-01-01",
      enddate: "2024-12-31",
      extraref: "EX123456",
      potype: "Standard",
      currency: "USD",
      shippingaddress: "1234 Elm St, Springfield, IL",
      billingaddress: "5678 Oak St, Springfield, IL",
      status: "Active",
      onhold: "No",
      extrarefno: "ER78910",
      project: "Project X",
      paymentterms: "Net 30",
      paymentmode: "Bank Transfer",
      discount: "5%",
      contactperson: "Robert Johnson"
    },
    {
      id: "1",
      supplier: "Alpha Industries",
      blanketorderno: "BLK123456",
      purchaser: "Jane Smith",
      startdate: "2024-01-01",
      enddate: "2024-12-31",
      extraref: "EX123456",
      potype: "Standard",
      currency: "USD",
      shippingaddress: "1234 Elm St, Springfield, IL",
      billingaddress: "5678 Oak St, Springfield, IL",
      status: "Active",
      onhold: "No",
      extrarefno: "ER78910",
      project: "Project X",
      paymentterms: "Net 30",
      paymentmode: "Bank Transfer",
      discount: "5%",
      contactperson: "Robert Johnson"
    },
    {
      id: "1",
      supplier: "Alpha Industries",
      blanketorderno: "BLK123456",
      purchaser: "Jane Smith",
      startdate: "2024-01-01",
      enddate: "2024-12-31",
      extraref: "EX123456",
      potype: "Standard",
      currency: "USD",
      shippingaddress: "1234 Elm St, Springfield, IL",
      billingaddress: "5678 Oak St, Springfield, IL",
      status: "Active",
      onhold: "No",
      extrarefno: "ER78910",
      project: "Project X",
      paymentterms: "Net 30",
      paymentmode: "Bank Transfer",
      discount: "5%",
      contactperson: "Robert Johnson"
    },
    {
      id: "1",
      supplier: "Alpha Industries",
      blanketorderno: "BLK123456",
      purchaser: "Jane Smith",
      startdate: "2024-01-01",
      enddate: "2024-12-31",
      extraref: "EX123456",
      potype: "Standard",
      currency: "USD",
      shippingaddress: "1234 Elm St, Springfield, IL",
      billingaddress: "5678 Oak St, Springfield, IL",
      status: "Active",
      onhold: "No",
      extrarefno: "ER78910",
      project: "Project X",
      paymentterms: "Net 30",
      paymentmode: "Bank Transfer",
      discount: "5%",
      contactperson: "Robert Johnson"
    },
    {
      id: "1",
      supplier: "Alpha Industries",
      blanketorderno: "BLK123456",
      purchaser: "Jane Smith",
      startdate: "2024-01-01",
      enddate: "2024-12-31",
      extraref: "EX123456",
      potype: "Standard",
      currency: "USD",
      shippingaddress: "1234 Elm St, Springfield, IL",
      billingaddress: "5678 Oak St, Springfield, IL",
      status: "Active",
      onhold: "No",
      extrarefno: "ER78910",
      project: "Project X",
      paymentterms: "Net 30",
      paymentmode: "Bank Transfer",
      discount: "5%",
      contactperson: "Robert Johnson"
    },
    

  ], []);

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
      accessorKey: "blanketorderno",
      header: "Blanket Order No",
    },
    {
      accessorKey: "purchaser",
      header: "Purchaser",
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
      accessorKey: "extraref",
      header: "Extra Ref",
    },
    {
      accessorKey: "potype",
      header: "PO Type",
    },
    {
      accessorKey: "currency",
      header: "Currency",
    },
    {
      accessorKey: "shippingaddress",
      header: "Shipping Address",
    },
    {
      accessorKey: "billingaddress",
      header: "Billing Address",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    },
    {
      accessorKey: "onhold",
      header: "On Hold",
    },
    {
      accessorKey: "extrarefno",
      header: "Extra Ref No",
    },
    {
      accessorKey: "project",
      header: "Project",
    },
    {
      accessorKey: "paymentterms",
      header: "Payment Terms",
    },
    {
      accessorKey: "paymentmode",
      header: "Payment Mode",
    },
    {
      accessorKey: "discount",
      header: "Discount",
    },
    {
      accessorKey: "contactperson",
      header: "Contact Person",
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
            title={keys.KEY100175}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1003}
            navActive={keys.KEY100144}
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
    <BlanketNew />
  );
};

export default BlanketOrder;
