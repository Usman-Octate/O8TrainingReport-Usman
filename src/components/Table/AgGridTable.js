import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import FlowChartButtons from "../buttons/FlowChartButtons";
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
  height: ${(props) => (props.Setheight ? "75vh" : "40vh")};

  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-height: 750px) {
    height: ${(props) => (props.Setheight ? "77vh" : "30vh")};
  }
  @media (min-height: 780px) {
    height: ${(props) => (props.Setheight ? "78vh" : "30vh")};
  }
  @media (min-height: 800px) {
    height: ${(props) => (props.Setheight ? "78.5vh" : "30vh")};
  }
  @media (min-height: 850px) {
    height: ${(props) => (props.Setheight ? "79.5vh" : "30vh")};
  }
  @media (min-height: 900px) {
    height: ${(props) => (props.Setheight ? "81vh" : "30vh")};
  }
  @media (min-height: 950px) {
    height: ${(props) => (props.Setheight ? "84vh" : "30vh")};
  }
  @media (min-height: 1000px) {
    height: ${(props) => (props.Setheight ? "83vh" : "30vh")};
  }
`;

const AgGridTable = ({
  rowData,
  colDefs,
  header,
  Setheight,
  onClick,
  clickScreenChange,
  SelectRow,
  handleEditButton,
  onRowDoubleClick,
  Buttons,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  document.documentElement.style.setProperty(
    "--header-background-color",
    themeKeys.TableHead
  );
  document.documentElement.style.setProperty(
    "--row-hover-color",
    themeKeys.TableHover
  );
  document.documentElement.style.setProperty(
    "--tag-background-color",
    themeKeys.primary
  );
  const gridRef = useRef();

  const defaultColDef = {
    filter: true,
  };

  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv({
      onlySelected: true, // Export only selected rows
      skipHeader: false, // Include column headers in the export
      fileName: "selected_rows_export.csv", // Name of the exported file
    });
  }, []);
  return (
    <>
      {header ? (
        <FlowChartButtons
          onClick={onClick}
          exportcsv={() => onBtnExport()}
          clickScreenChange={clickScreenChange}
          handleEditButton={handleEditButton}
          Object={Buttons}
        />
      ) : null}
      <CenteredColumnsGrid>
        <GridDiv Setheight={Setheight} className="ag-theme-quartz">
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            ref={gridRef}
            suppressExcelExport={true}
            rowSelection={"multiple"}
            enableCellTextSelection={true}
            rowMultiSelectWithClick={true}
            onRowSelected={SelectRow}
            onRowDoubleClicked={onRowDoubleClick}
            // domLayout={"autoHeight"}
          />
        </GridDiv>
      </CenteredColumnsGrid>
    </>
  );
};

export default AgGridTable;
