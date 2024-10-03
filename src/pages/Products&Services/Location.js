import React, { useState, useMemo } from "react";
import StatusButton from "../../components/buttons/StatusButton";
import Header from "../../components/parts/Header";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";
import LocationNew from "../../New-Screens/LocationNew";
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
      locationdescription: "Main Warehouse",
      productcount: 150,
      address: "123 Warehouse Rd",
      city: "Springfield",
      country: "USA",
      status: "Active",
      contactperson: "John Doe",
      emailaddress: "johndoe@example.com",
      mobilenumber: "+1234567890"
    },
    {
      id: "1",
      locationdescription: "Main Warehouse",
      productcount: 150,
      address: "123 Warehouse Rd",
      city: "Springfield",
      country: "USA",
      status: "Active",
      contactperson: "John Doe",
      emailaddress: "johndoe@example.com",
      mobilenumber: "+1234567890"
    },
    {
      id: "1",
      locationdescription: "Main Warehouse",
      productcount: 150,
      address: "123 Warehouse Rd",
      city: "Springfield",
      country: "USA",
      status: "Active",
      contactperson: "John Doe",
      emailaddress: "johndoe@example.com",
      mobilenumber: "+1234567890"
    },
    {
      id: "1",
      locationdescription: "Main Warehouse",
      productcount: 150,
      address: "123 Warehouse Rd",
      city: "Springfield",
      country: "USA",
      status: "Active",
      contactperson: "John Doe",
      emailaddress: "johndoe@example.com",
      mobilenumber: "+1234567890"
    },
    {
      id: "1",
      locationdescription: "Main Warehouse",
      productcount: 150,
      address: "123 Warehouse Rd",
      city: "Springfield",
      country: "USA",
      status: "Active",
      contactperson: "John Doe",
      emailaddress: "johndoe@example.com",
      mobilenumber: "+1234567890"
    },
    {
      id: "1",
      locationdescription: "Main Warehouse",
      productcount: 150,
      address: "123 Warehouse Rd",
      city: "Springfield",
      country: "USA",
      status: "Active",
      contactperson: "John Doe",
      emailaddress: "johndoe@example.com",
      mobilenumber: "+1234567890"
    },
    {
      id: "1",
      locationdescription: "Main Warehouse",
      productcount: 150,
      address: "123 Warehouse Rd",
      city: "Springfield",
      country: "USA",
      status: "Active",
      contactperson: "John Doe",
      emailaddress: "johndoe@example.com",
      mobilenumber: "+1234567890"
    },
    {
      id: "1",
      locationdescription: "Main Warehouse",
      productcount: 150,
      address: "123 Warehouse Rd",
      city: "Springfield",
      country: "USA",
      status: "Active",
      contactperson: "John Doe",
      emailaddress: "johndoe@example.com",
      mobilenumber: "+1234567890"
    },
    {
      id: "1",
      locationdescription: "Main Warehouse",
      productcount: 150,
      address: "123 Warehouse Rd",
      city: "Springfield",
      country: "USA",
      status: "Active",
      contactperson: "John Doe",
      emailaddress: "johndoe@example.com",
      mobilenumber: "+1234567890"
    },

  ], []);

  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "locationdescription",
      header: "Location/Description",
    },
    {
      accessorKey: "productcount",
      header: "Product Count",
    },
    {
      accessorKey: "address",
      header: "Address",
    },
    {
      accessorKey: "city",
      header: "City",
    },
    {
      accessorKey: "country",
      header: "Country",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    },
    {
      accessorKey: "contactperson",
      header: "Contact Person",
    },
    {
      accessorKey: "emailaddress",
      header: "Email Address",
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
            title={keys.KEY100186}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1004}
            navActive={keys.KEY10052}
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
    <LocationNew />
  );
};

export default Location;
