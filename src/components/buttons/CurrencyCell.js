import React from 'react';
import styled from 'styled-components';

// Styled components
const CurrencyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  font-size: 12px; 
`;

const CurrencyDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
`;

const CurrencyCode = styled.div`
  font-weight: 500;
  margin-bottom: 2px;
`;

const CurrencyFullForm = styled.div`
  color: #464f60cc;
  opacity: 0.5;
`;

const CurrencySymbol = styled.div`
  font-size: 12px;
  margin-right: 2px;
  font-weight: 500;
`;

const CurrencyAmount = styled.div`
  font-size: 12px; 
  font-weight: 500;
  color: #464f60cc;
`;

const CurrencyValue = styled.div`
  display: flex;
`;

// Currency component with optional props for flexibility
const Currency = ({ code, fullForm, symbol, amount }) => {
  return (
    <CurrencyContainer>
      <CurrencyDetails>
        {code && <CurrencyCode>{code}</CurrencyCode>}
        <CurrencyValue>
          {symbol && <CurrencySymbol>{symbol}</CurrencySymbol>}
          {amount && <CurrencyAmount>{amount}</CurrencyAmount>}
        </CurrencyValue>
      </CurrencyDetails>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {fullForm && <CurrencyFullForm>{fullForm}</CurrencyFullForm>}
      </div>
    </CurrencyContainer>
  );
};

export default Currency;
