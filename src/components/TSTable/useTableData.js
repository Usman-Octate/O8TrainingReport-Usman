import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
import styled from "styled-components";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoTrashBinOutline, IoTrashBin } from "react-icons/io5";
import { USERS } from "./Data/data";

const DISPLAY_COLUMN_SIZE = 100;
const columnHelper = createColumnHelper();

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxIcon = styled.div`
  cursor: pointer;
`;

const IconButton = styled.button`
  background: white;
  border: none;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f0f0f0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const useTableData = () => {
  const [data, setData] = useState([]);
  const [dataIndex, setDataIndex] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const observerRef = useRef(null);

  const columns = useMemo(
    () => [
      columnHelper.display({
        id: "selection",
        header: ({ table }) => (
          <CheckboxWrapper>
            <CheckboxIcon onClick={table.getToggleAllRowsSelectedHandler()}>
              {table.getIsAllRowsSelected() ? (
                <MdOutlineCheckBox size={20} />
              ) : table.getIsSomeRowsSelected() ? (
                <MdOutlineCheckBox size={20} style={{ color: 'gray' }} />
              ) : (
                <MdOutlineCheckBoxOutlineBlank size={20} />
              )}
            </CheckboxIcon>
          </CheckboxWrapper>
        ),
        cell: ({ row }) => (
          <CheckboxWrapper>
            <CheckboxIcon onClick={row.getToggleSelectedHandler()}>
              {row.getIsSelected() ? (
                <MdOutlineCheckBox size={20} />
              ) : (
                <MdOutlineCheckBoxOutlineBlank size={20} />
              )}
            </CheckboxIcon>
          </CheckboxWrapper>
        ),
        size: DISPLAY_COLUMN_SIZE,
      }),
      columnHelper.display({
        id: "expand",
        cell: ({ row }) =>
          row.getCanExpand() ? (
            <FlexContainer>
              <IconButton
                aria-label="Expand row"
                onClick={row.getToggleExpandedHandler()}
              >
                {row.getIsExpanded() ? (
                  <IoIosArrowDown color={"#023F81"} />
                ) : (
                  <IoIosArrowForward color={"#023F81"} />
                )}
              </IconButton>
            </FlexContainer>
          ) : null,
        size: DISPLAY_COLUMN_SIZE,
      }),
      columnHelper.accessor("id", {
        id: "id",
        header: "Id",
        size: DISPLAY_COLUMN_SIZE,
      }),
      columnHelper.accessor("avatar", {
        id: "avatar",
        header: "Avatar",
        cell: ({ getValue }) => (
          <FlexContainer>
            <Image src={getValue()} />
          </FlexContainer>
        ),
        size: 140,
      }),
      columnHelper.accessor("name", {
        id: "name",
        header: "Name",
      }),
      columnHelper.accessor("birthDate", {
        id: "birthDate",
        header: "Birth Date",
        cell: ({ getValue }) => moment(getValue()).format("DD/MM/YYYY"),
      }),
      columnHelper.accessor("age", {
        id: "age",
        header: "Age",
        size: DISPLAY_COLUMN_SIZE,
        footer: ({ table }) =>
          table
            .getFilteredRowModel()
            .rows.reduce((acc, val) => acc + Number(val.getValue("age")), 0),
      }),
      columnHelper.display({
        id: "delete",
        header: () => (
          <FlexContainer>
            <IoTrashBin size={20} />
          </FlexContainer>
        ),
        cell: ({ row }) => (
          <FlexContainer>
            <IconButton
              aria-label="Delete row"
              onClick={() =>
                setData((prevData) =>
                  prevData.filter((user) => user.id !== row.original.id)
                )
              }
            >
              <IoTrashBinOutline size={20} style={{ color: 'red' }} />
            </IconButton>
          </FlexContainer>
        ),
        size: DISPLAY_COLUMN_SIZE,
      }),
    ],
    []
  );

  const columnIds = useMemo(() => columns.map((column) => column.id), [columns]);

  const initialColumnVisibility = useMemo(() => {
    return columnIds.reduce((acc, val) => {
      acc[val] = true;
      return acc;
    }, {});
  }, [columnIds]);

  const fetchMoreData = useCallback(async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const moreData = USERS.slice(dataIndex, dataIndex + 20);
        setData((prevData) => [...prevData, ...moreData]);
        setDataIndex((prevIndex) => prevIndex + 20);
        resolve();
      }, 1000);
    });
  }, [dataIndex]);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching) {
        setIsFetching(true);
        fetchMoreData().then(() => setIsFetching(false));
      }
    },
    [isFetching, fetchMoreData]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  return {
    columns,
    data,
    initialColumnVisibility,
    columnIds,
    isFetching,
    observerRef,
  };
};
