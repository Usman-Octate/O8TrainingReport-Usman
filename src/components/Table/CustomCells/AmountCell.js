import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div``;

const AmountCell = ({ value }) => {
  return <Main>${value}.00</Main>;
};

export default AmountCell;
