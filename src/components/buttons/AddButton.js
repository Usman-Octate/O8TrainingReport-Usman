import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import AddBlue from "../SVGicons/AddBlue";
import Custom from "../SVGicons/Custom";
import Edit from "../SVGicons/Edit";
import Export from "../SVGicons/Export";
// import Preview from "../SVGicons/Preview";
import Print from "../SVGicons/Print";
import Report from "../SVGicons/Report";
import AddTile from "../SVGicons/AddTile";
import EditTile from "../SVGicons/EditTile";
import Save from "../SVGicons/Save";
import PostIcon from "../SVGicons/PostIcon";
import Transaction from "../SVGicons/Transaction";
import Delete from "../SVGicons/Delete";
import Duplicate from "../SVGicons/Duplicate";
import Send from "../SVGicons/Send";
import ReportIcon from "../SVGicons/ReportIcon";
import Approval from "../SVGicons/Approval";
import Attach from "../SVGicons/Attach";
import AddRow from "../SVGicons/AddRow";
import Remove from "../SVGicons/Remove";
import Import from "../SVGicons/Import";
import AddNote from "../SVGicons/AddNote";
import Types from "../SVGicons/Types";
import Search from "../SVGicons/Search";
import Calculate from "../SVGicons/Calculate";
import SaveColumn from "../SVGicons/SaveColumn";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { PiPrinter } from "react-icons/pi";
import { BsClipboard2Pulse } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineDuplicate } from "react-icons/hi";
import { BsSend } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbAdjustmentsCheck } from "react-icons/tb";
import { PiSquaresFour } from "react-icons/pi";
import { BsSliders } from "react-icons/bs";
import { TiExportOutline } from "react-icons/ti";
import { BsJournalCode } from "react-icons/bs";
import { RiExchangeFundsLine } from "react-icons/ri";
import { GrDocumentConfig } from "react-icons/gr";
import { RiCurrencyLine } from "react-icons/ri";

const Btn = styled.div`
  padding: ${(props) => (props.height ? "3px 10px" : "5px 10px")};
  border-radius: 8px;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: ${(props) => props.color};
  transition: all 0.5s ease;

  @media (max-width: 1024px) {
    min-width: ${(props) => (props.fixWidth ? "4.8rem" : "")};
    padding: 3px 6px;
  }
  &:hover {
    /* box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); */
    background-color: ${(props) => (props.disable ? props.color : props.hover)};
  }
`;
const Text = styled.div`
  color: ${(props) => props.color};
  font-weight: 600;
  margin-left: 8px;
  font-size: 14px;
  padding: ${(props) => (props.size ? "1px 0px" : "3px 0px")};
  @media (max-width: 750px) {
    font-size: 10px;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;
const Image = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    width: 16px;
  }
`;
const AddButton = (props) => {
  const sBlue = "blue";
  const sGrey = "grey";
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const IconUrl = require(`../../assets2/ButtonIcons/${props.icon}.svg`);

  const getBtnColor = () =>
    props.color === sBlue ? themeKeys.primary : themeKeys.c20;
  const selectedColor = getBtnColor();
  const getTextColor = () =>
    // let col = "#827CA3";
    // if (props.color === sBlue) {
    //   col = themeKeys.c20;
    // } else return col;
    props.color === sBlue ? themeKeys.c20 : "#827CA3";
  const getIconColor = () => themeKeys.primary;

  const getHoverColor = () => {
    return props.color === sBlue ? themeKeys.darkHover : themeKeys.hover2;
  };
  return (
    <Btn
      color={getBtnColor()}
      onClick={props.clickScreenChange}
      fixWidth={props.fixWidth}
      height={props.height}
      hover={getHoverColor()}
      disable={props.disable}
    >
      <Image>
        {props.icon === "AddBlue" ? (
          <IoMdAddCircleOutline color={themeKeys.primary} size={18} />
        ) : props.icon === "Custom" ? (
          <BsSliders color={themeKeys.primary} size={16} />
        ) : props.icon === "Edit" ? (
          <Edit fill={getIconColor()} />
        ) : props.icon === "Export" ? (
          <TiExportOutline color={themeKeys.primary} size={20} />
        ) : props.icon === "Preview" ? (
          <AiOutlineFileSearch color={themeKeys.primary} size={20} />
        ) : props.icon === "Print" ? (
          <PiPrinter color={themeKeys.primary} size={20} />
        ) : props.icon === "SaveGrid" ? (
          <TbAdjustmentsCheck color={themeKeys.primary} size={18} />
        ) : props.icon === "Report" ? (
          <BsClipboard2Pulse color={themeKeys.primary} size={18} />
        ) : props.icon === "TransactionConfig" ? (
          <GrDocumentConfig color={themeKeys.primary} size={16} />
        ) : props.icon === "SaveGrid" ? (
          <TbAdjustmentsCheck color={themeKeys.primary} size={18} />
        ) : props.icon === "Actions" ? (
          <PiSquaresFour color={themeKeys.primary} size={18} />
        ) : props.icon === "ForexGrid" ? (
          <RiCurrencyLine color={themeKeys.primary} size={16} />
        ) : props.icon === "AddBackgroundBlue" ? (
          <IoMdAddCircleOutline color={themeKeys.primary} size={18} />
        ) : props.name === "Trans" ? (
          <HiOutlineDocumentAdd color={themeKeys.primary} size={20} />
        ) : props.name === "Add" ? (
          <IoMdAddCircleOutline color={themeKeys.primary} size={18} />
        ) : props.icon === "Reverse" ? (
          <BsJournalCode color={themeKeys.primary} size={18} />
        ) : props.icon === "Reccure" ? (
          <RiExchangeFundsLine color={themeKeys.primary} size={18} />
        ) : props.icon === "EditTitle" ? (
          <EditTile fill={getIconColor()} />
        ) : props.icon === "Save" ? (
          <Save fill={getIconColor()} />
        ) : props.icon === "Tick" ? (
          <PostIcon />
        ) : props.icon === "GreyAdd" ? (
          <HiOutlineDocumentAdd color={themeKeys.primary} size={20} />
        ) : props.icon === "DeleteIcon" ? (
          <AiOutlineDelete color={themeKeys.primary} size={20} />
        ) : props.icon === "SendIcon" ? (
          <BsSend color={themeKeys.primary} />
        ) : props.icon === "ReportIcon" ? (
          <BsClipboard2Pulse color={themeKeys.primary} size={18} />
        ) : props.icon === "Approval" ? (
          <Approval fill={getIconColor()} />
        ) : props.icon === "Duplicate" ? (
          <HiOutlineDuplicate color={themeKeys.primary} size={20} />
        ) : props.icon === "AttachIcon" ? (
          <Attach fill={getIconColor()} />
        ) : props.icon === "AddRow" ? (
          <AddRow fill={getIconColor()} />
        ) : props.icon === "Remove" ? (
          <Remove fill={getIconColor()} />
        ) : props.icon === "Import" ? (
          <Import fill={getIconColor()} />
        ) : props.icon === "Type" ? (
          <Types fill={getIconColor()} />
        ) : props.icon === "SearchIcon" ? (
          <Search fill={getIconColor()} />
        ) : props.icon === "Calculate" ? (
          <Calculate fill={getIconColor()} />
        ) : props.icon === "AddNote" ? (
          <AddNote fill={getIconColor()} />
        ) : props.icon === "AddWhite" ? (
          <img src={IconUrl} alt="icon" />
        ) : (
          ""
        )}
      </Image>

      <Text color={getTextColor()} size={props.size}>
        {/* <Text color={"#827CA3"} size={props.size}> */}
        {props.title}
      </Text>
    </Btn>
  );
};

export default AddButton;
