import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Tag = styled.div`
  background-color: ${(props) => props.color};
  color: white;
  padding: 1px 10px;
  border-radius: 8px;
  font-size: 11px;
  align-self: center;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const CurrencyTags = ({ Data }) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  // Ensure Data.currencies is an array or fallback to an empty array
  const currencies = Array.isArray(Data) ? Data : [];

  return (
    <Wrapper>
      {currencies.map((currency, index) => (
        <Tag color={themeKeys.primary} key={index}>
          {currency}
        </Tag>
      ))}
    </Wrapper>
  );
};

export default CurrencyTags;
