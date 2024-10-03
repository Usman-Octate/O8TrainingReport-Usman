import React from "react";
import { useAppContext } from "../../../context/AppProvider";
import DropDown from "../../buttons/DropDown";
import {
  Section,
  Image3,
  Textutil,
  Wrapper3,
  Btn1,
  SubText,
  Para,
  Grab3,
  Text3,
  Line3,
} from "./Style";
import { useSelector } from "react-redux";

const Activity = ({
  TextColor,
  activity,
  data,
  payment,
  credit,
  invoice,
  customer,
  delivery,
  qoutes,
  Data,
  defaultData,
}) => {
  const { HandleOnChange, isView } = useAppContext();
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  return (
    <div>
      <Section>
        <Image3 style={{ cursor: "pointer" }} onClick={HandleOnChange}>
          {isView ? (
            <DropDown icon={"ArrowDown"} />
          ) : (
            <DropDown icon={"ArrowRight"} />
          )}
        </Image3>
        <Textutil color={TextColor}>ACTIVITY</Textutil>
      </Section>

      {isView ? (
        <Wrapper3>
          <Btn1 Color={themeKeys.lightVersion}>23 JAN 2023</Btn1>
          <SubText>
            <Text3>11:27 AM</Text3>
            <Para>
              {data === "Sales Order"
                ? "Data has been changed to Sales Order"
                : data === "Sales Quotes"
                ? "Data has been changed to Sales Qoutes"
                : data === "Delivery"
                ? "Data has been changed to Delivery"
                : data === "Customer Return"
                ? "Data has been changed to Customer Return"
                : data === "Sales Invoice"
                ? "Data has been changed to Sales Invoice"
                : data === "Credit Note"
                ? "Data has been changed to Credit Note"
                : data === "Customer Payment"
                ? "Data has been changed to Customer Payment"
                : "Default Data Default Data Default Data Default Data"}
            </Para>
          </SubText>
          <SubText>
            <Text3>11:27 AM</Text3>
            <Para>
              {data === "Sales Order"
                ? "Data has been changed to Sales Order"
                : data === "Sales Quotes"
                ? "Data has been changed to Sales Qoutes"
                : data === "Delivery"
                ? "Data has been changed to Delivery"
                : data === "Customer Return"
                ? "Data has been changed to Customer Return"
                : data === "Sales Invoice"
                ? "Data has been changed to Sales Invoice"
                : data === "Credit Note"
                ? "Data has been changed to Credit Note"
                : data === "Customer Payment"
                ? "Data has been changed to Customer Payment"
                : "Default Data Default Data Default Data Default Data"}
            </Para>
          </SubText>
          <Grab3>
            <Btn1 Color={themeKeys.lightVersion}>23 JAN 2023</Btn1>
            <SubText>
              <Text3>11:27 AM</Text3>
              <Para>
                {data === "Sales Order"
                  ? "Data has been changed to Sales Order"
                  : data === "Sales Quotes"
                  ? "Data has been changed to Sales Qoutes"
                  : data === "Delivery"
                  ? "Data has been changed to Delivery"
                  : data === "Customer Return"
                  ? "Data has been changed to Customer Return"
                  : data === "Sales Invoice"
                  ? "Data has been changed to Sales Invoice"
                  : data === "Credit Note"
                  ? "Data has been changed to Credit Note"
                  : data === "Customer Payment"
                  ? "Data has been changed to Customer Payment"
                  : "Default Data Default Data Default Data Default Data"}
              </Para>
            </SubText>
          </Grab3>
        </Wrapper3>
      ) : null}
      <Line3 />
    </div>
  );
};

export default Activity;
