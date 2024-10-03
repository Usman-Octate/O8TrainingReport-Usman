import React, { useState } from "react";
import styled from "styled-components";
import ChartAccountInput from "../../components/Inputs/ChartAccountInput";
import DropdownInput from "../../components/Inputs/DropdownInput";
import Auto from "../../assets2/ChartOfAccountNew/InputAuto.svg";
import ContactDropdown from "../../components/Inputs/ContactNewInput";
import { useSelector } from "react-redux";
import DetailDropDown from "../../components/Inputs/DetailDropDown";
import LargeButton from "../../components/buttons/LargeButton";
import CalenderInput from "../../components/Inputs/CalenderInput";
import TitleOfSection from "../Components/TitleOfSection";

const Div = styled.div`
  /* height: 66vh; */
  width: 100%;

  /* padding: 0 10px; */
  /* background-color: green; */
`;
const Main = styled.div`
  display: flex;
  gap: 20px;
`;
const FirstCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const FieldsBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
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
    width: 88%;
  }
`;

const Wrap2 = styled.div`
  display: flex;
  // align-items: center;
  // background-color: blue;
  width: 100%;
  justify-content: space-between;
  gap: 5px;
  margin-top: 20px;
`;
const FirstCol2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0px 110px; */
  gap: 15px;
`;
const CheckSec = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #5f656f;
  width: 80px;
`;
const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
const RowInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 10px;
  margin: 20px 0;
`;
const Purchaseinputs = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const warehouseaddress = [
    {
      name: "Warehouse Address 1",
      area: "101 Building 11",
      street: "Al Falak Street ",
      city: "Dubai Internet City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 2",
      area: "103 Building 11",
      street: "Main Street ",
      city: "Sharjah City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 3",
      area: "104 Building 11",
      street: "Sea View Street ",
      city: "Dubai Internet City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 4",
      area: "105 Building 11",
      street: "Beach Star Hotal Street",
      city: "Abu Dhabi City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 5",
      area: "106 Building 11",
      street: "Dubai Stadium Street",
      city: "Dubai City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 6",
      area: "107 Building 11",
      street: "Al Falak Street ",
      city: "Dubai Internet City",
      country: "Dubai United Arab Emirates",
    },
    {
      name: "Warehouse Address 7",
      area: "1018 Building 11",
      street: "Expo Center Mall",
      city: "Dubai Internet City",
      country: "Dubai United Arab Emirates",
    },
  ];
  const billingaddress = [
    {
      name: "Address Lane 1",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 2",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 3",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 7",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 4",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 5",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
    {
      name: "Address Lane 6",
      area: "State",
      street: "City",
      city: "State",
      country: "Country",
    },
  ];

  return (
    <Div>
      <TitleOfSection title={props.Title} />
      <Line />
      <Wrap2>
        {/* <Tag> */}
        <Main>
          <FirstCol>
            <DropdownInput Name={"Supplier"} Padding={true} setWidth={false} />
            <DropdownInput Name={"Currency"} Padding={true} setWidth={false} />
            <ContactDropdown setWidth={"true"} />
          </FirstCol>
          <FirstCol>
            <FieldsBox>
              <DetailDropDown
                options={warehouseaddress}
                setWidth={false}
                check={false}
                Name="Shipping Address"
                isDropdownOpen={false}
              />
            </FieldsBox>
          </FirstCol>
          <FirstCol>
            <FieldsBox>
              <DetailDropDown
                options={billingaddress}
                setWidth={false}
                check={false}
                Name="Billing Address"
                isDropdownOpen={false}
              />
            </FieldsBox>
          </FirstCol>
        </Main>
        <Button>
          <LargeButton name={"Active"} />
        </Button>
        {/* </Tag> */}
        <FirstCol2>
          <ChartAccountInput
            Name={props.colName1}
            Hash="*"
            Padding={true}
            setWidth={"true"}
            image={Auto}
          />
          <ChartAccountInput
            Name={props.colName2}
            Padding={true}
            setWidth={"true"}
          />
          <CalenderInput Name={props.colName3} width={true} />
          <CalenderInput Name={props.colName4} width={true} />
          <CalenderInput Name={props.colName5} width={true} />
          <DropdownInput Name={"Purchaser"} Padding={true} setWidth={"equal"} />
        </FirstCol2>
      </Wrap2>
      <RowInputs>
        {props.showInput ? (
          <DropdownInput Name={"P.O Type"} Padding={true} setWidth={"short"} />
        ) : null}

        <DropdownInput
          Name={"Delivery Type"}
          Padding={true}
          setWidth={"short"}
        />
        <DropdownInput
          Name={"Payment Terms"}
          Padding={true}
          setWidth={"short"}
        />
        <DropdownInput
          Name={"Payment Mode"}
          Padding={true}
          setWidth={"short"}
        />
        <DropdownInput Name={"Discount"} Padding={true} setWidth={"short"} />
        <DropdownInput Name={"Project"} Padding={true} setWidth={"short"} />
        <CheckSec>
          <Text>On Hold</Text>
          <Checkbox type="checkbox" />
        </CheckSec>
      </RowInputs>
    </Div>
  );
};

export default Purchaseinputs;
