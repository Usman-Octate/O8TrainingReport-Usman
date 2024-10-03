import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  margin-right: 150px;
  color: #aaadb3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 300;
  font-size: 12px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: transparent;
  }
`;

const AddRowButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      + Add Row
    </Button>
  );
};

export default AddRowButton;
