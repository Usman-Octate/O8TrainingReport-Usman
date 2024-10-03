import React, { useState,useMemo } from "react";
import Header from "../../components/parts/Header";
import StatusButton from "../../components/buttons/StatusButton";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import { Main, TopDivWrapper, TopDiv } from "../style";
import ProductandServicesListNew from "../../New-Screens/ProductandSevicesListNew";
import MRTTableListScreens from "../../New-Screens/Components/MantineTable/MRTTableListScreens";


const initialState = {
  density: "xs",
  columnSizing: {
      id: 100,
  }
}


const ProductsList = () => {
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };

  const data = useMemo(() => [
    {
      id: "1",
      photo: "path/to/photo.jpg", // Assuming a URL or path to the photo
      itemcode: "ITEM123",
      itemname: "Premium Widget",
      class: "Class A",
      itemgroup: "Group 1",
      status: "Available",
      instockqty: 150,
      location: "Warehouse A",
      racks: "Rack 5",
      availableqty: 120,
      qtyinpo: 30,
      qtyinso: 25,
      baseprice: 50.00,
      preferedsupplier: "Supplier XYZ",
      valuation: "FIFO",
      alternativeitem: "ITEM124",
      commissionitem: "Yes",
      stockinguom: "Piece"
    },
    {
      id: "1",
      photo: "path/to/photo.jpg", // Assuming a URL or path to the photo
      itemcode: "ITEM123",
      itemname: "Premium Widget",
      class: "Class A",
      itemgroup: "Group 1",
      status: "Available",
      instockqty: 150,
      location: "Warehouse A",
      racks: "Rack 5",
      availableqty: 120,
      qtyinpo: 30,
      qtyinso: 25,
      baseprice: 50.00,
      preferedsupplier: "Supplier XYZ",
      valuation: "FIFO",
      alternativeitem: "ITEM124",
      commissionitem: "Yes",
      stockinguom: "Piece"
    },
    {
      id: "1",
      photo: "path/to/photo.jpg", // Assuming a URL or path to the photo
      itemcode: "ITEM123",
      itemname: "Premium Widget",
      class: "Class A",
      itemgroup: "Group 1",
      status: "Available",
      instockqty: 150,
      location: "Warehouse A",
      racks: "Rack 5",
      availableqty: 120,
      qtyinpo: 30,
      qtyinso: 25,
      baseprice: 50.00,
      preferedsupplier: "Supplier XYZ",
      valuation: "FIFO",
      alternativeitem: "ITEM124",
      commissionitem: "Yes",
      stockinguom: "Piece"
    },
    {
      id: "1",
      photo: "path/to/photo.jpg", // Assuming a URL or path to the photo
      itemcode: "ITEM123",
      itemname: "Premium Widget",
      class: "Class A",
      itemgroup: "Group 1",
      status: "Available",
      instockqty: 150,
      location: "Warehouse A",
      racks: "Rack 5",
      availableqty: 120,
      qtyinpo: 30,
      qtyinso: 25,
      baseprice: 50.00,
      preferedsupplier: "Supplier XYZ",
      valuation: "FIFO",
      alternativeitem: "ITEM124",
      commissionitem: "Yes",
      stockinguom: "Piece"
    },
    {
      id: "1",
      photo: "path/to/photo.jpg", // Assuming a URL or path to the photo
      itemcode: "ITEM123",
      itemname: "Premium Widget",
      class: "Class A",
      itemgroup: "Group 1",
      status: "Available",
      instockqty: 150,
      location: "Warehouse A",
      racks: "Rack 5",
      availableqty: 120,
      qtyinpo: 30,
      qtyinso: 25,
      baseprice: 50.00,
      preferedsupplier: "Supplier XYZ",
      valuation: "FIFO",
      alternativeitem: "ITEM124",
      commissionitem: "Yes",
      stockinguom: "Piece"
    },
    {
      id: "1",
      photo: "path/to/photo.jpg", // Assuming a URL or path to the photo
      itemcode: "ITEM123",
      itemname: "Premium Widget",
      class: "Class A",
      itemgroup: "Group 1",
      status: "Available",
      instockqty: 150,
      location: "Warehouse A",
      racks: "Rack 5",
      availableqty: 120,
      qtyinpo: 30,
      qtyinso: 25,
      baseprice: 50.00,
      preferedsupplier: "Supplier XYZ",
      valuation: "FIFO",
      alternativeitem: "ITEM124",
      commissionitem: "Yes",
      stockinguom: "Piece"
    },
    {
      id: "1",
      photo: "path/to/photo.jpg", // Assuming a URL or path to the photo
      itemcode: "ITEM123",
      itemname: "Premium Widget",
      class: "Class A",
      itemgroup: "Group 1",
      status: "Available",
      instockqty: 150,
      location: "Warehouse A",
      racks: "Rack 5",
      availableqty: 120,
      qtyinpo: 30,
      qtyinso: 25,
      baseprice: 50.00,
      preferedsupplier: "Supplier XYZ",
      valuation: "FIFO",
      alternativeitem: "ITEM124",
      commissionitem: "Yes",
      stockinguom: "Piece"
    },

    {
      id: "1",
      photo: "path/to/photo.jpg", // Assuming a URL or path to the photo
      itemcode: "ITEM123",
      itemname: "Premium Widget",
      class: "Class A",
      itemgroup: "Group 1",
      status: "Available",
      instockqty: 150,
      location: "Warehouse A",
      racks: "Rack 5",
      availableqty: 120,
      qtyinpo: 30,
      qtyinso: 25,
      baseprice: 50.00,
      preferedsupplier: "Supplier XYZ",
      valuation: "FIFO",
      alternativeitem: "ITEM124",
      commissionitem: "Yes",
      stockinguom: "Piece"
    },
  ], []);


  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "photo",
      header: "Photo",
      cell: info => <img src={info.getValue()} alt="Item Photo" style={{ width: 50, height: 50 }} />,
    },
    {
      accessorKey: "itemcode",
      header: "Item Code",
    },
    {
      accessorKey: "itemname",
      header: "Item Name",
    },
    {
      accessorKey: "class",
      header: "Class",
    },
    {
      accessorKey: "itemgroup",
      header: "Item Group",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => <StatusButton value={cell.getValue()} />,

    },
    {
      accessorKey: "instockqty",
      header: "In Stock Qty",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "racks",
      header: "Racks",
    },
    {
      accessorKey: "availableqty",
      header: "Available Qty",
    },
    {
      accessorKey: "qtyinpo",
      header: "Qty in PO",
    },
    {
      accessorKey: "qtyinso",
      header: "Qty in SO",
    },
    {
      accessorKey: "baseprice",
      header: "Base Price",
    },
    {
      accessorKey: "preferedsupplier",
      header: "Preferred Supplier",
    },
    {
      accessorKey: "valuation",
      header: "Valuation",
    },
    {
      accessorKey: "alternativeitem",
      header: "Alternative Item",
    },
    {
      accessorKey: "commissionitem",
      header: "Commission Item",
    },
    {
      accessorKey: "stockinguom",
      header: "Stocking UOM",
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
            title={keys.KEY100185}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1004}
            navActive={keys.KEY100228}
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
    <ProductandServicesListNew />
  )
};

export default ProductsList;
