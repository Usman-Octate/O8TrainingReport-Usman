import React, { useState } from "react";
import styled from "styled-components";
import HeroSection from "../../components/parts/Layout and Template/HeroSection";
import Header from "../../components/parts/Header";
// import AccountsSideNav from "../../components/parts/ChartofAccountNew/AccountsSideNav";
import LayoutNav from "../../components/parts/LayoutNav";
import { useSelector } from "react-redux";
import AgGridTable from "../../../src/components/Table/AgGridTable";
import JornalTables from "../../New-Screens/Sections/JornalTables";
import NewScreensNav from "../../New-Screens/Components/NewScreensNav";

const Main = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TopDiv = styled.div`
  /* overflow-x: auto; */
`;
const TopDivWrapper = styled.div`
  /* overflow-x: auto; */
  /* background-color: red; */
  /* width: 100vw; */

  min-height: 5vh;
  @media (max-width: 1024px) {
    min-height: 12.3rem;
  }
  @media (max-width: 1450px) {
    min-height: 11.1rem;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  /* background-color: #00ff00; */
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-height: 900px) {
    height: 85vh;
  }
`;
const Grab = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1rem;
  margin-top: 50px;
  /* height: 90vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  } */
`;
const LayoutTemp = () => {
  const [selected, setSelected] = useState(null);
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const OpenScreen = (value) => {
    setSelected(value);
    console.log(selected);
  };

  const keys = useSelector((state) => state.localization.keys);

  const [rowDef, setroeDef] = useState([]);

  const [colDefs, setColDefs] = useState([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: "60px",
      resizable: false,
      filter: false,
      headerClass: "id-cell",
    },
    {
      field: "id",
      headerName: "ID",
      width: "80px",
      filter: false,
      headerClass: "id-cell",
    },
    {
      field: "customercode",
      headerName: "Screen Title",
      // width: "200px",
      cellRenderer: Customer,
      headerClass: "All-header",
    },
    {
      field: "creditnoteno",
      headerName: "Description",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "currency",
      cellRenderer: Currency,
      headerName: "IsDefault",

      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "transactiondate",
      headerName: "Data Created",
      // width: "160px",
      headerClass: "All-header",
    },
    {
      field: "postingdate",
      headerName: "Data Modified",
      // width: "140px",
      headerClass: "All-header",
    },
    {
      field: "duedate",
      headerName: "User",
      // width: "250px",
      headerClass: "All-header",
    },
    {
      field: "contactname",
      headerName: "Status",
      // width: "150px",
      headerClass: "All-header",
    },
  ]);

  return (
    <Main>
      <NewScreensNav
        height={"30%"}
        // OPTIONS
        first={"Sales Agent Details"}
        second={"Tiered Comission"}
        third={"Comission"}
        fourth={"Transactions"}
        fifth={"Attachments"}
        sixth={"Activity"}
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
      <TopDivWrapper>
        <TopDiv>
          <Header
            title={keys.KEY100164}
            firstNav={keys.KEY0002}
            secNav={keys.KEY1002}
            navActive={"Layout & Template"}
          />
        </TopDiv>
      </TopDivWrapper>
      <Grab>
        {/* <LayoutNav
          title={"TRANSACTION LIST"}
          first={"Sales Qoutes"}
          second={"Sales Order"}
          third={"Delivery"}
          fourth={"Customer Return"}
          fifth={"Sales Invoice"}
          sixth={"Credit Note"}
          seventh={"Customer Payment"}
          onOpenScreen={OpenScreen}
          color={themeKeys.primary}
          hoverColor={themeKeys.lightVersion}
        /> */}
        <Wrapper>
          <JornalTables
            Icon={"AddBlue"}
            Title={"Add New"}
            Name={"ADDRESS DETAILS"}
            ColData={colDefs}
            RowData={rowDef}
            button={"true"}
          />
        </Wrapper>
      </Grab>
    </Main>
  );
};

export default LayoutTemp;
