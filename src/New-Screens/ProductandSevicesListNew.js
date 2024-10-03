import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import { useSelector } from "react-redux";
import { useAppContext } from "../context/AppProvider";
import ChartAccountInput from "../components/Inputs/ChartAccountInput";
import LongDescriptionInput from "../components/Inputs/LongDiscriptionInput";
import DropdownInput from "../components/Inputs/DropdownInput";
import QRCode from "qrcode.react";
import Dots from "../components/Table/CustomCells/Dots";
import StatusButton from "../components/buttons/StatusButton";
import CustomerSupplierCell from "../components/Table/CustomCells/CustomerSupplierCell";
import ThreeCardsComponents from "./Components/ThreeCardsComponents";
import ActiveButton from "../components/buttons/ActiveButton";
import ActivityPart from "./Sections/ActivityPart";
import NewScreensNav from "../New-Screens/Components/NewScreensNav";
import TitleOfSection from "../New-Screens/Components/TitleOfSection";
import CustomFields from "../New-Screens/Sections/CustomFields";
import JornalTables from "../New-Screens/Sections/JornalTables";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Adjust gap as needed */
`;

const Grab = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0px 8px;

  scrollbar-width: thin;
  // background-color: red;
  scrollbar-color: #c2c2c2 transparent;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #464f604d;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin: 10px 10px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
`;

const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 10px 0px;
  @media (max-width: 1166px) {
    width: 100%;
  }
`;

const FieldsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Box = styled.div`
  display: flex;
  // align-items: center;
  // flex-direction: column;

  gap: 5px;
  // margin-top: 20px;
`;

const InsertPictureBox = styled.div`
  background-color: #e9f0ea;
  padding: 10px;
  border-radius: 5px;
  border: solid;
  border-width: 0.5px;
  height: 120px;
  width: 140px;

  align-items: center;
  justify-content: center;

  display: flex;

  margin: auto;
`;

const Wrapit = styled.div`
  display: flex;
  // background-color: red;
  flex-direction: row;

  align-items: center;
  gap: 30px;
  padding-left: 1px;
  padding-right: 1px;
  @media (max-width: 1166px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  display: flex;
  // align-items: center;
  // background-color: blue;
  width: 100%;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1166px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  // background-color: blue;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 1166px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const WrapperforTop = styled.div`
  display: flex;
  // align-items: center;
  justify-content: center;
  gap: 30px;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  // margin-left: 5%;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px; /* Add space between ActiveButton and ThreeCardsComponents */
`;

const Wrapit1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 0px 10px;
  scrollbar-width: none; /* Hide the scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide the scrollbar for IE and Edge */
  &::-webkit-scrollbar {
    width: 0px; /* Hide the scrollbar for Chrome, Safari, and Opera */
  }
`;

const Grab1 = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  //  background-color: blue;
`;

const TextTitle = styled.text`
  color: ${(props) => props.txtColor};
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  align-self: flex-top;
`;

const QRBOX = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  background-color: #e8e8e8;
  padding: 10px;
  border-radius: 5px;
  border: solid;
  border-width: 0.5px;
  height: 150px;
  width: 150px;
  margin-top: 20px;
`;

const QRCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const InputCheckOne = styled.input`
  height: 18px;
  width: 18px;
`;

const Text3 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.txtColor};
`;

const WholeQRRapper = styled.div`
  display: flex;
  align-items: center;
`;

const QRBOXComponent = ({ value }) => (
  <QRBOX>
    <QRCodeWrapper>
      <QRCode value={value} size={130} />
    </QRCodeWrapper>
  </QRBOX>
);
const ScrollableSection = styled.div`
  height: calc(100vh - 150px);
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  width: 100%;
  padding: 0 0px;
  // background-color: blue;

  /* Custom scrollbar for WebKit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 0px; /* Hide the scrollbar */
  }

  /* Custom scrollbar for Firefox */
  scrollbar-width: none; /* Hide the scrollbar */
`;

const Div = styled.div`
  display: flex;
`;

const ProductandServicesListNew = () => {
  const Dotscell = () => {
    return <Dots />;
  };
  const Status = (p) => {
    return <StatusButton value={p.value} />;
  };
  const CustSuppCell = (p) => {
    return <CustomerSupplierCell value={p.value} lineText={p.lineText} />;
  };

  const keys = useSelector((state) => state.localization.keys);
  const { maxModal } = useAppContext();
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const [locationRowData, setLocationRowData] = useState([
    {
      location: "WAREHOUSE001",
      itemglaccount: "10031-21",
      salesglaccount: "50001-21",
      cogsglaccount: "60001-01",
      taxglaccount: "70001-01",
      instockqty: "58",
      status: "Active",
    },
    {
      location: "WAREHOUSE001",
      itemglaccount: "10031-21",
      salesglaccount: "50001-21",
      cogsglaccount: "60001-01",
      taxglaccount: "70001-01",
      instockqty: "58",
      status: "Active",
    },

    {
      location: "WAREHOUSE001",
      itemglaccount: "10031-21",
      salesglaccount: "50001-21",
      cogsglaccount: "60001-01",
      taxglaccount: "70001-01",
      instockqty: "58",
      status: "Active",
    },

    {
      location: "WAREHOUSE001",
      itemglaccount: "10031-21",
      salesglaccount: "50001-21",
      cogsglaccount: "60001-01",
      taxglaccount: "70001-01",
      instockqty: "58",
      status: "Active",
    },
  ]);

  const [locationColDefs, setLocationColDefs] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dotscell,
    },
    {
      field: "location",
      headerName: "Location",
      headerClass: "All-header",
      cellRenderer: (params) => (
        <CustSuppCell value={params.value} lineText="Head Office" />
      ),
    },

    {
      field: "itemglaccount",
      headerName: "Item GL Account",
      headerClass: "All-header",
      cellRenderer: (params) => (
        <CustSuppCell value={params.value} lineText="Inventory Account" />
      ),
    },
    {
      field: "cogsglaccount",
      headerName: "Cogs GL Account",
      headerClass: "All-header",
      cellRenderer: (params) => (
        <CustSuppCell value={params.value} lineText="Sales Income - Hardware" />
      ),
    },
    {
      field: "taxglaccount",
      headerName: "Tax GL Account",
      headerClass: "All-header",
      cellRenderer: (params) => (
        <CustSuppCell value={params.value} lineText="Cost of Goods Sold" />
      ),
    },
    {
      field: "instockqty",
      headerName: "In Stock Qty",
      headerClass: "All-header",
      cellRenderer: (params) => (
        <CustSuppCell value={params.value} lineText="Tax Account Product" />
      ),
    },
    {
      field: "status",
      headerName: "Status",
      headerClass: "All-header",
      cellRenderer: Status,
    },
  ]);

  const [supplierDetailRowData, setSupplierDetailLocationRowData] = useState([
    {
      suppliername: "SUPPLIER232",
      partno: "PARTNUMBER212",
      uom: "Pieces",
      leadtime: "5 Days",
      lastpurchasecost: "$ 5.00",
      minqty: "10",
      maxqty: "50",
      reorderlevel: "20",
      reorderqty: "50",
      status: "Active",
    },
    {
      suppliername: "SUPPLIER232",
      partno: "PARTNUMBER212",
      uom: "Pieces",
      leadtime: "5 Days",
      lastpurchasecost: "$ 5.00",
      minqty: "10",
      maxqty: "50",
      reorderlevel: "20",
      reorderqty: "50",
      status: "Active",
    },
    {
      suppliername: "SUPPLIER232",
      partno: "PARTNUMBER212",
      uom: "Pieces",
      leadtime: "5 Days",
      lastpurchasecost: "$ 5.00",
      minqty: "10",
      maxqty: "50",
      reorderlevel: "20",
      reorderqty: "50",
      status: "Active",
    },

    {
      suppliername: "SUPPLIER232",
      partno: "PARTNUMBER212",
      uom: "Pieces",
      leadtime: "5 Days",
      lastpurchasecost: "$ 5.00",
      minqty: "10",
      maxqty: "50",
      reorderlevel: "20",
      reorderqty: "50",
      status: "Active",
    },
  ]);

  const [supplierDetailColDefs, setSupplierDetailLocationColDefs] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dotscell,
    },
    {
      field: "suppliername",
      headerName: "Supplier Name",
      headerClass: "All-header",
      cellRenderer: (params) => (
        <CustSuppCell value={params.value} lineText="Al-Falak Trading LLC" />
      ),
    },

    {
      field: "partno",
      headerName: "Part Number",
      headerClass: "All-header",
    },
    {
      field: "uom",
      headerName: "Uom",
      headerClass: "All-header",
    },
    {
      field: "leadtime",
      headerName: "Lead Time",
      headerClass: "All-header",
    },
    {
      field: "lastpurchasecost",
      headerName: "Last Purchase Cost",
      headerClass: "All-header",
    },
    {
      field: "minqty",
      headerName: "Min Qty",
      headerClass: "All-header",
    },
    {
      field: "maxqty",
      headerName: "Max Qty",
      headerClass: "All-header",
    },
    {
      field: "reorderlevel",
      headerName: "Reorder Level",
      headerClass: "All-header",
    },
    {
      field: "reorderqty",
      headerName: "Reorder Qty",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "Status",
      headerClass: "All-header",
      cellRenderer: Status,
    },
  ]);

  const [batchSerailNumbersRowData, setBatchSerailNumbersRowData] = useState([
    {
      serialbatchno: "4UED-WQDW-WQQW",
      receiveddate: "25 Dec 2024",
      mfgdate: "5 Aug 2024",
      expirydate: "5 Aug 2024",
      location: "WAREHOUSE0032",
      cost: "$ 399.00",
      status: "Active",
    },
    {
      serialbatchno: "4UED-WQDW-WQQW",
      receiveddate: "25 Dec 2024",
      mfgdate: "5 Aug 2024",
      expirydate: "5 Aug 2024",
      location: "WAREHOUSE0032",
      cost: "$ 399.00",
      status: "Active",
    },
    {
      serialbatchno: "4UED-WQDW-WQQW",
      receiveddate: "25 Dec 2024",
      mfgdate: "5 Aug 2024",
      expirydate: "5 Aug 2024",
      location: "WAREHOUSE0032",
      cost: "$ 399.00",
      status: "Active",
    },
    {
      serialbatchno: "4UED-WQDW-WQQW",
      receiveddate: "25 Dec 2024",
      mfgdate: "5 Aug 2024",
      expirydate: "5 Aug 2024",
      location: "WAREHOUSE0032",
      cost: "$ 399.00",
      status: "Active",
    },
  ]);

  const [batchSerailNumbersColDefs, setBatchSerailNumbersColDefs] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dotscell,
    },
    {
      field: "serialbatchno",
      headerName: "Serial / Batch No",
      headerClass: "All-header",
    },

    {
      field: "receiveddate",
      headerName: "Received Date",
      headerClass: "All-header",
    },
    {
      field: "mfgdate",
      headerName: "Mfg Date",
      headerClass: "All-header",
    },
    {
      field: "expirydate",
      headerName: "Expiry Date",
      headerClass: "All-header",
    },
    {
      field: "location",
      headerName: "Location",
      headerClass: "All-header",
      cellRenderer: (params) => (
        <CustSuppCell value={params.value} lineText="Head Office" />
      ),
    },
    {
      field: "status",
      headerName: "Status",
      headerClass: "All-header",
      cellRenderer: Status,
    },
  ]);

  const [itemVarientsRowData, setItemVarientsRowData] = useState([
    {
      itemcode: "ITEM-SC-BLK",
      size: "Small",
      color: "Black",
      qtyinstock: "11.00",
      location: "WAREHOUSE001",
      cost: "$ 400",
      status: "Active",
    },
    {
      itemcode: "ITEM-SC-BLK",
      size: "Small",
      color: "Black",
      qtyinstock: "11.00",
      location: "WAREHOUSE001",
      cost: "$ 400",
      status: "Active",
    },

    {
      itemcode: "ITEM-SC-BLK",
      size: "Small",
      color: "Black",
      qtyinstock: "11.00",
      location: "WAREHOUSE001",
      cost: "$ 400",
      status: "Active",
    },

    {
      itemcode: "ITEM-SC-BLK",
      size: "Small",
      color: "Black",
      qtyinstock: "11.00",
      location: "WAREHOUSE001",
      cost: "$ 400",
      status: "Active",
    },
  ]);

  const [itemVarientsColDefs, setItemVarientsColDefs] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dotscell,
    },
    {
      field: "itemcode",
      headerName: "Item Code",
      headerClass: "All-header",
    },

    {
      field: "size",
      headerName: "Size",
      headerClass: "All-header",
    },
    {
      field: "color",
      headerName: "Color",
      headerClass: "All-header",
    },
    {
      field: "qtyinstock",
      headerName: "Qty In Stock",
      headerClass: "All-header",
    },
    {
      field: "location",
      headerName: "Location",
      headerClass: "All-header",
      cellRenderer: (params) => (
        <CustSuppCell value={params.value} lineText="Head Office" />
      ),
    },
    {
      field: "status",
      headerName: "Status",
      headerClass: "All-header",
      cellRenderer: Status,
    },
  ]);

  const [attachmentsRowData, setAttachmentsRowData] = useState([
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
      status: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
      status: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
      status: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
    },
    {
      id: "1",
      supplier: "OCEC008",
      blanketorderno: "Order001",
      purchaser: "12 January 2024",
      startdate: "12 January 2024",
      postingdate: "12 January 2024",
      enddate: "12 January 2024",
      noofpo: "Currency",
      poamount: "Active",
    },
  ]);

  const [attachmentsColDefs, setAttachmentsColDefs] = useState([
    {
      filed: "dot",
      headerName: null,
      headerClass: "All-header",
      width: "20px",
      resizable: false,
      cellRenderer: Dots,
    },
    {
      field: "blanketorderno",
      headerName: "Document No.",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "purchaser",
      headerName: "Document Name",

      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "startdate",
      headerName: "Issue Date",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "postingdate",
      headerName: "Expiry Date",
      // width: "140px",
      headerClass: "All-header",
    },
    {
      field: "noofpo",
      headerName: "Attached By",
      // width: "250px",
      headerClass: "All-header",
    },
    {
      field: "poamount",
      headerName: "Notes",
      // width: "150px",
      headerClass: "All-header",
    },

    {
      field: "status",
      headerName: "Status",
      cellRenderer: Status,
      // width: "160px",
      sortable: false,
      headerClass: "All-header",
    },
  ]);

  const [transactionRowData, setTransactionRowData] = useState([
    {
      transactiontype: "Good Received Notes",
      reference: "DEL00232312",
      date: "12 Sep 2024",
      posteddate: "12 Sep 2024",
      datedue: "12 Aug 2030",
      quantity: "323.33",
      status: "Completed",
    },
    {
      transactiontype: "Good Received Notes",
      reference: "DEL00232312",
      date: "12 Sep 2024",
      posteddate: "12 Sep 2024",
      datedue: "12 Aug 2030",
      quantity: "323.33",
      status: "Completed",
    },
    {
      transactiontype: "Good Received Notes",
      reference: "DEL00232312",
      date: "12 Sep 2024",
      posteddate: "12 Sep 2024",
      datedue: "12 Aug 2030",
      quantity: "323.33",
      status: "Completed",
    },
  ]);

  const [transactionColDefs, setTransactionColDefs] = useState([
    {
      field: "transactiontype",
      headerName: "Transaction Type",
      headerClass: "All-header",
    },
    {
      field: "reference",
      headerName: "Reference",
      headerClass: "All-header",
    },

    {
      field: "date",
      headerName: "Transaction Date",
      headerClass: "All-header",
    },
    {
      field: "posteddate",
      headerName: "Posted Date",
      headerClass: "All-header",
    },
    {
      field: "datedue",
      headerName: "Due Date",
      headerClass: "All-header",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      headerClass: "All-header",
    },
    {
      field: "status",
      headerName: "Status",
      headerClass: "All-header",
    },
  ]);

  return (
    <Grab1>
      <NewScreensNav
        height={"22%"}
        // OPTIONS
        first={"Product Details"}
        second={"Order & Accounting"}
        third={"Additional Product Info"}
        fourth={"Custom Fields"}
        fifth={"Location Details"}
        sixth={"Supplier Details"}
        seventh={"Batch & Serial Numbers"}
        eighth={"Item Variants"}
        ninth={"Attachments"}
        tenth={"Transactions"}
        eleventh={"Activity"}
        // CLASSES FOR SCROLL
        class1={"inputSec"}
        class2={"information"}
        class3={"customField"}
        class4={"address"}
        class5={"contact"}
        class6={"bank"}
        class7={"attachment"}
        class8={"correspondence"}
        class9={"transaction"}
        class10={"activity"}
      />
      <Wrapit1>
        <Header
          title={keys.KEY100272}
          firstNav={keys.KEY0002}
          secNav={keys.KEY1004}
          thirdNav={keys.KEY100274}
          navActive={keys.KEY100273}
        />
        <HeaderNewButtons State={true} />
        <Div>
          {/* <AccountsSideNav
            title={keys.KEY100258}
            first={keys.KEY100275}
            second={keys.KEY100276}
            third={keys.KEY100277}
            fourth={keys.KEY10090}
            fifth={keys.KEY100278}
            sixth={keys.KEY100279}
            seventh={keys.KEY100280}
            eighth={keys.KEY100281}
            ninth={keys.KEY100260}
            tenth={keys.KEY10011}
            eleventh={keys.KEY100261}
          /> */}

          <ScrollableSection>
            <Grab id="section1" max={maxModal}>
              <TitleOfSection title={"PRODUCT DETAILS"} />
              <Line />

              <Wrapit>
                <Wrapper>
                  <Box>
                    <InsertPictureBox>Insert Picture</InsertPictureBox>
                  </Box>
                  <FieldsBox>
                    <ChartAccountInput
                      Name="Item Code"
                      Hash="*"
                      Padding={true}
                      setWidth={"true"}
                    />
                    <ChartAccountInput
                      Name="Item Name"
                      Hash="*"
                      Padding={true}
                      setWidth={"true"}
                    />
                    <DropdownInput
                      Name={keys.KEY100299}
                      Padding={false}
                      setWidth={true}
                    />
                    <DropdownInput
                      Name={keys.KEY100300}
                      Padding={false}
                      setWidth={true}
                    />
                    <DropdownInput
                      Name={keys.KEY100301}
                      Padding={false}
                      setWidth={true}
                    />
                  </FieldsBox>
                  <FieldsBox>
                    <DropdownInput
                      Name={keys.KEY100302}
                      Padding={false}
                      setWidth={true}
                    />
                    <ChartAccountInput
                      Name="Base Price"
                      Padding={true}
                      setWidth={"true"}
                    />
                    <ChartAccountInput
                      Name="Unit Cost"
                      Padding={true}
                      setWidth={"true"}
                    />
                    <ChartAccountInput
                      Name="Last Purchase Cost"
                      Padding={true}
                      setWidth={"true"}
                    />
                    <DropdownInput
                      Name={keys.KEY100303}
                      Padding={false}
                      setWidth={true}
                    />
                  </FieldsBox>
                  <FieldsBox>
                    <ChartAccountInput
                      Name="Bar Code No."
                      Padding={true}
                      setWidth={"true"}
                    />
                    <DropdownInput
                      Name={keys.KEY100304}
                      Padding={false}
                      setWidth={true}
                    />
                    <DropdownInput
                      Name={keys.KEY100305}
                      Padding={false}
                      setWidth={true}
                    />
                    <ChartAccountInput
                      Name="Max Discount %"
                      Padding={true}
                      setWidth={"true"}
                    />
                    <FlexContainer>
                      <Text3 txtColor={"#58606f"}>Commission Item?</Text3>
                      <InputCheckOne
                        style={{ cursor: "pointer" }}
                        type="checkbox"
                      />
                    </FlexContainer>
                  </FieldsBox>

                  <LongDescriptionInput Name="Long Description" />
                </Wrapper>
              </Wrapit>
            </Grab>

            <Grab id="section2">
              <TitleOfSection title={"ORDER & ACCOUNTING"} />
              <Line />
              <Wrapit>
                <Wrapper2>
                  <LeftWrapper>
                    <FieldsBox>
                      <TextTitle txtColor={themeKeys.primary}>
                        {keys.KEY100293}
                      </TextTitle>
                      <DropdownInput
                        Name={keys.KEY100306}
                        Padding={false}
                        setWidth={true}
                      />
                      <DropdownInput
                        Name={keys.KEY100307}
                        Padding={false}
                        setWidth={true}
                      />
                      <DropdownInput
                        Name={keys.KEY100308}
                        Padding={false}
                        setWidth={true}
                      />
                      <DropdownInput
                        Name={keys.KEY100309}
                        Padding={false}
                        setWidth={true}
                      />
                    </FieldsBox>
                    <FieldsBox>
                      <TextTitle txtColor={themeKeys.primary}>
                        {keys.KEY100294}
                      </TextTitle>
                      <DropdownInput
                        Name={keys.KEY100310}
                        Padding={false}
                        setWidth={true}
                      />
                      <DropdownInput
                        Name={keys.KEY100311}
                        Padding={false}
                        setWidth={true}
                      />
                      <DropdownInput
                        Name={keys.KEY100312}
                        Padding={false}
                        setWidth={true}
                      />
                      <DropdownInput
                        Name={keys.KEY100313}
                        Padding={false}
                        setWidth={true}
                      />
                    </FieldsBox>
                    <FieldsBox>
                      <TextTitle txtColor={themeKeys.primary}>
                        {keys.KEY100295}
                      </TextTitle>
                      <ChartAccountInput
                        Name="Minimum Stock Qty"
                        Padding={true}
                        setWidth={"true"}
                        textAlignRight={true}
                      />
                      <ChartAccountInput
                        Name="Maximum Stock Qty"
                        Padding={true}
                        setWidth={"true"}
                        textAlignRight={true}
                      />
                      <ChartAccountInput
                        Name="Re-Order Qty"
                        Padding={true}
                        setWidth={"true"}
                        textAlignRight={true}
                      />
                      <DropdownInput
                        Name={keys.KEY100315}
                        Padding={false}
                        setWidth={true}
                      />
                    </FieldsBox>
                  </LeftWrapper>

                  <RightWrapper>
                    <ActiveButton name={"Active"} />
                  </RightWrapper>
                  <RightWrapper>
                    <ThreeCardsComponents />
                  </RightWrapper>
                </Wrapper2>
              </Wrapit>
            </Grab>

            <Grab id="section3">
              <TitleOfSection title={"ADDITIONAL PRODUCT INFO"} />
              <Line />
              <Wrapit>
                <WrapperforTop>
                  <FieldsBox>
                    <TextTitle txtColor={themeKeys.primary}>
                      {keys.KEY100296}
                    </TextTitle>
                    <WholeQRRapper>
                      <QRBOXComponent value="https://www.google.com" />
                    </WholeQRRapper>
                  </FieldsBox>
                  <FieldsBox>
                    <TextTitle txtColor={themeKeys.primary}>
                      {keys.KEY100297}
                    </TextTitle>
                    <DropdownInput
                      Name={keys.KEY100316}
                      Padding={false}
                      setWidth={true}
                    />
                    <DropdownInput
                      Name={keys.KEY100317}
                      Padding={false}
                      setWidth={true}
                    />
                    <DropdownInput
                      Name={keys.KEY100318}
                      Padding={false}
                      setWidth={true}
                    />
                    <DropdownInput
                      Name={keys.KEY100319}
                      Padding={false}
                      setWidth={true}
                    />
                  </FieldsBox>
                  <FieldsBox>
                    <TextTitle txtColor={themeKeys.primary}>
                      {keys.KEY100298}
                    </TextTitle>
                    <FlexContainer>
                      <Text3 txtColor={"#58606f"}>Show on Portal</Text3>
                      <InputCheckOne
                        style={{ cursor: "pointer" }}
                        type="checkbox"
                      />
                    </FlexContainer>
                  </FieldsBox>
                </WrapperforTop>
              </Wrapit>
            </Grab>

            <Grab id="section4">
              <CustomFields />
            </Grab>

            <Grab>
              <JornalTables
                Icon={"AddBlue"}
                Title={"Add New"}
                Name={"LOCATION DETAILS"}
                ColData={locationColDefs}
                RowData={locationRowData}
                button={"true"}
                ShowButton={true}
              />
              <JornalTables
                Icon={"AddBlue"}
                Title={"Add New"}
                Name={"SUPPLIER DETAILS"}
                ColData={supplierDetailColDefs}
                RowData={supplierDetailRowData}
                button={"true"}
                ShowButton={true}
              />

              <JornalTables
                Icon={"AddBlue"}
                Title={"Add New"}
                Name={"BATCH & SERIAL NUMBERS"}
                ColData={batchSerailNumbersColDefs}
                RowData={batchSerailNumbersRowData}
                button={"true"}
                ShowButton={true}
              />

              <JornalTables
                Icon={"AddBlue"}
                Title={"Add New"}
                Name={"ITEM VARIANTS"}
                ColData={itemVarientsColDefs}
                RowData={itemVarientsRowData}
                button={"true"}
                ShowButton={true}
              />

              <JornalTables
                Icon={"AttachIcon"}
                Title={"Attach"}
                Name={"ATTACHMENTS"}
                ColData={attachmentsColDefs}
                RowData={attachmentsRowData}
                button={"true"}
                ShowButton={true}
              />

              <JornalTables
                Icon={"Export"}
                Title={"Export"}
                Name={"TRANSACTIONS"}
                ColData={transactionColDefs}
                RowData={transactionRowData}
                button={"true"}
                ShowButton={true}
              />
              <ActivityPart />
            </Grab>
          </ScrollableSection>
        </Div>
      </Wrapit1>
    </Grab1>
  );
};

export default ProductandServicesListNew;
