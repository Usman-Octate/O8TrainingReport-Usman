// CustomButtonRenderer.js

import React from 'react';
import styled from 'styled-components';
import { FaPlusCircle } from 'react-icons/fa';
import { useSelector } from "react-redux";


const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.themeColor || "#f8f9fa"};
  color: white;
  border: none;
  padding: 9px 12px;
  cursor: pointer;
  border-radius: 8px;
  /* width: 100%; */
  font-size: 14px;
  margin: 0px 100px 0px 100px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    /* background-color: ${(props) => props.theme.secondaryColor || '#0056b3'}; */
   /* transform: scale(1.05); */
  }

  &:focus {
    outline: none;
  }

  svg {
    margin-right: 8px;
  }
`;

const CustomButtonRenderer = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const onButtonClick = () => {
    alert('Add New Button clicked!');
    // You can add more logic here to handle the button click
  };

  return (
    <Button themeColor={themeKeys.primary} onClick={onButtonClick}>
      <FaPlusCircle size={18} />
      Add Row
    </Button>
  );
};

export default CustomButtonRenderer;
