// App.js or App.jsx
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Table from './Table';

const NewTable = () => (
  <DndProvider backend={HTML5Backend}>
    <Table />
  </DndProvider>
);

export default NewTable;
