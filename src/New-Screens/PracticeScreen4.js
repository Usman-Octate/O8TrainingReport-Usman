import React, { useEffect, useRef, useMemo, useState } from "react";
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { LuChevronsUpDown } from "react-icons/lu";
import { Select, Input } from '@mantine/core';
import axios from "axios";
import { baseUrl } from "../Api/baseUrl";
import { useSelector } from "react-redux";
import { GrDrag } from "react-icons/gr";
import { Menu, Divider } from '@mantine/core';
import { BsSliders } from "react-icons/bs";
import { IoIosExpand } from "react-icons/io";
import { IoIosContract } from "react-icons/io";
import { RxDragHandleDots2 } from "react-icons/rx";
import { TbBaselineDensitySmall } from "react-icons/tb";
import { TbBaselineDensityMedium } from "react-icons/tb";
import { TbBaselineDensityLarge } from "react-icons/tb";
import './PracticeScreen.css';



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

const PracticeScreen4 = () => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl + "/chartsofaccount/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        
      },
      {
        accessorKey: "accountCode",
        header: "Account Code",
      },
      {
        accessorKey: "accountName",
        header: "Account Name",
      },
      {
        accessorKey: "accountType",
        header: "Account Type",
      },
      {
        accessorKey: "currency",
        header: "Currency",
      },
      {
        accessorKey: "balance",
        header: "Balance (FC)",
        aggregationFn: 'sum',
        AggregatedCell: ({ cell }) => `Sum: ${cell.getValue()}`,
      },
      // {
      //   accessorKey: 'option',
      //   header: 'Options',
      //   Cell: ({ cell, row }) => (
      //     <Dropdown
      //       value={cell.getValue()}
      //       onChange={(value) => {
      //         const updatedData = [...data];
      //         updatedData[row.index].option = value;
      //         setData(updatedData);
      //       }}
      //     />
      //   ),
      // },
    ],
    [data]
  );

  const table = useMantineReactTable({
    columns,
    data,
    
    enableColumnResizing: true,
    enableGrouping: true,
    enablePagination: false,
    enableColumnOrdering: true,
    enableStickyHeader: true,
    enableBottomToolbar: true,
    // enableTopToolbar: false,
    enablePinning: true,
    
    initialState: { density: 'xs' },

   
    icons: {
      sx: { backgroundColor: 'transparent' },
      IconSortAscending: SortUp,
      IconArrowsSort: SortUpDown,
      IconSortDescending: SortDown,
      IconBaselineDensityLarge: ()=> <TbBaselineDensityLarge size={20}/>,
      IconBaselineDensityMedium: ()=> <TbBaselineDensityMedium size={20}/>,
      IconBaselineDensitySmall: ()=> <TbBaselineDensitySmall size={20} />,

      IconResizeHandle: () => <GrDrag color='gray' />,
      IconColumns: () => <BsSliders size={20} />,
      IconMaximize: () => <IoIosExpand size={20} />,
      IconMinimize: () => <IoIosContract size={20} />,
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
        backgroundColor: 'lightblue',
        maxHeight: '20px',
        minHeight: '20px',
        fontWeight: '700',
        color: 'red',
        padding: '0px',
        fontSize: '4px',


      },
      align: 'center',




    },

    mantineTableHeadRowProps: {

      sx: {

        color: 'red'
      }
    },
    mantineTableBodyCellProps: {
      style: {
        fontSize: '12px', 
        color: '#464f60cc',
      },
    },

    mantineTopToolbarProps: {
      style: {
        backgroundColor: 'lightblue',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      },
    },
    mantineTableContainerProps: {
      sx: {
        maxHeight: "400px",
        marginTop: "0px auto",
        border: 'none',
        display: "flex",
        alignSelf: "center",
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
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.3)'
      },
    },
   
    mantineTableHeadProps: {
      sx: {

        // display: 'flex',
        // alignSelf: 'center'

        // alignItems: 'center',
        // justifyContent: 'center'


      },

      style: {
        color: 'red'
      }
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
          // color: '#464f60cc',
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
    renderBottomToolbar: () => (
      <div
        style={{
          backgroundColor: 'lightblue',
          padding: '16px',
          display: 'flex',
          fontSize: '12px',
          fontWeight: '700',
          color: '#464f60cc',
          justifyContent: 'space-around',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}
      >
        <div>
          Currency Total: {data.reduce((sum, row) => sum + row.salary, 0)}
        </div>
        <div>
          Average: {(data.reduce((sum, row) => sum + row.salary, 0) / data.length).toFixed(2)}
        </div>
      </div>
    ),
  });

  return <MantineReactTable table={table} />;
};

export default PracticeScreen4;
