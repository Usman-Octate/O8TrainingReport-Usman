import React, { useState } from 'react';

import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { red } from '@mui/material/colors';

const PracticeScreen = () => {
  const [rowData, setRowData] = useState([
    { id: 1, linetype: 'item', source: 'PO0001', item: '', discription: '', quantity: '', Uom: '', location: '', unitprice: '', taxcode: '', netamount: '', netamountfc: '' },
    { id: 2, linetype: 'item', source: 'PO0002', item: '', discription: '', quantity: '', Uom: '', location: '', unitprice: '', taxcode: '', netamount: '', netamountfc: '' },
    { id: 3, linetype: 'item', source: 'PO0003', item: '', discription: '', quantity: '', Uom: '', location: '', unitprice: '', taxcode: '', netamount: '', netamountfc: '' },
    {
      id: 'newRow', // Placeholder ID for the new row
      linetype: 'addNew', // Flag for identifying the button row
      source: '',
      item: '',
      discription: '',
      quantity: '',
      Uom: '',
      location: '',
      unitprice: '',
      taxcode: '',
      netamount: '',
      netamountfc: '',
      rowClass: 'lastRow', // Apply styling for the last row
    },
  ]);

  const colDefs = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
    },
    {
      field: 'linetype',
      headerName: 'Line Type',
    },
    {
      field: 'source',
      headerName: 'Source',
    },
    // ... other column definitions
    {
      field: 'addNew',
      headerName: '',
      cellRenderer: (params) =>
        params.node.rowIndex === rowData.length - 1 ? (
          <button onClick={() => handleAddRow()}>+ Add Row</button>
        ) : (
          ''
        ),
      cellStyle: { paddingLeft: 0 }, // Remove padding for button alignment
    },
  ];

  const handleAddRow = () => {
    const newRowData = {
      id: Date.now(), // Generate unique ID using timestamp
      linetype: 'item', // Set default values for new rows
      source: '',
      item: '',
      discription: '',
      quantity: '',
      Uom: '',
      location: '',
      unitprice: '',
      taxcode: '',
      netamount: '',
      netamountfc: ''
    };
    setRowData([...rowData, newRowData]);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        rowStyle={{ backgroundColor: 'lightgreen' }} // Style all rows
        getRowStyle={params =>
          params.data.linetype === 'addNew' ? { border: '1px solid #ccc', backgroundColor: "red" } : {}
        } // Add border for last row
      />
    </div>
  );
};

export default PracticeScreen;
