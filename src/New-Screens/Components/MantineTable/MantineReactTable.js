import React, { useRef, useState } from "react";
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { LuChevronsUpDown } from "react-icons/lu";
import { Select, Input } from '@mantine/core';
import { GrDrag } from "react-icons/gr";
import { BsSliders } from "react-icons/bs";
import { IoIosExpand } from "react-icons/io";
import { IoIosContract } from "react-icons/io";
import { RxDragHandleDots2 } from "react-icons/rx";
import { TbBaselineDensitySmall } from "react-icons/tb";
import { TbBaselineDensityMedium } from "react-icons/tb";
import { TbBaselineDensityLarge } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";
import { TbSearchOff } from "react-icons/tb";
import { TbFilterOff } from "react-icons/tb";
import { TbFilter } from "react-icons/tb";


import { useSelector } from "react-redux";

import styled from "styled-components";


const TableMain = styled.div`
  margin-top: 20px;
  height: 50vh;
  border-radius: 8px;
  width: 78.5vw;
  padding: 0px 20px,
`;


const SortDown = () => (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5L6 2L3 5" stroke="#464F60" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 11L6 14L9 11" stroke="#464F60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);
const SortUp = () => (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5.25L6 2.25L3 5.25" stroke="#464F60" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 10.75L6 13.75L9 10.75" stroke="#464F60" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


);
const SortUpDown = () => (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5L6 2L3 5" stroke="#464F60" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 11L6 14L9 11" stroke="#464F60" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


);
// Custom dropdown component
const Dropdown = ({ value, onChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value);

    const inputRef = useRef(null);

    const options = [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' },
    ];

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        if (editedValue !== value) {
            onChange(editedValue);
        }
    };

    const handleInputChange = (event) => {
        setEditedValue(event.target.value);
    };

    const handleSelectChange = (selectedOption) => {
        setEditedValue(selectedOption);
        onChange(selectedOption);
    };

    return isEditing ? (
        <Input
            ref={inputRef}
            value={editedValue}
            onBlur={handleBlur}
            onChange={handleInputChange}
            autoFocus
        />
    ) : (
        <div onDoubleClick={handleDoubleClick} style={{ position: 'relative', zIndex: isEditing ? 1000 : 'auto' }}>
            <Select
                data={options}
                value={editedValue}
                onChange={handleSelectChange}
                clearable
                withinPortal
            />
        </div>
    );
};

const MantineReactTableComponent = ({ columns, data, renderBottomToolbarCustomActions }) => {

    const themeKeys = useSelector((state) => state.localization.themeKeys);

    const table = useMantineReactTable({
        columns,
        data,
        enableColumnResizing: true,
        enableGrouping: true,
        enablePagination: false,
        enableColumnOrdering: true,
        enableStickyHeader: true,
        enableBottomToolbar: true,
        initialState: { density: 'xs' },
        icons: {
            sx: { backgroundColor: 'transparent' },
            IconSortAscending: SortUp,
            IconArrowsSort: SortUpDown,
            IconSortDescending: SortDown,
            IconBaselineDensityLarge: () => <TbBaselineDensityLarge size={18} />,
            IconBaselineDensityMedium: () => <TbBaselineDensityMedium size={18} />,
            IconBaselineDensitySmall: () => <TbBaselineDensitySmall size={18} />,
            IconSearch: () => <TbSearch size={18} />,
            IconSearchOff: () => <TbSearchOff size={18} />,
            IconFilter: () => <TbFilter size={18} />,
            IconFilterOff: () => <TbFilterOff size={18} />,


            IconResizeHandle: () => <GrDrag color='gray' />,
            IconColumns: () => <BsSliders size={18} />,
            IconMaximize: () => <IoIosExpand size={18} />,
            IconMinimize: () => <IoIosContract size={18} />,
            IconGripHorizontal: () => <RxDragHandleDots2 />,
        },
        mantineTableHeadCellProps: {
            sx: {
                '& .mantine-TableHeadCell-Content': {
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#464f60cc',
                    fontWeight: '700',
                },
                backgroundColor: '#ebf1ff',
                maxHeight: '20px',
                minHeight: '20px',
                fontWeight: '700',
                color: 'red',
                padding: '0px',
                fontSize: '4px',
            },
            align: 'center',
        },
       
        mantineTableBodyCellProps: (cell) => ({
            style: {
                fontSize: '12px',
                color: '#464f60cc',
                alignSelf: 'center',
                textAlign: cell.column.id === 'age' ? 'right' : 'center',
            },
        }),
        mantineToolbarAlertBannerProps: {
sx: {
    backgroundColor: 'transparent !important',
}

        },
        mantineTopToolbarProps: {
            style: {
                backgroundColor: 'transparent',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                border: 'none',
                boxShadow: 'none !important',
                margin: "0px 5px 0px 5px",
            },
        },
        mantineTableContainerProps: {
            sx: {
                maxHeight: "33vh",
                minHeight: "33vh",
                margin: "0px 5px 0px 5px",
                borderRadius: '8px',
                boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.05), -4px 0px 8px rgba(0, 0, 0, 0.05), 0px -4px 8px rgba(0, 0, 0, 0.05)',
                
                // border: 'none',
                // display: "flex",
                // alignItems: 'center',
                // justifyContent: 'center',
                // alignSelf: "center",
                fontSize: '2px',
                "&::-webkit-scrollbar": {
                    width: "4px",
                    height: "4px",
                },
                "&::-webkit-scrollbar-track": {
                    background: "#f1f1f1",
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "#888",
                    borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                    background: "#555",
                },
                "&::-webkit-scrollbar-horizontal": {
                    height: "4px",
                },
                "&::-webkit-scrollbar-horizontal:hover": {
                    height: "4px",
                },
            },
        },
        mantinePaperProps: {
            sx: {
            
                borderRadius: '8px',
                border: 'none',
                borderWidth: '0px',
                borderColor: 'transparent !important',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'none !important',
                // boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.3)'
            },
        },
        mantineTableHeadProps: {
            sx: {
                color: 'red',
            },
        },
        mantineSkeletonProps: {
            sx: {
                border: 'none',
                borderRadius: '8px',
            },
        },
        mantineTableBodyProps: {
            sx: {
                '& .mantine-TableBodyCell-Content': {
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: 'red',
                    fontWeight: '700',
                },
            }
        },
        mantineTableProps: {
            sx: {
                border: 'none',
                borderRadius: '8px',
                'td': { fontSize: '12px' },
                'th': { fontSize: '14px' },
            },
        },
        mantineTableBodyRowProps: ({ row }) => ({
            onClick: () => console.log(row.original),
            sx: {
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: 'lightgray',
                },
            },
        }),
        renderBottomToolbar: renderBottomToolbarCustomActions,
    });

    return (

        <TableMain>
            <MantineReactTable table={table} />;
        </TableMain>

    )
};

export default MantineReactTableComponent;
