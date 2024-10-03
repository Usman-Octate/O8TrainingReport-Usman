import React, { useState } from "react";
import { Wrapper, SectionNames, SectionTitle, Names } from "./NavStyle";

const LayoutNav = (props) => {
  const [selectedOption, setSelectedOption] = useState(""); // State to keep track of selected option

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    props.onOpenScreen(option);
  };

  return (
    <Wrapper>
      <SectionNames>
        <SectionTitle textColor={props.color}>{props.title}</SectionTitle>
        <Names
          HoverColor={props.hoverColor}
          isSelected={selectedOption === "Sales Quotes"}
          onClick={() => handleOptionClick("Sales Quotes")}
        >
          {props.first}
        </Names>
        <Names
          HoverColor={props.hoverColor}
          isSelected={selectedOption === "Sales Order"}
          onClick={() => handleOptionClick("Sales Order")}
        >
          {props.second}
        </Names>
        <Names
          HoverColor={props.hoverColor}
          isSelected={selectedOption === "Delivery"}
          onClick={() => handleOptionClick("Delivery")}
        >
          {props.third}
        </Names>
        <Names
          HoverColor={props.hoverColor}
          isSelected={selectedOption === "Customer Return"}
          onClick={() => handleOptionClick("Customer Return")}
        >
          {props.fourth}
        </Names>
        <Names
          HoverColor={props.hoverColor}
          isSelected={selectedOption === "Sales Invoice"}
          onClick={() => handleOptionClick("Sales Invoice")}
        >
          {props.fifth}
        </Names>
        <Names
          HoverColor={props.hoverColor}
          isSelected={selectedOption === "Credit Note"}
          onClick={() => handleOptionClick("Credit Note")}
        >
          {props.sixth}
        </Names>
        <Names
          HoverColor={props.hoverColor}
          isSelected={selectedOption === "Customer Payment"}
          onClick={() => handleOptionClick("Customer Payment")}
        >
          {props.seventh}
        </Names>
      </SectionNames>
    </Wrapper>
  );
};

export default LayoutNav;
