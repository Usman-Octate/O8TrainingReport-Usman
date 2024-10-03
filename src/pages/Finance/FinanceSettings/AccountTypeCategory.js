import React, { useEffect, useState } from "react";
import SettingsTables from "../../../New-Screens/Sections/SettingsTables";
import ActivityPart from "../../../New-Screens/Sections/ActivityPart";
import { MdAddCircle } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import AccountType from "../../../components/Modals/FinanceSettings/AccountType";
import {
  AccountTypeTableData,
  GetAccountType,
  UpdateAccountType,
} from "../../../Api/Apis";
import StatusButton from "../../../components/buttons/StatusButton";
import Toaster from "../../../components/Modals/Toaster";
import HeadlessTable2 from "../../../New-Screens/Components/MantineTable/HeadlessTable";
import AddNotesButton from "../../../New-Screens/Components/MantineTable/Buttons/AddNotesButton";
import TitleOfSection from "../../../New-Screens/Components/TitleOfSection";
import { FaRegEdit } from "react-icons/fa";
import { MdDoNotDisturb } from "react-icons/md";
import styled from "styled-components";
import { ImSwitch } from "react-icons/im";

const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  /* margin: 10px 0px; */
`;

const AccountTypeCategory = () => {
  const [rowdata, setRowdata] = useState([]);

  const columnsData2 = [
    {
      accessorKey: "accountCategory",
      header: "Account Category",
    },
    {
      accessorKey: "accountType",
      header: "Account Type",
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ cell }) => {
        return <StatusButton value={cell.getValue() ? "Active" : "Inactive"} />;
      },
    },
  ];

  const Rowdata2 = [
    {
      categoryAccountCategory: "John",
      categoryAccountType: "Doe",
      categoryStatus: "123 Main St",
      periodFrom: "Anytown",
      periodTo: "CA",
      currentPeriod: "Yes",
      status: "Active",
    },
    {
      categoryAccountCategory: "John",
      categoryAccountType: "Doe",
      categoryStatus: "123 Main St",
      periodFrom: "Anytown",
      periodTo: "CA",
      currentPeriod: "Yes",
      status: "Active",
    },
    // add more data as needed
  ];
  const columnsData3 = [
    {
      accessorKey: "category",
      header: "Category",
    },
  ];
  const Rowdata3 = [
    {
      categoryAccountCategory: "Assets",
      categoryAccountType: "Assets",
      categoryStatus: "123 Main St",
    },
    {
      categoryAccountCategory: "Assets",
      categoryAccountType: "Assets",
      categoryStatus: "123 Main St",
    },
    // Add more data as needed
  ];
  const Rowdata4 = [
    {
      categoryAccountCategory: "Liability",
      categoryAccountType: "Liability",
      categoryStatus: "Liability",
      assetNumberOfPeriods: 4,
    },
    {
      categoryAccountCategory: "Liability",
      categoryAccountType: "Liability",
      categoryStatus: "Liability",
      assetNumberOfPeriods: 4,
    },
    // Add more data as needed
  ];
  const Rowdata5 = [
    {
      categoryAccountCategory: "Capital",
      categoryAccountType: "Capital",
      categoryStatus: "Capital",
      assetNumberOfPeriods: 4,
    },
    {
      categoryAccountCategory: "Capital",
      categoryAccountType: "Capital",
      categoryStatus: "Capital",
      assetNumberOfPeriods: 4,
    },
    // Add more data as needed
  ];

  const Rowdata6 = [
    {
      categoryAccountCategory: "Revenue",
      categoryAccountType: "Revenue",
      categoryStatus: "Revenue",
      assetNumberOfPeriods: 4,
    },
    {
      categoryAccountCategory: "Revenue",
      categoryAccountType: "Revenue",
      categoryStatus: "Revenue",
      assetNumberOfPeriods: 4,
    },
    // Add more data as needed
  ];

  const Rowdata7 = [
    {
      categoryAccountCategory: "Expenses",
      categoryAccountType: "Expenses",
      categoryStatus: "Expenses",
      assetNumberOfPeriods: 4,
    },
    {
      categoryAccountCategory: "Expenses",
      categoryAccountType: "Expenses",
      categoryStatus: "Expenses",
      assetNumberOfPeriods: 4,
    },
    // Add more data as needed
  ];

  const [getVal, setGetVal] = useState("");
  const [rowData, setRowData] = useState([]);

  const HandleValue = (value) => {
    setGetVal(value);
    console.log(value, "VALUE");
  };

  const [openModal, setOpenModal] = useState(false);

  const HandleOpenModal = () => {
    setOpenModal(true);
  };
  const HandleClsoseModal = () => {
    setOpenModal(false);
  };

  // //////////////////////////////////////ACCOUNT TYPE GET TABLE DATA//////////////////////////////

  const [changeState, setChangeState] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [reload, setReload] = useState(false);
  const [originalData, setOriginalData] = useState([]);
  const HandleToasterClose = () => {
    setShowToaster(false);
  };

  const HandleChange = () => {
    setChangeState(true);
    setShowToaster(true);
  };

  const GetTableData = async () => {
    setLoading(true);
    const Data = await AccountTypeTableData();

    if (Data) {
      console.log(Data.data, "cwevwevwefewd");
      setRowData(Data.data);
      setOriginalData(Data.data);
    } else {
      alert("Something Went Wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    GetTableData();
  }, [getVal, changeState]);

  const [loading2, setLoading2] = useState(false);
  const [accountTypes, setAccountTypes] = useState([]);
  const [revertStatus, setRevertStatus] = useState();

  const GetData = async () => {
    setLoading2(true);
    const Response = await GetAccountType();
    if (Response) {
      console.log(Response.data);
      setAccountTypes(Response.data);
    } else {
      alert("Something Wrong");
    }
    setLoading2(false);
  };

  useEffect(() => {
    GetData();
  }, []);

  const handleRowClick = (row) => {
    console.log("Row data:", row.original);
    console.log(rowData, "ROW DATA");

    const filteredData = originalData.filter(
      (res) => res.accountCategory === row.original.category
    );

    if (filteredData.length > 0) {
      setRowData(filteredData);
    } else {
      setRowData([]);
    }
    setSelectedRowId(row.original.id);
    console.log(filteredData, "Filtered data based on segment");
  };

  const mantineTableBodyRowPropsTD = ({ row }) => {
    const toggleHandler = row.getToggleSelectedHandler();

    return {
      onClick: (event) => {
        handleRowClick(row);
        toggleHandler(event);
      },
      sx: (theme) => ({
        cursor: "pointer",
        "td:first-of-type": {
          display: "none", // Hide the checkbox column in the body
        },
        backgroundColor:
          selectedRowId === row.id ? theme.colors.blue[1] : "transparent",
        "&:hover": {
          backgroundColor:
            selectedRowId === row.id
              ? theme.colors.blue[2]
              : theme.colors.gray[0],
        },
      }),
    };
  };
  const [getStatusID, setGetStatusID] = useState();

  const handleRowClick2 = (row) => {
    console.log(row.original.status);
    setRevertStatus(row.original.status);
    setGetStatusID(row.original.id);
  };

  const mantineTableBodyRowPropsTD2 = ({ row }) => {
    const toggleHandler = row.getToggleSelectedHandler();

    return {
      onClick: (event) => {
        handleRowClick2(row);
        toggleHandler(event);
      },
      sx: (theme) => ({
        cursor: "pointer",
        "td:first-of-type": {
          display: "none", // Hide the checkbox column in the body
        },
        backgroundColor:
          selectedRowId === row.id ? theme.colors.blue[1] : "transparent",
        "&:hover": {
          backgroundColor:
            selectedRowId === row.id
              ? theme.colors.blue[2]
              : theme.colors.gray[0],
        },
      }),
    };
  };

  // ////////////////////////////////////////////////UPDATE STATUS OF TABLE DATA////////////////////////////////////////////

  const UpdatedData = async () => {
    const UpdatedStatus = !revertStatus;

    const Response = await UpdateAccountType(getStatusID, UpdatedStatus);

    if (Response) {
      console.log(Response.data);
      setChangeState(!changeState);
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div style={{ padding: "5px 15px" }}>
      {showToaster ? (
        <Toaster
          icon={"check"}
          text={"Success"}
          text2={"The account Category has been Added."}
          handleClose={HandleToasterClose}
          duration={4000}
        />
      ) : null}
      {openModal ? (
        <AccountType cancel={HandleClsoseModal} ChangeState={HandleChange} />
      ) : null}

      {loading ? (
        <div className="loader-container" style={{ height: "60vh" }}>
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <div
            style={{
              margin: "10px 0",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "-50px",
              height: "48px",
              // backgroundColor: "green",
            }}
          >
            <TitleOfSection title={"ACCOUNT TYPES & CATEGORIES"} />
            <AddNotesButton
              icon={IoMdAddCircleOutline}
              // color="blue"
              // hoverColor="darkblue"
              title="Add Account Type"
              size="large"
              onClick={HandleOpenModal}
            />
            {revertStatus ? (
              <AddNotesButton
                icon={MdDoNotDisturb}
                // color="blue"
                // hoverColor="darkblue"
                title="Deactive"
                size="large"
                onClick={UpdatedData}
              />
            ) : null}
            {revertStatus ? null : (
              <AddNotesButton
                icon={ImSwitch}
                // color="blue"
                // hoverColor="darkblue"
                title="Activate"
                size="large"
                onClick={UpdatedData}
              />
            )}
          </div>
          {/* <Line /> */}
          <div
            style={{
              display: "flex",
              alignItems: "start",
              gap: "20px",
              height: "59vh",
            }}
          >
            <HeadlessTable2
              columns={columnsData3}
              data={accountTypes}
              ToggleBtnTitle={"AUTO NUMBERING"}
              showAddNotesButton={false}
              TitleButton={true}
              rowSelection={true}
              expandingRow={false}
              editiing={false}
              titleName={"ACCOUNT TYPES & CATEGORIES"}
              smallWidth={"SetWidth"}
              SimpleName={"SEGMENTS"}
              mantineTableBodyRowProps={mantineTableBodyRowPropsTD}
              CustomButtons={true}
              multiSelection={false}
            />
            <HeadlessTable2
              columns={columnsData2}
              data={rowData}
              ToggleBtnTitle={"AUTO NUMBERING"}
              showAddNotesButton={false}
              // onAddNotesClick={HandleModal}
              TitleButton={false}
              SimpleName={"COST CENTER"}
              rowSelection={true}
              expandingRow={false}
              editiing={false}
              mantineTableBodyRowProps={mantineTableBodyRowPropsTD2}
              multiSelection={true}
              CustomButtons={false}
            />
          </div>
        </>
      )}
      <ActivityPart ShowButton={false} Val={true} />
    </div>
  );
};

export default AccountTypeCategory;
