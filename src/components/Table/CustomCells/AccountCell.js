import React from "react";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 35px;
`;
const Value = styled.div`
  font-weight: bold;
  margin-bottom: -25px;
  margin-top: -11px;
`;
const Line = styled.div``;
const AccountCell = ({ value }) => {
  return (
    <Wrap>
      <Value>{value}</Value>
      <Line>Item Adjustment Account</Line>
    </Wrap>
  );
};

export default AccountCell;
