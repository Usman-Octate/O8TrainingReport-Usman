import React, { useState } from "react";
// components
import NavHideButtons from "../buttons/NavHideButtons";
import FLoatingMenu from "./components/FloatingMenu/FloatingMenu";
// styles
import {
  ClosedNav,
  NavHide,
  ContentHideNav,
  CloseNavHandle,
  PriCloseNavHandle,
  IndigoHideNav,
  IndigoCloseNavHandle,
  RoseCloseNavHandle,
  SpaceNavHandle,
  SpaceCloseNavHandle,
  MidnightCloseNavHandle,
  AuroraCloseNavHandle,
} from "./style";
// utils
import { navIcons, option } from "./utils";
// assets
import ArrowOpen from "../../assets2/SideNavIcons/ArrowOpen.svg";
// redux
import { useSelector } from "react-redux";
import { BsSpeedometer2 } from "react-icons/bs";
import IcItem from "./components/buttons/IcItem";
import MainNavClose from "../SVGicons/MainNavClose";
const CloseNav = ({
  handleDropDownOptionClick,
  onOptionClick,
  selectedOption,
  handleClose,
}) => {
  console.log(selectedOption, "a");
  const keys = useSelector((state) => state.localization.keys);
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const dash = {
    title: keys.KEY0001,
    icon: <BsSpeedometer2 />,
  };
  const lowerNavOption = 5;
  const [floatingMenu, setFloatingMenu] = useState("");
  const [selectedPos, setSelectedPos] = useState(0);

  const itemClick = (item) => {
    setFloatingMenu("");
    onOptionClick(item);
  };

  const onClick = (e, item) => {
    console.log(e, item, "asd");
    if (item == floatingMenu) {
      setFloatingMenu("");
    } else {
      setFloatingMenu(item);
    }
    const itemPos = e.clientY;
    setSelectedPos(itemPos);
    if (item == "Dashboard") {
      itemClick(item);
    }
  };

  const handleScroll = () => {
    setFloatingMenu("");
  };
  const colorList = [
    themeKeys.icFinance,
    themeKeys.icOrder2Cash,
    themeKeys.icProcure2Pay,
    themeKeys.icProd2Service,
    themeKeys.icBanking,
    themeKeys.icProject,
    themeKeys.icReport,
    themeKeys.icConfig,
    themeKeys.icCustom,
  ];
  return (
    <NavHide onScroll={handleScroll} bgColor={themeKeys.navBackground}>
      <ContentHideNav>
        <NavHideButtons
          data={dash}
          icColor={themeKeys.icDash}
          hoverColor={themeKeys.hover}
          onClick={(e, i) => onClick(e, i)}
          selectedOption={selectedOption}
        />
        {option.map((item, index) => {
          return (
            <>
              <NavHideButtons
                hoverColor={themeKeys.hover}
                data={item}
                icColor={colorList[index]}
                // selectedOption={selectedOption}
                onClick={(e, i) => onClick(e, i)}
                // handleDropDownOptionClick={(e) => handleDropDownOptionClick(e)}
              />

              {floatingMenu == item.title ? (
                <FLoatingMenu
                  centerFloatMenu={index > lowerNavOption}
                  isOpen={floatingMenu == item.title}
                  data={item}
                  selectedPos={selectedPos}
                  selectedOption={selectedOption}
                  handleDropDownOptionClick={(e) =>
                    handleDropDownOptionClick(e)
                  }
                  onOptionClick={(e) => itemClick(e)}
                  submenu={item.submenu}
                  icColor={colorList[index]}
                />
              ) : null}
            </>
          );
        })}

        {/* <ClosedNav onClick={handleClose}>
          <div style={{ margin: "auto" }}>
            <img src={ArrowOpen} alt="q" />
          </div>3
        </ClosedNav> */}
        {themeKeys.primary === "#2E90FA" ? (
          <PriCloseNavHandle
            onClick={handleClose}
            bgColor={themeKeys.closedNav}
          >
            <MainNavClose startCol={"#53B1FD"} endCol={"#2E90FA"} />
            <div
              style={{
                marginTop: 39,
                marginLeft: 3,
                position: "absolute",
                top: "0",
              }}
            >
              <img src={ArrowOpen} alt="q" />
            </div>
          </PriCloseNavHandle>
        ) : themeKeys.primary === "#6172F3" ? (
          <PriCloseNavHandle
            onClick={handleClose}
            bgColor={themeKeys.closedNav}
          >
            <MainNavClose startCol={"#8C98F6"} endCol={"#6172F3"} />
            <div
              style={{
                marginTop: 39,
                marginLeft: 3,
                position: "absolute",
                top: "0",
              }}
            >
              <img src={ArrowOpen} alt="q" />
            </div>
          </PriCloseNavHandle>
        ) : themeKeys.primary === "#F63D68" ? (
          <PriCloseNavHandle
            onClick={handleClose}
            bgColor={themeKeys.closedNav}
          >
            <MainNavClose startCol={"#FD6F8E"} endCol={"#F63D68"} />
            <div
              style={{
                marginTop: 39,
                marginLeft: 3,
                position: "absolute",
                top: "0",
              }}
            >
              <img src={ArrowOpen} alt="q" />
            </div>
          </PriCloseNavHandle>
        ) : themeKeys.primary === "#15B79E" ? (
          <PriCloseNavHandle
            onClick={handleClose}
            bgColor={themeKeys.closedNav}
          >
            <MainNavClose startCol={"#2ED3B7"} endCol={"#15B79E"} />
            <div
              style={{
                marginTop: 39,
                marginLeft: 3,
                position: "absolute",
                top: "0",
              }}
            >
              <img src={ArrowOpen} alt="q" />
            </div>
          </PriCloseNavHandle>
        ) : themeKeys.primary === "#4A5578" ? (
          <PriCloseNavHandle
            onClick={handleClose}
            bgColor={themeKeys.closedNav}
          >
            <MainNavClose startCol={"#707892"} endCol={"#4A5578"} />
            <div
              style={{
                marginTop: 39,
                marginLeft: 3,
                position: "absolute",
                top: "0",
              }}
            >
              <img src={ArrowOpen} alt="q" />
            </div>
          </PriCloseNavHandle>
        ) : themeKeys.primary === "#1849a9" ? (
          <PriCloseNavHandle
            onClick={handleClose}
            bgColor={themeKeys.closedNav}
          >
            <MainNavClose startCol={"#486ebb"} endCol={"#1849a9"} />
            <div
              style={{
                marginTop: 39,
                marginLeft: 4,
                position: "absolute",
                top: "0",
              }}
            >
              <img src={ArrowOpen} alt="q" />
            </div>
          </PriCloseNavHandle>
        ) : null}
      </ContentHideNav>
    </NavHide>
  );
};

export default CloseNav;
