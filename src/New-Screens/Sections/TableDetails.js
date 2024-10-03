import React from "react";
import styled from "styled-components";
import AgGridTable2 from "../../components/Table/AgGridTable2";
import AddButton from "../../components/buttons/AddButton";
import { useSelector } from "react-redux";
import TitleOfSection from "../Components/TitleOfSection";

const Main = styled.div``;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Title = styled.div`
  color: ${(props) => props.txtColor};
  font-size: 12px;
  font-weight: 700;
  margin: 10px 10px;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
`;

const TableDetails = ({
  onColumnMoved,
  onSortChanged,
  onCellValueChanged,
  colDefs,
  rowData,
  buttons,
  name,
  rowClassRules,
  customRowStyles,
  rowClass,
  rowStyle,
  pinnedBottomRowData,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  return (
    <Main>
      <Head>
        <TitleOfSection title={name} />
        <Buttons>
          {buttons.map((button) => (
            <AddButton
              key={button.title}
              icon={button.icon}
              title={button.title}
            />
          ))}
        </Buttons>
      </Head>
      <AgGridTable2
        Height={false}
        rowData={rowData}
        colDefs={colDefs}
        rowClassRules={rowClassRules} 
        customRowStyles={customRowStyles} 
        rowClass={rowClass}
        rowStyle={rowStyle}
        pinnedBottomRowData={pinnedBottomRowData}
        onCellValueChanged={onCellValueChanged}
        onSortChanged={onSortChanged}
        onColumnMoved={onColumnMoved}
      />
    </Main>
  );
};

export default TableDetails;
