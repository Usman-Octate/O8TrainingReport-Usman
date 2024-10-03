import React from "react";
import LogoIcon from "../../assets2/SideNavIcons/Logo.svg";
import ArrowClose from "../../assets2/SideNavIcons/ArrowClose.svg";
import ArrowCloseB from "../../assets2/SideNavIcons/ArrowCloseB.svg";
import NavButton from "./components/buttons/NavButton";
import {
  Nav,
  HideNav,
  Logo,
  Text,
  Content,
  LogoImage,
  PriHideNav,
  IndigoHideNav,
  RoseHideNav,
  AuroraHideNav,
  SpaceHideNav,
  MidnightHideNav,
} from "./style";
import { option, navIcons } from "./utils";
import { BsSpeedometer2 } from "react-icons/bs";
// redux
import { useSelector } from "react-redux";
import styled from "styled-components";
import MainNavHandle from "../SVGicons/MainNavHandle";

const OpenNav = ({
  handleDropDownOptionClick,
  onOptionClick,
  selectedOption,
  handleClose,
  setSelectedOption,
}) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const keys = useSelector((state) => state.localization.keys);
  const tagLine = "Dream Catchers Technologies";
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
    <Nav bgColor={themeKeys.navBackground}>
      {themeKeys.primary === "#2E90FA" ? (
        <PriHideNav onClick={handleClose}>
          <MainNavHandle startCol={"#53B1FD"} endCol={"#2E90FA"} />
          <div
            style={{
              marginTop: 40,
              marginLeft: 3,
              position: "absolute",
              top: "0",
            }}
          >
            <img src={ArrowClose} alt="q" />
          </div>
        </PriHideNav>
      ) : themeKeys.primary === "#6172F3" ? (
        <PriHideNav onClick={handleClose}>
          <MainNavHandle startCol={"#8C98F6"} endCol={"#6172F3"} />
          <div
            style={{
              marginTop: 40,
              marginLeft: 3,
              position: "absolute",
              top: "0",
            }}
          >
            <img src={ArrowClose} alt="q" />
          </div>
        </PriHideNav>
      ) : themeKeys.primary === "#F63D68" ? (
        <PriHideNav onClick={handleClose}>
          <MainNavHandle startCol={"#FD6F8E"} endCol={"#F63D68"} />
          <div
            style={{
              marginTop: 40,
              marginLeft: 3,
              position: "absolute",
              top: "0",
            }}
          >
            <img src={ArrowClose} alt="q" />
          </div>
        </PriHideNav>
      ) : themeKeys.primary === "#15B79E" ? (
        <PriHideNav onClick={handleClose}>
          <MainNavHandle startCol={"#2ED3B7"} endCol={"#15B79E"} />
          <div
            style={{
              marginTop: 38,
              marginLeft: 4,
              position: "absolute",
              top: "0",
            }}
          >
            <img src={ArrowClose} alt="q" />
          </div>
        </PriHideNav>
      ) : themeKeys.primary === "#4A5578" ? (
        <PriHideNav onClick={handleClose}>
          <MainNavHandle startCol={"#707892"} endCol={"#4A5578"} />
          <div
            style={{
              marginTop: 38,
              marginLeft: 4,
              position: "absolute",
              top: "0",
            }}
          >
            <img src={ArrowClose} alt="q" />
          </div>
        </PriHideNav>
      ) : themeKeys.primary === "#1849a9" ? (
        <PriHideNav onClick={handleClose}>
          <MainNavHandle startCol={"#486ebb"} endCol={"#1849a9"} />
          <div
            style={{
              marginTop: 38,
              marginLeft: 4,
              position: "absolute",
              top: "0",
            }}
          >
            <img src={ArrowClose} alt="q" />
          </div>
        </PriHideNav>
      ) : null}
      <Logo>
        <LogoImage>
          <img src={LogoIcon} alt="logo" />
        </LogoImage>

        <Text color={themeKeys.Title}>{tagLine}</Text>
      </Logo>
      <Content>
        <NavButton
          title={keys["KEY0001"]}
          icon={<BsSpeedometer2 />}
          icColor={themeKeys.icDash}
          iconShow={true}
          onOptionClick={onOptionClick}
          handleDropDownOptionClick={handleDropDownOptionClick}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />

        {option.map((item, index) => {
          return (
            <NavButton
              title={keys[item.title]}
              icon={item.icon}
              icColor={colorList[index]}
              onOptionClick={onOptionClick}
              handleDropDownOptionClick={handleDropDownOptionClick}
              selectedOption={selectedOption}
              options={item.menu}
              submenu={item.submenu}
            />
          );
        })}
      </Content>
    </Nav>
  );
};

export default OpenNav;
