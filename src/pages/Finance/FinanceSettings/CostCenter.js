import React, { useEffect, useState } from "react";
import TitleOfSection from "../../../New-Screens/Components/TitleOfSection";
import styled from "styled-components";
import SettingsTables from "../../../New-Screens/Sections/SettingsTables";
import ActivityPart from "../../../New-Screens/Sections/ActivityPart";
import AccountModal from "../../../components/Modals/AccountModal";
import { CostCenterGet, CostCenterUpdate, GetSegment } from "../../../Api/Apis";
import HeadlessTable2 from "../../../New-Screens/Components/MantineTable/HeadlessTable";

import StatusButton from "../../../components/buttons/StatusButton";
import { FaRegEdit } from "react-icons/fa";
import AddNotesButton from "../../../New-Screens/Components/MantineTable/Buttons/AddNotesButton";
import { MdAddCircle } from "react-icons/md";
import { MdDoNotDisturb } from "react-icons/md";
import { ImSwitch } from "react-icons/im";
import "../../../components/Loader/Loader.css";
import { useSelector } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";
const Wrapper = styled.div`
  padding: 0 15px;
`;
const Line = styled.div`
  background-color: #464f604d;
  height: 0.5px;
  width: 100%;
  /* margin: 10px 0px; */
`;
const CheckSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 15px 0px;
`;
const Text = styled.div`
  color: #6a727f;
  font-size: 14px;
`;

const Checkbox = styled.input`
  width: 17px;
  height: 17px;
  accent-color: #0a83eb;
  cursor: pointer;
  &:hover {
    accent-color: #0a83eb;
  }
`;
const InputCheckOne2 = styled.input`
  height: 18px;
  width: 18px;
`;
const Wrap2 = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18px;
`;
const Span2 = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.bgColor};
  transition: 0.4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: "";
    height: 11px;
    width: 11px;
    left: ${(props) => (props.clicked ? "26.0px" : "3.5px")};
    bottom: 3px;
    background-color: #ffffff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const InputCheck2 = styled.input`
  height: 0px;
  width: 0px;
  opacity: 0;
`;

const CostCenter = ({ ToasterSegment, ToasterCostCenter }) => {
  const [columnsData, setColumnsData] = useState([
    {
      accessorKey: "segment",
      header: "Segment",
      size: 0,
    },
    {
      accessorKey: "code",
      header: "Cost Center Code",
      size: 35,
    },
    {
      accessorKey: "name",
      header: "Cost Center Name",
      size: 35,
    },
    {
      accessorKey: "status",
      header: "Status",
      size: 35,
      Cell: ({ cell }) => {
        return <StatusButton value={cell.getValue() ? "Active" : "Inactive"} />;
      },
    },
  ]);

  const [rowdata, setRowData] = useState([]);
  const columnsData2 = [
    {
      accessorKey: "segmentSystem",
      header: "Default",
      size: 0,
      // id: "fiscalYearStartDate",
    },
    {
      accessorKey: "segment",
      header: "Segments",
      size: 0,
      // id: "fiscalPeriod",
    },
    {
      accessorKey: "status",
      header: "Active",
      size: 0,
      Cell: ({ row }) => {
        const isChecked = row.original.status === true;
        return (
          <input
            style={{ width: "17px", height: "17px" }}
            type="checkbox"
            checked={isChecked}
          />
        );
      },
    },
  ];

  const [rowdata2, setRowdata2] = useState([]);

  const [modal, setModal] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [stateChange, setStateChange] = useState(false);
  const [statusChange, setStatusChange] = useState(false);
  const [buttonChange, setbuttonChange] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const [selectedRowId, setSelectedRowId] = useState(null);

  const HandleModal = () => {
    if (selectedData) {
      setModal(!modal);
    } else {
      alert("Row is not Selected to Update");
    }
  };
  const CancelAction = () => {
    setModal(false);
  };
  const SaveAction = () => {
    setModal(false);
    alert("Cost Center is Updated");
  };

  const HandleModal2 = () => {
    setIsModal(!isModal);
    setSelectedData(null);
  };
  const CancelAction2 = () => {
    setIsModal(false);
  };
  const SaveAction2 = () => {
    setIsModal(false);
    alert("Cost Center is Created");
  };

  // ////////////////////////////////////GET API////////////////////////////////////////

  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);

  const CostCenterData = async () => {
    const data = await CostCenterGet();
    try {
      if (data.status) {
        setOriginalData(data.data);
        let temp = [];
        temp = data.data.filter((x) => x.segment === "Division");
        setRowData(temp);
        console.log(temp, "---Data---");
        setLoading(false);
      } else {
        setLoading(false);
        console.log(data.data, "---Error---");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    CostCenterData();
  }, [stateChange, statusChange]);

  // //////////////////////////////UPDATE STATUS/////////////////////////////////////////

  const UpdateStatus = async () => {
    const UpdatedStatus = !selectedData?.status;
    const UpdatedData = await CostCenterUpdate(selectedData.id, UpdatedStatus);
    if (UpdatedData) {
      console.log(UpdatedData, "---Updated Data---");

      setStatusChange(!statusChange);
    } else {
      console.log(UpdatedData, "---Error---");
    }
  };

  const handleRowClick = (row) => {
    console.log("Row data:", row.original);
    setSelectedData(row.original);

    // Assuming costCenterData is the array you're working with
    const filteredData = originalData.filter(
      (res) => res.segment === row.original.segment
    );

    setRowData(filteredData); // Set the filtered data
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

  const HandleChange = () => {
    setStateChange(true);
  };

  const CloseModal = () => {
    setIsModal(false);
  };
  const Close = () => {
    setModal(false);
  };

  // ///////////////////////////////////////////////////////SEGMENT GET API/////////////////////////////////////////////////

  const [loading2, setLoading2] = useState(true);
  const [updateStatus, setUpdatedStatus] = useState(false);
  const [dropdownOption, setDropdownOption] = useState();
  const [segmentName, setSegmentName] = useState();

  const HandleStatus = () => {
    setUpdatedStatus(true);
  };

  const GetSegmentData = async () => {
    const Data = await GetSegment();

    // fetching the segment table data

    try {
      if (Data.status) {
        setRowdata2(Data.data);
        console.log(Data, "---Data---");
        setLoading2(false);
        // setting dropdown options for update modal

        let temp = [];
        temp = Data.data.map((item) => item.segmentSystem);
        console.log(temp, "cwec");
        setDropdownOption(temp);

        let temp2 = [];
        temp2 = Data.data.map((item) => ({
          segment: item.segment,
          id: item.id,
        }));
        console.log(temp2, "---Names---");
        setSegmentName(temp2);
      } else {
        setLoading2(false);
        console.log(Data.data, "---Error---");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetSegmentData();
  }, [updateStatus]);

  const [toggle, setToggle] = useState(false);

  const HandleToggle = () => {
    setToggle(!toggle);
  };
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const getSpanBg = () => (toggle ? themeKeys.c10 : themeKeys.c6);

  return (
    <Wrapper>
      {modal ? (
        <AccountModal
          Object={true}
          Cancel2={CancelAction}
          Save2={SaveAction}
          title={"Update Segment Name"}
          RowID={selectedData}
          CloseModal={Close}
          segmentGetFunction={GetSegmentData}
          UpdateStatus={HandleStatus}
          DefaultOptions={dropdownOption}
          ToasterCostCenter={ToasterSegment}
          ToasterSegment={ToasterCostCenter}
          Height={false}
        />
      ) : null}
      {isModal ? (
        <AccountModal
          title={"New Cost Center"}
          Object={true}
          Field={true}
          Cancel2={CancelAction2}
          Save2={SaveAction2}
          changeState={HandleChange}
          closeModal={CloseModal}
          DefaultOptions={dropdownOption}
          RowID={selectedData}
          SegmentNames={segmentName}
          ToasterCostCenter={ToasterSegment}
          ToasterSegment={ToasterCostCenter}
          Height={true}
        />
      ) : null}
      {/* <div style={{ margin: "10px 0" }}>
        <TitleOfSection title={"COST CENTER SETTINGS"} />
      </div> */}
      {/* <Line /> */}
      <CheckSection>
        <Text>Enable Cost Center</Text>
        <Wrap2>
          <InputCheck2 style={{ cursor: "pointer" }} type="checkbox" />
          <Span2
            bgColor={getSpanBg()}
            clicked={toggle}
            onClick={HandleToggle}
          ></Span2>
        </Wrap2>
      </CheckSection>
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
        <TitleOfSection title={"COST CENTER DETAILS"} />
        <AddNotesButton
          icon={FaRegEdit}
          // color="blue"
          // hoverColor="darkblue"
          title="Update Segments"
          size="large"
          onClick={HandleModal}
        />
        <AddNotesButton
          icon={IoMdAddCircleOutline}
          // color="blue"
          // hoverColor="darkblue"
          title="New Cost Center"
          size="large"
          onClick={HandleModal2}
        />
        {selectedData?.status ? (
          <AddNotesButton
            icon={MdDoNotDisturb}
            // color="blue"
            // hoverColor="darkblue"
            title="Deactive"
            size="large"
            onClick={UpdateStatus}
          />
        ) : null}
        {selectedData?.status ? null : (
          <AddNotesButton
            icon={ImSwitch}
            // color="blue"
            // hoverColor="darkblue"
            title="Activate"
            size="large"
            onClick={UpdateStatus}
          />
        )}
      </div>
      <Line />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          width: "100%",
          height: "58vh",
        }}
      >
        {loading || loading2 ? (
          <div className="loader-container" style={{ height: "60vh" }}>
            <span className="loader"></span>
          </div>
        ) : (
          <>
            <HeadlessTable2
              columns={columnsData2}
              data={rowdata2}
              ToggleBtnTitle={"AUTO NUMBERING"}
              showAddNotesButton={false}
              TitleButton={false}
              rowSelection={true}
              expandingRow={false}
              editiing={false}
              smallWidth={"SetWidth"}
              SimpleName={"SEGMENTS"}
              mantineTableBodyRowProps={mantineTableBodyRowPropsTD}
              CustomButtons={true}
              multiSelection={false}
            />
            <HeadlessTable2
              columns={columnsData}
              data={rowdata}
              ToggleBtnTitle={"AUTO NUMBERING"}
              showAddNotesButton={false}
              onAddNotesClick={HandleModal}
              TitleButton={false}
              SimpleName={"COST CENTER"}
              rowSelection={true}
              expandingRow={false}
              editiing={false}
              mantineTableBodyRowProps={mantineTableBodyRowPropsTD}
              multiSelection={false}
              CustomButtons={false}
            />
          </>
        )}
      </div>
      <ActivityPart ShowButton={false} Val={true} />
    </Wrapper>
  );
};

export default CostCenter;
