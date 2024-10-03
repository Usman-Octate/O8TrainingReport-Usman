import React, { useState } from "react";
import AddButton from "../../../components/buttons/AddButton";
import { useSelector } from "react-redux";
import { TbAdjustmentsCheck } from "react-icons/tb";

import MRTButton from "./Buttons/MRTButton";
import MRTToggleButton from "./Buttons/MRTToggleButton";
import SaveGridButtonButton from "./Buttons/SaveGridButton";
import MRTTableDetailsButton from "./Buttons/MRTTableDetailsButton";
import AddNotesButton from "./Buttons/AddNotesButton";
import { ImAttachment } from "react-icons/im";
import { FaNotesMedical } from "react-icons/fa";
import { LuFileEdit } from "react-icons/lu";
import { HiMiniArrowDownTray } from "react-icons/hi2";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { TiExportOutline } from "react-icons/ti";
import { BsClipboard2Pulse } from "react-icons/bs";
import TitleOfSection from "../TitleOfSection";
import { GrDocumentConfig } from "react-icons/gr";
import styled from "styled-components";
import { AiOutlineFileSearch } from "react-icons/ai";
import { PiPrinter } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { ImSwitch } from "react-icons/im";
import { CgRemove } from "react-icons/cg";
import { LuCheckCircle } from "react-icons/lu";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";

import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdDoNotDisturb } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";

const ParentContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Wrap = styled.div`
  background-color: white;
  /* width: 100px; */
  height: 153px;
  box-shadow: 0px 2.702708125114441px 8.513540267944336px 0px #00000040;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  position: absolute;
  top: 36px;
  right: ${(props) => (props.Btn ? "0" : "0")};
  z-index: 1000;
  margin-right: 0px;
`;
const BtnText = styled.div`
  color: #827ca3;
  font-weight: 600;
  margin-left: 8px;
  font-size: 13px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 6px 10px;
  &:hover {
    background-color: ${(props) => props.hover};
  }
`;
const BranchBtn = styled.div`
  background-color: #eaf3fe;
  border-radius: 8px;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 5px;
  padding: 0px 5px;
  height: 27px;
  cursor: pointer;
`;
const Text = styled.div`
  font-size: 12px;
  color: #2e90fa;
`;
const Title = styled.div`
  font-size: 13px;
  color: #2e90fa;
  font-weight: bold;
  align-self: center;
`;

const Title4 = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #464f60;
  margin: 5px 15px;
  opacity: 0.8;
`;
const GreyTitle = styled.div`
  color: #464f60;
  font-size: 12px;
  font-weight: 700;
  align-self: center;
  /* margin-top: 40px; */
  text-align: left;
  @media (max-width: 1166px) {
    margin: 18px 10px 10px 10px;
  }
  padding: 10px 0;
`;

const CustomToolbarActions = ({
  onAddNewClick,
  onTransactionClick,
  onEditClick,
  onPreviewClick,
  onPrintClick,
  onReportClick,
  onSaveClick,
  onTableDetailClick,
  onTableDetailDeleteClick,
  ToggleBtnTitle,
  toggleVisibility,
  onAddNotesClick,
  onExportClick,
  onAttachClick,
  showButton,
  onINAddNotesClick,
  onActivateClick,
  onDefaultClick,
  onInActiveClick,
  onAddSeriesClick,
  onUnDefaultClick,
  onEditModalClick,

  showTableDetailButton = false,
  showAddButton = false,
  showTransactionButton = false,
  showEditButton = false,
  showExportButton = false,
  showPreviewButton = false,
  showPrintButton = false,
  showReportButton = false,
  showSaveButton = false,
  showtToggleButton = false,
  showAttachButton = false,
  showAddNotesButton = false,
  showDeleteButton = false,
  showImportButton = false,
  showINAddNotesButton = false,
  showActivateButton = false,
  showInActiveButton = false,
  showDefaultButton = false,
  showUnDefaultButton = false,
  showEditModalButton,
  showAddSeriesButton,
  showSimpleText = false,
  TitleName,
  showtTitleButton,
  AddSeries,
  Reverse,
  Branch,
  SeriesClick,
  SimpleText,

  DisableActivateButton,
  DisableDefaultButton,
  disableUndefaultButton,
  disableDeactivateButton,
  disableEditSeriesButton,
  SimpleTitle,
  SimpleName,
  showCostCenterButton,
  showCostCenterButton1,
  onCostCenterClick,
  onCostListClick1,
  onCostListClick2,
  showCostCenterButton3,
  showActiveButton,
  onActiveClick,
  showAddCurrencyButton,
  onAddCurrencyClick,
  showAddPeriodButton,
  onAddPeriodClick,
  showNewTitle,
}) => {
  const keys = useSelector((state) => state.localization.keys);
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [open, setOpen] = useState(false);

  const ToggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {showAddButton && (
        <AddButton
          fixWidth={true}
          title={keys.KEY100196}
          icon={"AddWhite"}
          color={"blue"}
          clickScreenChange={onAddNewClick}
        />
      )}
      {showTableDetailButton && (
        <MRTTableDetailsButton
          // icon={TbAdjustmentsCheck}
          color="blue"
          // hoverColor="darkblue"
          title="TABLE DETAILS"
          size="large"
          onClick={onTableDetailClick}
        />
        // <AddButton
        //   title={"Table Detail"}
        //   icon={"AddWhite"}
        //   color={"blue"}
        //   clickScreenChange={onTableDetailClick}
        // />
      )}
      {Reverse && (
        <>
          <AddButton title={"Reverse"} icon={"Reverse"} />
          <AddButton title={"Recur"} icon={"Reccure"} />
        </>
      )}

      {showtToggleButton && (
        <MRTToggleButton
          title={ToggleBtnTitle}
          color="blue"
          toggleVisibility={toggleVisibility}
          // icon={"Report"}
          // onClick={onReportClick}
        />
      )}
      {showtTitleButton && (
        <TitleOfSection
          title={TitleName}
          // icon={"Report"}
        />
      )}
      {SimpleTitle && <Title>{SimpleName}</Title>}
      {showAttachButton && (
        <AddNotesButton
          icon={ImAttachment}
          // color="blue"
          // hoverColor="darkblue"
          title="Attach"
          size="large"
          onClick={onAttachClick}
        />
      )}
      {AddSeries && (
        <AddButton
          icon={"AddBlue"}
          // color="blue"
          // hoverColor="darkblue"
          title="New Series"
          size="large"
          clickScreenChange={SeriesClick}
        />
      )}
      {showEditButton && (
        <AddButton
          title={keys.KEY100197}
          icon={"Edit"}
          clickScreenChange={onEditClick}
        />
      )}
      {showDeleteButton && (
        <AddNotesButton
          icon={AiOutlineDelete}
          // color="blue"
          // hoverColor="darkblue"
          title="Delete"
          size="large"
          iconSize={20}
          onClick={onTableDetailDeleteClick}
        />
      )}
      {showImportButton && (
        <AddNotesButton
          icon={HiMiniArrowDownTray}
          // color="blue"
          // hoverColor="darkblue"
          title="Import"
          size="large"
          iconSize={20}
          // onClick={onTableDetailClick}
        />
      )}
      {showAddNotesButton && (
        <AddNotesButton
          icon={GrDocumentConfig}
          // color="blue"
          // hoverColor="darkblue"
          title="Update Series"
          size="large"
          onClick={onAddNotesClick}
        />
      )}
      {showCostCenterButton1 && (
        <AddNotesButton
          icon={FaRegEdit}
          // color="blue"
          // hoverColor="darkblue"
          title="Edit Name"
          size="large"
          onClick={onCostCenterClick}
        />
      )}
      {showCostCenterButton && (
        <AddNotesButton
          icon={MdAddCircle}
          // color="blue"
          // hoverColor="darkblue"
          title="New Cost Center"
          size="large"
          onClick={onCostListClick1}
        />
      )}
      {showCostCenterButton3 && (
        <AddNotesButton
          icon={MdDoNotDisturb}
          // color="blue"
          // hoverColor="darkblue"
          title="Deactive"
          size="large"
          onClick={onCostListClick2}
        />
      )}
      {showActiveButton && (
        <AddNotesButton
          icon={ImSwitch}
          // color="blue"
          // hoverColor="darkblue"
          title="Activate"
          size="large"
          onClick={onActiveClick}
        />
      )}
      {Branch && (
        <BranchBtn>
          <IoAddCircleOutline color="#2E90FA" />
          <Text>New Branch</Text>
        </BranchBtn>
      )}
      {showINAddNotesButton && (
        <AddNotesButton
          icon={LuFileEdit}
          // color="blue"
          // hoverColor="darkblue"
          title="Add Notes"
          size="large"
          onClick={onINAddNotesClick}
        />
      )}
      {showTransactionButton && (
        <AddButton
          title={keys.KEY10011}
          icon={"AddBlue"}
          clickScreenChange={onTransactionClick}
        />
      )}

      {showButton && (
        <>
          <AddButton title={"Reverse"} icon={"Reverse"} />
          <AddButton title={"Recur"} icon={"Reccure"} />
        </>
      )}
      {/* {showExportButton && (
        <AddButton
          title={keys.KEY100199}
          icon={"Export"}
          clickScreenChange={onExportClick}
        />
      )} */}
      {showPrintButton && (
        <>
          <ParentContainer>
            <AddButton
              title={"Actions"}
              icon={"Actions"}
              clickScreenChange={ToggleOpen}
            />
            {open && (
              <Wrap Btn={showButton}>
                <Button hover={themeKeys.hover}>
                  <AiOutlineFileSearch color={themeKeys.primary} size={20} />
                  <BtnText>Preview</BtnText>
                </Button>
                <Button hover={themeKeys.hover}>
                  <PiPrinter color={themeKeys.primary} size={20} />
                  <BtnText>Print</BtnText>
                </Button>
                <Button hover={themeKeys.hover}>
                  <TiExportOutline color={themeKeys.primary} size={20} />
                  <BtnText>Export</BtnText>
                </Button>
                <Button hover={themeKeys.hover}>
                  <BsClipboard2Pulse color={themeKeys.primary} size={20} />
                  <BtnText>Report</BtnText>
                </Button>
              </Wrap>
            )}
          </ParentContainer>
        </>
      )}

      {showSaveButton && (
        <AddNotesButton
          icon={TbAdjustmentsCheck}
          // color="blue"
          // hoverColor="darkblue"
          title="Save Grid"
          size="large"
          onClick={onSaveClick}
        />

        // <AddButton
        //   title={"Save Grid"}
        //   icon={"Print"}
        //   clickScreenChange={onSaveClick}
        // />
      )}
      {showAddSeriesButton && (
        <AddNotesButton
          icon={IoMdAddCircleOutline}
          // color="blue"
          // hoverColor="darkblue"
          title="New Series"
          size="large"
          onClick={onAddSeriesClick}
        />
      )}
      {showAddPeriodButton && (
        <AddNotesButton
          icon={IoMdAddCircleOutline}
          // color="blue"
          // hoverColor="darkblue"
          title="New Period"
          size="large"
          onClick={onAddPeriodClick}
        />
      )}
      {showAddCurrencyButton && (
        <AddNotesButton
          icon={IoMdAddCircleOutline}
          // color="blue"
          // hoverColor="darkblue"
          title="New Currency"
          size="large"
          onClick={onAddCurrencyClick}
        />
      )}
      {showNewTitle && <GreyTitle>DEFINE NEW CURRENCY</GreyTitle>}

      {showDefaultButton && (
        <AddNotesButton
          icon={LuCheckCircle}
          // color="blue"
          // hoverColor="darkblue"
          title="Mark as Default"
          size="large"
          onClick={onDefaultClick}
          disabled={DisableDefaultButton}
        />
      )}
      {showUnDefaultButton && (
        <AddNotesButton
          icon={LuCheckCircle}
          // color="blue"
          // hoverColor="darkblue"
          title="Mark as Undefault"
          size="large"
          onClick={onUnDefaultClick}
          disabled={disableUndefaultButton}
        />
      )}
      {showActivateButton && (
        <AddNotesButton
          icon={ImSwitch}
          // color="blue"
          // hoverColor="darkblue"
          title="Activate"
          size="large"
          onClick={onActivateClick}
          disabled={DisableActivateButton}
        />
      )}
      {showInActiveButton && (
        <AddNotesButton
          icon={IoMdRemoveCircleOutline}
          // color="blue"
          // hoverColor="darkblue"
          title="Deactivate"
          size="large"
          onClick={onInActiveClick}
          disabled={disableDeactivateButton}
        />
      )}

      {showEditModalButton && (
        <AddNotesButton
          icon={TbEdit}
          // color="blue"
          // hoverColor="darkblue"
          title="Edit Series"
          size="large"
          onClick={onEditModalClick}
          disabled={disableEditSeriesButton}
        />
      )}
      {showSimpleText && <Title4>{SimpleText}</Title4>}
    </div>
  );
};

export default CustomToolbarActions;
