// ActionMenu.js
import React from 'react';
import { Menu, ActionIcon } from '@mantine/core';
import { BsThreeDotsVertical } from "react-icons/bs";

const ActionMenu = ({ row, onAddRowAbove, onAddRowBelow, onDeleteRow }) => {
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon>
          < BsThreeDotsVertical />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => onAddRowAbove(row)}>Add Row Above</Menu.Item>
        <Menu.Item onClick={() => onAddRowBelow(row)}>Add Row Below</Menu.Item>
        <Menu.Item color="red" onClick={() => onDeleteRow(row)}>Delete Row</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ActionMenu;
