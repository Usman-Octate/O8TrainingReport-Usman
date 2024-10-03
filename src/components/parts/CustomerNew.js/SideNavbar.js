import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 156.22px;
  height: 818px;
  @media (max-width: 1213px) {
    width: 130px;
  }
  @media (max-width: 1177px) {
    width: 110px;
  }
`;
const SectionTitle = styled.div`
  font-size: 12px;
  color: #464f60;
  font-weight: 700;
  padding: 30px 0px;
  text-align: center;
  width: 78px;
  margin: auto;
  @media (max-width: 1177px) {
    font-size: 10px;
  }
`;
const SectionNames = styled.div`
  text-align: center;
  margin: auto;
`;
const Names = styled.button`
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  font-weight: 400;
  width: 115px;
  padding: 15px 0px;
  margin: auto;
  color: #464f60;
  cursor: pointer;
  background-color: transparent;
  border: none;
  @media (max-width: 1177px) {
    font-size: 10px;
  }
`;

const SideNavbar = () => {
  return (
    <Wrapper>
      <SectionNames>
        <SectionTitle>SECTION LIST</SectionTitle>

        <Names>Customer Details</Names>

        <Names>General Information</Names>

        <Names>Custom Fields</Names>

        <Names>Address Details</Names>
        <Names>Contact Person</Names>
        <Names>Bank Information</Names>
        <Names>Attachments</Names>
        <Names>Communication Logs</Names>
        <Names>Transactions</Names>
        <Names>Activity</Names>
      </SectionNames>
    </Wrapper>
  );
};

export default SideNavbar;
