import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import JornalTables from "../../New-Screens/Sections/JornalTables";
import Dotscell from "../../components/Table/CustomCells/Dots";
import Info from "../../assets2/ButtonIcons/InformationIcon.svg";
import SettingsTables from "../../New-Screens/Sections/SettingsTables";
import HeadlessTable2 from "../../New-Screens/Components/MantineTable/HeadlessTable";
import Transaction from "../SVGicons/Transaction";
import { TransactionPost, TransactionUpdate } from "../../Api/Apis";
import { Separator } from "styled-icons/remix-editor";
import { TransactionGet } from "../../Api/Apis";
import Toaster from "./Toaster";

const Wrapper = styled.div`
  background-color: #f7f7f7;
  width: 1100px;
  height: 455px;
  border-radius: 12px;
  position: fixed;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  padding: 0 30px;
`;

const Wrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 900;
  background-color: rgba(150, 149, 149, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 1px 19px 20px black;
`;
const Note = styled.div`
  background-color: #eef5ff;
  width: 500px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  margin: 20px 0;
`;
const Text = styled.div`
  color: #464f60;
  font-size: 10px;
`;
const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Btn1 = styled.div`
  font-size: 15px;
  color: #232222;
  border: 1px solid #cbcbcb;
  padding: 10px 15px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 50px;
  text-align: center;
  cursor: pointer;
`;
const Btn2 = styled.div`
  font-size: 15px;
  color: #ffffff;
  border: 1px solid #cbcbcb;
  padding: 11px 16px;
  width: 50px;
  text-align: center;
  background-color: #1677ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const TransactionNumbering = ({
  setModal,
  cancel,
  save,
  rowdata,
  setShowToasterPosted,
  setShowToasterPosted2,
}) => {
  // Separate states for each header
  const [transactionType, setTransactionType] = useState();
  const [seriesType, setSeriesType] = useState();
  const [length, setLength] = useState();
  const [prefix, setPrefix] = useState();
  const [suffix, setSuffix] = useState();
  const [firstNumber, setFirstNumber] = useState();
  const [currentNumber, setCurrentNumber] = useState();
  const [defaultValue, setDefaultValue] = useState();
  const [status, setStatus] = useState();
  const [separator, setSeparator] = useState();
  const [nextNumber, setNextNumber] = useState();
  const [loading, setLoading] = useState(false);

  // Handle functions for each header
  const handleTransactionTypeChange = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setTransactionType(value);
      console.log("Transaction :", value);
    }
  };

  useEffect(() => {
    if (rowdata?.seriesType) {
      setSeriesType(rowdata.seriesType);
      setLength(rowdata.length);
      setPrefix(rowdata.Prefix);
      setSuffix(rowdata.suffix);
      setSeparator(rowdata.separator);
      setFirstNumber(rowdata.firstNumber);
      setNextNumber(rowdata.nextNumber);
      setDefaultValue(rowdata.isDefaultStatus);
      setStatus(rowdata.status);
      console.log(rowdata.seriesType, "ppppppppppp");
    }
  }, [rowdata?.seriesType]);

  const handleSeriesTypeChange = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setSeriesType(value);
      console.log("Series :", value);
    }
  };

  const handleLengthChange = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setLength(value);
      console.log("Lenght :", value);
    }
  };

  const handlePrefixChange = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setPrefix(value);
      console.log("prefix :", value);
    }
  };

  const handleSuffixChange = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setSuffix(value);
      console.log("suffix :", value);
    }
  };

  const handleFirstNumberChange = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setFirstNumber(value);
      console.log("first Number :", value);
    }
  };

  const handleCurrentNumberChange = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setCurrentNumber(value);
      console.log("Current Number :", value);
    }
  };

  const handleDefaultValueChange = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setDefaultValue(value);
      console.log("Next Number :", value);
    }
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setStatus(value);
      console.log("Status :", value);
    }
  };
  const handleNextNumber = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setNextNumber(value);
      console.log("Next Number :", value);
    }
  };
  const handleSeparator = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setSeparator(value);
      console.log("Separator :", value);
    }
  };

  const inputStyle = {
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    fontSize: "12px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(70, 79, 96, 0.8)",
  };
  const HandleOnChange = (e) => {
    const value = e.target.value;
    setSeriesType(value);
    console.log("series New", value);
  };
  const HandleOnChangeLength = (e) => {
    const value = e.target.value;
    setLength(value);
    console.log("length New", value);
  };

  const HandleOnChangePrefix = (e) => {
    const value = e.target.value;
    setPrefix(value);
    console.log("prefix New", value);
  };
  const HandleOnChangeSuffix = (e) => {
    const value = e.target.value;
    setSuffix(value);
    console.log("suffix New", value);
  };

  const HandleOnChangeSeparator = (e) => {
    const value = e.target.value;
    setSeparator(value);
    console.log("separator New", value);
  };
  const HandleOnChangeFirstNum = (e) => {
    const value = e.target.value;
    setFirstNumber(value);
    console.log("firstNum New", value);
  };
  const HandleOnChangeNextNum = (e) => {
    const value = e.target.value;
    setNextNumber(value);
    console.log("NextNum New", value);
  };
  const HandleOnChangeCurrentNum = (e) => {
    const value = e.target.value;
    setCurrentNumber(value);
    console.log("CurrNum New", value);
  };
  const HandleOnChangeStatus = (e) => {
    const value = e.target.value;
    setStatus(value);
    console.log("Status New", value);
  };

  // *****************************************MANTINE INPUT****************************************

  const columnsData = useMemo(() => [
    {
      accessorKey: "seriesType",
      header: "Series Name",
      Cell: ({ row }) =>
        row.original.isNew || (rowdata && row.index === 0) ? (
          <input
            type="text"
            style={inputStyle}
            value={seriesType}
            onChange={HandleOnChange}
            onKeyDown={handleSeriesTypeChange}
          />
        ) : (
          <span>{row.original.seriesType}</span>
        ),
    },
    {
      accessorKey: "length",
      header: "Length",
      Cell: ({ row }) =>
        row.original.isNew || (rowdata && row.index === 0) ? (
          <span>{row.original.length}</span>
        ) : (
          <span>{row.original.length}</span>
        ),
    },
    {
      accessorKey: "prefix",
      header: "Prefix",
      Cell: ({ row }) =>
        row.original.isNew || (rowdata && row.index === 0) ? (
          <input
            type="text"
            style={inputStyle}
            value={prefix}
            onChange={HandleOnChangePrefix}
            onKeyDown={handlePrefixChange}
          />
        ) : (
          <span>{row.original.prefix}</span>
        ),
    },
    {
      accessorKey: "suffix",
      header: "Suffix",
      Cell: ({ row }) =>
        row.original.isNew || (rowdata && row.index === 0) ? (
          <input
            type="text"
            style={inputStyle}
            value={suffix}
            onChange={HandleOnChangeSuffix}
            onKeyDown={handleSuffixChange}
          />
        ) : (
          <span>{row.original.suffix}</span>
        ),
    },
    {
      accessorKey: "separator",
      header: "Separator",
      Cell: ({ row }) =>
        row.original.isNew || (rowdata && row.index === 0) ? (
          <input
            type="text"
            style={inputStyle}
            value={separator}
            onChange={HandleOnChangeSeparator}
            onKeyDown={handleSeparator}
          />
        ) : (
          <span>{row.original.separator}</span>
        ),
    },
    {
      accessorKey: "firstNumber",
      header: "First Number",
      Cell: ({ row }) =>
        row.original.isNew || (rowdata && row.index === 0) ? (
          <input
            type="text"
            style={inputStyle}
            value={firstNumber}
            onChange={HandleOnChangeFirstNum}
            onKeyDown={handleFirstNumberChange}
          
          />
        ) : (
          <span>{row.original.firstNumber}</span>
        ),
    },
    {
      accessorKey: "nextNumber",
      header: "Next Number",
      Cell: ({ row }) =>
        row.original.isNew || (rowdata && row.index === 0) ? (
          <span>{row.original.nextNumber}</span>
        ) : (
          <span>{row.original.nextNumber}</span>
        ),
    },
    {
      accessorKey: "currentNumber",
      header: "Current Number",
      Cell: ({ row }) =>
        row.original.isNew || (rowdata && row.index === 0) ? (
          <span>{row.original.currentNumber}</span>
        ) : (
          <span>{row.original.currentNumber}</span>
        ),
    },
    {
      accessorKey: "isDefaultStatus",
      header: "Default",
      Cell: ({ cell }) => <span>{cell.getValue() ? "Yes" : "No"}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ row }) =>
        row.original.isNew || (rowdata && row.index === 0) ? (
          <input
            type="text"
            style={inputStyle}
            value={status}
            onChange={HandleOnChangeStatus}
            onKeyDown={handleStatusChange}
          />
        ) : (
          <span>{row.original.status}</span>
        ),
    },
  ]);

  const [Rowdata, setRowData] = useState([]);

  // ***************************************POST API**********************************************

  const PostTableData = async () => {
    try {
      const response = await TransactionPost(
        seriesType,
        length,
        prefix,
        separator,
        suffix,
        firstNumber,
        nextNumber,
        currentNumber,
        defaultValue,
        status
      );
      setModal(false);
      setShowToasterPosted(true);
      setTimeout(() => {
        window.location.reload();
      }, 6000);
      console.log(response);
    } catch (error) {
      console.error("Error in PostTableData:", error);
    }
  };

  // *************************************GET API**************************************************
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await TransactionGet();
        if (data.status) {
          const structuredData = data.data.map((row) => ({
            ...row,
          }));
          const sortedData = structuredData.sort((a, b) => {
            if (a.seriesType === "Primary" && b.seriesType !== "Primary") {
              return -1;
            }
            if (a.seriesType !== "Primary" && b.seriesType === "Primary") {
              return 1;
            }
            return 0;
          });

          let filteredData = sortedData;

          // Conditionally filter the data if rowdata.transactionType is "Journal Entry"
          if (rowdata?.transactionType === "Journal Entry") {
            filteredData = sortedData.filter((item) => item.transactionType === "Journal Entry");
          }
     

          // Prepend the rowdata to the structuredData
          const combinedData = rowdata
            ? [rowdata, ...filteredData] // Place rowdata at the top
            : sortedData;

          setRowData(combinedData);

          console.log(combinedData);
        } else {
          alert("Something Wrong in Data Fetching");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [rowdata]);
  const [row, setRow] = useState("");
  const HandleData = (selectedData) => {
    setRow(selectedData);
    console.log(selectedData, "cwece");
  };
  // ********************************************************UPDATE API***********************************************************

  const UpdateRowData = async () => {
      try {

      // If there's only one "Primary" seriesType, proceed with the update
      const response = await TransactionUpdate(
        rowdata.id,
        seriesType,
        length,
        prefix,
        separator,
        suffix,
        firstNumber,
        nextNumber,
        currentNumber,
        defaultValue,
        status
      );
  
      if (response && response.data) {
        // Assuming response.data contains the updated row data
        setRowData((prevData) => {
          // Find the index of the updated row
          const updatedData = prevData.map((item) =>
            item.id === rowdata.id ? response.data : item
          );
          return updatedData;
        });
        setModal(false);
        setShowToasterPosted2(true);
        setTimeout(() => {
          window.location.reload();
        }, 6000);
        console.log(response);
      } else {
        console.log("Failed to update row data:", response.message);
      }
    } catch (error) {
      console.error("Error updating row data:", error);
    }
  };
  
  const handleAddRowBelow = (row) => {
  const newRow = {
    id: Date.now().toString(),
    transactionType: "",
    seriesType: "",
    length: "",
    prefix: "",
    separator: "",
    suffix: "",
    firstNumber: "",
    nextNumber: "",
    currentNumber: "",
    defaultValue: "",
    status: "",
    isNew: true,
  };

  // Append new row to the end of the data array
  setRowData((prevData) => [...prevData, newRow]);
  console.log(newRow, "sd");
};
  return (
    <Wrap>
      <Wrapper>
        <HeadlessTable2
          columns={columnsData}
          data={Rowdata}
          ToggleBtnTitle={"AUTO NUMBERING"}
          // showAddNotesButton={true}
          // onAddNotesClick={true}
          SeriesButton={true}
          TitleButton={true}
          titleName={"Journal Entry Series"}
          rowSelection={false}
          // editiing={rowdata && rowdata.id ? true : false}
          onClickRow={HandleData}
          AddSeriesClick={handleAddRowBelow}
          expandingRow={false}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Note>
            <img
              src={Info}
              style={{ width: "16px", height: "16px" }}
              alt="dqwd"
            />
            <Text>
              The numbering series cannot be modified after the transaction has
              been created.
            </Text>
          </Note>
          <ActionButtons>
            <Btn1 onClick={cancel}>Cancel</Btn1>
            <Btn2 onClick={rowdata ? UpdateRowData : PostTableData}>Save</Btn2>
          </ActionButtons>
        </div>
      </Wrapper>
    </Wrap>
  );
};

export default TransactionNumbering;
