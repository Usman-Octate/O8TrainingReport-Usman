import React, { useRef } from "react";
import styled from "styled-components";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { useSelector } from "react-redux";

const CenteredColumnsGrid = styled.div`
  .ag-cell,
  .ag-header-cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const GridDiv = styled.div`
  height: ${(props) =>
    props.Height ? "17rem" : props.Height === "Modal" ? "35rem" : "37rem"};
  &::-webkit-scrollbar {
    display: none;
  }
  /* box-shadow: 0px 0.702708125114441px 1.513540267944336px 0px #00000040; */
`;

const AgGridTable2 = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  document.documentElement.style.setProperty(
    "--header-background-color",
    themeKeys.lightVersion
  );
  const gridRef = useRef();

  const defaultColDef = {
    filter: true,
  };

  return (
    <>
      <CenteredColumnsGrid>
        <GridDiv Height={props.Height} className="ag-theme-quartz">
          <AgGridReact
            rowData={props.rowData}
            columnDefs={props.colDefs}
            defaultColDef={defaultColDef}
            ref={gridRef}
            suppressExcelExport={true}
            rowSelection={"multiple"}
            enableCellTextSelection={true}
            rowMultiSelectWithClick={true}
            rowClass={props.rowClass}
            rowClassRules={props.rowClassRules}
            rowStyle={props.rowStyle}
            pinnedBottomRowData={props.pinnedBottomRowData}
            onCellValueChanged={props.onCellValueChanged}
            onSortChanged={props.onSortChanged}
            onColumnMoved={props.onColumnMoved}

            // domLayout={"autoHeight"}
          />
        </GridDiv>
      </CenteredColumnsGrid>
    </>
  );
};

export default AgGridTable2;
