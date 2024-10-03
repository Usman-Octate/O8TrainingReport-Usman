import React from "react";
import styled from "styled-components";
import {
  Grid2,
  Grid10,
  Grid,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  Grid8,
  Grid9,
  Total,
} from "../Components/HeroSections/Style";

const AmountTotal = ({TotalDebit, TotalCredit,TotalDebitFC,TotalCreditFC, VarianceAmount}) => {
  return (
    <Total>
      <div>
        <Grid>Total Debit</Grid>
        <Grid2>Total Credit</Grid2>
        <Grid3>Total Debit FC</Grid3>
        <Grid4>Total Credit FC</Grid4>
        <Grid5>Variance Amount</Grid5>
      </div>
      <div>
        <Grid6>{TotalDebit}</Grid6>
        <Grid7>{TotalCredit}</Grid7>
        <Grid8>{TotalDebitFC}</Grid8>
        <Grid9>{TotalCreditFC}</Grid9>
        <Grid10>{VarianceAmount}</Grid10>
      </div>
    </Total>
  );
};

export default AmountTotal;
