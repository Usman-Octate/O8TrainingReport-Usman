import './PracticeScreen.css';
import AddRowButton from "./AddRowButton";
import React, { useState, useEffect } from 'react';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import TableDetails from './Sections/TableDetails';
import StatusButton from '../components/buttons/StatusButton';
import Dotscell from "../components/Table/CustomCells/Dots";
import CustomerSupplierCell from "../components/Table/CustomCells/CustomerSupplierCell";
import styled from "styled-components";
import DropdownComp from "../components/Table/CustomCells/DropdownComp";
import DropdownRenderer from './Components/HeroSections/DropdownRenderer';

const Div = styled.div`
  width: 100%;
`;

const PracticeScreen2 = () => {

   
    const Status = (p) => {
        return <StatusButton value={p.value} />;
    };
    const Dots = () => {
        return <Dotscell />;
    };
    const CustSuppCell = (p) => {
        return <CustomerSupplierCell value={p.value} lineText={p.lineText} />;
    };


    const Cell = styled.div`
    width: 100px;
    overflow: hidden;
    white-space: nowrap; /* Prevent text wrapping */
    text-overflow: ellipsis; /* Truncate text with an ellipsis */
`;
const CellComponent = (props) => {
    return <Cell>{props.value}</Cell>;
};
    const initialRowData = [
        {
            id: "1",
            linetype: "item",
            source: "PO0001",
            item: "LAPTOP200022-108",
            discription: "Intel Core i5-82502, 16GB RAM DDR",
            quantity: "5.00",
            Uom: "PC5",
            location: "Warehouse",
            unitprice: "$ 950.00",
            taxcode: "Standard Rate",
            netamount: "$ 4700.00",
            netamountfc: "$ 4700.00",
        },
        {
            id: "2",
            linetype: "item",
            source: "PO0001",
            item: "PC Pentium 4",
            discription: "Intel Core i5-82502, 16GB RAM DDR",
            quantity: "5.00",
            Uom: "PC5",
            location: "Warehouse",
            unitprice: "$ 950.00",
            taxcode: "Standard Rate",
            netamount: "$ 4700.00",
            netamountfc: "$ 4700.00",
        },
        {
            id: "3",
            linetype: "item",
            source: "PO0001",
            item: "IPad 6",
            discription: "Intel Core i5-82502, 16GB RAM DDR",
            quantity: "5.00",
            Uom: "PC5",
            location: "Warehouse",
            unitprice: "$ 950.00",
            taxcode: "Standard Rate",
            netamount: "$ 4700.00",
            netamountfc: "$ 4700.00",
        },
        {
            id: "4",
            linetype: "item",
            source: "PO0001",
            item: "Laptop Dell i5 7 Generation",
            discription: "Intel Core i5-82502, 16GB RAM DDR",
            quantity: "5.00",
            Uom: "PC5",
            location: "Warehouse",
            unitprice: "$ 950.00",
            taxcode: "Standard Rate",
            netamount: "$ 4700.00",
            netamountfc: "$ 4700.00",
        },
        {
            id: "5",
            linetype: "item",
            source: "PO0002",
            item: "DESKTOP200033-209",
            discription: "Intel Core i7-9700, 32GB RAM DDR4",
            quantity: "3.00",
            Uom: "PC3",
            location: "Warehouse",
            unitprice: "$ 1200.00",
            taxcode: "Standard Rate",
            netamount: "$ 3600.00",
            netamountfc: "$ 3600.00",
        },
        {
            id: "addNewRow",
            linetype: "addNew",
            source: "",
            item: "",
            discription: "",
            quantity: "",
            Uom: "",
            location: "",
            unitprice: "",
            taxcode: "",
            netamount: "",
            netamountfc: "",
        },
    ];

    const [rowData1, setRowData1] = useState(initialRowData);

    const isCellEditable = (params) => {
        // Make cells non-editable for the last row
        return params.node.rowIndex !== rowData1.length - 1;
    };

    // Custom sort comparator to keep the last row with addNewRow ID at the bottom
    const customSortComparator = (valueA, valueB, nodeA, nodeB) => {
        if (nodeA.data.id === "addNewRow") return 1;
        if (nodeB.data.id === "addNewRow") return -1;
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    };

    const colDefs1 = [
        {
            field: "dot",
            headerName: null,
            headerClass: "All-header",
            width: "20px",
            sortable: false,
            resizable: false,
            cellRenderer: (params) => params.node.rowIndex === rowData1.length - 1 ? null : <Dots />,
            editable: isCellEditable,
        },
        {
            field: "linetype",
            headerName: "Line Type",
            headerClass: "All-header",
            sortable: false,
            cellRenderer: (params) => params.node.rowIndex === rowData1.length - 1 ? (
                <div className="add-row-button-container">
                    <AddRowButton onClick={addRow} />
                </div>
            ) : params.value,
            headerClass: "All-header",
            cellClass: "Right-Align",
            sortable: false,
            editable: isCellEditable,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["Item 1", "Item 2", "Item 3", "Item 4"],
            },
            comparator: customSortComparator,
        },
        {
            field: "source",
            headerName: "Source",
            headerClass: "All-header",
            sortable: false,
            cellClass: "Right-Align",
            editable: isCellEditable,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["POOO123", "P000342", "POOO241", "P000111"],
            },
            comparator: customSortComparator,
        },
        {
            field: "item",
            headerName: "Item",
            headerClass: "All-header",
            cellClass: "Right-Align",
            sortable: false,
            editable: isCellEditable,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["Lenovo Thinkpad 100BA-14", "PC Pentium 4", "Laptop Dell i5 7 Generation", "IPad 6"],
            },
            cellRenderer: (params) => (
                <CustSuppCell value={params.value} lineText={params.value} />
            ),
            comparator: customSortComparator,
        },
        {
            field: "discription",
            headerName: "Discription",
            headerClass: "All-header",
            sortable: false,
            editable: isCellEditable,
            cellClass: "Center-Align",
            cellEditor: "agLargeTextCellEditor",
            cellEditorPopup: true,
            cellRenderer: CellComponent,
            comparator: customSortComparator,
        },
        {
            field: "quantity",
            headerName: "Quantity",
            headerClass: "All-header",
            sortable: false,
            cellClass: "Right-Align",
            editable: isCellEditable,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["8.00", "9.00", "10.00", "6.00"],
            },
            cellStyle: { justifyContent: "flex-end" },
            comparator: customSortComparator,
        },
        {
            field: "Uom",
            headerName: "UOM",
            headerClass: "All-header",
            cellClass: "Right-Align",
            sortable: false,
            editable: isCellEditable,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["PC4", "PC6", "PC7", "PC9", "PC4", "PC6", "PC7", "PC9"],
            },
            comparator: customSortComparator,
        },
        {
            field: "location",
            headerName: "Location",
            headerClass: "All-header",
            cellClass: "Right-Align",
            sortable: false,
            editable: isCellEditable,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["Warehouse1 Dubai", "Warehouse2 Abudhabi", "Warehouse3 Sharjah", "Warehouse4 Expo Center", "Warehouse5 Dubai Stadium"],
            },
            comparator: customSortComparator,
        },
        {
            field: "unitprice",
            headerName: "Unit Price",
            headerClass: "All-header",
            sortable: false,
            cellClass: "Left-Align",
            editable: isCellEditable,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["$ 1200", "$ 1400", "$ 1100", "$ 1500", "$ 1600", "$ 1700", "$ 1800"],
            },
            cellStyle: { justifyContent: "flex-end" },
            comparator: customSortComparator,
        },
        {
            field: "taxcode",
            headerName: "Tax Code",
            headerClass: "All-header",
            cellClass: "Right-Align",
            sortable: false,
            editable: isCellEditable,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["Standard Rate", "Whole Sale Rate", "Company Rate", "Market Rate"],
            },
            comparator: customSortComparator,
        },
        {
            field: "netamount",
            headerName: "Net Amount",
            headerClass: "All-header",
            cellClass: "Right-Align",
            sortable: false,
            editable: isCellEditable,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["$ 1200", "$ 1400", "$ 1100", "$ 1500", "$ 1600", "$ 1700", "$ 1800"],
            },
            cellStyle: { justifyContent: "flex-end" },
            comparator: customSortComparator,
        },
        {
            field: "netamountfc",
            headerName: "Net Amount (FC)",
            headerClass: "All-header",
            cellClass: 'ag-right-aligned-cell',
            sortable: false,
            editable: isCellEditable,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["$ 2400", "$ 2500", "$ 2600", "$ 2700", "$ 2800", "$ 2900", "$ 3000"],
            },
            cellStyle: { justifyContent: "flex-end" },
            comparator: customSortComparator,
        }
    ];

    // Define rowClassRules to apply styles to the last row
    const rowClassRules = {
        'last-row': (params) => params.node.rowIndex === rowData1.length - 1,
    };

    const addRow = () => {
        const newRow = {
            id: (rowData1.length).toString(),
            linetype: "",
            source: "",
            item: "",
            discription: "",
            quantity: "",
            Uom: "",
            location: "",
            unitprice: "",
            taxcode: "",
            netamount: "",
            netamountfc: "",
        };

        setRowData1(prevRowData => {
            const updatedRowData = [...prevRowData];
            // Find the index of the addNewRow
            const addNewRowIndex = updatedRowData.findIndex(row => row.linetype === "addNew");

            // Insert the new row above the addNewRow and keep the addNewRow at the end
            updatedRowData.splice(addNewRowIndex, 0, newRow);
            return updatedRowData;
        });
    };

    const onCellValueChanged = (params) => {
        const updatedData = rowData1.map(row => {
            if (row.id === params.data.id) {
                return { ...row, [params.colDef.field]: params.newValue };
            }
            return row;
        });
        setRowData1(updatedData);
    };

    const buttonsData = [
        { icon: "Custom", title: "Customize" },
        { icon: "Import", title: "Import" },
    ];

    // Custom sort logic to ensure the "Add Row" button stays at the bottom
    const onSortChanged = (params) => {
        const sortedNodes = params.api.getModel().rowsToDisplay;
        const addNewRowNode = sortedNodes.find(node => node.data.id === "addNewRow");
        if (addNewRowNode) {
            sortedNodes.splice(sortedNodes.indexOf(addNewRowNode), 1); // Remove the addNewRow node from its current position
            sortedNodes.push(addNewRowNode); // Add the addNewRow node to the end
        }
        params.api.setRowData(sortedNodes.map(node => node.data)); // Update the row data to reflect the new order
    };

    return (
        <Div>
            <TableDetails
                rowData={rowData1}
                colDefs={colDefs1}
                buttons={buttonsData}
                name={"TABLE DETAILS"}
                rowClassRules={rowClassRules}
                domLayout="autoHeight"
                onSortChanged={onSortChanged} // Attach the custom sort logic
                onCellValueChanged={onCellValueChanged}
            />
        </Div>
    );
};

export default PracticeScreen2;
