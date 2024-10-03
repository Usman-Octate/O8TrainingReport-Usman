import React from "react";
import styled from "styled-components";
import SalesQoutes from "./SalesQoutes";
import SalesOrder from "./SalesOrder";
import Delivery from "./Delivery";
import CustomerRet from "./CustomerRet";
import SalesInvoice from "./SalesInvoice";
import CreditNote from "./CreditNote";
import CustomerPay from "./CustomerPay";

const Wrapper = styled.div``;

const HeroSection2 = ({ setTheme }) => {
  return (
    <Wrapper>
      <SalesQoutes setColor={setTheme} />
      <SalesOrder setColor={setTheme} />
      <Delivery setColor={setTheme} />
      <CustomerRet setColor={setTheme} />
      <SalesInvoice setColor={setTheme} />
      <CreditNote setColor={setTheme} />
      <CustomerPay setColor={setTheme} />
    </Wrapper>
  );
};

export default HeroSection2;
