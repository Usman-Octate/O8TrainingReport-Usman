import React, { useMemo } from "react";
import {
  flexRender,
  MRT_GlobalFilterTextInput,
  MRT_ToolbarAlertBanner,
  useMantineReactTable,
} from "mantine-react-table";
import { Divider, Flex, Stack, Table } from "@mantine/core";
import { useSelector } from "react-redux";
import styled from "styled-components";

const columns = [
  {
    accessorKey: "firstName",
    header: "Fiscal Period",
  },
  {
    accessorKey: "lastName",
    header: "Fiscal Year Start Date",
  },
  {
    accessorKey: "address",
    header: "No. of Periods",
  },
  {
    accessorKey: "city",
    header: "Period From",
  },
  {
    accessorKey: "state",
    header: "Period To",
  },
  {
    accessorKey: "state",
    header: "Current Period",
  },
  {
    accessorKey: "state",
    header: "Status",
  },
];

const data = [
  {
    firstName: "John",
    lastName: "Doe",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak St",
    city: "Othertown",
    state: "NY",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak St",
    city: "Othertown",
    state: "NY",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak St",
    city: "Othertown",
    state: "NY",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak St",
    city: "Othertown",
    state: "NY",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak St",
    city: "Othertown",
    state: "NY",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak St",
    city: "Othertown",
    state: "NY",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak St",
    city: "Othertown",
    state: "NY",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak St",
    city: "Othertown",
    state: "NY",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak St",
    city: "Othertown",
    state: "NY",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Oak St",
    city: "Othertown",
    state: "NY",
  },
  // add more data as needed
];

const Th = styled.th`
  background-color: ${(props) => props.headCol};
  color: #333;
  font-weight: bold;
  text-align: center;
  border: none; /* Remove border */
  position: sticky; /* Make header sticky */
  top: 0; /* Stick to the top */
  z-index: 1; /* Ensure it stays above the table body */
  /* Optional styles for better visualization */
`;
const Wrap = styled.div`
  border: ${(props) => (props.shadow ? "1px solid #dadbdf" : null)};
  width: ${(props) => (props.setWidth ? "100%" : "100%")};
  overflow-y: auto;
  height: ${(props) =>
    props.setHeight === "currency"
      ? "63vh"
      : props.setHeight
      ? "75vh"
      : "36.7vh"};
  border-radius: 8px;
  box-shadow: ${(props) =>
    props.shadow
      ? null
      : "0px 1.702708125114441px 8.513540267944336px 0px #00000040"};
`;

const HeadlessTable = (props) => {
  const memoizedColumns = useMemo(() => props.columns, [props.columns]);
  const memoizedData = useMemo(() => props.data, [props.data]);
  const table = useMantineReactTable({
    columns: memoizedColumns,
    data: memoizedData,
    enableRowSelection: false,
    initialState: {
      pageSize: 0,
      showGlobalFilter: false,
    },
    paginationDisplayMode: "none",
    enableStickyHeader: true,
    enableTopToolbar: false,
    enableEditing: false, // Disable editing if not needed
    getSubRows: undefined, // Ensure subrows are not included
  });
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  return (
    <Wrap
      setWidth={props.setWidth}
      setHeight={props.setHeight}
      shadow={props.BoxShadow}
    >
      <Stack>
        <Divider />
        <Flex justify="space-between" align="center">
          <MRT_GlobalFilterTextInput table={table} />
          {/* <MRT_TablePagination table={table} /> */}
        </Flex>
        <Table
          captionSide="top"
          fontSize="md"
          highlightOnHover
          horizontalSpacing="xl"
          striped
          verticalSpacing="xs"
          withBorder
          withColumnBorders
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    headCol={themeKeys.hover2}
                    style={{ fontSize: "12px", color: "#464f60cc" }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} style={{ borderBottom: "none" }}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    style={{ fontSize: "13px", color: "#464f60cc" }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
      </Stack>
    </Wrap>
  );
};

export default HeadlessTable;
