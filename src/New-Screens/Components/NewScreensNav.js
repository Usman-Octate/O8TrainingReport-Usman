import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ArrowClose from "../../assets2/SideNavIcons/ArrowClose.svg";
import ArrowOpen from "../../assets2/SideNavIcons/ArrowOpen.svg";
import PriHandle from "../../assets2/SideNavIcons/PriHandleOpen.svg";
import IndHandle from "../../assets2/SideNavIcons/IndigoHandle.svg";
import AuroraHandle from "../../assets2/SideNavIcons/AuroraHandle.svg";
import SpaceHandle from "../../assets2/SideNavIcons/SpaceHandle.svg";

import MidnightHandle from "../../assets2/SideNavIcons/MidnightHandle.svg";
import RoseHandle from "../../assets2/SideNavIcons/RoseHandle.svg";
import HandleOpenPri from "../../assets2/SideNavIcons/RightHandlePri.svg";
import HandleOpenRose from "../../assets2/SideNavIcons/RightHandleRose.svg";
import HandleOpenMid from "../../assets2/SideNavIcons/RightHandleMid.svg";
import HandleOpenAurora from "../../assets2/SideNavIcons/RightHandleAurora.svg";
import HandleOpenSpace from "../../assets2/SideNavIcons/RightHandleSpace.svg";
import HandleOpenInd from "../../assets2/SideNavIcons/RightHandleInd.svg";
import { Link } from "react-scroll"; // Import Link from react-scroll
import NavHandle from "../../components/SVGicons/NavHandle";
import NavHandleOpen from "../../components/SVGicons/NavHandleOpen";

const Wrapper = styled.div`
  background-color: white;
  width: 200px;
  height: auto;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  position: absolute;
  right: 0;
  top: ${(props) => props.height};
  z-index: 1000;
  border-radius: 8px 0px 0px 8px;
`;
const Name = styled.div`
  font-size: 12px;
  color: #464f60;
  width: 100%;
  padding: 12px 0px;
  margin: 7px 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: center;
  border-radius: 0px;
  &:hover {
    background-color: ${(props) => props.hover};
  }
`;
const Title = styled.div`
  font-size: 12px;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  padding: 15px 0;
  background: ${(props) => props.txtColor};
  border-bottom: 1px solid #e0e0e0;
  border-radius: 8px 0px 0px 0px;
  width: 100%;
`;
const HideNavPri = styled.div`
  /* background-image: url(${NavHandle}); */
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  /* border-radius: 200px 0px 0px 200px; */
  width: 16px;
  height: 95.5px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  right: 0;
  z-index: 5;
`;
const HideNavInd = styled.div`
  background-image: url(${HandleOpenInd});
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  /* border-radius: 200px 0px 0px 200px; */
  width: 16px;
  height: 95.5px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  right: 0;
  z-index: 5;
`;
const HideNavAurora = styled.div`
  background-image: url(${HandleOpenAurora});
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  /* border-radius: 200px 0px 0px 200px; */
  width: 16px;
  height: 95.5px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  right: 0;
  z-index: 5;
`;
const HideNavSpace = styled.div`
  background-image: url(${HandleOpenSpace});
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  /* border-radius: 200px 0px 0px 200px; */
  width: 16px;
  height: 95.5px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  right: 0;
  z-index: 5;
`;
const HideNavRose = styled.div`
  background-image: url(${HandleOpenRose});
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  /* border-radius: 200px 0px 0px 200px; */
  width: 16px;
  height: 95.5px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  right: 0;
  z-index: 5;
`;
const HideNavMid = styled.div`
  background-image: url(${HandleOpenMid});
  /* background: linear-gradient(to right, #2e90fa, #53b1fd); */
  /* border-radius: 200px 0px 0px 200px; */
  width: 16px;
  height: 95.5px;
  cursor: pointer;
  position: absolute;
  top: 49%;
  right: 0;
  z-index: 5;
`;
const PriHideNav = styled.div`
  background-image: url(${PriHandle});

  width: 15px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 42%;
  left: 0.2%;
  z-index: 5;
`;
const IndHideNav = styled.div`
  background-image: url(${IndHandle});

  width: 15px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 42%;
  left: 0.2%;
  z-index: 5;
`;
const AuroraHideNav = styled.div`
  background-image: url(${AuroraHandle});

  width: 15px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 42%;
  left: 0.2%;
  z-index: 5;
`;
const SpaceHideNav = styled.div`
  background-image: url(${SpaceHandle});

  width: 15px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 42%;
  left: 0.2%;
  z-index: 5;
`;
const MidHideNav = styled.div`
  background-image: url(${MidnightHandle});

  width: 15px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 42%;
  left: 0.2%;
  z-index: 5;
`;
const RoseHideNav = styled.div`
  background-image: url(${RoseHandle});

  width: 15px;
  height: 94.2px;
  cursor: pointer;
  position: absolute;
  top: 42%;
  left: 0.2%;
  z-index: 5;
`;
const Wrap = styled.div``;

const NewScreensNav = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [close, setClose] = useState(false);
  const [value, setValue] = useState("");

  const handleClose = () => {
    setClose(!close);
  };

  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     console.log(`Scrolling to ${sectionId}`); // Debugging line

  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       // block: "start",
  //     });
  //     console.log("Scrolled to", sectionId);
  //   }
  // };#2ED3B7

  const buttonName = (event) => {
    setValue(event);
  };

  return (
    <Wrap>
      {close ? null : (
        <>
          {themeKeys.primary === "#2E90FA" ? (
            <HideNavPri onClick={handleClose}>
              <NavHandle startCol={"#53B1FD"} endCol={"#2E90FA"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 4,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowClose} alt="q" />
              </div>
            </HideNavPri>
          ) : themeKeys.primary === "#6172F3" ? (
            <HideNavPri onClick={handleClose}>
              <NavHandle startCol={"#8C98F6"} endCol={"#6172F3"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 4,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowClose} alt="q" />
              </div>
            </HideNavPri>
          ) : themeKeys.primary === "#F63D68" ? (
            <HideNavPri onClick={handleClose}>
              <NavHandle startCol={"#FD6F8E"} endCol={"#F63D68"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 4,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowClose} alt="q" />
              </div>
            </HideNavPri>
          ) : themeKeys.primary === "#15B79E" ? (
            <HideNavPri onClick={handleClose}>
              <NavHandle startCol={"#2ED3B7"} endCol={"#15B79E"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 4,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowClose} alt="q" />
              </div>
            </HideNavPri>
          ) : themeKeys.primary === "#1849a9" ? (
            <HideNavPri onClick={handleClose}>
              <NavHandle startCol={"#486ebb"} endCol={"#1849a9"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 4,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowClose} alt="q" />
              </div>
            </HideNavPri>
          ) : themeKeys.primary === "#4A5578" ? (
            <HideNavPri onClick={handleClose}>
              <NavHandle startCol={"#707892"} endCol={"#4A5578"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 4,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowClose} alt="q" />
              </div>
            </HideNavPri>
          ) : null}
        </>
      )}
      {close ? (
        <Wrapper height={props.height}>
          {themeKeys.primary === "#2E90FA" ? (
            <PriHideNav onClick={handleClose}>
              <NavHandleOpen startCol={"#53B1FD"} endCol={"#2E90FA"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 3,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowOpen} alt="q" />
              </div>
            </PriHideNav>
          ) : themeKeys.primary === "#6172F3" ? (
            <PriHideNav onClick={handleClose}>
              <NavHandleOpen startCol={"#8C98F6"} endCol={"#6172F3"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 3,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowOpen} alt="q" />
              </div>
            </PriHideNav>
          ) : themeKeys.primary === "#F63D68" ? (
            <PriHideNav onClick={handleClose}>
              <NavHandleOpen startCol={"#FD6F8E"} endCol={"#F63D68"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 3,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowOpen} alt="q" />
              </div>
            </PriHideNav>
          ) : themeKeys.primary === "#4A5578" ? (
            <PriHideNav onClick={handleClose}>
              <NavHandleOpen startCol={"#707892"} endCol={"#4A5578"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 3,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowOpen} alt="q" />
              </div>
            </PriHideNav>
          ) : themeKeys.primary === "#15B79E" ? (
            <PriHideNav onClick={handleClose}>
              <NavHandleOpen startCol={"#2ED3B7"} endCol={"#15B79E"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 3,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowOpen} alt="q" />
              </div>
            </PriHideNav>
          ) : themeKeys.primary === "#1849a9" ? (
            <PriHideNav onClick={handleClose}>
              <NavHandleOpen startCol={"#486ebb"} endCol={"#1849a9"} />
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 3,
                  position: "absolute",
                  top: "0",
                }}
              >
                <img src={ArrowOpen} alt="q" />
              </div>
            </PriHideNav>
          ) : null}
          <Title
            txtColor={
              themeKeys.primary === "#2E90FA"
                ? "linear-gradient(to right, #0f7cda, #0a83eb, #289aef)"
                : themeKeys.primary
            }
          >
            SECTION LIST
          </Title>

          {props.first && (
            <Link to={props.class1} smooth={true} duration={500}>
              <Name hover={themeKeys.lightVersion}>{props.first}</Name>
            </Link>
          )}
          {props.second && (
            <Link to={props.class2} smooth={true} duration={500}>
              <Name hover={themeKeys.lightVersion}>{props.second}</Name>
            </Link>
          )}
          {props.third && (
            <Link to={props.class3} smooth={true} duration={500}>
              <Name hover={themeKeys.lightVersion}>{props.third}</Name>
            </Link>
          )}
          {props.fourth && (
            <Link to={props.class4} smooth={true} duration={500}>
              <Name hover={themeKeys.lightVersion}>{props.fourth}</Name>
            </Link>
          )}
          {props.fifth && (
            <Link to={props.class5} smooth={true} duration={500}>
              <Name hover={themeKeys.lightVersion}>{props.fifth}</Name>
            </Link>
          )}
          {props.sixth && (
            <Link to={props.class6} smooth={true} duration={500}>
              <Name hover={themeKeys.lightVersion}>{props.sixth}</Name>
            </Link>
          )}
          {props.seventh && (
            <Link to={props.class7} smooth={true} duration={500}>
              <Name hover={themeKeys.lightVersion}>{props.seventh}</Name>
            </Link>
          )}
          {props.eighth && (
            <Link to={props.class8} smooth={true} duration={500}>
              <Name hover={themeKeys.lightVersion}>{props.eighth}</Name>
            </Link>
          )}
          {props.ninth && (
            <Link to={props.class9} smooth={true} duration={500}>
              <Name hover={themeKeys.lightVersion}>{props.ninth}</Name>
            </Link>
          )}
          {props.tenth && (
            <Link to={props.class10} smooth={true} duration={500}>
              <Name hover={themeKeys.lightVersion}>{props.tenth}</Name>
            </Link>
          )}
          {props.eleven && (
            <Link to={props.class10} smooth={true} duration={500}>
              <Name hover={themeKeys.lightVersion}>{props.eleven}</Name>
            </Link>
          )}
        </Wrapper>
      ) : null}
    </Wrap>
  );
};

export default NewScreensNav;
