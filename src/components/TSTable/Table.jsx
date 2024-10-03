import React, { useState } from "react";
import styled from "styled-components";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import "./index.css";
import { useTableData } from "./useTableData";
import TableHeader from "./TableHeader";
import { fuzzyFilter } from "./Table.utils";
import RowDetailView from "./RowDetailView";
import ColumnVisibilitySelector from "./ColumnVisibilitySelector";
import { useDrop } from "react-dnd";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { MdSearch, MdSearchOff } from "react-icons/md";
import { VscGroupByRefType } from "react-icons/vsc";

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  padding: 7px 12px;
  width: ${(props) => (props.show ? "250px" : "0px")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  &:hover {
    border-color: #83b6f1;
  }
  &:focus-within {
    border-color: #1595eb;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding-left: 8px;
  font-size: 1rem;
  border-radius: 4px;
  background-color: transparent;
`;

const Icon = styled.div`
  font-size: 1.2rem;
  color: grey;
  margin-right: 8px;
  cursor: pointer;
`;

const ClearIcon = styled(RxCross1)`
  font-size: 1.2rem;
  color: grey;
  cursor: pointer;
`;

const MainContainer = styled.div`
  padding: 2px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  width: 1127px;
  margin-bottom: 0px;
  padding: 10px 10px;
  gap: 10px;
  background-color: lightgrey;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const TableContainer = styled.div`
  background-color: #f7f5f5;
  height: 70vh;
  width: 92%;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  padding-bottom: 10px;
  /* border-top-left-radius: 8px;
  border-top-right-radius: 8px; */
`;

const TableRow = styled.tr`
  background: ${(props) => (props.isSelected ? "#161654" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  &:hover {
    background-color: #f1f1f1;
  }
`;

const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 90%;
  background-color: #dfedfd;
  color: white;
  text-align: center;
  padding: 10px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const DragContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  background-color: ${(props) => (props.isOver ? "green" : "red")};
  padding: 13px;
  gap: 10px;
`;

const GroupedHeader = styled.div`
  padding: 5px 10px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 0 5px;
`;

const TableComponent = () => {
  const { columns, data, initialColumnVisibility, columnIds, isFetching, observerRef } = useTableData();
  const [groupedHeaders, setGroupedHeaders] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,
    enableRowSelection: true,
    getRowCanExpand: () => true,
    initialState: {
      columnVisibility: initialColumnVisibility,
      columnOrder: columnIds,
    },
  });

  const onColumnGroup = (columnId) => {
    setGroupedHeaders((prev) => [...prev, columnId]);
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    table.setGlobalFilter(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
    table.setGlobalFilter("");
  };

  const moveHeader = (draggedIndex, targetIndex) => {
    table.setColumnOrder((oldOrder) => {
      const newOrder = [...oldOrder];
      const [removed] = newOrder.splice(draggedIndex, 1);
      newOrder.splice(targetIndex, 0, removed);
      return newOrder;
    });
  };

  // DnD logic for DragContainer
  const [{ isOver }, drop] = useDrop({
    accept: "header",
    drop: (item) => onColumnGroup(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <MainContainer>
      <HeaderContainer>
        <DragContainer ref={drop} isOver={isOver}>
          <VscGroupByRefType />
          {groupedHeaders.length === 0 ? (
            "Drag and Drop for Grouping"
          ) : (
            groupedHeaders.map((header, index) => (
              <GroupedHeader key={index}>{header}</GroupedHeader>
            ))
          )}
        </DragContainer>
        <RightContainer>
          <SearchContainer>
            <SearchInputContainer show={showSearch}>
              <MdSearch size={24} color="grey" />
              <Input
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
              {searchValue && <ClearIcon size={24} onClick={clearSearch} />}
            </SearchInputContainer>
            <Icon onClick={toggleSearch}>
              {showSearch ? <MdSearchOff size={24} /> : <MdSearch size={24} />}
            </Icon>
          </SearchContainer>
          <ColumnVisibilitySelector table={table} columnIds={columnIds} />
        </RightContainer>
      </HeaderContainer>

      <TableContainer>
        <table>
          <thead
            style={{
              position: "sticky",
              top: 0,
              zIndex: 2,
              background: "white",
            }}
          >
            {table.getHeaderGroups().map((headerGroup, index) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <TableHeader
                    key={header.id}
                    header={header}
                    index={index}
                    table={table}
                    onColumnGroup={onColumnGroup}
                    moveHeader={moveHeader}
                  />
                ))}
              </tr>
            ))}
          </thead>

          <tbody style={{ paddingTop: "50px" }}>
            {table.getRowModel().rows.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow isSelected={row.getIsSelected()}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </TableRow>
                {row.getIsExpanded() && (
                  <tr>
                    <td colSpan={row.getVisibleCells().length}>
                      <RowDetailView row={row} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </TableContainer>
      <FooterContainer ref={observerRef}>
        {isFetching ? "Loading more data..." : "No more data to load."}
      </FooterContainer>
    </MainContainer>
  );
};

const Table = () => (
  <TableComponent />
);

export default Table;
