import React from "react";
import styled from "styled-components";
import filterclose from "../../assets2/ChartOfAccountNew/FilterClose.svg";
import filterplus from "../../assets2/ChartOfAccountNew/FilterPlus.svg";

const FilterOptions = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  width: 462px;
  height: 88px;
  padding: 15px 20px;
  position: absolute;
  top: 105%;
  right: 0%;
  /* left: 0; */
  /* z-index: 1; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
`;
const InputFields = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Input1 = styled.input`
  width: 124.3px;
  height: 22px;
  border: 1px solid #7f7f7f40;
  border-radius: 5.5px;
  outline: none;
  /* color: rgba(127, 127, 127, 35%); */
  padding-left: 10px;
  font-size: 12px;
`;
const Input2 = styled.input`
  width: 124.3px;
  height: 22px;
  border: 1px solid #7f7f7f40;
  border-radius: 5.5px;
  outline: none;
  /* color: rgba(127, 127, 127, 35%); */
  padding-left: 10px;
  font-size: 12px;
`;
const Input3 = styled.input`
  width: 124.3px;
  height: 22px;
  border: 1px solid #7f7f7f40;
  border-radius: 5.5px;
  outline: none;
  /* color: rgba(127, 127, 127, 35%); */
  padding-left: 10px;
  font-size: 12px;
`;
const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AddBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 12px;
  padding: 0px 18px;
  color: #7f7f7f;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Btn1 = styled.button`
  background-color: transparent;
  border: 1px solid #7f7f7f40;
  border-radius: 5.5px;
  color: #464f60;
  font-size: 12px;
  height: 23px;
  width: 88px;
  cursor: pointer;
`;
const Btn2 = styled.button`
  background-color: #023f81;
  color: #ffffff;
  font-size: 12px;
  height: 23px;
  width: 88px;
  border: none;
  border-radius: 5.5px;
  cursor: pointer;
`;
const Line = styled.div`
  background-color: #7f7f7f26;
  height: 1px;
  width: 100%;
`;

const Filter = () => {
  return (
    <FilterOptions>
      <InputFields>
        <Input1 placeholder="Column Filter" />
        <Input2 placeholder="Equals" />
        <Input3 placeholder="Value" />
        <img
          style={{
            border: "1px solid #7F7F7F80",
            borderRadius: "50%",
            padding: "4px",
            cursor: "pointer",
          }}
          src={filterclose}
          alt="xde"
        />
      </InputFields>
      <Line />
      <AddButton>
        <AddBtn>
          <div
            style={{
              border: "1px solid #7F7F7F80",
              borderRadius: "50%",
              padding: "0 3px",
              cursor: "pointer",
            }}
          >
            <img src={filterplus} alt="xde" />
          </div>
          Add Filter
        </AddBtn>

        <Btns>
          <Btn1>Clear Filters</Btn1>
          <Btn2>Save Filters</Btn2>
        </Btns>
      </AddButton>
    </FilterOptions>
  );
};

export default Filter;
