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

const CustomerSupplierCell = ({ value, lineText }) => {
  return (
    <Wrap>
      <Value>{value}</Value>
      <Line>{lineText}</Line>
    </Wrap>
  );
};

export default CustomerSupplierCell;
