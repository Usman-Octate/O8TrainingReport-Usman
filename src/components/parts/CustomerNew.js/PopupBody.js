import React from "react";
import styled from "styled-components";
import AccountNewHeader from "../ChartofAccountNew/AccountNewHeader";
import HeaderNewButtons from "../../buttons/HeaderNewButtons";
import ChartAccountInput from "../../Inputs/ChartAccountInput";

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 10px;
`;
const Title = styled.div`
  color: #023f81;
  font-size: 12px;
  font-weight: 700;
  margin: 10px 10px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
`;
const TopSection = styled.div``;
const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  margin: 10px 0px;
  @media (max-width: 1166px) {
    width: 88%;
  }
`;
const Section1 = styled.div`
  width: 200px;
`;
const InputSection = styled.div``;

const PopupBody = () => {
  return (
    <Wrapper>
      <AccountNewHeader
        firstNav="Home"
        secNav="Order to Cash"
        thirdNav="Customer List"
        navActive="Customer - New"
      />
      <HeaderNewButtons />
      <TopSection>
        <Title>CUSTOMER DETAILS</Title>
        <Line />
        <InputSection>
          <Section1>
            <ChartAccountInput Name="Customer Code" Hash="*" Padding={true} />
          </Section1>
        </InputSection>
      </TopSection>
    </Wrapper>
  );
};

export default PopupBody;
