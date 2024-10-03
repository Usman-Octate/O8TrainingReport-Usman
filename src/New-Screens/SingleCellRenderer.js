// SingleCellRenderer.js
import React from 'react';

const SingleCellRenderer = (props) => {
  const { rowIndex, context, value } = props;
  const isLastRow = rowIndex === context.lastRowIndex;

  if (isLastRow) {
    return (
      <div style={{ backgroundColor: 'red', textAlign: 'center', color: 'white', width: '100%' }}>
        {value}
      </div>
    );
  }

  return null;
};

export default SingleCellRenderer;
