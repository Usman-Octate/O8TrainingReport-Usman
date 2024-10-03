import React, { useState } from "react";
import styled from "styled-components";
import Arrow from "../../assets2/DashboardHeaderIcons/BreadCrumbArrow.svg";
import SearchIcon from "../../assets2/DashboardHeaderIcons/SearchIcon.svg";
import Max from "../../assets2/DashboardHeaderIcons/FullScreenIcon.svg";
import Close from "../../assets2/DashboardHeaderIcons/CloseIcon.svg";
import { useSelector } from "react-redux";
import Modal from "./ThemeModal/ProfileContainer";
import ThemeModal from "./ThemeModal/ThemeContainer";
import { useAppContext } from "../../context/AppProvider";
import { Bell } from "../SVGicons/Bell";
import ThemeContainer from "./ThemeModal/ThemeContainer";
import ProfileContainer from "./ThemeModal/ProfileContainer";
const Main = styled.div`
  /* padding: 0 16px; */
  /* width: 96.5vw; */
  min-width: ${(props) => (props.fixWidth ? "20.2rem" : "52.5rem")};
`;
const NavigationHeader = styled.div`
  padding: 8px 0px 2px 0px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
    font-size: 10px;
  }
`;
const Head = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => props.color};
  @media (max-width: 600px) {
    font-size: ${(props) => (props.fixWidth ? "22px" : "18px")};
  }
`;

const Btn1 = styled.div`
  cursor: pointer;
`;
const SearchBarContainer = styled.div`
  margin-right: 6rem;
`;

const SearchBar = styled.input`
  padding: 7px 40px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  width: 100%;
  background: url(${SearchIcon}) no-repeat 5% center;
  background-size: 16px 16px;
  @media (max-width: 600px) {
    padding: 5px 35px;
    font-size: 10px;
  }
  &:focus,
  &:active {
    border: 2.5px solid #157bea;
    outline: none;
  }
`;
const H2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 430px) {
    flex-direction: ${(props) => (props.fixWidth ? "row" : "column")};
    align-items: start;
  }
`;
const NavTitle = styled.div`
  color: #7d8398;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const NavActiveTitle = styled.div`
  color: ${(props) => props.color};
`;
const NavDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const CloseDiv = styled.div`
  display: flex;
  gap: 5px;
`;
const UserIcon = styled.div`
  background-color: ${(props) => props.bgColor};
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  width: 35px;
  cursor: pointer;
  height: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 100px;
  transition: all 0.5s ease;
  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
const Image = styled.div`
  @media (max-width: 600px) {
    img {
      width: 5px;
    }
  }
`;
const SearchAndIconsDiv = styled.div`
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: space-between;

  @media (max-width: 430px) {
    width: ${(props) => (props.fixWidth ? "" : "100%")};
    /* min-width: max-content; */
  }
`;
const Wrap = styled.div`
  position: absolute;
  z-index: 10;
  right: 15px;
  top: 79px;
`;
const Title1 = styled.div`
  cursor: pointer;
  &:hover {
    color: #636882;
    font-weight: 410;
  }
`;
const Header = (props) => {
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const [view, setView] = useState(false);
  const { value, setValue } = useAppContext();
  const [onVal, setOnVal] = useState(false);

  const HandleChange = (e) => {
    setOnVal(e.target.value);
  };

  const HandleOnChange = () => {
    setView(!view);
    setValue(true);
  };
  const handleBread = (x) => {
    console.log(x, "as");
    props.onBreadcrumbClick(x);
  };
  return (
    <Main fixWidth={props.fixWidth}>
      <NavigationHeader>
        <NavDiv>
          {props.firstNav ? (
            <NavTitle>
              <Title1 onClick={() => handleBread(props.firstNav)}>
                {props.firstNav}
              </Title1>
              {/* <Image> */}
              <img src={Arrow} alt="Nav" />
              {/* </Image> */}
            </NavTitle>
          ) : (
            ""
          )}
          {props.secNav ? (
            <NavTitle>
              <Title1 onClick={() => handleBread(props.secNav)}>
                {props.secNav}
              </Title1>

              <img src={Arrow} alt="Nav" />
            </NavTitle>
          ) : (
            ""
          )}

          {props.thirdNav ? (
            <NavTitle>
              <Title1 onClick={() => handleBread(props.thirdNav)}>
                {props.thirdNav}
              </Title1>

              <img src={Arrow} alt="Nav" />
            </NavTitle>
          ) : (
            ""
          )}
          {props.fourthNav ? (
            <NavTitle>
              <Title1 onClick={() => handleBread(props.fourthNav)}>
                {props.fourthNav}
              </Title1>

              <img src={Arrow} alt="Nav" />
            </NavTitle>
          ) : (
            ""
          )}
          <NavActiveTitle color={"#827CA3"}>{props.navActive}</NavActiveTitle>
        </NavDiv>

        {/* <CloseDiv>
          <Btn1>
            <img src={Max} alt="q" />
          </Btn1>
          <Btn1>
            <img src={Close} alt="q" />
          </Btn1>
        </CloseDiv> */}
      </NavigationHeader>
      <H2 fixWidth={props.fixWidth}>
        <Head color={themeKeys.primary}>{props.title}</Head>
        <SearchAndIconsDiv fixWidth={props.fixWidth}>
          <SearchBarContainer>
            <SearchBar
              type="text"
              placeholder="Search for Data, Menu or Transactions"
              onChange={HandleChange}
            />
          </SearchBarContainer>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {/* <img src={Bell} style={{ width: 18, height: 25 }} alt="q" /> */}
            <Bell fill={themeKeys.primary} />
            <UserIcon
              bgColor={themeKeys.primary}
              hoverColor={themeKeys.darkHover}
              onClick={HandleOnChange}
            >
              JA
            </UserIcon>
          </div>
        </SearchAndIconsDiv>
      </H2>
      {view ? (
        <Wrap>
          {/* {value === "Theme Modal" ? <ThemeContainer /> : <ProfileContainer />} */}
          <ProfileContainer />
        </Wrap>
      ) : null}
    </Main>
  );
};

export default Header;
