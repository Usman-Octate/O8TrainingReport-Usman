import React from "react";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 35px;
`;
const Value = styled.div`
  font-weight: bold;
  text-align: left;
  /* margin-bottom: -25px;
  margin-top: -11px; */
`;
const Line = styled.div`
  text-align: left;
`;
const RealGain = ({ value }) => {
  return (
    <Wrap>
      <Value>{value}</Value>
      <Line>Realized Gain/Loss Account</Line>
    </Wrap>
  );
};

export default RealGain;
