import React from "react";
import styled from "styled-components";
const Wrap = styled.div`
  height: 45px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -9px;
  margin-bottom: -26px;
`;
const Row2 = styled.div`
  /* margin-bottom: -100px; */
`;
const Currency = styled.div`
  font-weight: 700;
`;
const Value = styled.div``;
const CurrencyCell = ({ value }) => {
  return (
    <Wrap>
      <Row>
        <Currency>USD</Currency>
        <Value>$ {value}</Value>
      </Row>
      <Row2>United States Dollar</Row2>
    </Wrap>
  );
};

export default CurrencyCell;
