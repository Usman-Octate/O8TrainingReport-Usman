import React, {useState, useMemo} from "react";
import Header from "../../../components/parts/Header";
import { TopDiv, Main, TopDivWrapper } from "../../style";
import AgGridTable from "../../../components/Table/AgGridTable";    
import StatusButton from "../../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import MRTTableListScreens from "../../../New-Screens/Components/MantineTable/MRTTableListScreens";

const initialState = {
    density: "xs",
    columnSizing: {
        id: 100,
    }
  }
const Production = () => {


    const Status = (p) => {
        return <StatusButton value={p.value} />;
      };

      const data = useMemo(() => [
        {
          id: "1",
          referenceno: "STKADJ0001",
          postingdate: "11 February 2024",
          description: "STKADJ0001",
          locationfrom: "Main Warehouse",
          locationto: "Main Warehouse 01",
          account: "20020-01",
          totalquantity: "250.00",
          totalamount: "250.00",
          status: "Posted",
        },
        {
            id: "1",
            referenceno: "STKADJ0001",
            postingdate: "11 February 2024",
            description: "STKADJ0001",
            locationfrom: "Main Warehouse",
            locationto: "Main Warehouse 01",
            account: "20020-01",
            totalquantity: "250.00",
            totalamount: "250.00",
            status: "Posted",
          },
          {
            id: "1",
            referenceno: "STKADJ0001",
            postingdate: "11 February 2024",
            description: "STKADJ0001",
            locationfrom: "Main Warehouse",
            locationto: "Main Warehouse 01",
            account: "20020-01",
            totalquantity: "250.00",
            totalamount: "250.00",
            status: "Posted",
          },
          {
            id: "1",
            referenceno: "STKADJ0001",
            postingdate: "11 February 2024",
            description: "STKADJ0001",
            locationfrom: "Main Warehouse",
            locationto: "Main Warehouse 01",
            account: "20020-01",
            totalquantity: "250.00",
            totalamount: "250.00",
            status: "Posted",
          },
          {
            id: "1",
            referenceno: "STKADJ0001",
            postingdate: "11 February 2024",
            description: "STKADJ0001",
            locationfrom: "Main Warehouse",
            locationto: "Main Warehouse 01",
            account: "20020-01",
            totalquantity: "250.00",
            totalamount: "250.00",
            status: "Posted",
          }, {
            id: "1",
            referenceno: "STKADJ0001",
            postingdate: "11 February 2024",
            description: "STKADJ0001",
            locationfrom: "Main Warehouse",
            locationto: "Main Warehouse 01",
            account: "20020-01",
            totalquantity: "250.00",
            totalamount: "250.00",
            status: "Posted",
          },
          {
            id: "1",
            referenceno: "STKADJ0001",
            postingdate: "11 February 2024",
            description: "STKADJ0001",
            locationfrom: "Main Warehouse",
            locationto: "Main Warehouse 01",
            account: "20020-01",
            totalquantity: "250.00",
            totalamount: "250.00",
            status: "Posted",
          },
          {
            id: "1",
            referenceno: "STKADJ0001",
            postingdate: "11 February 2024",
            description: "STKADJ0001",
            locationfrom: "Main Warehouse",
            locationto: "Main Warehouse 01",
            account: "20020-01",
            totalquantity: "250.00",
            totalamount: "250.00",
            status: "Posted",
          },
          

      ], []);

      const columns = useMemo(() => [
        {
          accessorKey: "id",
          header: "ID",
        },
        {
          accessorKey: "referenceno",
          header: "Reference No",
        },
        {
          accessorKey: "postingdate",
          header: "Posting Date",
        },
        {
          accessorKey: "description",
          header: "Description",
        },
        {
          accessorKey: "locationfrom",
          header: "Location From",
        },
        {
          accessorKey: "locationto",
          header: "Location To",
        },
        {
          accessorKey: "account",
          header: "Account",
        },
        {
          accessorKey: "totalquantity",
          header: "Total Quantity",
        },
        {
          accessorKey: "totalamount",
          header: "Total Amount",
        },
        {
          accessorKey: "status",
          header: "Status",
          Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

        }
      ], []);

    const keys = useSelector((state) => state.localization.keys);
    return(

        <Main>
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100269}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1004}
            thirdNav={keys.KEY10011}
            navActive={keys.KEY100263}
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

export default Production;

