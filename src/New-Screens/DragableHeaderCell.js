// DraggableHeaderCell.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { useMantineTheme } from '@mantine/core';

const DraggableHeaderCell = ({ column, children, ...props }) => {
  const theme = useMantineTheme();
  const [, drag] = useDrag({
    type: 'column',
    item: { id: column.id },
  });

  return (
    <th
      ref={drag}
      {...props}
      style={{
        ...props.style,
        cursor: 'move',
        backgroundColor: theme.colors.gray[1],
      }}
    >
      {children}
    </th>
  );
};

export default DraggableHeaderCell;
